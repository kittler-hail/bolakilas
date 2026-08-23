/* =========================================================
   BOLAKILAS — FETCH PELATIH & PRESTASI OTOMATIS
   =========================================================
   Mengambil data pelatih (nama, foto, kebangsaan, umur) dari
   API-Football (/coachs) untuk SEMUA tim di liga-liga yang dicakup
   situs ini (LEAGUES, sama seperti fetch-squads.js/fetch-transfers.js
   — pakai ulang fetchAllTeams() dari fetch-schedule.js, DRY), plus
   beberapa gelar juara terakhir pelatih itu (/trophies) — lalu
   menulis ulang coaches.js.

   CATATAN SOAL /trophies: endpoint ini per PEMAIN/PELATIH, API-Football
   TIDAK punya endpoint "trophies per klub" langsung — jadi yang
   ditampilkan di sini adalah prestasi PELATIHNYA (karier pribadinya di
   klub mana pun), bukan daftar juara klub itu sendiri sepanjang
   sejarah. Sudah dijelaskan juga di UI (lihat team-profile.js).

   Skuad/pelatih jarang berubah di luar musim transfer, jadi cukup
   dijalankan mingguan (lihat .github/workflows/update-coaches.yml).

   CARA PAKAI MANUAL:
     $env:API_FOOTBALL_KEY = "API-KEY-KAMU"
     node fetch-coaches.js
   ========================================================= */

const fs = require("fs");
const path = require("path");
const { mapWithConcurrency, apiGet, slugifyTeamName, FETCH_CONCURRENCY, fetchCurrentSeasons, fetchAllTeams, LEAGUES } = require("./fetch-schedule.js");

const OUTPUT_PATH = path.join(__dirname, "coaches.js");
const MAX_TROPHIES = 5; // maksimal berapa gelar "Winner" terakhir disimpan per pelatih

async function fetchCoachForTeam(teamId) {
  try {
    const json = await apiGet(`/coachs?team=${teamId}`);
    const entries = Array.isArray(json.response) ? json.response : [];
    // /coachs?team= bisa mengembalikan lebih dari satu (mantan pelatih
    // ikut kebawa) — yang PALING RELEVAN adalah entri dengan career
    // paling akhir yang belum ada tanggal `end` (masih menjabat).
    const current = entries.find(c => (c.career || []).some(c2 => c2.team?.id === teamId && !c2.end)) || entries[0];
    return current || null;
  } catch (err) {
    console.warn(`  gagal ambil pelatih tim ${teamId}: ${err.message}`);
    return null;
  }
}

async function fetchTrophiesForCoach(coachId) {
  try {
    const json = await apiGet(`/trophies?coach=${coachId}`);
    const entries = Array.isArray(json.response) ? json.response : [];
    return entries
      .filter(t => (t.place || "").toLowerCase() === "winner")
      .slice(0, MAX_TROPHIES)
      .map(t => ({ league: t.league || "", season: t.season || "" }));
  } catch (err) {
    console.warn(`  gagal ambil trofi pelatih ${coachId}: ${err.message}`);
    return [];
  }
}

async function main() {
  if (!process.env.API_FOOTBALL_KEY) {
    console.error("ERROR: env var API_FOOTBALL_KEY belum diset. Lihat catatan CARA PAKAI di atas file ini.");
    process.exit(1);
  }

  console.log(`Mengambil daftar tim untuk ${LEAGUES.length} liga...`);
  const seasonMap = await fetchCurrentSeasons();
  const teamList = await fetchAllTeams(seasonMap);
  console.log(`Total ${teamList.length} tim unik. Mengambil pelatih & prestasi tiap tim...`);

  const result = {};
  let okCount = 0;

  await mapWithConcurrency(teamList, FETCH_CONCURRENCY, async (t) => {
    const coach = await fetchCoachForTeam(t.id);
    if (!coach || !coach.name) return;

    const trophies = coach.id ? await fetchTrophiesForCoach(coach.id) : [];

    result[slugifyTeamName(t.name)] = {
      name: coach.name,
      photo: coach.photo || "",
      nationality: coach.nationality || "",
      age: typeof coach.age === "number" ? coach.age : null,
      trophies
    };
    okCount++;
  });

  const header = `/* =========================================================
   BOLAKILAS — PELATIH & PRESTASI
   File ini di-generate OTOMATIS oleh fetch-coaches.js (sumber data:
   API-Football v3) pada ${new Date().toISOString()}.
   Jangan diedit manual — akan tertimpa tiap run mingguan.

   Kunci objek = slug nama tim (lihat slugifyTeamName di
   fetch-schedule.js/script.js). Field \`trophies\` = gelar JUARA
   pribadi pelatihnya (karier, bukan cuma di klub ini) — API-Football
   tidak punya data "juara klub" langsung, lihat catatan di
   fetch-coaches.js.
   ========================================================= */\n\n`;

  const body = `const teamCoaches = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_PATH, header + body, "utf8");

  console.log(`\nSelesai: ${okCount}/${teamList.length} tim berhasil ditulis ke coaches.js`);
}

main().catch(err => {
  console.error("Gagal fatal:", err);
  process.exit(1);
});

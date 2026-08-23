/* =========================================================
   BOLAKILAS — FETCH SKUAD PEMAIN OTOMATIS
   =========================================================
   Mengambil skuad pemain (nama, posisi, nomor punggung, umur, foto)
   dari API-Football (api-sports.io) untuk SEMUA tim di liga-liga
   yang dicakup situs ini (lihat LEAGUES di fetch-schedule.js — satu
   sumber kebenaran yang sama dipakai jadwal & skuad, DRY), lalu
   menulis ulang squads.js.

   Dulu skuad dibatasi ke ~25 tim besar (PRIORITY_TEAMS) supaya hemat
   kuota gratis (100 request/hari, 10 request/menit) — pembatasan itu
   sudah tidak relevan lagi sekarang plan-nya berbayar (lihat kuota di
   README-DEPLOY.md), jadi semua tim di liga yang dicakup diambil
   skuadnya. Skuad jarang berubah di luar musim transfer, jadi cukup
   dijalankan mingguan (lihat .github/workflows/update-squads.yml).

   CARA PAKAI MANUAL:
     1. Salin API key dari https://dashboard.api-football.com
     2. Jalankan (Windows PowerShell):
          $env:API_FOOTBALL_KEY = "API-KEY-KAMU"
          node fetch-squads.js

   OTOMATISASI: GitHub Actions (.github/workflows/update-squads.yml)
   menjalankan script ini mingguan. Tambahkan API key sebagai secret
   repo bernama API_FOOTBALL_KEY (Settings → Secrets and variables →
   Actions → New repository secret) — JANGAN tulis key langsung di
   file ini atau commit ke repo.

   ---------------------------------------------------------
   PENTING SOAL PENCOCOKAN NAMA TIM
   squads.js menyimpan skuad memakai KUNCI berupa slug nama tim (huruf
   kecil, tanpa aksen/spasi — sama persis dengan slugifyTeamName() di
   script.js/fetch-schedule.js), BUKAN nama mentah. Karena nama tim di
   sini datang dari API-Football YANG SAMA dengan sumber jadwal
   (fetch-schedule.js, sejak migrasi dari ESPN), slug-nya otomatis
   cocok satu sama lain — tidak perlu lagi menebak ejaan pencarian
   manual seperti versi PRIORITY_TEAMS/`search` yang lama.
   ========================================================= */

const fs = require("fs");
const path = require("path");
const { LEAGUES, API_BASE, apiGet, mapWithConcurrency, slugifyTeamName, FETCH_CONCURRENCY, fetchCurrentSeasons, fetchAllTeams } = require("./fetch-schedule.js");

const OUTPUT_PATH = path.join(__dirname, "squads.js");

async function fetchSquad(teamId) {
  const json = await apiGet(`/players/squads?team=${teamId}`);
  const entry = Array.isArray(json.response) ? json.response[0] : null;
  if (!entry || !Array.isArray(entry.players)) return [];
  return entry.players.map(p => ({
    name: p.name,
    position: p.position || "Lainnya",
    number: typeof p.number === "number" ? p.number : null,
    age: typeof p.age === "number" ? p.age : null,
    photo: p.photo || ""
  }));
}

async function main() {
  if (!process.env.API_FOOTBALL_KEY) {
    console.error("ERROR: env var API_FOOTBALL_KEY belum diset. Lihat catatan CARA PAKAI di atas file ini.");
    process.exit(1);
  }

  console.log(`Mengambil daftar tim untuk ${LEAGUES.length} liga (${API_BASE})...`);
  const seasonMap = await fetchCurrentSeasons();
  const teamList = await fetchAllTeams(seasonMap);
  console.log(`Total ${teamList.length} tim unik. Mengambil skuad tiap tim...`);

  const result = {};
  let okCount = 0;
  let emptyCount = 0;

  await mapWithConcurrency(teamList, FETCH_CONCURRENCY, async (t) => {
    try {
      const squad = await fetchSquad(t.id);
      if (!squad.length) {
        emptyCount++;
        return;
      }
      result[slugifyTeamName(t.name)] = squad;
      okCount++;
    } catch (err) {
      console.warn(`  [gagal] ${t.name}: ${err.message}`);
    }
  });

  const header = `/* =========================================================
   BOLAKILAS — SKUAD PEMAIN
   File ini di-generate OTOMATIS oleh fetch-squads.js (sumber data:
   API-Football v3) pada ${new Date().toISOString()}.
   Jangan diedit manual — akan tertimpa tiap run mingguan.

   Kunci objek = slug nama tim (lihat slugifyTeamName di
   fetch-schedule.js/script.js), BUKAN nama mentah. Mencakup semua tim
   di liga-liga yang dicakup situs ini (lihat LEAGUES di
   fetch-schedule.js) — tim di luar itu akan menampilkan pesan "belum
   tersedia" di modal profil tim.
   ========================================================= */\n\n`;

  const body = `const teamSquads = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_PATH, header + body, "utf8");

  console.log(`\nSelesai: ${okCount} tim berhasil, ${emptyCount} tim skuadnya kosong (dari ${teamList.length} tim unik) ditulis ke squads.js`);
}

main().catch(err => {
  console.error("Gagal fatal:", err);
  process.exit(1);
});

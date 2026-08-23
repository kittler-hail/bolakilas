/* =========================================================
   BOLAKILAS — FETCH BERITA TRANSFER OTOMATIS
   =========================================================
   Mengambil transfer pemain TERBARU (dalam RECENT_DAYS hari terakhir)
   dari API-Football (/transfers) untuk SEMUA tim di liga-liga yang
   dicakup situs ini (LEAGUES, sama seperti fetch-squads.js — pakai
   ulang fetchAllTeams() dari fetch-schedule.js, DRY), lalu menulis
   ulang transfers.js.

   Kenapa file TERPISAH dari data.js (bukan field "news" langsung)?
   fetch-schedule.js jalan TIAP JAM dan "mempertahankan" field news
   apa adanya dari run sebelumnya (lihat komentar di sana) — supaya
   dua cron job (jadwal tiap jam vs transfer mingguan) tidak
   berebutan menimpa field yang sama di data.js, transfer disimpan di
   file sendiri (pola yang sama seperti squads.js). script.js
   menggabungkan transferNews ke atas data.news saat render (lihat
   renderNews()/renderTicker()), jadi dari sudut pandang pengunjung
   tetap terlihat seperti satu daftar berita.

   Skuad jarang berubah di luar musim transfer — begitu juga transfer,
   jadi cukup dijalankan mingguan (lihat
   .github/workflows/update-transfers.yml), sama seperti fetch-squads.js.

   CARA PAKAI MANUAL:
     $env:API_FOOTBALL_KEY = "API-KEY-KAMU"
     node fetch-transfers.js
   ========================================================= */

const fs = require("fs");
const path = require("path");
const { LEAGUES, mapWithConcurrency, apiGet, FETCH_CONCURRENCY, fetchCurrentSeasons, fetchAllTeams } = require("./fetch-schedule.js");

const OUTPUT_PATH = path.join(__dirname, "transfers.js");
const RECENT_DAYS = 45; // transfer dalam X hari terakhir dianggap "berita"; lebih lama dari itu diabaikan (histori lama, bukan kabar baru)
const MAX_ITEMS = 30;   // maksimal berapa item transfer disimpan (terbaru duluan)

function daysAgo(dateStr) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  if (isNaN(d.getTime())) return Infinity;
  return (Date.now() - d.getTime()) / 86400000;
}

function formatDateID(dateStr) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  if (isNaN(d.getTime())) return dateStr;
  const pad = n => String(n).padStart(2, "0");
  return `${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`;
}

async function fetchTransfersForTeam(teamId) {
  try {
    const json = await apiGet(`/transfers?team=${teamId}`);
    return Array.isArray(json.response) ? json.response : [];
  } catch (err) {
    console.warn(`  gagal ambil transfer tim ${teamId}: ${err.message}`);
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
  console.log(`Total ${teamList.length} tim unik. Mengambil transfer tiap tim (cuma ${RECENT_DAYS} hari terakhir yang disimpan)...`);

  const seenKeys = new Set();
  const recent = [];
  let teamsOk = 0;

  await mapWithConcurrency(teamList, FETCH_CONCURRENCY, async (t) => {
    const entries = await fetchTransfersForTeam(t.id);
    if (entries.length) teamsOk++;
    entries.forEach(entry => {
      const playerName = entry.player?.name;
      const playerId = entry.player?.id;
      if (!playerName || !playerId) return;
      (Array.isArray(entry.transfers) ? entry.transfers : []).forEach(tr => {
        if (!tr.date || daysAgo(tr.date) > RECENT_DAYS) return;
        const teamIn = tr.teams?.in?.name;
        const teamOut = tr.teams?.out?.name;
        if (!teamIn || !teamOut) return;
        // Transfer antar 2 tim yang SAMA-SAMA dicakup situs ini akan
        // muncul di hasil fetch KEDUA tim itu — dedupe lewat kunci
        // pemain+tanggal+tim supaya tidak dobel di daftar akhir.
        const key = `${playerId}|${tr.date}|${teamIn}|${teamOut}`;
        if (seenKeys.has(key)) return;
        seenKeys.add(key);
        recent.push({
          key, player: playerName, teamIn, teamOut, type: tr.type || "", date: tr.date,
          // Logo tim tujuan — dipakai sebagai "thumbnail" berita transfer
          // (renderNews() di script.js sudah bisa nampilin field `image`
          // apa pun, jadi tinggal diisi, tidak perlu ubah kode render).
          teamInLogo: tr.teams?.in?.logo || ""
        });
      });
    });
  });

  recent.sort((a, b) => b.date.localeCompare(a.date));
  const trimmed = recent.slice(0, MAX_ITEMS);

  const transferNews = trimmed.map(tr => {
    const feeNote = tr.type && tr.type !== "N/A" ? ` (${tr.type})` : "";
    return {
      key: tr.key,
      tag: "Transfer",
      title: `${tr.player} pindah dari ${tr.teamOut} ke ${tr.teamIn}`,
      desc: `Transfer resmi tercatat di API-Football${feeNote}.`,
      time: formatDateID(tr.date),
      // `logo` (bukan `image`) — renderNews() di script.js menampilkan
      // ini beda dari foto biasa (contain + padding di atas panel
      // gradasi, bukan cover penuh) supaya lambang klub tidak
      // terpotong/gepeng kalau dipaksa isi kotak foto 16:10.
      logo: tr.teamInLogo || ""
    };
  });

  const header = `/* =========================================================
   BOLAKILAS — BERITA TRANSFER
   File ini di-generate OTOMATIS oleh fetch-transfers.js (sumber data:
   API-Football v3) pada ${new Date().toISOString()}.
   Jangan diedit manual — akan tertimpa tiap run mingguan.

   Berisi transfer ${RECENT_DAYS} hari terakhir (dari tim-tim di liga
   yang dicakup situs ini — lihat LEAGUES di fetch-schedule.js),
   digabungkan ke atas data.news oleh script.js saat render (lihat
   renderNews()/renderTicker()) — BUKAN field terpisah yang perlu
   diintegrasikan manual.
   ========================================================= */\n\n`;

  const body = `const transferNews = ${JSON.stringify(transferNews, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_PATH, header + body, "utf8");

  console.log(`\nSelesai: ${transferNews.length} berita transfer (dari ${teamsOk}/${teamList.length} tim yang berhasil diambil) ditulis ke transfers.js`);
}

main().catch(err => {
  console.error("Gagal fatal:", err);
  process.exit(1);
});

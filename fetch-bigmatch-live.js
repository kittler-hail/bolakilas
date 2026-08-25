/* =========================================================
   BOLAKILAS — FETCH STATISTIK LIVE & SUSUNAN PEMAIN BIG MATCH
   =========================================================
   Script TERPISAH dari fetch-schedule.js — dijalankan lebih SERING
   (tiap 5 menit, lihat .github/workflows/update-bigmatch-live.yml)
   supaya statistik live (possession/shots/corners/dst) & susunan
   pemain Big Match terasa "hidup", TANPA perlu memanggil API-Football
   (key berbayar) langsung dari browser pengunjung — lihat catatan di
   LIVE ENGINE (script.js) soal kenapa itu tidak aman.

   Cuma memproses SATU fixture: Big Match hari ini, dikenali lewat
   data.js (field bigMatch.apiFixtureId/homeTeamId/awayTeamId, ditulis
   fetch-schedule.js — lihat buildBigMatch()) — bukan semua
   pertandingan, jadi biayanya kecil (maksimal 2 request API-Football
   per run kalau ada Big Match yang relevan, 0 kalau tidak).

   OUTPUT: bigmatch-live.json — JSON MURNI (beda dari data.js/squads.js
   yang berupa file `const x = {...}`), sengaja begitu supaya front-end
   (bm-live-pitch.js, bm-lineups.js) bisa fetch() ulang secara periodik
   tanpa reload halaman & tanpa perlu inject <script> tag berulang.

   CARA PAKAI MANUAL:
     $env:API_FOOTBALL_KEY = "API-KEY-KAMU"
     node fetch-bigmatch-live.js
   ========================================================= */

const fs = require("fs");
const path = require("path");
const { apiGet, parseExistingData, API_STATUS_MAP } = require("./fetch-schedule.js");

const DATA_PATH = path.join(__dirname, "data.js");
const OUTPUT_PATH = path.join(__dirname, "bigmatch-live.json");

function pad(n) { return String(n).padStart(2, "0"); }
function nowWIBLabel() {
  const d = new Date(Date.now() + 7 * 60 * 60 * 1000);
  return `${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)}/${d.getUTCFullYear()} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())} WIB`;
}

// Status yang masih "live-ish" (perlu statistik live) — cermin dari
// LIVE_STATUS_LABELS di script.js, ditambah SUSP/INT.
const LIVE_ISH = new Set(["1H", "HT", "2H", "ET", "PEN", "SUSP", "INT"]);

function statValue(stats, type) {
  const item = Array.isArray(stats) ? stats.find(s => s.type === type) : null;
  if (!item || item.value == null) return null;
  const raw = String(item.value).replace("%", "").trim();
  const num = parseFloat(raw);
  return isNaN(num) ? null : num;
}

function mapTeamStatistics(block) {
  return {
    possession: statValue(block?.statistics, "Ball Possession"),
    shotsTotal: statValue(block?.statistics, "Total Shots"),
    shotsOnTarget: statValue(block?.statistics, "Shots on Goal"),
    corners: statValue(block?.statistics, "Corner Kicks"),
    fouls: statValue(block?.statistics, "Fouls"),
    offsides: statValue(block?.statistics, "Offsides"),
    yellowCards: statValue(block?.statistics, "Yellow Cards"),
    redCards: statValue(block?.statistics, "Red Cards"),
    // Ditambahkan supaya proyeksi momentum (bm-live-pitch.js) bisa pakai
    // sinyal "kualitas tekanan" (bukan cuma possession/shots mentah) —
    // tembakan dalam kotak penalti = peluang lebih berbahaya daripada
    // tembakan jarak jauh, akurasi umpan = indikator penguasaan babak
    // build-up. Field ini TIDAK selalu ada (tergantung liga/kompetisi di
    // API-Football) — statValue() sudah return null kalau memang tidak
    // tersedia, jadi tetap aman dipakai (lihat weightedShare() di
    // bm-live-pitch.js yang skip dimensi manapun yang null).
    shotsInsidebox: statValue(block?.statistics, "Shots insidebox"),
    shotsOutsidebox: statValue(block?.statistics, "Shots outsidebox"),
    passesTotal: statValue(block?.statistics, "Total passes"),
    passesAccurate: statValue(block?.statistics, "Passes accurate"),
    passesPct: statValue(block?.statistics, "Passes %")
  };
}

const POS_LABEL = { G: "Kiper", D: "Bek", M: "Gelandang", F: "Penyerang" };

function mapPlayer(entry) {
  const p = entry?.player;
  if (!p || !p.name) return null;
  return { number: p.number ?? null, name: p.name, position: POS_LABEL[p.pos] || p.pos || "" };
}

function mapTeamLineup(block) {
  if (!block) return null;
  const startXI = (Array.isArray(block.startXI) ? block.startXI : []).map(mapPlayer).filter(Boolean);
  if (!startXI.length) return null; // susunan pemain belum dirilis API-Football
  const substitutes = (Array.isArray(block.substitutes) ? block.substitutes : []).map(mapPlayer).filter(Boolean);
  return { formation: block.formation || "", coach: block.coach?.name || "", startXI, substitutes };
}

// Rating berubah terus selama laga berjalan, TAPI struktur susunan
// pemain (siapa starter/cadangan) tidak — jadi lineups di-cache SEKALI
// (lihat runFetchBigMatchLive), sementara rating di-refresh & digabung
// ulang ke cache itu tiap run lewat fungsi ini (mutasi in-place).
function applyRatingsToLineups(lineups, ratingsByName) {
  if (!lineups || !ratingsByName || !ratingsByName.size) return;
  [lineups.home, lineups.away].forEach(team => {
    if (!team) return;
    [...(team.startXI || []), ...(team.substitutes || [])].forEach(p => {
      const rating = ratingsByName.get(p.name);
      if (rating) p.rating = rating; else delete p.rating;
    });
  });
}

function pickByTeamId(blocks, teamId) {
  return (Array.isArray(blocks) ? blocks : []).find(b => b?.team?.id === teamId) || null;
}

// Dipakai juga buat mengambil venue.id fixture ini (lihat fetchVenue) —
// jadi 1 request ini dipakai dobel (status terbaru + ID venue), bukan
// 2 request terpisah.
async function fetchFreshFixture(fixtureId) {
  try {
    const json = await apiGet(`/fixtures?id=${fixtureId}`);
    const fx = json.response?.[0];
    const raw = fx?.fixture?.status?.short;
    return {
      statusCode: raw ? (API_STATUS_MAP[raw] || "NS") : null,
      venueId: fx?.fixture?.venue?.id ?? null,
      // Fallback kalau venue.id null (API-Football tidak punya semua
      // venue terdaftar dengan ID resmi — venue.name/city tetap
      // biasanya ada meski itu terjadi) — dipakai fetchVenue() supaya
      // tetap bisa tampil kota/nama stadion walau tanpa kapasitas/foto.
      fallbackVenueName: fx?.fixture?.venue?.name || "",
      fallbackVenueCity: fx?.fixture?.venue?.city || ""
    };
  } catch (err) {
    console.warn(`  gagal cek status terbaru fixture ${fixtureId}: ${err.message}`);
    return { statusCode: null, venueId: null, fallbackVenueName: "", fallbackVenueCity: "" };
  }
}

// Rating pemain per pertandingan (/fixtures/players) — dipetakan lewat
// NAMA pemain (bukan ID) supaya gampang digabung ke hasil
// /fixtures/lineups yang juga dikunci nama, tanpa perlu menyimpan ID
// pemain di mana-mana cuma buat ini.
async function fetchPlayerRatings(fixtureId) {
  const ratingsByName = new Map();
  try {
    const json = await apiGet(`/fixtures/players?fixture=${fixtureId}`);
    const teams = Array.isArray(json.response) ? json.response : [];
    teams.forEach(t => {
      (Array.isArray(t.players) ? t.players : []).forEach(p => {
        const name = p.player?.name;
        const ratingRaw = p.statistics?.[0]?.games?.rating;
        const rating = ratingRaw != null ? parseFloat(ratingRaw).toFixed(1) : null;
        if (name && rating && !isNaN(parseFloat(rating))) ratingsByName.set(name, rating);
      });
    });
  } catch (err) {
    console.warn(`  gagal ambil rating pemain fixture ${fixtureId}: ${err.message}`);
  }
  return ratingsByName;
}

async function fetchVenue(venueId) {
  if (!venueId) return null;
  try {
    const json = await apiGet(`/venues?id=${venueId}`);
    const v = json.response?.[0];
    if (!v) return null;
    return { name: v.name || "", city: v.city || "", capacity: v.capacity || null, image: v.image || "" };
  } catch (err) {
    console.warn(`  gagal ambil data venue ${venueId}: ${err.message}`);
    return null;
  }
}

// Odds pasar (1 bookmaker pertama yang tersedia — bukan rata-rata
// banyak bookmaker, disengaja supaya jelas sumbernya lewat field
// `bookmaker`) — MURNI informasi, front-end WAJIB menampilkan
// disclaimer ini bukan ajakan bertaruh (lihat bm-odds.js).
async function fetchOdds(fixtureId) {
  try {
    const json = await apiGet(`/odds?fixture=${fixtureId}`);
    const entry = json.response?.[0];
    const bookmaker = entry?.bookmakers?.[0];
    if (!bookmaker) return null;
    const market = bookmaker.bets?.find(b => b.name === "Match Winner");
    if (!market) return null;
    const find = label => market.values?.find(v => v.value === label)?.odd || null;
    const home = find("Home");
    const draw = find("Draw");
    const away = find("Away");
    if (!home || !draw || !away) return null;
    return { bookmaker: bookmaker.name || "Bookmaker", home, draw, away };
  } catch (err) {
    console.warn(`  gagal ambil odds fixture ${fixtureId}: ${err.message}`);
    return null;
  }
}

async function fetchStatistics(fixtureId, homeTeamId, awayTeamId) {
  try {
    const json = await apiGet(`/fixtures/statistics?fixture=${fixtureId}`);
    const blocks = Array.isArray(json.response) ? json.response : [];
    if (!blocks.length) return null;
    const home = mapTeamStatistics(pickByTeamId(blocks, homeTeamId));
    const away = mapTeamStatistics(pickByTeamId(blocks, awayTeamId));
    return { home, away };
  } catch (err) {
    console.warn(`  gagal ambil statistik fixture ${fixtureId}: ${err.message}`);
    return null;
  }
}

async function fetchLineups(fixtureId, homeTeamId, awayTeamId) {
  try {
    const json = await apiGet(`/fixtures/lineups?fixture=${fixtureId}`);
    const blocks = Array.isArray(json.response) ? json.response : [];
    if (!blocks.length) return null;
    const home = mapTeamLineup(pickByTeamId(blocks, homeTeamId));
    const away = mapTeamLineup(pickByTeamId(blocks, awayTeamId));
    if (!home && !away) return null;
    return { home, away };
  } catch (err) {
    console.warn(`  gagal ambil susunan pemain fixture ${fixtureId}: ${err.message}`);
    return null;
  }
}

const NOT_STARTED = new Set(["NS", "TBD", "POSTP", "CANC"]);

async function runFetchBigMatchLive({ loadData, loadExistingLive, saveOutput }) {
  if (!process.env.API_FOOTBALL_KEY) {
    throw new Error("env var API_FOOTBALL_KEY belum diset.");
  }

  const siteData = await loadData();
  const bm = siteData?.bigMatch;
  const existingLive = (await loadExistingLive()) || {};

  if (!bm || !bm.apiFixtureId || !bm.homeTeamId || !bm.awayTeamId) {
    console.log("Tidak ada Big Match dengan apiFixtureId hari ini — lewati (data.js belum di-generate versi baru, atau memang tidak ada Big Match).");
    return;
  }

  const fresh = await fetchFreshFixture(bm.apiFixtureId);
  const statusCode = fresh.statusCode || bm.statusCode || "NS";
  console.log(`Big Match: ${bm.home} vs ${bm.away} (fixture ${bm.apiFixtureId}) — status ${statusCode}`);

  // Cache dari run sebelumnya (lineups/venue/statistics/odds) HANYA
  // valid kalau masih untuk FIXTURE yang sama — kalau Big Match sudah
  // ganti laga sejak run terakhir (mis. pergantian hari, atau laga
  // lama selesai lalu terpilih laga lain), existingLive milik fixture
  // LAMA dan harus dibuang, bukan diwariskan ke payload fixture BARU
  // (dulu ini bug: venue/lineups laga kemarin bisa nyangkut di bawah
  // home/away laga baru, walau field home/away sendiri sudah benar).
  const sameFixtureAsCache = existingLive.fixtureId === bm.apiFixtureId;
  let statistics = sameFixtureAsCache ? (existingLive.statistics || null) : null;
  let lineups = sameFixtureAsCache ? (existingLive.lineups || null) : null;
  let venue = sameFixtureAsCache ? (existingLive.venue || null) : null;
  let odds = sameFixtureAsCache ? (existingLive.odds || null) : null;
  const hasStarted = !NOT_STARTED.has(statusCode);

  // Susunan pemain biasanya dirilis API-Football ~1 jam sebelum
  // kick-off dan STRUKTURNYA (siapa starter/cadangan) tidak berubah
  // lagi setelah itu — dicoba tiap run (murah, 1 request) selama
  // BELUM ada di cache, berhenti nyoba begitu sudah berhasil didapat.
  if (!lineups) {
    const freshLineups = await fetchLineups(bm.apiFixtureId, bm.homeTeamId, bm.awayTeamId);
    if (freshLineups) lineups = freshLineups;
  }

  // Rating pemain per pertandingan — beda dari struktur lineup di
  // atas, rating BERUBAH terus selama laga berjalan, jadi di-refresh
  // & digabung ulang tiap run (bukan cache-sekali) selama laga sudah
  // mulai (rating kosong/tidak berarti sebelum kick-off).
  if (lineups && hasStarted) {
    const ratingsByName = await fetchPlayerRatings(bm.apiFixtureId);
    applyRatingsToLineups(lineups, ratingsByName);
  }

  // Statistik live cuma relevan selagi laga berjalan (atau baru saja
  // selesai, buat menyimpan angka akhir) — di luar itu tidak usah
  // dipanggil (percuma, laga belum/tidak sedang berjalan).
  if (LIVE_ISH.has(statusCode) || statusCode === "FT") {
    const freshStats = await fetchStatistics(bm.apiFixtureId, bm.homeTeamId, bm.awayTeamId);
    if (freshStats) statistics = freshStats;
  }

  // Venue: detail (kapasitas/kota/foto) tidak berubah — cukup diambil
  // sekali per Big Match, dicache seperti lineups. Kalau API-Football
  // tidak punya venue.id resmi buat stadion ini (terjadi untuk
  // beberapa stadion, terutama liga kecil), tetap pakai nama/kota apa
  // adanya dari data fixture-nya sendiri (fallbackVenueName/City)
  // daripada kosong total.
  if (!venue) {
    if (fresh.venueId) {
      const freshVenue = await fetchVenue(fresh.venueId);
      if (freshVenue) venue = freshVenue;
    } else if (fresh.fallbackVenueName || fresh.fallbackVenueCity) {
      venue = { name: fresh.fallbackVenueName, city: fresh.fallbackVenueCity, capacity: null, image: "" };
    }
  }

  // Odds pasar: cuma masuk akal sebelum/selagi laga berjalan (bookmaker
  // biasanya kunci/hapus odds setelah itu) — dicoba selama BELUM
  // selesai, dipertahankan apa adanya begitu laga selesai (odds
  // terakhir sebelum kick-off/selama laga, bukan ditimpa kosong).
  if (statusCode !== "FT") {
    const freshOdds = await fetchOdds(bm.apiFixtureId);
    if (freshOdds) odds = freshOdds;
  }

  const payload = {
    fixtureId: bm.apiFixtureId,
    home: bm.home,
    away: bm.away,
    statusCode,
    updatedAt: nowWIBLabel(),
    statistics,
    lineups,
    venue,
    odds
  };

  await saveOutput(JSON.stringify(payload, null, 2));
  console.log(`Selesai. bigmatch-live.json diperbarui — statistik: ${statistics ? "ada" : "belum ada"}, susunan pemain: ${lineups ? "ada" : "belum ada"}, venue: ${venue ? "ada" : "belum ada"}, odds: ${odds ? "ada" : "belum ada"}.`);
}

// ---- Jalan sebagai CLI (node fetch-bigmatch-live.js) — baca/tulis file lokal ----
async function main() {
  await runFetchBigMatchLive({
    loadData: async () => {
      if (!fs.existsSync(DATA_PATH)) return null;
      return parseExistingData(fs.readFileSync(DATA_PATH, "utf8"));
    },
    loadExistingLive: async () => {
      if (!fs.existsSync(OUTPUT_PATH)) return null;
      try { return JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf8")); } catch { return null; }
    },
    saveOutput: async (content) => { fs.writeFileSync(OUTPUT_PATH, content, "utf8"); }
  });
}

if (require.main === module) {
  main().catch(err => {
    console.error("GAGAL:", err.message);
    process.exit(1);
  });
}

// Diekspos supaya netlify/functions/update-bigmatch-live.js bisa pakai
// ulang logic yang sama persis (cuma ganti cara baca data.js/simpan
// hasilnya — Netlify Blobs, bukan file lokal).
module.exports = { runFetchBigMatchLive };

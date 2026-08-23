/* =========================================================
   BOLAKILAS — FETCH JADWAL OTOMATIS
   =========================================================
   Mengambil jadwal, skor, status live, klasemen, prediksi, serta
   Head-to-Head & Form Tim Big Match (zona waktu WIB) dari API-Football
   v3 (https://v3.football.api-sports.io, plan berbayar), lalu menulis
   ulang data.js — tanpa menghapus data yang tidak di-fetch ulang tiap
   run (news, override manual Big Match, riwayat prediksi).

   CARA PAKAI MANUAL (sekali coba):
     $env:API_FOOTBALL_KEY = "API-KEY-KAMU"   (PowerShell)
     node fetch-schedule.js

   OTOMATISASI: lihat README-DEPLOY.md — GitHub Actions
   (.github/workflows/update-jadwal.yml) menjalankan script ini sesuai
   jadwal cron di server GitHub, jadi tidak perlu komputer lokal
   menyala. Butuh secret repo bernama API_FOOTBALL_KEY. Skor/status
   pertandingan yang SEDANG BERLANGSUNG dipantau terpisah, langsung
   dari browser tiap pengunjung (lihat blok LIVE ENGINE di script.js,
   sumbernya masih ESPN publik — lihat catatan di sana soal ini) —
   cron di sini cukup jadi baseline berkala, bukan satu-satunya sumber
   update live.

   ---------------------------------------------------------
   CATATAN JUJUR (baca sebelum menjalankan otomatis harian):

   - Jadwal, skor, status live, klasemen, H2H, & Form Tim: semuanya
     dari API-Football v3, endpoint resmi & terdokumentasi (bukan lagi
     endpoint publik ESPN yang tidak resmi) — jauh lebih stabil, tapi
     tetap butuh API key berbayar (lihat API_FOOTBALL_KEY di bawah).
   - Prediksi skor (bigMatch.prediction & match.prediction) SEKARANG
     dihitung dari endpoint /predictions API-Football yang sungguhan
     (persentase menang/seri/kalah + rata-rata gol 5 laga terakhir),
     bukan lagi heuristik hash deterministik. Skoreline tetap diturunkan
     (dibulatkan) dari data itu supaya format "H - A" yang sudah dipakai
     seluruh situs (termasuk rekam jejak akurasi prediksi) tidak berubah.
     Field odds/advice mentah juga disertakan (lihat scorelineFromPrediction)
     — script.js sudah punya hook match.odds/bigMatch.probability untuk ini.
     heuristicPrediction() dipertahankan HANYA sebagai fallback kalau
     panggilan /predictions gagal untuk laga tertentu.
   - Goals/cards (mc-events di kartu jadwal): dari /fixtures/events —
     tetap best-effort, sebab CAKUPAN datanya beda-beda per liga/musim
     (cek field coverage.fixtures.events di /leagues — liga besar
     biasanya lengkap, liga kecil/Liga 1 Indonesia kadang kosong). Itu
     keterbatasan cakupan data API, bukan bug.
   - Klasemen, H2H (/fixtures/headtohead), & Form Tim (/teams/statistics,
     field `form`) semuanya endpoint resmi API-Football — tidak perlu
     lagi coba-coba beberapa bentuk URL seperti versi ESPN sebelumnya.
   - Liga yang di-fetch dibatasi ke daftar kurasi di LEAGUES (bukan
     "semua liga sedunia" dari API-Football) — supaya jadwal tidak
     kebanjiran ratusan laga liga U19/wanita/reserve yang tidak
     relevan buat situs ini. Tinggal tambah entri baru di LEAGUES kalau
     mau menambah cakupan liga (quota harian plan berbayar jauh lebih
     dari cukup untuk itu).
   - League ID Liga 1 Indonesia SUDAH DIVERIFIKASI langsung ke API
     (274) — beda dari versi ESPN sebelumnya yang slug-nya belum pernah
     dicoba live (lihat TODO lama di LEAGUES).
   ========================================================= */

const fs = require("fs");
const path = require("path");

const OUTPUT_PATH = path.join(__dirname, "data.js");
const TIMEZONE = "Asia/Jakarta";
const WIB_OFFSET_MS = 7 * 60 * 60 * 1000; // WIB = UTC+7, tidak ada DST

// -----------------------------------------------------------
// KONFIGURASI YANG BISA DIUTAK-ATIK
// -----------------------------------------------------------
const UPCOMING_DAYS_AHEAD = 2;   // berapa hari ke depan yang di-fetch untuk tab "Akan Datang". 0 = matikan.
const HISTORY_DAYS_KEEP = 14;    // maksimal berapa hari riwayat disimpan di data.js sebelum yang terlama dibuang.
const RECENT_PREDICTIONS_KEEP = 20; // maksimal berapa item di recentPredictions.

// -----------------------------------------------------------
// API-FOOTBALL v3 — konfigurasi & helper dasar
// -----------------------------------------------------------
const API_BASE = "https://v3.football.api-sports.io";
const API_FOOTBALL_KEY = process.env.API_FOOTBALL_KEY || "";
// Kuota harian/menit plan berbayar jauh di atas kebutuhan run ini (lihat
// estimasi di README-DEPLOY.md), TAPI API-Football tetap punya batas
// burst per detik yang jauh lebih ketat daripada limit/menit-nya —
// concurrency terlalu tinggi (dicoba 8) memicu error "rateLimit: Too
// many requests" walau limit/menit & limit/hari masih jauh dari habis.
// 4 paralel + retry di bawah terbukti aman lewat uji coba langsung.
const FETCH_CONCURRENCY = 4;
const RATE_LIMIT_RETRIES = 4;
const RATE_LIMIT_BASE_DELAY_MS = 500;

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function apiGet(pathname, attempt = 1) {
  const res = await fetch(`${API_BASE}${pathname}`, {
    headers: { "x-apisports-key": API_FOOTBALL_KEY }
  });
  if (!res.ok) throw new Error(`API-Football HTTP ${res.status} untuk ${pathname}`);
  const json = await res.json();
  const errorCount = Array.isArray(json.errors) ? json.errors.length : Object.keys(json.errors || {}).length;
  if (errorCount) {
    const errText = JSON.stringify(json.errors);
    // Error rate-limit BUKAN error permanen (beda dari mis. param salah)
    // — coba ulang dengan jeda naik bertahap sebelum benar-benar menyerah.
    const isRateLimit = /ratelimit|too many requests/i.test(errText);
    if (isRateLimit && attempt <= RATE_LIMIT_RETRIES) {
      await sleep(RATE_LIMIT_BASE_DELAY_MS * attempt);
      return apiGet(pathname, attempt + 1);
    }
    throw new Error(`API-Football error (${pathname}): ${errText}`);
  }
  return json;
}

// Jalankan fn(item) atas seluruh items dengan maksimal `limit` request
// bersamaan — supaya run tidak menunggu ratusan fetch berurutan satu-satu,
// tapi juga tidak menembak semuanya sekaligus.
async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const i = cursor++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) || 0 }, worker));
  return results;
}

// -----------------------------------------------------------
// DAFTAR LIGA (satu sumber kebenaran: ID liga API-Football ↔ nama
// kanonik). PENTING: nama kanonik di sini HARUS SAMA PERSIS dengan
// MAJOR_LEAGUES / LEAGUE_WEIGHTS / BIGMATCH_PRIORITY_CLIENT di
// script.js untuk liga yang dipakai di kedua tempat (lihat
// MAJOR_LEAGUES_FOR_STANDINGS). ID didapat & diverifikasi lewat
// GET /leagues?search=... (lihat README-DEPLOY.md).
// -----------------------------------------------------------
const LEAGUES = [
  [2, "UEFA Champions League"],
  [3, "UEFA Europa League"],
  [848, "UEFA Europa Conference League"],
  [39, "Premier League"],
  [140, "LaLiga"],
  [135, "Serie A"],
  [78, "Bundesliga"],
  [61, "Ligue 1"],
  [253, "MLS"],
  [13, "Copa Libertadores"],
  [11, "Copa Sudamericana"],
  [262, "Liga MX"],
  [263, "Liga de Expansion MX"],
  [88, "Eredivisie"],
  [94, "Primeira Liga"],
  [203, "Super Lig"],
  [144, "Jupiler Pro League"],
  [179, "Scottish Premiership"],
  [274, "Liga 1 (Indonesia)"] // diverifikasi langsung ke API-Football, ID 274
];

// Liga yang ditampilkan di menu Klasemen — HARUS SAMA PERSIS dengan
// MAJOR_LEAGUES di script.js.
const MAJOR_LEAGUES_FOR_STANDINGS = [
  "Premier League", "LaLiga", "Serie A", "Bundesliga", "Ligue 1", "Liga 1 (Indonesia)"
];

const STANDINGS_LEAGUES = LEAGUES.filter(([, name]) => MAJOR_LEAGUES_FOR_STANDINGS.includes(name));

// Liga prioritas untuk dipilih jadi "Big Match" (urutan = prioritas)
const BIGMATCH_PRIORITY = [
  "UEFA Champions League", "UEFA Europa League", "UEFA Europa Conference League",
  "Premier League", "LaLiga", "Serie A", "Bundesliga", "Ligue 1",
  "Copa Libertadores", "MLS", "Liga MX", "Copa Sudamericana"
];

// -----------------------------------------------------------
// HELPERS TANGGAL / WAKTU
// -----------------------------------------------------------
function pad(n) { return String(n).padStart(2, "0"); }

// "Hari ini" (offsetDays dari SEKARANG, real-world) — dipakai SEKALI
// di awal main() untuk menentukan targetDateWIB. Jangan dipakai untuk
// menghitung tanggal relatif terhadap targetDateWIB (pakai
// addDaysToDateStr untuk itu), supaya rentang fetch tetap benar walau
// script-nya kebetulan jalan pas mendekati pergantian hari.
function wibDateString(offsetDays = 0) {
  const wibMs = Date.now() + WIB_OFFSET_MS + offsetDays * 86400000;
  const d = new Date(wibMs);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

// Offset tanggal (YYYY-MM-DD) MURNI dari string tanggal yang diberikan,
// TIDAK bergantung pada waktu sekarang. Dipakai untuk rentang fetch
// & jadwal "akan datang" supaya benar walau targetDateWIB bukan hari ini.
function addDaysToDateStr(dateStr, days) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

function nowWIBLabel() {
  const d = new Date(Date.now() + WIB_OFFSET_MS);
  return `${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)}/${d.getUTCFullYear()} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())} WIB`;
}

// -----------------------------------------------------------
// HELPERS TEKS
// -----------------------------------------------------------
function slugifyTeamName(name) {
  // Cermin dari slugifyTeamName() di script.js (browser) — kalau salah
  // satu diubah, ubah juga yang satunya supaya tetap konsisten.
  if (!name) return "";
  return name.toString().trim().toLowerCase()
    .normalize("NFD").replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

// -----------------------------------------------------------
// PREDIKSI SKOR — dari /predictions API-Football (persentase menang/
// seri/kalah + rata-rata gol 5 laga terakhir kedua tim), diturunkan
// jadi skoreline "H - A" supaya format lama (dipakai di seluruh situs
// & rekam jejak akurasi prediksi) tetap sama. Fallback heuristik
// deterministik dipertahankan HANYA untuk laga yang gagal diambil
// prediksinya (mis. tim baru promosi yang datanya belum lengkap).
// -----------------------------------------------------------
function seedFromString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function heuristicPrediction(home, away, dateStr) {
  const seed = seedFromString(`${home}|${away}|${dateStr}`);
  const h = seed % 3;
  const a = Math.floor(seed / 7) % 3;
  return `${h} - ${a}`;
}

function numOrNull(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function avgOf(a, b, fallback) {
  if (a == null && b == null) return fallback;
  if (a == null) return b;
  if (b == null) return a;
  return (a + b) / 2;
}

function clampGoals(n) {
  return Math.max(0, Math.min(5, Math.round(n)));
}

async function fetchPrediction(fixtureId) {
  try {
    const json = await apiGet(`/predictions?fixture=${fixtureId}`);
    return Array.isArray(json.response) ? json.response[0] : null;
  } catch (err) {
    console.warn(`  gagal ambil prediksi fixture ${fixtureId}: ${err.message}`);
    return null;
  }
}

// Ekspektasi gol tiap tim = rata-rata (kekuatan serang tim, kelemahan
// bertahan lawan) dari 5 laga terakhir masing-masing — pendekatan
// expected-goals sederhana, bukan lagi angka acak. Kalau expected goals
// kedua tim seri padahal API condong jelas ke salah satu tim (selisih
// persentase menang >= 12), skoreline digeser +1 gol ke tim unggulan
// supaya tidak selalu menebak seri.
function scorelineFromPrediction(pred, home, away, dateStr) {
  if (!pred) {
    return { prediction: heuristicPrediction(home, away, dateStr), odds: null, advice: "" };
  }

  const percent = pred.predictions?.percent || {};
  const homePct = parseInt(percent.home, 10) || 34;
  const drawPct = parseInt(percent.draw, 10) || 33;
  const awayPct = parseInt(percent.away, 10) || 33;

  const homeFor = numOrNull(pred.teams?.home?.last_5?.goals?.for?.average);
  const awayFor = numOrNull(pred.teams?.away?.last_5?.goals?.for?.average);
  const homeAgainst = numOrNull(pred.teams?.home?.last_5?.goals?.against?.average);
  const awayAgainst = numOrNull(pred.teams?.away?.last_5?.goals?.against?.average);

  let h = clampGoals(avgOf(homeFor, awayAgainst, 1));
  let a = clampGoals(avgOf(awayFor, homeAgainst, 1));

  if (h === a) {
    if (homePct - awayPct >= 12) h += 1;
    else if (awayPct - homePct >= 12) a += 1;
  }

  return {
    prediction: `${h} - ${a}`,
    odds: { home: homePct, draw: drawPct, away: awayPct },
    advice: pred.predictions?.advice || ""
  };
}

async function fillPredictions(matches) {
  await mapWithConcurrency(matches, FETCH_CONCURRENCY, async (m) => {
    const pred = await fetchPrediction(m.apiFixtureId);
    const built = scorelineFromPrediction(pred, m.home, m.away, m.date);
    m.prediction = built.prediction;
    if (built.odds) m.odds = built.odds;
    if (built.advice) m.advice = built.advice;
  });
}

// -----------------------------------------------------------
// AMBIL DATA DARI API-FOOTBALL — JADWAL, SKOR & STATUS LIVE
// -----------------------------------------------------------

// status.short API-Football → kode status ringkas yang dipakai di
// seluruh situs (kartu jadwal, Big Match, live engine di script.js).
// Referensi lengkap kode status: dokumentasi API-Football "Fixture
// Status". Catatan penting: "P" (Penalty In Progress, live) BEDA dari
// "PEN" (Match Finished After Penalty) — situs ini memakai kode
// internal "PEN" untuk arti yang PERTAMA (adu penalti sedang
// berlangsung), jadi "PEN" versi API-Football (sudah selesai) dipetakan
// ke "FT", bukan "PEN".
const API_STATUS_MAP = {
  TBD: "NS", NS: "NS",
  "1H": "1H", HT: "HT", "2H": "2H",
  ET: "ET", BT: "ET",           // BT = jeda di tengah extra time
  P: "PEN",                     // adu penalti SEDANG berlangsung
  SUSP: "SUSP", INT: "INT", LIVE: "1H",
  FT: "FT", AET: "FT", PEN: "FT", // selesai (biasa/extra time/adu penalti)
  PST: "POSTP", CANC: "CANC",
  ABD: "CANC",                  // laga dihentikan permanen — diperlakukan sama seperti dibatalkan
  AWD: "FT", WO: "FT"           // hasil teknis/walkover — tetap ada skor akhir
};

const NOT_STARTED_CODES = new Set(["NS", "POSTP", "CANC"]);

function getFixtureState(fixtureBlock) {
  const short = fixtureBlock?.status?.short || "NS";
  const code = API_STATUS_MAP[short] || "NS";
  const elapsed = fixtureBlock?.status?.elapsed;
  const extra = fixtureBlock?.status?.extra;

  let minuteDisplay = "";
  if (code === "1H" || code === "2H" || code === "ET") {
    minuteDisplay = elapsed != null ? `${elapsed}${extra ? "+" + extra : ""}'` : "";
  } else if (code === "HT") minuteDisplay = "HT";
  else if (code === "FT") minuteDisplay = "FT";
  else if (code === "PEN") minuteDisplay = "Adu Penalti";
  else if (code === "SUSP") minuteDisplay = "Ditangguhkan";
  else if (code === "INT") minuteDisplay = "Terhenti";

  return { code, minuteDisplay, hasStarted: !NOT_STARTED_CODES.has(short) };
}

// fixture.date sudah dalam WIB (parameter timezone=Asia/Jakarta di
// fetchLeagueFixtures), jadi tanggal/jam tinggal dipotong dari string
// ISO-nya, tanpa perlu aritmetika offset manual seperti versi ESPN.
// "Regular Season - 7" → "Pekan 7" (liga domestik); bentuk lain (mis.
// "Round of 16", "Quarter-finals" di kompetisi piala/grup) dibiarkan
// apa adanya — sudah cukup jelas & tidak ada padanan ringkas yang pas
// untuk semuanya. Field ini gratis (sudah ikut di respons /fixtures
// yang sama, TIDAK butuh request tambahan).
function formatRound(raw) {
  if (!raw) return "";
  const m = raw.match(/^Regular Season - (\d+)$/);
  return m ? `Pekan ${m[1]}` : raw;
}

function fixtureToMatch(fx, leagueName) {
  const isoWIB = fx.fixture.date; // "YYYY-MM-DDTHH:MM:SS+07:00"
  const state = getFixtureState(fx.fixture);
  const homeScoreNum = fx.goals?.home;
  const awayScoreNum = fx.goals?.away;
  const scoreFields = (state.hasStarted && typeof homeScoreNum === "number" && typeof awayScoreNum === "number")
    ? { homeScore: homeScoreNum, awayScore: awayScoreNum }
    : {};
  const round = formatRound(fx.league?.round);

  return {
    league: leagueName,
    date: isoWIB.slice(0, 10),
    time: isoWIB.slice(11, 16),
    home: fx.teams?.home?.name || "Tim Kandang",
    away: fx.teams?.away?.name || "Tim Tandang",
    stadium: fx.fixture?.venue?.name || "",
    ...(round ? { round } : {}),
    statusCode: state.code,
    ...(state.minuteDisplay ? { minuteDisplay: state.minuteDisplay } : {}),
    ...scoreFields,
    ...(fx.teams?.home?.logo ? { homeLogo: fx.teams.home.logo } : {}),
    ...(fx.teams?.away?.logo ? { awayLogo: fx.teams.away.logo } : {}),
    // Field internal — dipakai HANYA di dalam script ini (prediksi,
    // goals/cards, H2H/Form Big Match). Dibuang sebelum ditulis ke
    // data.js (lihat stripInternalFields()).
    apiFixtureId: fx.fixture?.id ?? null,
    homeTeamId: fx.teams?.home?.id ?? null,
    awayTeamId: fx.teams?.away?.id ?? null,
    apiLeagueId: fx.league?.id ?? null,
    apiSeason: fx.league?.season ?? null
  };
}

function stripInternalFields(matchList) {
  return matchList.map(({ apiFixtureId, homeTeamId, awayTeamId, apiLeagueId, apiSeason, ...rest }) => rest);
}

// Musim aktif tiap liga di LEAGUES (field `season` API-Football = tahun
// mulai musim, mis. 2026 untuk musim 2026/2027) — diambil live tiap run
// supaya otomatis mengikuti pergantian musim, tidak perlu di-hardcode
// & diupdate manual tiap tahun.
async function fetchCurrentSeasons() {
  const map = new Map();
  await mapWithConcurrency(LEAGUES, FETCH_CONCURRENCY, async ([leagueId, leagueName]) => {
    try {
      const json = await apiGet(`/leagues?id=${leagueId}`);
      const seasons = json.response?.[0]?.seasons || [];
      const current = seasons.find(s => s.current) || seasons[seasons.length - 1];
      if (current) map.set(leagueId, current.year);
      else console.warn(`  (musim aktif tidak ditemukan untuk ${leagueName})`);
    } catch (err) {
      console.warn(`  gagal ambil musim aktif ${leagueName}: ${err.message}`);
    }
  });
  return map;
}

// Semua tim unik di liga-liga yang dicakup situs ini (LEAGUES) — satu
// sumber kebenaran dipakai ulang oleh fetch-squads.js & fetch-transfers.js
// (DRY), supaya keduanya selalu memproses persis daftar tim yang sama.
// Satu tim bisa muncul di lebih dari satu liga (mis. ikut liga domestik
// + kompetisi UEFA) — dedupe lewat team id.
async function fetchTeamsInLeague(leagueId, season) {
  const json = await apiGet(`/teams?league=${leagueId}&season=${season}`);
  const teams = Array.isArray(json.response) ? json.response : [];
  return teams.map(t => ({ id: t.team?.id, name: t.team?.name })).filter(t => t.id && t.name);
}

async function fetchAllTeams(seasonMap) {
  const teamsByLeague = await mapWithConcurrency(LEAGUES, FETCH_CONCURRENCY, async ([leagueId, leagueName]) => {
    const season = seasonMap.get(leagueId);
    if (!season) { console.warn(`  (lewati ${leagueName}: musim aktif tidak ditemukan)`); return []; }
    try {
      const teams = await fetchTeamsInLeague(leagueId, season);
      console.log(`  ${leagueName}: ${teams.length} tim`);
      return teams;
    } catch (err) {
      console.warn(`  gagal ambil daftar tim ${leagueName}: ${err.message}`);
      return [];
    }
  });

  const uniqueTeams = new Map();
  teamsByLeague.flat().forEach(t => { if (!uniqueTeams.has(t.id)) uniqueTeams.set(t.id, t); });
  return [...uniqueTeams.values()];
}

// Satu request per liga, mencakup seluruh rentang tanggal yang
// dibutuhkan (hari ini + UPCOMING_DAYS_AHEAD) sekaligus — jauh lebih
// hemat request dibanding fetch per-hari-per-liga seperti versi lama.
// Hasilnya dikelompokkan ulang per tanggal WIB PERSIS dari field
// fixture.date (bukan dari parameter from/to), jadi tidak bergantung
// pada bagaimana API-Football menafsirkan batas tanggal from/to.
async function fetchAllFixtures(targetDateWIB, seasonMap) {
  const fromDate = addDaysToDateStr(targetDateWIB, -1);
  const toDate = addDaysToDateStr(targetDateWIB, UPCOMING_DAYS_AHEAD + 1);
  const wantedDates = [targetDateWIB];
  for (let offset = 1; offset <= UPCOMING_DAYS_AHEAD; offset++) wantedDates.push(addDaysToDateStr(targetDateWIB, offset));
  const wantedSet = new Set(wantedDates);

  const byDate = {};
  wantedDates.forEach(d => { byDate[d] = []; });

  await mapWithConcurrency(LEAGUES, FETCH_CONCURRENCY, async ([leagueId, leagueName]) => {
    const season = seasonMap.get(leagueId);
    if (!season) return;
    try {
      const json = await apiGet(`/fixtures?league=${leagueId}&season=${season}&from=${fromDate}&to=${toDate}&timezone=${encodeURIComponent(TIMEZONE)}`);
      const fixtures = Array.isArray(json.response) ? json.response : [];
      fixtures.forEach(fx => {
        const m = fixtureToMatch(fx, leagueName);
        if (wantedSet.has(m.date)) byDate[m.date].push(m);
      });
    } catch (err) {
      console.warn(`  gagal ambil jadwal ${leagueName}: ${err.message}`);
    }
  });

  Object.values(byDate).forEach(arr => arr.sort((a, b) => a.time.localeCompare(b.time)));
  return byDate;
}

// Goals/cards dari /fixtures/events — best-effort (lihat CATATAN JUJUR
// di atas soal cakupan data per liga/musim), cuma dipanggil untuk laga
// yang sudah mulai (NS/POSTP/CANC dilewati, tidak mungkin ada event).
function mapFixtureEvents(events, homeTeamId) {
  const goals = [];
  const cards = [];
  events.forEach(e => {
    const type = (e.type || "").toLowerCase();
    const detail = (e.detail || "").toLowerCase();
    const elapsed = e.time?.elapsed;
    const minute = elapsed != null ? `${elapsed}${e.time?.extra ? "+" + e.time.extra : ""}` : "";
    const isHomeTeam = e.team?.id === homeTeamId;
    const player = e.player?.name || "";

    if (type === "goal") {
      if (detail.includes("missed penalty")) return; // bukan gol beneran
      if (detail.includes("own goal")) {
        goals.push({ minute, player: player || "Gol Bunuh Diri", team: isHomeTeam ? "away" : "home" });
      } else {
        goals.push({ minute, player, team: isHomeTeam ? "home" : "away" });
      }
      return;
    }
    if (type === "card") {
      const cardType = detail.includes("red") ? "red" : "yellow";
      cards.push({ minute, player, team: isHomeTeam ? "home" : "away", type: cardType });
    }
  });
  return { goals, cards };
}

async function fetchFixtureEvents(fixtureId, homeTeamId) {
  try {
    const json = await apiGet(`/fixtures/events?fixture=${fixtureId}`);
    const events = Array.isArray(json.response) ? json.response : [];
    return mapFixtureEvents(events, homeTeamId);
  } catch (err) {
    console.warn(`  gagal ambil goals/cards fixture ${fixtureId}: ${err.message}`);
    return { goals: [], cards: [] };
  }
}

async function fillEvents(matches) {
  const started = matches.filter(m => m.statusCode !== "NS" && m.statusCode !== "POSTP" && m.statusCode !== "CANC");
  await mapWithConcurrency(started, FETCH_CONCURRENCY, async (m) => {
    const { goals, cards } = await fetchFixtureEvents(m.apiFixtureId, m.homeTeamId);
    if (goals.length) m.goals = goals;
    if (cards.length) m.cards = cards;
  });
}

function pickBigMatch(matches) {
  for (const league of BIGMATCH_PRIORITY) {
    const found = matches.find(m => m.league === league);
    if (found) return found;
  }
  return matches[0] || null;
}

// -----------------------------------------------------------
// AMBIL DATA DARI API-FOOTBALL — KLASEMEN
// -----------------------------------------------------------
async function fetchStandingsForLeague(leagueId, season) {
  const json = await apiGet(`/standings?league=${leagueId}&season=${season}`);
  const groups = json.response?.[0]?.league?.standings;
  // standings adalah array of array (per grup — normal/degradasi/dst);
  // digabung rata seperti extractStandingsEntries() versi ESPN dulu.
  const entries = Array.isArray(groups) ? groups.flat() : [];
  return entries.map(e => ({
    rank: e.rank || 0,
    team: e.team?.name || "Tim",
    logo: e.team?.logo || "",
    played: e.all?.played || 0,
    win: e.all?.win || 0,
    draw: e.all?.draw || 0,
    lose: e.all?.lose || 0,
    gd: e.goalsDiff || 0,
    points: e.points || 0
  })).sort((a, b) => a.rank - b.rank);
}

async function fetchAllStandings(seasonMap) {
  const out = {};
  for (const [leagueId, name] of STANDINGS_LEAGUES) {
    const season = seasonMap.get(leagueId);
    if (!season) continue;
    try {
      const rows = await fetchStandingsForLeague(leagueId, season);
      if (rows.length) {
        out[name] = rows;
      } else {
        console.warn(`  (klasemen ${name} kosong — musim baru mungkin belum mulai)`);
      }
    } catch (err) {
      console.warn(`  gagal ambil klasemen ${name}: ${err.message}`);
    }
  }
  return out;
}

// -----------------------------------------------------------
// AMBIL DATA DARI API-FOOTBALL — TOP SKOR / ASSIST
// Sama seperti klasemen: dibatasi ke MAJOR_LEAGUES_FOR_STANDINGS (liga
// yang punya menu Klasemen), bukan semua 19 liga di LEAGUES — supaya
// menu "Top Skor" tidak kebanjiran liga yang jarang dilihat.
// CATATAN: /players/topcards SENGAJA tidak ada di sini — endpoint itu
// TIDAK TERSEDIA di API-Football v3 (dicoba langsung, hasilnya
// "The Players/topcards endpoint does not exist"), meskipun namanya
// terdengar simetris dengan topscorers/topassists.
// -----------------------------------------------------------
function mapTopPlayers(entries, valuePicker) {
  return entries.map((e, i) => {
    const p = e.player || {};
    const stat = Array.isArray(e.statistics) ? e.statistics[0] : {};
    return {
      rank: i + 1,
      name: p.name || "Pemain",
      photo: p.photo || "",
      team: stat?.team?.name || "",
      teamLogo: stat?.team?.logo || "",
      value: valuePicker(stat) || 0
    };
  }).filter(row => row.value > 0);
}

async function fetchTopPlayers(pathname, leagueId, season, valuePicker) {
  try {
    const json = await apiGet(`${pathname}?league=${leagueId}&season=${season}`);
    const entries = Array.isArray(json.response) ? json.response : [];
    return mapTopPlayers(entries, valuePicker).slice(0, 10);
  } catch (err) {
    console.warn(`  gagal ambil ${pathname} liga ${leagueId}: ${err.message}`);
    return [];
  }
}

async function fetchAllTopStats(seasonMap) {
  const topScorers = {};
  const topAssists = {};
  for (const [leagueId, name] of STANDINGS_LEAGUES) {
    const season = seasonMap.get(leagueId);
    if (!season) continue;
    const [scorers, assists] = await Promise.all([
      fetchTopPlayers("/players/topscorers", leagueId, season, s => s?.goals?.total),
      fetchTopPlayers("/players/topassists", leagueId, season, s => s?.goals?.assists)
    ]);
    if (scorers.length) topScorers[name] = scorers;
    if (assists.length) topAssists[name] = assists;
  }
  return { topScorers, topAssists };
}

// -----------------------------------------------------------
// AMBIL DATA DARI API-FOOTBALL — CEDERA PEMAIN
// /injuries mengembalikan satu entri PER FIXTURE tempat pemain itu
// absen (bukan status "cedera saat ini" langsung) — jadi di sini
// dedupe per pemain, simpan cuma laga TERBARU yang tercatat sebagai
// perkiraan "sedang cedera/diragukan". Dikelompokkan lewat slug nama
// tim (sama seperti squads.js) supaya team-profile.js gampang
// mencocokkannya.
// -----------------------------------------------------------
async function fetchInjuriesForLeague(leagueId, season) {
  try {
    const json = await apiGet(`/injuries?league=${leagueId}&season=${season}`);
    return Array.isArray(json.response) ? json.response : [];
  } catch (err) {
    console.warn(`  gagal ambil cedera liga ${leagueId}: ${err.message}`);
    return [];
  }
}

async function fetchAllInjuries(seasonMap) {
  const latestByPlayer = new Map(); // playerId -> entry mentah terbaru (dibandingkan lewat fixture.timestamp)
  for (const [leagueId] of STANDINGS_LEAGUES) {
    const season = seasonMap.get(leagueId);
    if (!season) continue;
    const entries = await fetchInjuriesForLeague(leagueId, season);
    entries.forEach(e => {
      const playerId = e.player?.id;
      if (!playerId) return;
      const ts = e.fixture?.timestamp || 0;
      const existing = latestByPlayer.get(playerId);
      if (!existing || ts > (existing.fixture?.timestamp || 0)) latestByPlayer.set(playerId, e);
    });
  }

  const byTeam = {};
  latestByPlayer.forEach(e => {
    const teamName = e.team?.name;
    if (!teamName) return;
    const slug = slugifyTeamName(teamName);
    if (!byTeam[slug]) byTeam[slug] = [];
    byTeam[slug].push({
      player: e.player?.name || "Pemain",
      photo: e.player?.photo || "",
      reason: e.player?.reason || e.player?.type || "Cedera",
      since: e.fixture?.date ? e.fixture.date.slice(0, 10) : ""
    });
  });
  return byTeam;
}

// -----------------------------------------------------------
// BACA data.js LAMA (dasar untuk semua merge — jadi field yang tidak
// di-fetch ulang tiap run, mis. news atau override manual, tidak hilang)
// data.js adalah output kita sendiri dari run sebelumnya (bukan
// input dari luar/tidak tepercaya), jadi dibaca-ulang lewat
// `new Function` di sini aman — tanpa perlu ubah format data.js
// (yang juga dipakai langsung oleh index.html lewat <script> tag).
// -----------------------------------------------------------
// Dipisah dari loadExistingData supaya bisa dipakai ulang oleh sumber
// non-file juga (mis. netlify/functions/scheduled-update.js yang ambil
// data.js lama lewat Netlify Blobs, bukan baca disk lokal).
function parseExistingData(code) {
  try {
    const fn = new Function(`${code}\nreturn (typeof siteData !== "undefined") ? siteData : null;`);
    return fn();
  } catch (err) {
    console.warn(`Gagal membaca data.js lama (${err.message}). Lanjut tanpa data lama — news/standings/history/riwayat prediksi lama TIDAK akan dipertahankan run ini.`);
    return null;
  }
}

function loadExistingData(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return parseExistingData(fs.readFileSync(filePath, "utf8"));
}

// -----------------------------------------------------------
// BIG MATCH — H2H & FORM TIM dari API-Football (/fixtures/headtohead
// & /teams/statistics) — endpoint resmi, jauh lebih andal daripada
// hack lama lewat endpoint summary ESPN yang tidak resmi.
// -----------------------------------------------------------
async function fetchH2H(homeTeamId, awayTeamId) {
  try {
    const json = await apiGet(`/fixtures/headtohead?h2h=${homeTeamId}-${awayTeamId}&last=5`);
    const fixtures = Array.isArray(json.response) ? json.response : [];
    return fixtures
      .map(fx => ({
        home: fx.teams?.home?.name,
        away: fx.teams?.away?.name,
        score: `${fx.goals?.home ?? 0}-${fx.goals?.away ?? 0}`
      }))
      .filter(h => h.home && h.away);
  } catch (err) {
    console.warn(`  gagal ambil H2H: ${err.message}`);
    return [];
  }
}

// field `form` API-Football = string W/D/L seluruh laga musim ini
// (mis. "WWDLW..."), diambil 5 karakter terakhir buat form 5 laga
// terakhir (selaras dengan makna lama "last five games").
async function fetchTeamForm(leagueId, season, teamId) {
  try {
    const json = await apiGet(`/teams/statistics?league=${leagueId}&season=${season}&team=${teamId}`);
    const formStr = json.response?.form || "";
    const last5 = formStr.slice(-5).split("").filter(c => c === "W" || c === "D" || c === "L");
    return last5.length ? { results: last5 } : null;
  } catch (err) {
    console.warn(`  gagal ambil form tim ${teamId}: ${err.message}`);
    return null;
  }
}

async function fetchBigMatchExtras(bigMatchSrc) {
  if (!bigMatchSrc?.homeTeamId || !bigMatchSrc?.awayTeamId) return { h2h: null, form: null };
  const [h2h, homeForm, awayForm] = await Promise.all([
    fetchH2H(bigMatchSrc.homeTeamId, bigMatchSrc.awayTeamId),
    fetchTeamForm(bigMatchSrc.apiLeagueId, bigMatchSrc.apiSeason, bigMatchSrc.homeTeamId),
    fetchTeamForm(bigMatchSrc.apiLeagueId, bigMatchSrc.apiSeason, bigMatchSrc.awayTeamId)
  ]);
  const form = (homeForm || awayForm) ? { home: homeForm || {}, away: awayForm || {} } : null;
  return { h2h: h2h.length ? h2h : null, form };
}

// -----------------------------------------------------------
// BIG MATCH — deteksi & pertahankan override manual. Kalau fixture
// (home vs away vs tanggal) sama dengan run sebelumnya DAN
// prediction/analysis di data.js lama berbeda dari hasil segar,
// anggap itu editan manual dan pertahankan. background (yang tidak
// pernah dibuat otomatis oleh script ini) juga dipertahankan kalau
// fixture sama; h2h/form/odds sekarang diisi otomatis dari
// API-Football dan hanya jatuh ke data lama kalau run ini gagal
// mengambilnya.
// -----------------------------------------------------------
function buildBigMatch(src, targetDateWIB, existingBigMatch, extras) {
  const freshPrediction = src.prediction;
  const freshAnalysis = src.advice
    ? `${src.home} bertemu ${src.away} dalam laga ${src.league}. Analisis API-Football: ${src.advice}.`
    : `${src.home} bertemu ${src.away} dalam laga ${src.league}. Prediksi ini dibuat otomatis oleh sistem berdasarkan jadwal terbaru.`;

  const sameFixture = !!existingBigMatch &&
    slugifyTeamName(existingBigMatch.home) === slugifyTeamName(src.home) &&
    slugifyTeamName(existingBigMatch.away) === slugifyTeamName(src.away) &&
    existingBigMatch.date === targetDateWIB;

  const prediction = (sameFixture && existingBigMatch.prediction && existingBigMatch.prediction !== freshPrediction)
    ? existingBigMatch.prediction
    : freshPrediction;
  const analysis = (sameFixture && existingBigMatch.analysis && existingBigMatch.analysis !== freshAnalysis)
    ? existingBigMatch.analysis
    : freshAnalysis;

  const result = {
    league: src.league,
    date: targetDateWIB,
    time: src.time,
    home: src.home,
    away: src.away,
    stadium: src.stadium || (sameFixture && existingBigMatch.stadium) || "",
    prediction,
    analysis,
    // Status/skor live — SELALU dari fetch segar (src), tidak pernah
    // dipertahankan dari run lama, supaya Big Match tidak "macet" di
    // status basi kalau kebetulan laganya sama 2 run berturut-turut.
    statusCode: src.statusCode,
    ...(src.minuteDisplay ? { minuteDisplay: src.minuteDisplay } : {}),
    ...(typeof src.homeScore === "number" ? { homeScore: src.homeScore } : {}),
    ...(typeof src.awayScore === "number" ? { awayScore: src.awayScore } : {}),
    // Persentase menang/seri/kalah asli dari /predictions — dipakai
    // deriveProbability()/getBmBaseProbs() di script.js kalau ada,
    // menggantikan turunan kasar dari skoreline.
    ...(src.odds ? { odds: src.odds, probability: src.odds } : {}),
    // ID API-Football (fixture + kedua tim) — SENGAJA tidak dibuang
    // seperti field internal lain (beda dari stripInternalFields() yang
    // dipakai match biasa), karena fetch-bigmatch-live.js butuh ini
    // buat tahu fixture mana yang perlu dipantau statistik live &
    // susunan pemainnya (lihat file itu). Front-end (script.js dkk)
    // mengabaikan field yang tidak ia kenal, jadi aman ditambahkan.
    ...(src.apiFixtureId ? { apiFixtureId: src.apiFixtureId } : {}),
    ...(src.homeTeamId ? { homeTeamId: src.homeTeamId } : {}),
    ...(src.awayTeamId ? { awayTeamId: src.awayTeamId } : {}),
    // Logo segar dari API-Football diprioritaskan; kalau kebetulan
    // tidak ada, baru pakai override manual/lama pada fixture yang sama.
    homeLogo: src.homeLogo || (sameFixture && existingBigMatch.homeLogo) || "",
    awayLogo: src.awayLogo || (sameFixture && existingBigMatch.awayLogo) || "",
    // H2H/Form segar dari API-Football diprioritaskan; kalau run ini
    // gagal mengambilnya, jatuh ke data lama pada fixture yang sama
    // supaya blok-nya tidak tiba-tiba kosong lagi.
    h2h: extras?.h2h || (sameFixture && existingBigMatch.h2h) || [],
    form: extras?.form || (sameFixture && existingBigMatch.form) || {}
  };
  if (sameFixture && existingBigMatch.background) {
    result.background = existingBigMatch.background;
  }
  return result;
}

// -----------------------------------------------------------
// REKAM JEJAK PREDIKSI — dipertahankan & diperbarui, bukan direset
// tiap run. Dipanggil dengan daftar match yang SUDAH
// final (ada homeScore/awayScore) dari hari yang baru saja berlalu.
// -----------------------------------------------------------
function currentMonthKey(dateStr) { return dateStr.slice(0, 7); } // "YYYY-MM"

function updatePredictionTracking(finishedMatches, stats, recent, targetDateWIB) {
  const monthKey = currentMonthKey(targetDateWIB);
  const newStats = { ...stats };

  if (newStats.month !== monthKey) {
    newStats.month = monthKey;
    newStats.thisMonth = 0;
  }
  newStats.totalEvaluated = newStats.totalEvaluated || 0;
  newStats.correctScore = newStats.correctScore || 0;
  newStats.correctWinner = newStats.correctWinner || 0;
  newStats.ouEvaluated = newStats.ouEvaluated || 0;
  newStats.ouCorrect = newStats.ouCorrect || 0;

  const newRecent = [...recent];

  finishedMatches.forEach(m => {
    if (typeof m.homeScore !== "number" || typeof m.awayScore !== "number" || !m.prediction) return;
    const key = `${m.home}|${m.away}|${m.time}`;
    if (newRecent.some(r => r.key === key)) return; // sudah pernah dihitung, jangan dobel

    const parts = m.prediction.split(/[-–]/).map(s => parseInt(s.trim(), 10));
    const ph = isNaN(parts[0]) ? 0 : parts[0];
    const pa = isNaN(parts[1]) ? 0 : parts[1];

    const scoreCorrect = ph === m.homeScore && pa === m.awayScore;
    const predWinner = ph === pa ? "draw" : (ph > pa ? "home" : "away");
    const actualWinner = m.homeScore === m.awayScore ? "draw" : (m.homeScore > m.awayScore ? "home" : "away");
    const winnerCorrect = predWinner === actualWinner;

    newStats.totalEvaluated += 1;
    newStats.thisMonth += 1;
    if (scoreCorrect) newStats.correctScore += 1;
    if (winnerCorrect) newStats.correctWinner += 1;

    const line = 2.5;
    const predOver = (ph + pa) > line;
    const actualOver = (m.homeScore + m.awayScore) > line;
    newStats.ouEvaluated += 1;
    if (predOver === actualOver) newStats.ouCorrect += 1;

    newRecent.unshift({
      key,
      match: `${m.home} vs ${m.away}`,
      predicted: m.prediction,
      result: `${m.homeScore} - ${m.awayScore}`,
      correct: winnerCorrect
    });
  });

  newStats.winnerAccuracy = newStats.totalEvaluated ? Math.round(newStats.correctWinner / newStats.totalEvaluated * 100) : 0;
  newStats.ouAccuracy = newStats.ouEvaluated ? Math.round(newStats.ouCorrect / newStats.ouEvaluated * 100) : 0;

  return { stats: newStats, recent: newRecent.slice(0, RECENT_PREDICTIONS_KEEP) };
}

// -----------------------------------------------------------
// TULIS ULANG data.js
// -----------------------------------------------------------
function buildDataJs(payload) {
  const header = `/* =========================================================
   BOLAKILAS — DATA HARIAN
   File ini di-generate OTOMATIS oleh fetch-schedule.js (sumber data:
   API-Football v3) pada ${new Date().toISOString()}.

   Field hasil fetch (matches, standings, history, upcoming) akan
   TERTIMPA tiap kali script dijalankan ulang — jangan diedit manual.

   Field bigMatch.prediction / bigMatch.analysis / bigMatch.h2h /
   bigMatch.form / bigMatch.background / bigMatch.homeLogo /
   bigMatch.awayLogo BOLEH diedit manual: script ini mendeteksi &
   mempertahankan perubahan itu selama fixture (home vs away,
   tanggal) masih sama di run berikutnya.
   ========================================================= */

`;
  return `${header}const siteData = ${JSON.stringify(payload, null, 4)};\n`;
}

// -----------------------------------------------------------
// MAIN
// -----------------------------------------------------------
// Inti logic-nya dipisah dari main() supaya bisa dipakai ulang APA
// ADANYA oleh netlify/functions/scheduled-update.js (dipanggil lewat
// Netlify Scheduled Functions, pengganti GitHub Actions yang kena
// pembatasan akun) — cuma cara BACA data lama & SIMPAN hasilnya yang
// beda (file lokal vs Netlify Blobs), sisanya (fetch API-Football dst)
// identik, tidak diduplikasi.
async function runFetchSchedule({ loadExisting, saveOutput }) {
  if (typeof fetch !== "function") {
    throw new Error(`Script ini butuh Node.js 18+ (global fetch tersedia). Versi terdeteksi: ${process.version}`);
  }
  if (!API_FOOTBALL_KEY) {
    throw new Error("env var API_FOOTBALL_KEY belum diset. Lihat catatan CARA PAKAI di atas file ini.");
  }

  const targetDateWIB = wibDateString(0);
  console.log(`=== BOLAKILAS fetch-schedule — ${targetDateWIB} (WIB) ===`);

  const existing = await loadExisting();

  console.log("Mengambil musim aktif tiap liga...");
  const seasonMap = await fetchCurrentSeasons();

  console.log(`Mengambil jadwal ${targetDateWIB} s.d. +${UPCOMING_DAYS_AHEAD} hari (${LEAGUES.length} liga)...`);
  const byDate = await fetchAllFixtures(targetDateWIB, seasonMap);
  const allFetchedMatches = Object.values(byDate).flat();
  console.log(`  ditemukan ${allFetchedMatches.length} pertandingan (semua tanggal).`);

  const matches = byDate[targetDateWIB] || [];
  if (matches.length === 0) {
    if (existing) {
      console.warn("Tidak ada pertandingan ditemukan dari API-Football untuk hari ini. data.js TIDAK ditulis ulang (mempertahankan data lama apa adanya, biar tidak mengosongkan jadwal).");
    } else {
      console.warn("Tidak ada pertandingan ditemukan & belum ada data.js sebelumnya. Tidak ada yang ditulis.");
    }
    return;
  }

  console.log("Mengambil prediksi (persentase & rata-rata gol) tiap laga...");
  await fillPredictions(allFetchedMatches);

  console.log("Mengambil goals/cards laga yang sudah mulai...");
  await fillEvents(allFetchedMatches);

  const bigMatchSrc = pickBigMatch(matches);

  let bigMatchExtras = { h2h: null, form: null };
  if (bigMatchSrc) {
    console.log("Mengambil H2H & Form Tim Big Match...");
    bigMatchExtras = await fetchBigMatchExtras(bigMatchSrc);
    console.log(`  H2H: ${bigMatchExtras.h2h ? bigMatchExtras.h2h.length + " laga" : "tidak tersedia"}, Form Tim: ${bigMatchExtras.form ? "tersedia" : "tidak tersedia"}.`);
  }

  // ---- Riwayat: arsipkan "matches" dari run sebelumnya begitu tanggal berganti ----
  const history = { ...(existing?.history || {}) };
  let matchesForTracking = [];
  if (existing?.date && existing.date !== targetDateWIB && Array.isArray(existing.matches)) {
    const finished = existing.matches.filter(m => typeof m.homeScore === "number" && typeof m.awayScore === "number");
    const dropped = existing.matches.length - finished.length;
    if (dropped > 0) {
      console.log(`  ${dropped} pertandingan ${existing.date} tanpa skor akhir (belum ke-update API saat run terakhir) — tidak diarsipkan ke riwayat.`);
    }
    if (!history[existing.date]) history[existing.date] = finished;
    matchesForTracking = finished;
  }
  const historyDates = Object.keys(history).sort();
  while (historyDates.length > HISTORY_DAYS_KEEP) {
    delete history[historyDates.shift()];
  }

  // ---- Akan datang ----
  const upcoming = { ...(existing?.upcoming || {}) };
  Object.keys(upcoming).forEach(d => { if (d <= targetDateWIB) delete upcoming[d]; }); // buang tanggal yang sudah jadi hari ini/lewat
  for (let offset = 1; offset <= UPCOMING_DAYS_AHEAD; offset++) {
    const futureDate = addDaysToDateStr(targetDateWIB, offset);
    const futureMatches = byDate[futureDate] || [];
    console.log(`  jadwal mendatang (${futureDate}): ${futureMatches.length} pertandingan.`);
    if (futureMatches.length) upcoming[futureDate] = stripInternalFields(futureMatches);
  }

  // ---- Klasemen ----
  console.log("Mengambil klasemen liga besar...");
  let standings = { ...(existing?.standings || {}) };
  let standingsUpdated = existing?.standingsUpdated || null;
  const fetchedStandings = await fetchAllStandings(seasonMap);
  if (Object.keys(fetchedStandings).length) {
    standings = { ...standings, ...fetchedStandings };
    standingsUpdated = nowWIBLabel();
  } else {
    console.warn("  tidak ada klasemen berhasil diambil run ini, mempertahankan data klasemen lama (kalau ada).");
  }

  // ---- Top Skor / Assist ----
  console.log("Mengambil top skor & assist liga besar...");
  let topScorers = { ...(existing?.topScorers || {}) };
  let topAssists = { ...(existing?.topAssists || {}) };
  const fetchedTopStats = await fetchAllTopStats(seasonMap);
  if (Object.keys(fetchedTopStats.topScorers).length) topScorers = { ...topScorers, ...fetchedTopStats.topScorers };
  if (Object.keys(fetchedTopStats.topAssists).length) topAssists = { ...topAssists, ...fetchedTopStats.topAssists };

  // ---- Cedera pemain ----
  console.log("Mengambil daftar cedera pemain...");
  let injuries = { ...(existing?.injuries || {}) };
  const fetchedInjuries = await fetchAllInjuries(seasonMap);
  if (Object.keys(fetchedInjuries).length) injuries = fetchedInjuries; // ganti total, bukan digabung — cedera lama yang sudah pulih harus hilang
  else console.warn("  tidak ada data cedera berhasil diambil run ini, mempertahankan data lama (kalau ada).");

  // ---- Berita: dipertahankan apa adanya, TIDAK ditimpa placeholder tiap run ----
  const news = (Array.isArray(existing?.news) && existing.news.length)
    ? existing.news
    : [{ tag: "Jadwal", title: "Jadwal pertandingan sepak bola hari ini", desc: "Simak jadwal pertandingan dari berbagai kompetisi sepak bola.", time: "Hari ini" }];

  // ---- Rekam jejak prediksi ----
  let predictionStats = existing?.predictionStats || { thisMonth: 0, correctScore: 0, correctWinner: 0, winnerAccuracy: 0, ouAccuracy: 0 };
  let recentPredictions = Array.isArray(existing?.recentPredictions) ? existing.recentPredictions : [];
  if (matchesForTracking.length) {
    const updated = updatePredictionTracking(matchesForTracking, predictionStats, recentPredictions, targetDateWIB);
    predictionStats = updated.stats;
    recentPredictions = updated.recent;
  }

  const payload = {
    date: targetDateWIB,
    bigMatch: bigMatchSrc ? buildBigMatch(bigMatchSrc, targetDateWIB, existing?.bigMatch, bigMatchExtras) : (existing?.bigMatch || null),
    matches: stripInternalFields(matches),
    news,
    standings,
    standingsUpdated,
    topScorers,
    topAssists,
    injuries,
    history,
    upcoming,
    predictionStats,
    recentPredictions
  };

  await saveOutput(buildDataJs(payload));
  console.log(`Selesai. data.js diperbarui — ${matches.length} pertandingan hari ini, Big Match: ${bigMatchSrc ? bigMatchSrc.home + " vs " + bigMatchSrc.away : "-"}.`);
}

// ---- Jalan sebagai CLI (node fetch-schedule.js) — baca/tulis file lokal ----
async function main() {
  await runFetchSchedule({
    loadExisting: () => loadExistingData(OUTPUT_PATH),
    saveOutput: (content) => { fs.writeFileSync(OUTPUT_PATH, content, "utf8"); }
  });
}

if (require.main === module) {
  main().catch(err => {
    console.error("GAGAL:", err.message);
    process.exit(1);
  });
}

// Diekspos supaya netlify/functions/scheduled-update.js bisa pakai ulang
// logic yang sama persis (cuma ganti cara baca/simpan data.js-nya), dan
// supaya fetch-squads.js bisa pakai ulang daftar liga + helper API yang
// sama (DRY — satu sumber kebenaran buat liga & auth API-Football).
module.exports = {
  runFetchSchedule, parseExistingData,
  LEAGUES, API_BASE, apiGet, mapWithConcurrency, slugifyTeamName, FETCH_CONCURRENCY,
  API_STATUS_MAP, fetchCurrentSeasons, fetchAllTeams
};

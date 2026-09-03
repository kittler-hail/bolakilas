/* =========================================================
   BOLAKILAS — SCRIPT.JS  (v2 — redesign)
   Fitur:
   - Logo tim otomatis dari nama (fallback inisial)
   - Filter liga dinamis + filter status pintar
   - Tab rentang hari: Riwayat / Hari Ini / Akan Datang (BARU)
   - Skor real-time untuk laga berlangsung, skor akhir untuk laga
     selesai (BARU — lihat catatan AUTO-UPDATE di bawah)
   - Klasemen liga-liga besar (BARU)
   - Ticker berita bola, kecepatan diperlambat (BARU)
   - Emoji diminimalkan, memakai indikator warna/dot & label teks
   - Tema terang (default) / gelap toggle
   - Search pertandingan
   - Jam real-time WIB di topbar
   - Countdown Big Match + status tiap kartu
   - Prediksi 1X2 / Over-Under / BTTS / Confidence otomatis
   - Big Match Radar
   - Head-to-Head & Form Tim di Big Match
   - Prediksi Pengunjung / voting
   - Rekam Jejak Prediksi

   ---------------------------------------------------------
   CATATAN AUTO-UPDATE (baca ini kalau menyambungkan API):
   Front-end ini SIAP menampilkan data otomatis, tapi data itu
   sendiri harus diisi oleh proses terjadwal (fetch-schedule.js
   / cron / GitHub Actions) yang menulis ulang data.js secara
   berkala. Field yang dibaca script ini:
     - match.homeScore / match.awayScore  → angka = tampilkan
       skor. Untuk laga hari ini, isi field ini saat laga
       "live" (update tiap beberapa menit) dan biarkan terisi
       skor akhir setelah laga selesai.
     - siteData.history[tanggal]          → array match yang
       SUDAH selesai (selalu sertakan homeScore/awayScore).
     - siteData.upcoming[tanggal]         → array match yang
       BELUM dimulai (tanpa skor).
     - siteData.standings[namaLiga]       → array klasemen.
   Sumber data baseline (jadwal/skor/klasemen/prediksi) SEKARANG
   API-Football v3 (plan berbayar, lihat fetch-schedule.js) — bukan
   lagi kombinasi football-data.org + API-Football tier gratis seperti
   catatan versi lama di sini. Update live SAAT laga sedang berlangsung
   tetap dari ESPN, langsung dari browser (lihat blok LIVE ENGINE di
   bawah) — belum ikut dimigrasi karena API-Football butuh API key di
   tiap request, jadi tidak aman dipanggil langsung dari browser tanpa
   proxy (lihat catatan di LIVE ENGINE).
   ========================================================= */

/* =========================================================
   CONFIG
   ========================================================= */

const LOGO_FOLDER = "images/logos/";

const LEAGUE_WEIGHTS = {
  "UEFA EUROPA LEAGUE QUALIFIERS": 78,
  "UEFA CONFERENCE LEAGUE QUALIFIERS": 60,
  "LEAGUES CUP [ IN USA, CANADA & MEXICO ]": 55,
  "COPA LIBERTADORES": 70,
  "COPA SUDAMERICANA": 58,
  "MEXICO LIGA DE EXPANSION": 40
};

const POPULAR_CLUBS = [
  "rangers", "benfica", "ajax", "psg", "juventus", "barcelona", "real madrid",
  "manchester", "liverpool", "bayern", "chelsea", "arsenal", "besiktas",
  "corinthians", "botafogo", "braga", "twente", "salzburg", "gent",
  "hibernian", "anderlecht", "paok", "ferencvaros", "lech poznan"
];

/* Liga besar yang ditampilkan di menu Klasemen (urutan tampil) */
const MAJOR_LEAGUES = [
  "Premier League", "LaLiga", "Serie A", "Bundesliga", "Ligue 1",
  "Liga 1 (Indonesia)"
];

/* Liga prioritas buat gantikan Big Match begitu laga yang sedang tampil
   selesai — CERMIN dari BIGMATCH_PRIORITY di fetch-schedule.js. JAGA
   supaya tetap sama persis kalau salah satu diubah (lihat
   pickNextBigMatch/swapToNextBigMatchIfFinished di LIVE ENGINE). */
const BIGMATCH_PRIORITY_CLIENT = [
  "UEFA Champions League", "UEFA Europa League", "UEFA Europa Conference League",
  "Premier League", "LaLiga", "Serie A", "Bundesliga", "Ligue 1",
  "Copa Libertadores", "MLS", "Liga MX", "Copa Sudamericana"
];

/* Peta transliterasi huruf Latin "eksotis" yang TIDAK bisa dipecah lewat
   normalisasi Unicode biasa (NFD), beda dengan huruf beraksen umum
   (é, ñ, ü, dst) yang sudah otomatis tertangani oleh slugifyTeamName.
   Tanpa ini, huruf seperti ø/đ/ł/æ akan hilang total dari slug (bukan
   diganti), sehingga nama file logo tidak akan pernah cocok. */
const SPECIAL_LATIN_CHAR_MAP = {
  "ø": "o", "đ": "d", "ł": "l", "æ": "ae", "œ": "oe",
  "ß": "ss", "þ": "th", "ð": "d", "ı": "i"
};

/* Alias manual untuk klub yang namanya TIDAK bisa diselesaikan lewat
   transliterasi otomatis sama sekali — biasanya karena ditulis dalam
   aksara non-Latin (Cyrillic, Kanji, Hangul, Arab, dst) sesuai apa
   adanya di sumber data. Key HARUS PERSIS SAMA dengan nama klub yang
   muncul di data.js (match.home / match.away / bm.home / dst — cek
   dengan hati-hati termasuk spasi & huruf besar/kecil). Value adalah
   nama file logo TANPA folder dan TANPA .png, yang harus benar-benar
   ada di images/logos/.
   Tambahkan satu baris baru setiap kali menemukan logo klub yang
   tidak muncul (fallback ke inisial) padahal file logonya sudah ada. */
const TEAM_LOGO_ALIASES = {
  // "Спартак Москва": "spartak-moscow",
  // "上海申花": "shanghai-shenhua",
};

/* =========================================================
   INIT DATA
   ========================================================= */

if (typeof siteData === "undefined") {
  console.error("ERROR: siteData tidak ditemukan. Pastikan data.js dipanggil sebelum script.js.");
}

const data = typeof siteData !== "undefined" ? siteData : {
  date: "", bigMatch: null, matches: [], news: [],
  predictionStats: {}, recentPredictions: [],
  history: {}, upcoming: {}, standings: {}
};
if (!data.history) data.history = {};
if (!data.upcoming) data.upcoming = {};
if (!data.standings) data.standings = {};

/* =========================================================
   HELPERS
   ========================================================= */

function getElement(id) { return document.getElementById(id); }

function escapeHTML(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function slugifyTeamName(name) {
  if (!name) return "";
  let value = name.toString().trim().toLowerCase();
  // Ganti dulu huruf Latin "eksotis" (ø, đ, ł, æ, dst) sebelum normalisasi,
  // karena NFD tidak bisa memecahnya jadi huruf dasar + aksen seperti é/ñ.
  value = value.replace(/[øđłæœßþðı]/g, ch => SPECIAL_LATIN_CHAR_MAP[ch] || ch);
  value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Tanda pemisah umum (/, ., ', koma) jadi hyphen, bukan dihapus —
  // supaya "Bodø/Glimt" jadi "bodo-glimt", bukan "bodoglimt".
  value = value.replace(/[\/.,']+/g, "-");
  value = value.replace(/[^a-z0-9\s-]/g, "");
  value = value.replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
  return value;
}

// Key stabil "slug(home)|slug(away)" — dipakai LIVE ENGINE untuk
// mencocokkan data.matches dengan event ESPN yang datang tiap poll,
// dan sebagai data-match-key di kartu jadwal supaya bisa ditemukan
// lagi tanpa bergantung ke index (yang berubah-ubah ikut filter).
function buildMatchKey(home, away) {
  return `${slugifyTeamName(home)}|${slugifyTeamName(away)}`;
}

function getTeamLogoPath(name) {
  if (!name) return "";
  // Prioritas 1: alias manual (untuk nama non-Latin yang tidak bisa
  // ditransliterasi otomatis sama sekali).
  const alias = TEAM_LOGO_ALIASES[name] || TEAM_LOGO_ALIASES[name.toString().trim()];
  if (alias) return `${LOGO_FOLDER}${alias}.png`;
  // Prioritas 2: slug otomatis (sudah menangani huruf beraksen &
  // huruf Latin eksotis lewat SPECIAL_LATIN_CHAR_MAP).
  const slug = slugifyTeamName(name);
  return slug ? `${LOGO_FOLDER}${slug}.png` : "";
}

function getInitials(name) {
  if (!name) return "?";
  const initials = name.toString().split(/\s+/).filter(Boolean)
    .map(w => w[0]).join("").toUpperCase();
  return initials.slice(0, 3) || "?";
}

function handleLogoError(imgEl, fallbackText) {
  const wrap = imgEl ? imgEl.parentElement : null;
  if (!wrap) return;
  wrap.classList.remove("mc-badge-image");
  wrap.classList.add("logo-fallback");
  wrap.textContent = fallbackText || "?";
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString + "T00:00:00");
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });
}

function formatDateShort(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString + "T00:00:00");
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
}

function formatTime(time) { return time || "--:--"; }

function markVisible(elements) {
  elements.forEach(el => el.classList.add("in"));
}

function addDaysToDateStr(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

/* =========================================================
   PREDIKSI OTOMATIS (1X2 / O-U / BTTS / Confidence / Rating)
   ========================================================= */

function deriveGoals(predictionStr) {
  if (!predictionStr) return { h: 1, a: 1 };
  const parts = predictionStr.split(/[-–]/).map(s => parseInt(s.trim(), 10));
  const h = isNaN(parts[0]) ? 1 : parts[0];
  const a = isNaN(parts[1]) ? 1 : parts[1];
  return { h, a };
}

function normalizeProbs(o) {
  const home = Number(o.home) || 0, draw = Number(o.draw) || 0, away = Number(o.away) || 0;
  const sum = home + draw + away || 1;
  const h = Math.round(home / sum * 100);
  const d = Math.round(draw / sum * 100);
  const a = 100 - h - d;
  return { home: h, draw: d, away: a };
}

function deriveProbability(match) {
  if (match.odds) return normalizeProbs(match.odds);
  const { h, a } = deriveGoals(match.prediction);
  const diff = h - a;
  let home = 40 + diff * 11;
  let away = 40 - diff * 11;
  home = Math.max(8, Math.min(80, home));
  away = Math.max(8, Math.min(80, away));
  let draw = 100 - home - away;
  if (draw < 8) {
    const shortfall = 8 - draw;
    home -= shortfall / 2;
    away -= shortfall / 2;
    draw = 8;
  }
  home = Math.round(home);
  draw = Math.round(draw);
  const awayFinal = 100 - home - draw;
  return { home, draw, away: awayFinal };
}

function getBmBaseProbs(bm) {
  if (bm.probability) return normalizeProbs(bm.probability);
  return deriveProbability(bm);
}

function deriveOU(match) {
  const line = match.ouLine || 2.5;
  const { h, a } = deriveGoals(match.prediction);
  const total = h + a;
  let over = 50 + (total - line) * 16;
  over = Math.max(12, Math.min(88, Math.round(over)));
  return { line, over, under: 100 - over };
}

function deriveBTTS(match) {
  const { h, a } = deriveGoals(match.prediction);
  let yes = (h > 0 && a > 0) ? 64 : 32;
  yes += Math.min(h, a) * 4;
  yes = Math.max(10, Math.min(90, yes));
  yes = Math.round(yes);
  return { yes, no: 100 - yes };
}

function deriveConfidence(probs) {
  const max = Math.max(probs.home, probs.draw, probs.away);
  if (max >= 55) return "Tinggi";
  if (max >= 40) return "Sedang";
  return "Rendah";
}

function deriveRating(match) {
  if (typeof match.rating === "number") return match.rating;
  let base = LEAGUE_WEIGHTS[match.league] ?? 50;
  const names = `${match.home || ""} ${match.away || ""}`.toLowerCase();
  POPULAR_CLUBS.forEach(c => { if (names.includes(c)) base += 8; });
  const { h, a } = deriveGoals(match.prediction);
  base += Math.min(h + a, 4);
  return Math.max(30, Math.min(99, Math.round(base)));
}

/* =========================================================
   STATUS PERTANDINGAN (Akan Datang / Segera / Berlangsung / Selesai /
   Ditunda) — Sadar-tanggal: dipakai juga oleh tab Riwayat / Akan Datang.

   Sumber kebenaran UTAMA: match.statusCode (NS/1H/HT/2H/ET/PEN/FT/
   POSTP/CANC/SUSP/INT) — baseline dari API-Football lewat
   fetch-schedule.js, dijaga tetap segar tanpa reload halaman selama
   laga berlangsung oleh blok LIVE ENGINE di bawah (masih dari ESPN,
   lihat catatan di sana). Timer berbasis jam browser HANYA dipakai untuk 2
   hal yang memang kosmetik/tidak butuh kebenaran dari API: (a)
   membedakan label "Segera Dimulai" vs "Akan Datang" untuk laga yang
   memang belum mulai (NS), dan (b) fallback kalau match.statusCode
   belum ada sama sekali (data lama / entri manual di luar fetch
   otomatis) — TIDAK PERNAH dipakai untuk menebak status laga yang
   sudah berjalan.
   ========================================================= */

const LIVE_STATUS_LABELS = {
  "1H": "Babak 1", HT: "Turun Minum", "2H": "Babak 2", ET: "Extra Time", PEN: "Adu Penalti",
  SUSP: "Ditangguhkan", INT: "Terhenti" // status tambahan dari API-Football (lihat API_STATUS_MAP di fetch-schedule.js)
};

function getMatchStatus(match, dateStr) {
  const today = data.date;

  if (match.statusCode) {
    if (match.statusCode === "NS") return getUpcomingOrSoon(match, dateStr, today, "NS");
    if (LIVE_STATUS_LABELS[match.statusCode]) {
      return { code: "live", label: match.minuteDisplay || LIVE_STATUS_LABELS[match.statusCode], statusCode: match.statusCode, minuteDisplay: match.minuteDisplay || "" };
    }
    if (match.statusCode === "FT") return { code: "finished", label: "Selesai", statusCode: "FT" };
    if (match.statusCode === "POSTP") return { code: "postponed", label: "Ditunda", statusCode: "POSTP" };
    if (match.statusCode === "CANC") return { code: "postponed", label: "Dibatalkan", statusCode: "CANC" };
    return { code: "unknown", label: "-", statusCode: match.statusCode };
  }

  // ---- Fallback (tanpa statusCode dari API) ----
  if (typeof match.homeScore === "number" && typeof match.awayScore === "number" && dateStr !== today) {
    return { code: "finished", label: "Selesai" };
  }
  if (today && dateStr < today) return { code: "finished", label: "Selesai" };
  if (today && dateStr > today) return { code: "upcoming", label: "Akan Datang" };

  const cleanTime = (match.time || "00:00").replace(/\s?WIB/i, "").trim();
  const target = new Date(`${dateStr}T${cleanTime}:00+07:00`);
  if (isNaN(target.getTime())) return { code: "unknown", label: "-" };

  const SOON = 45 * 60000;
  const DURATION = 115 * 60000; // ~90 menit + jeda + tambahan waktu
  const diff = target.getTime() - Date.now();

  if (diff > SOON) return { code: "upcoming", label: "Akan Datang" };
  if (diff > 0) return { code: "soon", label: "Segera Dimulai" };
  if (diff > -DURATION) return { code: "live", label: "Berlangsung" };
  return { code: "finished", label: "Selesai" };
}

// Laga NS (belum mulai, sudah dikonfirmasi API) — bedakan "soon" murni
// dari jarak ke kickoff supaya badge "Segera Dimulai" tetap ada, tanpa
// menebak status pertandingan itu sendiri dari jam browser.
function getUpcomingOrSoon(match, dateStr, today, statusCode) {
  if (today && dateStr < today) return { code: "finished", label: "Selesai", statusCode };
  if (today && dateStr > today) return { code: "upcoming", label: "Akan Datang", statusCode };

  const cleanTime = (match.time || "00:00").replace(/\s?WIB/i, "").trim();
  const target = new Date(`${dateStr}T${cleanTime}:00+07:00`);
  if (isNaN(target.getTime())) return { code: "upcoming", label: "Akan Datang", statusCode };

  const diff = target.getTime() - Date.now();
  return diff <= 45 * 60000
    ? { code: "soon", label: "Segera Dimulai", statusCode }
    : { code: "upcoming", label: "Akan Datang", statusCode };
}

/* =========================================================
   TOAST NOTIFIKASI
   ========================================================= */

function showToast(message, duration = 2800) {
  let toast = document.querySelector(".bk-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "bk-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), duration);
}

/* =========================================================
   JAM REAL-TIME WIB
   ========================================================= */

function startClock() {
  const el = getElement("live-clock");
  if (!el) return;
  function tick() {
    const wib = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const h = String(wib.getHours()).padStart(2, "0");
    const m = String(wib.getMinutes()).padStart(2, "0");
    const s = String(wib.getSeconds()).padStart(2, "0");
    el.textContent = `${h}:${m}:${s} WIB`;
  }
  tick();
  setInterval(tick, 1000);
}

/* =========================================================
   SCROLL TO TOP
   ========================================================= */

function initScrollTop() {
  const btn = document.createElement("button");
  btn.className = "scroll-top-btn";
  btn.innerHTML = "&uarr;";
  btn.title = "Kembali ke atas";
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================================================
   NAV MOBILE (hamburger dropdown)
   ========================================================= */

function initMobileNav() {
  const toggle = getElement("nav-toggle");
  const nav = getElement("site-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

/* =========================================================
   SEARCH PERTANDINGAN
   ========================================================= */

let searchQuery = "";

function initSearch() {
  const input = getElement("match-search");
  if (!input) return;

  input.addEventListener("input", function () {
    searchQuery = this.value.trim().toLowerCase();
    const activeFilter = document.querySelector("#filters .filter-btn.active");
    const league = activeFilter ? activeFilter.dataset.league : "Semua";
    renderSchedule(league);
  });
}

/* =========================================================
   TAB RENTANG HARI (Riwayat / Hari Ini / Akan Datang) — BARU
   ========================================================= */

let activeDateKey = "";

function getAvailableDateKeys() {
  const historyDates = Object.keys(data.history || {}).sort();
  const upcomingDates = Object.keys(data.upcoming || {}).sort();
  const keys = [...historyDates];
  if (data.date) keys.push(data.date);
  keys.push(...upcomingDates);
  return [...new Set(keys)];
}

function getMatchesForDateKey(dateKey) {
  if (dateKey === data.date) return Array.isArray(data.matches) ? data.matches : [];
  if (data.history[dateKey]) return data.history[dateKey];
  if (data.upcoming[dateKey]) return data.upcoming[dateKey];
  return [];
}

function dayLabelFor(dateKey) {
  if (dateKey === data.date) return "Hari Ini";
  if (data.date && dateKey < data.date) return "Riwayat";
  return "Mendatang";
}

function formatMonthLabel(dateKey) {
  const date = new Date(dateKey + "T00:00:00");
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
}

// Jendela tombol tanggal cepat: ambil sampai NEARBY_WINDOW hari dari daftar
// key yang TERSEDIA (bukan hitung kalender mentah — key sudah pasti cuma
// tanggal yang punya data), dipusatkan di sekitar hari ini kalau bisa.
const NEARBY_WINDOW = 7;

function getNearbyDateKeys(keys) {
  if (keys.length <= NEARBY_WINDOW) return keys;
  let idx = data.date ? keys.indexOf(data.date) : -1;
  if (idx === -1) idx = keys.length - 1;
  let start = idx - Math.floor((NEARBY_WINDOW - 1) / 2);
  let end = start + NEARBY_WINDOW;
  if (start < 0) { end -= start; start = 0; }
  if (end > keys.length) { start -= (end - keys.length); end = keys.length; }
  return keys.slice(Math.max(0, start), end);
}

function renderDayTabs() {
  const pillsWrap = getElement("day-pills");
  const select = getElement("day-select");
  if (!select) return;

  const keys = getAvailableDateKeys();
  activeDateKey = data.date || keys[0] || "";

  if (keys.length <= 1) {
    select.innerHTML = `<option value="${escapeHTML(activeDateKey)}">${escapeHTML(formatDate(activeDateKey))}</option>`;
    select.disabled = true;
    if (pillsWrap) pillsWrap.innerHTML = "";
    return;
  }

  // Dropdown: daftar LENGKAP semua tanggal yang ada data-nya, dikelompokkan
  // per bulan — cara pasti buat lompat ke tanggal/bulan yang tidak muncul
  // di deretan tombol cepat di bawah (mis. riwayat lebih dari seminggu lalu).
  select.disabled = false;
  let currentMonth = null;
  let html = "";
  keys.forEach(k => {
    const month = formatMonthLabel(k);
    if (month !== currentMonth) {
      if (currentMonth !== null) html += `</optgroup>`;
      html += `<optgroup label="${escapeHTML(month)}">`;
      currentMonth = month;
    }
    const label = `${dayLabelFor(k)} · ${formatDateShort(k)}`;
    html += `<option value="${escapeHTML(k)}" ${k === activeDateKey ? "selected" : ""}>${escapeHTML(label)}</option>`;
  });
  html += `</optgroup>`;
  select.innerHTML = html;

  // Tombol tanggal cepat: cuma hari-hari DEKAT hari ini, biar ringkas &
  // gampang diketuk langsung tanpa buka dropdown buat kasus paling umum.
  const renderPills = () => {
    if (!pillsWrap) return;
    const nearbyKeys = getNearbyDateKeys(keys);
    pillsWrap.innerHTML = nearbyKeys.map(k => {
      const isToday = k === data.date;
      const date = new Date(k + "T00:00:00");
      const weekday = isNaN(date.getTime()) ? "" : date.toLocaleDateString("id-ID", { weekday: "short" });
      const day = isNaN(date.getTime()) ? "" : date.getDate();
      return `
        <button type="button" class="day-pill ${k === activeDateKey ? "active" : ""}" data-date="${escapeHTML(k)}" aria-label="${escapeHTML(formatDate(k))}">
          <span class="day-pill-top">${isToday ? "Hari Ini" : escapeHTML(weekday)}</span>
          <span class="day-pill-num">${day}</span>
        </button>`;
    }).join("");
    pillsWrap.querySelectorAll(".day-pill").forEach(btn => {
      btn.addEventListener("click", function () {
        if (this.dataset.date === activeDateKey) return;
        select.value = this.dataset.date;
        select.onchange();
      });
    });
  };
  renderPills();

  select.onchange = function () {
    activeDateKey = this.value;
    const dateEl = getElement("schedule-date");
    if (dateEl) dateEl.textContent = formatDate(activeDateKey);
    if (pillsWrap) {
      // Jendela tombol cepat tetap sekitar HARI INI (bukan ikut geser ke
      // tanggal aktif) — kalau tanggal yang dipilih lewat dropdown ada di
      // luar jendela, wajar tidak ada tombol yang aktif di sini.
      pillsWrap.querySelectorAll(".day-pill").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.date === activeDateKey);
      });
    }
    const activeLeagueBtn = document.querySelector("#filters .filter-btn.active");
    renderSchedule(activeLeagueBtn ? activeLeagueBtn.dataset.league : "Semua");
  };
}

/* =========================================================
   FILTER LIGA
   ========================================================= */

function getLeagues() {
  const matches = getMatchesForDateKey(activeDateKey || data.date);
  return ["Semua", ...new Set(matches.map(m => m.league).filter(Boolean))];
}

function renderFilters(activeLeague = "Semua") {
  const container = getElement("filters");
  if (!container) return;

  const leagues = getLeagues();
  container.innerHTML = leagues.map(league => `
    <button class="filter-btn ${league === activeLeague ? "active" : ""}"
      data-league="${escapeHTML(league)}">
      ${escapeHTML(league)}
    </button>
  `).join("");

  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const league = this.dataset.league;
      searchQuery = "";
      const searchInput = getElement("match-search");
      if (searchInput) searchInput.value = "";
      renderFilters(league);
      renderSchedule(league);
    });
  });
}

/* =========================================================
   FILTER STATUS PINTAR
   ========================================================= */

let statusFilter = "Semua";

function renderFiltersStatus() {
  const container = getElement("filters-status");
  if (!container) return;

  const statuses = [
    { code: "Semua", label: "Semua Status" },
    { code: "soon", label: "Segera Dimulai" },
    { code: "upcoming", label: "Akan Datang" },
    { code: "live", label: "Berlangsung" },
    { code: "finished", label: "Selesai" },
    { code: "postponed", label: "Ditunda/Batal" },
    { code: "big", label: "Big Match" }
  ];

  container.innerHTML = statuses.map(s => `
    <button class="filter-btn status-btn ${s.code === statusFilter ? "active" : ""}"
      data-status="${s.code}">${escapeHTML(s.label)}</button>
  `).join("");

  container.querySelectorAll(".status-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      statusFilter = this.dataset.status;
      renderFiltersStatus();
      const activeLeagueBtn = document.querySelector("#filters .filter-btn.active");
      renderSchedule(activeLeagueBtn ? activeLeagueBtn.dataset.league : "Semua");
    });
  });
}

/* =========================================================
   JADWAL
   ========================================================= */

function renderDate() {
  const el = getElement("schedule-date");
  if (el) el.textContent = formatDate(activeDateKey || data.date);
}

function renderSchedule(filter = "Semua") {
  const container = getElement("schedule-grid");
  if (!container) return;

  const dateKey = activeDateKey || data.date;
  let matches = getMatchesForDateKey(dateKey);

  if (filter !== "Semua") {
    matches = matches.filter(m => m.league === filter);
  }

  if (searchQuery) {
    matches = matches.filter(m =>
      (m.home || "").toLowerCase().includes(searchQuery) ||
      (m.away || "").toLowerCase().includes(searchQuery) ||
      (m.league || "").toLowerCase().includes(searchQuery)
    );
  }

  const bigMatchHome = data.bigMatch ? slugifyTeamName(data.bigMatch.home) : "";
  const bigMatchAway = data.bigMatch ? slugifyTeamName(data.bigMatch.away) : "";

  if (statusFilter === "big") {
    matches = matches.filter(m =>
      bigMatchHome && bigMatchAway &&
      slugifyTeamName(m.home) === bigMatchHome &&
      slugifyTeamName(m.away) === bigMatchAway
    );
  } else if (statusFilter !== "Semua") {
    matches = matches.filter(m => getMatchStatus(m, dateKey).code === statusFilter);
  }

  // Saat menampilkan "Semua" liga atau "Semua Status", utamakan liga/tim
  // besar di paling atas (pakai rating yang sama dengan Klub Dominan —
  // LEAGUE_WEIGHTS + POPULAR_CLUBS). Sort stabil, jadi urutan jam tayang
  // yang aslinya sama tetap terjaga di antara match dengan rating sama.
  if (filter === "Semua" || statusFilter === "Semua") {
    matches = [...matches].sort((a, b) => deriveRating(b) - deriveRating(a));
  }

  if (matches.length === 0) {
    container.innerHTML = `
      <div class="match-empty">
        <div class="match-empty-title">Tidak ada pertandingan</div>
        <div class="match-empty-sub">${searchQuery ? `Tidak ada hasil untuk "${escapeHTML(searchQuery)}"` : "Belum ada jadwal untuk kategori ini."}</div>
      </div>`;
    return;
  }

  container.innerHTML = matches.map((match, i) => createMatchCard(match, i, bigMatchHome, bigMatchAway, dateKey)).join("");
  markVisible(container.querySelectorAll(".reveal"));

  container.querySelectorAll(".mc-detail-toggle").forEach(btn => {
    btn.addEventListener("click", function () {
      const idx = this.dataset.toggle;
      const panel = getElement(`mc-detail-${idx}`);
      if (!panel) return;
      const open = panel.classList.toggle("open");
      this.textContent = open ? "Sembunyikan Detail" : "Lihat Detail Prediksi";
    });
  });

  container.querySelectorAll(".mc-events-toggle").forEach(btn => {
    btn.addEventListener("click", function () {
      const idx = this.dataset.toggle;
      const count = this.dataset.count;
      const panel = getElement(`mc-events-${idx}`);
      if (!panel) return;
      const open = panel.classList.toggle("open");
      this.innerHTML = open
        ? "Sembunyikan Detail Pertandingan &#9652;"
        : `Lihat Detail Pertandingan (${count}) &#9662;`;
    });
  });
}

/* =========================================================
   MATCH CARD
   ========================================================= */

function createMatchCard(match, index, bigMatchHome, bigMatchAway, dateStr) {
  const homeName  = escapeHTML(match.home);
  const awayName  = escapeHTML(match.away);
  const league    = escapeHTML(match.league);
  const round     = escapeHTML(match.round || "");
  const time      = escapeHTML(formatTime(match.time));
  const prediction = escapeHTML(match.prediction || "-");

  const homeLogoSrc = match.homeLogo || getTeamLogoPath(match.home);
  const awayLogoSrc = match.awayLogo || getTeamLogoPath(match.away);
  const homeInitials = escapeHTML(getInitials(match.home));
  const awayInitials = escapeHTML(getInitials(match.away));

  const isBig = bigMatchHome && bigMatchAway &&
    slugifyTeamName(match.home) === bigMatchHome &&
    slugifyTeamName(match.away) === bigMatchAway;

  const status = getMatchStatus(match, dateStr);
  const probs = deriveProbability(match);
  const ou = deriveOU(match);
  const btts = deriveBTTS(match);
  const confidence = deriveConfidence(probs);

  // Skor real — otomatis dari homeScore/awayScore di data.js.
  // Laga "live" → skor berjalan (update tiap beberapa menit oleh fetcher).
  // Laga "finished" → skor akhir, tersimpan permanen.
  const hasScore = typeof match.homeScore === "number" && typeof match.awayScore === "number";
  const centerDisplay = hasScore ? `${match.homeScore} - ${match.awayScore}` : "VS";
  const isLive = status.code === "live";
  const isFinished = status.code === "finished";
  const isPostponed = status.code === "postponed";

  const goals = Array.isArray(match.goals) ? match.goals : [];
  const cards = Array.isArray(match.cards) ? match.cards : [];
  const hasEvents = goals.length > 0 || cards.length > 0;
  const totalEvents = goals.length + cards.length;

  // Daftar gol/kartu disembunyikan di balik toggle supaya tinggi kartu
  // tidak melar ikut laga dengan jumlah gol terbanyak (lihat mc-events-toggle).
  const eventsToggleHTML = hasEvents ? `
    <button class="mc-events-toggle" data-toggle="${index}" data-count="${totalEvents}">Lihat Detail Pertandingan (${totalEvents}) &#9662;</button>` : "";

  const eventsPanelHTML = hasEvents ? `
    <div class="mc-events-panel" id="mc-events-${index}">
      <div class="mc-events">
        ${goals.map(g => `
          <div class="mc-event">
            <span class="mc-event-dot"></span>
            <span class="mc-event-text">${g.minute ? `${escapeHTML(g.minute)}' ` : ""}${escapeHTML(g.player || "-")} <i>(${g.team === "away" ? awayName : homeName})</i></span>
          </div>`).join("")}
        ${cards.map(c => `
          <div class="mc-event">
            <span class="mc-event-dot ${c.type === "red" ? "card-r" : "card-y"}"></span>
            <span class="mc-event-text">${c.minute ? `${escapeHTML(c.minute)}' ` : ""}${escapeHTML(c.player || "-")} <i>(${c.team === "away" ? awayName : homeName})</i></span>
          </div>`).join("")}
      </div>
    </div>` : "";

  const footRight = isPostponed
    ? status.label
    : isFinished
      ? (hasScore ? "Skor Akhir" : `Prediksi ${prediction}`)
      : (hasScore ? `Prediksi awal ${prediction}` : `Prediksi ${prediction}`);

  return `
    <div class="match-card reveal ${isBig ? "match-card--big" : ""} ${isLive ? "match-card--live" : ""} ${(isFinished || isPostponed) ? "match-card--finished" : ""}" data-index="${index}" data-match-key="${escapeHTML(buildMatchKey(match.home, match.away))}">
      ${isBig ? '<div class="mc-big-badge">Big Match</div>' : ""}
      <span class="mc-status ${status.code}">${isLive ? '<span class="mc-live-dot"></span>' : ""}${escapeHTML(status.label)}</span>
      <div class="mc-top">
        <span class="league"${round ? ` title="${round}"` : ""}>${league}</span>
        <span>${time} WIB</span>
      </div>
      <div class="mc-teams">
        <div class="mc-team">
          <div class="mc-badge mc-badge-image">
            <img src="${escapeHTML(homeLogoSrc)}" alt="${homeName}" loading="lazy"
              onerror="handleLogoError(this, '${homeInitials}')">
          </div>
          <div class="mc-name">${homeName}</div>
        </div>
        <div class="mc-vs ${hasScore ? "mc-vs--score" : ""} ${isLive ? "mc-vs--live" : ""} ${isFinished && hasScore ? "mc-vs--final" : ""}">${centerDisplay}</div>
        <div class="mc-team">
          <div class="mc-badge mc-badge-image">
            <img src="${escapeHTML(awayLogoSrc)}" alt="${awayName}" loading="lazy"
              onerror="handleLogoError(this, '${awayInitials}')">
          </div>
          <div class="mc-name">${awayName}</div>
        </div>
      </div>
      ${eventsToggleHTML}
      ${eventsPanelHTML}
      <div class="mc-foot">
        <span class="mc-timer">Kick-off ${time} WIB</span>
        <span class="mc-pred">${footRight}</span>
      </div>
      <button class="mc-detail-toggle" data-toggle="${index}">Lihat Detail Prediksi</button>
      <div class="mc-detail" id="mc-detail-${index}">
        <div class="mc-detail-inner">
          <div class="mc-1x2-row">
            <div class="mc-1x2-item"><span class="lbl">Home</span><span class="val">${probs.home}%</span></div>
            <div class="mc-1x2-item"><span class="lbl">Seri</span><span class="val">${probs.draw}%</span></div>
            <div class="mc-1x2-item"><span class="lbl">Away</span><span class="val">${probs.away}%</span></div>
          </div>
          <div class="mc-extra-row"><span>Over/Under ${ou.line}</span><b>Over ${ou.over}% &middot; Under ${ou.under}%</b></div>
          <div class="mc-extra-row"><span>BTTS (kedua tim cetak gol)</span><b>Ya ${btts.yes}% &middot; Tidak ${btts.no}%</b></div>
          <span class="mc-confidence ${confidence}">Confidence: ${confidence}</span>
        </div>
      </div>
    </div>`;
}

/* =========================================================
   LIVE ENGINE — skor/status laga yang sedang berlangsung dipantau
   langsung dari ESPN oleh BROWSER (endpoint publiknya mengizinkan
   akses lintas-origin — Access-Control-Allow-Origin: *, jadi tidak
   perlu backend/proxy tambahan). node fetch-schedule.js (dijadwalkan
   lewat GitHub Actions, lihat README-DEPLOY.md) tetap jalan berkala
   sebagai baseline data.js, tapi laga yang SEDANG berlangsung tidak
   menunggu siklus itu — dipatch langsung ke DOM di sini, tanpa reload
   halaman & tanpa timer lokal sebagai sumber kebenaran (jam browser
   cuma dipakai getMatchStatus() untuk label "Segera Dimulai").

   CATATAN PASCA-MIGRASI API-FOOTBALL: baseline data.js sekarang dari
   API-Football (lihat fetch-schedule.js), TAPI blok ini MASIH pakai
   ESPN, sengaja belum ikut dimigrasi — API-Football butuh API key di
   header tiap request, jadi tidak aman dipanggil langsung dari browser
   pengunjung tanpa proxy (key berbayar bisa dicuri dari DevTools &
   kuota jebol). Konsekuensinya: pencocokan match di sini (buildMatchKey,
   berbasis nama tim) membandingkan nama tim ESPN dengan nama tim
   API-Football, yang kadang beda ejaan (mis. "Newcastle" vs "Newcastle
   United") — kalau tidak cocok persis, laga itu cuma TIDAK ikut
   ter-live-update di sini (fallback ke status/skor dari data.js
   terakhir), bukan error. Migrasi penuh ke API-Football untuk live
   butuh proxy (mis. Netlify Function) supaya key tidak ter-expose.

   Interval adaptif: laga live disinkron tiap 25 detik, laga yang
   kick-off-nya <=10 menit lagi tiap 60 detik, dan berhenti total kalau
   tidak ada laga yang perlu dipantau (hemat request & baterai). Tab
   yang sedang tidak aktif (Page Visibility API) dijeda, lalu langsung
   sinkron ulang begitu tab aktif kembali — sesuai poin "kalau tab
   terlambat update, sinkronkan ulang" di permintaan awal.
   ========================================================= */

// Mirror dari ESPN_STATUS_MAP/getEspnState() di fetch-schedule.js —
// JAGA supaya tetap sama persis kalau salah satu diubah (server &
// browser sama-sama perlu menerjemahkan status ESPN yang sama).
const ESPN_STATUS_MAP_CLIENT = {
  STATUS_SCHEDULED: "NS", STATUS_FIRST_HALF: "1H", STATUS_HALFTIME: "HT",
  STATUS_SECOND_HALF: "2H", STATUS_IN_PROGRESS: "1H", STATUS_EXTRA_TIME: "ET",
  STATUS_FIRST_EXTRA: "ET", STATUS_SECOND_EXTRA: "ET", STATUS_HALFTIME_ET: "ET",
  STATUS_PENALTY: "PEN", STATUS_SHOOTOUT: "PEN", STATUS_FULL_TIME: "FT",
  STATUS_FINAL: "FT", STATUS_POSTPONED: "POSTP", STATUS_CANCELED: "CANC",
  STATUS_ABANDONED: "CANC", STATUS_DELAYED: "POSTP"
};

function deriveEspnStateClient(event, comp) {
  const type = event?.status?.type || comp?.status?.type || {};
  const status = event?.status || comp?.status || {};
  const name = (type.name || "").toUpperCase();
  let code = ESPN_STATUS_MAP_CLIENT[name];
  if (!code) {
    if (type.state === "post") code = type.completed === false ? "POSTP" : "FT";
    else if (type.state === "in") code = "1H";
    else code = "NS";
  }
  const minuteDisplay = status.displayClock || (code === "HT" ? "HT" : code === "FT" ? "FT" : "");
  return { state: type.state || "pre", code, minuteDisplay };
}

const LIVE_POLL_MS = 25000;
const SOON_POLL_MS = 60000;
const LIVE_POLL_MAX_BACKOFF_MS = 90000;
const LIVE_POLL_SOON_WINDOW_MS = 10 * 60000;

let liveEngineTimer = null;
let liveEngineFailCount = 0;
let liveEngineInFlight = false;

function toEspnDateStrClient(d) {
  return `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
}

// Rentang tanggal UTC yang cukup lebar (H-1 s.d. H+1 dari data.date
// WIB) supaya laga yang melewati batas hari UTC/WIB tetap tertangkap,
// tanpa perlu aritmetika offset WIB presisi di sisi browser.
function liveEngineDateRangeParam() {
  const base = new Date(`${data.date}T00:00:00+07:00`);
  const d1 = new Date(base.getTime() - 86400000);
  const d2 = new Date(base.getTime() + 86400000);
  return `${toEspnDateStrClient(d1)}-${toEspnDateStrClient(d2)}`;
}

// Laga yang perlu dipantau real-time: sedang berlangsung, ATAU NS
// tapi kick-off-nya sudah dekat (supaya langsung ke-live begitu wasit
// meniup peluit, tanpa menunggu siklus fetch-schedule.js berikutnya).
function getLiveWatchList() {
  const matches = Array.isArray(data.matches) ? data.matches : [];
  const dateKey = data.date;
  return matches.filter(m => {
    const status = getMatchStatus(m, dateKey);
    if (status.code === "live") return true;
    if (status.code === "soon" && m.statusCode === "NS") {
      const cleanTime = (m.time || "00:00").replace(/\s?WIB/i, "").trim();
      const target = new Date(`${dateKey}T${cleanTime}:00+07:00`).getTime();
      return !isNaN(target) && target - Date.now() <= LIVE_POLL_SOON_WINDOW_MS;
    }
    return false;
  });
}

function patchMatchCardDOM(match, prevHomeScore, prevAwayScore) {
  const key = buildMatchKey(match.home, match.away);
  const card = Array.from(document.querySelectorAll(".match-card[data-match-key]"))
    .find(el => el.dataset.matchKey === key);
  if (!card) return; // sedang tersaring filter/pencarian — data.matches tetap ter-update

  const status = getMatchStatus(match, data.date);
  const isLive = status.code === "live";
  const isFinished = status.code === "finished";
  const isPostponed = status.code === "postponed";
  const hasScore = typeof match.homeScore === "number" && typeof match.awayScore === "number";

  card.classList.toggle("match-card--live", isLive);
  card.classList.toggle("match-card--finished", isFinished || isPostponed);

  const statusEl = card.querySelector(".mc-status");
  if (statusEl) {
    statusEl.className = `mc-status ${status.code}`;
    statusEl.innerHTML = `${isLive ? '<span class="mc-live-dot"></span>' : ""}${escapeHTML(status.label)}`;
  }

  const vsEl = card.querySelector(".mc-vs");
  if (vsEl) {
    vsEl.textContent = hasScore ? `${match.homeScore} - ${match.awayScore}` : "VS";
    vsEl.className = ["mc-vs", hasScore && "mc-vs--score", isLive && "mc-vs--live", isFinished && hasScore && "mc-vs--final"]
      .filter(Boolean).join(" ");
  }

  const footEl = card.querySelector(".mc-pred");
  if (footEl) {
    const prediction = escapeHTML(match.prediction || "-");
    footEl.textContent = isPostponed
      ? status.label
      : isFinished
        ? (hasScore ? "Skor Akhir" : `Prediksi ${prediction}`)
        : (hasScore ? `Prediksi awal ${prediction}` : `Prediksi ${prediction}`);
  }

  const scoreChanged = hasScore &&
    (typeof prevHomeScore === "number" || typeof prevAwayScore === "number") &&
    (prevHomeScore !== match.homeScore || prevAwayScore !== match.awayScore);
  if (scoreChanged) {
    showToast(`⚽ ${match.home} ${match.homeScore}-${match.awayScore} ${match.away}`);
  }
}

// Status + skor live Big Match — dipakai baik saat render awal
// (renderBigMatch) maupun tiap tick live engine, supaya "VS" statis
// berubah jadi skor berjalan begitu laganya mulai, tanpa reload.
function applyBigMatchVsDisplay(bm) {
  const statusEl = getElement("bm-status");
  const vsEl = getElement("bm-vs");
  if (!bm || (!statusEl && !vsEl)) return;

  const status = getMatchStatus(bm, bm.date);
  if (statusEl) statusEl.textContent = status.label;

  if (vsEl) {
    const hasScore = typeof bm.homeScore === "number" && typeof bm.awayScore === "number";
    vsEl.textContent = hasScore ? `${bm.homeScore} - ${bm.awayScore}` : "VS";
    vsEl.className = ["bm-vs", hasScore && "bm-vs--score"].filter(Boolean).join(" ");
  }
}

// Cari kandidat Big Match pengganti dari data.matches (liga prioritas
// sama seperti pickBigMatch() di fetch-schedule.js) — dipakai begitu
// Big Match yang sedang tampil berstatus selesai, supaya tidak dibiarkan
// nongkrong sebagai laga basi sampai fetch-schedule.js jalan lagi.
function pickNextBigMatch(excludeKey) {
  const matches = Array.isArray(data.matches) ? data.matches : [];
  const candidates = matches.filter(m => {
    if (buildMatchKey(m.home, m.away) === excludeKey) return false;
    const code = getMatchStatus(m, data.date).code;
    return code !== "finished" && code !== "postponed";
  });
  if (!candidates.length) return null;

  for (const league of BIGMATCH_PRIORITY_CLIENT) {
    const found = candidates.find(m => m.league === league);
    if (found) return found;
  }
  return candidates[0];
}

// Dipanggil tiap tick live engine. Kalau Big Match yang sedang tampil
// sudah selesai, gantikan ke kandidat berikutnya (lihat pickNextBigMatch)
// & render ulang langsung, tanpa reload & tanpa nunggu fetch-schedule.js
// jalan lagi. h2h/form/stadium/background sengaja dikosongkan karena
// entri data.matches biasa tidak membawa field itu (beda dari data
// bigMatch asli yang diambil khusus lewat fetchBigMatchExtras di
// fetch-schedule.js) — blok terkait di UI sudah menangani kosong itu
// dengan baik (nampilkan pesan "belum tersedia").
function swapToNextBigMatchIfFinished() {
  const current = data.bigMatch;
  if (!current) return;
  if (getMatchStatus(current, current.date).code !== "finished") return;

  const currentKey = buildMatchKey(current.home, current.away);
  const next = pickNextBigMatch(currentKey);
  if (!next) return; // tidak ada kandidat lain hari ini — biarkan tampil apa adanya

  data.bigMatch = {
    league: next.league,
    date: data.date,
    time: next.time,
    home: next.home,
    away: next.away,
    stadium: "",
    prediction: next.prediction,
    analysis: `${next.home} bertemu ${next.away} dalam laga ${next.league}. Prediksi ini dibuat otomatis oleh sistem berdasarkan jadwal terbaru.`,
    statusCode: next.statusCode,
    minuteDisplay: next.minuteDisplay,
    homeScore: next.homeScore,
    awayScore: next.awayScore,
    homeLogo: next.homeLogo || "",
    awayLogo: next.awayLogo || "",
    h2h: [],
    form: {}
  };
  renderBigMatch();
}

async function pollLiveScores() {
  if (liveEngineInFlight) return;
  const watchList = getLiveWatchList();
  if (!watchList.length) { stopLiveEngine(); return; }

  liveEngineInFlight = true;
  try {
    const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/scoreboard?dates=${liveEngineDateRangeParam()}&limit=1000`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const events = Array.isArray(json.events) ? json.events : [];

    const byKey = new Map();
    events.forEach(ev => {
      const comp = ev?.competitions?.[0];
      const competitors = Array.isArray(comp?.competitors) ? comp.competitors : [];
      const homeC = competitors.find(c => c.homeAway === "home");
      const awayC = competitors.find(c => c.homeAway === "away");
      if (!homeC?.team || !awayC?.team) return;
      const key = buildMatchKey(homeC.team.displayName || homeC.team.name, awayC.team.displayName || awayC.team.name);
      byKey.set(key, { ev, comp, homeC, awayC });
    });

    watchList.forEach(m => {
      const found = byKey.get(buildMatchKey(m.home, m.away));
      if (!found) return;

      const prevHomeScore = m.homeScore;
      const prevAwayScore = m.awayScore;
      const state = deriveEspnStateClient(found.ev, found.comp);
      m.statusCode = state.code;
      m.minuteDisplay = state.minuteDisplay;

      const hasStarted = state.state === "in" || state.state === "post";
      const homeScoreNum = parseInt(found.homeC.score, 10);
      const awayScoreNum = parseInt(found.awayC.score, 10);
      if (hasStarted && !isNaN(homeScoreNum) && !isNaN(awayScoreNum)) {
        m.homeScore = homeScoreNum;
        m.awayScore = awayScoreNum;
      }

      // data.bigMatch adalah SALINAN terpisah dari entri data.matches yang
      // sama (dibuat sekali oleh buildBigMatch() di fetch-schedule.js) —
      // disinkron manual di sini supaya ikut ter-update live, bukan cuma
      // kartu jadwalnya.
      if (data.bigMatch && buildMatchKey(data.bigMatch.home, data.bigMatch.away) === buildMatchKey(m.home, m.away)) {
        data.bigMatch.statusCode = m.statusCode;
        data.bigMatch.minuteDisplay = m.minuteDisplay;
        if (typeof m.homeScore === "number") data.bigMatch.homeScore = m.homeScore;
        if (typeof m.awayScore === "number") data.bigMatch.awayScore = m.awayScore;
      }

      patchMatchCardDOM(m, prevHomeScore, prevAwayScore);
    });

    applyBigMatchVsDisplay(data.bigMatch);
    swapToNextBigMatchIfFinished();
    if (window.BKLivePitch) window.BKLivePitch.sync();
    if (window.BKLineups) window.BKLineups.sync();
    if (window.BKOddsVenue) window.BKOddsVenue.sync();
    liveEngineFailCount = 0;
  } catch (err) {
    liveEngineFailCount++;
    console.warn("Live engine: gagal sinkron skor live, coba lagi.", err.message);
  } finally {
    liveEngineInFlight = false;
    scheduleNextLivePoll();
  }
}

function scheduleNextLivePoll() {
  clearTimeout(liveEngineTimer);
  const watchList = getLiveWatchList();
  if (!watchList.length) { liveEngineTimer = null; return; }

  const anyStrictlyLive = watchList.some(m => getMatchStatus(m, data.date).code === "live");
  const baseInterval = anyStrictlyLive ? LIVE_POLL_MS : SOON_POLL_MS;
  // Kalau beberapa kali berturut-turut gagal (API bermasalah), mundur
  // bertahap sampai batas atas — tetap coba lagi otomatis, tidak
  // berhenti total, supaya begitu API pulih langsung sinkron lagi.
  const backoff = Math.min(LIVE_POLL_MAX_BACKOFF_MS, baseInterval * Math.pow(1.6, liveEngineFailCount));
  liveEngineTimer = setTimeout(pollLiveScores, backoff);
}

function stopLiveEngine() {
  clearTimeout(liveEngineTimer);
  liveEngineTimer = null;
}

// Dipanggil tiap kali data.matches bisa saja berubah cakupannya (mis.
// pindah tab hari/filter) supaya live engine ikut menyesuaikan tanpa
// perlu reload halaman.
function refreshLiveEngine() {
  if (!liveEngineTimer && !liveEngineInFlight) {
    const watchList = getLiveWatchList();
    if (watchList.length) pollLiveScores();
  }
}

function startLiveEngine() {
  refreshLiveEngine();

  // Tab tidak aktif → jeda polling (hemat request/baterai). Begitu
  // aktif lagi → sinkron ulang SEKARANG (bukan menunggu interval
  // berikutnya), supaya data yang telat ter-update saat tab
  // background langsung ter-koreksi.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopLiveEngine();
    } else {
      liveEngineFailCount = 0;
      refreshLiveEngine();
    }
  });
}

/* =========================================================
   BIG MATCH RADAR
   ========================================================= */

function renderRadar() {
  const container = getElement("radar-grid");
  if (!container) return;

  const matches = Array.isArray(data.matches) ? data.matches : [];
  if (!matches.length) { container.innerHTML = ""; return; }

  const dateKey = data.date;

  // Prioritaskan laga yang belum tanding (upcoming/segera) supaya prediksi
  // masih actionable bagi pengunjung; kalau semua sudah live/selesai,
  // fallback ke seluruh laga hari ini.
  const notYetPlayed = matches.filter(m => {
    const code = getMatchStatus(m, dateKey).code;
    return code === "upcoming" || code === "soon";
  });
  const pool = notYetPlayed.length ? notYetPlayed : matches;

  const scored = pool.map(m => {
    const probs = deriveProbability(m);
    const confidencePct = Math.max(probs.home, probs.draw, probs.away);
    const confidence = deriveConfidence(probs);
    const { h, a } = deriveGoals(m.prediction);
    return { ...m, confidencePct, confidence, predScore: `${h} - ${a}` };
  });

  scored.sort((a, b) => b.confidencePct - a.confidencePct);
  const top = scored.slice(0, 3);

  container.innerHTML = top.map((m, i) => `
    <div class="radar-card reveal in">
      <span class="radar-rank">#${i + 1}</span>
      <div class="radar-league">${escapeHTML(m.league)}</div>
      <div class="radar-teams"><span class="radar-team-link">${escapeHTML(m.home)}</span> <span class="vs-small">vs</span> <span class="radar-team-link">${escapeHTML(m.away)}</span></div>
      <div class="radar-meta">
        <span>Prediksi <b>${escapeHTML(m.predScore)}</b> &middot; ${escapeHTML(formatTime(m.time))} WIB</span>
        <span class="mc-confidence ${m.confidence}">${m.confidence}</span>
      </div>
      <div class="radar-meta" style="margin-top:6px;">
        <span class="radar-rating" style="width:100%;">
          <span class="radar-rating-bar" style="flex:1;"><span style="width:${m.confidencePct}%"></span></span>
          <b>${m.confidencePct}%</b>
        </span>
      </div>
    </div>
  `).join("");
}

/* =========================================================
   BIG MATCH
   ========================================================= */

function renderBigMatch() {
  const bm = data.bigMatch;
  if (!bm) { console.warn("Big Match belum diisi di data.js"); return; }

  const container = getElement("bigmatch");
  if (container) {
    if (bm.background) {
      container.style.backgroundImage = `
        linear-gradient(135deg, rgba(255,255,255,.80), rgba(234,244,255,.88)),
        url("${bm.background}")`;
      container.style.backgroundSize = "cover";
      container.style.backgroundPosition = "center";
    } else {
      // Laga sebelumnya (kalau ada) mungkin punya background custom —
      // dibersihkan supaya tidak nyangkut begitu Big Match diganti ke
      // laga lain yang tidak punya background (lihat swapToNextBigMatchIfFinished).
      container.style.backgroundImage = "";
    }
  }

  const set = (id, val) => { const el = getElement(id); if (el) el.textContent = val; };
  set("bm-league",   bm.league || "BIG MATCH");
  set("bm-home-name", bm.home || "");
  set("bm-away-name", bm.away || "");
  set("bm-date",     formatDate(bm.date));
  set("bm-time",     `${bm.time || "--:--"} WIB`);
  set("bm-stadium",  bm.stadium || "");
  set("bm-prediction", bm.prediction || "-");
  set("bm-analysis", bm.analysis || "");
  applyBigMatchVsDisplay(bm);

  const setLogo = (id, name, override) => {
    const el = getElement(id);
    if (!el) return;
    el.src = override || getTeamLogoPath(name);
    el.alt = name || "";
    el.onerror = function () { handleLogoError(this, getInitials(name)); };
  };
  setLogo("bm-home-logo", bm.home, bm.homeLogo);
  setLogo("bm-away-logo", bm.away, bm.awayLogo);

  renderBigMatchProbability(bm);
  renderBigMatchH2H(bm);
  renderBigMatchForm(bm);
  renderBigMatchVote(bm);
  renderBigMatchGuess(bm);
  if (window.BKLivePitch) window.BKLivePitch.sync();
  if (window.BKLineups) window.BKLineups.sync();
  if (window.BKOddsVenue) window.BKOddsVenue.sync();

  // Detail H2H/Form/Susunan Pemain/Voting/Tebak Skor disembunyikan di
  // balik toggle secara default supaya kartu Big Match tidak terlalu
  // panjang. Wiring SEKALI SAJA (guard dataset.wired) — renderBigMatch()
  // bisa terpanggil lebih dari sekali per page load (mis. Big Match
  // langsung diganti ke laga lain lewat swapToNextBigMatchIfFinished
  // begitu halaman dibuka, kalau laga awal kebetulan sudah selesai) —
  // tanpa guard ini listener menumpuk, dan satu klik jadi terlihat
  // "tidak ngefek" (toggle ganda saling membatalkan). Label "tertutup"
  // diambil dari teks asli tombol di HTML (bukan di-hardcode ulang di
  // sini) supaya tidak ada dua sumber teks yang bisa saling tidak sinkron.
  const extraToggle = getElement("bm-extra-toggle");
  const extraPanel = getElement("bm-extra-collapse");
  if (extraToggle && extraPanel && !extraToggle.dataset.wired) {
    const closedLabel = extraToggle.innerHTML;
    extraToggle.addEventListener("click", () => {
      const open = extraPanel.classList.toggle("open");
      extraToggle.innerHTML = open ? "Sembunyikan Detail &#9652;" : closedLabel;
    });
    extraToggle.dataset.wired = "1";
  }
}

/* Blok "Tebak Skor Kamu" — sepenuhnya ditangani account.js (butuh login).
   Fungsi ini cuma jembatan supaya script.js tetap jalan normal meski
   account.js belum di-setup / belum dimuat (misal saat development). */
function renderBigMatchGuess(bm) {
  if (window.BKAccount && typeof window.BKAccount.renderGuessBlock === "function") {
    window.BKAccount.renderGuessBlock(bm);
  }
}

function renderBigMatchProbability(bm) {
  const probs = getBmBaseProbs(bm);
  const { home, draw, away } = probs;

  const setBar = (sel, val) => {
    const el = document.querySelector(sel);
    if (el) setTimeout(() => el.style.width = `${val}%`, 300);
  };
  setBar(".meter .home", home);
  setBar(".meter .draw", draw);
  setBar(".meter .away", away);

  const setLabel = (id, val) => { const el = getElement(id); if (el) el.textContent = `${val}%`; };
  setLabel("bm-home-probability", home);
  setLabel("bm-draw-probability", draw);
  setLabel("bm-away-probability", away);
}

/* =========================================================
   BIG MATCH — HEAD TO HEAD
   ========================================================= */

function renderBigMatchH2H(bm) {
  const el = getElement("bm-h2h-content");
  if (!el) return;

  const h2h = Array.isArray(bm.h2h) ? bm.h2h : [];
  if (!h2h.length) {
    el.innerHTML = `<div class="bm-empty-note">Data head-to-head belum tersedia. Tambahkan riwayat pertemuan terakhir di <b>data.js</b> (field <code>bigMatch.h2h</code>) supaya tampil di sini.</div>`;
    return;
  }

  let winHome = 0, winAway = 0, draw = 0, goalsHome = 0, goalsAway = 0;
  h2h.forEach(g => {
    const parts = (g.score || "").split(/[-–]/).map(s => parseInt(s.trim(), 10));
    const gh = isNaN(parts[0]) ? 0 : parts[0];
    const ga = isNaN(parts[1]) ? 0 : parts[1];
    const homeWasBmHome = g.home === bm.home;
    const bmHomeGoals = homeWasBmHome ? gh : ga;
    const bmAwayGoals = homeWasBmHome ? ga : gh;
    goalsHome += bmHomeGoals;
    goalsAway += bmAwayGoals;
    if (bmHomeGoals > bmAwayGoals) winHome++;
    else if (bmHomeGoals < bmAwayGoals) winAway++;
    else draw++;
  });

  el.innerHTML = `
    <ul class="h2h-list">
      ${h2h.slice(0, 5).map(g => `<li><span>${escapeHTML(g.home)} vs ${escapeHTML(g.away)}</span><b>${escapeHTML(g.score)}</b></li>`).join("")}
    </ul>
    <div class="h2h-summary">
      <span>Menang <b>${winHome}</b></span>
      <span>Seri <b>${draw}</b></span>
      <span>Kalah <b>${winAway}</b></span>
      <span>Gol <b>${goalsHome}-${goalsAway}</b></span>
    </div>`;
}

/* =========================================================
   BIG MATCH — FORM TIM
   ========================================================= */

function renderBigMatchForm(bm) {
  const el = getElement("bm-form-content");
  if (!el) return;

  const form = bm.form || {};
  const homeForm = form.home || {};
  const awayForm = form.away || {};
  const hasHome = Array.isArray(homeForm.results) && homeForm.results.length;
  const hasAway = Array.isArray(awayForm.results) && awayForm.results.length;

  if (!hasHome && !hasAway) {
    el.innerHTML = `<div class="bm-empty-note">Data form tim belum tersedia. Tambahkan 5 hasil terakhir di <b>data.js</b> (field <code>bigMatch.form</code>) supaya tampil di sini.</div>`;
    return;
  }

  const barLabels = { attack: "Attack", defense: "Defense", home: "Home" };

  const renderTeam = (name, f) => {
    if (!f || !Array.isArray(f.results) || !f.results.length) return "";
    const badges = f.results.map(r => `<span class="form-badge ${escapeHTML(r)}">${escapeHTML(r)}</span>`).join("");
    const bars = ["attack", "defense", "home"]
      .filter(k => typeof f[k] === "number")
      .map(k => `
        <div class="form-bar-row">
          <span>${barLabels[k]}</span>
          <div class="form-bar-track"><span style="width:${f[k]}%"></span></div>
          <span class="form-bar-val">${f[k]}%</span>
        </div>`).join("");
    return `<div class="form-team"><div class="form-team-name">${escapeHTML(name)}</div><div class="form-badges">${badges}</div>${bars}</div>`;
  };

  el.innerHTML = renderTeam(bm.home, homeForm) + renderTeam(bm.away, awayForm);
}

/* =========================================================
   BIG MATCH — PREDIKSI PENGUNJUNG / VOTING
   ========================================================= */

function getVoteKey(bm) {
  return `bk-vote-${slugifyTeamName(bm.home)}-${slugifyTeamName(bm.away)}-${bm.date}`;
}

/* Key stabil untuk 1 pertandingan, dipakai account.js untuk menyimpan
   tebakan skor / vote ke database (bukan cuma localStorage browser).
   Match belum punya id unik dari sumber data, jadi kombinasi
   tanggal + slug tim home + slug tim away dipakai sebagai pengganti. */
function getMatchKey(match) {
  const dateKey = match.date || activeDateKey || data.date || "";
  return `${dateKey}__${slugifyTeamName(match.home)}__${slugifyTeamName(match.away)}`;
}

function renderBigMatchVote(bm) {
  // Kalau account.js aktif & sudah terhubung ke Supabase, voting ditangani
  // di sana (tersimpan per-akun + hitungan asli semua pengguna). Fallback
  // di bawah ini (localStorage, simulasi sampel) tetap jalan kalau
  // account.js belum di-setup, supaya fitur lama tidak pernah rusak.
  if (window.BKAccount && window.BKAccount.isReady && window.BKAccount.isReady()) {
    window.BKAccount.renderVote(bm);
    return;
  }

  const btnContainer = getElement("bm-vote-buttons");
  const resultsContainer = getElement("bm-vote-results");
  if (!btnContainer || !resultsContainer) return;

  const key = getVoteKey(bm);
  let stored = null;
  try { stored = JSON.parse(localStorage.getItem(key) || "null"); } catch (e) { stored = null; }

  const probs = getBmBaseProbs(bm);
  const SAMPLE = 400;
  const base = {
    home: Math.round(probs.home / 100 * SAMPLE),
    draw: Math.round(probs.draw / 100 * SAMPLE),
    away: Math.round(probs.away / 100 * SAMPLE)
  };
  if (stored && stored.choice && base[stored.choice] !== undefined) {
    base[stored.choice] += 1;
  }
  const total = base.home + base.draw + base.away || 1;
  const pct = {
    home: Math.round(base.home / total * 100),
    draw: Math.round(base.draw / total * 100),
    away: Math.round(base.away / total * 100)
  };

  btnContainer.innerHTML = `
    <button class="vote-btn ${stored && stored.choice === "home" ? "selected" : ""}" data-choice="home">${escapeHTML(bm.home)}</button>
    <button class="vote-btn ${stored && stored.choice === "draw" ? "selected" : ""}" data-choice="draw">Seri</button>
    <button class="vote-btn ${stored && stored.choice === "away" ? "selected" : ""}" data-choice="away">${escapeHTML(bm.away)}</button>
  `;

  resultsContainer.innerHTML = `
    <div class="vote-row"><span>${escapeHTML(bm.home)}</span><div class="form-bar-track"><span style="width:${pct.home}%"></span></div><span class="form-bar-val">${pct.home}%</span></div>
    <div class="vote-row"><span>Seri</span><div class="form-bar-track"><span style="width:${pct.draw}%"></span></div><span class="form-bar-val">${pct.draw}%</span></div>
    <div class="vote-row"><span>${escapeHTML(bm.away)}</span><div class="form-bar-track"><span style="width:${pct.away}%"></span></div><span class="form-bar-val">${pct.away}%</span></div>
  `;

  btnContainer.querySelectorAll(".vote-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const choice = this.dataset.choice;
      try { localStorage.setItem(key, JSON.stringify({ choice })); } catch (e) {}
      showToast("Prediksimu tersimpan!");
      renderBigMatchVote(bm);
    });
  });
}

/* =========================================================
   KLASEMEN LIGA — BARU
   ========================================================= */

function getStandingsLeagues() {
  const provided = Object.keys(data.standings || {});
  const ordered = MAJOR_LEAGUES.filter(l => provided.includes(l));
  const rest = provided.filter(l => !MAJOR_LEAGUES.includes(l));
  return [...ordered, ...rest];
}

let activeStandingsLeague = "";

function renderStandingsFilters() {
  const container = getElement("standings-league-filters");
  if (!container) return;

  const leagues = getStandingsLeagues();
  if (!leagues.length) { container.innerHTML = ""; return; }
  if (!activeStandingsLeague || !leagues.includes(activeStandingsLeague)) {
    activeStandingsLeague = leagues[0];
  }

  container.innerHTML = leagues.map(l => `
    <button class="filter-btn ${l === activeStandingsLeague ? "active" : ""}" data-league="${escapeHTML(l)}">${escapeHTML(l)}</button>
  `).join("");

  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      activeStandingsLeague = this.dataset.league;
      renderStandingsFilters();
      renderStandingsTable();
    });
  });
}

function renderStandingsTable() {
  const wrap = getElement("standings-wrap");
  if (!wrap) return;

  const leagues = getStandingsLeagues();
  if (!leagues.length) {
    wrap.innerHTML = `<div class="standings-empty">Klasemen belum tersedia. Isi <b>data.js</b> (field <code>standings.&lt;nama liga&gt;</code>) dengan array tim untuk menampilkan tabel di sini — bisa diisi otomatis lewat football-data.org.</div>`;
    return;
  }

  const rows = data.standings[activeStandingsLeague] || [];
  if (!rows.length) {
    wrap.innerHTML = `<div class="standings-empty">Belum ada data klasemen untuk liga ini.</div>`;
    return;
  }

  const total = rows.length;
  const VISIBLE_ROWS = 8;

  wrap.innerHTML = `
    <table class="standings-table" id="standings-table">
      <thead>
        <tr>
          <th class="num">#</th>
          <th>Klub</th>
          <th class="num" title="Main (jumlah pertandingan)">
            <svg class="th-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/><line x1="8" y1="3" x2="8" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="3" x2="16" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </th>
          <th class="num" title="Menang-Seri-Kalah">
            <span class="th-wdl-dots"><span class="th-dot th-dot-w"></span><span class="th-dot th-dot-d"></span><span class="th-dot th-dot-l"></span></span>
          </th>
          <th class="num" title="Selisih Gol">
            <svg class="th-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>
          </th>
          <th class="num" title="Poin">
            <svg class="th-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.26 6.6.9-4.9 4.73L18 21.5 12 18l-6 3.5 1.4-6.61-4.9-4.73 6.6-.9L12 2.5z" fill="currentColor"/></svg>
          </th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((r, i) => {
          const zone = r.rank <= 4 ? "zone-top" : (r.rank > total - 3 ? "zone-bottom" : "");
          const logoSrc = r.logo || getTeamLogoPath(r.team);
          const initials = escapeHTML(getInitials(r.team));
          const extraClass = i >= VISIBLE_ROWS ? "row-extra" : "";
          return `
          <tr class="${extraClass}">
            <td class="num"><span class="standings-rank ${zone}">${r.rank}</span></td>
            <td>
              <div class="standings-team">
                <div class="standings-badge mc-badge-image">
                  <img src="${escapeHTML(logoSrc)}" alt="${escapeHTML(r.team)}" loading="lazy" onerror="handleLogoError(this,'${initials}')">
                </div>
                ${escapeHTML(r.team)}
              </div>
            </td>
            <td class="num">${r.played ?? "-"}</td>
            <td class="num">${(r.win ?? "-")}-${(r.draw ?? "-")}-${(r.lose ?? "-")}</td>
            <td class="num">${r.gd ?? "-"}</td>
            <td class="num standings-pts">${r.points ?? "-"}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>
    ${total > VISIBLE_ROWS ? `<button class="section-toggle-btn standings-toggle-btn" id="standings-toggle">Lihat Semua Klasemen (${total} tim) &#9662;</button>` : ""}
    <div class="standings-updated-note">${data.standingsUpdated ? `Diperbarui ${escapeHTML(data.standingsUpdated)}` : "Update klasemen mengikuti jadwal fetch otomatis."}</div>
  `;

  const toggleBtn = getElement("standings-toggle");
  const table = getElement("standings-table");
  if (toggleBtn && table) {
    toggleBtn.addEventListener("click", () => {
      const expanded = table.classList.toggle("expanded");
      toggleBtn.innerHTML = expanded
        ? "Tutup Klasemen &#9652;"
        : `Lihat Semua Klasemen (${total} tim) &#9662;`;
    });
  }
}

function renderStandingsUpdatedLabel() {
  const el = getElement("standings-updated");
  if (el) el.textContent = data.standingsUpdated ? `Update ${data.standingsUpdated}` : "Menunggu data otomatis";
}

/* =========================================================
   TOP SKOR & ASSIST — dari data.topScorers/topAssists (diisi
   fetch-schedule.js lewat /players/topscorers & /players/topassists
   API-Football, dibatasi ke liga yang sama dengan menu Klasemen).
   ========================================================= */

let activeTopStatsType = "topScorers";
let activeTopStatsLeague = "";

function getTopStatsLeagues() {
  const source = data[activeTopStatsType] || {};
  const provided = Object.keys(source);
  const ordered = MAJOR_LEAGUES.filter(l => provided.includes(l));
  const rest = provided.filter(l => !MAJOR_LEAGUES.includes(l));
  return [...ordered, ...rest];
}

function renderTopStatsTypeFilters() {
  const container = getElement("topstats-type-filters");
  if (!container) return;
  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === activeTopStatsType);
  });
  if (!container.dataset.wired) {
    container.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        activeTopStatsType = this.dataset.type;
        activeTopStatsLeague = ""; // biar renderTopStatsLeagueFilters pilih ulang liga pertama yang tersedia
        renderTopStatsTypeFilters();
        renderTopStatsLeagueFilters();
        renderTopStatsTable();
      });
    });
    container.dataset.wired = "1";
  }
}

function renderTopStatsLeagueFilters() {
  const container = getElement("topstats-league-filters");
  if (!container) return;

  const leagues = getTopStatsLeagues();
  if (!leagues.length) { container.innerHTML = ""; return; }
  if (!activeTopStatsLeague || !leagues.includes(activeTopStatsLeague)) {
    activeTopStatsLeague = leagues[0];
  }

  container.innerHTML = leagues.map(l => `
    <button class="filter-btn ${l === activeTopStatsLeague ? "active" : ""}" data-league="${escapeHTML(l)}">${escapeHTML(l)}</button>
  `).join("");

  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      activeTopStatsLeague = this.dataset.league;
      renderTopStatsLeagueFilters();
      renderTopStatsTable();
    });
  });
}

function renderTopStatsTable() {
  const wrap = getElement("topstats-wrap");
  if (!wrap) return;

  const leagues = getTopStatsLeagues();
  const label = activeTopStatsType === "topAssists" ? "assist" : "gol";
  if (!leagues.length) {
    wrap.innerHTML = `<div class="standings-empty">Data top ${label} belum tersedia.</div>`;
    return;
  }

  const rows = (data[activeTopStatsType] || {})[activeTopStatsLeague] || [];
  if (!rows.length) {
    wrap.innerHTML = `<div class="standings-empty">Belum ada data untuk liga ini.</div>`;
    return;
  }

  wrap.innerHTML = rows.map(r => `
    <div class="topstats-row">
      <span class="topstats-rank">${r.rank}</span>
      <img class="topstats-photo" src="${escapeHTML(r.photo || "")}" alt="${escapeHTML(r.name)}" loading="lazy" onerror="this.style.visibility='hidden'">
      <div class="topstats-body">
        <div class="topstats-name">${escapeHTML(r.name)}</div>
        <div class="topstats-team">${escapeHTML(r.team || "")}</div>
      </div>
      <span class="topstats-value">${r.value}</span>
    </div>
  `).join("");
}

/* =========================================================
   BERITA
   ========================================================= */

// Gabungan data.news (statis/manual, dari data.js) + transferNews
// (otomatis mingguan dari fetch-transfers.js, lihat transfers.js) —
// transfer duluan karena lebih "segar"/spesifik-tanggal. Dua sumber
// SENGAJA dipisah (bukan satu field) supaya cron jadwal (tiap jam) dan
// cron transfer (mingguan) tidak berebutan menimpa field yang sama di
// data.js — lihat catatan di fetch-transfers.js.
function getAllNews() {
  const transfers = typeof transferNews !== "undefined" && Array.isArray(transferNews) ? transferNews : [];
  const manual = Array.isArray(data.news) ? data.news : [];
  return [...transfers, ...manual];
}

function renderNews() {
  const container = getElement("news-grid");
  if (!container) return;
  const news = getAllNews();
  if (!news.length) { container.innerHTML = ""; return; }

  container.innerHTML = news.map(item => {
    const hasLink = !!item.url;
    const tag = hasLink ? "a" : "div";
    const linkAttrs = hasLink ? `href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer"` : "";
    // `image` = foto asli (cover penuh, mis. thumbnail berita). Berita
    // transfer (item.logo = lambang klub) SENGAJA tidak menampilkan
    // lambang itu sebagai gambar kartu — satu lambang klub yang sama
    // besar-besar di tiap kartu transfer terasa berulang/kurang seperti
    // "berita" sungguhan — jadi disamakan dengan varian kosong (panel
    // gradasi + ikon bola) supaya tetap ada sentuhan visual tanpa
    // mengulang logo yang sama.
    const thumb = item.image ? `
      <div class="news-thumb-wrap">
        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy">
      </div>` : `
      <div class="news-thumb-wrap news-thumb-wrap--empty"><span>⚽</span></div>`;

    return `
    <${tag} class="news-card reveal" ${linkAttrs}>
      ${thumb}
      <div class="news-body">
        <span class="news-tag">${escapeHTML(item.tag)}</span>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.desc)}</p>
        <div class="news-foot">
          <span class="news-time">${escapeHTML(item.time)}</span>
          ${hasLink ? '<span class="news-read">Baca Selengkapnya</span>' : ""}
        </div>
      </div>
    </${tag}>`;
  }).join("");

  markVisible(container.querySelectorAll(".reveal"));
}

/* =========================================================
   TICKER — kini menampilkan headline berita, diperlambat
   ========================================================= */

function renderTicker() {
  const track = getElement("ticker-track");
  if (!track) return;
  const news = getAllNews();
  if (!news.length) { track.innerHTML = `<span class="ticker-item">Belum ada berita terbaru.</span>`; return; }

  const items = news.map(n => `
    <span class="ticker-item">
      <span class="tk-tag">${escapeHTML(n.tag || "Berita")}</span>
      ${escapeHTML(n.title)}
      <span class="tk-time">&middot; ${escapeHTML(n.time || "")}</span>
    </span>`);

  track.innerHTML = items.join("") + items.join("");

  // Kecepatan menyesuaikan panjang konten supaya tetap nyaman dibaca
  // walau jumlah berita berubah (lebih banyak berita = durasi lebih lama).
  const approxWidth = track.scrollWidth / 2;
  const durationSeconds = Math.max(70, Math.round(approxWidth / 34));
  track.style.animationDuration = `${durationSeconds}s`;
}

/* =========================================================
   STATISTIK SINGKAT
   ========================================================= */

function renderStats() {
  const container = getElement("stats-bar");
  if (!container) return;
  const matches = Array.isArray(data.matches) ? data.matches : [];
  const total = matches.length;
  const leagues = new Set(matches.map(m => m.league).filter(Boolean)).size;

  container.innerHTML = `
    <div class="stat-item"><span class="stat-num">${total}</span><span class="stat-label">Pertandingan</span></div>
    <div class="stat-divider"></div>
    <div class="stat-item"><span class="stat-num">${leagues}</span><span class="stat-label">Liga</span></div>
    <div class="stat-divider"></div>
    <div class="stat-item"><span class="stat-num" id="live-clock">--:-- WIB</span><span class="stat-label">Waktu WIB</span></div>`;

  startClock();
}

/* =========================================================
   REKAM JEJAK PREDIKSI
   ========================================================= */

function renderTrackRecord() {
  const summaryEl = getElement("track-summary");
  const listEl = getElement("track-list");
  if (!summaryEl || !listEl) return;

  const stats = data.predictionStats || {};
  summaryEl.innerHTML = `
    <div class="track-stat"><span class="tnum">${stats.thisMonth || 0}</span><span class="tlabel">Prediksi Bulan Ini</span></div>
    <div class="track-stat"><span class="tnum">${stats.correctScore || 0}</span><span class="tlabel">Tepat Skor</span></div>
    <div class="track-stat"><span class="tnum">${stats.correctWinner || 0}</span><span class="tlabel">Tepat Pemenang</span></div>
    <div class="track-stat"><span class="tnum">${stats.winnerAccuracy || 0}%</span><span class="tlabel">Akurasi Pemenang</span></div>
    <div class="track-stat"><span class="tnum">${stats.ouAccuracy || 0}%</span><span class="tlabel">Akurasi O/U</span></div>
  `;

  const recent = Array.isArray(data.recentPredictions) ? data.recentPredictions : [];
  if (!recent.length) {
    listEl.innerHTML = `<div class="track-empty">Belum ada histori prediksi. Setelah pertandingan selesai, tambahkan hasilnya di <b>data.js</b> (field <code>recentPredictions</code>) supaya rekam jejak tampil di sini.</div>`;
    return;
  }

  const buildItem = p => `
    <div class="track-item">
      <span class="tmatch">${escapeHTML(p.match)}</span>
      <span class="tscore">Prediksi ${escapeHTML(p.predicted)} &middot; Hasil ${escapeHTML(p.result)}</span>
      <span class="tmark ${p.correct ? "ok" : "no"}">${p.correct ? "OK" : "X"}</span>
    </div>`;

  // Tampilkan 5 prediksi terbaru, sisanya disembunyikan di balik toggle
  // supaya section ini tidak memakan tempat terlalu banyak secara default.
  const VISIBLE = 5;
  const visible = recent.slice(0, VISIBLE);
  const rest = recent.slice(VISIBLE);

  listEl.innerHTML = visible.map(buildItem).join("") + (rest.length ? `
    <div class="collapse-panel" id="track-list-extra">
      ${rest.map(buildItem).join("")}
    </div>
    <button class="section-toggle-btn" id="track-list-toggle">Lihat Semua Prediksi (${recent.length}) &#9662;</button>
  ` : "");

  const toggleBtn = getElement("track-list-toggle");
  const panel = getElement("track-list-extra");
  if (toggleBtn && panel) {
    toggleBtn.addEventListener("click", () => {
      const open = panel.classList.toggle("open");
      toggleBtn.innerHTML = open
        ? "Tutup &#9652;"
        : `Lihat Semua Prediksi (${recent.length}) &#9662;`;
    });
  }
}

/* =========================================================
   PAGE TITLE
   ========================================================= */

function updatePageTitle() {
  if (data.date) document.title = `BOLAKILAS — Jadwal Bola ${formatDate(data.date)}`;
}

/* =========================================================
   REVEAL (elemen statis dari HTML)
   ========================================================= */

function initializeReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });
  elements.forEach(el => observer.observe(el));
}

/* =========================================================
   INIT
   ========================================================= */

function initializeWebsite() {
  activeDateKey = data.date;
  renderDate();
  renderStats();
  renderRadar();
  renderBigMatch();
  // Kalau data.js kebetulan sudah basi saat dimuat (Big Match di dalamnya
  // sudah FT sebelum halaman ini dibuka sama sekali), live engine belum
  // tentu langsung jalan buat memicu swapToNextBigMatchIfFinished lewat
  // pollLiveScores — jadi dicek sekali lagi di sini supaya tidak nunggu
  // ada laga live/segera lain dulu baru diganti.
  swapToNextBigMatchIfFinished();
  renderDayTabs();
  renderFiltersStatus();
  renderFilters("Semua");
  renderSchedule("Semua");
  renderStandingsUpdatedLabel();
  renderStandingsFilters();
  renderStandingsTable();
  renderTopStatsTypeFilters();
  renderTopStatsLeagueFilters();
  renderTopStatsTable();
  renderTrackRecord();
  renderNews();
  renderTicker();
  updatePageTitle();
  startLiveEngine();
  initializeReveal();
  initMobileNav();
  initSearch();
  initScrollTop();
  console.log("BOLAKILAS initialized.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeWebsite);
} else {
  initializeWebsite();
}
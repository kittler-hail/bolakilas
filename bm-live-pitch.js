/* =========================================================
   BOLAKILAS — BM-LIVE-PITCH.JS
   Proyeksi 2D momentum Big Match yang sedang live: bola + panah arah
   tekanan, digerakkan oleh statistik live SUNGGUHAN dari API-Football
   (possession/shots/corners/fouls) — lihat fetch-bigmatch-live.js.

   Beda dari versi ESPN sebelumnya: data diambil dari bigmatch-live.json
   (file statis di server yang sama, diperbarui tiap 5 menit lewat cron
   — lihat .github/workflows/update-bigmatch-live.yml), BUKAN memanggil
   API-Football langsung dari browser (key berbayar tidak aman
   diletakkan di kode client-side, lihat catatan LIVE ENGINE di
   script.js). Konsekuensinya: data di sini paling telat ~5-7 menit
   (jeda cron + deploy), tidak se-real-time skor/status pertandingan
   (yang tetap dipantau tiap ~25 detik lewat ESPN, lihat script.js).

   Masih murni ilustrasi arah dominasi permainan berdasarkan statistik
   agregat (possession/shots), BUKAN posisi pemain/bola asli — API-Football
   tidak menyediakan data tracking pemain (itu produk terpisah, provider
   seperti Opta/Stats Perform).

   Dipanggil oleh script.js: sekali dari renderBigMatch() (setup
   awal/idle state), lalu tiap tick dari pollLiveScores() (~25 detik
   sekali, sama seperti live engine skor) selama Big Match berstatus
   live — throttle internal (MIN_FETCH_GAP_MS) mencegah fetch berulang
   ke file yang datanya baru berubah tiap 5 menit.
   ========================================================= */

(function () {
  let inFlight = false;
  let lastFetchAt = 0;
  const MIN_FETCH_GAP_MS = 60000; // percuma lebih sering dari ini — bigmatch-live.json cuma berubah tiap ~5 menit
  let toggleWired = false;
  let cachedPayload = null;

  function isBmLive() {
    if (typeof data === "undefined" || !data.bigMatch || typeof getMatchStatus !== "function") return false;
    return getMatchStatus(data.bigMatch, data.bigMatch.date).code === "live";
  }

  // Tersembunyi di balik tombol karena berdiri sendiri di dalam
  // .bm-pitch-block (bukan .bm-extra-collapse), makanya butuh wiring
  // sendiri — cukup sekali (guard toggleWired), dipanggil tiap sync()
  // supaya tetap terpasang meski elemen baru dirender ulang.
  function wireToggleOnce() {
    if (toggleWired) return;
    const btn = document.getElementById("bm-pitch-toggle");
    const panel = document.getElementById("bm-pitch-collapse");
    if (!btn || !panel) return;
    btn.addEventListener("click", () => {
      const open = panel.classList.toggle("open");
      btn.innerHTML = open
        ? 'Sembunyikan Proyeksi Jalannya Pertandingan <span class="bm-pitch-live-tag">LIVE</span> &#9652;'
        : 'Lihat Proyeksi Jalannya Pertandingan <span class="bm-pitch-live-tag">LIVE</span> &#9662;';
    });
    toggleWired = true;
  }

  function setBlockVisible(visible) {
    const block = document.getElementById("bm-pitch-block");
    if (block) block.style.display = visible ? "" : "none";
    if (visible) wireToggleOnce();
  }

  function setNote(text) {
    const noteEl = document.getElementById("bm-pitch-note");
    if (noteEl) noteEl.textContent = text;
  }

  async function fetchBigMatchLive() {
    // Cache-buster ringan (bukan no-store) — cukup supaya browser tidak
    // menahan respons lama lebih dari beberapa menit, tetap boleh
    // pakai cache HTTP normal (Cache-Control diatur server, lihat
    // serve-bigmatch-live.js untuk Netlify / commit baru untuk GitHub Pages).
    const res = await fetch(`bigmatch-live.json?t=${Math.floor(Date.now() / 60000)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  // bigmatch-live.json mengikuti Big Match versi SERVER (baseline
  // data.js, diperbarui tiap 5 menit) — tapi Big Match yang tampil di
  // browser bisa sudah diganti duluan ke laga lain lewat
  // swapToNextBigMatchIfFinished() (script.js), termasuk SELAGI fetch()
  // bigmatch-live.json masih berjalan (race — snapshot bm yang ditangkap
  // di awal sync() bisa sudah basi begitu responsnya datang). Makanya
  // SENGAJA baca data.bigMatch PALING BARU langsung dari `data` global
  // saat hasil fetch mau diterapkan, bukan percaya pada snapshot lama —
  // dicocokkan lewat slugifyTeamName supaya statistik laga lama tidak
  // pernah salah tampil di bawah nama tim yang baru.
  function payloadMatchesCurrentBigMatch(payload) {
    const bm = typeof data !== "undefined" ? data.bigMatch : null;
    if (!payload || !bm || typeof slugifyTeamName !== "function") return false;
    return slugifyTeamName(payload.home) === slugifyTeamName(bm.home) &&
      slugifyTeamName(payload.away) === slugifyTeamName(bm.away);
  }

  function applyMomentum(payload) {
    const usable = payloadMatchesCurrentBigMatch(payload) ? payload : null;
    const homeStats = usable?.statistics?.home;
    const awayStats = usable?.statistics?.away;

    const ball = document.getElementById("bm-pitch-ball");
    const arrow = document.getElementById("bm-pitch-arrow");
    const homePctEl = document.getElementById("bm-pitch-home-pct");
    const awayPctEl = document.getElementById("bm-pitch-away-pct");
    const fillEl = document.getElementById("bm-pitch-possession-fill");
    const statsEl = document.getElementById("bm-pitch-stats");

    if (!homeStats || !awayStats) {
      setNote("Statistik live belum tersedia untuk laga ini (biasanya muncul begitu laga dimulai, jeda maksimal ~5 menit).");
      if (ball) ball.style.left = "50%";
      if (arrow) { arrow.textContent = ""; arrow.className = "bm-pitch-arrow"; }
      if (statsEl) statsEl.textContent = "";
      return;
    }

    let momentum = null;
    if (typeof homeStats.possession === "number") {
      momentum = homeStats.possession;
    } else if (typeof homeStats.shotsTotal === "number" && typeof awayStats.shotsTotal === "number" && (homeStats.shotsTotal + awayStats.shotsTotal) > 0) {
      momentum = Math.round(homeStats.shotsTotal / (homeStats.shotsTotal + awayStats.shotsTotal) * 100);
    }

    if (momentum === null) {
      setNote("Statistik live belum tersedia untuk laga ini (biasanya muncul begitu laga dimulai, jeda maksimal ~5 menit).");
      if (ball) ball.style.left = "50%";
      if (arrow) { arrow.textContent = ""; arrow.className = "bm-pitch-arrow"; }
      if (statsEl) statsEl.textContent = "";
      return;
    }

    // Home di sisi kiri (menyerang ke kanan), away di sisi kanan —
    // dorongan bola ke arah gawang lawan sesuai siapa yang unggul
    // possession/shots. Dibatasi 12%-88% supaya bola tidak menempel
    // persis di garis gawang.
    const pressure = momentum - 50;
    const ballX = Math.max(12, Math.min(88, 50 + pressure * 0.7));
    if (ball) ball.style.left = `${ballX}%`;
    if (arrow) {
      if (pressure > 8) { arrow.textContent = "▶"; arrow.className = "bm-pitch-arrow to-away"; }
      else if (pressure < -8) { arrow.textContent = "◀"; arrow.className = "bm-pitch-arrow to-home"; }
      else { arrow.textContent = "•"; arrow.className = "bm-pitch-arrow"; }
    }
    if (homePctEl) homePctEl.textContent = `${Math.round(momentum)}%`;
    if (awayPctEl) awayPctEl.textContent = `${Math.round(100 - momentum)}%`;
    if (fillEl) fillEl.style.width = `${momentum}%`;

    if (statsEl) {
      const parts = [];
      if (typeof homeStats.shotsTotal === "number" && typeof awayStats.shotsTotal === "number") {
        parts.push(`Tembakan ${homeStats.shotsTotal}-${awayStats.shotsTotal}`);
      }
      if (typeof homeStats.shotsOnTarget === "number" && typeof awayStats.shotsOnTarget === "number") {
        parts.push(`Tepat Sasaran ${homeStats.shotsOnTarget}-${awayStats.shotsOnTarget}`);
      }
      if (typeof homeStats.corners === "number" && typeof awayStats.corners === "number") {
        parts.push(`Corner ${homeStats.corners}-${awayStats.corners}`);
      }
      if (typeof homeStats.fouls === "number" && typeof awayStats.fouls === "number") {
        parts.push(`Pelanggaran ${homeStats.fouls}-${awayStats.fouls}`);
      }
      statsEl.textContent = parts.join(" · ");
    }
    const updatedNote = usable.updatedAt ? ` (update ${usable.updatedAt})` : "";
    setNote(`Ilustrasi arah tekanan permainan dari statistik live API-Football — bukan posisi pemain/bola asli.${updatedNote}`);
  }

  // Kalau index.html dibuka langsung dari file:// (bukan lewat GitHub
  // Pages/Netlify/server lokal), fetch() ke file lain diblokir total
  // oleh browser — bukan berarti statistiknya belum ada. Lihat catatan
  // sama di bm-lineups.js.
  function isFileProtocol() {
    return typeof location !== "undefined" && location.protocol === "file:";
  }

  async function sync() {
    const bm = typeof data !== "undefined" ? data.bigMatch : null;
    if (!bm || !isBmLive()) { setBlockVisible(false); return; }
    setBlockVisible(true);

    if (isFileProtocol()) {
      setNote("Fitur ini butuh dibuka lewat server web (GitHub Pages/Netlify), bukan file:// langsung — lihat README-DEPLOY.md.");
      return;
    }

    const now = Date.now();
    if (inFlight) return;
    if (cachedPayload && now - lastFetchAt < MIN_FETCH_GAP_MS) {
      applyMomentum(cachedPayload);
      return;
    }

    inFlight = true;
    try {
      const payload = await fetchBigMatchLive();
      cachedPayload = payload;
      lastFetchAt = now;
      applyMomentum(payload);
    } catch (err) {
      console.warn("BM Live Pitch: gagal mengambil statistik live.", err.message);
      if (cachedPayload) applyMomentum(cachedPayload);
    } finally {
      inFlight = false;
    }
  }

  window.BKLivePitch = { sync };
})();

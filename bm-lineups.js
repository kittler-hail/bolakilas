/* =========================================================
   BOLAKILAS — BM-LINEUPS.JS
   Susunan pemain (formasi, starting XI, cadangan, pelatih) Big Match,
   dari API-Football (/fixtures/lineups) lewat fetch-bigmatch-live.js
   — sama seperti bm-live-pitch.js, dibaca dari bigmatch-live.json
   (file statis, diperbarui tiap 5 menit lewat cron), BUKAN memanggil
   API-Football langsung dari browser (lihat catatan LIVE ENGINE di
   script.js soal kenapa key berbayar tidak aman di client-side).

   Beda dari bm-live-pitch.js: blok ini TIDAK dibatasi hanya saat live
   — susunan pemain biasanya sudah dirilis API-Football ~1 jam sebelum
   kick-off, jadi ditampilkan begitu tersedia (pra-laga, live, atau
   pasca-laga), bukan cuma selama status "live".

   Dipanggil oleh script.js: sekali dari renderBigMatch(), lalu tiap
   tick dari pollLiveScores() (sama seperti BKLivePitch) — throttle
   internal (MIN_FETCH_GAP_MS) mencegah fetch berulang ke file yang
   datanya baru berubah tiap 5 menit.
   ========================================================= */

(function () {
  let inFlight = false;
  let lastFetchAt = 0;
  const MIN_FETCH_GAP_MS = 60000;
  let cachedPayload = null;

  async function fetchBigMatchLive() {
    const res = await fetch(`bigmatch-live.json?t=${Math.floor(Date.now() / 60000)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  function renderTeamLineup(team) {
    if (!team || !team.startXI || !team.startXI.length) {
      return `<div class="team-modal-empty">Susunan pemain belum dirilis — biasanya muncul ~1 jam sebelum kick-off.</div>`;
    }

    const meta = [];
    if (team.formation) meta.push(`Formasi <b>${escapeHTML(team.formation)}</b>`);
    if (team.coach) meta.push(`Pelatih <b>${escapeHTML(team.coach)}</b>`);

    // Rating cuma terisi setelah laga mulai (lihat fetch-bigmatch-live.js)
    // — dipetakan ke warna kasar biar gampang dipindai sekilas, sama
    // seperti pola win/lose/draw di bagian lain situs.
    const ratingClass = r => {
      const n = parseFloat(r);
      if (isNaN(n)) return "";
      return n >= 7 ? "rating-good" : n >= 6 ? "rating-mid" : "rating-poor";
    };

    const playerRow = p => `
      <div class="team-squad-player">
        <span class="team-squad-number">${p.number != null ? escapeHTML(String(p.number)) : "-"}</span>
        <span class="team-squad-name">${escapeHTML(p.name)}</span>
        ${p.rating ? `<span class="lineup-rating ${ratingClass(p.rating)}">${escapeHTML(p.rating)}</span>` : ""}
        ${p.position ? `<span class="team-squad-age">${escapeHTML(p.position)}</span>` : ""}
      </div>`;

    const subs = Array.isArray(team.substitutes) ? team.substitutes : [];

    return `
      ${meta.length ? `<div class="lineup-meta">${meta.join(" &middot; ")}</div>` : ""}
      <div class="team-squad-group">
        <div class="team-squad-group-title">Starting XI</div>
        <div class="team-squad-list">${team.startXI.map(playerRow).join("")}</div>
      </div>
      ${subs.length ? `
        <div class="team-squad-group">
          <div class="team-squad-group-title">Cadangan</div>
          <div class="team-squad-list">${subs.map(playerRow).join("")}</div>
        </div>` : ""}
    `;
  }

  // bigmatch-live.json diperbarui server tiap 5 menit dan mengikuti Big
  // Match versi SERVER (data.js baseline) — tapi Big Match yang tampil
  // di browser bisa saja sudah diganti duluan ke laga lain lewat
  // swapToNextBigMatchIfFinished() (script.js), begitu laga yang
  // sedang tampil selesai, termasuk SELAGI fetch() bigmatch-live.json
  // masih berjalan (race — bm yang dibaca saat fetch() dimulai bisa
  // sudah basi begitu responsnya datang). Makanya di sini SENGAJA baca
  // data.bigMatch PALING BARU langsung dari `data` global saat hasil
  // fetch mau diterapkan, bukan percaya begitu saja pada snapshot bm
  // yang ditangkap di awal sync() — dicocokkan lewat slugifyTeamName
  // supaya laga lama tidak pernah salah tampil di bawah judul tim baru.
  function payloadMatchesCurrentBigMatch(payload) {
    const bm = typeof data !== "undefined" ? data.bigMatch : null;
    if (!payload || !bm || typeof slugifyTeamName !== "function") return false;
    return slugifyTeamName(payload.home) === slugifyTeamName(bm.home) &&
      slugifyTeamName(payload.away) === slugifyTeamName(bm.away);
  }

  function applyLineups(payload) {
    const homeEl = document.getElementById("bm-lineup-home-content");
    const awayEl = document.getElementById("bm-lineup-away-content");
    if (!homeEl || !awayEl) return;
    const usable = payloadMatchesCurrentBigMatch(payload) ? payload : null;
    homeEl.innerHTML = renderTeamLineup(usable?.lineups?.home);
    awayEl.innerHTML = renderTeamLineup(usable?.lineups?.away);
  }

  // Kalau index.html dibuka langsung dari file:// (klik 2x di Explorer,
  // BUKAN lewat GitHub Pages/Netlify/server lokal), browser MEMBLOKIR
  // total fetch() ke file lain — bukan CORS biasa, tapi "URL scheme
  // 'file' is not supported". Blok ini selalu gagal dalam kondisi itu,
  // BUKAN karena datanya benar-benar belum ada — jadi dikasih pesan
  // beda supaya tidak disangka bug. Di situs asli (https://) ini jalan
  // normal, lihat catatan di README-DEPLOY.md.
  function isFileProtocol() {
    return typeof location !== "undefined" && location.protocol === "file:";
  }

  const FILE_PROTOCOL_NOTICE = `<div class="team-modal-empty">Fitur ini butuh dibuka lewat server web (GitHub Pages/Netlify), bukan dibuka langsung dari file (file://) — browser memblokir pengambilan data lokal dengan cara itu. Coba jalankan lewat "npx serve ." atau semacamnya untuk pratinjau lokal.</div>`;

  async function sync() {
    const bm = typeof data !== "undefined" ? data.bigMatch : null;
    const homeTitle = document.getElementById("bm-lineup-home-title");
    const awayTitle = document.getElementById("bm-lineup-away-title");
    if (!bm) return;
    if (homeTitle) homeTitle.textContent = `Susunan Pemain — ${bm.home || "Home"}`;
    if (awayTitle) awayTitle.textContent = `Susunan Pemain — ${bm.away || "Away"}`;

    if (isFileProtocol()) {
      const homeEl = document.getElementById("bm-lineup-home-content");
      const awayEl = document.getElementById("bm-lineup-away-content");
      if (homeEl) homeEl.innerHTML = FILE_PROTOCOL_NOTICE;
      if (awayEl) awayEl.innerHTML = FILE_PROTOCOL_NOTICE;
      return;
    }

    const now = Date.now();
    if (inFlight) return;
    if (cachedPayload && now - lastFetchAt < MIN_FETCH_GAP_MS) {
      applyLineups(cachedPayload);
      return;
    }

    inFlight = true;
    try {
      const payload = await fetchBigMatchLive();
      cachedPayload = payload;
      lastFetchAt = now;
      applyLineups(payload);
    } catch (err) {
      console.warn("BM Lineups: gagal mengambil susunan pemain.", err.message);
      // Kalau belum pernah berhasil sama sekali (mis. bigmatch-live.json
      // belum pernah ter-commit — situs baru online, workflow belum
      // sempat jalan), tampilkan pesan "belum tersedia" alih-alih
      // membiarkan placeholder "Memuat..." nyangkut selamanya.
      applyLineups(cachedPayload || null);
    } finally {
      inFlight = false;
    }
  }

  window.BKLineups = { sync };
})();

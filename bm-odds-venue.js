/* =========================================================
   BOLAKILAS — BM-ODDS-VENUE.JS
   Dua info tambahan Big Match yang sama-sama diambil dari
   bigmatch-live.json (lihat fetch-bigmatch-live.js, sumber:
   API-Football /odds & /venues):

   1. Detail venue (kapasitas/kota) — ditempel di sebelah nama stadion
      yang sudah ada.
   2. Odds pasar — MURNI INFORMASI dari salah satu bookmaker yang
      dicakup API-Football, BUKAN ajakan bertaruh & BUKAN endorsement
      terhadap bookmaker tertentu. Judi online ilegal di Indonesia;
      field ini ditampilkan apa adanya sebagai referensi pasar
      (sebagaimana odds ditampilkan media olahraga pada umumnya),
      selalu disertai disclaimer eksplisit — JANGAN dihapus disclaimer
      ini kalau blok ini diedit lagi nanti.

   Dipanggil oleh script.js: sekali dari renderBigMatch(), lalu tiap
   tick dari pollLiveScores() — sama seperti BKLivePitch/BKLineups.
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

  // Sama seperti bm-lineups.js/bm-live-pitch.js: selalu cocokkan ke
  // data.bigMatch TERBARU (bukan snapshot lama) saat menerapkan hasil,
  // supaya venue/odds laga lama tidak pernah salah tampil di bawah
  // nama tim yang sudah diganti (lihat catatan race di bm-lineups.js).
  function payloadMatchesCurrentBigMatch(payload) {
    const bm = typeof data !== "undefined" ? data.bigMatch : null;
    if (!payload || !bm || typeof slugifyTeamName !== "function") return false;
    return slugifyTeamName(payload.home) === slugifyTeamName(bm.home) &&
      slugifyTeamName(payload.away) === slugifyTeamName(bm.away);
  }

  function applyVenue(payload) {
    const el = document.getElementById("bm-venue-meta");
    if (!el) return;
    const usable = payloadMatchesCurrentBigMatch(payload) ? payload : null;
    const v = usable?.venue;
    if (!v || (!v.city && !v.capacity)) { el.textContent = ""; return; }
    const parts = [];
    if (v.city) parts.push(v.city);
    if (v.capacity) parts.push(`kapasitas ${v.capacity.toLocaleString("id-ID")}`);
    el.textContent = ` (${parts.join(" · ")})`;
  }

  function renderOdds(payload) {
    const usable = payloadMatchesCurrentBigMatch(payload) ? payload : null;
    const odds = usable?.odds;
    const liveOdds = usable?.liveOdds;
    const bm = typeof data !== "undefined" ? data.bigMatch : null;
    if (!odds && !liveOdds) {
      return `<div class="team-modal-empty">Odds pasar belum/tidak tersedia untuk laga ini.</div>`;
    }
    const home = escapeHTML(bm?.home || "Home");
    const away = escapeHTML(bm?.away || "Away");

    // Odds LIVE (bergerak selagi laga berjalan) ditampilkan terpisah di
    // ATAS odds pra-laga kalau ada — beda sumber/waktu, jangan dicampur
    // supaya pengunjung tidak salah kira odds pra-laga masih berlaku.
    const liveBlock = liveOdds ? `
      <div class="mc-1x2-row mc-1x2-row--live">
        <div class="mc-1x2-item"><span class="lbl">${home}</span>${escapeHTML(liveOdds.home)}</div>
        <div class="mc-1x2-item"><span class="lbl">Seri</span>${escapeHTML(liveOdds.draw)}</div>
        <div class="mc-1x2-item"><span class="lbl">${away}</span>${escapeHTML(liveOdds.away)}</div>
      </div>` : "";
    const liveLabel = liveOdds ? `<div class="mc-odds-live-label"><span class="live-dot-small"></span>Odds Live</div>` : "";

    if (!odds) {
      return `
        ${liveLabel}${liveBlock}
        <div class="team-modal-note">
          Odds live, murni informasi pasar, BUKAN ajakan/rekomendasi bertaruh — BOLAKILAS
          tidak mengoperasikan atau mengendorse layanan judi apa pun. Judi daring ilegal di Indonesia.
        </div>`;
    }

    const extraMarkets = [];
    if (odds.overUnder) {
      extraMarkets.push(`
        <div class="mc-extra-row"><span>Over/Under ${escapeHTML(odds.overUnder.line)}</span><b>Over ${escapeHTML(odds.overUnder.over)} &middot; Under ${escapeHTML(odds.overUnder.under)}</b></div>`);
    }
    if (odds.btts) {
      extraMarkets.push(`
        <div class="mc-extra-row"><span>BTTS (kedua tim cetak gol)</span><b>Ya ${escapeHTML(odds.btts.yes)} &middot; Tidak ${escapeHTML(odds.btts.no)}</b></div>`);
    }

    return `
      ${liveLabel}${liveBlock}
      ${liveOdds ? `<div class="mc-odds-pre-label">Odds Pra-Laga</div>` : ""}
      <div class="mc-1x2-row">
        <div class="mc-1x2-item"><span class="lbl">${home}</span>${escapeHTML(odds.home)}</div>
        <div class="mc-1x2-item"><span class="lbl">Seri</span>${escapeHTML(odds.draw)}</div>
        <div class="mc-1x2-item"><span class="lbl">${away}</span>${escapeHTML(odds.away)}</div>
      </div>
      ${extraMarkets.join("")}
      <div class="team-modal-note">
        Sumber: ${escapeHTML(odds.bookmaker)}, lewat API-Football. Murni informasi pasar,
        BUKAN ajakan/rekomendasi bertaruh — BOLAKILAS tidak mengoperasikan atau
        mengendorse layanan judi apa pun. Judi daring ilegal di Indonesia.
      </div>`;
  }

  function applyOdds(payload) {
    const el = document.getElementById("bm-odds-content");
    if (!el) return;
    el.innerHTML = renderOdds(payload);
  }

  function apply(payload) {
    applyVenue(payload);
    applyOdds(payload);
  }

  // Kalau index.html dibuka langsung dari file:// (bukan lewat GitHub
  // Pages/Netlify/server lokal), fetch() ke file lain diblokir total
  // oleh browser — bukan berarti odds/venue-nya belum ada. Lihat
  // catatan sama di bm-lineups.js.
  function isFileProtocol() {
    return typeof location !== "undefined" && location.protocol === "file:";
  }

  async function sync() {
    const bm = typeof data !== "undefined" ? data.bigMatch : null;
    if (!bm) return;

    if (isFileProtocol()) {
      const el = document.getElementById("bm-odds-content");
      if (el) el.innerHTML = `<div class="team-modal-empty">Fitur ini butuh dibuka lewat server web (GitHub Pages/Netlify), bukan file:// langsung — lihat README-DEPLOY.md.</div>`;
      return;
    }

    const now = Date.now();
    if (inFlight) return;
    if (cachedPayload && now - lastFetchAt < MIN_FETCH_GAP_MS) {
      apply(cachedPayload);
      return;
    }

    inFlight = true;
    try {
      const payload = await fetchBigMatchLive();
      cachedPayload = payload;
      lastFetchAt = now;
      apply(payload);
    } catch (err) {
      console.warn("BM Odds/Venue: gagal mengambil data.", err.message);
      apply(cachedPayload || null);
    } finally {
      inFlight = false;
    }
  }

  window.BKOddsVenue = { sync };
})();

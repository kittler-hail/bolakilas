/* =========================================================
   BOLAKILAS — CLUB-SEARCH.JS
   Fitur "Cari Klub": kolom pencarian bebas ketik nama klub, mencakup
   SEMUA klub yang ada di data.js lewat window.BKTeamData.getAllTeamNames()
   (sumber sama dipakai Bandingkan Tim — jadwal, riwayat, laga mendatang,
   & seluruh klasemen liga), bukan cuma tim yang main hari ini. Klik hasil
   buka modal Profil Tim yang sama persis dengan klik logo/nama tim di
   Jadwal/Klasemen/Radar (team-profile.js) — otomatis lengkap (jadwal
   berikutnya, klasemen, pelatih, cedera, riwayat, skuad) tanpa data atau
   logika baru.
   ========================================================= */

(function () {
  const RESULT_LIMIT = 30;

  function resultRow(name) {
    const T = window.BKTeamData;
    const standing = T.getStanding(name);
    const meta = standing
      ? `#${standing.row.rank} &middot; ${escapeHTML(standing.league)}`
      : "";
    return `
      <button type="button" class="club-search-item" data-team="${escapeHTML(name)}">
        ${T.logoTag(name, "club-search-logo")}
        <span class="club-search-name">${escapeHTML(name)}</span>
        ${meta ? `<span class="club-search-meta">${meta}</span>` : ""}
      </button>`;
  }

  function renderResults(query) {
    const resultsEl = document.getElementById("club-search-results");
    if (!resultsEl || !window.BKTeamData) return;
    const q = query.trim().toLowerCase();

    if (!q) {
      resultsEl.innerHTML = `<div class="bm-empty-note">Ketik nama klub untuk mulai mencari &mdash; mencakup semua klub yang ada di data, bukan cuma yang main hari ini.</div>`;
      return;
    }

    const matches = window.BKTeamData.getAllTeamNames().filter(n => n.toLowerCase().includes(q));

    if (!matches.length) {
      resultsEl.innerHTML = `<div class="bm-empty-note">Klub "${escapeHTML(query.trim())}" tidak ditemukan.</div>`;
      return;
    }

    const shown = matches.slice(0, RESULT_LIMIT);
    const more = matches.length - shown.length;
    resultsEl.innerHTML = shown.map(resultRow).join("") +
      (more > 0 ? `<div class="bm-empty-note club-search-more">+${more} klub lainnya, ketik lebih spesifik</div>` : "");
  }

  function initClubSearch() {
    const input = document.getElementById("club-search-input");
    const resultsEl = document.getElementById("club-search-results");
    if (!input || !resultsEl) return;

    renderResults("");
    input.addEventListener("input", () => renderResults(input.value));

    resultsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".club-search-item");
      if (!btn || !window.BKTeamData) return;
      window.BKTeamData.openTeamProfile(btn.dataset.team);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initClubSearch);
  } else {
    initClubSearch();
  }
})();

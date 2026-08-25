/* =========================================================
   BOLAKILAS — DASHBOARD-WIDGETS.JS
   Ringkasan gaya "dashboard" di puncak halaman Beranda (hero + panel
   dial peluang menang Big Match + rail kanan) — tata letak meniru
   referensi dashboard yang diminta user, TAPI seluruh isinya ditarik
   dari data yang SAMA dengan section di bawahnya (data.js/getBmBaseProbs/
   getMatchStatus dari script.js, window.BKTeamData dari team-profile.js)
   — tidak ada sumber data baru:
     - dial "Home Status" (lampu/suhu) -> peluang menang Big Match hari ini
     - rail "Members/Pets"             -> Live Sekarang & Klub Puncak Klasemen
     - grafik "Spending"               -> Top 5 Skor
   ========================================================= */

(function () {
  const CIRC = 2 * Math.PI * 58; // keliling lingkaran dial (r=58, lihat .dial-svg di style.css)

  function renderHero() {
    const greetEl = document.getElementById("hero-greeting");
    const subEl = document.getElementById("hero-sub");
    const dateEl = document.getElementById("hero-date-label");
    const liveEl = document.getElementById("hero-live-label");
    if (!greetEl || typeof data === "undefined") return;

    const name = (window.BKAccount && typeof window.BKAccount.getDisplayName === "function")
      ? window.BKAccount.getDisplayName() : null;
    greetEl.textContent = name ? `Selamat datang, ${name}` : "Selamat datang di BOLAKILAS";

    const matches = Array.isArray(data.matches) ? data.matches : [];
    const leagues = new Set(matches.map(m => m.league).filter(Boolean)).size;
    subEl.textContent = matches.length
      ? `Ada ${matches.length} pertandingan dari ${leagues} liga hari ini — lengkap dengan prediksi, klasemen, dan statistik tiap klub.`
      : "Jadwal pertandingan, prediksi, klasemen, dan statistik tiap klub, semua dalam satu tempat.";

    if (dateEl) dateEl.textContent = typeof formatDate === "function" ? formatDate(data.date) : (data.date || "-");
    if (liveEl) {
      const liveCount = matches.filter(m => getMatchStatus(m, data.date).code === "live").length;
      liveEl.textContent = liveCount ? `${liveCount} berlangsung sekarang` : "Tidak ada laga live saat ini";
    }
  }

  function setDial(arcId, pctId, pct) {
    const arc = document.getElementById(arcId);
    const pctEl = document.getElementById(pctId);
    if (!arc || !pctEl) return;
    const clamped = Math.max(0, Math.min(100, pct));
    arc.style.strokeDashoffset = String(CIRC * (1 - clamped / 100));
    pctEl.textContent = `${Math.round(clamped)}%`;
  }

  function renderStatusPanel() {
    const subEl = document.getElementById("status-panel-sub");
    const homeName = document.getElementById("dial-home-name");
    const awayName = document.getElementById("dial-away-name");
    if (!subEl || typeof data === "undefined") return;

    const bm = data.bigMatch;
    if (!bm || typeof getBmBaseProbs !== "function") {
      subEl.textContent = "Belum ada Big Match hari ini";
      if (homeName) homeName.textContent = "Home";
      if (awayName) awayName.textContent = "Away";
      setDial("dial-home-arc", "dial-home-pct", 0);
      setDial("dial-away-arc", "dial-away-pct", 0);
      return;
    }

    subEl.textContent = `${bm.home} vs ${bm.away}`;
    if (homeName) homeName.textContent = bm.home;
    if (awayName) awayName.textContent = bm.away;
    const probs = getBmBaseProbs(bm);
    setDial("dial-home-arc", "dial-home-pct", probs.home);
    setDial("dial-away-arc", "dial-away-pct", probs.away);
  }

  const STATUS_CHIPS = [
    { code: "live", label: "Live Sekarang", color: "var(--accent)", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M4.5 12a7.5 7.5 0 0 1 15 0M2 12a10 10 0 0 1 20 0"/></svg>' },
    { code: "finished", label: "Selesai Hari Ini", color: "var(--win)", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4 10-10"/></svg>' },
    { code: "upcoming", label: "Akan Datang", color: "var(--blue-light)", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>' }
  ];

  function renderStatusChips() {
    const row = document.getElementById("status-chip-row");
    if (!row || typeof data === "undefined") return;
    const matches = Array.isArray(data.matches) ? data.matches : [];
    const counts = { live: 0, finished: 0, upcoming: 0 };
    matches.forEach(m => {
      const code = getMatchStatus(m, data.date).code;
      if (code === "soon") counts.upcoming++;
      else if (counts[code] !== undefined) counts[code]++;
    });
    row.innerHTML = STATUS_CHIPS.map(c => `
      <div class="status-chip">
        <span class="status-chip-icon" style="background:${c.color}">${c.icon}</span>
        <div>
          <div class="status-chip-num">${counts[c.code]}</div>
          <div class="status-chip-label">${c.label}</div>
        </div>
      </div>`).join("");
  }

  function renderLiveRail() {
    const listEl = document.getElementById("rail-live-list");
    const countEl = document.getElementById("rail-live-count");
    if (!listEl || typeof data === "undefined") return;

    const matches = Array.isArray(data.matches) ? data.matches : [];
    const live = matches.filter(m => getMatchStatus(m, data.date).code === "live");
    if (countEl) countEl.textContent = live.length ? `${live.length} laga` : "0 laga";

    if (!live.length) {
      listEl.innerHTML = `<div class="rail-empty-note">Tidak ada laga live saat ini.</div>`;
      return;
    }

    const teams = [];
    live.slice(0, 4).forEach(m => {
      teams.push({ name: m.home, logo: m.homeLogo });
      teams.push({ name: m.away, logo: m.awayLogo });
    });

    listEl.innerHTML = teams.slice(0, 6).map(t => `
      <div class="rail-avatar-item mc-team" data-team="${escapeHTML(t.name)}">
        <div class="rail-avatar-badge mc-badge-image">
          <img src="${escapeHTML(t.logo || (typeof getTeamLogoPath === "function" ? getTeamLogoPath(t.name) : ""))}" alt="${escapeHTML(t.name)}" loading="lazy" onerror="handleLogoError(this,'${escapeHTML(typeof getInitials === "function" ? getInitials(t.name) : "")}')">
          <span class="live-dot-small"></span>
        </div>
        <div class="rail-avatar-name mc-name">${escapeHTML(t.name)}</div>
      </div>`).join("");
  }

  function renderTopClubsRail() {
    const listEl = document.getElementById("rail-top-clubs");
    if (!listEl || typeof data === "undefined" || typeof getStandingsLeagues !== "function") return;

    const leagues = getStandingsLeagues();
    const league = leagues[0];
    const rows = league ? (data.standings[league] || []) : [];

    if (!rows.length) {
      listEl.innerHTML = `<div class="rail-empty-note">Klasemen belum tersedia.</div>`;
      return;
    }

    listEl.innerHTML = rows.slice(0, 5).map(r => `
      <div class="rail-avatar-item standings-team" data-team="${escapeHTML(r.team)}">
        <div class="rail-avatar-badge mc-badge-image">
          <img src="${escapeHTML(r.logo || (typeof getTeamLogoPath === "function" ? getTeamLogoPath(r.team) : ""))}" alt="${escapeHTML(r.team)}" loading="lazy" onerror="handleLogoError(this,'${escapeHTML(typeof getInitials === "function" ? getInitials(r.team) : "")}')">
        </div>
        <div class="rail-avatar-name standings-team">${escapeHTML(r.team)}</div>
      </div>`).join("");
  }

  function renderTopScorerChart() {
    const chartEl = document.getElementById("rail-chart");
    const subEl = document.getElementById("rail-chart-sub");
    if (!chartEl || typeof data === "undefined" || typeof getTopStatsLeagues !== "function") return;

    const leagues = getTopStatsLeagues();
    const league = leagues[0];
    const rows = league ? ((data.topScorers || {})[league] || []) : [];

    if (subEl) subEl.textContent = league || "-";
    if (!rows.length) {
      chartEl.innerHTML = `<div class="rail-empty-note">Data top skor belum tersedia.</div>`;
      return;
    }

    const top5 = rows.slice(0, 5);
    const max = Math.max(...top5.map(r => Number(r.value) || 0), 1);
    chartEl.innerHTML = top5.map(r => {
      const val = Number(r.value) || 0;
      const heightPct = Math.max(6, Math.round((val / max) * 100));
      const shortName = (r.name || "").split(" ").slice(-1)[0];
      return `
        <div class="rail-chart-bar">
          <span class="rail-chart-bar-val">${val}</span>
          <div class="rail-chart-bar-fill" style="height:${heightPct}%"></div>
          <span class="rail-chart-bar-label">${escapeHTML(shortName)}</span>
        </div>`;
    }).join("");
  }

  // Kolom pencarian global sekarang di topbar-inline (id="match-search"
  // tetap sama, jadi initSearch() di script.js tidak perlu diubah) —
  // begitu difokus dari halaman Prediksi/Berita, pindah dulu ke Beranda
  // supaya hasil filter jadwalnya kelihatan.
  function wireGlobalSearchRedirect() {
    const input = document.getElementById("match-search");
    if (!input) return;
    input.addEventListener("focus", () => {
      if (location.hash !== "#beranda" && location.hash !== "") {
        location.hash = "beranda";
      }
    });
  }

  function renderDashboard() {
    if (typeof data === "undefined") return;
    renderHero();
    renderStatusPanel();
    renderStatusChips();
    renderLiveRail();
    renderTopClubsRail();
    renderTopScorerChart();
  }

  function init() {
    wireGlobalSearchRedirect();
    renderDashboard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // data.js dimuat sinkron sebelum file ini, tapi Big Match/live status
  // bisa berubah selagi pengguna di halaman (live engine script.js
  // polling ~25 detik) — refresh ringan tiap 30 detik supaya dial &
  // status chip tidak basi tanpa perlu reload.
  setInterval(renderDashboard, 30000);

  // Diekspos supaya account.js bisa memicu refresh sapaan hero begitu
  // status login resolve (async, lihat handleAuthChange di account.js).
  window.BKDashboard = { renderDashboard };
})();

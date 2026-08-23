/* =========================================================
   BOLAKILAS — TEAM-PROFILE.JS
   Modal profil tim: dibuka saat mengklik logo/nama tim di mana
   pun tampil (Jadwal, Big Match, Klasemen, Radar, Klub Dominan).
   Semua data diambil dari siteData yang sama (data.js) — tidak
   ada sumber data baru, jadi berlaku otomatis untuk SEMUA tim,
   bukan cuma tim besar (tidak ada biaya tambahan untuk itu karena
   tidak ada konten yang ditulis manual per tim).

   Belum tersedia: daftar pemain/skuad. Pipeline data saat ini
   (fetch-schedule.js) tidak mengambil data skuad — lihat catatan
   di dalam modal.
   ========================================================= */

(function () {
  function teamPool(teamName) {
    const pool = [];
    if (typeof data === "undefined") return pool;
    const todayKey = data.date || "";

    function addAll(arr, dateKey) {
      (Array.isArray(arr) ? arr : []).forEach(m => {
        if (m && (m.home === teamName || m.away === teamName)) {
          pool.push(Object.assign({}, m, { __date: dateKey }));
        }
      });
    }

    addAll(data.matches, todayKey);
    Object.keys(data.history || {}).forEach(k => addAll(data.history[k], k));
    Object.keys(data.upcoming || {}).forEach(k => addAll(data.upcoming[k], k));
    return pool;
  }

  function withStatus(m) {
    return Object.assign({}, m, { __status: getMatchStatus(m, m.__date) });
  }

  function getNextMatch(teamName) {
    const pool = teamPool(teamName).map(withStatus);
    const live = pool.find(m => m.__status.code === "live");
    if (live) return { match: live, live: true };

    const upcoming = pool
      .filter(m => m.__status.code === "upcoming" || m.__status.code === "soon")
      .sort((a, b) => (a.__date + (a.time || "")).localeCompare(b.__date + (b.time || "")));
    return upcoming.length ? { match: upcoming[0], live: false } : null;
  }

  function getHistory(teamName, limit) {
    const pool = teamPool(teamName).map(withStatus);
    return pool
      .filter(m => m.__status.code === "finished")
      .sort((a, b) => (b.__date + (b.time || "")).localeCompare(a.__date + (a.time || "")))
      .slice(0, limit);
  }

  function getStanding(teamName) {
    if (typeof data === "undefined" || !data.standings) return null;
    const leagues = Object.keys(data.standings);
    for (let i = 0; i < leagues.length; i++) {
      const rows = data.standings[leagues[i]] || [];
      const row = rows.find(r => r.team === teamName);
      if (row) return { league: leagues[i], row, total: rows.length };
    }
    return null;
  }

  const POSITION_LABELS = {
    Goalkeeper: "Kiper",
    Defender: "Bek",
    Midfielder: "Gelandang",
    Attacker: "Penyerang"
  };
  const POSITION_ORDER = ["Goalkeeper", "Defender", "Midfielder", "Attacker"];

  // squads.js sekarang mencakup skuad SEMUA tim di liga yang dicakup
  // situs ini (~500 tim, lihat fetch-squads.js), jadi ukurannya sudah
  // beberapa MB — dimuat LAZY di sini (baru diambil browser begitu
  // modal Profil Tim pertama kali dibuka), bukan lewat <script> biasa
  // di index.html, supaya tidak memperlambat load awal halaman untuk
  // pengunjung yang tidak pernah buka profil tim.
  let squadsLoadState = "idle"; // idle | loading | loaded | error
  let squadsLoadPromise = null;

  function ensureSquadsLoaded() {
    if (typeof teamSquads !== "undefined") { squadsLoadState = "loaded"; return Promise.resolve(); }
    if (squadsLoadPromise) return squadsLoadPromise;
    squadsLoadState = "loading";
    squadsLoadPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "squads.js";
      script.onload = () => { squadsLoadState = "loaded"; resolve(); };
      script.onerror = () => { squadsLoadState = "error"; resolve(); };
      document.head.appendChild(script);
    });
    return squadsLoadPromise;
  }

  function renderSquadBlock(teamName) {
    if (squadsLoadState === "loading") {
      return `<div class="team-modal-empty">Memuat skuad pemain...</div>`;
    }

    const slug = typeof slugifyTeamName === "function" ? slugifyTeamName(teamName) : "";
    const squad = (typeof teamSquads !== "undefined" && Array.isArray(teamSquads[slug])) ? teamSquads[slug] : null;

    if (!squad || !squad.length) {
      return `<div class="team-modal-empty">Skuad pemain belum tersedia untuk tim ini.</div>`;
    }

    const groups = {};
    squad.forEach(p => {
      const key = POSITION_ORDER.includes(p.position) ? p.position : "Lainnya";
      if (!groups[key]) groups[key] = [];
      groups[key].push(p);
    });

    const orderedKeys = [
      ...POSITION_ORDER.filter(k => groups[k]),
      ...Object.keys(groups).filter(k => !POSITION_ORDER.includes(k))
    ];

    return orderedKeys.map(key => `
      <div class="team-squad-group">
        <div class="team-squad-group-title">${escapeHTML(POSITION_LABELS[key] || key)}</div>
        <div class="team-squad-list">
          ${groups[key].map(p => `
            <div class="team-squad-player">
              <span class="team-squad-number">${p.number != null ? escapeHTML(String(p.number)) : "-"}</span>
              <span class="team-squad-name">${escapeHTML(p.name)}</span>
              ${p.age != null ? `<span class="team-squad-age">${escapeHTML(String(p.age))} th</span>` : ""}
            </div>`).join("")}
        </div>
      </div>`).join("");
  }

  function resolveTeamLogo(teamName) {
    // Sumber paling andal adalah URL logo dari API-Football yang sudah
    // tersimpan di data.js (klasemen & data pertandingan) — file PNG lokal di
    // images/logos/ tidak lengkap & tidak dijamin cocok persis dengan
    // slug nama tim, jadi baru dipakai sebagai fallback terakhir.
    const standing = getStanding(teamName);
    if (standing && standing.row.logo) return standing.row.logo;

    const pool = teamPool(teamName);
    for (let i = 0; i < pool.length; i++) {
      const m = pool[i];
      if (m.home === teamName && m.homeLogo) return m.homeLogo;
      if (m.away === teamName && m.awayLogo) return m.awayLogo;
    }
    return getTeamLogoPath(teamName);
  }

  function logoTag(teamName, wrapClass) {
    const src = resolveTeamLogo(teamName);
    const initials = escapeHTML(getInitials(teamName));
    return `<span class="${wrapClass} mc-badge-image"><img src="${escapeHTML(src)}" alt="${escapeHTML(teamName)}" loading="lazy" onerror="handleLogoError(this,'${initials}')"></span>`;
  }

  function renderNextMatchBlock(teamName, info) {
    if (!info) return `<div class="team-modal-empty">Belum ada jadwal laga berikutnya yang diketahui.</div>`;
    const m = info.match;
    const isHome = m.home === teamName;
    const opponent = isHome ? m.away : m.home;
    const venue = isHome ? "Kandang" : "Tandang";
    const dateLabel = m.__date === data.date ? "Hari Ini" : formatDate(m.__date);

    if (info.live) {
      const hasScore = typeof m.homeScore === "number" && typeof m.awayScore === "number";
      const score = hasScore ? `${m.homeScore} - ${m.awayScore}` : "Berlangsung";
      return `
        <div class="team-next-card">
          <div class="team-next-badge--live">Sedang Berlangsung</div>
          <div class="team-next-vs">
            <div class="team-next-team">${logoTag(opponent, "team-next-logo")}<span>${escapeHTML(opponent)}</span></div>
            <div class="team-next-score">${escapeHTML(score)}</div>
          </div>
          <div class="team-next-meta">${escapeHTML(m.league)} &middot; ${venue}</div>
        </div>`;
    }

    return `
      <div class="team-next-card">
        <div class="team-next-vs">
          <div class="team-next-team">${logoTag(opponent, "team-next-logo")}<span>${escapeHTML(opponent)}</span></div>
          <div class="team-next-score">vs</div>
        </div>
        <div class="team-next-meta">${escapeHTML(m.league)} &middot; ${venue} &middot; ${escapeHTML(dateLabel)}, ${escapeHTML(formatTime(m.time))} WIB</div>
      </div>`;
  }

  function renderStandingBlock(teamName) {
    const info = getStanding(teamName);
    if (!info) return `<div class="team-modal-empty">Klasemen liga tim ini belum tersedia di data.js.</div>`;
    const r = info.row;
    const zone = r.rank <= 4 ? "zone-top" : (r.rank > info.total - 3 ? "zone-bottom" : "");
    return `
      <div class="team-standing-row">
        <span class="standings-rank ${zone}">#${r.rank}</span>
        <span class="team-standing-league">${escapeHTML(info.league)}</span>
        <span class="team-standing-stats">${r.played ?? "-"} M &middot; ${r.win ?? "-"}-${r.draw ?? "-"}-${r.lose ?? "-"} &middot; SG ${r.gd ?? "-"}</span>
        <span class="standings-pts">${r.points ?? "-"} Poin</span>
      </div>`;
  }

  // Grafik tren selisih gol 6 laga terakhir (kiri = paling lama, kanan =
  // paling baru) — pelengkap visual buat daftar riwayat teks yang sudah
  // ada, dari data yang sama (getHistory), tidak butuh sumber data baru.
  function renderFormTrend(teamName) {
    const items = getHistory(teamName, 6)
      .filter(m => typeof m.homeScore === "number" && typeof m.awayScore === "number")
      .slice().reverse();
    if (!items.length) return "";

    const barW = 28, gap = 10, chartH = 70, baseY = 38, maxBar = 26;
    const width = items.length * (barW + gap) - gap;

    const bars = items.map((m, i) => {
      const isHome = m.home === teamName;
      const opponent = isHome ? m.away : m.home;
      const teamScore = isHome ? m.homeScore : m.awayScore;
      const oppScore = isHome ? m.awayScore : m.homeScore;
      const gd = teamScore - oppScore;
      const cls = gd > 0 ? "trend-win" : gd < 0 ? "trend-lose" : "trend-draw";
      const barH = gd === 0 ? 4 : Math.min(maxBar, Math.abs(gd) * 9 + 8);
      const x = i * (barW + gap);
      const y = gd >= 0 ? baseY - barH : baseY;
      return `
        <g class="team-trend-bar ${cls}">
          <rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="3"></rect>
          <title>${escapeHTML(isHome ? "vs" : "@")} ${escapeHTML(opponent)}: ${teamScore}-${oppScore} (${escapeHTML(formatDateShort(m.__date))})</title>
        </g>`;
    }).join("");

    return `
      <div class="team-trend">
        <div class="team-trend-title">Tren Selisih Gol &middot; 6 Laga Terakhir</div>
        <svg viewBox="0 0 ${width} ${chartH}" class="team-trend-svg" preserveAspectRatio="xMidYMid meet">
          <line x1="0" y1="${baseY}" x2="${width}" y2="${baseY}" class="team-trend-baseline"></line>
          ${bars}
        </svg>
      </div>`;
  }

  // teamCoaches[slug] diisi fetch-coaches.js (coaches.js, mingguan) —
  // trophies di sini adalah prestasi PRIBADI pelatihnya (karier, bukan
  // cuma di klub ini), lihat catatan di fetch-coaches.js.
  function getCoach(teamName) {
    if (typeof teamCoaches === "undefined") return null;
    const slug = typeof slugifyTeamName === "function" ? slugifyTeamName(teamName) : "";
    return teamCoaches[slug] || null;
  }

  function renderCoachBlock(teamName) {
    const coach = getCoach(teamName);
    if (!coach) return "";
    const meta = [coach.nationality, coach.age != null ? `${coach.age} th` : ""].filter(Boolean).join(" &middot; ");
    const trophyList = (coach.trophies || []).length
      ? `<div class="coach-trophies">
          <div class="coach-trophies-title">Gelar Juara (Karier Pelatih)</div>
          ${coach.trophies.map(t => `<div class="coach-trophy-item">🏆 ${escapeHTML(t.league)} ${escapeHTML(t.season)}</div>`).join("")}
        </div>`
      : "";
    return `
      <div class="coach-card">
        <img class="coach-photo" src="${escapeHTML(coach.photo || "")}" alt="${escapeHTML(coach.name)}" loading="lazy" onerror="this.style.visibility='hidden'">
        <div class="coach-body">
          <div class="coach-name">${escapeHTML(coach.name)}</div>
          ${meta ? `<div class="coach-meta">${meta}</div>` : ""}
        </div>
      </div>
      ${trophyList}`;
  }

  // data.injuries[slug] diisi fetch-schedule.js dari /injuries
  // API-Football (lihat catatan di fetchAllInjuries()) — cuma ada
  // untuk liga yang punya menu Klasemen (MAJOR_LEAGUES_FOR_STANDINGS),
  // jadi wajar kosong untuk tim di luar itu. Section-nya disembunyikan
  // total (bukan cuma pesan kosong) kalau memang tidak ada datanya
  // sama sekali, supaya modal tidak terasa penuh section kosong.
  function getInjuries(teamName) {
    if (typeof data === "undefined" || !data.injuries) return null;
    const slug = typeof slugifyTeamName === "function" ? slugifyTeamName(teamName) : "";
    return data.injuries[slug] || null;
  }

  function renderInjuriesBlock(teamName) {
    const list = getInjuries(teamName);
    if (!list || !list.length) return "";
    return `<div class="team-injury-list">` + list.map(inj => `
      <div class="team-injury-item">
        <img class="team-injury-photo" src="${escapeHTML(inj.photo || "")}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
        <div class="team-injury-body">
          <div class="team-injury-name">${escapeHTML(inj.player)}</div>
          <div class="team-injury-reason">${escapeHTML(inj.reason)}${inj.since ? ` &middot; sejak ${escapeHTML(formatDateShort(inj.since))}` : ""}</div>
        </div>
      </div>`).join("") + `</div>`;
  }

  function renderHistoryBlock(teamName) {
    const items = getHistory(teamName, 6);
    if (!items.length) return `<div class="team-modal-empty">Belum ada riwayat pertandingan yang tercatat.</div>`;

    return `<div class="team-history-list">` + items.map(m => {
      const isHome = m.home === teamName;
      const opponent = isHome ? m.away : m.home;
      const hasScore = typeof m.homeScore === "number" && typeof m.awayScore === "number";
      const teamScore = hasScore ? (isHome ? m.homeScore : m.awayScore) : null;
      const oppScore = hasScore ? (isHome ? m.awayScore : m.homeScore) : null;

      let mark = "-", markClass = "";
      if (hasScore) {
        if (teamScore > oppScore) { mark = "M"; markClass = "ok"; }
        else if (teamScore < oppScore) { mark = "K"; markClass = "no"; }
        else { mark = "S"; markClass = ""; }
      }

      return `
        <div class="team-history-item">
          <span class="team-history-date">${escapeHTML(formatDateShort(m.__date))}</span>
          <span class="team-history-opp">${isHome ? "vs" : "@"} ${escapeHTML(opponent)}</span>
          <span class="team-history-score">${hasScore ? `${m.homeScore}-${m.awayScore}` : "-"}</span>
          <span class="team-history-mark ${markClass}">${mark}</span>
        </div>`;
    }).join("") + `</div>`;
  }

  let currentModalTeam = null;

  function openTeamProfile(teamName) {
    if (!teamName || typeof data === "undefined") return;
    currentModalTeam = teamName;

    const backdrop = document.getElementById("team-modal-backdrop");
    const nameEl = document.getElementById("team-modal-name");
    const logoWrap = document.getElementById("team-modal-logo-wrap");
    const nextEl = document.getElementById("team-modal-next");
    const standingEl = document.getElementById("team-modal-standing");
    const coachSection = document.getElementById("team-modal-coach-section");
    const coachEl = document.getElementById("team-modal-coach");
    const injuriesSection = document.getElementById("team-modal-injuries-section");
    const injuriesEl = document.getElementById("team-modal-injuries");
    const historyEl = document.getElementById("team-modal-history");
    const squadEl = document.getElementById("team-modal-squad");
    if (!backdrop || !nameEl || !logoWrap || !nextEl || !standingEl || !historyEl || !squadEl) return;

    const src = resolveTeamLogo(teamName);
    const initials = escapeHTML(getInitials(teamName));

    nameEl.textContent = teamName;
    logoWrap.className = "team-modal-badge mc-badge-image";
    logoWrap.innerHTML = `<img src="${escapeHTML(src)}" alt="${escapeHTML(teamName)}" loading="lazy" onerror="handleLogoError(this,'${initials}')">`;

    nextEl.innerHTML = renderNextMatchBlock(teamName, getNextMatch(teamName));
    standingEl.innerHTML = renderStandingBlock(teamName);
    if (coachSection && coachEl) {
      const coachHTML = renderCoachBlock(teamName);
      coachEl.innerHTML = coachHTML;
      coachSection.style.display = coachHTML ? "" : "none";
    }
    if (injuriesSection && injuriesEl) {
      const injuriesHTML = renderInjuriesBlock(teamName);
      injuriesEl.innerHTML = injuriesHTML;
      injuriesSection.style.display = injuriesHTML ? "" : "none";
    }
    historyEl.innerHTML = renderFormTrend(teamName) + renderHistoryBlock(teamName);
    squadEl.innerHTML = renderSquadBlock(teamName);
    if (squadsLoadState === "idle") {
      ensureSquadsLoaded().then(() => {
        // Modal bisa saja sudah ditutup/ganti tim lain selagi squads.js
        // masih diunduh — cuma render ulang kalau masih tim yang sama.
        if (currentModalTeam === teamName) squadEl.innerHTML = renderSquadBlock(teamName);
      });
    }

    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeTeamProfile() {
    const backdrop = document.getElementById("team-modal-backdrop");
    if (backdrop) backdrop.classList.remove("open");
    document.body.style.overflow = "";
    currentModalTeam = null;
  }

  function extractTeamName(el) {
    if (el.classList.contains("mc-team")) {
      const nameEl = el.querySelector(".mc-name");
      return nameEl ? nameEl.textContent.trim() : "";
    }
    if (el.classList.contains("bm-team")) {
      const nameEl = el.querySelector(".bm-team-name");
      return nameEl ? nameEl.textContent.trim() : "";
    }
    return el.textContent.trim();
  }

  // Daftar semua nama tim yang muncul di data.js (jadwal, riwayat, laga
  // mendatang, klasemen) — dipakai compare.js buat isi datalist pencarian
  // di fitur "Bandingkan Tim", tanpa perlu daftar tim manual terpisah.
  function getAllTeamNames() {
    if (typeof data === "undefined") return [];
    const names = new Set();
    const addFrom = (arr) => (Array.isArray(arr) ? arr : []).forEach(m => {
      if (m.home) names.add(m.home);
      if (m.away) names.add(m.away);
    });
    addFrom(data.matches);
    Object.values(data.history || {}).forEach(addFrom);
    Object.values(data.upcoming || {}).forEach(addFrom);
    Object.values(data.standings || {}).forEach(rows => {
      (rows || []).forEach(r => { if (r.team) names.add(r.team); });
    });
    return Array.from(names).sort((a, b) => a.localeCompare(b, "id"));
  }

  // Diekspos supaya compare.js (fitur "Bandingkan Tim") bisa pakai ulang
  // logika pencarian riwayat/klasemen/logo yang sama persis, tanpa
  // duplikasi & tanpa saling kenal urutan muat (lihat pola window.BKAccount
  // di account.js).
  window.BKTeamData = { teamPool, getHistory, getStanding, getNextMatch, getAllTeamNames, resolveTeamLogo, logoTag };

  function initTeamProfile() {
    document.addEventListener("click", function (e) {
      const target = e.target.closest(".mc-team, .bm-team, .standings-team, .radar-team-link");
      if (target) {
        const teamName = extractTeamName(target);
        if (teamName) openTeamProfile(teamName);
        return;
      }
      const backdrop = document.getElementById("team-modal-backdrop");
      if (e.target === backdrop) closeTeamProfile();
    });

    const closeBtn = document.getElementById("team-modal-close");
    if (closeBtn) closeBtn.addEventListener("click", closeTeamProfile);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeTeamProfile();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTeamProfile);
  } else {
    initTeamProfile();
  }
})();

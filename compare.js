/* =========================================================
   BOLAKILAS — COMPARE.JS
   Fitur "Bandingkan Tim": H2H bebas antara 2 tim mana pun (bukan
   cuma Big Match) — klasemen, form 5 laga terakhir, & seluruh
   riwayat pertemuan, semuanya ditarik dari data.js yang sama
   lewat window.BKTeamData (diekspos oleh team-profile.js, harus
   dimuat lebih dulu — lihat urutan <script> di index.html).
   ========================================================= */

(function () {
  function populateTeamList() {
    const listEl = document.getElementById("compare-team-list");
    if (!listEl || !window.BKTeamData) return;
    const names = window.BKTeamData.getAllTeamNames();
    listEl.innerHTML = names.map(n => `<option value="${escapeHTML(n)}"></option>`).join("");
  }

  function findHeadToHead(teamA, teamB) {
    return window.BKTeamData.teamPool(teamA)
      .filter(m => m.home === teamB || m.away === teamB)
      .map(m => Object.assign({}, m, { __status: getMatchStatus(m, m.__date) }))
      .filter(m => m.__status.code === "finished" && typeof m.homeScore === "number" && typeof m.awayScore === "number")
      .sort((a, b) => (b.__date + (b.time || "")).localeCompare(a.__date + (a.time || "")));
  }

  function tally(meetings, teamA) {
    let winA = 0, winB = 0, draw = 0;
    meetings.forEach(m => {
      const isAHome = m.home === teamA;
      const aScore = isAHome ? m.homeScore : m.awayScore;
      const bScore = isAHome ? m.awayScore : m.homeScore;
      if (aScore > bScore) winA++;
      else if (aScore < bScore) winB++;
      else draw++;
    });
    return { winA, winB, draw };
  }

  function formBadges(name) {
    const items = window.BKTeamData.getHistory(name, 5).slice().reverse();
    const badges = items.map(m => {
      const isHome = m.home === name;
      if (typeof m.homeScore !== "number" || typeof m.awayScore !== "number") return "";
      const teamScore = isHome ? m.homeScore : m.awayScore;
      const oppScore = isHome ? m.awayScore : m.homeScore;
      const letter = teamScore > oppScore ? "W" : teamScore < oppScore ? "L" : "D";
      return `<span class="form-badge ${letter}">${letter}</span>`;
    }).join("");
    return badges || `<span class="compare-empty-note">Belum ada riwayat</span>`;
  }

  function teamCard(name) {
    const T = window.BKTeamData;
    const standing = T.getStanding(name);
    return `
      <div class="compare-team-card">
        ${T.logoTag(name, "compare-team-logo")}
        <div class="compare-team-name">${escapeHTML(name)}</div>
        ${standing
          ? `<div class="compare-team-standing">#${standing.row.rank} &middot; ${escapeHTML(standing.league)} &middot; ${standing.row.points ?? "-"} Poin</div>`
          : `<div class="compare-empty-note">Klasemen belum tersedia</div>`}
        <div class="form-badges compare-team-form">${formBadges(name)}</div>
      </div>`;
  }

  function h2hBlock(meetings, teamA, teamB) {
    if (!meetings.length) {
      return `<div class="bm-empty-note">Belum ada riwayat pertemuan yang tercatat di data.js antara kedua tim ini.</div>`;
    }
    const t = tally(meetings, teamA);
    const rows = meetings.slice(0, 10).map(m => `
      <div class="compare-h2h-row">
        <span class="compare-h2h-date">${escapeHTML(formatDateShort(m.__date))}</span>
        <span class="compare-h2h-score">${escapeHTML(m.home)} <b>${m.homeScore}-${m.awayScore}</b> ${escapeHTML(m.away)}</span>
      </div>`).join("");

    return `
      <div class="compare-h2h-summary">
        <span><b>${t.winA}</b> Menang ${escapeHTML(teamA)}</span>
        <span><b>${t.draw}</b> Seri</span>
        <span><b>${t.winB}</b> Menang ${escapeHTML(teamB)}</span>
      </div>
      <div class="compare-h2h-list">${rows}</div>`;
  }

  function renderCompare(teamAInput, teamBInput) {
    const resultEl = document.getElementById("compare-result");
    if (!resultEl || !window.BKTeamData) return;

    if (!teamAInput.trim() || !teamBInput.trim()) {
      resultEl.innerHTML = `<div class="bm-empty-note">Pilih dua tim dulu (ketik nama tim, pilih dari saran yang muncul), lalu klik Bandingkan.</div>`;
      return;
    }

    const allNames = window.BKTeamData.getAllTeamNames();
    const resolve = (input) => allNames.find(n => n.toLowerCase() === input.trim().toLowerCase());
    const teamA = resolve(teamAInput);
    const teamB = resolve(teamBInput);

    if (!teamA || !teamB) {
      const missing = !teamA ? teamAInput : teamBInput;
      resultEl.innerHTML = `<div class="bm-empty-note">Tim "${escapeHTML(missing)}" tidak ditemukan di data. Pilih dari saran yang muncul saat mengetik.</div>`;
      return;
    }
    if (teamA === teamB) {
      resultEl.innerHTML = `<div class="bm-empty-note">Pilih dua tim yang berbeda buat dibandingkan.</div>`;
      return;
    }

    const meetings = findHeadToHead(teamA, teamB);
    resultEl.innerHTML = `
      <div class="compare-teams-row">
        ${teamCard(teamA)}
        <div class="compare-vs-label compare-vs-label--result">VS</div>
        ${teamCard(teamB)}
      </div>
      <div class="bm-block compare-h2h-block">
        <div class="bm-block-title">Head to Head</div>
        ${h2hBlock(meetings, teamA, teamB)}
      </div>`;
  }

  function initCompare() {
    const section = document.getElementById("compare-section");
    const inputA = document.getElementById("compare-team-a");
    const inputB = document.getElementById("compare-team-b");
    const btn = document.getElementById("compare-submit-btn");
    if (!section || !inputA || !inputB || !btn) return;

    populateTeamList();

    const run = () => renderCompare(inputA.value, inputB.value);
    btn.addEventListener("click", run);
    [inputA, inputB].forEach(inp => {
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") run(); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCompare);
  } else {
    initCompare();
  }
})();

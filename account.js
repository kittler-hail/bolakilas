/* =========================================================
   BOLAKILAS — ACCOUNT.JS
   Fitur akun: daftar/masuk, simpan tebak skor, migrasi voting
   Big Match ke per-akun, & kalkulator mix parlay.

   CARA SETUP (baca SETUP-SUPABASE.md untuk detail lengkap):
   1. Buat project gratis di https://supabase.com
   2. Jalankan isi supabase-schema.sql di SQL Editor project itu
   3. Ambil "Project URL" & "anon public key" dari Project Settings
      > API, lalu isi dua variabel SUPABASE_URL & SUPABASE_ANON_KEY
      di bawah ini.
   4. Upload ulang file ini ke hosting kamu.

   Selama dua variabel di bawah belum diisi, semua fitur akun akan
   nonaktif secara otomatis (tanpa error) dan situs tetap berjalan
   normal seperti sebelumnya — termasuk voting Big Match yang balik
   pakai localStorage seperti versi lama.
   ========================================================= */

const SUPABASE_URL = "GANTI_DENGAN_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "GANTI_DENGAN_SUPABASE_ANON_KEY";

(function () {

  /* =========================================================
     SETUP CLIENT
     ========================================================= */

  const isConfigured =
    typeof SUPABASE_URL === "string" && SUPABASE_URL.startsWith("http") &&
    typeof SUPABASE_ANON_KEY === "string" && SUPABASE_ANON_KEY.length > 20;

  let supabaseClient = null;
  if (isConfigured && window.supabase && typeof window.supabase.createClient === "function") {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } else if (isConfigured) {
    console.error("BOLAKILAS ACCOUNT: SDK Supabase belum termuat (cek urutan <script> di index.html).");
  } else {
    console.info("BOLAKILAS ACCOUNT: fitur akun belum di-setup. Isi SUPABASE_URL & SUPABASE_ANON_KEY di account.js untuk mengaktifkannya.");
  }

  let currentSession = null;
  let currentProfile = null; // { id, username }

  const notify = (msg) => {
    if (typeof window.showToast === "function") window.showToast(msg);
    else console.log(msg);
  };

  /* =========================================================
     MODAL AKUN — buka/tutup, ganti tab, tampilkan pesan
     ========================================================= */

  const modalBackdrop = () => document.getElementById("auth-modal-backdrop");

  function openAuthModal(mode) {
    const backdrop = modalBackdrop();
    if (!backdrop) return;
    if (mode) setAuthTab(mode);
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    setAuthMsg("");
  }

  function closeAuthModal() {
    const backdrop = modalBackdrop();
    if (!backdrop) return;
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  function setAuthMsg(text, type) {
    const el = document.getElementById("auth-msg");
    if (!el) return;
    el.textContent = text || "";
    el.className = "auth-msg" + (type ? ` auth-msg--${type}` : "");
  }

  function setAuthTab(tab) {
    const isLogin = tab === "login";
    document.getElementById("auth-tab-login").classList.toggle("active", isLogin);
    document.getElementById("auth-tab-register").classList.toggle("active", !isLogin);
    document.getElementById("auth-form-login").style.display = isLogin ? "flex" : "none";
    document.getElementById("auth-form-register").style.display = isLogin ? "none" : "flex";
    document.getElementById("auth-modal-title").textContent = isLogin ? "Masuk ke BOLAKILAS" : "Daftar Akun Baru";
    document.getElementById("auth-modal-sub").textContent = isLogin
      ? "Simpan tebakan skor & prediksimu."
      : "Gratis — buat akun buat mulai nebak skor.";
    setAuthMsg("");
  }

  function initAuthModalUI() {
    const backdrop = modalBackdrop();
    if (!backdrop) return;

    document.getElementById("auth-modal-close").addEventListener("click", closeAuthModal);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeAuthModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAuthModal(); });

    document.getElementById("auth-tab-login").addEventListener("click", () => setAuthTab("login"));
    document.getElementById("auth-tab-register").addEventListener("click", () => setAuthTab("register"));

    document.getElementById("auth-form-login").addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!supabaseClient) { setAuthMsg("Fitur akun belum aktif di situs ini.", "err"); return; }
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value;
      const btn = document.getElementById("login-submit");
      btn.disabled = true; btn.textContent = "Memproses...";
      const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
      btn.disabled = false; btn.textContent = "Masuk";
      if (error) { setAuthMsg(translateAuthError(error), "err"); return; }
      closeAuthModal();
      notify("Berhasil masuk!");
    });

    document.getElementById("auth-form-register").addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!supabaseClient) { setAuthMsg("Fitur akun belum aktif di situs ini.", "err"); return; }
      const username = document.getElementById("register-username").value.trim();
      const email = document.getElementById("register-email").value.trim();
      const password = document.getElementById("register-password").value;
      const btn = document.getElementById("register-submit");
      btn.disabled = true; btn.textContent = "Memproses...";
      const { error } = await supabaseClient.auth.signUp({
        email, password,
        options: { data: { username } }
      });
      btn.disabled = false; btn.textContent = "Daftar";
      if (error) { setAuthMsg(translateAuthError(error), "err"); return; }
      setAuthMsg("Akun dibuat! Cek email kamu kalau diminta konfirmasi, lalu masuk.", "ok");
      setAuthTab("login");
    });
  }

  function translateAuthError(error) {
    const msg = (error && error.message) || "";
    if (/already registered|already exists/i.test(msg)) return "Email ini sudah terdaftar. Coba menu Masuk.";
    if (/invalid login credentials/i.test(msg)) return "Email atau kata sandi salah.";
    if (/password should be at least/i.test(msg)) return "Kata sandi minimal 6 karakter.";
    if (/rate limit/i.test(msg)) return "Terlalu banyak percobaan. Coba lagi sebentar.";
    return msg || "Terjadi kesalahan. Coba lagi.";
  }

  /* =========================================================
     TOMBOL AKUN DI TOPBAR
     ========================================================= */

  function renderAuthSlot() {
    const slot = document.getElementById("auth-slot");
    if (!slot) return;

    if (!supabaseClient) {
      slot.innerHTML = "";
      return;
    }

    if (currentSession) {
      const name = (currentProfile && currentProfile.username) || currentSession.user.email.split("@")[0];
      slot.innerHTML = `
        <div class="account-chip">
          <span class="account-chip-name">${escapeHTML(name)}</span>
          <button class="account-logout-btn" id="account-logout-btn" title="Keluar">Keluar</button>
        </div>`;
      document.getElementById("account-logout-btn").addEventListener("click", async () => {
        await supabaseClient.auth.signOut();
        notify("Kamu sudah keluar.");
      });
    } else {
      slot.innerHTML = `<button class="account-login-btn" id="account-login-btn">Masuk / Daftar</button>`;
      document.getElementById("account-login-btn").addEventListener("click", () => openAuthModal("login"));
    }
  }

  async function loadProfile(userId) {
    if (!supabaseClient) return null;
    const { data, error } = await supabaseClient
      .from("profiles").select("id, username").eq("id", userId).maybeSingle();
    if (error) { console.error(error); return null; }
    return data;
  }

  async function handleAuthChange(session) {
    currentSession = session;
    currentProfile = session ? await loadProfile(session.user.id) : null;
    renderAuthSlot();
    // Render ulang blok yang tergantung status login (kalau Big Match sudah tampil).
    if (data && data.bigMatch) {
      renderVote(data.bigMatch);
      renderGuessBlock(data.bigMatch);
    }
    // Sapaan hero di dashboard-widgets.js ("Selamat datang, {nama}") juga
    // bergantung status login — session Supabase baru resolve async
    // setelah render pertama, jadi perlu di-refresh begitu selesai.
    if (window.BKDashboard) window.BKDashboard.renderDashboard();
  }

  /* =========================================================
     VOTING BIG MATCH (1X2) — pengganti versi localStorage lama
     ========================================================= */

  function isReady() { return !!supabaseClient; }

  async function renderVote(bm) {
    const btnContainer = document.getElementById("bm-vote-buttons");
    const resultsContainer = document.getElementById("bm-vote-results");
    if (!btnContainer || !resultsContainer) return;

    const key = getMatchKey(bm);
    let myChoice = null;

    if (currentSession) {
      const { data: row } = await supabaseClient
        .from("votes").select("choice")
        .eq("user_id", currentSession.user.id).eq("match_key", key).maybeSingle();
      myChoice = row ? row.choice : null;
    } else {
      try { myChoice = (JSON.parse(localStorage.getItem(`bk-vote-guest-${key}`) || "null") || {}).choice || null; }
      catch (e) { myChoice = null; }
    }

    // Hitungan asli dari semua pengguna yang login, ditambah estimasi awal
    // (probabilitas sistem) supaya grafik tidak kosong saat vote masih sedikit.
    const probs = getBmBaseProbs(bm);
    const SAMPLE = 400;
    const base = {
      home: Math.round(probs.home / 100 * SAMPLE),
      draw: Math.round(probs.draw / 100 * SAMPLE),
      away: Math.round(probs.away / 100 * SAMPLE)
    };

    const { data: counts } = await supabaseClient
      .from("vote_counts").select("choice, total").eq("match_key", key);
    (counts || []).forEach(row => {
      if (base[row.choice] !== undefined) base[row.choice] += row.total;
    });
    if (!currentSession && myChoice && base[myChoice] !== undefined) base[myChoice] += 1;

    const total = base.home + base.draw + base.away || 1;
    const pct = {
      home: Math.round(base.home / total * 100),
      draw: Math.round(base.draw / total * 100),
      away: Math.round(base.away / total * 100)
    };

    btnContainer.innerHTML = `
      <button class="vote-btn ${myChoice === "home" ? "selected" : ""}" data-choice="home">${escapeHTML(bm.home)}</button>
      <button class="vote-btn ${myChoice === "draw" ? "selected" : ""}" data-choice="draw">Seri</button>
      <button class="vote-btn ${myChoice === "away" ? "selected" : ""}" data-choice="away">${escapeHTML(bm.away)}</button>
    `;
    resultsContainer.innerHTML = `
      <div class="vote-row"><span>${escapeHTML(bm.home)}</span><div class="form-bar-track"><span style="width:${pct.home}%"></span></div><span class="form-bar-val">${pct.home}%</span></div>
      <div class="vote-row"><span>Seri</span><div class="form-bar-track"><span style="width:${pct.draw}%"></span></div><span class="form-bar-val">${pct.draw}%</span></div>
      <div class="vote-row"><span>${escapeHTML(bm.away)}</span><div class="form-bar-track"><span style="width:${pct.away}%"></span></div><span class="form-bar-val">${pct.away}%</span></div>
    `;

    btnContainer.querySelectorAll(".vote-btn").forEach(btn => {
      btn.addEventListener("click", async function () {
        const choice = this.dataset.choice;
        if (currentSession) {
          const { error } = await supabaseClient.from("votes").upsert(
            { user_id: currentSession.user.id, match_key: key, choice },
            { onConflict: "user_id,match_key" }
          );
          if (error) { notify("Gagal menyimpan vote."); console.error(error); return; }
        } else {
          try { localStorage.setItem(`bk-vote-guest-${key}`, JSON.stringify({ choice })); } catch (e) {}
        }
        notify("Prediksimu tersimpan!");
        renderVote(bm);
      });
    });
  }

  /* =========================================================
     TEBAK SKOR (simpan prediksi pribadi)
     ========================================================= */

  function findActualScore(bm) {
    // Cari skor akhir asli dari data.history berdasarkan tim + tanggal,
    // dipakai untuk menilai benar/salahnya tebakan setelah laga selesai.
    const day = (data.history && data.history[bm.date]) || [];
    const match = day.find(m => m.home === bm.home && m.away === bm.away);
    if (!match || typeof match.homeScore !== "number" || typeof match.awayScore !== "number") return null;
    return { home: match.homeScore, away: match.awayScore };
  }

  async function renderGuessBlock(bm) {
    const extra = document.querySelector(".bm-extra");
    if (!extra) return;

    let block = document.getElementById("bm-guess-block");
    if (!block) {
      block = document.createElement("div");
      block.className = "bm-block bm-guess-block";
      block.id = "bm-guess-block";
      extra.appendChild(block);
    }

    if (!supabaseClient) {
      block.innerHTML = `<div class="bm-block-title">Tebak Skor Kamu</div><div class="bm-empty-note">Fitur akun belum aktif di situs ini.</div>`;
      return;
    }

    if (!currentSession) {
      block.innerHTML = `
        <div class="bm-block-title">Tebak Skor Kamu</div>
        <div class="bm-empty-note">Masuk dulu untuk menebak & menyimpan skormu.</div>
        <button class="section-toggle-btn guess-login-btn" id="guess-login-btn" type="button">Masuk / Daftar</button>`;
      document.getElementById("guess-login-btn").addEventListener("click", () => openAuthModal("login"));
      return;
    }

    const key = getMatchKey(bm);
    const { data: existing } = await supabaseClient
      .from("predictions").select("guess_home, guess_away")
      .eq("user_id", currentSession.user.id).eq("match_key", key).maybeSingle();

    const actual = findActualScore(bm);
    let statusHtml = "";
    if (existing && actual) {
      const exact = existing.guess_home === actual.home && existing.guess_away === actual.away;
      const outcomeGuess = Math.sign(existing.guess_home - existing.guess_away);
      const outcomeActual = Math.sign(actual.home - actual.away);
      const outcomeOk = outcomeGuess === outcomeActual;
      const label = exact ? "Skor tepat!" : outcomeOk ? "Hasil benar, skor beda" : "Meleset";
      const cls = exact || outcomeOk ? "ok" : "no";
      statusHtml = `<div class="guess-result"><span class="tmark ${cls}">${exact ? "✓" : outcomeOk ? "≈" : "✕"}</span> ${label} — hasil akhir ${actual.home}-${actual.away}</div>`;
    }

    block.innerHTML = `
      <div class="bm-block-title">Tebak Skor Kamu</div>
      <form class="guess-form" id="guess-form">
        <input type="number" min="0" max="20" class="guess-input" id="guess-home" value="${existing ? existing.guess_home : ""}" placeholder="0" required>
        <span class="guess-dash">—</span>
        <input type="number" min="0" max="20" class="guess-input" id="guess-away" value="${existing ? existing.guess_away : ""}" placeholder="0" required>
        <button type="submit" class="guess-submit">${existing ? "Ubah" : "Simpan"}</button>
      </form>
      ${statusHtml}
    `;

    document.getElementById("guess-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const guessHome = parseInt(document.getElementById("guess-home").value, 10);
      const guessAway = parseInt(document.getElementById("guess-away").value, 10);
      if (isNaN(guessHome) || isNaN(guessAway)) return;

      const { error } = await supabaseClient.from("predictions").upsert({
        user_id: currentSession.user.id,
        match_key: key,
        match_date: bm.date,
        home_team: bm.home,
        away_team: bm.away,
        league: bm.league || "",
        guess_home: guessHome,
        guess_away: guessAway
      }, { onConflict: "user_id,match_key" });

      if (error) { notify("Gagal menyimpan tebakan."); console.error(error); return; }
      notify("Tebakan skor tersimpan!");
      renderGuessBlock(bm);
    });
  }

  /* =========================================================
     KALKULATOR MIX PARLAY — tidak butuh login sama sekali.
     Odds dihitung dari probabilitas prediksi internal situs
     (deriveProbability/deriveOU di script.js), BUKAN odds resmi
     bandar. Murni simulasi/latihan, tanpa uang asli.
     ========================================================= */

  const parlaySlip = new Map(); // matchKey -> { label, matchLabel, odds }

  function probToOdds(prob) {
    const p = Math.max(4, Math.min(96, Number(prob) || 0));
    return Math.max(1.01, Math.round((100 / p) * 100) / 100);
  }

  function getParlayPool() {
    const matches = Array.isArray(data.matches) ? data.matches : [];
    const dateKey = data.date;
    const notYetPlayed = matches.filter(m => {
      const code = getMatchStatus(m, dateKey).code;
      return code === "upcoming" || code === "soon";
    });
    return notYetPlayed.length ? notYetPlayed : matches;
  }

  function buildParlayPicks(match) {
    const probs = deriveProbability(match);
    const ou = deriveOU(match);
    return [
      { key: "home", group: "1x2", label: `Menang ${match.home}`, short: match.home, odds: probToOdds(probs.home) },
      { key: "draw", group: "1x2", label: "Hasil Seri", short: "Seri", odds: probToOdds(probs.draw) },
      { key: "away", group: "1x2", label: `Menang ${match.away}`, short: match.away, odds: probToOdds(probs.away) },
      { key: "over", group: "ou", label: `Over ${ou.line} Gol`, short: `Over ${ou.line}`, odds: probToOdds(ou.over) },
      { key: "under", group: "ou", label: `Under ${ou.line} Gol`, short: `Under ${ou.line}`, odds: probToOdds(ou.under) },
    ];
  }

  function formatRupiah(n) {
    return "Rp" + Math.round(Math.max(0, n)).toLocaleString("id-ID");
  }

  function renderParlaySlip() {
    const slipEl = document.getElementById("parlay-slip");
    const summaryEl = document.getElementById("parlay-summary");
    if (!slipEl || !summaryEl) return;

    if (parlaySlip.size === 0) {
      slipEl.innerHTML = `<div class="match-empty-sub">Klik salah satu pasaran di bawah untuk menambah ke slip mix parlay.</div>`;
      summaryEl.innerHTML = "";
      return;
    }

    const picks = Array.from(parlaySlip.values());
    slipEl.innerHTML = picks.map(p => `
      <div class="ps-item">
        <div class="ps-item-text">
          <span class="ps-item-match">${escapeHTML(p.matchLabel)}</span>
          <span class="ps-item-pick">${escapeHTML(p.label)}</span>
        </div>
        <span class="ps-item-odds">${p.odds.toFixed(2)}</span>
        <button type="button" class="ps-item-remove" data-remove="${escapeHTML(p.matchKey)}" title="Hapus pick ini">&times;</button>
      </div>`).join("");

    slipEl.querySelectorAll(".ps-item-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const matchKey = btn.dataset.remove;
        parlaySlip.delete(matchKey);
        const chip = document.querySelector(`.pm-card[data-match-key="${matchKey}"] .pm-chip.active`);
        if (chip) chip.classList.remove("active");
        renderParlaySlip();
      });
    });

    const totalOdds = picks.reduce((acc, p) => acc * p.odds, 1);
    const stakeInput = document.getElementById("parlay-stake");
    const stake = Math.max(0, parseInt(stakeInput ? stakeInput.value : 0, 10) || 0);
    const payout = stake * totalOdds;

    summaryEl.innerHTML = `
      <div class="ps-summary-row"><span>Total Odds</span><b>${totalOdds.toFixed(2)}</b></div>
      <div class="ps-summary-row"><span>Estimasi Kemenangan</span><b>${formatRupiah(payout)}</b></div>
    `;
  }

  function renderParlayCalculator() {
    const box = document.getElementById("parlay-box");
    if (!box) return;

    const pool = getParlayPool();

    box.innerHTML = `
      <div class="parlay-disclaimer">Odds simulasi dihitung dari probabilitas prediksi BOLAKILAS, bukan odds resmi bandar. Untuk hiburan &amp; latihan analisis saja.</div>
      ${pool.length === 0 ? "" : `
      <div class="search-wrap parlay-search-wrap">
        <span class="search-icon">Cari</span>
        <input type="text" class="search-input" id="parlay-search" placeholder="Cari nama tim...">
      </div>`}
      <div class="parlay-matches" id="parlay-matches">
        ${pool.length === 0 ? `<div class="match-empty-sub">Belum ada jadwal untuk dijadikan parlay hari ini.</div>` : pool.map((m, i) => {
          const picks = buildParlayPicks(m);
          const matchKey = `m${i}`;
          const matchLabel = `${m.home} vs ${m.away}`;
          const groups = [
            { name: "1X2", keys: ["home", "draw", "away"] },
            { name: "Over/Under", keys: ["over", "under"] },
          ];
          return `
            <div class="pm-card" data-match-key="${matchKey}" data-match-label="${escapeHTML(matchLabel)}">
              <div class="pm-head">
                <span class="league">${escapeHTML(m.league || "")}</span>
                <span>${escapeHTML(formatTime(m.time))} WIB</span>
              </div>
              <div class="pm-teams">${escapeHTML(m.home)} <span class="vs-small">vs</span> ${escapeHTML(m.away)}</div>
              ${groups.map(g => `
                <div class="pm-market-group">
                  <span class="pm-market-label">${g.name}</span>
                  <div class="pm-chips">
                    ${g.keys.map(k => {
                      const p = picks.find(x => x.key === k);
                      return `<button type="button" class="pm-chip" data-pick-key="${k}" data-odds="${p.odds}" data-label="${escapeHTML(p.label)}">${escapeHTML(p.short)} <b>${p.odds.toFixed(2)}</b></button>`;
                    }).join("")}
                  </div>
                </div>`).join("")}
            </div>`;
        }).join("")}
      </div>
      <div class="match-empty-sub" id="parlay-search-empty" style="display:none;">Tidak ada tim yang cocok dengan pencarian.</div>

      <div class="parlay-slip-box">
        <div class="parlay-slip-title">Slip Parlay</div>
        <div class="parlay-slip" id="parlay-slip"></div>
        <div class="parlay-stake-row">
          <label class="rt-count-label">Stake (Rp)
            <input type="number" id="parlay-stake" class="rt-count-input" min="0" step="1000" value="10000">
          </label>
        </div>
        <div class="parlay-summary" id="parlay-summary"></div>
        <button type="button" class="section-toggle-btn" id="parlay-reset-btn">Kosongkan Slip</button>
      </div>
    `;

    box.querySelectorAll(".pm-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".pm-card");
        const matchKey = card.dataset.matchKey;
        const matchLabel = card.dataset.matchLabel;
        const pickKey = btn.dataset.pickKey;
        const odds = parseFloat(btn.dataset.odds);
        const label = btn.dataset.label;

        const existing = parlaySlip.get(matchKey);
        card.querySelectorAll(".pm-chip").forEach(c => c.classList.remove("active"));

        if (existing && existing.pickKey === pickKey) {
          parlaySlip.delete(matchKey);
        } else {
          parlaySlip.set(matchKey, { matchKey, matchLabel, pickKey, label, odds });
          btn.classList.add("active");
        }
        renderParlaySlip();
      });
    });

    const stakeInput = document.getElementById("parlay-stake");
    stakeInput.addEventListener("input", renderParlaySlip);

    document.getElementById("parlay-reset-btn").addEventListener("click", () => {
      parlaySlip.clear();
      box.querySelectorAll(".pm-chip.active").forEach(c => c.classList.remove("active"));
      renderParlaySlip();
    });

    // Pencarian tim — cuma sembunyikan/tampilkan kartu yang sudah dirender
    // (bukan re-render ulang), supaya matchKey ("m0", "m1", dst, dipakai
    // parlaySlip buat lacak pick) tetap stabil walau lagi difilter.
    const searchInput = document.getElementById("parlay-search");
    const matchesWrap = document.getElementById("parlay-matches");
    const searchEmptyNote = document.getElementById("parlay-search-empty");
    if (searchInput && matchesWrap) {
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;
        matchesWrap.querySelectorAll(".pm-card").forEach(card => {
          const isMatch = !query || (card.dataset.matchLabel || "").toLowerCase().includes(query);
          card.style.display = isMatch ? "" : "none";
          if (isMatch) visibleCount++;
        });
        if (searchEmptyNote) searchEmptyNote.style.display = visibleCount === 0 ? "" : "none";
      });
    }

    renderParlaySlip();
  }

  /* =========================================================
     INIT
     ========================================================= */

  function init() {
    initAuthModalUI();
    renderAuthSlot();
    renderParlayCalculator();

    if (supabaseClient) {
      supabaseClient.auth.getSession().then(({ data: { session } }) => handleAuthChange(session));
      supabaseClient.auth.onAuthStateChange((_event, session) => handleAuthChange(session));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Nama tampilan pengguna yang sedang masuk (null kalau belum login) —
  // logika sama persis dengan renderAuthSlot(), dipakai ulang oleh
  // dashboard-widgets.js untuk sapaan "Selamat datang, {nama}" di hero.
  function getDisplayName() {
    if (!currentSession) return null;
    return (currentProfile && currentProfile.username) || currentSession.user.email.split("@")[0];
  }

  // Diekspos supaya script.js bisa memanggil (lihat renderBigMatchVote /
  // renderBigMatchGuess di script.js) tanpa dua file ini saling kenal duluan.
  window.BKAccount = { isReady, renderVote, renderGuessBlock, getDisplayName };

})();

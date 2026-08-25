/* =========================================================
   BOLAKILAS — PAGE-ROUTER.JS
   Situs ini tetap 1 file index.html (sesuai deploy statis GitHub
   Pages yang sudah ada, tanpa server/build step), tapi dipecah jadi
   3 "halaman" (Beranda/Prediksi/Berita) yang saling sembunyi-tampil
   lewat class .app-view/.active — bukan reload sungguhan, tapi tetap
   punya URL sendiri per halaman (lewat #hash) supaya bisa di-
   bookmark/di-share & tombol back/forward browser tetap jalan wajar.
   Klub Unggulan & Live Streaming/Highlight sudah dihapus (yang
   terakhir karena tidak ada sumber streaming legal untuk liga besar
   — lihat riwayat commit), Sosial digabung ke modal "Tentang" (bukan
   halaman lagi), jadi bukan bagian router ini.

   Kenapa bukan file terpisah beneran (index.html, prediksi.html, dst):
   header/nav/skrip cuma perlu ada di 1 tempat, jadi tidak ada risiko
   1 file "ketinggalan update" pas nav/header diubah di kemudian hari.
   ========================================================= */

(function () {
  const VIEWS = ["beranda", "prediksi", "berita"];
  const DEFAULT_VIEW = "beranda";

  // Anchor section lama (dipakai cross-link di konten) -> id halaman
  // yang sekarang menampungnya, supaya link lama tetap nyambung ke
  // halaman yang benar (bukan cuma diam kalau section-nya lagi
  // disembunyikan).
  const SECTION_TO_VIEW = {
    "jadwal": "beranda",
    "club-search-section": "beranda",
    "klasemen-section": "beranda",
    "radar-section": "prediksi",
    "compare-section": "prediksi",
    "bigmatch-section": "prediksi",
    "parlay-section": "prediksi",
    "rekam-jejak": "prediksi",
    "berita": "berita"
  };

  // Elemen .reveal di dalam halaman yang lagi disembunyikan (display:none)
  // tidak pernah "intersect" IntersectionObserver punya script.js, jadi
  // begitu halaman ditampilkan, paksa .in langsung tanpa animasi scroll.
  function revealNow(container) {
    container.querySelectorAll(".reveal:not(.in)").forEach(el => el.classList.add("in"));
  }

  function showView(viewName, opts) {
    opts = opts || {};
    const name = VIEWS.includes(viewName) ? viewName : DEFAULT_VIEW;

    VIEWS.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.classList.toggle("active", v === name);
    });
    document.querySelectorAll(".nav a[data-view]").forEach(a => {
      a.classList.toggle("active", a.dataset.view === name);
    });

    const activeEl = document.getElementById(`view-${name}`);
    if (activeEl) revealNow(activeEl);
    if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: "auto" });
  }

  function goToSection(sectionId) {
    const viewName = SECTION_TO_VIEW[sectionId];
    const target = document.getElementById(sectionId);
    if (!viewName || !target) return false;
    showView(viewName, { keepScroll: true });
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return true;
  }

  function resolveHash() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw) { showView(DEFAULT_VIEW); return; }
    if (VIEWS.includes(raw)) { showView(raw); return; }
    if (SECTION_TO_VIEW[raw]) { goToSection(raw); return; }
    showView(DEFAULT_VIEW);
  }

  function initRouter() {
    // Delegasi 1 listener buat SEMUA link "#..." (nav topbar maupun
    // cross-link di konten) — konsisten & tidak perlu wiring terpisah
    // per tombol.
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id || (!VIEWS.includes(id) && !SECTION_TO_VIEW[id])) return;
      e.preventDefault();
      if (location.hash === `#${id}`) resolveHash();
      else location.hash = id;
    });

    window.addEventListener("hashchange", resolveHash);
    resolveHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRouter);
  } else {
    initRouter();
  }
})();

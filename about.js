/* =========================================================
   BOLAKILAS — ABOUT.JS
   Modal "Tentang BOLAKILAS" — dipicu dari tombol "Tentang" di topbar
   (class .about-open-btn; querySelectorAll di bawah tetap aman kalau
   suatu saat ada tombol pemicu lain dengan class yang sama).
   ========================================================= */

(function () {
  function openAboutModal() {
    const backdrop = document.getElementById("about-modal-backdrop");
    if (!backdrop) return;
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeAboutModal() {
    const backdrop = document.getElementById("about-modal-backdrop");
    if (!backdrop) return;
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  function initAbout() {
    const backdrop = document.getElementById("about-modal-backdrop");
    if (!backdrop) return;

    document.querySelectorAll(".about-open-btn").forEach(btn => {
      btn.addEventListener("click", openAboutModal);
    });

    const closeBtn = document.getElementById("about-modal-close");
    if (closeBtn) closeBtn.addEventListener("click", closeAboutModal);

    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeAboutModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAboutModal(); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAbout);
  } else {
    initAbout();
  }
})();

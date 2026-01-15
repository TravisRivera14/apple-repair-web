// iCare Tech CR - interactions (menu + reveal + WhatsApp link)
(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  const setMenuOpen = (open) => {
    if (!menuBtn || !mobileNav) return;
    menuBtn.setAttribute("aria-expanded", String(open));
    mobileNav.hidden = !open;
  };

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    // Close menu on link click
    mobileNav.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) setMenuOpen(false);
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    });
  }

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // WhatsApp (cambia el número luego)
  const WHATSAPP_NUMBER = "50600000000"; // <-- Cambiar luego: 506 + tu número (sin +)
  const WA_TEXT = encodeURIComponent("Hola, vengo desde iCareTechCR.com. Me gustaría una cotización.");
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT}`;

  const waLink = document.getElementById("waLink");
  const fabWa = document.getElementById("fabWa");
  if (waLink) waLink.href = waUrl;
  if (fabWa) fabWa.href = waUrl;
})();

// Año automático
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// WhatsApp (cambia el número aquí)
const phone = "50685836365";
const msg = "Hola, quiero una cotización de iCare Tech CR";
const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

const waLink = document.getElementById("waLink");
const fabWa  = document.getElementById("fabWa");
if (waLink) waLink.href = waUrl;
if (fabWa) fabWa.href = waUrl;

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
  });

  // Cierra el menú al dar click en un link
  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

// Reveal on scroll
const items = document.querySelectorAll(".reveal");
if (items.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => io.observe(el));
}
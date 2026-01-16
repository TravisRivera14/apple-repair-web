// ===== CONFIG =====
// Cambia este número cuando quieras (Costa Rica ejemplo: 50688887777)
const WHATSAPP_NUMBER = "50600000000";
const WHATSAPP_TEXT = "Hola, quiero una cotización. Me interesa:";

// ===== MENU MÓVIL =====
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function setMobile(open) {
  menuBtn.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
}

menuBtn?.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  setMobile(!isOpen);
});

document.querySelectorAll(".mobile__link").forEach(a => {
  a.addEventListener("click", () => setMobile(false));
});

// ===== WHATSAPP LINKS =====
function waUrl() {
  const text = encodeURIComponent(WHATSAPP_TEXT);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

const waLink = document.getElementById("waLink");
if (waLink) waLink.href = waUrl();

const fab = document.getElementById("fabWa");
if (fab) fab.href = waUrl();

// ===== YEAR =====
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// ===== REVEAL ANIMATION =====
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.14 });

els.forEach(el => io.observe(el));

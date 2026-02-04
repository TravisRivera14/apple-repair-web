// Año automático
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== WhatsApp configuración =====
// Cambia el número aquí (sin +, sin espacios)
const phone = "50685836365";

// Mensaje base
const baseMsg = "Hola, quiero una cotización con iCare Tech CR.";

// Construye URL a WhatsApp con texto
function waUrlWithMessage(message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Links generales (botón de contacto + FAB)
const waLink = document.getElementById("waLink");
const fabWa = document.getElementById("fabWa");
const genericUrl = waUrlWithMessage(baseMsg);

if (waLink) waLink.href = genericUrl;
if (fabWa) fabWa.href = genericUrl;

// ===== Links de productos (abre WhatsApp con el nombre del producto) =====
const productLinks = document.querySelectorAll(".js-wa-product");

productLinks.forEach((a) => {
  const product = a.getAttribute("data-product") || "un producto";
  const msg = `${baseMsg}\n\nProducto: ${product}\n\n¿Me compartes precio y disponibilidad?`;
  a.href = waUrlWithMessage(msg);
  a.target = "_blank";
  a.rel = "noreferrer";
});

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
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
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
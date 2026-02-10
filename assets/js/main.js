// ====== CONFIG ======
const PHONE = "50685836365"; // <-- tu WhatsApp (sin +)
const DEFAULT_MSG = "Hola, quiero una cotización de iCare Tech CR";

// Año
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// WhatsApp helpers
function waLink(message){
  return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message);
}
function openWA(message){
  window.open(waLink(message), "_blank", "noopener");
}

// Botones cotizar
const btnCotizarTop = document.getElementById("btnCotizarTop");
if (btnCotizarTop) btnCotizarTop.addEventListener("click", () => openWA(DEFAULT_MSG));

const btnCotizarHero = document.getElementById("btnCotizarHero");
if (btnCotizarHero) btnCotizarHero.addEventListener("click", () => openWA(DEFAULT_MSG));

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  }));
}

// Accordion (Venta Apple)
document.querySelectorAll(".acc").forEach(acc => {
  const head = acc.querySelector(".accHead");
  if (!head) return;

  head.addEventListener("click", () => {
    // Cierra otros
    document.querySelectorAll(".acc").forEach(o => { if (o !== acc) o.classList.remove("open"); });
    // Abre el seleccionado
    acc.classList.add("open");
  });
});

// Botones de productos -> WhatsApp con nombre del producto
document.querySelectorAll(".pBtn[data-product]").forEach(btn => {
  btn.addEventListener("click", () => {
    const prod = btn.getAttribute("data-product") || "Producto Apple";
    openWA("Hola, quiero cotizar este producto: " + prod);
  });
});
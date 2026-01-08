(function () {
  const WHATSAPP_NUMBER = "50688887777"; // <-- pon tu número real (con 506)
  const BUSINESS_NAME = "iCare Tech CR";

  function waLink(msg) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  // Links generales
  const generalMsg = `Hola, vengo de la web (${BUSINESS_NAME}). Quiero cotizar.`;
  ["waTop", "waHero", "waBottom", "waFab"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waLink(generalMsg);
  });

  // Links por sector
  const seguridad = document.getElementById("waSeguridad");
  if (seguridad) seguridad.href = waLink("Hola, quiero cotizar CÁMARAS/ALARMAS. Ubicación: __. ¿Cuántas cámaras? __. ¿Interior/exterior? __.");

  const apple = document.getElementById("waApple");
  if (apple) apple.href = waLink("Hola, quiero cotizar REPARACIÓN APPLE. Modelo: __. Problema: __. ¿Tuvo golpes/agua? __.");

  const pc = document.getElementById("waPC");
  if (pc) pc.href = waLink("Hola, quiero cotizar REPARACIÓN DE COMPUTADORA. Equipo: __. Problema: __. ¿Enciende? __.");

  // Menú móvil
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (burger && nav) burger.addEventListener("click", () => nav.classList.toggle("is-open"));

  // Año
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Scroll reveal (Apple-like smooth)
  const items = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  }, { threshold: 0.18 });

  items.forEach(el => io.observe(el));

})();

(function () {
  const BUSINESS_NAME = "iCare Tech CR";
  const WHATSAPP_NUMBER = "50688887777"; // <-- pon tu número real
  const DEFAULT_MSG = `Hola, vengo de la web. Quiero una cotización. Modelo: __. Problema: __.`;

  function waLink(msg = DEFAULT_MSG) {
    const text = encodeURIComponent(msg);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  ["waTop", "waHero", "waBottom", "waFab"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waLink();
  });

  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (burger && nav) burger.addEventListener("click", () => nav.classList.toggle("is-open"));

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.title = `${BUSINESS_NAME} | Reparación Apple`;
})();

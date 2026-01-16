// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp (cambiá el número cuando quieras)
const phone = "50688888888"; // ejemplo Costa Rica
const message = "Hola, quiero información sobre sus servicios";
const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

document.getElementById("waLink").href = waLink;

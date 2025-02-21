// Gestion du menu mobile
function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

// Gestion du zoom avec stockage local
let defaultSize = 16; // Taille de police par défaut
let minSize = 12; // Taille minimale
let maxSize = 24; // Taille maximale

// Charger la taille enregistrée
if (localStorage.getItem("fontSize")) {
  document.body.style.fontSize = localStorage.getItem("fontSize") + "px";
}

// Fonction pour ajuster la taille du texte
function adjustFontSize(change) {
  let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
  let newSize = currentSize + change;

  if (newSize >= minSize && newSize <= maxSize) {
    document.body.style.fontSize = newSize + "px";
    localStorage.setItem("fontSize", newSize); // Enregistrer la préférence
  }
}

// Gestion du formulaire de contact
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Merci pour votre message ! Nous vous répondrons bientôt.");
});

// ============================================================
//  Sloppy Dogs Tasting – Einstellungen
//  Nur diese Datei musst du anpassen.
// ============================================================
window.TASTING_CONFIG = {

  // 1) Aus der Firebase-Konsole kopieren (Projekteinstellungen → Deine Apps → Web-App)
  firebase: {
    apiKey: "AIzaSyCvFJAEEGlNTHfSZplHWz5zolcY3e7qWyg",
    authDomain: "tasting-1dd9e.firebaseapp.com",
    projectId: "tasting-1dd9e",
    storageBucket: "tasting-1dd9e.firebasestorage.app",
    messagingSenderId: "941725143380",
    appId: "1:941725143380:web:815149238be5469614b8c1"
  },

  // 2) Code, den du den Gästen sagst (leer lassen "" = kein Code nötig)
  tastingCode: "1234",

  // 3) Rangliste erst zeigen, wenn du sie freigibst? (siehe README)
  hideResultsUntilReveal: false,

  // 4) Eure Sorten – Namen und Beschreibung anpassen, id nicht mehr ändern, sobald bewertet wird
  dogs: [
    { id: "dog1", name: "Sorte 1", desc: "" },
    { id: "dog2", name: "Sorte 2", desc: "" },
    { id: "dog3", name: "Sorte 3", desc: "" },
    { id: "dog4", name: "Sorte 4", desc: "" },
    { id: "dog5", name: "Sorte 5 (Spicy)", desc: "Scharf, soßig, mit Käse" }
  ],

  // 5) Bewertungskriterien (jeweils 1–10)
  criteria: [
    { id: "taste",   label: "Geschmack" },
    { id: "look",    label: "Optik" },
    { id: "sauce",   label: "Soße & Toppings" },
    { id: "messy",   label: "Essbarkeit" },
    { id: "price",   label: "10 € wert?" }
  ]
};

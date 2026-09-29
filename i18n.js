// UI strings for the Tibetan Letter Trainer. Add a language by adding a key here
// and providing `label`/`desc` translations in data.js.
const UI = {
  de: {
    docTitle: "Tibetisch-Trainer",
    title: 'Tibetisch-Trainer <span class="tibetan">བོད་ཡིག</span>',
    subtitle: "Lerne die tibetische Schrift — ein Zeichen nach dem anderen.",
    kbdHint: "Leertaste oder → für weiter",
    setsHeading: "Zeichensätze",
    optionsHeading: "Optionen",
    lblFlashcard: "Karteikarten-Modus",
    hintFlashcard: "Infos ausblenden bis zum Aufdecken",
    lblWylie: "Wylie anzeigen",
    hintWylie: "Transliteration",
    lblThl: "THL-Lautschrift anzeigen",
    hintThl: "Ungefähre Aussprache",
    lblDesc: "Aufbau anzeigen",
    hintDesc: "Wie es gebildet wird",
    nextBtn: "Nächstes Zeichen →",
    revealHint: "Tippen oder Leertaste zum Aufdecken",
    kWylie: "Wylie",
    kThl: "THL-Lautschrift",
    kDesc: "Aufbau",
    footer: 'Schrift: Noto Serif Tibetan (via Google Fonts). THL = vereinfachte Lautschrift der Tibetan &amp; Himalayan Library. Die Beschreibungen sind Lernhilfen, keine vollständige Grammatik.<br>Referenzen: <a href="https://de.wikipedia.org/wiki/Umschrift_nach_Wylie" target="_blank" rel="noopener">Umschrift nach Wylie</a> · <a href="https://de.wikipedia.org/wiki/THDL-Transkription" target="_blank" rel="noopener">THDL/THL-Transkription</a>'
  },
  en: {
    docTitle: "Tibetan Letter Trainer",
    title: 'Tibetan Letter Trainer <span class="tibetan">བོད་ཡིག</span>',
    subtitle: "Learn the Tibetan script — one glyph at a time.",
    kbdHint: "Press Space or → for next",
    setsHeading: "Letter sets",
    optionsHeading: "Options",
    lblFlashcard: "Flashcard mode",
    hintFlashcard: "Hide info until revealed",
    lblWylie: "Show Wylie",
    hintWylie: "Transliteration",
    lblThl: "Show THL phonetics",
    hintThl: "Approx. pronunciation",
    lblDesc: "Show composition",
    hintDesc: "How it is built",
    nextBtn: "Next letter →",
    revealHint: "Tap or press Space to reveal info",
    kWylie: "Wylie",
    kThl: "THL phonetic",
    kDesc: "Composition",
    footer: 'Font: Noto Serif Tibetan (via Google Fonts). THL = Tibetan &amp; Himalayan Library simplified phonetics. Descriptions are learning aids, not exhaustive grammar.<br>References: <a href="https://en.wikipedia.org/wiki/Wylie_transliteration" target="_blank" rel="noopener">Wylie transliteration</a> · <a href="https://en.wikipedia.org/wiki/THL_Simplified_Phonetic_Transcription" target="_blank" rel="noopener">THL Simplified Phonetics</a>'
  }
};

// The default language when none is stored in localStorage.
const DEFAULT_LANG = "de";

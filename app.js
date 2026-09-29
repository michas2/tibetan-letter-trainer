// Application logic. Depends on i18n.js (UI, DEFAULT_LANG) and data.js (SETS).

function initialLang() {
  const saved = localStorage.getItem("tlt_lang");
  if (saved === "de" || saved === "en") return saved;
  return DEFAULT_LANG;
}

const state = {
  lang: initialLang(),
  selected: new Set(["consonants"]),
  flashcard: false,
  showWylie: true,
  showThl: true,
  showDesc: true,
  current: null,
  revealed: true
};

const el = {
  appTitle: document.getElementById("appTitle"),
  appSubtitle: document.getElementById("appSubtitle"),
  kbdHint: document.getElementById("kbdHint"),
  setsHeading: document.getElementById("setsHeading"),
  optionsHeading: document.getElementById("optionsHeading"),
  lblFlashcard: document.getElementById("lblFlashcard"),
  hintFlashcard: document.getElementById("hintFlashcard"),
  lblWylie: document.getElementById("lblWylie"),
  hintWylie: document.getElementById("hintWylie"),
  lblThl: document.getElementById("lblThl"),
  hintThl: document.getElementById("hintThl"),
  lblDesc: document.getElementById("lblDesc"),
  hintDesc: document.getElementById("hintDesc"),
  nextBtn: document.getElementById("nextBtn"),
  revealHint: document.getElementById("revealHint"),
  kWylie: document.getElementById("kWylie"),
  kThl: document.getElementById("kThl"),
  kDesc: document.getElementById("kDesc"),
  footerNote: document.getElementById("footerNote"),
  setList: document.getElementById("setList"),
  glyph: document.getElementById("glyph"),
  badgeSet: document.getElementById("badgeSet"),
  info: document.getElementById("info"),
  valWylie: document.getElementById("valWylie"),
  valThl: document.getElementById("valThl"),
  valDesc: document.getElementById("valDesc"),
  cellWylie: document.getElementById("cellWylie"),
  cellThl: document.getElementById("cellThl"),
  cellDesc: document.getElementById("cellDesc"),
  flashcardToggle: document.getElementById("flashcardToggle"),
  wylieToggle: document.getElementById("wylieToggle"),
  thlToggle: document.getElementById("thlToggle"),
  descToggle: document.getElementById("descToggle"),
  langSwitch: document.getElementById("langSwitch")
};

// Apply all static UI strings for the current language.
function applyLanguage() {
  const t = UI[state.lang];
  document.documentElement.lang = state.lang;
  document.title = t.docTitle;
  el.appTitle.innerHTML = t.title;
  el.appSubtitle.textContent = t.subtitle;
  el.kbdHint.textContent = t.kbdHint;
  el.setsHeading.textContent = t.setsHeading;
  el.optionsHeading.textContent = t.optionsHeading;
  el.lblFlashcard.textContent = t.lblFlashcard;
  el.hintFlashcard.textContent = t.hintFlashcard;
  el.lblWylie.textContent = t.lblWylie;
  el.hintWylie.textContent = t.hintWylie;
  el.lblThl.textContent = t.lblThl;
  el.hintThl.textContent = t.hintThl;
  el.lblDesc.textContent = t.lblDesc;
  el.hintDesc.textContent = t.hintDesc;
  el.nextBtn.textContent = t.nextBtn;
  el.revealHint.textContent = t.revealHint;
  el.kWylie.textContent = t.kWylie;
  el.kThl.textContent = t.kThl;
  el.kDesc.textContent = t.kDesc;
  el.footerNote.innerHTML = t.footer;

  el.langSwitch.querySelectorAll("button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === state.lang);
  });

  refreshSetLabels();
}

// Build the set checkboxes once; labels updated on language change.
function buildSetList() {
  el.setList.innerHTML = "";
  Object.entries(SETS).forEach(([key, set]) => {
    const row = document.createElement("label");
    row.className = "set-row";
    row.dataset.key = key;
    row.innerHTML = `
      <input type="checkbox" value="${key}" ${state.selected.has(key) ? "checked" : ""} />
      <span class="name">${set.label[state.lang]}</span>
      <span class="count">${set.data.length}</span>`;
    const cb = row.querySelector("input");
    cb.addEventListener("change", () => {
      if (cb.checked) state.selected.add(key);
      else state.selected.delete(key);
      if (state.selected.size === 0) {
        cb.checked = true;
        state.selected.add(key);
      }
      nextLetter();
    });
    el.setList.appendChild(row);
  });
}

function refreshSetLabels() {
  el.setList.querySelectorAll(".set-row").forEach(row => {
    const key = row.dataset.key;
    row.querySelector(".name").textContent = SETS[key].label[state.lang];
  });
}

function activePool() {
  const pool = [];
  state.selected.forEach(key => {
    SETS[key].data.forEach(item => pool.push({ ...item, _setKey: key }));
  });
  return pool;
}

function nextLetter() {
  const pool = activePool();
  if (pool.length === 0) return;
  let pick;
  do {
    pick = pool[Math.floor(Math.random() * pool.length)];
  } while (pool.length > 1 && state.current && pick.tb === state.current.tb && pick._setKey === state.current._setKey);
  state.current = pick;
  render();
}

function render() {
  const c = state.current;
  if (!c) return;
  el.glyph.textContent = c.tb;
  el.badgeSet.textContent = SETS[c._setKey].label[state.lang];

  el.valWylie.textContent = c.wylie;
  el.valThl.textContent = c.thl;
  el.valDesc.textContent = c.desc[state.lang];

  el.cellWylie.style.display = state.showWylie ? "" : "none";
  el.cellThl.style.display = state.showThl ? "" : "none";
  el.cellDesc.style.display = state.showDesc ? "" : "none";

  if (state.flashcard) {
    state.revealed = false;
    el.info.classList.add("hidden");
    el.revealHint.classList.remove("hidden");
  } else {
    state.revealed = true;
    el.info.classList.remove("hidden");
    el.revealHint.classList.add("hidden");
  }
}

function reveal() {
  if (!state.flashcard) return;
  state.revealed = true;
  el.info.classList.remove("hidden");
  el.revealHint.classList.add("hidden");
}

/* Events */
el.nextBtn.addEventListener("click", nextLetter);

el.flashcardToggle.addEventListener("change", e => { state.flashcard = e.target.checked; render(); });
el.wylieToggle.addEventListener("change", e => { state.showWylie = e.target.checked; render(); });
el.thlToggle.addEventListener("change", e => { state.showThl = e.target.checked; render(); });
el.descToggle.addEventListener("change", e => { state.showDesc = e.target.checked; render(); });

document.querySelector(".card").addEventListener("click", () => {
  if (state.flashcard && !state.revealed) reveal();
  else nextLetter();
});
el.revealHint.addEventListener("click", reveal);

el.langSwitch.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    localStorage.setItem("tlt_lang", state.lang);
    applyLanguage();
    render();
  });
});

document.addEventListener("keydown", e => {
  if (e.code === "Space" || e.code === "ArrowRight") {
    e.preventDefault();
    if (state.flashcard && !state.revealed) reveal();
    else nextLetter();
  } else if (e.key.toLowerCase() === "r") {
    reveal();
  }
});

// Init
buildSetList();
applyLanguage();
nextLetter();

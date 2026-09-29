// Application logic. Depends on i18n.js (UI, DEFAULT_LANG) and data.js (SETS, AUDIO).
// Wrapped in an IIFE so helpers like `$` don't leak into / collide with globals.
(function () {
"use strict";

/* ---------- Small DOM helpers ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const byId = id => document.getElementById(id);

/* ---------- Persistence ---------- */
const STORAGE_KEY = "tlt_state";

// Load persisted user choices, tolerating older/partial/corrupt data.
function loadPersisted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw);
    return data && typeof data === "object" ? data : {};
  } catch {
    return {};
  }
}

function savePersisted() {
  const data = {
    lang: state.lang,
    font: state.font,
    selected: [...state.selected],
    flashcard: state.flashcard,
    autoplay: state.autoplay,
    showWylie: state.showWylie,
    showThl: state.showThl,
    showDesc: state.showDesc
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore quota / privacy-mode errors */
  }
}

/* ---------- State ---------- */
const persisted = loadPersisted();

// Selectable glyph fonts: value -> CSS class on #glyph (see styles.css).
const FONTS = {
  noto: "font-noto",
  amdo: "font-amdo",
  rinzin: "font-rinzin",
  uchen: "font-uchen"
};
const DEFAULT_FONT = "noto";

function initialLang() {
  const l = persisted.lang;
  return l === "de" || l === "en" ? l : DEFAULT_LANG;
}

function initialSelected() {
  const sel = Array.isArray(persisted.selected)
    ? persisted.selected.filter(k => k in SETS)
    : [];
  return new Set(sel.length ? sel : ["consonants"]);
}

const state = {
  lang: initialLang(),
  font: FONTS[persisted.font] ? persisted.font : DEFAULT_FONT,
  selected: initialSelected(),
  flashcard: persisted.flashcard ?? false,
  autoplay: persisted.autoplay ?? true,
  showWylie: persisted.showWylie ?? true,
  showThl: persisted.showThl ?? true,
  showDesc: persisted.showDesc ?? true,
  current: null,
  revealed: true
};

/* ---------- Stable element references ---------- */
const el = {
  langSwitch: byId("langSwitch"),
  fontSelect: byId("fontSelect"),
  setList: byId("setList"),
  nextBtn: byId("nextBtn"),
  card: $(".card"),
  glyph: byId("glyph"),
  badgeSet: byId("badgeSet"),
  info: byId("info"),
  revealHint: byId("revealHint"),
  valWylie: byId("valWylie"),
  valThl: byId("valThl"),
  valDesc: byId("valDesc"),
  audioRow: byId("audioRow"),
  audioBtn: byId("audioBtn")
};

/* ---------- i18n ---------- */
// Apply all static UI strings for the current language by scanning the DOM
// for data-i18n / data-i18n-html / data-i18n-attr markers. Adding a new UI
// string means adding one HTML attribute + one key in i18n.js — nothing here.
function applyLanguage() {
  const t = UI[state.lang];
  document.documentElement.lang = state.lang;
  document.title = t.docTitle;

  $$("[data-i18n]").forEach(node => {
    node.textContent = t[node.dataset.i18n];
  });
  $$("[data-i18n-html]").forEach(node => {
    node.innerHTML = t[node.dataset.i18nHtml];
  });
  // data-i18n-attr="attr:key,attr:key" — set attributes from UI strings.
  $$("[data-i18n-attr]").forEach(node => {
    node.dataset.i18nAttr.split(",").forEach(pair => {
      const [attr, key] = pair.split(":");
      node.setAttribute(attr.trim(), t[key.trim()]);
    });
  });

  $$("button", el.langSwitch).forEach(b => {
    b.classList.toggle("active", b.dataset.lang === state.lang);
  });

  refreshSetLabels();
}

/* ---------- Letter sets ---------- */
// Build the set checkboxes once; labels are refreshed on language change.
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
    const cb = $("input", row);
    cb.addEventListener("change", () => {
      if (cb.checked) state.selected.add(key);
      else state.selected.delete(key);
      // Never allow an empty selection; re-check this one.
      if (state.selected.size === 0) {
        cb.checked = true;
        state.selected.add(key);
      }
      savePersisted();
      nextLetter();
    });
    el.setList.appendChild(row);
  });
}

function refreshSetLabels() {
  $$(".set-row", el.setList).forEach(row => {
    $(".name", row).textContent = SETS[row.dataset.key].label[state.lang];
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
  } while (
    pool.length > 1 &&
    state.current &&
    pick.tb === state.current.tb &&
    pick._setKey === state.current._setKey
  );
  state.current = pick;
  render();
}

// Apply the selected glyph font by swapping the font-* class on #glyph.
function applyFont() {
  Object.values(FONTS).forEach(cls => el.glyph.classList.remove(cls));
  el.glyph.classList.add(FONTS[state.font]);
}

/* ---------- Rendering ---------- */
function render() {
  const c = state.current;
  if (!c) return;
  stopAudio();

  el.glyph.textContent = c.tb;
  el.badgeSet.textContent = SETS[c._setKey].label[state.lang];
  el.valWylie.textContent = c.wylie;
  el.valThl.textContent = c.thl;
  el.valDesc.textContent = c.desc[state.lang];

  applyFieldVisibility();
  applyFlashcardState();
  updateAudioButton();
  maybeAutoplay();
}

// Show/hide the Wylie / THL / composition cells per their toggles.
function applyFieldVisibility() {
  $$("[data-field]").forEach(cell => {
    cell.classList.toggle("is-hidden", !state[cell.dataset.field]);
  });
}

// In flashcard mode the info is hidden until revealed; otherwise always shown.
function applyFlashcardState() {
  state.revealed = !state.flashcard;
  el.info.classList.toggle("is-hidden", state.flashcard);
  el.revealHint.classList.toggle("is-hidden", !state.flashcard);
}

function reveal() {
  if (!state.flashcard || state.revealed) return;
  state.revealed = true;
  el.info.classList.remove("is-hidden");
  el.revealHint.classList.add("is-hidden");
  updateAudioButton();
  maybeAutoplay();
}

/* ---------- Audio (hotlinked; consonants only) ---------- */
let currentAudio = null;

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  el.audioBtn.classList.remove("playing");
}

// The "solution" is shown in normal mode always, or after reveal in flashcard mode.
function solutionShown() {
  return !state.flashcard || state.revealed;
}

// Show the audio row only when the current glyph has a recording and the
// solution is visible.
function updateAudioButton() {
  const hasAudio = state.current && AUDIO[state.current.tb];
  el.audioRow.classList.toggle("is-hidden", !(hasAudio && solutionShown()));
}

// Auto-play when enabled and the current glyph has a recording that is showing.
// Note: browsers block playback until the first user gesture, so the initial
// page-load call may be silently rejected — playback works from then on.
function maybeAutoplay() {
  if (state.autoplay && state.current && AUDIO[state.current.tb] && solutionShown()) {
    playAudio();
  }
}

function playAudio() {
  const url = state.current && AUDIO[state.current.tb];
  if (!url) return;
  stopAudio();
  const audio = new Audio(url);
  currentAudio = audio;
  el.audioBtn.classList.add("playing");
  const done = () => { if (currentAudio === audio) stopAudio(); };
  audio.addEventListener("ended", done);
  audio.addEventListener("error", done);
  audio.play().catch(done);
}

/* ---------- Events ---------- */
el.nextBtn.addEventListener("click", nextLetter);

// Wire every boolean option checkbox from its data-toggle name.
$$("[data-toggle]").forEach(cb => {
  const key = cb.dataset.toggle;
  cb.checked = state[key];
  cb.addEventListener("change", () => {
    state[key] = cb.checked;
    savePersisted();
    // Autoplay only changes future playback; the rest affect what is shown.
    if (key !== "autoplay") render();
  });
});

el.audioBtn.addEventListener("click", playAudio);

el.fontSelect.value = state.font;
el.fontSelect.addEventListener("change", () => {
  state.font = FONTS[el.fontSelect.value] ? el.fontSelect.value : DEFAULT_FONT;
  applyFont();
  savePersisted();
});

el.card.addEventListener("click", () => {
  if (state.flashcard && !state.revealed) reveal();
  else nextLetter();
});
el.revealHint.addEventListener("click", reveal);

$$("button", el.langSwitch).forEach(btn => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    savePersisted();
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

/* ---------- Init ---------- */
buildSetList();
applyLanguage();
applyFont();
nextLetter();
})();

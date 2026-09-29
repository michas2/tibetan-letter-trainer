# Tibetan Letter Trainer · བོད་ཡིག

A small, build-free web app for learning the Tibetan script — one glyph at a time. Available in **German** (default) and **English**.

**Live demo:** https://michas2.github.io/tibetan-letter-trainer/

![Tibetan Letter Trainer](https://img.shields.io/badge/type-static%20site-blue) ![No build step](https://img.shields.io/badge/build-none-brightgreen)

## Features

- **Random glyph display** — shows one large, clear Tibetan letter at a time.
- **Selectable letter sets** — pick any combination to drill:
  - Root consonants (all 30)
  - Vowel signs (on ཨ)
  - Vowels applied to various bases (see the mark shape on ཀ མ ར ས)
  - Superscripts / head letters (རྐ སྐ ལྷ …)
  - Subscripts / foot letters (ཀྱ ཀྲ ཀླ ཀྭ …)
  - Prefixes (sngon-jug) & Suffixes (rjes-jug)
  - Numerals 0–9
  - Punctuation & marks (tsheg, shad …)
- **Pronunciation** — both **Wylie** transliteration and **THL** simplified phonetics.
- **Bilingual UI** — switch between **German** (default) and **English** in the header; the choice is remembered.
- **Selectable font** — choose between four Tibetan typefaces: Noto Serif Tibetan and Uchen (via Google Fonts), plus Amdo Classic and DDC Rinzin (self-referenced from the [OpenPecha Tibetan fonts](https://github.com/OpenPecha/tibetan-fonts) collection via jsDelivr).
- **Composition descriptions** — how each letter is built (row/column, articulation, how a stack or vowel mark is formed, tone effects).
- **Flashcard mode** — optionally hide the info and reveal on demand.
- **Per-field toggles** — independently show/hide Wylie, THL, or the composition text.
- **Reliable rendering** — bundles the [Noto Serif Tibetan](https://fonts.google.com/noto/specimen/Noto+Serif+Tibetan) webfont so glyphs display consistently across devices.

## Usage

Just open the site, or clone and open `index.html` in any modern browser — there is no build step and no dependencies.

- **Click the card**, or press <kbd>Space</kbd> / <kbd>→</kbd> — next letter.
- In **flashcard mode**, the first press reveals the info; the next advances.
- Press <kbd>R</kbd> — reveal the hidden info.

## Tech

- Plain HTML + CSS + vanilla JavaScript. No frameworks, no build tooling, no dependencies.
- Deployed via GitHub Pages.

### Project structure

| File | Purpose |
|------|---------|
| `index.html` | Markup and layout only. |
| `styles.css` | All styling. |
| `i18n.js` | UI strings per language + `DEFAULT_LANG`. |
| `data.js` | The letter dataset (glyphs, Wylie, THL, bilingual descriptions) and set definitions. |
| `app.js` | Application logic (state, rendering, events, language switching). |

To add a language, add a key to `UI` in `i18n.js` and provide matching `label`/`desc`
translations in `data.js`.

UI text is wired declaratively: elements carry `data-i18n` (textContent),
`data-i18n-html` (innerHTML), or `data-i18n-attr="attr:key,…"` (attributes), and
`applyLanguage()` fills them from `UI`. Option checkboxes are wired by a `data-toggle`
name that matches a `state` key, and info cells by a `data-field` name.

User choices (language, selected sets, flashcard/autoplay, and the field toggles) are
persisted to `localStorage` under the key `tlt_state` and restored on reload.

## Notes & caveats

- The **THL phonetic** column is simplified: it approximates the isolated-syllable
  pronunciation. Real spoken Tibetan depends on tone and the syllable's position in a
  word. Some entries show a dual form like `kha/ga` to hint at the tone/voicing contrast.
- **Prefixes/suffixes** are shown as standalone letters with their grammatical role
  described, since in isolation they are just consonants — their effect appears only in
  full syllables.
- Descriptions are learning aids, not an exhaustive grammar reference.

## References

The two romanization systems used here are documented in these standard references
(also linked from the app's footer):

- **Wylie transliteration** — Turrell V. Wylie, *"A Standard System of Tibetan
  Transcription"* (Harvard Journal of Asiatic Studies, 1959), later extended as THL
  Extended Wylie (EWTS). Overview: [Wylie transliteration](https://en.wikipedia.org/wiki/Wylie_transliteration)
  · [Umschrift nach Wylie](https://de.wikipedia.org/wiki/Umschrift_nach_Wylie).
- **THL Simplified Phonetics** — David Germano & Nicolas Tournadre, *"THL Simplified
  Phonetic Transcription of Standard Tibetan"* (2003). Overview:
  [THL Simplified Phonetic Transcription](https://en.wikipedia.org/wiki/THL_Simplified_Phonetic_Transcription)
  · [THDL-Transkription](https://de.wikipedia.org/wiki/THDL-Transkription).

## License

MIT — see below.

```
MIT License

Copyright (c) 2026 Michael Schnupp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

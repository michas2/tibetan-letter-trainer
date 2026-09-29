// Tibetan letter dataset. Each item: { tb, wylie, thl, desc: { de, en } }.
// Sets are grouped by learning category in the SETS object at the bottom.

const consonants = [
  { tb: "ཀ", wylie: "ka",  thl: "ka",  desc: { en: "1st consonant. Unaspirated velar stop /k/. Row 1, column 1.", de: "1. Konsonant. Nicht-aspirierter velarer Verschlusslaut /k/. Zeile 1, Spalte 1." } },
  { tb: "ཁ", wylie: "kha", thl: "kha", desc: { en: "2nd consonant. Aspirated velar /kʰ/. Row 1, column 2.", de: "2. Konsonant. Aspirierter velarer Laut /kʰ/. Zeile 1, Spalte 2." } },
  { tb: "ག", wylie: "ga",  thl: "kha/ga", desc: { en: "3rd consonant. Voiced velar /g/; low tone in speech. Row 1, column 3.", de: "3. Konsonant. Stimmhafter velarer Laut /g/; tiefer Ton im Sprechen. Zeile 1, Spalte 3." } },
  { tb: "ང", wylie: "nga", thl: "nga", desc: { en: "4th consonant. Velar nasal /ŋ/. Row 1, column 4.", de: "4. Konsonant. Velarer Nasal /ŋ/. Zeile 1, Spalte 4." } },
  { tb: "ཅ", wylie: "ca",  thl: "cha", desc: { en: "5th consonant. Unaspirated palatal /tɕ/. Row 2, column 1.", de: "5. Konsonant. Nicht-aspirierter palataler Laut /tɕ/. Zeile 2, Spalte 1." } },
  { tb: "ཆ", wylie: "cha", thl: "chha", desc: { en: "6th consonant. Aspirated palatal /tɕʰ/. Row 2, column 2.", de: "6. Konsonant. Aspirierter palataler Laut /tɕʰ/. Zeile 2, Spalte 2." } },
  { tb: "ཇ", wylie: "ja",  thl: "chha/ja", desc: { en: "7th consonant. Voiced palatal /dʑ/; low tone. Row 2, column 3.", de: "7. Konsonant. Stimmhafter palataler Laut /dʑ/; tiefer Ton. Zeile 2, Spalte 3." } },
  { tb: "ཉ", wylie: "nya", thl: "nya", desc: { en: "8th consonant. Palatal nasal /ɲ/. Row 2, column 4.", de: "8. Konsonant. Palataler Nasal /ɲ/. Zeile 2, Spalte 4." } },
  { tb: "ཏ", wylie: "ta",  thl: "ta",  desc: { en: "9th consonant. Unaspirated dental stop /t/. Row 3, column 1.", de: "9. Konsonant. Nicht-aspirierter dentaler Verschlusslaut /t/. Zeile 3, Spalte 1." } },
  { tb: "ཐ", wylie: "tha", thl: "tha", desc: { en: "10th consonant. Aspirated dental /tʰ/. Row 3, column 2.", de: "10. Konsonant. Aspirierter dentaler Laut /tʰ/. Zeile 3, Spalte 2." } },
  { tb: "ད", wylie: "da",  thl: "tha/da", desc: { en: "11th consonant. Voiced dental /d/; low tone. Row 3, column 3.", de: "11. Konsonant. Stimmhafter dentaler Laut /d/; tiefer Ton. Zeile 3, Spalte 3." } },
  { tb: "ན", wylie: "na",  thl: "na",  desc: { en: "12th consonant. Dental nasal /n/. Row 3, column 4.", de: "12. Konsonant. Dentaler Nasal /n/. Zeile 3, Spalte 4." } },
  { tb: "པ", wylie: "pa",  thl: "pa",  desc: { en: "13th consonant. Unaspirated bilabial stop /p/. Row 4, column 1.", de: "13. Konsonant. Nicht-aspirierter bilabialer Verschlusslaut /p/. Zeile 4, Spalte 1." } },
  { tb: "ཕ", wylie: "pha", thl: "pha", desc: { en: "14th consonant. Aspirated bilabial /pʰ/. Row 4, column 2.", de: "14. Konsonant. Aspirierter bilabialer Laut /pʰ/. Zeile 4, Spalte 2." } },
  { tb: "བ", wylie: "ba",  thl: "pha/ba", desc: { en: "15th consonant. Voiced bilabial /b/; low tone. Row 4, column 3.", de: "15. Konsonant. Stimmhafter bilabialer Laut /b/; tiefer Ton. Zeile 4, Spalte 3." } },
  { tb: "མ", wylie: "ma",  thl: "ma",  desc: { en: "16th consonant. Bilabial nasal /m/. Row 4, column 4.", de: "16. Konsonant. Bilabialer Nasal /m/. Zeile 4, Spalte 4." } },
  { tb: "ཙ", wylie: "tsa", thl: "tsa", desc: { en: "17th consonant. Unaspirated alveolar affricate /ts/. Row 5, column 1.", de: "17. Konsonant. Nicht-aspirierte alveolare Affrikate /ts/. Zeile 5, Spalte 1." } },
  { tb: "ཚ", wylie: "tsha", thl: "tsha", desc: { en: "18th consonant. Aspirated affricate /tsʰ/. Row 5, column 2.", de: "18. Konsonant. Aspirierte Affrikate /tsʰ/. Zeile 5, Spalte 2." } },
  { tb: "ཛ", wylie: "dza", thl: "tsha/dza", desc: { en: "19th consonant. Voiced affricate /dz/; low tone. Row 5, column 3.", de: "19. Konsonant. Stimmhafte Affrikate /dz/; tiefer Ton. Zeile 5, Spalte 3." } },
  { tb: "ཝ", wylie: "wa",  thl: "wa",  desc: { en: "20th consonant. Labial approximant /w/. Row 5, column 4.", de: "20. Konsonant. Labialer Approximant /w/. Zeile 5, Spalte 4." } },
  { tb: "ཞ", wylie: "zha", thl: "zha", desc: { en: "21st consonant. Voiced palatal fricative /ʑ/; low tone. Row 6, column 1.", de: "21. Konsonant. Stimmhafter palataler Reibelaut /ʑ/; tiefer Ton. Zeile 6, Spalte 1." } },
  { tb: "ཟ", wylie: "za",  thl: "za",  desc: { en: "22nd consonant. Voiced alveolar fricative /z/; low tone. Row 6, column 2.", de: "22. Konsonant. Stimmhafter alveolarer Reibelaut /z/; tiefer Ton. Zeile 6, Spalte 2." } },
  { tb: "འ", wylie: "'a",  thl: "a",   desc: { en: "23rd consonant ('a-chung). Weak voiced /ɦ/; also a prefix & vowel-lengthener. Row 6, column 3.", de: "23. Konsonant ('a-chung). Schwach stimmhaft /ɦ/; auch Präfix & Vokaldehner. Zeile 6, Spalte 3." } },
  { tb: "ཡ", wylie: "ya",  thl: "ya",  desc: { en: "24th consonant. Palatal approximant /j/. Row 6, column 4.", de: "24. Konsonant. Palataler Approximant /j/. Zeile 6, Spalte 4." } },
  { tb: "ར", wylie: "ra",  thl: "ra",  desc: { en: "25th consonant. Alveolar trill/approximant /r/. Row 7, column 1.", de: "25. Konsonant. Alveolarer Vibrant/Approximant /r/. Zeile 7, Spalte 1." } },
  { tb: "ལ", wylie: "la",  thl: "la",  desc: { en: "26th consonant. Lateral /l/. Row 7, column 2.", de: "26. Konsonant. Lateral /l/. Zeile 7, Spalte 2." } },
  { tb: "ཤ", wylie: "sha", thl: "sha", desc: { en: "27th consonant. Palatal fricative /ɕ/. Row 7, column 3.", de: "27. Konsonant. Palataler Reibelaut /ɕ/. Zeile 7, Spalte 3." } },
  { tb: "ས", wylie: "sa",  thl: "sa",  desc: { en: "28th consonant. Alveolar fricative /s/. Row 7, column 4.", de: "28. Konsonant. Alveolarer Reibelaut /s/. Zeile 7, Spalte 4." } },
  { tb: "ཧ", wylie: "ha",  thl: "ha",  desc: { en: "29th consonant. Glottal fricative /h/. Row 8, column 1.", de: "29. Konsonant. Glottaler Reibelaut /h/. Zeile 8, Spalte 1." } },
  { tb: "ཨ", wylie: "a",   thl: "a",   desc: { en: "30th consonant. Glottal stop / inherent-vowel carrier. Row 8, column 2.", de: "30. Konsonant. Glottisschlag / Träger des inhärenten Vokals. Zeile 8, Spalte 2." } }
];

const vowels = [
  { tb: "ཨ", wylie: "a", thl: "a", desc: { en: "Inherent vowel 'a'. No sign written — every consonant carries an 'a' by default.", de: "Inhärenter Vokal 'a'. Kein Zeichen — jeder Konsonant trägt standardmäßig ein 'a'." } },
  { tb: "ཨི", wylie: "i", thl: "i", desc: { en: "Vowel gigu (ི), written above the consonant. Changes 'a' → 'i'.", de: "Vokal Gigu (ི), über dem Konsonanten geschrieben. Ändert 'a' → 'i'." } },
  { tb: "ཨུ", wylie: "u", thl: "u", desc: { en: "Vowel zhabkyu (ུ), written below the consonant. Changes 'a' → 'u'.", de: "Vokal Zhabkyu (ུ), unter dem Konsonanten geschrieben. Ändert 'a' → 'u'." } },
  { tb: "ཨེ", wylie: "e", thl: "e", desc: { en: "Vowel drengbu (ེ), written above the consonant. Changes 'a' → 'e'.", de: "Vokal Drengbu (ེ), über dem Konsonanten geschrieben. Ändert 'a' → 'e'." } },
  { tb: "ཨོ", wylie: "o", thl: "o", desc: { en: "Vowel naro (ོ), written above the consonant. Changes 'a' → 'o'.", de: "Vokal Naro (ོ), über dem Konsonanten geschrieben. Ändert 'a' → 'o'." } }
];

const vowelsOnBases = [];
(function () {
  const bases = [
    { tb: "ཀ", w: "k" }, { tb: "མ", w: "m" }, { tb: "ར", w: "r" }, { tb: "ས", w: "s" }
  ];
  const marks = [
    { s: "ི", w: "i", en: "gigu (above)", de: "Gigu (oben)" },
    { s: "ུ", w: "u", en: "zhabkyu (below)", de: "Zhabkyu (unten)" },
    { s: "ེ", w: "e", en: "drengbu (above)", de: "Drengbu (oben)" },
    { s: "ོ", w: "o", en: "naro (above)", de: "Naro (oben)" }
  ];
  bases.forEach(b => marks.forEach(m => {
    vowelsOnBases.push({
      tb: b.tb + m.s,
      wylie: b.w + m.w,
      thl: b.w + m.w,
      desc: {
        en: `Base ${b.tb} (${b.w}a) + vowel ${m.en} → '${b.w + m.w}'.`,
        de: `Basis ${b.tb} (${b.w}a) + Vokal ${m.de} → '${b.w + m.w}'.`
      }
    });
  }));
})();

const superscripts = [
  { tb: "རྐ", wylie: "rka", thl: "ka", desc: { en: "Superscript ར (ra-go) over ཀ. The ར sits on top; pronounced simply 'ka' (superscript is silent, affects tone).", de: "Kopfbuchstabe ར (ra-go) über ཀ. Das ར sitzt oben; einfach als 'ka' gesprochen (Kopfbuchstabe ist stumm, beeinflusst den Ton)." } },
  { tb: "རྒ", wylie: "rga", thl: "ga", desc: { en: "Superscript ར (ra-go) over ག. Written ར above ག → 'ga' (high tone).", de: "Kopfbuchstabe ར (ra-go) über ག. ར über ག geschrieben → 'ga' (hoher Ton)." } },
  { tb: "རྔ", wylie: "rnga", thl: "nga", desc: { en: "Superscript ར (ra-go) over ང → 'nga' (high tone).", de: "Kopfbuchstabe ར (ra-go) über ང → 'nga' (hoher Ton)." } },
  { tb: "རྗ", wylie: "rja", thl: "ja", desc: { en: "Superscript ར over ཇ → 'ja'.", de: "Kopfbuchstabe ར über ཇ → 'ja'." } },
  { tb: "རྙ", wylie: "rnya", thl: "nya", desc: { en: "Superscript ར over ཉ → 'nya'.", de: "Kopfbuchstabe ར über ཉ → 'nya'." } },
  { tb: "རྟ", wylie: "rta", thl: "ta", desc: { en: "Superscript ར over ཏ → 'ta' (high tone).", de: "Kopfbuchstabe ར über ཏ → 'ta' (hoher Ton)." } },
  { tb: "རྡ", wylie: "rda", thl: "da", desc: { en: "Superscript ར over ད → 'da'.", de: "Kopfbuchstabe ར über ད → 'da'." } },
  { tb: "རྣ", wylie: "rna", thl: "na", desc: { en: "Superscript ར over ན → 'na' (high tone).", de: "Kopfbuchstabe ར über ན → 'na' (hoher Ton)." } },
  { tb: "རྦ", wylie: "rba", thl: "ba", desc: { en: "Superscript ར over བ → 'ba'.", de: "Kopfbuchstabe ར über བ → 'ba'." } },
  { tb: "རྨ", wylie: "rma", thl: "ma", desc: { en: "Superscript ར over མ → 'ma' (high tone).", de: "Kopfbuchstabe ར über མ → 'ma' (hoher Ton)." } },
  { tb: "ལྐ", wylie: "lka", thl: "ka", desc: { en: "Superscript ལ (la-go) over ཀ → 'ka'.", de: "Kopfbuchstabe ལ (la-go) über ཀ → 'ka'." } },
  { tb: "ལྒ", wylie: "lga", thl: "ga", desc: { en: "Superscript ལ (la-go) over ག → 'ga'.", de: "Kopfbuchstabe ལ (la-go) über ག → 'ga'." } },
  { tb: "ལྟ", wylie: "lta", thl: "ta", desc: { en: "Superscript ལ (la-go) over ཏ → 'ta'.", de: "Kopfbuchstabe ལ (la-go) über ཏ → 'ta'." } },
  { tb: "ལྷ", wylie: "lha", thl: "lha", desc: { en: "Superscript ལ over ཧ → 'lha' (voiceless l).", de: "Kopfbuchstabe ལ über ཧ → 'lha' (stimmloses l)." } },
  { tb: "སྐ", wylie: "ska", thl: "ka", desc: { en: "Superscript ས (sa-go) over ཀ → 'ka' (high tone).", de: "Kopfbuchstabe ས (sa-go) über ཀ → 'ka' (hoher Ton)." } },
  { tb: "སྒ", wylie: "sga", thl: "ga", desc: { en: "Superscript ས (sa-go) over ག → 'ga'.", de: "Kopfbuchstabe ས (sa-go) über ག → 'ga'." } },
  { tb: "སྔ", wylie: "snga", thl: "nga", desc: { en: "Superscript ས over ང → 'nga' (high tone).", de: "Kopfbuchstabe ས über ང → 'nga' (hoher Ton)." } },
  { tb: "སྤ", wylie: "spa", thl: "pa", desc: { en: "Superscript ས over པ → 'pa'.", de: "Kopfbuchstabe ས über པ → 'pa'." } },
  { tb: "སྨ", wylie: "sma", thl: "ma", desc: { en: "Superscript ས over མ → 'ma' (high tone).", de: "Kopfbuchstabe ས über མ → 'ma' (hoher Ton)." } }
];

const subscripts = [
  { tb: "ཀྱ", wylie: "kya", thl: "kya", desc: { en: "Subscript ྱ (ya-tak) under ཀ. The ya is written below → 'kya'.", de: "Fußbuchstabe ྱ (ya-tak) unter ཀ. Das ya wird darunter geschrieben → 'kya'." } },
  { tb: "ཁྱ", wylie: "khya", thl: "khya", desc: { en: "Subscript ྱ (ya-tak) under ཁ → 'khya'.", de: "Fußbuchstabe ྱ (ya-tak) unter ཁ → 'khya'." } },
  { tb: "གྱ", wylie: "gya", thl: "khya/gya", desc: { en: "Subscript ྱ (ya-tak) under ག → 'gya'.", de: "Fußbuchstabe ྱ (ya-tak) unter ག → 'gya'." } },
  { tb: "པྱ", wylie: "pya", thl: "cha", desc: { en: "Subscript ྱ under པ. p+ya merges → sounds like 'cha'.", de: "Fußbuchstabe ྱ unter པ. p+ya verschmilzt → klingt wie 'cha'." } },
  { tb: "བྱ", wylie: "bya", thl: "ja", desc: { en: "Subscript ྱ under བ. b+ya → sounds like 'ja'.", de: "Fußbuchstabe ྱ unter བ. b+ya → klingt wie 'ja'." } },
  { tb: "མྱ", wylie: "mya", thl: "nya", desc: { en: "Subscript ྱ under མ. m+ya → sounds like 'nya'.", de: "Fußbuchstabe ྱ unter མ. m+ya → klingt wie 'nya'." } },
  { tb: "ཀྲ", wylie: "kra", thl: "tra", desc: { en: "Subscript ྲ (ra-tak) under ཀ → retroflex 'tra'.", de: "Fußbuchstabe ྲ (ra-tak) unter ཀ → retroflexes 'tra'." } },
  { tb: "ཁྲ", wylie: "khra", thl: "thra", desc: { en: "Subscript ྲ (ra-tak) under ཁ → 'thra'.", de: "Fußbuchstabe ྲ (ra-tak) unter ཁ → 'thra'." } },
  { tb: "གྲ", wylie: "gra", thl: "thra/dra", desc: { en: "Subscript ྲ (ra-tak) under ག → 'dra'.", de: "Fußbuchstabe ྲ (ra-tak) unter ག → 'dra'." } },
  { tb: "ཏྲ", wylie: "tra", thl: "tra", desc: { en: "Subscript ྲ under ཏ → retroflex 'tra'.", de: "Fußbuchstabe ྲ unter ཏ → retroflexes 'tra'." } },
  { tb: "དྲ", wylie: "dra", thl: "dra", desc: { en: "Subscript ྲ under ད → 'dra'.", de: "Fußbuchstabe ྲ unter ད → 'dra'." } },
  { tb: "སྲ", wylie: "sra", thl: "sa", desc: { en: "Subscript ྲ under ས → 'sa'.", de: "Fußbuchstabe ྲ unter ས → 'sa'." } },
  { tb: "ཀླ", wylie: "kla", thl: "la", desc: { en: "Subscript ླ (la-tak) under ཀ → 'la'.", de: "Fußbuchstabe ླ (la-tak) unter ཀ → 'la'." } },
  { tb: "གླ", wylie: "gla", thl: "la", desc: { en: "Subscript ླ (la-tak) under ག → 'la'.", de: "Fußbuchstabe ླ (la-tak) unter ག → 'la'." } },
  { tb: "ཟླ", wylie: "zla", thl: "da", desc: { en: "Subscript ླ under ཟ → 'da' (irregular).", de: "Fußbuchstabe ླ unter ཟ → 'da' (unregelmäßig)." } },
  { tb: "རླ", wylie: "rla", thl: "la", desc: { en: "Subscript ླ under ར → 'la'.", de: "Fußbuchstabe ླ unter ར → 'la'." } },
  { tb: "ཀྭ", wylie: "kwa", thl: "ka", desc: { en: "Subscript ྭ (wa-zur) under ཀ. The wa is largely silent → 'ka'.", de: "Fußbuchstabe ྭ (wa-zur) unter ཀ. Das wa ist weitgehend stumm → 'ka'." } },
  { tb: "ཁྭ", wylie: "khwa", thl: "kha", desc: { en: "Subscript ྭ (wa-zur) under ཁ → 'kha'.", de: "Fußbuchstabe ྭ (wa-zur) unter ཁ → 'kha'." } },
  { tb: "གྭ", wylie: "gwa", thl: "ga", desc: { en: "Subscript ྭ (wa-zur) under ག → 'ga'.", de: "Fußbuchstabe ྭ (wa-zur) unter ག → 'ga'." } },
  { tb: "ཙྭ", wylie: "tswa", thl: "tsa", desc: { en: "Subscript ྭ (wa-zur) under ཙ → 'tsa'.", de: "Fußbuchstabe ྭ (wa-zur) unter ཙ → 'tsa'." } }
];

const prefixes = [
  { tb: "ག", wylie: "ga", thl: "(silent)", desc: { en: "Prefix ག (ga-juké). Written before a root letter; usually silent, e.g. གདན 'den'.", de: "Präfix ག (ga-juké). Vor dem Wurzelbuchstaben geschrieben; meist stumm, z. B. གདན 'den'." } },
  { tb: "ད", wylie: "da", thl: "(silent)", desc: { en: "Prefix ད (da-juké). Silent prefix, e.g. དཀར 'kar' (white).", de: "Präfix ད (da-juké). Stummes Präfix, z. B. དཀར 'kar' (weiß)." } },
  { tb: "བ", wylie: "ba", thl: "(silent)", desc: { en: "Prefix བ (ba-juké). Silent prefix, e.g. བཀྲ 'tra'.", de: "Präfix བ (ba-juké). Stummes Präfix, z. B. བཀྲ 'tra'." } },
  { tb: "མ", wylie: "ma", thl: "(silent)", desc: { en: "Prefix མ (ma-juké). Silent prefix, e.g. མཁའ 'kha' (sky).", de: "Präfix མ (ma-juké). Stummes Präfix, z. B. མཁའ 'kha' (Himmel)." } },
  { tb: "འ", wylie: "'a", thl: "(silent)", desc: { en: "Prefix འ (a-chung). Silent prefix that softens/voices the root, e.g. འགྲོ 'dro'.", de: "Präfix འ (a-chung). Stummes Präfix, das die Wurzel weicher/stimmhaft macht, z. B. འགྲོ 'dro'." } }
];

const suffixes = [
  { tb: "ག", wylie: "ga", thl: "-k", desc: { en: "Suffix ག. Closes syllable with a /k/ stop, e.g. ལག 'lak' (hand).", de: "Suffix ག. Schließt die Silbe mit einem /k/-Verschluss, z. B. ལག 'lak' (Hand)." } },
  { tb: "ང", wylie: "nga", thl: "-ng", desc: { en: "Suffix ང. Adds nasal /ŋ/, e.g. རང 'rang' (self).", de: "Suffix ང. Fügt den Nasal /ŋ/ hinzu, z. B. རང 'rang' (selbst)." } },
  { tb: "ད", wylie: "da", thl: "-(vowel change)", desc: { en: "Suffix ད. Historically /d/; in modern speech usually silent but shortens vowel, e.g. ཡོད 'yö'.", de: "Suffix ད. Historisch /d/; im modernen Sprechen meist stumm, verkürzt aber den Vokal, z. B. ཡོད 'yö'." } },
  { tb: "ན", wylie: "na", thl: "-n", desc: { en: "Suffix ན. Adds /n/ and nasalizes vowel, e.g. མིན 'min'.", de: "Suffix ན. Fügt /n/ hinzu und nasaliert den Vokal, z. B. མིན 'min'." } },
  { tb: "བ", wylie: "ba", thl: "-p", desc: { en: "Suffix བ. Closes with /p/, e.g. ཐབ 'thap'.", de: "Suffix བ. Schließt mit /p/, z. B. ཐབ 'thap'." } },
  { tb: "མ", wylie: "ma", thl: "-m", desc: { en: "Suffix མ. Adds /m/, e.g. ལམ 'lam' (road).", de: "Suffix མ. Fügt /m/ hinzu, z. B. ལམ 'lam' (Weg)." } },
  { tb: "འ", wylie: "'a", thl: "-(long vowel)", desc: { en: "Suffix འ. Silent; lengthens the vowel, e.g. དགའ 'ga'.", de: "Suffix འ. Stumm; verlängert den Vokal, z. B. དགའ 'ga'." } },
  { tb: "ར", wylie: "ra", thl: "-r", desc: { en: "Suffix ར. Adds /r/; often the 'to/at' particle, e.g. ཁར 'khar'.", de: "Suffix ར. Fügt /r/ hinzu; oft die Partikel 'zu/an', z. B. ཁར 'khar'." } },
  { tb: "ལ", wylie: "la", thl: "-l", desc: { en: "Suffix ལ. Adds /l/; also the 'to' particle, e.g. ཡུལ 'yül'.", de: "Suffix ལ. Fügt /l/ hinzu; auch die Partikel 'zu', z. B. ཡུལ 'yül'." } },
  { tb: "ས", wylie: "sa", thl: "-(vowel change)", desc: { en: "Suffix ས. Historically /s/; modern speech usually silent, marks agentive/genitive, e.g. ལས 'lé'.", de: "Suffix ས. Historisch /s/; im modernen Sprechen meist stumm, markiert Agens/Genitiv, z. B. ལས 'lé'." } }
];

const numerals = [
  { tb: "༠", wylie: "0", thl: "lek kor", desc: { en: "Tibetan digit 0 (klad kor).", de: "Tibetische Ziffer 0 (klad kor)." } },
  { tb: "༡", wylie: "1", thl: "chik", desc: { en: "Tibetan digit 1 (gcig).", de: "Tibetische Ziffer 1 (gcig)." } },
  { tb: "༢", wylie: "2", thl: "nyi", desc: { en: "Tibetan digit 2 (gnyis).", de: "Tibetische Ziffer 2 (gnyis)." } },
  { tb: "༣", wylie: "3", thl: "sum", desc: { en: "Tibetan digit 3 (gsum).", de: "Tibetische Ziffer 3 (gsum)." } },
  { tb: "༤", wylie: "4", thl: "zhi", desc: { en: "Tibetan digit 4 (bzhi).", de: "Tibetische Ziffer 4 (bzhi)." } },
  { tb: "༥", wylie: "5", thl: "nga", desc: { en: "Tibetan digit 5 (lnga).", de: "Tibetische Ziffer 5 (lnga)." } },
  { tb: "༦", wylie: "6", thl: "druk", desc: { en: "Tibetan digit 6 (drug).", de: "Tibetische Ziffer 6 (drug)." } },
  { tb: "༧", wylie: "7", thl: "dün", desc: { en: "Tibetan digit 7 (bdun).", de: "Tibetische Ziffer 7 (bdun)." } },
  { tb: "༨", wylie: "8", thl: "gyé", desc: { en: "Tibetan digit 8 (brgyad).", de: "Tibetische Ziffer 8 (brgyad)." } },
  { tb: "༩", wylie: "9", thl: "gu", desc: { en: "Tibetan digit 9 (dgu).", de: "Tibetische Ziffer 9 (dgu)." } }
];

const punctuation = [
  { tb: "་", wylie: "tsheg", thl: "(dot)", desc: { en: "Tsheg — the syllable separator dot placed after each syllable.", de: "Tsheg — der Trennpunkt, der nach jeder Silbe gesetzt wird." } },
  { tb: "།", wylie: "shad", thl: "(bar)", desc: { en: "Shad — vertical stroke marking the end of a phrase/clause.", de: "Shad — senkrechter Strich, der das Ende einer Phrase/eines Satzes markiert." } },
  { tb: "༎", wylie: "nyis shad", thl: "(double bar)", desc: { en: "Double shad — marks the end of a section or verse.", de: "Doppel-Shad — markiert das Ende eines Abschnitts oder Verses." } },
  { tb: "༄", wylie: "yig mgo", thl: "(head mark)", desc: { en: "Yig-go / head mark — placed at the start of a text or page.", de: "Yig-go / Kopfzeichen — steht am Anfang eines Textes oder einer Seite." } },
  { tb: "༅", wylie: "yig mgo (2)", thl: "(head mark)", desc: { en: "Ornamental head mark variant beginning a document.", de: "Verzierte Kopfzeichen-Variante am Anfang eines Dokuments." } }
];

const SETS = {
  consonants:   { label: { en: "Root consonants (30)", de: "Grundkonsonanten (30)" }, data: consonants },
  vowels:       { label: { en: "Vowel signs (on ཨ)", de: "Vokalzeichen (auf ཨ)" }, data: vowels },
  vowelsBases:  { label: { en: "Vowels on various bases", de: "Vokale auf verschiedenen Basen" }, data: vowelsOnBases },
  superscripts: { label: { en: "Superscripts (head letters)", de: "Kopfbuchstaben (Superskript)" }, data: superscripts },
  subscripts:   { label: { en: "Subscripts (foot letters)", de: "Fußbuchstaben (Subskript)" }, data: subscripts },
  prefixes:     { label: { en: "Prefixes (sngon-jug)", de: "Präfixe (sngon-jug)" }, data: prefixes },
  suffixes:     { label: { en: "Suffixes (rjes-jug)", de: "Suffixe (rjes-jug)" }, data: suffixes },
  numerals:     { label: { en: "Numerals 0–9", de: "Ziffern 0–9" }, data: numerals },
  punctuation:  { label: { en: "Punctuation & marks", de: "Satz- & Sonderzeichen" }, data: punctuation }
};

// Hotlinked pronunciation audio (root consonants only) from tibetan101.com.
// POC only — to be replaced by self-hosted recordings later. Attribution in footer.
// Keyed by the base Tibetan consonant glyph.
const AUDIO = {
  "ཀ": "https://tibetan101.com/wp-content/uploads/2021/04/ཀ་.wav",
  "ཁ": "https://tibetan101.com/wp-content/uploads/2021/04/ཁ་.wav",
  "ག": "https://tibetan101.com/wp-content/uploads/2021/04/ག་.wav",
  "ང": "https://tibetan101.com/wp-content/uploads/2021/04/ང་།.wav",
  "ཅ": "https://tibetan101.com/wp-content/uploads/2021/04/ཅ་.wav",
  "ཆ": "https://tibetan101.com/wp-content/uploads/2021/04/ཆ་.wav",
  "ཇ": "https://tibetan101.com/wp-content/uploads/2021/04/ཇ་.wav",
  "ཉ": "https://tibetan101.com/wp-content/uploads/2021/04/ཉ།.wav",
  "ཏ": "https://tibetan101.com/wp-content/uploads/2021/04/ཏ་.wav",
  "ཐ": "https://tibetan101.com/wp-content/uploads/2021/04/ཐ་.wav",
  "ད": "https://tibetan101.com/wp-content/uploads/2021/04/ད་.wav",
  "ན": "https://tibetan101.com/wp-content/uploads/2021/04/ན།.wav",
  "པ": "https://tibetan101.com/wp-content/uploads/2021/04/པ་.wav",
  "ཕ": "https://tibetan101.com/wp-content/uploads/2021/04/ཕ་.wav",
  "བ": "https://tibetan101.com/wp-content/uploads/2021/04/བ་.wav",
  "མ": "https://tibetan101.com/wp-content/uploads/2021/04/མ།.wav",
  "ཙ": "https://tibetan101.com/wp-content/uploads/2021/04/ཙ་.wav",
  "ཚ": "https://tibetan101.com/wp-content/uploads/2021/04/ཚ་.wav",
  "ཛ": "https://tibetan101.com/wp-content/uploads/2021/04/ཛ་.wav",
  "ཝ": "https://tibetan101.com/wp-content/uploads/2021/04/ཝ།.wav",
  "ཞ": "https://tibetan101.com/wp-content/uploads/2021/04/ཞ་.wav",
  "ཟ": "https://tibetan101.com/wp-content/uploads/2021/04/ཟ་.wav",
  "འ": "https://tibetan101.com/wp-content/uploads/2021/04/འ་.wav",
  "ཡ": "https://tibetan101.com/wp-content/uploads/2021/04/ཡ།.wav",
  "ར": "https://tibetan101.com/wp-content/uploads/2021/04/ར་.wav",
  "ལ": "https://tibetan101.com/wp-content/uploads/2021/04/ལ་.wav",
  "ཤ": "https://tibetan101.com/wp-content/uploads/2021/04/ཤ་.wav",
  "ས": "https://tibetan101.com/wp-content/uploads/2021/04/ས།.wav",
  "ཧ": "https://tibetan101.com/wp-content/uploads/2021/04/ཧ་.wav",
  "ཨ": "https://tibetan101.com/wp-content/uploads/2021/04/ཨ།.wav"
};

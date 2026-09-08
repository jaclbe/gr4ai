# German translation — fidelity pass against the English source

Prof. Dr. Annegret Vogt, German linguistics / Kinder- und Jugendliteratur.
Second review, this time with the English aligned line by line and English declared
the source of truth. (The reviewer could not write to disk in that session; the
verdict and findings are reproduced here verbatim, with the publisher's
verification notes added in brackets.)

## Verdict

> Yes — publishable, but not as it stands: this is a good translation that needs one
> blocking fix and about twenty small ones, not a re-translation. The German is
> genuinely rewritten rather than transposed in most places (`Der Weg der KI hatte
> viele Kurven!`, `Um die Ecke denken`, `Turbo für die Wissenschaft`, `Anish hier – die
> Frage übernehme ich!`), the **du** never slips, the eight children sound like German
> children, and the core terminology (KI, Daten, Muster, maschinelles Lernen, Deep
> Learning, Werkzeug) is used identically throughout.

## Findings

Applied ✅ / rejected ❌ / left for the publisher ⏸

| # | Finding | Status |
|---|---|---|
| 1 | Q10 "lost its third option, only two choices" | ❌ **Not real.** All three options are present in `guide-de.html`, in the handout the reviewer read, and on the live site. Verified three ways. |
| 2 | `Echte Menschen sagen Erfundenes` blames the person rather than the fake | ✅ → `Echte Menschen sagen Dinge, die sie nie gesagt haben` |
| 3 | `KI verrechnet sich…` — modal dropped, hedge became assertion | ✅ → `KI kann sich … verrechnen` |
| 4 | `KI schreibt Wörter … falsch` — same modal loss | ✅ → `KI kann Wörter … falsch schreiben` |
| 5 | `Übersieht manche Gruppen` — asserts where neighbours hedge | ✅ → `Kann manche Gruppen übersehen` |
| 6 | `Sich zu sehr verlassen` is ungrammatical — *sich verlassen* needs *auf* | ✅ → `Sich zu sehr auf KI verlassen`. Introduced by an earlier fix of mine that dropped the object. |
| 7 | `kann sich nichts aus dir machen` — mangled idiom, added clause | ✅ → `Sie hat keine Gefühle, und du bist ihr nicht wirklich wichtig – auch wenn es manchmal anders klingt.` |
| 8 | `einstellen gelernt hat` — stacked infinitives | ⏸ copy pass |
| 9 | `Was macht eine verantwortungsvolle KI-Nutzerin oder einen…` — 2.8× expansion | ⏸ tied to the gendering decision below |
| 10 | `Sag uns einfach Bescheid` falls back to du inside the Sie notice | ✅ → `Sagen Sie uns einfach Bescheid` |
| 11 | `Die letzte Herausforderung` out of reach at 7 | ⏸ copy pass |
| 12 | `Die Lehrkraft` is Verwaltungsdeutsch | ⏸ copy pass |
| 13 | Missing mandatory comma before the relative clause closes | ✅ |
| 14–27 | Register and idiom items (`Keine geheimen Rätsel!`, `die von Menschen gebaute Fähigkeit`, `Voreingenommenheit`, `Erschaffe sie`, `Surfverhalten`, …) | ⏸ copy pass |
| 28 | `Wackelkontakt` vivid but above the band | ⏸ |
| 29 | Two "allerletzte Frage" twenty screens apart | ✅ second one now `und noch eine Frage!` |
| 30 | `zwischen „gut" und „böse"` — *böse* is the fairy-tale word for evil | ✅ → `zwischen „richtig" und „falsch"` |
| — | `KI- Lebensmitteltechniker:in` has a stray space | ❌ Not real — an artefact of flattening `KI-<a>…</a>` for the handout. Renders correctly. |
| — | Glossary strings look misaligned | ❌ Not an error — each language sorts its glossary by its own headword. All 11 entries present and correct in all three. |
| — | Headword `Lebensmitteltechnik` (a field) vs body term `…techniker:in` (a person) | ✅ headword now matches the link text, as in English |

## The colon-gendered forms — the reviewer's argument, for the publisher to decide

Asked to argue rather than flag, she gives three reasons a 7-year-old cannot read
`KI-Doktor:in` aloud:

> (a) at 7 a German child is still decoding grapheme by grapheme and has been explicitly
> taught that a Doppelpunkt is a sentence-level signal — a word-internal colon requires
> suppressing a rule not yet automatised, so the child stops or reads two words; (b) there
> is no taught pronunciation — the glottal-stop realisation is acquired from adult media,
> so the modal classroom outcome is "KI-Doktorin", the feminine only, which achieves the
> opposite of the publisher's goal; (c) these 25 occurrences are the card *titles*, in the
> largest type, repeated three times each, on the pages about the reader's own future.

Her options, in order of preference: **(1)** activity-framed titles (`KI in der Medizin`,
`Unterrichten mit KI`) — note the body text of those cards is already gender-free and reads
well, so only the titles change; **(2)** the full pair form (`KI-Ärztin oder KI-Arzt`), which
is decodable, readable aloud, makes both genders *audible* where the colon does not, and
matches the eleven pair forms the document already uses; **(3)** `KI-Ärztin/-Arzt`.

She explicitly rejects the generic masculine: *"a book that devotes a quiz question to an AI
that rejected all women for engineering jobs cannot then default to `KI-Doktor`."*

Two riders: `Doktor` is the wrong noun in German (that is a degree; the job is `Ärztin/Arzt`,
which the health chapter itself uses), and whichever option is chosen must also cover the six
generic masculines still in the file (`den Spielern`, `Die Wächter`, `KI-Stylisten`,
`KI-Köche`, `Patienten`, `Nutzer`) — three gender strategies currently coexist.

## Source-side, not translation faults

- The English lists `Detect illness from x-rays and MRI scans` in **both** the can-do and
  cannot-do lists; the German faithfully reproduces the contradiction. Fix the English first.
- *scientists* appears as `Forscherinnen und Forscher`, `Wissenschaftlerinnen und
  Wissenschaftler` and `Forschende` for one source word — pick one.

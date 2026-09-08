# Certification of the French text as a translation of the English source

**Reviewer:** Prof. Claire Béranger — linguistique française, littérature de jeunesse, acquisition de la lecture
**File reviewed:** `/mnt/user-data/outputs/review/aligned-fr.md` (682 strings + 10 final-quiz items)
**Premise applied:** English is the source of truth. The French is judged as a translation of it, not on its own merits.
**Scope:** every EN/FR pair in the file, in page order, plus the ten final-quiz questions.

---

## 0. Verdict

**Yes — publishable for 7-to-12s, conditional on the eight must-fixes in §2.**

This is a good translation. It is not a gloss of English word order; it is French. The `tu` is held throughout the child-facing text and correctly dropped to `vous` only in the parents' note (#222, #223) — that switch is handled exactly right and is the single clearest sign that a competent francophone hand was on this. Register is warm and spoken: *Aïe, ça se complique* (#105), *Tout le monde s'emballe !* (#104), *Robots pizzaïolos* (#288), *Création à quatre mains, humain et IA* (#592), *celle-là, elle est pour moi !* (#389). Idiom is chosen, not calqued: *Sortir des sentiers battus*, *muffin aux myrtilles*, *Rend les panneaux solaires plus malins*. I searched specifically for the standard translationese markers (*basé sur*, *supporter*, *réaliser*, *définitivement*, *éventuellement*, *en charge de*, *au final*) and found none. Terminology is disciplined: `motifs` is used for *patterns* in all five occurrences; `données` for *data* throughout; the three learning types are correctly and consistently named. The big number ladder in #144–#148 is right in French — *1,8 billion* for *1.8 trillion* and *100 billions* for *100 trillion* — which is the single most common place a French translation of an AI book for children goes wrong, and it does not.

What holds it back is a short, closed list. Three items the publisher was told had been fixed are **still in the file** (§1) — I checked each line before writing this and cross-checked against `text-fr.md`. Beyond those, there are four genuine fidelity slips, three of them in chapters where fidelity matters most: a hedge silently removed in the risks chapter (#418), a claim narrowed in the privacy chapter (#409), the agency of a whole list inverted (#194), and the defining half of the definition of a hallucination dropped from final-quiz Q3. None is a rewrite; all eight are one-line edits. Fix them and I will sign this off without reservation.

---

## 1. Items reported as already fixed that are STILL PRESENT

I was asked not to re-report a list of previously-fixed items. Nine of the twelve are genuinely fixed and I have not raised them: the GPT-4 ladder is now parallel (*million / billion / milliard*, #144–#146), the glossary is in correct French alphabetical order, *aplomb*, *de ton vivant* and *n'est pas négociable* are gone (#640 now reads *des humains doivent TOUJOURS vérifier*), the map copy no longer says *épingle* or *survoler* (#228), *Prof. Ling* is gone (Ling appears only as a child, #202/#256/#457), and the final quiz has length-matched options.

**Three have not been applied.** I verified each line directly, and confirmed the same wording in the older monolingual `text-fr.md`, so this is not an artefact of the alignment export:

| Reported as fixed | Actual text in the file |
|---|---|
| *"Électricité allumée/éteinte" is now "Le courant passe ou ne passe pas"* | **#172 still reads** `Électricité allumée/éteinte` (file line 614) |
| *"la langue de l'IA" is now "le langage"* | **#529 still reads** `la langue de l'IA` (file line 1906) |
| *"Imagine que tu apprennes" is now the indicative* | **#112 still reads** `Imagine que tu apprennes` (file line 390) |

Someone should check whether a fix branch failed to merge, because these three were reportedly corrected together with items that *did* land. They are all still worth fixing on the merits — see M3, M4, M5 below.

---

## 2. Must-fix (8)

### M1 — #194: the list header inverts who is doing the helping
- **EN:** `AI can help kids by:` then `Fixing spellings · Making reading easier · Finding illnesses faster · … · Making internet safer for them`
- **FR:** `L'IA peut aider les enfants à :` then `Corriger l'orthographe · Rendre la lecture plus facile · Repérer des maladies plus vite · … · Rendre Internet plus sûr pour eux`
- English *by + gerund* says **the AI** does these things, and that is how the kids benefit. French *aider quelqu'un à + infinitif* says **the child** does them. Read back as rendered, the page now claims *L'IA peut aider les enfants à repérer des maladies plus vite* — children diagnosing illness — and, worse, #201 becomes *aider les enfants à rendre Internet plus sûr pour eux*, where *eux* has no possible referent but the children themselves. The list is grammatically broken at its hinge.
- **Fix (one string, #194 only, items untouched):** `Voici comment l'IA peut aider les enfants :`

### M2 — #418: a hedge is deleted in the risks chapter
- **EN:** `Some jobs may disappear` — **FR:** `Certains métiers vont disparaître`
- *may* → *vont* turns a possibility into a prediction, in the chapter about what to worry about, addressed to a nine-year-old who may have a parent in one of those jobs. The very next line (#419) keeps its future tense — *Mais de nouveaux vont apparaître !* — so the French now asserts the loss with the same confidence as the gain, which the English deliberately does not.
- **Fix:** `Certains métiers pourraient disparaître`

### M3 — #172: *Électricité allumée/éteinte* is a calque and is factually mushy
- **EN:** `Human Language → Programming Code → Binary (0s & 1s) → Electricity On/Off`
- *On/off* applies to a device in English. French does not say that electricity is *allumée* — a lamp is *allumée*; electricity *passe* or *ne passe pas*. As written, the last rung of the ladder is the only one a French child cannot picture, and it is the rung that carries the whole 0/1 idea.
- **Fix (as previously specified):** `Le courant passe ou ne passe pas`

### M4 — #529: *la langue de l'IA* says the wrong thing
- **EN:** `Algebra & statistics, problem solving, logical thinking — the language of AI.`
- In French, **une langue** is a natural tongue — français, arabe, langue des signes. Maths is not one. The word for *language* in the metaphorical/formal sense is **le langage**. The confusion is live on this very page: #325 *Traduction de langues*, #541 *Langues*, #365 *la langue des signes*, #247 *langues rares*. A child reading the Maths card will map it onto the Languages card.
- **Fix (as previously specified):** `— le langage de l'IA.`

### M5 — #112: *Imagine que tu apprennes*
- **EN:** `Imagine teaching a toddler to recognise a cat.`
- The subjunctive after *imaginer que* is defensible in adult prose, but *que tu apprennes* is well above the 7-to-12 band at the **lower** end — the present subjunctive of `apprendre` is not secure before CM2, and this is the opening line of the chapter that carries the book's central analogy. The cleanest fix is not to swap the mood but to delete the subordinate clause.
- **Fix:** `Imagine : tu apprends à un tout-petit à reconnaître un chat.`

### M6 — #409: *in public* narrowed to *dans la rue*
- **EN:** `Facial recognition in public` — **FR:** `Reconnaissance des visages dans la rue`
- *In public* covers stations, stadiums, shops, schools. *Dans la rue* is the street and only the street, which is where a child is least likely to meet it and most likely to dismiss it. This is the privacy card; narrowing the claim narrows the warning. Separately, French has a fixed term here — **la reconnaissance faciale** — which the child has already met one screen earlier as *Déverrouillage par le visage* (#278); *reconnaissance des visages* is a description, not the term.
- **Fix:** `La reconnaissance faciale dans les lieux publics`

### M7 — Final quiz Q3: the definition of a hallucination loses its defining half
- **EN:** `What is it called when an AI makes up something that sounds true but isn't?`
- **FR:** `Comment appelle-t-on le moment où une IA invente une information fausse ?`
- *Sounds true but isn't* is the whole concept, and it is exactly how the body teaches it at #174: *l'IA invente parfois des faits qui sonnent vrai mais qui sont faux*. The French question reduces it to "makes something up that is false", which no longer distinguishes a hallucination from any other error — and the quiz is the last thing the child reads. (Also, *le moment où* mis-frames it: the question asks what the **thing** is called, not the moment.)
- **Fix:** `Comment appelle-t-on une information inventée par une IA, qui a l'air vraie mais qui est fausse ?`

### M8 — #211: *elle a appris comment les humains parlent* drops the book's own key verb
- **EN:** `It can sound caring because it's trained on how humans talk`
- **FR:** `Elle peut sembler attentionnée parce qu'elle a appris comment les humains parlent`
- The book spends a whole chapter building **entraîner / l'entraînement** (#118 *Entraîner le modèle*, #125 *réentraîner*, #235 *Entraîne des IA à lire*, #413 *Entraînée sur des données biaisées*, #637 *entraînée uniquement sur des CV*). Here, at the emotional climax of the chapter — the page that tells the child the AI does not care about them — the term is silently swapped for the vaguer *a appris*, which is precisely the reading the sentence exists to prevent (it *learnt* how we talk, as a person would). The passive-voice *trained on* is also the honest form: someone did it to it.
- **Fix:** `Elle peut sembler attentionnée parce qu'elle a été entraînée sur des millions de phrases écrites par des humains`

---

## 3. Should-fix (12)

### S1 — #108: *le « cycle du hype de Gartner »*
Two problems in four words. *Hype* has no settled gender in French (France tends *la hype*, Québec *le hype*), so any choice will read as an error to half the market; and *le cycle du hype* is jargon for a 7-year-old with no gloss. English keeps it as a proper name; French should either do the same or translate it outright.
→ `Le « cycle de l'emballement » (en anglais, le Gartner Hype Cycle)`
Same string: `puis par une utilité tranquille` for *then steady usefulness* — *utilité tranquille* is not an available French collocation. → `puis par une utilité solide, qui dure`

### S2 — #445: *JUSTE et ÉQUITABLE* collapses the pair
**EN** `what is RIGHT and FAIR`. In French *juste* and *équitable* are near-synonyms, so the pair says one thing twice and the moral half (*right*) disappears. It also overloads *juste*, which returns two clauses later (*doit être juste, sûre, honnête*) and again as the name of principle 1 (*L'équité*, #447).
→ `L'éthique, c'est réfléchir à ce qui est BIEN et à ce qui est JUSTE.`

### S3 — #539: *biologie pour les médecins de l'IA*
**EN** `biology for AI doctors`. *Les médecins de l'IA* reads as "the AI's doctors" / "doctors of AI". The career card two screens earlier calls the job *Médecin augmenté par l'IA* (#473).
→ `biologie pour les médecins qui travaillent avec l'IA`

### S4 — #564: *les meilleurs* has no antecedent
**EN** `the best AI workers ask great questions`. French drops the noun: *Les spécialistes disent que les meilleurs posent d'excellentes questions* — best at what? The child has to reconstruct it.
→ `Les spécialistes disent que ceux qui réussissent le mieux avec l'IA posent d'excellentes questions`

### S5 — Career-title pattern is inconsistent, and one title is above band
Five titles use *avec l'IA* (#485 *Climatologue avec l'IA*, #503 *Enseignant avec l'IA*, #509 *Artiste avec l'IA*) or *en/de l'IA* (#491, #515). Two break the pattern and are unclear:
- #473/#475 `Médecin augmenté par l'IA` — *augmenté* is an adult tech word (upper end of the band at best) → `Médecin avec l'IA`
- #479/#481 `Créateur de jeux vidéo IA` and #497/#499 `Ingénieur alimentaire IA` — a bare apposed *IA* reads as "AI video games" and "AI food", not "with AI" → `Créateur de jeux vidéo avec l'IA`, `Ingénieur de l'alimentation avec l'IA`
Note: `Ingénieur alimentaire IA` is also the glossary headword, so both must move together.

### S6 — #138 vs #113: the two sibling terms are handled in opposite directions
#113 fully francises *MACHINE LEARNING* → `l'APPRENTISSAGE AUTOMATIQUE` and never shows the English. #135 gives `apprentissage profond`, then #138 reverts to `« DEEP LEARNING »` in English. A child who meets both cannot tell whether these are two things or one. Pick one policy — I recommend French first, English tagged once:
→ #138: `Plus il y a de couches = apprentissage plus profond = « APPRENTISSAGE PROFOND » (deep learning en anglais), le type d'IA le plus puissant aujourd'hui !`
→ #113: `On appelle ça l'APPRENTISSAGE AUTOMATIQUE (machine learning en anglais).`

### S7 — #79: *motifs* needs one gloss on first use
The term is used consistently (5/5) and is the right technical choice — but the everyday sense of *un motif* for a French child is a decorative pattern on fabric or wallpaper. On first use, one parenthesis fixes it for the rest of the book. It is also the only load-bearing term in the text with no glossary entry.
→ `…de repérer des motifs (des choses qui reviennent souvent)…`

### S8 — #216/#218/#220: bare imperatives with no object
**EN** `Create it. / Snap it. / Share it.` — **FR** `Crée. / Photographie. / Partage.` French transitive imperatives do not stand alone this way; each reads as a truncated fragment, and *Photographie.* in isolation reads as the noun.
→ `Crée-la.` / `Photographie-la.` / `Partage-la.`

### S9 — #157/#158: *la mémoire courte* / *la mémoire longue*
**EN** `RAM – short memory` / `Storage – long memory`. In French *avoir la mémoire courte* is a fixed expression meaning "to conveniently forget", which is exactly the wrong association here.
→ `La RAM – la mémoire à court terme` / `Le stockage – la mémoire à long terme`

### S10 — #611: sentence architecture above the band
**FR** `Outre la faim dans le monde et le changement climatique, quelle maladie les scientifiques pensent-ils que l'IA pourrait aider à éliminer ?` — *Outre* is formal register, and the double embedding (*quelle maladie … pensent-ils que … pourrait aider à*) is a construction French children do not parse fluently before roughly 12. This is a quiz question; if the child stalls on the syntax, the item is lost.
→ `À part la faim dans le monde et le changement climatique, quelle maladie l'IA pourrait-elle aider à faire disparaître, d'après les scientifiques ?`

### S11 — #434/#441: the currency is dropped
**EN** (both strings) `steal millions of pounds` — **FR** `voler des millions` / `voler des millions`. *Des millions* of what? The number is the point of the anecdote and the French leaves it dangling.
→ `voler des millions de livres`

### S12 — #176: *La confusion d'images* is the one calqued heading of four
Its three siblings are idiomatic (*Les hallucinations*, *Les erreurs de calcul*, *Les fautes d'orthographe*). *La confusion d'images* is English `Image confusion` with French words.
→ `Les images mal reconnues :`

---

## 4. Polish (10)

- **#73** `La réponse honnête, la voici :` — dislocation is stilted here → `Voici la réponse honnête :`
- **#100** `n'a pas été tout droit` — *tout droit* is adverbial and does not attach to *parcours* → `n'a pas été une ligne droite`
- **#232** `avant qu'ils n'arrivent chez le grand public` — *arriver chez le grand public* is not a French collocation → `avant qu'ils ne soient mis entre les mains du public`
- **#353** `Imagine le nombre de vies que ça peut sauver !` — EN `could save`; the conditional is available and free → `que ça pourrait sauver`
- **#362** `Surveille les patients 24 h/24` — EN `24/7`; the French formula drops the days → `Surveille les patients jour et nuit`
- **#14** `adore les expériences, les maths et bricoler !` — the list changes category mid-way (two nouns then an infinitive) → `adore les expériences, les maths et le bricolage !`
- **#554** `histoire des techniques` — a university course title; the child's word is *technologies* → `histoire des technologies`
- **#470** `Voici des carrières passionnantes qui T'attendent !` — *carrière* is adult vocabulary and the section is already titled *Les métiers de l'IA* (#468) → `Voici des métiers passionnants qui T'attendent !`
- **#466** `L'Union européenne a adopté son AI Act en 2024` — *son AI Act*, with a possessive on an untranslated English proper noun, is awkward → `L'Union européenne a adopté sa grande loi sur l'IA, l'« AI Act », en 2024`
- **#575** `Des prévisions de turbulences au plus juste` — EN `Zero turbulence predictions`; *au plus juste* means "trimmed to the minimum" (of a budget), not "highly accurate" → `Des turbulences prévues à l'avance`

---

## 5. Character voices

Eight children, and they do sound like French children — this is one of the translation's strengths. #345 `C'est Katerina !`, #433 `C'est Bembe.`, #389 `C'est Anish — celle-là, elle est pour moi !` (idiomatic dislocation, exactly how a nine-year-old talks), #179 `Salut, c'est Fleur — en voilà une amusante !`. The greeting split maps EN *Hi* → *Salut* and EN *Hey* → *Coucou*, which is a defensible system. Two notes, both minor:

- **#140 / #610** `Coucou, c'est Ronan` (twice). *Coucou* in current French usage skews young and, in the 9–12 peer register, feminine-marked; Ronan is the eleven-year-old outdoorsman and it is the only greeting in the book that sits slightly off its speaker. → `Hé, c'est Ronan` / `Hé, c'est Ronan — une toute dernière !`
- **#203** `celle-là est difficile !` for EN `this one's tricky!` — *difficile* means hard; *tricky* means it has a trap in it, which is precisely what this item is (all three options sound like things AI can do). → `celle-là, c'est un piège !`
- **#556** `une petite question rapide !` — *petite* and *rapide* do the same job → `j'en ai une rapide pour toi !`

---

## 6. The ten final-quiz questions

Verified against the EN stems and against the body text they test.

| | One defensible answer? | Distractors visibly wrong? | Matches EN meaning? |
|---|---|---|---|
| Q1 | Yes | Yes | **Yes — and well localised.** EN distractors expand *A.I.* (`Automatic Information`, `Advanced Invention`); FR expands *I.A.* (`Internet automatique`, `Interface avancée`). This is the right instinct and the best single decision in the quiz. |
| Q2 | Yes | Yes | Yes. But `les informations dont une IA apprend` is a strained relative; the body says *apprendre à partir de données* (#79). → `Comment appelle-t-on les informations à partir desquelles une IA apprend ?` |
| Q3 | Yes | Yes | **No — see M7.** |
| Q4 | Yes | Yes | Yes. |
| Q5 | Yes | Yes | Yes. `Que ne dois-tu JAMAIS donner` correctly echoes #453 `Ne donne JAMAIS ton nom complet`. |
| Q6 | Yes | Yes | Nearly. EN `A fake video **or voice** made by AI`; FR keeps only *Une fausse vidéo*. Voice is the case the book actually teaches — the whole Bembe item (#441) is a faked voice, and the glossary entry lists all three. → `Une fausse vidéo ou une fausse voix faite par une IA` (still shorter than the longest distractor). |
| Q7 | Yes | Yes | Yes. |
| Q8 | Yes | Yes | Drifts. EN `What does an MRI scanner do?` → FR `À quoi sert l'IRM aux médecins ?` adds *aux médecins*, and the distractor drops *on autopilot* (`Flies a plane on autopilot` → `À piloter un avion`). Harmless but gratuitous. → `À quoi sert un appareil d'IRM ?` / `À piloter un avion automatiquement` |
| Q9 | Yes | Yes | Yes. |
| Q10 | Yes | Yes | Yes. All three options present and correct — I checked the file's final line directly, since Q10 sits at EOF with no trailing newline and can look truncated. |

Option lengths are matched within each item, and the correct answer is never the longest — the previously-noted defect is genuinely gone.

---

## 7. Terminology audit

| Concept | EN | FR | Occurrences | Verdict |
|---|---|---|---|---|
| AI | AI / Artificial Intelligence | IA / intelligence artificielle | throughout | Consistent. Feminine agreement held everywhere (*une IA injuste*, *Elle peut traiter*, *l'IA … elle*). |
| data | data / DATA | données / DONNÉES | throughout | Consistent; capitalisation of the introduced term mirrors EN. |
| patterns | patterns | motifs | 5/5 | Consistent. Needs one gloss — S7. |
| machine learning | MACHINE LEARNING | APPRENTISSAGE AUTOMATIQUE | #113 | Correct, but see S6. |
| deep learning | Deep Learning / DEEP LEARNING | apprentissage profond (#135) / DEEP LEARNING (#138) | 2 | **Inconsistent — S6.** |
| supervised / unsupervised / reinforcement | — | supervisé / non supervisé / par renforcement | #127–#132 | Correct and standard. |
| train | train / trained | entraîner / entraînée | 6 of 7 | One lapse at #211 — M8. |
| human-in-the-loop | Human-in-the-Loop | « l'humain dans la boucle » | #630 | Correct standard French rendering. |

**Glossary ↔ body.** All eleven EN entries are present in French, correctly re-sorted into French alphabetical order (Aviation, ChatGPT, Deepfake, Défense, Fausses informations, Imagerie par résonance magnétique, Ingénieur alimentaire IA, Intelligence artificielle, Sciences humaines, Trop compter sur l'IA, Vie privée) — I verified the sort, including *Deepfake* before *Défense* and the three I-headwords. Because EN and FR sort differently, the aligned file shows the entries offset against each other from #654 to #675; this is the correct behaviour, not a mis-mapping. Every headword is used identically in the body: *Trop compter sur l'IA* = #427, *Fausses informations* = #422, *Vie privée* = #407/#450, *Défense* = #337, *Aviation* = #571, *Sciences humaines* = #551, *IRM* = #191. The only headword that needs to move is *Ingénieur alimentaire IA*, and only in step with S5.

---

## 8. Defect inherited from the English source (not a translation error)

**#191 / #193** — `Detect illness from x-rays and MRI scans` appears in *both* the "What can AI do?" list **and** the "What can AI not do?" list, in the English. The French reproduces it faithfully in both places (`Repérer des maladies sur des radios et des IRM`). The translator was right to follow the source; but as rendered, a French child reads the identical sentence in two opposed columns on facing screens. The correction has to be made in English first. My reading is that the entry belongs only in #191, and #193 wanted something like *diagnose a patient on its own* / *poser un diagnostic toute seule*.

---

## 9. Verification note

I could not verify the reported fix to the quiz score line (*"1 bonne réponse"*). No score, result or medal string appears anywhere in this file — I searched for *score*, *bonne réponse*, *réponses correctes* and *médaille*, and the only hits are #647, the instructions screen, which reads correctly. Those strings are presumably assembled at runtime by the page script and were not captured by the flattening. They therefore fall outside this certification and should be checked on a rendered page — in particular that the singular/plural agreement is generated (*1 bonne réponse* vs *3 bonnes réponses*), not hard-coded.

Artefacts of the HTML flattening were checked against how the page renders and are **not** reported: the badge-plus-heading strings on the chapter-1 cards (`Physique Information : …`, `Numérique Données : …`, #45–#63), and the inserted space before a link or punctuation (`Deepfake : …` at #441, `Intelligence artificielle .` at #77, `Il suffit de nous le dire .` at #223).

---

*Prof. Claire Béranger*

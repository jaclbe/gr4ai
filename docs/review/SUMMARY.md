# GR4AI guide — six-reviewer language review

Three teams, each a child in the target age band and a language professor, read one
language version each and worked independently.

| Team | Child | Professor | Text reviewed |
|---|---|---|---|
| English | Maya, 9, Year 5 (UK) | Prof. Ruth Kelleher — English, children's literacy & readability | `index.html` (the source) |
| German | Lena, 9, 4. Klasse | Prof. Dr. Annegret Vogt — German linguistics, Kinder- und Jugendliteratur | `guide-de.html` |
| French | Léo, 9, CM1 | Prof. Claire Béranger — French linguistics, littérature de jeunesse | `guide-fr.html` |

Full reports: `report-en-child.md`, `report-en-prof.md`, `report-de-child.md`,
`report-de-prof.md`, `report-fr-child.md`, `report-fr-prof.md`. The exact text each
reviewer read is in `text-en.md`, `text-de.md`, `text-fr.md`.

---

## The headline

**Both professors, independently, put the text at roughly 11–14, not 7–12.** The German
sits at about 10–13; the French at about 11–14. The English source measures Flesch–Kincaid
6.1 on connected prose — but roughly 200 bullet fragments carry the hardest vocabulary in
the guide and no readability formula can see them.

Their shared diagnosis is the same sentence in two languages: *the easy half of the job was
done (short sentences) and the hard half was not (concrete words)*. All three children
independently reported the same failure mode — they read the opening warmly, hit the
abstract chapters, and started skimming.

Because English is the source, **every defect in it is currently live three times over.**

---

## Verified before reporting

I checked every mechanical claim against the files rather than taking it on trust.

### Confirmed — these are real

| Finding | Evidence |
|---|---|
| Chapter 5 contradicts itself | `Detect illness from x-rays and MRI scans` appears verbatim in both the green "can" list and the red "cannot" list — in **all three** languages |
| Authoring placeholder is live | EN "Placeholder: swap in Prof. Ling's real focus area…", DE "Platzhalter: …", FR "À compléter : …" |
| Final quiz is beatable blind | Correct answer is at index 0 six times and index 1 four times — **never the third option**, in all three languages. It is also the longest option in 7/10 (EN) and 8/10 (DE, FR). Always picking the longest option scores 7–8 out of 10 and wins a medal. |
| French score line has a plural bug | `` `Tu as ${score} bonnes réponses sur ${total} !` `` prints "Tu as 1 bonnes réponses sur 10 !" |
| French glossary is not in French order | Entries follow the English alphabet: Intelligence artificielle, Aviation, ChatGPT, … IRM in the wrong slot |
| Meta description says six chapters | EN and FR both say "the six chapters"; the guide has fifteen. (The German was already correct.) |

### False positives — artifacts of the transcript, do not chase

The reviewers read a flattened text dump, which introduced three problems that are not in
the site:

1. **"French has no non-breaking spaces."** It does — 183 in the body, 155 of them before
   `! ? : ;`, and zero ordinary spaces in those positions. The flattening rendered them as
   plain spaces. (The professor's separate preference for U+202F over U+00A0 is a style
   call, not an error.)
2. **"MRT -Bildern", "Deepfake -Videos".** The markup is `Röntgen- und <a>MRT</a>-Bildern`
   and renders correctly; the space came from the text extractor.
3. **"Physisch Information" is ungrammatical.** That is the PHYSICAL/DIGITAL pill added in
   the last change — a badge, not an adjective. It reads correctly on the page.

---

## What the reviewers agree on

Findings raised independently by three or more reviewers, in rough order of severity.

1. **The chapter 5 contradiction.** All three children lost trust in the page over it. Maya:
   *"I read it three times, then stopped believing either list."*
2. **The live placeholder.** All three children read it as the site being broken; Maya said
   it made her doubt the other professors were real.
3. **The final quiz teaches the wrong lesson.** Both professors and all three children
   worked out the pattern. Léo: *"by Q6 I stopped reading and just counted words."*
4. **The glossary defines the easy words and omits the hard ones.** It spends slots on
   Aviation, Defence and Food Engineer while *data, model, pattern, bias, hallucination,
   machine learning, neural network, parameter* go undefined — and *hallucination* is
   tested in the final quiz.
5. **Chapter 4's heading is a 21–26 word sentence** in the largest type on the page, and the
   chapter is about something else.
6. **Chapter 2's definition of AI — the single most important sentence in the guide — is its
   longest** (33 words EN, 38 FR).
7. **Chapters 7, 8, 9 and 14 are four consecutive tile grids** with items repeating across
   them (Fashion, Art & Music and Food appear in both 8 and 14). All three children skimmed
   or stopped.
8. **The gallery instructs the child to upload, then tells them they may not.** "Share it.
   Upload it below" versus "Please submit this on your child's behalf."
9. **The closing line breaks the guide's own safety message.** "If you use me safely, we can
   do miracles!" is the AI speaking as a friendly "me/we", four chapters after "AI is NOT a
   friend, it's a tool. It doesn't have feelings."
10. **Instructions assume an adult is present** — "Ask your teacher to show you the graph!"
    — in a guide a child may well be reading alone.

---

## Language-specific

### German — Prof. Vogt
Praised: the German quotation marks are correct throughout (14 pairs), the en-dashes and
decimal commas are right, and the long-scale conversion is right — *trillion* → **Billionen**,
*billion* → **Milliarden**, which she notes nine out of ten translations get wrong.

Must-fix:
- The **parent-facing note uses "du"** ("Bitte schicke das Bild für dein Kind ein") in a
  data-protection notice about children's photographs. Should be "Sie".
- **"Sie hat keine Gefühle und mag dich nicht wirklich."** The English is *doesn't truly
  care about you*; the German reads to a young child as personal rejection.
- **"Menschen haben IMMER das Sagen."** The English is *must always be in charge*. A norm
  has become a false factual claim, gutting the chapter's own argument.
- **Quiz Q6**: "die echt wirkt" agrees only with *Stimme* — the correct answer of the final
  quiz is grammatically defective.
- **"Zu viel Verlass auf KI"** — a calque; *Verlass* survives in German essentially only in
  "auf jemanden ist Verlass". Should be "Sich zu sehr auf KI verlassen".
- **"Verstärkendes Lernen"** → "Bestärkendes Lernen"; the current form reverses the semantics.
- The **colon-gendered forms** ("KI-Doktor:in", "Ingenieur:innen", 10 instances) cannot be
  decoded aloud by a beginning reader. Lena skipped every heading containing one.

### French — Prof. Béranger
Praised: the typography (curly apostrophes, guillemets, the œ ligature, sentence-case
headings), and quiz Q1, whose three options preserve the I-A initials exactly as the English
preserves A-I.

Must-fix:
- The **score-line plural bug** (verified above).
- The **glossary order** (verified above).
- **"Imagine que tu apprennes"** — *imaginer que* takes the indicative; the subjunctive is a
  hypercorrection.
- **"la langue de l'IA"** → "le langage" — false friend.
- **"Électricité allumée/éteinte"** — you do not turn electricity on in French.
- **"Deepfake : ces vidéos ont trompé…"** — "ces" has no antecedent; it opens the answer box.
- **The ch3 quiz ladder is broken by the translation.** English runs 1.8 million / 1.8 billion
  / 1.8 trillion; the French renders the third as "1 800 milliards", so the right answer is
  the formal odd-one-out and the question is guessable without reading. My rendering, my bug.
- Adult register throughout: *aplomb, voire, outre, de ton vivant, n'est pas négociable*.

---

## Factual claims that need checking before publication

Prof. Kelleher checked the guide's specific claims — reasonably, since the guide teaches
children to check sources. She flags five as unsound. **These are content decisions for the
GR4AI team, not translation fixes**, and they apply to all three languages:

| Chapter | Claim | Her finding |
|---|---|---|
| 9 | "AI helped scientists design a COVID-19 vaccine in just 42 days… AI analysed millions of molecules" | 42 days is Moderna's design-to-first-batch; the breakthrough was mRNA. The molecular screen described did not happen. |
| 15 | "rejected ALL women… trained only on male engineers' CVs! Humans caught the mistake and fixed it." | Amazon 2018 — it downgraded CVs containing the word "women's", not all women, and the system was scrapped, not fixed. |
| 10 | "someone used AI to fake the voice of a bank manager" | Two incidents merged. The 2024 case was a Hong Kong video call with AI-faked colleagues, ~£20m. |
| 8 | "0.1 seconds… AI could help check 12,000 scans a day" | 0.1s implies 864,000/day. The arithmetic fails on an envelope, and a child did check it. |
| 14 | "Scientists predict AI could help us end malaria…" | Unsourced, and malaria appears nowhere in the body text — so the quiz question is unanswerable. |

Also flagged as needing qualification: GPT-4's "1.8 trillion parameters" (an unconfirmed
leak, and the brain-connection comparison is a category error), and the chapter 7 energy
claim (conflates AI with all data centres; the 700,000 km figure rests on one 2019 study).

---

## What the children liked — worth protecting in any rewrite

All three named the same things: the eight friends and their ages, the chihuahua-and-
blueberry-muffin joke, the "just 5 days" comparison with Netflix and Instagram, chapter 11's
safety rules (Maya: *"the clearest writing in the whole thing"*), and chapter 12's careers.
Léo added the quiz interruptions and the consistent "tu" — *"it feels like someone sitting
next to me."* Lena added the cat-learning comparison and the flip cards.

Prof. Béranger singled out three French renderings as genuinely good: *"Création à quatre
mains, humain et IA"*, *"L'IA n'a ni cœur ni conscience — NOUS, si."*, and quiz Q1.

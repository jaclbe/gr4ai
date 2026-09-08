# GR4AI — English source text: editorial and readability review

**Reviewer:** Prof. Ruth Kelleher, English Language & Children's Literacy
**File reviewed:** `/mnt/user-data/outputs/review/text-en.md` (790 lines, ~4,300 words)
**Target readership:** ages 7–12
**Date:** 7 September 2026

---

## 0. Summary judgement

This is a warm, well-intentioned guide with a real structural spine (physical → digital → what AI is → how it learns → what it does → what it risks → what you should do). The character device is charming and the safety chapter is genuinely good. But the text is not publication-ready, and because it is the **source** for the German and French editions, each of the defects below is currently live three times.

Three things must be fixed before anything else:

1. **A live authoring placeholder is on the public page** (ch6, line 282), alongside two professor names ("Prof. Goldilocks", "Prof. Shy Jeans") that read as placeholders.
2. **Five of the eight headline factual claims are wrong or materially misattributed** — the COVID vaccine, the 0.1-second scan, the deepfake theft, the AI hiring system, and the "AI could end malaria" prediction. A book whose central lesson is *check your sources* cannot itself fail a source check. This is the single most serious category of finding.
3. **The final quiz is beatable without reading the guide.** The correct answer is the longest option in 7 of 10 questions, and is **never** the third option (positions run A×6, B×4, C×0). A child who picks the longest option every time scores 7/10 and receives a medal.

On reading level: connected prose scores Flesch Reading Ease **71**, Flesch–Kincaid grade **6.1**, SMOG **9.3**, Gunning Fog **8.7**. Because informational text for this age is better predicted by the polysyllable-weighted measures, and because the formulas do not score the noun-phrase tiles (which carry the hardest vocabulary of all — *carbon capture, lab-grown proteins, fairness must be designed in*), the working figure is **age 11–14**. The guide reads for the top of its band and above it. A 7-year-old cannot read this unaided; a 9-year-old will need an adult for roughly one paragraph in four.

Everything below is organised in the order requested.

---

## 1. Factual errors, contradictions, and overclaiming

### 1.1 The eight named claims

#### 1. The COVID vaccine in 42 days — **WRONG. Must be rewritten.**

> **ch9:** "How long did it take AI to help design a COVID-19 vaccine?" -> "AI helped scientists design a COVID-19 vaccine in just 42 days — something that used to take 10-15 YEARS! AI analysed millions of molecules to find the right combinations."

Three separate errors compounded.

- The 42 days is real but is **not an AI figure**. Moderna finalised the mRNA-1273 sequence on 13 January 2020, two days after the SARS-CoV-2 genome was published; the first clinical batch shipped to NIH on 24 February 2020, 42 days later. The enabling technology was the mRNA platform plus a published genome — not artificial intelligence.
- "AI analysed millions of molecules to find the right combinations" is **fabricated**. mRNA vaccine design is sequence-based. No molecular screen of that description took place. This sentence describes small-molecule drug discovery and has been transplanted onto a vaccine.
- The distractor "10-15 years" is offered as the pre-AI baseline, which is true of vaccine development generally and therefore lends false credibility to the AI attribution.

This is the worst finding in the document: a fully invented mechanism attached to a real number, in the chapter called "The Good Side of AI", delivered by a named child character.

**Proposed replacement (question and answer):**
> **Q:** Scientists designed the first COVID-19 vaccine incredibly fast. How long did the design itself take?
> Options: *About two days* (correct) / *About two months* / *About two years*
> **A:** Just two days! As soon as scientists published the virus's genetic code in January 2020, other scientists used it to design a vaccine in 48 hours. Computers helped, but the real breakthrough was a new kind of vaccine called mRNA. AI *is* helping with medicines, though — an AI called AlphaFold has worked out the shapes of over 200 million proteins, which helps scientists hunt for new drugs much faster.

#### 2. GPT-4's 1.8 trillion parameters — **NEEDS QUALIFYING, and is now dated.**

> **ch3:** "Do you know how many 'parameters' GPT-4 (the AI behind ChatGPT) learned to adjust?" -> "GPT-4 is estimated to have around 1.8 TRILLION parameters ... Your brain has about 100 trillion connections, so we're catching up fast!"

The body text does hedge with "estimated", which is to its credit. But:

- The figure comes from **unconfirmed industry leaks** (SemiAnalysis, mid-2023), describing a mixture-of-experts model in which not all parameters are active at once. OpenAI has never published a number. A quiz that awards a "correct" answer to an unpublished figure teaches children that leaked numbers are facts.
- **GPT-4 is no longer "the AI behind ChatGPT."** This will read as out of date to any child who has used it, and it will age further during the book's shelf life.
- **"So we're catching up fast" is a category error.** A parameter in a neural network and a synapse in a brain are not comparable units. Placing them in the same sentence with "catching up" tells the child that AI is approaching a human brain — which flatly contradicts ch5 and ch11, where the guide insists AI is a tool that cannot think or feel.

**Proposed replacement:**
> **A:** Around a trillion! Nobody outside the company knows the exact number — the people who built it have never told us, and that's part of the point: AI companies keep secrets. Your brain has around 100 trillion connections, but be careful with that comparison. A "dial" in an AI and a connection in your brain are completely different things — like comparing bricks to biscuits.

Also change **"GPT-4 (the AI behind ChatGPT)"** -> **"GPT-4, one of the AI models behind ChatGPT"**.

#### 3. 0.1 seconds versus 20 minutes — **WRONG, internally inconsistent, and it contradicts ch5.**

> **ch8:** "AI can read a medical scan in just 0.1 seconds — the same job takes a human doctor around 20 minutes! That means AI could help check 12,000 scans a day."

- **The arithmetic does not work.** At 0.1 seconds per scan, a day is 864,000 scans, not 12,000. The 12,000 appears to have been derived from the *doctor's* 20 minutes by some other route. A number that fails on the back of an envelope, in a book that teaches checking, is indefensible.
- **The comparison is not like-for-like.** "A medical scan" spans a chest X-ray (one image) and an MRI study (hundreds of slices). Sub-second inference is realistic for a single X-ray; a full CT or MRI volume is not read in 0.1 seconds. Meanwhile a radiologist reading a chest X-ray takes well under 20 minutes — 20 minutes is a complex cross-sectional study.
- **It misrepresents what the doctor is doing.** The radiologist is not slow at pattern-matching; they are integrating the image with the patient's history, symptoms and the question the referring doctor asked. Framing the doctor as the slow component is the exact misunderstanding a guide like this should be dismantling.
- **It directly contradicts ch5**, four chapters earlier — see §1.2 below.

**Proposed replacement:**
> **Q:** How fast can an AI look at a chest X-ray?
> Options: *About 20 minutes* / *About 1 minute* / *About 1 second* (correct)
> **A:** About a second! A doctor takes longer — but not because the doctor is slow. The doctor is also thinking about *you*: what's been hurting, what happened before, what else it could be. So the AI does the fast looking, and then hands its answer to the doctor, who decides. That's the whole idea: AI plus human, not AI instead of human.

#### 4. ChatGPT: one million users in five days — **SOUND, with one qualifier.**

> **ch4:** "Just 5 days! Compare that to Netflix (3.5 years) or Instagram (2.5 months)."

The five-day figure is accurate (announced by OpenAI's CEO on 5 December 2022, five days after the 30 November 2022 launch). The comparison set is the widely circulated UBS/Statista chart and is broadly right as published.

One qualification: the comparison is apples to oranges. Netflix's 3.5 years was a **paid postal DVD subscription in 1999**, on an internet with a fraction of today's users. Presenting it as a straight race overstates the finding. Keep the fact, add one clause.

**Proposed:** "Just 5 days! Netflix took 3.5 years to reach a million — though that was back in 1999, when far fewer people were online, and you had to pay. Still: AI spread faster than almost anything before it."

#### 5. The 2024 EU AI Act — **SOUND. One presentational fix.**

> **ch11:** "The European Union passed its landmark AI Act in 2024 — the world's first major AI safety law! It bans AI that manipulates children or uses secret surveillance."

Accurate. Adopted by the European Parliament in March 2024, approved by the Council in May 2024, in force from August 2024. "World's first major AI law" is defensible as the first comprehensive, cross-sector AI regulation. The prohibitions described are genuinely in Article 5 (exploiting vulnerabilities including age; untargeted facial-image scraping; restrictions on real-time remote biometric identification).

Two smaller points:
- **"Landmark"** is a figurative adult word; a nine-year-old will picture a monument. Replace with "big new".
- **The quiz is unanswerable from the guide.** Nothing in ch11's body text mentions the AI Act, the EU, or any law. A child in Manchester, Montreal or Mumbai is being asked to recall a fact they were never told. Either teach it in the body first (recommended — add one sentence to the ch11 principles block) or replace the question. See §4.

#### 6. The AI hiring system that rejected all women — **WRONG on two points. Must be corrected.**

> **ch15:** "Why did an AI hiring system once reject ALL women for engineering jobs?" -> "An AI hiring system once rejected ALL women for engineering jobs because it was trained only on male engineers' CVs! Humans caught the mistake and fixed it."

The real case is Amazon's experimental recruiting tool, reported by Reuters in October 2018.

- **It did not reject all women.** It penalised CVs containing the word "women's" (as in "women's chess club captain") and downgraded graduates of two all-women's colleges. That is a subtler and, for teaching purposes, a *better* story — the bias was in a word, not a checkbox.
- **It was not "trained only on male engineers' CVs."** It was trained on ten years of CVs submitted to the company, which were predominantly but not exclusively from men.
- **Humans did not "fix" it.** Amazon abandoned the project. The guide's version implies bias is a bug that gets patched; the truth is that it was serious enough to scrap the tool. The honest version is a stronger lesson and lands better with the ch15 "human-in-the-loop" message.

**Proposed replacement:**
> **Q:** An AI once learned to mark down women applying for engineering jobs. Why?
> Options: *Someone told it to* / *It had learned from ten years of CVs, and most were from men* (correct) / *Women didn't apply*
> **A:** Nobody told it to. It had learned from ten years of real CVs sent to one company — and most had come from men. So it quietly started marking down any CV with the word "women's" in it, like "women's football captain". People spotted what was happening and switched the whole thing off. The AI wasn't being mean. It had just copied a pattern from the past — which is exactly why humans have to keep watching.

#### 7. The deepfake bank-manager theft — **WRONG. Two incidents have been merged.**

> **ch10:** "In 2024, someone used AI to fake whose voice to steal millions of pounds?" -> "Deepfake videos have fooled millions of people! In 2024, someone used AI to fake the voice of a bank manager and steal millions of pounds."

Two separate cases have been fused:
- A **2020** case (reported 2021) in which a cloned **voice** of a company director was used in a bank transfer fraud in the UAE, ~$35m.
- The **2024** Hong Kong case, in which a finance worker at the engineering firm Arup joined a **video call** populated entirely by deepfakes of his CFO and colleagues, and transferred HK$200m (roughly £20m).

The guide's version takes the year from one, the modality (voice) from another, and invents the role (bank manager). Compounding this: the answer text opens **"Deepfake videos have fooled millions of people!"** — *videos*, when the question just asked about a *voice*. The guide contradicts itself inside a single paragraph.

**Proposed replacement:**
> **Q:** In 2024, criminals used AI to fake something on a video call and steal millions. What did they fake?
> Options: *A famous actor* / *The worker's own boss and workmates* (correct) / *A robot*
> **A:** In 2024 a worker in Hong Kong joined a video call with his boss and several colleagues. Every single person on that call was a fake made by AI. He believed them, and sent away about £20 million. This is why "I saw it with my own eyes" isn't enough any more — and why AI safety laws matter.

#### 8. Electricity and CO2 — **BOTH NEED QUALIFYING.**

> **ch7:** "AI uses as much electricity in one year as some small countries! Training one big AI model can produce as much CO₂ as driving a car for 700,000 km."

- **The electricity claim conflates AI with data centres generally.** The underlying source is the IEA's 2024 estimate that data centres, AI and cryptocurrency together consumed roughly 460 TWh in 2022 — about 2% of world electricity, comparable to France's entire annual consumption. That is a *much* better and more startling figure than "some small countries", and it is honest about what is being counted.
- **The 700,000 km figure traces to Strubell et al. (2019)**, a single study of one large NLP model trained with neural architecture search. It is six years old, describes one atypical training run, and modern figures vary by more than an order of magnitude. It is also unusable as a comparison for a child: nobody has any feel for 700,000 km.
- Neither claim carries a date or a source, in the one place in the guide where a source would model the behaviour the book is asking for.

**Proposed replacement:**
> "All the world's data centres — the huge warehouses full of computers, including the ones that run AI — used about as much electricity in a year as the whole of France (that was in 2022). And researchers once measured one very big AI being trained: it made about as much CO₂ as five cars make in their entire lives. That's why scientists are working on 'green AI' — and why it's fair to ask any company: how much power did *that* use?"

### 1.2 Internal contradictions

**A. The flat contradiction in ch5 — must fix.**

> **ch5, "What can AI do?":** "... Detect illness from x-rays and MRI scans ..."
> **ch5, "What can AI not do?":** "Detect illness from x-rays and MRI scans Stop a war Think out of the box ..."

The identical phrase is the **first item in both lists**, on the same screen. This is almost certainly a copy-paste error in assembling the second list, and it has been carried into both translations. It also collides with ch7 ("Spots cancer in X-rays"), ch8, ch9 ("Detects cancer early") and ch12 ("AI Doctor... spot diseases in scans").

**Fix:** delete it from "What can AI not do?" and replace with something genuinely outside AI's reach and in keeping with the list's tone: **"Decide on its own what should happen to a patient"**.

**B. "Innovate" — ch1 contradicts ch5.**

> **ch1:** "Digital · Artificial Intelligence: the human-made ability to learn, understand and innovate"
> **ch5, cannot do:** "Think out of the box"

The guide's **very first definition of AI** grants it the ability to innovate, and four chapters later denies it. Since ch1's grid is built to be read as a parallel — human intelligence in one column, artificial in the other — the parallel construction actively asserts equivalence.

**Fix ch1:** "Artificial Intelligence: a human-made way for computers to spot patterns and solve problems." Keep "learn, understand and innovate" for the human column only; the asymmetry is the point of the chapter.

**C. Ling is both a 12-year-old and a professor.**

> **Meet the gang:** "Ling · Age 12, science geek & reader"
> **ch5:** "Hello, I'm Professor Ling."
> **ch6:** "Prof. Ling — Hong Kong · AI & Finance"
> **ch11:** "Hi, I'm Ling — one more question!"

The same name is a child in one quiz and a professor in another, with a third Ling on the world map. A young reader tracking the characters — which is exactly what the character device asks them to do — will be confused. **Fix:** rename either the child or the professor. Given the professor is currently a placeholder anyway (§8), rename the professor.

**D. The gallery tells the child to upload, then tells the parent the child must not.**

> **Gallery:** "**Share it.** Upload it below with your first name, age and country."
> **Gallery, immediately below:** "Please submit this on your child's behalf."

Step 3 of a numbered child-facing instruction is contradicted by the note underneath it. See §7.

**E. "The jobs of the future haven't even been invented yet! But we know they'll involve AI." (ch12)** — if they have not been invented, we do not know. Small, but it is precisely the overclaiming habit the guide should be modelling against. **Fix:** "But it's a good bet a lot of them will involve AI."

**F. Asymmetric confidence about jobs (ch10).**

> "Some jobs **may** disappear / New jobs **will** appear too!"

The bad news is hedged, the reassurance is certain. Both are forecasts; give them the same modality. **Fix:** "Some jobs will change or disappear / New jobs will appear too — that's what happened last time".

**G. "Digital · Computer: a digital processor of data to help us make sense of complex numbers" (ch1)** — reductive and wrong; the same chapter says data includes ideas, thoughts and knowledge in electronic files. **Fix:** "Computer: a machine that works on data — words, pictures, sounds and numbers — very fast."

### 1.3 Other overclaims to soften

| Chapter | Quote | Problem | Fix |
|---|---|---|---|
| ch14 quiz | "Scientists predict AI could help us end malaria, significantly reduce world hunger and dramatically slow climate change within your lifetime." | Three enormous forecasts, no source, no hedge, and **malaria is never mentioned anywhere in the body text** — the question is unanswerable. Also: "the common cold" is at least as plausible a guess to a child. | Teach it first, or replace. Suggested answer text: "Some scientists hope AI could help wipe out malaria. Nobody can promise that. But AI is already helping to find new malaria medicines faster — and that's a real start." |
| ch6 | "Uses AI to design new medicines 100x faster than traditional methods." | "100x" is a marketing figure with no basis. | "Uses AI to help find new medicines much faster than we used to." |
| ch9 | "Translates sign language" | Sign-language translation AI is experimental and the claim is contested by Deaf communities. Stated here as a solved capability. | "Is learning to read sign language" |
| ch13 quiz | "What's the most in-demand AI skill, **according to AI experts**?" -> "Curiosity and creativity" | No expert is named. The claim is defensible (WEF *Future of Jobs* consistently ranks analytical and creative thinking, curiosity and lifelong learning at the top) but is presented as folklore. | "In a big survey of employers around the world, the top skills weren't coding — they were creative thinking and curiosity." |
| ch1 quiz | "It's true — 'Will AI take over the world?' is the question people ask most!" | Unverifiable, unsourced, and "It's true —" responds to a yes/no the child never gave. | "That's the one! It's one of the questions people ask about AI more than any other." |
| ch2 | "AI went through ALL of these stages before becoming the amazing technology we have today." | The Gartner Hype Cycle is a proprietary consulting model, not a research finding; and the claim that AI has come out the far side into "steady usefulness" is contested — many would say AI is currently at the peak, not the plateau. | "People who watch new technology say it usually goes this way: big excitement, then doubt, then it quietly becomes useful. AI has already been round this loop a few times — and some people think we're near the top of the excitement bit right now." |
| ch14 | "Zero turbulence predictions" | Not meaningful English — predicting zero turbulence, or predictions with zero turbulence? And it over-promises. | "Warnings before bumpy air" |
| ch14 | "Personalised cancer cures" | "Cures" is a promise no oncologist would make to a child, some of whom will have family with cancer. | "Treatments matched to one person" |
| ch14 | "Preserved art for centuries" | Unclear. | "Old paintings repaired and kept safe" |
| ch4 | "AI once thought a chihuahua was a blueberry muffin! (Yes, really!)" | This is an internet meme illustrating a genuine difficulty, not a documented production failure. The parenthetical "(Yes, really!)" asserts more than is known. | "Pictures of chihuahuas and blueberry muffins look so alike that image AIs really do mix them up — try it yourself!" |

---

## 2. Reading level

### 2.1 Where the text actually sits

| Measure | Score | Implied age |
|---|---|---|
| Flesch Reading Ease | 71.0 | 11–13 |
| Flesch–Kincaid Grade | 6.1 | 11–12 |
| SMOG | 9.3 | 14–15 |
| Gunning Fog | 8.7 | 13–14 |
| Average sentence length | 11.0 words | acceptable |
| Words of 3+ syllables | 10.7% | high (target <=7% for this band) |

The measures diverge for a diagnostic reason. **Sentence length is fine; vocabulary is not.** The author has done the easy half of the job — short sentences — and not the hard half. Flesch–Kincaid, which weights sentence length heavily, is flattered; SMOG and Fog, which weight polysyllables, are not. For expository non-fiction, the polysyllable measures are the better predictor, because it is the unfamiliar abstract noun, not the long sentence, that stops a nine-year-old.

Worse, **the formulas cannot see the hardest text in the guide.** Roughly 200 of the 790 lines are bullet fragments — "Fairness must be designed in", "Carbon capture AI", "Lab-grown proteins", "Real-time climate modelling" — which have no finite verb and are therefore skipped by every readability formula. These carry the densest abstract vocabulary in the document. The true load is above the figures.

**My working assessment: the text reads at age 11–14.** It serves the top third of its stated band and excludes the bottom half. A seven-year-old cannot read this alone. A nine-year-old will stall roughly once per paragraph.

### 2.2 The vocabulary pushing it up

These are Tier 2 and Tier 3 words used without definition, in a guide that has a glossary and could have defined them.

| Chapter | Word | Why it fails | Replacement |
|---|---|---|---|
| ch4 (chapter heading) | "automate" | Abstract Latinate verb; used in the *chapter title*, its most prominent position, and never defined. | "do jobs by itself" |
| ch15 | "non-negotiable" | Business idiom built on a negated abstract noun. Almost certainly the single hardest item in the guide. | "This is why a human must always be checking. Always." |
| ch15 | "human oversight of AI" | Homograph trap: to a child, an *oversight* is a mistake. The sentence therefore reads as its own opposite. | "why humans must keep watch over AI" |
| ch15 | "AI doesn't have a heart or **conscience**" | Abstract moral noun, undefined. | "AI doesn't have a heart, and it doesn't know right from wrong. You do." |
| ch11 (quiz answer) | "uses secret **surveillance**" | Formal Latinate noun. | "watches people secretly" |
| ch11 (quiz answer) | "AI that **manipulates** children" | Abstract, and ironically opaque in the sentence most about protecting the reader. | "AI that tricks children" |
| ch11 (quiz answer) | "its **landmark** AI Act" | Figurative sense of a concrete noun — the hardest kind of word for a young reader. | "its big new AI law" |
| ch6 | "don't **discriminate** against anyone" | Undefined; also the guide's only use. | "treat some people worse than others" |
| ch6, ch10, ch15 | "biases", "biased data", "biased" | Used three times, across three chapters, never once defined, and **tested nowhere**. This is a load-bearing concept of the whole guide. | Define it in ch10 in place — "**Bias** means leaning one way without a good reason" — and add it to the glossary. |
| ch6, ch8, ch12, ch14 | "personalise / personalised" | Used four times, never defined. | "made just for you" |
| ch12, ch14 | "sustainably / sustainable" | Abstract, four syllables, undefined. | "without using things up" |
| ch8 | "Tracks deforestation" | Compound Latinate noun. | "Spots forests being cut down" |
| ch9 | "Makes tech **accessible**" | Abstract. | "Makes gadgets work for everyone" |
| ch9 | "Does **repetitive** tasks" | Abstract. | "Does the same boring job over and over" |
| ch13 | "**UI/UX** design" | An unglossed industry acronym in a list for children. | "designing what apps look like and how they feel to use" |
| ch14 | "Lab-grown proteins", "Carbon capture AI", "vertical farms" | Three unglossed technical compounds in one chapter. | "Meat grown in a lab", "AI that helps trap CO₂", "farms stacked up inside buildings" |
| ch11 | "Transparency" | Defined in place — good. Keep as the model for the others. | — |

### 2.3 The longest and most nested sentences — where to cut

**1. The worst sentence in the guide (ch2, 33 words, three separate structural problems):**
> "AI is a type of computer programme that can learn from information (we call it DATA), spot patterns, make decisions, and get better over time — without being told every single step to follow."

A relative clause, a mid-sentence parenthetical gloss that interrupts the object, a four-item verb series, and a trailing em-dash clause containing a **passive with a negated participle**. This is the guide's core definition of AI. It is currently the least readable sentence in it.

**Cut into four:**
> "AI is a computer programme that learns. It learns from information — we call that information **data**. It spots patterns in the data, and it uses them to make decisions. And here's the clever part: nobody has to tell it every single step."

**2. The chapter 4 heading (24 words used as a title):**
> "Artificial intelligence is a type of intelligence created by humans in the digital world to help automate tasks in the physical environment"

A full sentence with two prepositional phrases and an undefined Latinate verb, in the largest type on the page. Headings should be four to six words for this age.

**Cut to:** "Inside a computer" — and move the long sentence into the body if it is wanted at all.

**3. ch1 opener (23 words, with the subject–verb pair split by a parenthesis):**
> "Before we explain what Artificial Intelligence (also known as AI) is, we need to understand how it is related to our everyday world."

"what Artificial Intelligence ... is" is broken apart by seven words. The child must hold "what AI" in memory across the bracket to reach "is". Compounded by a fronted subordinate clause and a formal register ("is related to").

**Cut to:** "First, a question. AI lives inside computers. But *you* live out here — so how do the two fit together? Let's look."

**4. ch1 quiz answer (fronted conditional + double appositive):**
> "As long as people stay in charge and use it responsibly, AI is here to help us, not replace us."

**Cut to:** "AI is a tool. People built it and people control it. As long as we stay in charge, AI is here to help us — not to replace us."

**5. ch2 fun fact (22 words, four nested quotation marks, an equals sign standing in for a verb):**
> "The word 'Artificial' means 'made by humans' and 'Intelligence' means 'the ability to learn and understand.' Together = smart computers made by people!"

**Cut to:** "**Artificial** means *made by people*. **Intelligence** means *being able to learn*. Put them together and you get: smart computers, made by people."

**6. Glossary, Artificial Intelligence (23 words)** — see §5.

**7. Glossary, Humanities (23 words)** — see §5.

**8. Final quiz preamble (22 words with a mid-sentence reversal, plus a passive):**
> "There's only one correct answer for each question — but your final score and medal are only revealed at the very end!"

**Cut to:** "Each question has one right answer. You'll find out your score and your medal right at the end."

---

## 3. Structure and pacing

### 3.1 The tile problem is larger than four chapters

The brief asks about chapters 7, 8, 9 and 14. The actual run is **chapters 7 through 14 inclusive — eight consecutive chapters**, and 7, 8, 9, 10, 13 and 14 are all the *identical* form: a one-sentence intro, then a six-item grid of noun-phrase bullets.

| Ch | Form | Items |
|---|---|---|
| 7 | 6-tile grid (flip cards) | Healthcare, Transport, Entertainment, Smartphones, Weather, Food |
| 8 | 6-tile grid, 4 bullets each | Fashion, Environment, Art & Music, Education, Space, Defence |
| 9 | 6-tile grid, 4 bullets each | Saves Lives, Helps Everyone, Helps the Planet, Better Learning, Science Booster, Saves Time |
| 10 | 6-tile grid, 4 bullets each | Deepfakes, Privacy, Unfair AI, Job Changes, Fake News, Over-Reliance |
| 11 | 5-item list + 4-item list | The 5 Principles; staying safe |
| 12 | 8-card list | Eight AI careers |
| 13 | 6-tile grid | Maths, Computing, Science, Languages, Art & Design, Humanities |
| 14 | 6-tile grid, 4 bullets each | Aviation, Climate, Disease, Fashion, Art & Music, Food |

That is roughly **53 tiles and 160 bullet fragments in a row**, more than half the guide's total content, in one visual and grammatical shape. Connected narrative prose effectively **stops after chapter 4**. Ch5 onwards is almost entirely lists.

The consequence for a young reader is specific and predictable: bullet grids are *scanned*, not read. After the third consecutive grid a child stops processing individual items and starts pattern-matching the layout. Chapters 10 and 11 — the risk chapter and the safety chapter, the two most important in the book — sit at position five and six in that run, and are the most likely to be skimmed.

**Recommendations:**
1. **Break the run with prose at least twice.** Chapter 10 (risks) and chapter 11 (safety) should be narrative, not grids — these are the chapters that need the reader slowed down. A short story about one deepfake, told properly, will teach more than 24 bullet fragments.
2. **Merge ch8 into ch7.** They are the same chapter ("where AI shows up") split across two screens for no reason the reader can see. Twelve domains is too many; eight is plenty.
3. **Merge ch9's "Better Learning" tile into ch8's "Education" tile** (they are near-duplicates — see below) and cut ch9 from six tiles to four.
4. **Vary the item count.** Every grid being exactly six tiles of exactly four bullets is itself a signal to the reader that the content is filler.
5. **Give chapter 7's environmental fact its own home.** It currently arrives as an unheralded downbeat paragraph at the bottom of the cheeriest chapter, with no transition from "AI is EVERYWHERE around you!" It is also the *only* cost-of-AI content in a guide containing three separate "AI helps the planet" tiles. The balance currently runs roughly 12 positive environment bullets to 2 sentences of cost.

### 3.2 Items that repeat across chapters

Verified by comparison of all bullets and tile titles:

| Repeated content | Where |
|---|---|
| **Education / Better Learning** — near-verbatim duplicate tile: "Personalised lessons / Instant feedback / Language translation / Answers your questions" vs "Explains in YOUR way / Gives instant feedback / Translates any language / Works at your own pace" | **ch8 + ch9** — the sharpest duplication in the guide. Merge. |
| **Fashion** — identical tile title, overlapping content | ch8 + ch14 |
| **Art & Music** — identical tile title | ch8 + ch14 |
| **Detecting illness in scans** | ch5 (twice — see §1.2), ch7, ch9, ch12, ch14 — **five chapters** |
| **Food waste** — "food waste reduction" / "Reduces food waste" / "reduce waste" | ch7, ch9, ch12 |
| **Recipes** — "recipe suggestions" / "AI chefs & recipes" | ch7, ch14 |
| **Translation** | ch5, ch6, ch8, ch9, ch13 — five chapters |
| **Climate / environment** | ch8, ch9, ch12, ch14 |
| **Aviation / autopilot** | ch7, ch14, glossary |
| **Deforestation / rainforest** | ch6, ch8 |
| **Cyber attacks** — the glossary "Defence" entry is a straight restatement of the ch8 Defence tile, adding nothing | ch8, glossary |
| **"Check your sources"** — "ALWAYS check sources!" / "Check multiple sources!" in adjacent tiles of the same chapter | ch10 (twice) |
| **Duplicate heading** — "What can AI do?" appears twice in immediate succession | ch5 (lines 222 and 224) — likely a template artefact; verify in source |

Cutting the duplicates would remove roughly 15 tiles' worth of content and cost the reader nothing.

### 3.3 The ending has no ending for the child

The guide finishes: farewell line -> quiz -> glossary -> **"Want to know more about the project, the team, or how to support it? Get in touch"**.

The last thing a child reads is a **fundraising and contact call-to-action aimed at adults**. There is no child-facing close: no recap of the five principles, no "here's what to do tomorrow", no return to the eight friends who opened the book. A guide that spends fifteen chapters building a relationship with a young reader should not hand them off to a contact form.

**Fix:** add a short child-facing close after the glossary — three or four sentences, in the voice of the friends, restating the one rule that matters ("AI is a tool. You're the one who decides.") and one concrete thing to do. Keep the adult CTA, but put it *after* that, visually separated.

---

## 4. The final quiz

### 4.1 The quiz is beatable without reading the guide

Two exploitable patterns, both measured across all ten questions:

**Pattern A — the correct answer is the longest option in 7 of 10 questions.**

| Q | Correct answer | Length | Longest? |
|---|---|---|---|
| 1 | Artificial Intelligence | 23 ch | longest |
| 2 | Data | 4 ch | shortest |
| 3 | A hallucination | 15 ch | longest |
| 4 | ChatGPT | 7 ch | middle |
| 5 | Your full name and address | 26 ch | longest |
| 6 | A fake video, photo or voice that looks or sounds real | 54 ch | longest (by 31 characters) |
| 7 | Humans | 6 ch | shortest |
| 8 | Take pictures inside your body | 30 ch | longest |
| 9 | Using AI so much you stop thinking for yourself | 47 ch | longest |
| 10 | Use it safely and always double-check | 37 ch | longest |

A child who has read nothing and simply picks the longest option scores **7/10** and is awarded a medal. In Q6 the correct answer is more than twice the length of both distractors combined.

**Pattern B — the correct answer is never option C.** Positions run **A, B, A, A, B, B, A, A, A, B**: six A, four B, **zero C**. A child who eliminates the third option loses nothing across the entire quiz. Combined with Pattern A, guessing is close to trivial.

**Fixes, in order:**
1. **Shuffle option order at render time**, or manually redistribute so each position carries three or four correct answers.
2. **Length-match every option set to within about 25%.** For Q6: "A real photo taken by a camera" / "A fake video or voice made by AI that looks and sounds real" (correct) / "A small part inside a computer". For Q9: "Doing things for yourself instead of asking AI" / "Using AI so much that you stop thinking for yourself" (correct) / "Finding and fixing mistakes that AI makes".
3. Verify the same two patterns hold in the German and French editions, where translation will have changed every string length. Length-matching must be redone per language, not inherited.

### 4.2 Questions answerable without the guide

Four of ten test general common sense or brand recognition rather than anything the guide teaches:

- **Q1 "What does AI stand for?"** — acceptable as a warm-up, but tests nothing.
- **Q5 "What should you NEVER share with an AI chatbot?"** — any child answers this from ordinary online-safety teaching. Distractors ("your favourite colour", "your favourite animal") are transparently non-answers.
- **Q7 "Who should always be checking AI's work?"** — the distractors are "No one" and "Other AIs only". No child picks either.
- **Q10 "What's the best way to use AI?"** — pure values-guessing. Distractors are "Believe everything it says" and "Give it your passwords".

Together with the length heuristic, a child who has read none of the guide can be expected to score 8 or 9.

**Fix:** replace Q5, Q7 and Q10 with questions that require the body text. Suggested:
- *"Machine learning has six steps. What happens straight after an AI is trained?"* -> "It gets tested on things it has never seen before" (ch3, currently untested)
- *"An AI learns to spot cats from 10,000 photos of cats. What is that kind of learning called?"* -> "Supervised learning" (ch3, currently untested)
- *"Why can an AI end up treating some people unfairly?"* -> "Because it learned from data that was already unfair" (ch10, ch15 — the guide's central ethical idea, currently untested)

### 4.3 Concepts tested that are not taught before the quiz

- **Q8, MRI** — "MRI" appears once in the body (ch5, in a list) and is never explained. Its only definition is in the **glossary, which is positioned after the quiz**. The child is asked a question whose answer arrives on the next screen. The question is also not about AI at all; it is a general medical-knowledge question. **Cut it,** or move MRI into ch7's Healthcare card in the body.
- **Q4, ChatGPT** — named once in passing in ch3 ("GPT-4, the AI behind ChatGPT"); never explained as a chatbot until the glossary, again after the quiz. Also depends on the child recognising Photoshop and Excel, which a seven-year-old will not.
- **Q3, "hallucination"** — properly taught in ch4, but the word is **missing from the glossary** despite being quiz-tested. Add it.

### 4.4 What the quiz does not test at all

The quiz omits nearly all of the guide's actual teaching: machine learning and its six steps (ch3), the three kinds of learning (ch3), neural networks and deep learning (ch3), hardware/software/binary (ch4), the five principles of responsible AI (ch11), the careers and subjects (ch12–13), and — most strikingly — **bias and fairness**, which is the moral centre of chapters 10, 11 and 15 and appears in the quiz nowhere.

What the quiz *does* test is vocabulary and safety slogans. It is a glossary test wearing a quiz's clothes. Rebalancing it around the conceptual content would also solve most of the guessability problem, since concepts cannot be guessed from option length.

### 4.5 A pattern in the in-chapter quizzes worth naming

Across the ten character quizzes, the correct answer is repeatedly **the most extreme or most astonishing option**: 1.8 *trillion* (not million or billion); *0.1 seconds* (not 1 minute or 20 minutes); *5 days* (not 5 months or 5 years); *42 days* (not 42 weeks or 10–15 years).

A child who takes the intended lesson from this — "when three numbers are offered, the most amazing one is true" — has learned the precise opposite of what a guide about checking sources should teach. And in three of those four cases the amazing number is, as established in §1, **not actually true**.

**Fix:** in at least two of the ten, make the correct answer the *unremarkable* option, and say so in the answer text: "Not as fast as you'd think, is it? When a number about AI sounds too amazing, that's exactly when to check it."

---

## 5. The glossary

### 5.1 Order — pass, with a warning about the translations

The English glossary is correctly alphabetical: Artificial Intelligence, Aviation, ChatGPT, Deepfake, Defence, Fake News, Food Engineer, Humanities, Magnetic Resonance Imaging, Over-Reliance, Privacy. Findable.

**But the ordering rule was not stated to the translators, and one edition has already broken.** The German glossary was correctly re-sorted (ChatGPT, Deepfake, Fake News, Geisteswissenschaften, Künstliche Intelligenz, Lebensmitteltechnik, Luftfahrt, Magnetresonanztomografie, Privatsphäre, Verteidigung, Zu viel Verlass). The **French glossary was not**: it retains the English sequence (Intelligence artificielle, Aviation, ChatGPT, Deepfake, Défense, Fausses informations, Ingénieur alimentaire, Sciences humaines, Imagerie par résonance magnétique, Trop compter sur l'IA, Vie privée), which in French is not alphabetical at all. The French glossary is currently unusable as a reference.

This is a *source-level* defect: the English file gives no instruction that the list is sorted. **Fix:** add a translator note to the source — "Glossary entries are alphabetical **in each language**; re-sort after translating."

### 5.2 The entry list is the wrong set of words

Eleven entries. **Four of them — Aviation, Defence, Food Engineer, Humanities — are chapter tile labels, not AI vocabulary.** They appear once each, as headings, and no child pauses on them. The glossary appears to have been assembled by harvesting headings rather than by asking which words stopped the reader.

**Entries to cut or demote:**

| Entry | Why | Verdict |
|---|---|---|
| **Aviation** | Occurs once, as a ch14 tile title. Definition ("The science of flying planes") teaches nothing a child needed. | Cut |
| **Defence** | Occurs once, as a ch8 tile title. Definition is a straight restatement of that tile's four bullets. | Cut |
| **Food Engineer** | Occurs once, as part of the job title "AI Food Engineer" (ch12). Not a term the reader needs. | Cut |
| **Humanities** | Defensible (ch13), but the definition is harder than the headword — see below. | Rewrite or cut |

**Entries that must be added.** Each of these is used in the body, is load-bearing, and is currently undefined:

| Word | Where used | Suggested definition |
|---|---|---|
| **Data** | ch2 ("we call it DATA"), ch3, ch10 — the single most important word in the guide, and quiz-tested (Q2) | "All the information an AI learns from: photos, words, numbers, sounds. Data is to an AI what food is to you." |
| **Machine learning** | ch3, capitalised as a term and given a whole chapter | "When a computer learns to do something by looking at thousands of examples, instead of being told the rules." |
| **Bias** | ch6, ch10, ch15 — used three times, the moral centre of the book | "Leaning one way without a good reason. If an AI learns from unfair examples, it learns to be unfair too." |
| **Hallucination** | ch4, and **tested in the final quiz** | "When an AI makes something up and says it as if it were true. It isn't lying — it just doesn't know it's wrong." |
| **Neural network / Deep learning** | ch3 | "A way of building AI in layers, a bit like the connected cells in your brain. More layers means 'deep' learning." |
| **Parameter** | ch3 quiz, in the phrase "1.8 trillion parameters" | "One of the tiny 'dials' inside an AI. It turns them, millions of times, until it starts getting answers right." |

Note on **Algorithm**: it does not appear anywhere in the body text. Given that it is the word children are most likely to have already heard about AI, its absence is itself worth reviewing — but do not add a glossary entry for a word the guide never uses.

### 5.3 Definitions that are not simpler than their headwords

- **Artificial Intelligence (AI)** — "A type of intelligence created by humans that helps computers learn, think and solve problems — like a very fast, very hardworking digital brain."
  Three problems. It defines *intelligence* with *intelligence*. It is 23 words with an em-dash appositive. And "a very fast, very hardworking **digital brain**" anthropomorphises AI in exactly the way ch11 spends a whole panel warning against ("AI is NOT a friend... It doesn't have feelings").
  It is also the **third different definition of AI in the guide** — ch1 says "the human-made ability to learn, understand and innovate", ch2 says "a type of computer programme that can learn from information", the glossary says "a type of intelligence created by humans". Pick one and repeat it verbatim in all three places.
  **Proposed:** "A computer programme that learns from lots of examples instead of being told every step. It is a tool people built — it is not alive and it does not think the way you do."

- **Humanities** — "Subjects like history, ethics and philosophy that help us understand people, society and right from wrong — skills AI still can't fully replace."
  "Ethics", "philosophy" and "society" are all harder than the headword. And the final clause is a claim, not a definition.
  **Proposed (if kept):** "School subjects about people: history, and thinking about what's right and wrong."

- **Fake News** — "False information made to look true..."
  "False information" is a harder register than "fake news".
  **Proposed:** "Made-up stories dressed up to look like real news. AI can now write them very fast — so check where a story came from."

- **Magnetic Resonance Imaging (MRI)** — a seven-year-old cannot decode "Magnetic Resonance" and does not need to.
  **Proposed headword:** "**MRI scan**" — "A big machine that takes pictures of the inside of your body without cutting you open. AI helps doctors read the pictures."

- **Over-Reliance** — the definition is good, but the headword is a hyphenated abstract noun and is arguably the hardest word in the glossary.
  **Proposed headword:** "**Over-reliance (leaning on AI too much)**".

- **ChatGPT** — "...by predicting the best next words to say."
  Nearly right, and the "predicting next words" gloss is genuinely good for this age. But **"best" is the wrong word**: it implies the answer is correct, which quietly undercuts the hallucination lesson four chapters earlier.
  **Proposed:** "...by guessing, one word at a time, which word is most likely to come next. That's why it can sound sure of itself and still be wrong."

### 5.4 One structural point

The glossary sits **after** the final quiz. Two quiz questions (Q4 ChatGPT, Q8 MRI) can only be answered from it. Move the glossary before the quiz, or remove the dependency.

---

## 6. Voice and consistency

### 6.1 The safety message breaks at the farewell — must fix

> **ch11:** "Remember: AI is NOT a friend, it's a tool. It doesn't have feelings or truly care about you."
> **ch5 quiz:** "It can sound caring because it's trained on how humans talk, but there's no real feeling behind the words."
> **[guide-farewell]:** "**If you use me safely, we can do miracles!**"

The guide's emotional climax — the last thing before the quiz, almost certainly set in large type — is **the AI speaking in the first person, using "we", promising "miracles"**. There is no attributed speaker; the "me" can only be the AI. Every element of ch11's warning is reversed in one sentence: it speaks, it has a relationship with the child ("we"), and it makes a promise.

"Miracles" compounds it. It is a supernatural claim about a machine, and it carries religious weight in all three languages (DE *Wunder*, FR *miracles*) — an odd note for a guide about checking evidence.

**Proposed replacement:** Give the line back to the human characters and keep the message intact:
> "AI is a tool. A brilliant one — but just a tool. **You're** the one who decides what it's for. Use it wisely, and there's an awful lot you could do with it."

**Related, smaller:** ch14 lists "**Mental health support bots**" as an unqualified future good, three chapters after telling the child that AI cannot care about them. Either cut it or qualify it: "Bots that can listen at 3am — but a real person is still better."

Also **ch2**: "Think of it like a brain made of maths and computer code!" and the glossary's "digital brain" push in the same anthropomorphic direction. The guide should pick one line on this and hold it everywhere.

### 6.2 The character voice does not hold

**Ling is two people** — see §1.2C.

**Two consecutive "last" questions:**
> **ch14:** "Hey, it's Ronan — **one last one**!"
> **ch15:** "Hi, I'm Fleur — **last one**!"

Ronan closes the quizzes, then Fleur closes them again a chapter later. **Fix:** ch14 -> "Ronan again — here's a big one"; keep Fleur's "last one" in ch15.

Related: **ch11** "Hi, I'm Ling — **one more question**!" also signals an ending, with four quizzes still to come.

**Nallah never appears.** The eight friends are introduced by name with a personality each; across ten quizzes, Ronan, Katerina, Fleur and Ling each get two, Anish, Bembe and Rebecca one each, and **Nallah ("Age 11, chef & storyteller") gets none.** A child who has been asked to meet eight characters will notice. It is also a missed fit: the guide has a Food chapter (ch14) and a storytelling thread (ch8 "Writes stories") that are made for her. **Fix:** give Nallah the ch14 Food quiz.

**Register slips out of second person:**
> **ch5:** "AI can help **kids** by: ... Making internet safer for **them**"

The guide addresses the reader as "you" throughout; here it turns and talks *about* children to someone else. (It also drops the article: "the internet".) **Fix:** "AI can help **you** by: ... Making the internet safer for you."

**Two grammar errors in a single tile (ch9, "Helps Everyone"):**
> "Reads text aloud for blind" — ungrammatical, and the noun-as-group framing ("the blind") is dated.
> "Helps speech difficulties" — ungrammatical; AI helps *people with* speech difficulties, not the difficulties.

In a literacy product these two need fixing on their own terms. **Fix:** "Reads out loud for people who can't see" / "Helps people who find speaking hard".

### 6.3 The parent note — register shift is correct

> **Gallery:** "A note for parents & guardians — Please submit this on your child's behalf. We only ever ask for a first name, age and country — never a last name, email or exact location. Every picture is reviewed by a real person before it appears publicly, so nothing goes live automatically."

This is well judged: clearly signposted, addressed to adults, adult register ("on your child's behalf", "reviewed by a real person"), and its passive constructions are appropriate here. The information is exactly what a parent wants and answers the safeguarding question before it is asked. **Keep as is** — apart from the contradiction with the step above it (§7.1) and a typographic slip: "Just let us know **.**" has a space before the full stop.

---

## 7. Instructions that assume an adult or a classroom

The guide is plainly designed to be read by a child alone — "you" throughout, characters as companions, a self-marking quiz. Four places break that assumption.

### 7.1 The gallery contradicts itself about who does the uploading — must fix

> "**Share it.** Upload it below with your first name, age and country."
> *(immediately below)* "Please submit this on your child's behalf."

The child is given the instruction as step three of a numbered sequence, then the note underneath tells the parent that the child must not do it. A nine-year-old reading alone will follow the numbered step.

**Fix:** rewrite step three for the child so it points at the adult: "**Share it.** Ask a grown-up to upload it for you — they'll need your first name, your age and which country you're in. (Grown-ups: the note below is for you.)"

### 7.2 The gallery tells a child to use an AI image generator

> "What do YOU imagine AI looks like? Draw it and take a photo, **or try generating a picture with an AI tool** — then share it with kids around the world below!"

Two problems. First, most general-purpose AI image generators set a minimum age of 13 or 18 in their terms of use; the guide is directing 7-to-12-year-olds to them without qualification. Second, it sits oddly against ch11's own rule — "Don't upload photos of yourself or your friends to AI websites without a parent's permission" — which the child has not yet read at this point in the guide (the gallery comes after ch5; ch11 is six chapters later).

**Fix:** "Draw it on paper and take a photo. (If you'd like to try making one with an AI picture tool instead, ask a grown-up to help — most of those tools are meant for adults.)"

### 7.3 "Ask your teacher to show you the graph"

> **ch2:** "The 'Gartner Hype Cycle' shows how new tech goes through peaks of excitement, then doubt, then steady usefulness... **Ask your teacher to show you the graph!**"

Assumes a classroom and a teacher, in a book read at home, on holiday, or by a child without one. It is also unnecessary — the graph's labels are printed directly above ("Excitement / Time / New idea! / Everyone's excited! / Uh-oh, tricky bits / Getting better… / It just works!"), so the child is being sent to an adult for something already in front of them.

**Fix:** "Look at the curve above — can you find the bit where everyone gets excited, and the bit where it goes wrong?"

### 7.4 What the guide gets right, and should keep

> **ch11:** "If AI says something that feels wrong or scary, tell a **trusted adult** immediately."
> **ch15:** "If you see AI being used unfairly or dangerously, tell a **trusted adult**."

"A trusted adult" is the correct formulation — it does not assume a parent, a teacher, or a household shape. It is used consistently in both places. This is the model the three fixes above should follow.

---

## 8. Unfinished and placeholder material

### 8.1 A live placeholder on the public page — must fix immediately

> **ch6, line 282:** "Prof. Ling — Hong Kong · AI & Finance
> **Placeholder: swap in Prof. Ling's real focus area and story here.**"

An authoring note has shipped as body copy, in the middle of a feature that promises "Meet 9 amazing professionals". It has been translated into German and French, which means three published pages currently carry it.

### 8.2 Two professor names that read as placeholders

> "Prof. **Goldilocks** — New Zealand · AI Chemistry"
> "Prof. **Shy Jeans** — Japan · AI Art & Culture"

"Goldilocks" is a fairy-tale character; "Shy Jeans" reads as a garbled or phonetic stand-in. In a section headed **"Real People, Real AI Jobs Around the World!"**, two of nine names are not credible as real people. Either these are placeholders, or they are real people whose names need checking with them — either way they cannot stand as they are, and if they are real, the guide needs their permission and their correct spelling.

Note also that this section names identifiable professionals with countries and specialisms; that requires consent on file for each, in three languages.

### 8.3 The page description says the wrong number of chapters

> **Line 3:** "_Page description:_ A walk through **the six chapters** of GR4AI..."

There are **fifteen** numbered chapters plus a gallery, quiz and glossary. This is the meta description — it is what appears in search results and link previews, and it is wrong in all three languages. Almost certainly a leftover from an earlier draft.

**Fix:** "A walk through all fifteen chapters of GR4AI, a non-profit book that introduces children aged 7–12 to artificial intelligence."

### 8.4 Smaller unfinished items

| Location | Quote | Problem | Fix |
|---|---|---|---|
| ch12 | "Keep scrolling to **shuffle through** all 8 careers" | Wrong idiom — to *shuffle* is to mix up, not to browse. | "Keep scrolling to flick through all 8 careers" |
| ch5 | Heading "What can AI do?" appears **twice** in succession (lines 222, 224) | Duplicate heading; likely a template artefact. | Verify in source and delete one |
| ch1 | "Physical **Information :** sharing of ideas..." — all eight rows use a space before the colon | French typographic convention in an English text; suggests the English was set from the French, or that the table structure has collapsed in extraction. | Verify in source; remove the spaces |
| ch2 | "AI stands for Artificial Intelligence **.**" | Space before full stop | Remove |
| ch3 | "GPT-4 (the AI behind ChatGPT **)**" | Space before closing bracket | Remove |
| Gallery | "Just let us know **.**" | Space before full stop; also a bare link with no visible contact route in the text | Remove space; make the link target explicit |
| End of file | The three result strings containing `${score}`, `${total}`, `${i + 1}`, `${r.question}`, `${r.correctText}`, `${r.picked}` and `<strong>`/`<span>` tags | Raw JavaScript template literals and HTML sit in the translatable text file. The placeholders and tags **must not be translated or reordered**, but nothing in the file says so. | Add a translator note: "Do not translate anything between the dollar-brace placeholders, and do not alter HTML tags." |
| ch1 | Headings "Physical world" and "Digital world" with no content beneath them | The comparison table has collapsed into a flat run of paired lines | Verify the table renders as two columns in the live page |

---

## 9. Priority order for the fix pass

**Before publication (all three languages):**
1. Remove the ch6 placeholder line; resolve "Prof. Goldilocks" and "Prof. Shy Jeans".
2. Correct the COVID vaccine claim (ch9).
3. Correct the AI hiring claim (ch15).
4. Correct the deepfake claim (ch10).
5. Correct or remove the 0.1-second scan claim (ch8), and fix the 12,000-scans arithmetic.
6. Delete "Detect illness from x-rays and MRI scans" from ch5's "cannot do" list.
7. Replace the farewell line "If you use me safely, we can do miracles!"
8. Fix the page description ("six chapters" -> fifteen).
9. Fix the gallery's upload contradiction and the AI-image-generator instruction.
10. Redistribute the final quiz's answer positions and length-match the options — in each language separately.

**Before publication, second tier:**
11. Qualify the electricity and CO₂ figures with dates and sources.
12. Qualify the 1.8-trillion-parameter answer; update "the AI behind ChatGPT".
13. Resolve the Ling name collision and the two "last question" sign-offs.
14. Add Data, Machine learning, Bias, Hallucination and Neural network to the glossary; cut Aviation, Defence and Food Engineer.
15. Add the translator note about glossary alphabetisation and re-sort the French glossary.
16. Fix "Reads text aloud for blind" and "Helps speech difficulties".

**For the next edition:**
17. Rewrite the ch2 core definition of AI and the ch4 chapter heading.
18. Break the eight-chapter tile run with prose at chapters 10 and 11.
19. Merge ch8 into ch7 and de-duplicate the Education/Better Learning tiles.
20. Rebuild the quiz around the guide's concepts rather than its vocabulary.
21. Add a child-facing close before the adult contact call-to-action.
22. Run the vocabulary substitutions in §2.2 to bring SMOG below 8.

---

*Prof. Ruth Kelleher · 7 September 2026*

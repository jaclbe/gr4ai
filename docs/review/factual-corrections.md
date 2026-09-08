# Factual claims flagged for correction — proposal for sign-off

Nothing here has been changed on the site. These are content decisions, and the same
claims are presumably in the book manuscript, so fixing only the website would leave
the book saying the wrong thing.

I verified each claim against primary or near-primary sources rather than relaying the
reviewer's assertion. Where the reviewer was right I say so; where the existing copy is
defensible I say that too.

Proposed replacements are in English only. Once you approve the wording I'll translate
into German and French to match, and re-check the quiz options that depend on them.

---

## 1. The COVID-19 vaccine — chapter 9 quiz · **correct, but for the wrong reason**

**Currently:** *"AI helped scientists design a COVID-19 vaccine in just 42 days — something
that used to take 10-15 YEARS! AI analysed millions of molecules to find the right
combinations."*

**What's true:** the 42 days is real. Moderna shipped the first clinical batch of mRNA-1273
to the NIH on 24 February 2020, 42 days after the viral sequence was identified.

**What's wrong:** the mechanism. The vaccine was "designed by Moderna in collaboration with
NIAID" from the published genetic sequence — the speed came from the mRNA platform, which
lets you go from a sequence to a candidate without growing anything in a lab. There was no
AI screen of millions of molecules; that describes small-molecule drug discovery, a
different process. As written, the guide credits AI for someone else's breakthrough — in a
book that teaches children to check sources.

**Proposed replacement:**

> Just 42 days! Scientists had the virus's genetic code on a Saturday and a vaccine designed
> within days — because mRNA vaccines are written a bit like software. It used to take 10 to
> 15 years. AI wasn't the hero of that story, but it is doing something just as big: an AI
> called AlphaFold has worked out the shapes of over 200 million proteins, which is the kind
> of thing new medicines are built from.

Keeps the number, keeps the wonder, gives AI a claim that is actually AI's.

---

## 2. The AI hiring tool — chapter 15 quiz · **wrong on three particulars**

**Currently:** *"An AI hiring system once rejected ALL women for engineering jobs because it
was trained only on male engineers' CVs! Humans caught the mistake and fixed it."*

**What's true:** Amazon built an experimental recruiting tool trained on ten years of CVs.

**What's wrong:**
- It was not trained *only* on men's CVs — it learned from ten years of applications, most
  of which happened to come from men. The distinction is the whole lesson: the data wasn't
  labelled "men", it was just lopsided, which is how real bias usually arrives.
- It did not reject *all* women. It penalised CVs containing the word "women's" (as in
  "women's chess club captain") and downgraded graduates of two all-women colleges.
- It was not fixed. Amazon tried to neutralise those terms, lost confidence that the model
  was fair on everything else, and scrapped it.

**Proposed replacement:**

> Amazon built an AI to sort job applications. It learned from ten years of CVs — and because
> most of them had come from men, it decided being a man was part of being good at the job.
> It started marking people down just for having the word "women's" on their CV, like
> "women's football team captain". People spotted it and switched the whole thing off. Nobody
> had asked it to be unfair. It learned that from us.

That last line is the point of the chapter and the current version buries it.

---

## 3. The deepfake theft — chapter 10 quiz · **two incidents merged**

**Currently:** *"In 2024, someone used AI to fake the voice of a bank manager and steal
millions of pounds."* The answer box then opens "Deepfake **videos** have fooled millions of
people!" — answering about video a line after asking about a voice.

**What's true:** in early 2024 a finance worker at the engineering firm Arup in Hong Kong
joined a video call on which the CFO and every other colleague present were AI-generated
fakes, and transferred about US$25 million. There is a separate, earlier voice-cloning case
involving a company director; the guide has fused the two.

**Proposed replacement:**

> A worker at a big engineering company joined a video call with his boss and several
> colleagues. Everyone on that call was fake — every face, every voice, made by AI. He sent
> the money because he had *seen* them. About £20 million, gone. This is why AI safety laws
> matter so much.

Stronger than the current version, and it fixes the voice/video mismatch.

---

## 4. The scan-reading speed — chapter 8 quiz · **the arithmetic fails**

**Currently:** *"AI can read a medical scan in just 0.1 seconds — the same job takes a human
doctor around 20 minutes! That means AI could help check 12,000 scans a day."*

**The problem:** at 0.1 seconds a scan, a day is 864,000 scans, not 12,000. A nine-year-old
did this on paper and couldn't tell whether the book or she was wrong. The 0.1-second figure
is also doing a lot of work — it is inference time for one model on one image type, not
"reading a scan", and comparing it to a radiologist's 20 minutes compares a stopwatch to a
job.

**Proposed replacement:**

> Very fast — about a second. A doctor takes longer, but the doctor isn't just looking at the
> picture. She's thinking about *you*: what else is in your notes, what you said hurt, what
> to do next. The AI does one small part of that job, very quickly indeed.

This also repairs the contradiction the reviewers found between this chapter and chapter 5's
"what AI cannot do".

---

## 5. Ending malaria — chapter 14 quiz · **unsupported, and untaught**

**Currently:** *"Scientists predict AI could help us end malaria, significantly reduce world
hunger and dramatically slow climate change within your lifetime."*

**The problem:** three large predictions attributed to "scientists" with no source, stated as
prediction rather than hope. Malaria is not mentioned anywhere in the body text, so the quiz
question asks children to recall something they were never told — it is guessable only
because the other two options are silly.

**Proposed replacement:**

> Some scientists hope AI could help wipe out malaria — it's already helping to find new
> medicines and to predict where mosquitoes will spread. Nobody can promise it. That's the
> honest answer, and the honest answer is the one worth having.

If you'd rather keep the question, the topic needs a sentence in the body of chapter 14 first.

---

## Two more that need qualifying rather than replacing

**GPT-4's parameters (chapter 3).** "1.8 trillion" comes from an unverified 2023 leak; OpenAI
has never published the figure. Suggest "around a trillion — nobody outside the company knows
for sure". Separately, "Your brain has about 100 trillion connections, so we're catching up
fast" compares two things that aren't comparable, and contradicts chapters 5 and 11, which
tell children an AI is not a brain. Suggest cutting the last clause.

**AI's electricity use (chapter 7).** "AI uses as much electricity in one year as some small
countries" is about data centres generally, not AI. The "700,000 km of driving" CO₂ figure
rests on a single 2019 study of one model and has been widely superseded. Suggest a dated,
attributed version, or cut the number and keep the point: training big AI models uses a lot
of energy, and that is why researchers work on making them smaller.

---

## Sources

- [Moderna ships first clinical batch of mRNA-1273, 24 Feb 2020](https://www.businesswire.com/news/home/20200224005955/en/Moderna)
- [Amazon ditched AI recruitment software because it was biased against women — MIT Technology Review](https://www.technologyreview.com/2018/10/10/139858/amazon-ditched-ai-recruitment-software-because-it-was-biased-against-women/)
- [Amazon scraps secret AI recruiting tool that showed bias against women — CNBC](https://www.cnbc.com/2018/10/10/amazon-scraps-a-secret-ai-recruiting-tool-that-showed-bias-against-women.html)
- [Why Amazon's automated hiring tool discriminated against women — ACLU](https://www.aclu.org/news/womens-rights/why-amazons-automated-hiring-tool-discriminated-against)
- [Arup revealed as victim of $25 million deepfake scam involving Hong Kong employee — CNN](https://www.cnn.com/2024/05/16/tech/arup-deepfake-scam-loss-hong-kong-intl-hnk)
- [Arup deepfake fraud scam, Hong Kong — Fortune](https://fortune.com/europe/2024/05/17/arup-deepfake-fraud-scam-victim-hong-kong-25-million-cfo)

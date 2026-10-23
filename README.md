# GR4AI — Get Ready For AI

The website for **GR4AI**, a non-profit book project that introduces kids ages 7 to 12 to artificial intelligence in a way that's fun, clear, and actually makes sense to them.

**Live at [gr4ai.org](https://gr4ai.org).**

Static site. No framework, no build step, no backend — just HTML files, a folder of images, and a contact form wired to a hosted service. It's cheap to run, impossible to break in subtle ways, and anyone who can edit HTML can edit it.

---

## The pages

| File | What it is | URL |
|---|---|---|
| `index.html` | **The interactive guide (English).** This is the homepage — 15 chapters, quizzes, flip cards, a glossary and a final quiz. | `gr4ai.org/` |
| `guide-de.html` | The same guide in German. | `gr4ai.org/guide-de.html` |
| `guide-fr.html` | The same guide in French. | `gr4ai.org/guide-fr.html` |
| `guide-es.html` | The same guide in Spanish. | `gr4ai.org/guide-es.html` |
| `guide-pt.html` | The same guide in Portuguese (Brazilian). | `gr4ai.org/guide-pt.html` |
| `guide-el.html` | The same guide in Greek. | `gr4ai.org/guide-el.html` |
| `about.html` | The project page (English): why the book exists, the chapters, the team and the contact form. | `gr4ai.org/about.html` |
| `about-de.html`, `about-fr.html`, `about-es.html`, `about-pt.html`, `about-el.html` | The project page in German, French, Spanish, Portuguese and Greek. | `gr4ai.org/about-de.html` … |
| `guide.html` | Redirect stub. The guide used to live here; it now sends visitors to `/` so older links and shares keep working. | `gr4ai.org/guide.html` |
| `_redirects` | Netlify redirect rules (`/guide.html` and `/guide` → `/`). | — |

The six guides link to each other through the EN/DE/FR/ES/EL/PT switch in the header. Each guide links to the about page **in its own language** (`about-xx.html`) for the book, the team and the contact form, and each about page has the same language switch and a button back to its guide.

---

## What's in here

```
gr4ai/
├── index.html              The interactive guide (EN) — the homepage.
├── guide-de.html           The interactive guide (DE).
├── guide-fr.html           The interactive guide (FR).
├── guide-es.html           The interactive guide (ES).
├── guide-pt.html           The interactive guide (PT).
├── guide-el.html           The interactive guide (EL).
├── about.html              The project page (EN): book, chapters, team, contact.
├── about-de.html …         The project page in DE, FR, ES, PT and EL (about-xx.html).
├── guide.html              Redirect stub → /
├── _redirects              Netlify redirect rules.
├── README.md               This file.
├── CONTRIBUTING.md         How to set up, edit, and ship changes.
├── DEPLOYMENT.md           The full operations manual: hosting, DNS, SSL, form, costs, troubleshooting.
├── LICENSE                 MIT (code only — see the note in the file about images).
├── .gitignore
├── assets/                 Every image the live site uses.
│   ├── favicon.svg              Browser tab icon
│   ├── card.jpg                 Social share image (Open Graph)
│   │
│   │   — used by the guide —
│   ├── ai-cloud.png             The AI cloud character
│   ├── brain-circuit.png        Chapter illustration
│   ├── world-map.svg            World map in the guide
│   ├── gang-*.jpg               The eight kids + the professor line-up
│   ├── prof-*.jpg               Professor portraits (also used on the world-map pins)
│   ├── brain-neurons.webp       Fallback picture for the brain animation in the "Neural Networks" box
│   ├── economics-finance.webp   Used for the "AI Banker" and "Economics" cards
│   ├── study-psychology.webp    "Psychology" card
│   ├── katerina-quiz.jpg        Quiz host photo
│   ├── daily-*.jpg              "AI in daily life" flip-card illustrations
│   ├── career-*.jpg             "Jobs with AI" flip-card illustrations
│   ├── study-*.jpg              "What to study" flip-card illustrations
│   │
│   │   — used by about.html —
│   ├── art.jpg, control-room.jpg, learning.jpg, puzzles.jpg    Hero collage
│   ├── puzzles-portrait.jpg     Side image in "The book"
│   └── *-photo.jpg              Team avatars
└── archive/
    └── source-images/      High-res originals, old Carrd illustrations, uncropped team
                            photos. Kept for reference. NOT used by the live site.
```

If a file isn't referenced by one of the HTML pages, it lives in `archive/`, not `assets/`. Keep that line clean so it's always obvious what actually ships.

## Things the guide does that are worth knowing

- **Glossary words.** Underlined words show their meaning on hover (a mouse) or tap (a phone). The definitions live only in the glossary at the end of the page; a word becomes a tooltip by being written as `<a href="#glossary-xxx" class="glossary-link">…</a>`.
- **Green AI scale (chapter 7).** A slider that tips a scale; its wording is in the page, one block per language.
- **Final quiz certificate.** After the quiz a child can type a name and get a one-page PDF certificate. It is made in the browser; the name is never stored or sent anywhere. All certificate wording is in one `TXT` block in each guide's script.
- **Enlarging pictures.** Career-card pictures open larger when clicked and close again on scroll.
- **"Neural Networks" box.** The two pictures are small animations drawn on a canvas: glowing brain cells that fire one after another (tap a cell to fire it), and data packets flowing through an artificial neural network. They only run while the box is on screen. If the script cannot run, or a visitor asked their device for less motion, the brain animation is replaced by the picture `assets/brain-neurons.webp`, and the data flow shows one still frame. The code is the `<script>` at the very end of each guide.

**A note on the illustrations.** The `daily-*`, `career-*` and `study-*` pictures were originally 1080×1080 PNGs at roughly 1.5 MB each — about 40 MB for the set, which made the guide unusable on a phone. They're stored as quality-86 JPEGs instead, same dimensions, about 5 MB for the set. If you add another one, export it as a JPEG at a similar size, and give every new `<img>` a `loading="lazy"` attribute.

---

## How to add a testimonial

The "What readers think" cards on the six about pages (Manuel's design, just above the contact form) are drawn from one file, `data/testimonials.json`. Adding a quote never touches the HTML, and the new quote appears in every language at once.

1. Open `data/testimonials.json` and add a block at the end of the list (mind the comma between blocks):
   ```json
   {
     "quote": "The quote, copied exactly as it was sent. Keep the original wording, spelling and punctuation.",
     "name": "Mrs Example",
     "role": "Teacher in year 4",
     "location": "Athens, Greece",
     "language": "en",
     "featured": true,
     "date_added": "2026-11-20"
   }
   ```
2. Fields:
   - `quote`: verbatim. Do not correct it; if something looks like a typo, ask whoever supplied it. A `"` inside the quote is written `\"`. A new paragraph is a blank line, written `\n\n`.
   - `name`, `role`, `location`: shown under the quote as the name, then "role · location". The round badge shows the initials (Mr, Mrs, Dr are skipped). Leave `role` or `location` as `""` if there is none.
   - `photo` (optional, adults only): e.g. `"assets/shamie-kumar.jpg"`, a square photo under 100 KB, used instead of the initials. Only with the person's permission.
   - `language`: the language the quote is **written** in (`en`, `de`, `fr`, `es`, `el`, `pt`). Quotes are not translated; this tells browsers and screen readers how to read it.
   - `featured`: `true` puts it before the others. Within each group, the newest `date_added` comes first.
   - `date_added`: `YYYY-MM-DD`.
3. **Children:** first name and age only, e.g. `"name": "Sofia, age 10"` with `role` and `location` left empty or just the country. Never a surname, school or photo. Adults can be named as they supplied it.
4. Check it locally (`python3 -m http.server 4173`), commit, deploy. A JSON typo makes the whole section disappear rather than break the page, so if the cards vanish, run `python3 -m json.tool data/testimonials.json` to find the mistake.

Quotes longer than about 320 characters show their first ~250 characters with a **Read more** button. The section's heading and button labels are in each about page's markup (`<section id="testimonials" data-read-more=… data-read-less=…>`), one set per language. The data file is loaded by the browser, so the cards only appear when the site is served (locally: `python3 -m http.server`), not when an HTML file is opened directly.

---

## Quick start

You need nothing but a browser to view it, and Python (already on every Mac) to serve it properly.

```bash
git clone https://github.com/jaclbe/gr4ai.git
cd gr4ai
python3 -m http.server 4173
```

Open <http://localhost:4173>. Edit the HTML, refresh, repeat.

Full setup, editing recipes, and the deploy steps are in **[CONTRIBUTING.md](CONTRIBUTING.md)**.

---

## The stack in one line

GitHub holds the source, Netlify hosts it for free with auto SSL, the domain is at united-domains, and the contact form runs on Web3Forms. Total cost is about €20 a year, all of it the domain. The complete operations manual lives in **[DEPLOYMENT.md](DEPLOYMENT.md)**.

---

## The team

In the order they appear on the about pages (a "What teachers think" section was prepared and then taken out again for now):

1. **Katerina Tapeinos** — student coauthor, age 9.5, the kids' voice
2. **Christina Malamateniou** — Assoc. Professor, AI in medical education (City St George's, University of London)
3. **Manuel Recker** — health economist and visual storyteller
4. **Susan Shelmerdine** — consultant paediatric radiologist (Great Ormond Street Hospital, UCL)
5. **Jan Beger** — global AI advocate, healthcare executive (HelloAI, GE HealthCare)

---

## License

Code is MIT. Images and branding are not. See [LICENSE](LICENSE).

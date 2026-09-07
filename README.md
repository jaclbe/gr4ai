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
| `about.html` | The project page: why the book exists, the chapters, the team and the contact form. | `gr4ai.org/about.html` |
| `guide.html` | Redirect stub. The guide used to live here; it now sends visitors to `/` so older links and shares keep working. | `gr4ai.org/guide.html` |
| `_redirects` | Netlify redirect rules (`/guide.html` and `/guide` → `/`). | — |

The three guides link to each other through the EN/DE/FR switch in the header, and all of them link back to `about.html` for the book, the team and the contact form.

---

## What's in here

```
gr4ai/
├── index.html              The interactive guide (EN) — the homepage.
├── guide-de.html           The interactive guide (DE).
├── guide-fr.html           The interactive guide (FR).
├── about.html              The project page: book, chapters, team, contact.
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
│   ├── prof-*.jpg               Professor portraits
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

If a file isn't referenced by one of the four HTML pages, it lives in `archive/`, not `assets/`. Keep that line clean so it's always obvious what actually ships.

**A note on the illustrations.** The `daily-*`, `career-*` and `study-*` pictures were originally 1080×1080 PNGs at roughly 1.5 MB each — about 40 MB for the set, which made the guide unusable on a phone. They're stored as quality-86 JPEGs instead, same dimensions, about 5 MB for the set. If you add another one, export it as a JPEG at a similar size, and give every new `<img>` a `loading="lazy"` attribute.

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

In the order they appear on `about.html`:

1. **Katerina Tapeinos** — student coauthor, age 8, the kids' voice
2. **Christina Malamateniou** — Assoc. Professor, AI in medical education (City St George's, University of London)
3. **Manuel Recker** — health economist and visual storyteller
4. **Susan Shelmerdine** — bio coming soon
5. **Jan Beger** — global AI advocate, healthcare executive (HelloAI, GE HealthCare)

---

## License

Code is MIT. Images and branding are not. See [LICENSE](LICENSE).

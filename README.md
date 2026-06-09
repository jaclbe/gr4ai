# GR4AI — Get Ready For AI

The website for **GR4AI**, a non-profit book project that introduces kids ages 7 to 12 to artificial intelligence in a way that's fun, clear, and actually makes sense to them.

**Live at [gr4ai.org](https://gr4ai.org).**

This is a single-page static site. No framework, no build step, no backend. One HTML file, a folder of images, and a contact form wired to a hosted service. That's the whole thing, and that's on purpose: it's cheap to run, impossible to break in subtle ways, and anyone who can edit HTML can edit it.

---

## What's in here

```
gr4ai/
├── index.html              The entire page. One file, ~38 KB.
├── README.md               This file.
├── CONTRIBUTING.md         How to set up, edit, and ship changes.
├── DEPLOYMENT.md           The full operations manual: hosting, DNS, SSL, form, costs, troubleshooting.
├── LICENSE                 MIT (code only — see the note in the file about images).
├── .gitignore
├── assets/                 Every image the live site uses.
│   ├── art.jpg                  Hero collage tile
│   ├── card.jpg                 Social share image (Open Graph)
│   ├── control-room.jpg         Hero collage tile
│   ├── learning.jpg             Hero collage tile
│   ├── puzzles.jpg              Hero collage tile
│   ├── puzzles-portrait.jpg     Side image in "The book" section
│   ├── favicon.svg              Browser tab icon
│   ├── jan-photo.jpg            Team avatar
│   ├── christina-photo.jpg      Team avatar
│   ├── katerina-photo.jpg       Team avatar
│   ├── manuel-photo.jpg         Team avatar
│   └── susan-photo.jpg          Team avatar
└── archive/
    └── source-images/      High-res originals, old Carrd illustrations, uncropped team
                            photos. Kept for reference. NOT used by the live site.
```

If a file isn't referenced by `index.html`, it lives in `archive/`, not `assets/`. Keep that line clean so it's always obvious what actually ships.

---

## Quick start

You need nothing but a browser to view it, and Python (already on every Mac) to serve it properly.

```bash
git clone https://github.com/jaclbe/gr4ai.git
cd gr4ai
python3 -m http.server 4173
```

Open <http://localhost:4173>. Edit `index.html`, refresh, repeat.

Opening `index.html` directly with a double-click works too, but the local server matches how the live site behaves (relative paths, the contact form, etc.), so prefer it.

Full setup, editing recipes, and the deploy steps are in **[CONTRIBUTING.md](CONTRIBUTING.md)**.

---

## The stack in one line

GitHub holds the source, Netlify hosts it for free with auto SSL, the domain is at united-domains, and the contact form runs on Web3Forms. Total cost is about €20 a year, all of it the domain. The complete operations manual lives in **[DEPLOYMENT.md](DEPLOYMENT.md)**.

---

## The team

In the order they appear on the page:

1. **Katerina Tapeinos** — student coauthor, age 8, the kids' voice
2. **Christina Malamateniou** — Assoc. Professor, AI in medical education (City St George's, University of London)
3. **Manuel Recker** — health economist and visual storyteller
4. **Susan Shelmerdine** — bio coming soon
5. **Jan Beger** — global AI advocate, healthcare executive (HelloAI, GE HealthCare)

---

## License

Code is MIT. Images and branding are not. See [LICENSE](LICENSE).

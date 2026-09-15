# Contributing to GR4AI

Welcome. This is a plain static site, so contributing is refreshingly low-tech. You edit an HTML file, check it locally, and ship. No npm, no build, no compiler. This doc gets you from a fresh clone to a live change.

There are six pages, and each one is self-contained (markup, CSS and JS all in the same file):

- `index.html` — the interactive guide in English. **This is the homepage.**
- `guide-de.html` — the same guide in German.
- `guide-fr.html` — the same guide in French.
- `guide-es.html` — the same guide in Spanish.
- `guide-el.html` — the same guide in Greek.
- `about.html` — the project page: why the book exists, the chapters, the team, the contact form.
- `guide.html` — a redirect stub that sends old `/guide.html` links to `/`.

Anything you change in the English guide almost always needs the same change in `guide-de.html`, `guide-fr.html`, `guide-es.html` and `guide-el.html`.

---

## 1. Get set up

You need:

- **Git** — to clone and push. Check with `git --version`.
- **A text editor** — VS Code, Sublime, even TextEdit in plain-text mode.
- **Python 3** — to run a local server. Already on macOS and most Linux. Check with `python3 --version`.

Clone it:

```bash
git clone https://github.com/jaclbe/gr4ai.git
cd gr4ai
```

---

## 2. Run it locally

```bash
python3 -m http.server 4173
```

Open <http://localhost:4173>. Leave that command running in its own terminal tab. Every time you save an HTML file, just refresh the browser.

Stop the server with `Ctrl+C` when you're done.

> Why not just double-click `index.html`? That opens it with a `file://` path, which behaves slightly differently from a real web server for some things. The local server is closer to production, so use it.

---

## 3. Make a change

Each page holds everything it needs: the markup, the CSS (in a `<style>` block in the `<head>`), and the JavaScript (in a `<script>` block near the bottom). There are no separate `.css` or `.js` files to hunt for.

`about.html` is organized into sections you can jump to with the in-page nav: `#why`, `#book`, `#chapters`, `#promise`, `#team`, `#contact`.

The guides (`index.html`, `guide-de.html`, `guide-fr.html`) are organized by chapter: `#ch1` through `#ch15`, then `#guide-gallery`, `#guide-glossary`, `#guide-final-quiz` and `#guide-farewell`. Search for those `id`s to find the right block.

**Editing the guide?** Make the change in `index.html` and the matching change in `guide-de.html` and `guide-fr.html`. The three files share the same structure and ids, so a diff between them should only ever show language.

The translated text lives in three places in each file: the markup, a handful of `alt` / `aria-label` attributes, and — near the bottom of the `<script>` block — the `FINAL_QUIZ_QUESTIONS` array plus the three result strings that build the score line and the review list. Miss the script block and the final quiz silently reverts to English.

A few common edits:

**Fix a typo or change text**
Find the text, change it, save, refresh. Done.

**Swap a photo**
Drop the new file into `assets/`. Team photos should be square, roughly 500×500, under 100 KB. On a Mac you can crop and resize from the terminal:

```bash
sips -c 500 500 new-photo.jpg --out new-photo-cropped.jpg
```

Then update the matching `<img src="assets/...">` in the page that uses it.

Illustrations for the guide's flip cards (`daily-*`, `career-*`, `study-*`) are 1080×1080 JPEGs, quality ~86, roughly 200 KB each. Export new ones the same way — a 1.5 MB PNG in that set costs more than the whole rest of the page. Give every new `<img>` a `loading="lazy"` attribute.

**Add a team member**
In `about.html`, find the `team-grid` section. Copy one existing `<article class="member ...">` block, then update the image `src`, name, role, bio, and the follower chip. The class letters `a` through `e` map to coloured fallback backgrounds (pink, yellow, green, blue, purple) that show if the photo fails to load.

More recipes are in [DEPLOYMENT.md](DEPLOYMENT.md#common-tasks).

---

## 4. Keep `assets/` clean

Only images the live site actually uses belong in `assets/`. Source files, high-res originals, and anything experimental go in `archive/`. Before you commit, a quick sanity check that every file in `assets/` is referenced by one of the pages:

```bash
for f in assets/*; do
  name=$(basename "$f")
  grep -q "$name" index.html guide-de.html about.html guide.html || echo "UNUSED: $name"
done
```

And the other direction — every image a page asks for actually exists:

```bash
grep -ho 'assets/[A-Za-z0-9._-]*' *.html | sort -u | while read -r f; do
  [ -e "$f" ] || echo "MISSING: $f"
done
```

Anything it prints is a candidate for `archive/`.

---

## 5. Commit and push

```bash
git add .
git commit -m "Short description of what you changed"
git push origin main
```

**First push from a new machine** needs GitHub auth. The easiest path:

```bash
brew install gh      # if you don't have the GitHub CLI
gh auth login        # follow the browser prompts, once
```

After that, `git push` just works.

> **Branches vs. pushing to `main`:** for small fixes, pushing straight to `main` is fine for this project. For anything larger or if two people are working at once, make a branch (`git checkout -b my-change`), push it, and open a pull request on GitHub so the other person can glance at it first.

---

## 6. Get it live

Pushing to GitHub backs up your change but does **not** automatically update gr4ai.org yet. Deploys are currently a manual drag-drop to Netlify. The exact steps, plus how to switch on automatic deploys so a `git push` is all it takes, are in **[DEPLOYMENT.md](DEPLOYMENT.md)**.

Read that file once before your first deploy. It also covers DNS, SSL, the contact form, costs, and what to do when something breaks.

---

## Style notes

- Keep it dependency-free. The whole appeal of this site is a handful of files with no toolchain. Don't add a framework or a build step without a strong reason.
- Test on a phone-width window before shipping. The layout is responsive and most visitors are on mobile.
- Compress images before adding them. Large photos are the only thing that can slow this site down.

Questions about the infrastructure go to Jan (jan.beger@me.com). Questions about the code are mostly answerable by reading the page in question top to bottom.

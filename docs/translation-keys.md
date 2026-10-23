# New text to translate (launch prep, October 2026)

For Manuel. These are the only new pieces of interface text. (The testimonials heading is yours and already translated.) In the German, French, Spanish, Greek and Portuguese pages they are in English for now, each marked with an HTML comment `TODO-TRANSLATE (xx)` right above or beside them, so a search for `TODO-TRANSLATE` finds every spot. When a translation is in, replace the English and delete the comment.

The testimonial quotes themselves are **not** translated: they stay in the language they were written in.

| Key | English source | Where it lives | Pages |
|---|---|---|---|
| `testimonials.readMore` | Read more | about pages: `<section id="testimonials">` → attribute `data-read-more="…"` | the six about pages |
| `testimonials.readLess` | Show less | same section → attribute `data-read-less="…"` | the six about pages |
| `privacy.kicker` | Privacy | `<section id="privacy">` → `<span class="kicker">` | the six about pages |
| `privacy.heading` | Your privacy | same section → `<h2>` | the six about pages |
| `privacy.counting` | We count visits and which country they come from so we know how many people the book reaches. We don't use cookies and we can't see who you are. | same section → `<p class="intro">` | the six about pages |
| `footer.privacy` | Privacy | footer, last link (`…#privacy`) | all twelve pages |

Notes for the translation:
- `privacy.counting` is written for children (7–12). Please keep it as plain and short in each language. Greek: same register as the rest of the Greek guide (εσύ).
- `Read more` / `Show less` are button labels: short, an action.
- No visitor-count badge has been added; if one is approved later, it will bring one more key.

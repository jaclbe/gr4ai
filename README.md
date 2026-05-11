# gr4ai.org

Static site for **GR4AI — Get Ready For AI**, the non-profit book project introducing AI to children ages 7–12.

Live at **[gr4ai.org](https://gr4ai.org)**.

---

## The stack at a glance

| Layer | Where | Who runs it | Cost |
|---|---|---|---|
| Domain registrar + DNS | [united-domains.de](https://united-domains.de) | Account: Jan | Domain renewal fee (~€20/year) |
| Source of truth (Git) | [github.com/jaclbe/gr4ai](https://github.com/jaclbe/gr4ai) | Account: `jaclbe` | Free |
| Hosting + CDN + SSL | [Netlify](https://app.netlify.com) | Account: Jan | Free tier |
| SSL certificate | Let's Encrypt (auto, via Netlify) | — | Free, auto-renewed |
| Local working folder | `/Users/jnbgr/Documents/CLAUDE WORKSPACE/PROFESSIONAL/gr4ai-redesign/` | On Jan's Mac | — |

**Netlify project:** `candid-fox-ab3037` (also reachable directly at [candid-fox-ab3037.netlify.app](https://candid-fox-ab3037.netlify.app), useful if the custom domain ever breaks).

---

## How the site goes from edit to live

```
Edit files on Mac  →  git push to GitHub  →  Netlify auto-deploys  →  gr4ai.org updates
```

Netlify is watching the `main` branch of `github.com/jaclbe/gr4ai`. Any push to `main` triggers a fresh build and rollout within ~30–60 seconds. There is no manual upload step after the initial setup.

---

## File structure

```
gr4ai (GitHub repo, also the dist/ folder locally)
├── index.html         # The entire page. One file, ~37 KB.
├── README.md          # This file.
└── assets/            # All images.
    ├── art.jpg                   # Hero collage tile (Mona Lisa + robot painter)
    ├── card.jpg                  # Open Graph / social share image (still placeholder)
    ├── christina-photo.jpg       # Team avatar
    ├── control-room.jpg          # Hero collage tile (control panel + monitors)
    ├── jan-photo.jpg             # Team avatar
    ├── katerina-photo.jpg        # Team avatar
    ├── learning.jpg              # Hero collage tile (kids at laptop)
    ├── manuel-photo.jpg          # Team avatar
    ├── puzzles-portrait.jpg      # Side image in "The book" section
    └── puzzles.jpg               # Hero collage tile (kids + robot doing puzzles)
```

The local working folder (on Jan's Mac, outside the repo) also contains:
- High-resolution source PNGs of all illustrations (`2_Personal Learning.PNG` etc.)
- Original team photos before cropping (`Jan.jpeg`, `Christina.jpg`, etc.)
- `dist.zip` — a snapshot of the deployed site, occasionally rebuilt
- `index_original.html` — the old Carrd site, archived
- `assets/image01.jpg` and `panel1-4.jpg` — the original Carrd illustrations, kept for reference

Only what's in the GitHub repo gets deployed. The local-only files are for source material and backups.

---

## DNS records at united-domains

Set once, should not need changing.

| Type | Subdomain | Value | Notes |
|---|---|---|---|
| A | (apex, leave blank) | `75.2.60.5` | Netlify load balancer |
| CNAME | `www` | `candid-fox-ab3037.netlify.app.` | Sends www to the Netlify project, which redirects to the apex |

**If Netlify ever changes their load balancer IP** they will email Jan. The new IP goes into the same A record.

---

## SSL / HTTPS

Auto-handled by Netlify. They request a Let's Encrypt certificate when DNS is verified, and renew it automatically every ~60 days. No action needed unless the cert shows as expired in the browser bar, in which case go to Netlify → Domain management → SSL/TLS certificate → Renew certificate.

---

## Common tasks

### Change some text or fix a typo

1. Open `index.html` in any text editor.
2. Find the text, change it.
3. Save.
4. In Terminal:
   ```
   cd "/Users/jnbgr/Documents/CLAUDE WORKSPACE/PROFESSIONAL/gr4ai-redesign/dist"
   git add . && git commit -m "Fix typo in hero" && git push
   ```
5. Wait ~60 seconds. Refresh gr4ai.org.

### Swap a photo

1. Drop the new photo into `dist/assets/` (or the working folder's `assets/`).
2. Crop it to a square if it's a team photo. Use macOS `sips` from Terminal:
   ```
   sips -c 500 500 new-photo.jpg --out new-photo-cropped.jpg
   ```
   Replace `500 500` with the height + width you want. `--cropOffset top left` for off-center crops.
3. In `index.html` find the `<img src="assets/...">` for the photo you're replacing and update the path.
4. Commit and push (see above).

### Add a new team member

1. Add their photo to `assets/` (square, ~500×500, file size <100 KB).
2. In `index.html`, find the `team-grid` section. Copy one of the existing `<article class="member …">` blocks.
3. Update the `class` letter (`a` through `e` map to coloured fallback backgrounds: pink, yellow, green, blue, purple). Use a fresh one or reuse, doesn't matter much since the photo covers it.
4. Update the image src, name, role, bio, and follower chip.
5. Commit and push.

### Remove a team member

Delete the entire `<article class="member …">` block. Update the "Five people. One shared idea." heading if the count changes. Commit and push.

### Update the timeline

In `index.html`, find the `timeline` section. Each `<div class="timeline-row">` is one milestone with a `.ms` title and a `.date` date. Add a `done` class to the row for items that are complete (it strikes through the title and shows a green check next to the date instead of a coloured dot).

---

## What is NOT live yet (open items)

These are placeholders waiting for real content or decisions:

1. **Susan Shelmerdine's bio.** Her card still says "Bio coming soon". When her bio + photo arrive, swap them in like any other team update.
2. **Contact form does nothing.** Submit currently shows a thank-you message client-side, but no email is sent. Two paths to fix this:
   - **Netlify Forms** (free, ~5 lines of HTML to add). Submissions land in Netlify's dashboard and email Jan.
   - **Formspree** or **Web3Forms** (also free for low volume, also email-based).
3. **Open Graph image is the original Carrd placeholder** (`assets/card.jpg`). When `gr4ai.org` is shared on LinkedIn, WhatsApp, etc., that placeholder is what shows. Should be replaced with a proper 1200×630 social card.
4. **No analytics.** Deliberately. If you ever want any, Cloudflare Web Analytics or Plausible (EU, GDPR-friendly) are good options.

---

## Renewals & expiries to watch

| What | When | Where to renew |
|---|---|---|
| Domain `gr4ai.org` | Annually | united-domains.de, auto-renews if you have a card on file |
| Netlify subscription | N/A | Free tier, no expiry |
| SSL certificate | Every ~60 days | Auto by Netlify, no action needed |
| GitHub account | N/A | Free, no expiry |

---

## Costs

| Recurring | Per year |
|---|---|
| Domain `gr4ai.org` | ~€20 |
| Hosting (Netlify free tier) | €0 |
| SSL | €0 |
| Repo hosting (GitHub) | €0 |
| **Total** | **~€20/year** |

Netlify's free tier limits: 100 GB bandwidth/month, 300 build minutes/month. The current site uses negligible bandwidth and zero build minutes (static HTML, no build step). The next tier ($19/month) is only needed if the site grows dramatically or starts handling real form traffic.

---

## If something breaks

| Symptom | Likely cause | Fix |
|---|---|---|
| Site loads but shows wrong content | Cache | Hard reload in browser (Cmd+Shift+R), or wait a few minutes |
| Site doesn't load at all (`DNS_PROBE_FINISHED_NXDOMAIN`) | DNS broken | Check DNS records at united-domains haven't been deleted. Should match the table above. |
| Site loads but "Not Secure" warning | SSL cert expired or mismatch | Netlify → Domain management → SSL/TLS → click Renew |
| Recent change didn't show up | Either push didn't reach GitHub or Netlify build failed | Check [github.com/jaclbe/gr4ai/commits/main](https://github.com/jaclbe/gr4ai/commits/main), is your commit there? Then check Netlify's Deploys tab for a failed build. |
| Forgot Netlify password / lost access | — | Email-reset via Netlify login page. Account email is the one Jan used at signup. |

**Total disaster recovery:** the site lives in three independent places (GitHub, Netlify, and the local Mac folder). Losing one is recoverable from the other two. Losing two would require re-uploading from the third. Losing all three would require rebuilding from scratch.

---

## The team behind the site (as of writing)

In display order on the page:

1. **Katerina Tapeinos**, student coauthor, age 8, the kids' voice
2. **Christina Malamateniou**, Assoc. Professor, AI in medical education (City St George's, University of London)
3. **Manuel Recker**, health economist and visual storyteller
4. **Susan Shelmerdine**, bio coming soon
5. **Jan Beger**, global AI advocate, healthcare executive (HelloAI, GE HealthCare)

---

## Maintenance notes

- This README itself lives in the repo. Update it when the system changes.
- Set up by Jan in May 2026, with Claude doing the build.
- The pre-Netlify version of the site was on Carrd (cancelled after migration).

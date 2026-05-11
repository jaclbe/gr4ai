# gr4ai.org

Static site for **GR4AI — Get Ready For AI**, the non-profit book project introducing AI to children ages 7–12.

Live at **[gr4ai.org](https://gr4ai.org)**.

---

## The stack at a glance

| Layer | Where | Who runs it | Cost |
|---|---|---|---|
| Domain registrar + DNS | [united-domains.de](https://united-domains.de) | Account: Jan | Domain renewal fee (~€20/year) |
| Source of truth (Git) | [github.com/jaclbe/gr4ai](https://github.com/jaclbe/gr4ai) | Account: `jaclbe` | Free |
| Hosting + CDN + SSL | [Netlify](https://app.netlify.com) | Account: Jan, project `candid-fox-ab3037` | Free tier |
| SSL certificate | Let's Encrypt (auto, via Netlify) | — | Free, auto-renewed |
| Contact form handler | [Web3Forms](https://web3forms.com) | Access key tied to `jan.beger@me.com` | Free, unlimited submissions |
| Local working folder | `/Users/jnbgr/Documents/CLAUDE WORKSPACE/PROFESSIONAL/gr4ai-redesign/` | On Jan's Mac | — |

**Netlify project:** `candid-fox-ab3037` (also reachable directly at [candid-fox-ab3037.netlify.app](https://candid-fox-ab3037.netlify.app), useful if the custom domain ever breaks).

---

## How the site goes from edit to live

Current deploy flow is **manual drag-drop**:

```
Edit files on Mac  →  copy index.html to dist/  →  drag dist/ onto Netlify  →  gr4ai.org updates (~30s)
```

The GitHub repo (`jaclbe/gr4ai`) exists as a backup of the files but is not currently auto-deploying. Each change is a manual upload to Netlify's Deploys page.

**Future improvement:** connect Netlify to the GitHub repo so pushes auto-deploy. To do that:
1. Netlify → site → **Site configuration** → **Build & deploy** → **Continuous deployment** → **Link to a Git repository** → choose `jaclbe/gr4ai`.
2. Set branch to `main`, publish directory to `/`.
3. Save. From then on, `git push origin main` auto-deploys within ~60 seconds.
4. The local repo at `dist/.git/` is already wired to the GitHub remote, but pushing requires authentication. Install `gh` (`brew install gh && gh auth login`) once and `git push` works forever after.

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
4. **Sync to dist:** copy the file into the deployable folder.
   ```
   cp "/Users/jnbgr/Documents/CLAUDE WORKSPACE/PROFESSIONAL/gr4ai-redesign/index.html" "/Users/jnbgr/Documents/CLAUDE WORKSPACE/PROFESSIONAL/gr4ai-redesign/dist/index.html"
   ```
5. **Deploy:** drag the `dist` folder onto Netlify's Deploys page in your project dashboard. ~30 seconds later it's live.
6. **(Optional) commit to GitHub** as a backup record. From Terminal:
   ```
   cd "/Users/jnbgr/Documents/CLAUDE WORKSPACE/PROFESSIONAL/gr4ai-redesign/dist"
   git add . && git commit -m "Fix typo in hero"
   ```
   Pushing requires GitHub auth set up first (see "Future improvement" above).

### Swap a photo

1. Drop the new photo into `dist/assets/` (or the working folder's `assets/`).
2. Crop it to a square if it's a team photo. Use macOS `sips` from Terminal:
   ```
   sips -c 500 500 new-photo.jpg --out new-photo-cropped.jpg
   ```
   Replace `500 500` with the height + width you want. `--cropOffset top left` for off-center crops.
3. In `index.html` find the `<img src="assets/...">` for the photo you're replacing and update the path.
4. Copy `index.html` and the new asset into `dist/`, then drag `dist/` onto Netlify (see "Change some text" above).

### Add a new team member

1. Add their photo to `assets/` (square, ~500×500, file size <100 KB).
2. In `index.html`, find the `team-grid` section. Copy one of the existing `<article class="member …">` blocks.
3. Update the `class` letter (`a` through `e` map to coloured fallback backgrounds: pink, yellow, green, blue, purple). Use a fresh one or reuse, doesn't matter much since the photo covers it.
4. Update the image src, name, role, bio, and follower chip.
5. Sync to `dist/` and deploy (see "Change some text").

### Remove a team member

Delete the entire `<article class="member …">` block. Update the "Five people. One shared idea." heading if the count changes. Sync and deploy.

### Update the timeline

In `index.html`, find the `timeline` section. Each `<div class="timeline-row">` is one milestone with a `.ms` title and a `.date` date. Add a `done` class to the row for items that are complete (it strikes through the title and shows a green check next to the date instead of a coloured dot).

---

## Contact form (Web3Forms)

The form on the page is wired to **Web3Forms** (a free, hosted form-handling service).

**How it works:**
1. User fills out the form on `gr4ai.org` and hits Submit.
2. JavaScript POSTs the data to `https://api.web3forms.com/submit`.
3. Web3Forms records the submission in their dashboard AND emails it to `jan.beger@me.com`.
4. Page shows "Thanks. We'll be in touch." inline.

**Where to find things:**
- **Submissions dashboard:** [web3forms.com/dashboard](https://web3forms.com/dashboard) (log in with the same email you used to create the key)
- **Access key:** stored as a hidden `<input>` in `index.html` (currently `9a32c31f-2c0d-467f-bb09-365439ef6f22`). Web3Forms keys are designed to be public-readable — they're scoped to a specific email destination and Web3Forms has its own rate limits/spam protection.
- **Sender name + subject** (what appears in your inbox): configured in the Web3Forms dashboard under the form's settings, not in HTML.

**Spam protection:**
- Web3Forms has built-in spam filtering (hCaptcha + content analysis).
- The HTML form also has a honeypot field (`botcheck`) hidden off-screen — bots that auto-fill all fields trigger it and get silently rejected.
- For extra security, log into Web3Forms dashboard and add **`gr4ai.org`** to the allowed domains list for the access key. Then no other site can hijack the key for spam.

**If submissions stop arriving at `jan.beger@me.com`:**
1. Check the Web3Forms dashboard. If submissions are appearing there but not arriving as emails, the issue is between Web3Forms and iCloud (iCloud sometimes silently filters automated senders).
2. Check iCloud Mail's Junk folder thoroughly.
3. Add `notify@web3forms.com` and `web3forms.com` to your iCloud safe senders list / contacts.
4. If iCloud has put the email on a permanent suppression list, contact Web3Forms support via [web3forms.com/help?contact=true](https://web3forms.com/help?contact=true) and ask them to remove `jan.beger@me.com` from their internal suppression list. This is a known iCloud-flavoured problem and they can fix it from their side.

**To change the destination email:**
1. Log into Web3Forms dashboard.
2. Find the access key / form → settings → **Recipient Emails**.
3. Add or replace. Save. Effect is immediate — no need to redeploy the site.

---

## What is NOT live yet (open items)

These are placeholders waiting for real content or decisions:

1. **Susan Shelmerdine's bio.** Her card still says "Bio coming soon". When her bio + photo arrive, swap them in like any other team update.
2. **Open Graph image is the original Carrd placeholder** (`assets/card.jpg`). When `gr4ai.org` is shared on LinkedIn, WhatsApp, etc., that placeholder is what shows. Should be replaced with a proper 1200×630 social card.
3. **No analytics.** Deliberately. If you ever want any, Cloudflare Web Analytics or Plausible (EU, GDPR-friendly) are good options.
4. **Manual deploys.** Drag-drop to Netlify works but is friction. Hooking up Netlify-to-GitHub auto-deploy (see "How the site goes from edit to live" above) would eliminate this once and for all.

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
| Form handling (Web3Forms free tier) | €0 |
| **Total** | **~€20/year** |

**Free-tier limits, in case the site grows:**
- Netlify: 100 GB bandwidth/month, 300 build minutes/month. The current site uses negligible bandwidth.
- Web3Forms: unlimited submissions on the free plan. Some advanced features (CC/BCC emails, server-side API access, custom domains for the form action) are Pro-only at $14/month.

---

## If something breaks

| Symptom | Likely cause | Fix |
|---|---|---|
| Site loads but shows wrong content | Cache | Hard reload in browser (Cmd+Shift+R), or wait a few minutes |
| Site doesn't load at all (`DNS_PROBE_FINISHED_NXDOMAIN`) | DNS broken | Check DNS records at united-domains haven't been deleted. Should match the table above. |
| Site loads but "Not Secure" warning | SSL cert expired or mismatch | Netlify → Domain management → SSL/TLS → click Verify DNS, then Renew |
| Recent change didn't show up | Drag-drop deploy didn't actually upload | Check Netlify's Deploys tab — is the latest deploy timestamp recent? If not, drag `dist/` onto it again. |
| Contact form: dashboard captures submissions but no email arrives | iCloud suppression list OR Web3Forms suppression list | See "Contact form" section above for the troubleshooting flow |
| Contact form: "Something went wrong" shown in browser after Submit | Web3Forms is down, network error, or access key invalidated | Open browser DevTools → Network tab → submit again → click the request to `api.web3forms.com/submit` → check the Response JSON message |
| Forgot Netlify or Web3Forms password / lost access | — | Email-reset via each service's login page. Account email is `jan.beger@me.com` for both. |

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

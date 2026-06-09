# GR4AI — Operations Manual

Everything about how gr4ai.org is hosted, deployed, and kept alive. If you're just editing content, you mostly need the [Deploy](#how-the-site-goes-from-edit-to-live) and [Common tasks](#common-tasks) sections. The rest is here for the day something breaks.

---

## The stack at a glance

| Layer | Where | Who runs it | Cost |
|---|---|---|---|
| Domain registrar + DNS | [united-domains.de](https://united-domains.de) | Account: Jan | Domain renewal (~€20/year) |
| Source of truth (Git) | [github.com/jaclbe/gr4ai](https://github.com/jaclbe/gr4ai) | Account: `jaclbe` | Free |
| Hosting + CDN + SSL | [Netlify](https://app.netlify.com) | Account: Jan, project `candid-fox-ab3037` | Free tier |
| SSL certificate | Let's Encrypt (auto, via Netlify) | — | Free, auto-renewed |
| Contact form handler | [Web3Forms](https://web3forms.com) | Access key tied to `jan.beger@me.com` | Free, unlimited |

**Netlify project:** `candid-fox-ab3037`, also reachable directly at [candid-fox-ab3037.netlify.app](https://candid-fox-ab3037.netlify.app). Handy if the custom domain ever breaks.

---

## How the site goes from edit to live

The repo is flat: `index.html` and `assets/` live at the root, and the whole folder is the GitHub repo. There's no separate `dist/` build folder anymore. What's at the root is what gets deployed.

The current deploy is **manual drag-drop** to Netlify:

```
Edit index.html  →  git push (backup)  →  drag the project folder onto Netlify  →  gr4ai.org updates (~30s)
```

Pushing to GitHub backs the change up but does not deploy it on its own. The drag-drop is the step that actually updates the live site.

### Recommended: switch on automatic deploys

Hooking Netlify up to the GitHub repo removes the drag-drop forever. After this, `git push origin main` deploys in about a minute.

1. Netlify → the `candid-fox-ab3037` site → **Site configuration** → **Build & deploy** → **Continuous deployment** → **Link to a Git repository** → choose `jaclbe/gr4ai`.
2. Branch: `main`. Build command: leave empty (there's no build). Publish directory: `/` (the repo root).
3. Save. From then on every push to `main` deploys automatically.

The local repo is already wired to the GitHub remote. Pushing needs auth once: `brew install gh && gh auth login`, then `git push` works forever after.

---

## DNS records at united-domains

Set once, shouldn't need changing.

| Type | Subdomain | Value | Notes |
|---|---|---|---|
| A | (apex, leave blank) | `75.2.60.5` | Netlify load balancer |
| CNAME | `www` | `candid-fox-ab3037.netlify.app.` | Sends www to Netlify, which redirects to the apex |

If Netlify ever changes their load balancer IP they email Jan. The new IP goes into the same A record.

---

## SSL / HTTPS

Auto-handled by Netlify. They request a Let's Encrypt certificate once DNS is verified and renew it automatically every ~60 days. No action needed unless the browser shows the cert as expired, in which case: Netlify → Domain management → SSL/TLS certificate → Renew certificate.

---

## Common tasks

### Change text or fix a typo

1. Open `index.html`, find the text, change it, save.
2. Test locally: `python3 -m http.server 4173`, then open <http://localhost:4173>.
3. Back up: `git add . && git commit -m "Fix typo" && git push origin main`.
4. Deploy: drag the project folder onto Netlify's Deploys page. ~30s later it's live. (Or skip this step entirely once auto-deploy is on.)

### Swap a photo

1. Put the new photo in `assets/`. Team photos: square, ~500×500, under 100 KB.
   Crop on a Mac from the terminal:
   ```bash
   sips -c 500 500 new-photo.jpg --out new-photo-cropped.jpg
   ```
   Use `--cropOffset top left` for off-center crops.
2. In `index.html`, update the matching `<img src="assets/...">`.
3. Commit, push, deploy.

### Add a team member

1. Add a square ~500×500 photo (<100 KB) to `assets/`.
2. In `index.html`, find the `team-grid` section. Copy an existing `<article class="member ...">` block.
3. Update the class letter (`a`–`e` map to pink/yellow/green/blue/purple fallback backgrounds), image `src`, name, role, bio, and follower chip.
4. If the count changes, update the "Five people. One shared idea." heading.
5. Commit, push, deploy.

### Remove a team member

Delete the whole `<article class="member ...">` block, fix the heading count, commit, push, deploy.

### Update the timeline

Find the `timeline` section. Each `<div class="timeline-row">` is one milestone with a `.ms` title and `.date`. Add a `done` class to completed rows (strikes the title, shows a green check).

---

## Contact form (Web3Forms)

The form is wired to **Web3Forms**, a free hosted form handler.

**How it works:**
1. Visitor fills out the form on gr4ai.org and hits Submit.
2. JavaScript POSTs the data to `https://api.web3forms.com/submit`.
3. Web3Forms logs it in their dashboard and emails it to `jan.beger@me.com`.
4. The page shows "Thanks. We'll be in touch." inline.

**Where things live:**
- **Submissions dashboard:** [web3forms.com/dashboard](https://web3forms.com/dashboard), log in with the same email used to make the key.
- **Access key:** a hidden `<input>` in `index.html` (currently `9a32c31f-2c0d-467f-bb09-365439ef6f22`). Web3Forms keys are meant to be public-readable. They're scoped to one destination email and have their own rate limiting and spam protection.
- **Sender name + subject** (what shows in the inbox): set in the Web3Forms dashboard, not in the HTML.

**Spam protection:**
- Web3Forms has built-in filtering (hCaptcha + content analysis).
- The HTML form has a honeypot field (`botcheck`) hidden off-screen. Bots that fill every field trip it and get silently rejected.
- Extra hardening: in the Web3Forms dashboard, add `gr4ai.org` to the allowed domains for the key so no other site can reuse it for spam.

**If submissions stop arriving at jan.beger@me.com:**
1. Check the Web3Forms dashboard. If submissions show there but no email arrives, the problem is between Web3Forms and iCloud.
2. Check iCloud Mail's Junk folder.
3. Add `notify@web3forms.com` and `web3forms.com` to iCloud safe senders / contacts.
4. If iCloud has suppressed the sender, contact Web3Forms support at [web3forms.com/help?contact=true](https://web3forms.com/help?contact=true) and ask them to remove `jan.beger@me.com` from their internal suppression list. Known iCloud quirk, they can fix it their side.

**To change the destination email:**
Web3Forms dashboard → the key/form → settings → **Recipient Emails** → add or replace → save. Immediate, no redeploy needed.

---

## Open items (not live yet)

1. **Susan Shelmerdine's bio.** Card still says "Bio coming soon". Swap in like any team update when it arrives.
2. **Open Graph image is a placeholder** (`assets/card.jpg`, the original Carrd image). It's what shows when gr4ai.org is shared on LinkedIn, WhatsApp, etc. Should be replaced with a proper 1200×630 social card.
3. **No analytics**, deliberately. If you ever want some, Cloudflare Web Analytics or Plausible (EU, GDPR-friendly) are good, lightweight options.
4. **Manual deploys.** Drag-drop works but is friction. Turning on Netlify-to-GitHub auto-deploy ([above](#recommended-switch-on-automatic-deploys)) removes it.

---

## Renewals to watch

| What | When | Where |
|---|---|---|
| Domain `gr4ai.org` | Annually | united-domains.de, auto-renews with a card on file |
| Netlify | N/A | Free tier, no expiry |
| SSL certificate | ~Every 60 days | Auto by Netlify, no action |
| GitHub account | N/A | Free, no expiry |

---

## Costs

| Recurring | Per year |
|---|---|
| Domain `gr4ai.org` | ~€20 |
| Hosting (Netlify free) | €0 |
| SSL | €0 |
| Repo hosting (GitHub) | €0 |
| Form handling (Web3Forms free) | €0 |
| **Total** | **~€20/year** |

Free-tier headroom if the site grows: Netlify gives 100 GB bandwidth and 300 build minutes a month (the site uses a sliver of that). Web3Forms allows unlimited submissions on the free plan; CC/BCC and a few advanced features are Pro-only at $14/month.

---

## If something breaks

| Symptom | Likely cause | Fix |
|---|---|---|
| Site loads but shows old content | Cache | Hard reload (Cmd+Shift+R), or wait a few minutes |
| Site doesn't load at all (`DNS_PROBE_FINISHED_NXDOMAIN`) | DNS broken | Check the DNS records at united-domains match the table above |
| "Not Secure" warning | SSL cert expired or mismatch | Netlify → Domain management → SSL/TLS → Verify DNS, then Renew |
| Recent change didn't show up | Deploy didn't actually upload | Check Netlify's Deploys tab — is the latest deploy timestamp recent? If not, deploy again |
| Form: dashboard logs submissions but no email | iCloud or Web3Forms suppression | See the contact form section above |
| Form: "Something went wrong" after Submit | Web3Forms down, network error, or key invalidated | Browser DevTools → Network → submit again → click the `api.web3forms.com/submit` request → read the Response JSON |
| Lost Netlify or Web3Forms password | — | Email reset on each service's login page. Account email is `jan.beger@me.com` for both |

**Disaster recovery:** the site lives in three independent places — GitHub, Netlify, and the local Mac folder. Lose one, recover from the other two. Lose two, re-upload from the third. Lose all three and it's a rebuild from scratch.

---

## History

- Set up by Jan in May 2026, built with Claude.
- The pre-Netlify version of the site was on Carrd, cancelled after migration. The old Carrd illustrations live in `archive/source-images/`.
- This file lives in the repo. Update it when the system changes.

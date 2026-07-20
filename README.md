# Onam Celebrations — Community Website

A static, no-backend website for our apartment community's annual Onam
celebration. Built with plain HTML/CSS/JS so it can be hosted for free on
GitHub Pages with a custom domain (`onamatspc.in`).

> This is an independent, resident-run community event page — not affiliated
> with or endorsed by any builder or developer.

## File structure

```
onam-spc/
├── index.html              # Single-page site (hero, schedule, attractions, sponsors, fund, contact)
├── config.js                # ⭐ THE ONLY FILE YOU NEED TO EDIT EACH YEAR
├── CNAME                    # Custom domain mapping for GitHub Pages (onamatspc.in)
├── css/
│   └── style.css            # All styling (Kerala gold/green/maroon theme, responsive)
├── js/
│   └── main.js              # Renders config.js data into the page + countdown timer logic
├── assets/
│   ├── sponsors/            # Sponsor logo images (referenced from config.js)
│   │   ├── placeholder-gold.svg
│   │   ├── placeholder-silver.svg
│   │   └── placeholder-bronze.svg
│   └── img/
│       └── OG-BANNER-PLACEHOLDER.txt   # Add a real og-banner.png here (1200x630) for link previews
├── .gitignore
└── README.md
```

## Updating content next year (or any time)

**Edit only [`config.js`](config.js).** It contains everything that changes
year to year:

- `event` — community name, event name/tagline, display date, venue, and the
  exact countdown target datetime (`countdownTarget`, ISO format
  `YYYY-MM-DDTHH:MM:SS`).
- `schedule` — array of days, each with a list of `{ time, title, description }`
  program items.
- `attractions` — highlight cards `{ icon, title, description }`.
- `sponsors` — array of `{ name, logo, tier, link }`. `tier` must be
  `"Gold"`, `"Silver"`, or `"Bronze"` to be grouped correctly. Drop sponsor
  logo image files into `assets/sponsors/` and point `logo` at the path.
- `fund` — `collected` and `target` numbers only (no individual names/amounts
  are ever shown, by design, for privacy).
- `contact` — committee email/phone/WhatsApp link (use a shared/committee
  contact, not a personal one).

Save the file, refresh the page (or push to GitHub) — no build step, no
dependencies to install.

## Deploying to GitHub Pages

### 1. Push this project to a new GitHub repo

```bash
cd onam-spc
git init                     # skip if already a git repo
git add .
git commit -m "Initial Onam celebration site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. On GitHub, go to your repo → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **Deploy from a
   branch**.
3. Under **Branch**, select `main` and folder `/ (root)`, then **Save**.
4. Under **Custom domain**, enter `onamatspc.in` and **Save**. GitHub will
   commit/verify the `CNAME` file automatically (it's already in this repo,
   so this step mostly just tells GitHub to issue an HTTPS certificate for
   it).
5. Wait a few minutes, then check **Enforce HTTPS** once it becomes
   available.

### 3. Point your domain's DNS at GitHub Pages

At your domain registrar (wherever `onamatspc.in` is registered), set:

- **Apex domain (`onamatspc.in`)** — four `A` records pointing to GitHub
  Pages' IPs:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- **`www` subdomain** — a `CNAME` record pointing `www.onamatspc.in` to
  `<your-username>.github.io`.

DNS changes can take anywhere from a few minutes to 24-48 hours to propagate.

### About the CNAME file

The `CNAME` file at the repo root (containing just `onamatspc.in`) is what
tells GitHub Pages which custom domain this site should respond to. As long
as it stays in the repo root and the DNS records above are set, GitHub Pages
handles the domain mapping automatically — you don't need to touch it again
unless the domain changes.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve it
locally for a closer-to-production preview:

```bash
# Python 3
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Notes

- All sample program/attraction/sponsor content is **placeholder data** —
  clearly marked as such in `config.js`. Replace before publishing.
- `assets/img/OG-BANNER-PLACEHOLDER.txt` explains how to add a real social
  share image (`og-banner.png`, 1200x630px) for nicer WhatsApp/Facebook link
  previews.
- The site is intentionally indexable by search engines (no `noindex`) and
  includes basic SEO/Open Graph meta tags in `index.html`.
- The fund section deliberately shows only a total collected + target amount
  — no individual contributor names or amounts, by design, for privacy.

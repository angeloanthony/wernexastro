# Wernex Termite & Pest Control — Astro 6

Migration of the static `wernexpestcontrol.com` site into Astro 6. This is a
**migration, not a redesign**: every URL, title, meta description, canonical,
Open Graph tag, and JSON-LD schema block was carried over unchanged, and no body
copy was rewritten. The repeated header/footer/widgets/scripts were lifted into a
single `BaseLayout` + components so they live in one place.

## Requirements

- **Node 22.12 or later** (Astro 6 requirement)

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build -> dist/
npm run preview    # serve the built dist/ locally
```

## ⚠️ Before you deploy: add the images

The original export had its `images/` folder removed before upload. The pages
still reference `images/Logo.webp`, `images/44.webp`, the favicons, etc. **Drop
your real `images/` folder into `public/images/`** (replacing the placeholder
README there). Anything in `public/` is served from the site root with its path
preserved, so `public/images/Logo.webp` → `/images/Logo.webp`, which is exactly
what the pages expect.

## Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro      # head, OG, canonical, favicon, schema injection,
│                             # header, footer, floating CTA, chat widget, script
├── components/
│   ├── Header.astro          # nav (driven by NAV_LINKS, active-state aware)
│   ├── Footer.astro          # canonical footer, NAP from business.ts
│   ├── CTA.astro             # reusable call-to-action banner
│   ├── FAQ.astro             # renders FAQ items + matching FAQPage schema
│   ├── Breadcrumbs.astro     # visual trail + BreadcrumbList schema
│   ├── ReviewSection.astro   # testimonials grid
│   └── ServiceArea.astro     # city/service coverage grid
├── pages/                    # one .astro per original page (URLs preserved)
│   ├── index.astro           # -> /
│   ├── about.astro           # -> /about.html
│   └── ... (28 pages total)
├── data/
│   └── business.ts           # SINGLE SOURCE OF TRUTH: NAP, hours, rating, nav
├── lib/
│   └── schema.ts             # centralized JSON-LD generators (for new pages)
├── assets/                   # for Astro-optimized images (see below)
└── styles/
    └── global.css            # the original styles.css, unchanged

content.config.ts             # Astro 6 content collections (blog/cities/services/pest-library)
astro.config.mjs              # site URL, sitemap, trailingSlash:'never', build.format:'file'
public/                       # script.js, robots.txt, llms.txt, sitemap.xml, images/
scripts/extract.py            # the migration extractor (kept for re-runs/auditing)
```

## URL preservation

`astro.config.mjs` sets `build.format: 'file'` and `trailingSlash: 'never'`, so a
page file `about.astro` is emitted as `/about.html` — matching the legacy site
1:1. The build was verified to produce all 28 original URLs with no redirects
required. If you ever decide to drop the `.html` extension, do it deliberately and
add 301s in the `redirects` block of `astro.config.mjs`.

## What was standardized (one deliberate change)

The source pages had ~8 trivially different footer variants (`Vernal, Utah` vs
`Vernal, UT`, whitespace, one Cloudflare-obfuscated email, slightly different
brand taglines). These were collapsed into one canonical `Footer.astro` driven by
`business.ts`. This is the single-NAP discipline the runbook calls for, but it is
a change from the byte-level source, so it's noted here. Body content (the actual
ranking content) was preserved verbatim.

## Remaining performance step (needs the image files)

The requested image work — converting `<img>` tags to Astro's `<Image>`
component, WebP/AVIF output, explicit width/height, lazy-loading below the fold —
was **not** done yet because it operates on the actual image files, which aren't
present. Once you add `public/images/`, the recommended approach:

1. Move source images into `src/assets/` (Astro optimizes only what's imported
   from there, not what sits in `public/`).
2. In a component/page, `import logo from '../assets/Logo.webp'` and use
   `<Image src={logo} alt="..." width={...} height={...} loading="lazy" />`.
3. Above-the-fold hero images: drop `loading="lazy"` (or use `loading="eager"`)
   so they don't delay LCP.

Honest expectation (from the runbook): you're migrating from already-lean
hand-coded HTML, so the gains are incremental — consistent WebP, no layout shift
from missing dimensions, and zero JS by default — not a dramatic Lighthouse jump.

## Re-running the migration

`scripts/extract.py` reads the original HTML export and regenerates every page in
`src/pages/`. It's idempotent and kept in the repo so the conversion is auditable
and repeatable. Point `SRC` at the export directory and run `python3 scripts/extract.py`.

## Deploy (Cloudflare Pages)

- Build command: `astro build`
- Output directory: `dist`
- Connect the GitHub repo; pushes deploy automatically. Use a branch for the
  migration, verify on the branch preview URL, then merge to launch.
- After launch: validate schema at `validator.schema.org`, confirm a few URLs
  return 200 (not 301/404), and re-submit the sitemap in Search Console.
```

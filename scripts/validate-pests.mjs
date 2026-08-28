#!/usr/bin/env node
/**
 * Pest Library validator.
 *
 *   node scripts/validate-pests.mjs --mode=production   # after `npm run build`
 *   node scripts/validate-pests.mjs --mode=preview      # after `PEST_PREVIEW=1 npm run build`
 *
 * Checks the source entries and the built output together, because most of the ways this
 * library can go wrong are invisible in one or the other: a draft that leaks into production
 * looks fine in source, and a myth page that links to a sales page looks fine in frontmatter.
 *
 * This lives in the repo (not a scratchpad) deliberately — it is the publish-time gate, and it
 * needs to still exist the day somebody flips `published: true`.
 */
import fs from 'node:fs';
import path from 'node:path';

const MODE = (process.argv.find((a) => a.startsWith('--mode=')) || '--mode=production').split('=')[1];
if (!['production', 'preview'].includes(MODE)) {
  console.error('--mode must be production or preview');
  process.exit(2);
}

const SRC = 'src/content/pest-library';
const DIST = 'dist';
const SITE = 'https://www.wernexpestcontrol.com';
const EXPECTED_PROD_PAGES = 28;

const fails = [];
const warns = [];
const passes = [];
const fail = (m) => fails.push(m);
const warn = (m) => warns.push(m);
const pass = (m) => passes.push(m);

// ── Parse source entries ────────────────────────────────────────────────────
/** Deliberately minimal YAML reading: we only need scalars, string lists, and q/a pairs. */
function parseFrontmatter(raw) {
  const m = raw.split(/^---\r?\n/m);
  if (m.length < 3) throw new Error('no frontmatter');
  const fm = m[1];
  const body = m.slice(2).join('---\n');
  const val = (k) => {
    const r = fm.match(new RegExp(`^${k}: (.*)$`, 'm'));
    if (!r) return undefined;
    const v = r[1].trim();
    return v.startsWith('"') ? JSON.parse(v) : v;
  };
  const list = (k) => {
    const r = fm.match(new RegExp(`^${k}:\\r?\\n((?:  - .*\\r?\\n?)+)`, 'm'));
    if (!r) return [];
    return r[1]
      .split(/\r?\n/)
      .filter((l) => l.startsWith('  - '))
      .map((l) => {
        const v = l.slice(4).trim();
        return v.startsWith('"') ? JSON.parse(v) : v;
      });
  };
  return {
    fm,
    body,
    val,
    list,
    faqCount: (fm.match(/^ {2}- q:/gm) || []).length,
    sourceCount: (fm.match(/^ {4}url: /gm) || []).length,
  };
}

const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.md'));
const entries = files.map((f) => {
  const slug = f.replace(/\.md$/, '');
  const p = parseFrontmatter(fs.readFileSync(path.join(SRC, f), 'utf8'));
  return {
    slug,
    file: f,
    ...p,
    name: p.val('name'),
    title: p.val('title'),
    description: p.val('description'),
    intent: p.val('intent'),
    published: p.val('published') === 'true',
    image: p.val('image'),
    imageAlt: p.val('imageAlt'),
    treatment: p.val('treatment'),
    parentCategory: p.val('parentCategory'),
    speciesOf: p.val('speciesOf'),
    utahDistribution: p.val('utahDistribution'),
    rangeNote: p.val('rangeNote'),
    relatedPests: p.list('relatedPests'),
    relatedServices: p.list('relatedServices'),
    regions: p.list('regions'),
  };
});

// ── Source-level checks ─────────────────────────────────────────────────────
const slugs = new Set();
for (const e of entries) {
  if (slugs.has(e.slug)) fail(`duplicate slug: ${e.slug}`);
  slugs.add(e.slug);
}
pass(`${entries.length} entries, all slugs unique`);

// Publishing gate
const published = entries.filter((e) => e.published);
if (MODE === 'production' && published.length) {
  fail(`${published.length} entries are published:true — production must stay at ${EXPECTED_PROD_PAGES} pages until authorized: ${published.map((e) => e.slug).join(', ')}`);
} else if (MODE === 'production') {
  pass('publishing gate: all entries published:false');
}

// Intent guardrails (mirrors content.config.ts so a schema regression is caught here too)
for (const e of entries) {
  if (e.intent === 'myth' && e.relatedServices.length) fail(`${e.slug}: myth entry has relatedServices`);
  if (e.intent === 'informational' && e.relatedServices.length) fail(`${e.slug}: informational entry has relatedServices`);
  if (e.intent !== 'treatable' && e.treatment) fail(`${e.slug}: non-treatable entry sets treatment`);
  if (e.published && e.sourceCount < 2) fail(`${e.slug}: published with ${e.sourceCount} sources (need 2+)`);
  if (e.image && !e.imageAlt) fail(`${e.slug}: image without imageAlt`);
  // Quick Facts renders `regions` as "Where in Utah". On a myth page that turns the
  // service-area enum into a presence claim the page exists to deny — which is exactly
  // how brown-recluse shipped a "Found throughout Utah" line. rangeNote overrides it.
  if (e.intent === 'myth' && !e.rangeNote) fail(`${e.slug}: myth entry has no rangeNote — Quick Facts will assert Utah presence`);
  if (e.speciesOf && e.speciesOf !== e.parentCategory) fail(`${e.slug}: speciesOf != parentCategory`);
  if (!e.regions.length) fail(`${e.slug}: no regions`);
  if ((e.utahDistribution || '').length < 80) fail(`${e.slug}: utahDistribution too short`);
  if (e.faqCount < 3) fail(`${e.slug}: fewer than 3 FAQs`);
}
pass('intent guardrails: myth/informational carry no service links, treatment only on treatable');

// Every entry cites something, published or not.
const uncited = entries.filter((e) => e.sourceCount < 2);
if (uncited.length) warn(`entries with <2 sources (blocks publish): ${uncited.map((e) => e.slug).join(', ')}`);
else pass('every entry carries 2+ authoritative sources');

// SERP metadata
for (const e of entries) {
  if (e.title.length > 65) fail(`${e.slug}: title ${e.title.length} chars`);
  if (e.description.length > 165) fail(`${e.slug}: description ${e.description.length} chars`);
  if (e.description.length < 110) fail(`${e.slug}: description ${e.description.length} chars (too thin)`);
}
const dupT = new Set();
const dupD = new Set();
for (const e of entries) {
  if (dupT.has(e.title)) fail(`duplicate title: ${e.title}`);
  if (dupD.has(e.description)) fail(`duplicate description on ${e.slug}`);
  dupT.add(e.title);
  dupD.add(e.description);
}
pass('titles and descriptions unique and within SERP limits');

// Images must exist and must not be a known-unusable file.
const BANNED_IMAGES = {
  '/images/Black_Widow.webp': 'stylised render with red banded legs and a dorsal red mark — teaches the wrong field marks',
  '/images/boxelder.webp': 'synthetic render with chromatic fringing — not usable on an identification page',
  '/images/elmsee_bug.webp': 'synthetic render, and does not depict an elm seed bug',
  '/images/Scorpion_Infestation.webp': 'inflated pincers matching no Utah species',
  '/images/fire_ants_invasion.webp': 'fire ants are not established in Utah',
};
for (const e of entries) {
  if (!e.image) continue;
  if (!fs.existsSync(path.join('public', e.image.replace(/^\//, '')))) fail(`${e.slug}: image not found: ${e.image}`);
  if (BANNED_IMAGES[e.image]) fail(`${e.slug}: uses banned image ${e.image} — ${BANNED_IMAGES[e.image]}`);
}
pass(`hero images: ${entries.filter((e) => e.image).length} set, all exist and none on the banned list`);

// Excluded pests must never gain a page.
const pestsTs = fs.readFileSync('src/data/pests.ts', 'utf8');
const excluded = [...pestsTs.matchAll(/slug: '([^']+)',[\s\S]{0,600}?status: 'excluded'/g)].map((m) => m[1]);
for (const slug of excluded) if (slugs.has(slug)) fail(`excluded pest has a page: ${slug}`);
pass(`excluded pests (${excluded.join(', ') || 'none'}) have no pages`);

// relatedPests must resolve to an entry or a non-excluded tile — the route drops
// unresolvable slugs silently, so a typo becomes an invisible dead link.
const tileSlugs = new Set([...pestsTs.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]));
for (const e of entries) {
  for (const rp of e.relatedPests) {
    if (!slugs.has(rp) && !tileSlugs.has(rp)) fail(`${e.slug}: relatedPests '${rp}' resolves to nothing`);
    if (excluded.includes(rp)) fail(`${e.slug}: relatedPests points at excluded '${rp}'`);
  }
}
pass('all relatedPests resolve');

// relatedServices must point at real routes.
const pageFiles = new Set(fs.readdirSync('src/pages').filter((f) => f.endsWith('.astro')).map((f) => '/' + f.replace(/\.astro$/, '')));
for (const e of entries) {
  for (const rs of e.relatedServices) {
    if (!pageFiles.has(rs)) fail(`${e.slug}: relatedServices '${rs}' is not a real page`);
  }
}
pass('all relatedServices point at real pages');

// Body links must resolve.
for (const e of entries) {
  for (const m of e.body.matchAll(/\]\((\/[^)#\s]*)/g)) {
    const href = m[1];
    if (href.startsWith('/pest-library/')) {
      const s = href.replace('/pest-library/', '');
      if (!slugs.has(s)) fail(`${e.slug}: body links to missing pest page ${href}`);
    } else if (href !== '/pest-library' && !pageFiles.has(href)) {
      fail(`${e.slug}: body links to missing page ${href}`);
    }
  }
}
pass('all in-body internal links resolve');

// Myth pages must not link to a commercial page anywhere in the body.
const COMMERCIAL = [...pageFiles].filter((p) => /-control-|-removal-|-treatment-/.test(p));
for (const e of entries.filter((x) => x.intent === 'myth')) {
  for (const c of COMMERCIAL) {
    if (e.body.includes(`](${c})`)) fail(`${e.slug}: myth page links to commercial page ${c}`);
  }
}
pass('myth pages link to no commercial pages (frontmatter and body)');

// ── Built-output checks ─────────────────────────────────────────────────────
if (!fs.existsSync(DIST)) {
  fail(`no ${DIST}/ — run a build first`);
} else {
  const html = fs.readdirSync(DIST).filter((f) => f.endsWith('.html'));
  const pestDir = path.join(DIST, 'pest-library');
  const pestHtml = fs.existsSync(pestDir) ? fs.readdirSync(pestDir).filter((f) => f.endsWith('.html')) : [];
  const total = html.length + pestHtml.length;

  if (MODE === 'production') {
    if (total !== EXPECTED_PROD_PAGES) fail(`production build has ${total} pages, expected ${EXPECTED_PROD_PAGES}`);
    else pass(`production build: exactly ${EXPECTED_PROD_PAGES} pages`);
    if (pestHtml.length) fail(`production build leaked ${pestHtml.length} pest pages`);
    else pass('production build emits no /pest-library/<slug> routes');
  } else {
    const expected = EXPECTED_PROD_PAGES + entries.length;
    if (total !== expected) fail(`preview build has ${total} pages, expected ${expected} (28 + ${entries.length} drafts)`);
    else pass(`preview build: ${total} pages = 28 + ${entries.length} drafts`);
    for (const e of entries) {
      if (!pestHtml.includes(`${e.slug}.html`)) fail(`preview build missing ${e.slug}.html`);
    }
  }

  // Per-page HTML checks for whatever pest pages were emitted.
  for (const f of pestHtml) {
    const slug = f.replace(/\.html$/, '');
    const h = fs.readFileSync(path.join(pestDir, f), 'utf8');
    const e = entries.find((x) => x.slug === slug);
    const want = `${SITE}/pest-library/${slug}`;

    const canon = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    if (canon !== want) fail(`${slug}: canonical is ${canon}, expected ${want}`);
    const og = (h.match(/<meta property="og:url" content="([^"]+)"/) || [])[1];
    if (og !== want) fail(`${slug}: og:url is ${og}, expected ${want}`);
    if (/href="[^"]*\.html"/.test(h)) fail(`${slug}: emits a .html internal link`);
    if (!/DRAFT — this page is unpublished/.test(h) && e && !e.published) fail(`${slug}: draft banner missing`);
    // A draft carries a production canonical. If a PEST_PREVIEW build is ever deployed,
    // noindex is the only thing between that canonical and the index.
    if (e && !e.published && !/name="robots" content="noindex/.test(h)) fail(`${slug}: unpublished page is missing robots noindex`);
    // The most liftable claim on the page must agree with the page.
    const rangeFact = (h.match(/Where in Utah:<\/strong> ([^<]*)/) || [])[1];
    if (e?.intent === 'myth' && /Found throughout Utah|Southwest Utah|Uintah Basin/.test(rangeFact || '')) {
      fail(`${slug}: myth page renders "Where in Utah: ${rangeFact}" — asserts the presence it denies`);
    }

    for (const m of h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      let parsed;
      try {
        parsed = JSON.parse(m[1]);
      } catch (err) {
        fail(`${slug}: JSON-LD does not parse — ${err.message}`);
        continue;
      }
      const str = JSON.stringify(parsed);
      if (str.includes('.html')) fail(`${slug}: JSON-LD contains a .html URL`);
    }
    if (!h.includes('"FAQPage"')) fail(`${slug}: no FAQPage schema`);

    // Referenced images must exist in the build.
    for (const m of h.matchAll(/<img[^>]+src="(\/images\/[^"]+)"/g)) {
      if (!fs.existsSync(path.join(DIST, m[1].replace(/^\//, '')))) fail(`${slug}: img missing in build: ${m[1]}`);
    }
    // Myth pages: no commercial link in the rendered HTML either.
    if (e?.intent === 'myth') {
      for (const c of COMMERCIAL) if (new RegExp(`href="${c}"`).test(h)) fail(`${slug}: rendered myth page links to ${c}`);
    }
  }
  if (pestHtml.length) pass(`${pestHtml.length} pest pages: canonical/og:url exact, JSON-LD parses, FAQPage present, no .html URLs, images exist`);

  // The @astrojs/sitemap output is a SECOND sitemap, generated from whatever the build
  // emitted. public/sitemap.xml being clean says nothing about it, and a deployed preview
  // build would publish 19 draft URLs through this file.
  const gen = path.join(DIST, 'sitemap-0.xml');
  if (fs.existsSync(gen)) {
    const g = fs.readFileSync(gen, 'utf8');
    const glocs = [...g.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const draftLeak = glocs.filter((u) => {
      const m = u.match(/\/pest-library\/(.+)$/);
      return m && !entries.find((x) => x.slug === m[1] && x.published);
    });
    if (draftLeak.length) fail(`generated sitemap-0.xml lists unpublished pest URLs: ${draftLeak.join(', ')}`);
    else pass(`generated sitemap-0.xml (${glocs.length} URLs): no unpublished pest entries`);
  } else {
    warn('no dist/sitemap-0.xml — generated sitemap not checked');
  }

  // Static sitemap must never list a pest species URL while drafts are unpublished.
  const sm = fs.readFileSync('public/sitemap.xml', 'utf8');
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length !== EXPECTED_PROD_PAGES) fail(`public/sitemap.xml has ${locs.length} URLs, expected ${EXPECTED_PROD_PAGES}`);
  const leaked = locs.filter((u) => /\/pest-library\/./.test(u));
  const unpublishedLeak = leaked.filter((u) => {
    const s = u.split('/pest-library/')[1];
    return !entries.find((e) => e.slug === s && e.published);
  });
  if (unpublishedLeak.length) fail(`sitemap lists unpublished pest URLs: ${unpublishedLeak.join(', ')}`);
  if (locs.some((u) => u.endsWith('.html'))) fail('sitemap contains a .html URL');
  if (locs.some((u) => u !== SITE + '/' && u.endsWith('/'))) fail('sitemap contains a trailing-slash URL');
  pass(`public/sitemap.xml: ${locs.length} clean URLs, no unpublished pest entries`);
}

// ── Report ──────────────────────────────────────────────────────────────────
console.log(`\nPest Library validation — mode: ${MODE}\n${'='.repeat(52)}`);
for (const p of passes) console.log(`  PASS  ${p}`);
for (const w of warns) console.log(`  NOTE  ${w}`);
for (const f of fails) console.log(`  FAIL  ${f}`);
console.log('='.repeat(52));
if (fails.length) {
  console.log(`${fails.length} FAILURE(S)\n`);
  process.exit(1);
}
console.log(`ALL CHECKS PASSED (${passes.length} checks, ${warns.length} notes)\n`);

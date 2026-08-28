// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://www.wernexpestcontrol.com';

/**
 * Keeps /sitemap.xml — the ONLY sitemap robots.txt advertises — in sync with which pest
 * entity pages the build actually emitted.
 *
 * public/sitemap.xml is hand-curated: the 28 static pages carry tuned lastmod/changefreq/
 * priority values that a wholesale regeneration would destroy. So it stays the curated base
 * for those, and this hook APPENDS the entity URLs, derived from `dist/pest-library/*.html`
 * — the build's own ground truth, which cannot disagree with the routes it just wrote.
 *
 * Without this, publishing a pest meant hand-editing public/sitemap.xml. Miss that edit and
 * the page ships live but invisible to the only sitemap Google is pointed at — which would
 * quietly compromise the very measurement the probe exists to produce. Publication state
 * lives in one place (`published` in the content collection) and this derives from it.
 *
 * Skipped entirely under PEST_PREVIEW=1: that build emits unpublished drafts, and a draft
 * must never be advertised.
 */
function pestSitemapSync() {
  return {
    name: 'wernex:pest-sitemap-sync',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        if (process.env.PEST_PREVIEW === '1') return;
        const distDir = fileURLToPath(dir);
        const sitemapPath = path.join(distDir, 'sitemap.xml');
        const entityDir = path.join(distDir, 'pest-library');
        if (!fs.existsSync(sitemapPath)) return;

        const slugs = fs.existsSync(entityDir)
          ? fs
              .readdirSync(entityDir)
              .filter((f) => f.endsWith('.html'))
              .map((f) => f.replace(/\.html$/, ''))
              .sort()
          : [];
        if (!slugs.length) return;

        const lastmod = new Date().toISOString().slice(0, 10);
        const block = slugs
          .map(
            (s) =>
              `  <url>\n    <loc>${SITE_URL}/pest-library/${s}</loc>\n` +
              `    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n` +
              `    <priority>0.6</priority>\n  </url>`,
          )
          .join('\n');

        const xml = fs
          .readFileSync(sitemapPath, 'utf8')
          .replace(
            /\s*<\/urlset>\s*$/,
            `\n\n  <!-- Pest Library entities — generated from published entries, do not hand-edit -->\n${block}\n\n</urlset>\n`,
          );
        fs.writeFileSync(sitemapPath, xml);
        logger.info(`sitemap.xml: appended ${slugs.length} published pest entity URL(s)`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.wernexpestcontrol.com',

  // Canonical URLs are extensionless with NO trailing slash (e.g. /about).
  // Cloudflare Pages serves the emitted about.html at /about and 308-redirects
  // /about.html -> /about, so the extensionless form is the only URL that returns
  // 200. Every declared URL (canonical, og:url, JSON-LD, sitemap, internal links)
  // must use it.
  trailingSlash: 'never',

  build: {
    // Emit /about.html instead of /about/index.html — Cloudflare Pages maps that
    // file to the extensionless /about URL.
    format: 'file',
  },

  integrations: [
    pestSitemapSync(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      // A PEST_PREVIEW=1 build renders the unpublished pest drafts. Those pages carry
      // production canonicals, so if such a build were ever deployed by mistake the
      // generated sitemap would hand Google 19 draft URLs. Drafts only ever exist in a
      // preview build, so excluding every entity URL in that mode is exact: a normal
      // build contains only published entries and lists them normally.
      filter: (page) =>
        process.env.PEST_PREVIEW !== '1' || !/\/pest-library\/[^/]+$/.test(page.replace(/\.html$/, '')),
      // build.format:'file' makes Astro emit ".../about.html" entries; rewrite them
      // to the extensionless URLs Cloudflare actually serves, so the generated
      // sitemap agrees with public/sitemap.xml and never lists a redirecting URL.
      serialize(item) {
        // (Astro applies trailingSlash:'never' after this hook, so the root entry
        // ends up as the bare origin — equivalent to "/" for crawlers.)
        item.url = item.url.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
        return item;
      },
    }),
  ],

  // No in-app redirects needed: Cloudflare Pages already 308s /page.html -> /page
  // and /page/ -> /page for every static file in dist/.
  redirects: {},
});

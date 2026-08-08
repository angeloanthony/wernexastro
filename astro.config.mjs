// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
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

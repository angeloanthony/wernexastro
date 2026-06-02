// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.wernexpestcontrol.com',

  // The original site's canonical URLs end in ".html" with NO trailing slash.
  // Keeping 'never' + .html page filenames preserves every existing URL exactly.
  trailingSlash: 'never',

  build: {
    // Emit /about.html instead of /about/index.html so URLs match the legacy site.
    format: 'file',
  },

  integrations: [
    sitemap({
      // Keep the legacy lastmod/priority by trusting the hand-maintained public/sitemap.xml
      // for launch; the generated one (sitemap-index.xml) is a fallback. Submit whichever
      // you standardize on in Search Console after launch.
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],

  // In-app 301 redirects. The legacy URLs ARE the canonical URLs (.html), so no
  // page redirects are required for the migration itself. If you later decide to
  // drop ".html", add the mappings here, e.g.:
  //   '/about.html': '/about',
  redirects: {
    // (intentionally empty — every original URL is preserved 1:1)
  },
});

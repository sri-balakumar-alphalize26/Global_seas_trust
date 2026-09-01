// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// Stamped once per build; every page ships from the same deploy.
const BUILD_TIME = new Date().toISOString();

/** @type {Record<string, [number, ChangeFreqEnum]>} priority + change frequency per route */
const ROUTE_META = {
  '/': [1.0, ChangeFreqEnum.WEEKLY],
  '/products/': [0.9, ChangeFreqEnum.WEEKLY],
  '/about/': [0.7, ChangeFreqEnum.MONTHLY],
  '/infrastructure/': [0.7, ChangeFreqEnum.MONTHLY],
  '/contact/': [0.6, ChangeFreqEnum.MONTHLY],
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.globalseastrust.com',
  vite: {
    // Pre-bundle the phone library up front. Discovered late, Vite re-optimizes
    // mid-session and serves 504s for the old chunk until the page is reloaded.
    optimizeDeps: { include: ['intl-tel-input/intlTelInputWithUtils'] },
  },
  // Hover-prefetch: the next page is usually cached before the wave
  // curtain finishes rising, so the covered hold stays a beat, not a wait.
  prefetch: true,
  integrations: [
    // Emits /sitemap-index.xml (+ sitemap-0.xml); referenced from public/robots.txt.
    sitemap({
      filter: (page) => !page.includes('/404'),
      // English at /, Arabic at /ar/ — emits <xhtml:link rel="alternate" hreflang>
      // pairs so Google serves the right language per visitor.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ar: 'ar' },
      },
      serialize(item) {
        // Arabic and English share the same priority — strip the /ar prefix first.
        const path = new URL(item.url).pathname.replace(/^\/ar(?=\/)/, '') || '/';
        const [priority, changefreq] =
          ROUTE_META[path] ??
          (/^\/products\/[^/]+\/$/.test(path)
            ? [0.8, ChangeFreqEnum.WEEKLY] // category pages
            : /^\/products\/[^/]+\/[^/]+\/$/.test(path)
              ? [0.7, ChangeFreqEnum.MONTHLY] // product pages
              : [0.5, ChangeFreqEnum.MONTHLY]);
        return { ...item, lastmod: BUILD_TIME, changefreq, priority };
      },
    }),
  ],
});

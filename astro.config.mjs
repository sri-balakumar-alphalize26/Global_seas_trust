// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.globalseastrust.com',
  // Hover-prefetch: the next page is usually cached before the wave
  // curtain finishes rising, so the covered hold stays a beat, not a wait.
  prefetch: true,
});

# Global Seas Trust — website

Bilingual (English / Arabic) marketing site for **Global Seas Trust**, a fresh
and frozen seafood exporter in Quroon, Jalan Bani Bu Hassan, Sultanate of Oman.
Static site, no backend — every page is pre-rendered at build time.

Live at <https://www.globalseastrust.com>

## Stack

- [Astro 5](https://astro.build) — static output, zero client JS by default
- `astro:assets` for image optimisation (Sharp) — responsive `webp`/`jpg` variants
- `@astrojs/sitemap` — emits `/sitemap-index.xml` with `hreflang` pairs
- `intl-tel-input` — country-aware phone field on the enquiry form
- Plain CSS with custom properties in `src/styles/global.css`; no framework

## Getting started

```bash
npm install
npm run dev        # dev server, http://localhost:4321
npm run build      # static build into dist/
npm run preview    # serve the built dist/
```

Node 18+ is required (Astro 5). `dist/` and `.astro/` are gitignored — the build
is reproducible from source.

## Where the content lives

Almost nothing that a non-developer needs to change is inside a component.
Editing these four files covers most requests:

| File | Holds |
|---|---|
| `src/data/site.ts` | Company details, address, phone, email, nav links, stats, home product grid, certifications, operations lines, process steps, facilities |
| `src/data/catalogue.ts` | The 25-product catalogue — slug, name, scientific name, forms, description, photo. Drives `/products/`, the per-category and per-product pages, and the schema.org markup |
| `src/data/catalogue.ar.ts` | Arabic overlay for the catalogue, keyed by slug. Anything missing falls back to English |
| `src/i18n/ui.ts` | Every other page's copy, English block then Arabic block |
| `src/data/home.ts` | Home page headings and body copy only |

Two counts must stay in sync by hand: the **species stat** in `site.ts` and the
number of items in `catalogue.ts`. There is a comment on the stat saying so.

## Bilingual setup

English lives at `/`, Arabic at `/ar/`. Both are generated from the same
components — each page component takes a `lang` prop, and the files under
`src/pages/ar/` are thin shims that pass `lang="ar"`.

Helpers in `src/i18n/index.ts`:

- `t(lang)` — the copy object for a language
- `pick(obj, key, lang)` — reads `title` or `titleAr` off a data record
- `localePath(path, lang)` — prefixes `/ar` when needed
- `dir(lang)` / `htmlLang(lang)` — RTL and `lang` attributes

The home page is deliberately **bilingual on one page** in English mode — the
`Bi` component stacks the English line with its Arabic counterpart. At `/ar/` the
same page renders Arabic only.

## Images

All photography is the company's own and lives in `src/assets/`:

- `src/assets/products/` — 25 product photographs, each on a pure white ground
  with the Global Seas Trust watermark
- `src/assets/site/` — headers, plant exterior, facilities and section photos

They are imported as modules and rendered through `<Image>` so Astro emits sized,
hashed variants. Dropping a file into `src/assets/` and importing it is all that
is needed — there is no `image` config in `astro.config.mjs`, so remote URLs
would require adding one.

Only the logos, favicon, default share image and `robots.txt` live in `public/`.

## Routes

```
/                       /ar/                    home
/about/                 /ar/about/              about us
/products/              /ar/products/           catalogue, chip-filtered
/products/[category]/                           category listing
/products/[category]/[slug]/                    one product
/infrastructure/        /ar/infrastructure/      the cold chain
/contact/               /ar/contact/            enquiry form and map
```

`src/pages/_brands.astro` is parked — the underscore prefix stops Astro building
it. The house brands on it were never supplied by the client. Restore the file
name and the `brands` nav entry in `site.ts` to bring it back.

## Docs

- `CLIENT-UPDATE.md` — plain-English record of what changed in each round and
  what is still waiting on the client. Written to be sent to them as-is
- `docs/arabic-review.md` — every Arabic string needing a native speaker's check
- `docs/seapridebuildspec.md`, `docs/seapridecontentextract.md` — original brief

## Conventions

- Comments explain **why**, not what. Several record decisions that are easy to
  undo by accident — the fixed four-column product grid, the species count
  needing to track the catalogue, why a photo is cropped a particular way
- Copy is never hardcoded in a component when it needs translating; it goes in
  `ui.ts` with an Arabic counterpart
- Product photos sit on pure white so `object-fit: contain` can pad them
  invisibly rather than cropping the fish

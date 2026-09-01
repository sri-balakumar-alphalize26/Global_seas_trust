// ============================================
// Global Seas Trust — product catalogue
// Two categories rendered by ProductCatalogue.astro on /products/
// (chip filter + animated grid), expanded into one page per category
// (/products/<category>/) and per product (/products/<category>/<slug>/),
// and exposed to search engines as schema.org ItemList / Product.
//
// Scope follows the client brief of 29 Aug 2026: fish only, plus the one
// farmed shrimp line they supplied a photo for. Cephalopods, value-added
// and dried lines were retired. Photos are the company's own.
// ============================================

import type { ImageMetadata } from 'astro';
import { localePath, type Lang } from '../i18n';
import { categoriesAr, itemsAr } from './catalogue.ar';

import imgYellowfinTuna from '../assets/products/yellowfin-tuna.jpg';
import imgFrigateTuna from '../assets/products/frigate-tuna.jpg';
import imgQueenfish from '../assets/products/queenfish.jpg';
import imgTrevally from '../assets/products/trevally.jpg';
import imgGrouper from '../assets/products/grouper.jpg';
import imgEmperor from '../assets/products/spangled-emperor.jpg';
import imgPinjaloSnapper from '../assets/products/pinjalo-snapper.jpg';
import imgCroaker from '../assets/products/croaker.jpg';
import imgSpottedGrunt from '../assets/products/spotted-grunt.jpg';
import imgBarracuda from '../assets/products/barracuda.jpg';
import imgNeedlefish from '../assets/products/needlefish.jpg';
import imgRibbonFish from '../assets/products/ribbon-fish.jpg';
import imgIndianMackerel from '../assets/products/indian-mackerel.jpg';
import imgHorseMackerel from '../assets/products/horse-mackerel.jpg';
import imgYellowtailScad from '../assets/products/yellowtail-scad.jpg';
import imgYellowstripeScad from '../assets/products/yellowstripe-scad.jpg';
import imgPonyFish from '../assets/products/pony-fish.jpg';
import imgGreyMullet from '../assets/products/grey-mullet.jpg';
import imgCatfish from '../assets/products/catfish.jpg';
import imgMoonfish from '../assets/products/moonfish.jpg';
import imgVannamei from '../assets/products/vannamei-shrimp.jpg';

export interface CatalogueItem {
  /** URL segment under /products/<category>/ — stable, never derived from the name */
  slug: string;
  name: string;
  scientific?: string;
  forms: string;
  /** 2–3 factual sentences shown on the product page and used as its meta description */
  description: string;
  icon: 'fish' | 'shrimp' | 'squid' | 'crab' | 'box';
  image?: ImageMetadata;
}

export interface Category {
  id: string;
  label: string;
  blurb: string;
  items: CatalogueItem[];
}

export const categories: Category[] = [
  {
    id: 'fish',
    label: 'Fish',
    blurb: 'Whole fish from the Arabian Sea and Indian Ocean, size-graded, blast frozen and packed to order.',
    items: [
      {
        slug: 'yellowfin-tuna',
        name: 'Yellowfin Tuna',
        scientific: 'Thunnus albacares',
        forms: 'Whole / Blast Frozen',
        description:
          'Yellowfin tuna is a fast-swimming pelagic species caught in the warm offshore waters of the Arabian Sea and Indian Ocean. Its firm, deep-red flesh makes it a staple for sashimi, steaks and canning. We supply it whole, blast frozen soon after landing to preserve colour and texture.',
        icon: 'fish',
        image: imgYellowfinTuna,
      },
      {
        slug: 'frigate-tuna',
        name: 'Frigate Tuna',
        scientific: 'Auxis thazard',
        forms: 'Whole / Blast Frozen',
        description:
          'Frigate tuna is a small, fast-schooling tuna landed in volume along the Omani coast. Its dark, firm flesh is valued for canning, drying and curry markets across Asia and Africa. Supplied whole and blast frozen, size-graded to order.',
        icon: 'fish',
        image: imgFrigateTuna,
      },
      {
        slug: 'queenfish',
        name: 'Queenfish',
        scientific: 'Scomberoides commersonnianus',
        forms: 'Whole / Blast Frozen',
        description:
          'Queenfish is a slender silver predator of the Arabian Sea, recognised by the row of dark blotches along its flank. Its lean white flesh holds together well grilled or dried, making it a steady seller in Gulf and South Asian markets. Supplied whole and blast frozen.',
        icon: 'fish',
        image: imgQueenfish,
      },
      {
        slug: 'trevally',
        name: 'Trevally',
        scientific: 'Carangoides caeruleopinnatus',
        forms: 'Whole / Blast Frozen',
        description:
          'Coastal trevally is a deep-bodied reef and inshore species taken along the Omani coast. Firm-fleshed and well suited to grilling and frying, it moves in steady volume to Gulf, African and South Asian buyers. Supplied whole, size-graded and blast frozen.',
        icon: 'fish',
        image: imgTrevally,
      },
      {
        slug: 'grouper',
        name: 'Grouper',
        scientific: 'Epinephelus diacanthus',
        forms: 'Whole / Blast Frozen',
        description:
          'Grouper — hamour in the Gulf trade — is among the most sought-after reef fish in the region. Thick, firm white flesh and a mild flavour make it a fixture on hotel and restaurant menus. Supplied whole and blast frozen, graded to size.',
        icon: 'fish',
        image: imgGrouper,
      },
      {
        slug: 'spangled-emperor',
        name: 'Spangled Emperor',
        scientific: 'Lethrinus nebulosus',
        forms: 'Whole / Blast Frozen',
        description:
          'The spangled emperor, known locally as sheiri, is a prized reef fish of the Arabian Sea with pale, sweet flesh and distinctive blue facial markings. It commands strong prices across the Gulf. Supplied whole, size-graded and blast frozen.',
        icon: 'fish',
        image: imgEmperor,
      },
      {
        slug: 'pinjalo-snapper',
        name: 'Pinjalo Snapper',
        scientific: 'Pinjalo pinjalo',
        forms: 'Whole / Blast Frozen',
        description:
          'Pinjalo snapper is a deep pink-red schooling snapper of the Indo-West Pacific reefs. Its firm white flesh grills and steams well, and its colour makes it a strong display fish for retail counters. Supplied whole, size-graded and blast frozen.',
        icon: 'fish',
        image: imgPinjaloSnapper,
      },
      {
        slug: 'croaker',
        name: 'Croaker',
        scientific: 'Atractoscion aequidens',
        forms: 'Whole / Blast Frozen',
        description:
          'Croaker is a silver-bodied fish named for the drumming sound it makes with its swim bladder. Its delicate white flesh suits frying and stewing, and it sells steadily into African and South Asian markets. Supplied whole and blast frozen.',
        icon: 'fish',
        image: imgCroaker,
      },
      {
        slug: 'spotted-grunt',
        name: 'Spotted Grunt',
        scientific: 'Pomadasys opercularis',
        forms: 'Whole / Blast Frozen',
        description:
          'Spotted grunt is an inshore bottom-dwelling fish marked with fine dark spots across a pale body. Firm and low in bones, it is a dependable table fish across the Gulf and East Africa. Supplied whole, size-graded and blast frozen.',
        icon: 'fish',
        image: imgSpottedGrunt,
      },
      {
        slug: 'barracuda',
        name: 'Barracuda',
        scientific: 'Sphyraena jello',
        forms: 'Whole / Blast Frozen',
        description:
          'Pickhandle barracuda is a long, powerful predator taken along the Omani coast. Its dense, low-fat flesh is popular grilled, curried and dried across South Asia and the Gulf. Supplied whole, size-graded and blast frozen.',
        icon: 'fish',
        image: imgBarracuda,
      },
      {
        slug: 'needlefish',
        name: 'Needlefish',
        scientific: 'Belonidae',
        forms: 'Whole / Blast Frozen',
        description:
          'Needlefish are slender surface-dwelling predators with long beak-like jaws, caught inshore along the Omani coast. Their firm, very lean flesh is popular grilled and dried in Gulf, South Asian and African markets. Supplied whole and blast frozen.',
        icon: 'fish',
        image: imgNeedlefish,
      },
      {
        slug: 'ribbon-fish',
        name: 'Ribbon Fish',
        scientific: 'Trichiurus lepturus',
        forms: 'Whole / Blast Frozen',
        description:
          'Largehead hairtail, known in trade as ribbon fish, is a long, silver, bottom-dwelling fish caught by trawl. It is in strong demand in East Asian and West African markets. Supplied whole, size-graded and blast frozen.',
        icon: 'fish',
        image: imgRibbonFish,
      },
      {
        slug: 'indian-mackerel',
        name: 'Indian Mackerel',
        scientific: 'Rastrelliger kanagurta',
        forms: 'Whole / Blast Frozen',
        description:
          'Indian mackerel is a schooling pelagic fish abundant along the Arabian Sea coast and a household staple across South Asia, the Middle East and Africa. Naturally rich in omega-3 oils, it is supplied whole and blast frozen for volume buyers.',
        icon: 'fish',
        image: imgIndianMackerel,
      },
      {
        slug: 'horse-mackerel',
        name: 'Horse Mackerel',
        scientific: 'Selar crumenophthalmus',
        forms: 'Whole / Blast Frozen',
        description:
          'Bigeye scad, marketed as horse mackerel, is a small pelagic schooling fish landed in large volumes across the region. Popular for frying, canning and bait, it is supplied whole and blast frozen.',
        icon: 'fish',
        image: imgHorseMackerel,
      },
      {
        slug: 'yellowtail-scad',
        name: 'Yellowtail Scad',
        scientific: 'Atule mate',
        forms: 'Whole / Blast Frozen',
        description:
          'Yellowtail scad is a small schooling carangid with a distinctive yellow tail, taken in quantity along the Omani coast. Affordable and versatile, it is fried, dried and canned across Asian and African markets. Supplied whole and blast frozen.',
        icon: 'fish',
        image: imgYellowtailScad,
      },
      {
        slug: 'yellowstripe-scad',
        name: 'Yellowstripe Scad',
        scientific: 'Selaroides leptolepis',
        forms: 'Whole / Blast Frozen',
        description:
          'Yellowstripe scad is named for the broad golden band running from eye to tail. One of the highest-volume small pelagic catches in the region, it is in steady demand for frying, drying and canning. Supplied whole and blast frozen.',
        icon: 'fish',
        image: imgYellowstripeScad,
      },
      {
        slug: 'pony-fish',
        name: 'Pony Fish',
        scientific: 'Leiognathus equulus',
        forms: 'Whole / Blast Frozen',
        description:
          'The common ponyfish is a small, deep-bodied silver fish taken in large volumes by trawl across the Arabian Sea. Low-cost and widely eaten fried or dried, it ships in bulk to South and Southeast Asian and African markets. Supplied whole and blast frozen.',
        icon: 'fish',
        image: imgPonyFish,
      },
      {
        slug: 'grey-mullet',
        name: 'Grey Mullet',
        scientific: 'Mugil cephalus',
        forms: 'Whole / Blast Frozen',
        description:
          'Flathead grey mullet is a hardy coastal and estuarine fish with rich, distinctive flesh and a long-established market across the Middle East and Africa. Its roe is separately prized. Supplied whole, size-graded and blast frozen.',
        icon: 'fish',
        image: imgGreyMullet,
      },
      {
        slug: 'catfish',
        name: 'Catfish',
        scientific: 'Arius tenuispinis',
        forms: 'Whole / Blast Frozen',
        description:
          'Marine catfish is a soft-fleshed species taken along the Arabian Sea coast, with few bones once trimmed. It sells in steady volume into South Asian and African markets, where it is valued for curries and drying. Supplied whole and blast frozen.',
        icon: 'fish',
        image: imgCatfish,
      },
      {
        slug: 'moonfish',
        name: 'Moonfish',
        scientific: 'Lampris guttatus',
        forms: 'Whole / Blast Frozen',
        description:
          'Moonfish, or opah, is a deep-bodied oceanic species whose flesh ranges from orange to deep red across different parts of the body. It is increasingly sought after by food-service buyers. Supplied whole and blast frozen.',
        icon: 'fish',
        image: imgMoonfish,
      },
    ],
  },
  {
    id: 'crustaceans',
    label: 'Crustaceans',
    blurb: 'Farmed vannamei shrimp, graded to count and blast frozen to the standard your market expects.',
    items: [
      {
        slug: 'vannamei-shrimp',
        name: 'Vannamei Shrimp',
        scientific: 'Litopenaeus vannamei',
        forms: 'Whole / Blast Frozen',
        description:
          'Whiteleg shrimp is the most widely farmed shrimp in the world, valued for consistent sizing and a mild, sweet flavour. We supply it whole, graded to count and blast frozen for retail and food-service buyers.',
        icon: 'shrimp',
        image: imgVannamei,
      },
    ],
  },
];

/* ---------- helpers for the generated pages ---------- */

export const categoryUrl = (categoryId: string) => `/products/${categoryId}/`;
export const productUrl = (categoryId: string, slug: string) => `/products/${categoryId}/${slug}/`;

export interface CatalogueEntry extends CatalogueItem {
  category: Category;
  url: string;
}

/** Every product with its category attached, in catalogue order. */
export const allProducts: CatalogueEntry[] = categories.flatMap((category) =>
  category.items.map((item) => ({ ...item, category, url: productUrl(category.id, item.slug) }))
);

/* ---------- localized views ----------
   Arabic copy lives in catalogue.ar.ts, keyed by category id / product slug.
   Anything without a translation falls back to the English string. */

/** Categories (and their items) with name/forms/description in `lang`. */
export function getCategories(lang: Lang): Category[] {
  if (lang === 'en') return categories;
  return categories.map((c) => {
    const catAr = categoriesAr[c.id];
    return {
      ...c,
      label: catAr?.label ?? c.label,
      blurb: catAr?.blurb ?? c.blurb,
      items: c.items.map((it) => {
        const ar = itemsAr[it.slug];
        return ar ? { ...it, name: ar.name, forms: ar.forms, description: ar.description } : it;
      }),
    };
  });
}

/** Flattened localized product list, with each product's URL for `lang`. */
export function getAllProducts(lang: Lang): CatalogueEntry[] {
  return getCategories(lang).flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category,
      url: localePath(productUrl(category.id, item.slug), lang),
    }))
  );
}

// ============================================
// Global Seas Trust — product catalogue
// Five categories rendered by ProductCatalogue.astro on /products/
// (chip filter + animated grid), expanded into one page per category
// (/products/<category>/) and per product (/products/<category>/<slug>/),
// and exposed to search engines as schema.org ItemList / Product.
// Photos are CC-licensed (see image-credits.json).
// ============================================

import type { ImageMetadata } from 'astro';
import { localePath, type Lang } from '../i18n';
import { categoriesAr, itemsAr } from './catalogue.ar';

import imgYellowfinTuna from '../assets/products/yellowfin-tuna.jpg';
import imgKingfish from '../assets/products/kingfish.jpg';
import imgIndianMackerel from '../assets/products/indian-mackerel.jpg';
import imgHorseMackerel from '../assets/products/horse-mackerel.jpg';
import imgSardine from '../assets/products/sardine.jpg';
import imgRibbonFish from '../assets/products/ribbon-fish.jpg';
import imgRedSnapper from '../assets/products/red-snapper.jpg';
import imgGrouper from '../assets/products/grouper.jpg';
import imgEmperor from '../assets/products/emperor.jpg';
import imgBarracuda from '../assets/products/barracuda.jpg';
import imgPomfret from '../assets/products/pomfret.jpg';
import imgShrimp from '../assets/products/shrimp.jpg';
import imgGreenTiger from '../assets/products/green-tiger-shrimp.jpg';
import imgLobster from '../assets/products/lobster.jpg';
import imgCrab from '../assets/products/crab.jpg';
import imgCuttlefish from '../assets/products/cuttlefish.jpg';
import imgSquid from '../assets/products/squid.jpg';
import imgOctopus from '../assets/products/octopus.jpg';
import imgFishSteaks from '../assets/products/fish-steaks.jpg';
import imgDriedAnchovy from '../assets/products/dried-anchovy.jpg';
import imgDriedSardine from '../assets/products/dried-sardine.jpg';
import imgSaltedFish from '../assets/products/salted-fish.jpg';
import imgSeafoodMix from '../assets/site/banner-products.jpg';
import imgGreyMullet from '../assets/products/grey-mullet.jpg';
import imgWhiteShrimp from '../assets/products/white-shrimp.jpg';
import imgReefSquid from '../assets/products/reef-squid.jpg';
import imgMudCrab from '../assets/products/mud-crab.jpg';
import imgBombayDuck from '../assets/products/bombay-duck.jpg';
import imgDriedShrimp from '../assets/products/dried-shrimp.jpg';
import imgNeedleCuttlefish from '../assets/products/needle-cuttlefish.jpg';

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
    blurb: 'Whole, gutted and processed fish from the Arabian Sea and Indian Ocean, graded to size and packed to order.',
    items: [
      {
        slug: 'yellowfin-tuna',
        name: 'Yellowfin Tuna',
        scientific: 'Thunnus albacares',
        forms: 'Whole / Loins / Steaks',
        description:
          'Yellowfin tuna is a fast-swimming pelagic species caught in the warm offshore waters of the Arabian Sea and Indian Ocean. Its firm, deep-red flesh makes it a staple for sashimi, steaks and canning. We supply it whole, as loins or as portioned steaks, blast-frozen soon after landing to preserve colour and texture.',
        icon: 'fish',
        image: imgYellowfinTuna,
      },
      {
        slug: 'kingfish',
        name: 'Kingfish',
        scientific: 'Scomberomorus commerson',
        forms: 'Whole / Steaks',
        description:
          'Kingfish, the narrow-barred Spanish mackerel, is one of the most prized food fish of the Gulf and Arabian Sea. Its meaty, low-bone flesh is ideal for steaks and grilling. Supplied whole or cut into uniform steaks and frozen to order.',
        icon: 'fish',
        image: imgKingfish,
      },
      {
        slug: 'indian-mackerel',
        name: 'Indian Mackerel',
        scientific: 'Rastrelliger kanagurta',
        forms: 'Whole Round / Block Frozen',
        description:
          'Indian mackerel is a schooling pelagic fish abundant along the Arabian Sea coast and a household staple across South Asia, the Middle East and Africa. Naturally rich in omega-3 oils, it is supplied whole round and typically block frozen for volume buyers.',
        icon: 'fish',
        image: imgIndianMackerel,
      },
      {
        slug: 'horse-mackerel',
        name: 'Horse Mackerel',
        scientific: 'Selar crumenophthalmus',
        forms: 'Whole Round / IQF',
        description:
          'Bigeye scad, marketed as horse mackerel, is a small pelagic schooling fish landed in large volumes across the region. Popular for frying, canning and bait, it is supplied whole round, individually quick frozen or block frozen.',
        icon: 'fish',
        image: imgHorseMackerel,
      },
      {
        slug: 'oil-sardine',
        name: 'Oil Sardine',
        scientific: 'Sardinella longiceps',
        forms: 'Whole Round / IQF',
        description:
          'The Indian oil sardine is the highest-volume pelagic catch of the Arabian Sea and one of the richest natural sources of omega-3 oils. Supplied whole round, IQF or block frozen for retail, canning and industrial buyers.',
        icon: 'fish',
        image: imgSardine,
      },
      {
        slug: 'ribbon-fish',
        name: 'Ribbon Fish',
        scientific: 'Trichiurus lepturus',
        forms: 'Whole / Graded',
        description:
          'Largehead hairtail, known in trade as ribbon fish, is a long, silver, bottom-dwelling fish caught by trawl. It is in strong demand in East Asian and West African markets and is supplied whole, size-graded and frozen.',
        icon: 'fish',
        image: imgRibbonFish,
      },
      {
        slug: 'red-snapper',
        name: 'Red Snapper',
        scientific: 'Lutjanus argentimaculatus',
        forms: 'Whole / Gutted / Fillets',
        description:
          'Mangrove red snapper is a premium reef fish with firm white flesh and a clean flavour, popular in hotel and restaurant kitchens. Supplied whole, gutted or as fillets, frozen to order.',
        icon: 'fish',
        image: imgRedSnapper,
      },
      {
        slug: 'grouper',
        name: 'Grouper',
        scientific: 'Epinephelus coioides',
        forms: 'Whole / Gutted / Fillets',
        description:
          'Orange-spotted grouper, known locally as hammour, is the signature table fish of the Gulf, valued for its dense, flaky white meat. Supplied whole, gutted or as skin-on fillets.',
        icon: 'fish',
        image: imgGrouper,
      },
      {
        slug: 'spangled-emperor',
        name: 'Spangled Emperor',
        scientific: 'Lethrinus nebulosus',
        forms: 'Whole / Gutted',
        description:
          'Spangled emperor (sheri) is a reef-associated species of the Arabian Sea with sweet white flesh well suited to grilling and frying. Supplied whole or gutted and size-graded.',
        icon: 'fish',
        image: imgEmperor,
      },
      {
        slug: 'barracuda',
        name: 'Barracuda',
        scientific: 'Sphyraena jello',
        forms: 'Whole / Steaks',
        description:
          'Pickhandle barracuda is a lean, firm-fleshed predatory fish popular for steaks and curries in Asian and African markets. Supplied whole or cut into steaks.',
        icon: 'fish',
        image: imgBarracuda,
      },
      {
        slug: 'silver-pomfret',
        name: 'Silver Pomfret',
        scientific: 'Pampus argenteus',
        forms: 'Whole Round / Graded',
        description:
          'Silver pomfret is a high-value fish with delicate white flesh, in strong demand across the Gulf, India and East Asia. Supplied whole round and carefully size-graded.',
        icon: 'fish',
        image: imgPomfret,
      },
      {
        slug: 'grey-mullet',
        name: 'Grey Mullet',
        scientific: 'Mugil cephalus',
        forms: 'Whole Round / Gutted',
        description:
          'Flathead grey mullet is a coastal species caught in estuaries and inshore waters, and its roe is also highly prized. Supplied whole round or gutted and frozen.',
        icon: 'fish',
        image: imgGreyMullet,
      },
      {
        slug: 'bombay-duck',
        name: 'Bombay Duck',
        scientific: 'Harpadon nehereus',
        forms: 'Whole / IQF',
        description:
          'Bombay duck is a soft-bodied lizardfish traditionally eaten fried or dried. Supplied whole and individually quick frozen to preserve its delicate texture.',
        icon: 'fish',
        image: imgBombayDuck,
      },
    ],
  },
  {
    id: 'crustaceans',
    label: 'Crustaceans',
    blurb: 'Farmed and wild-caught shrimp, lobster and crab — headless, peeled or whole, in the grade your market expects.',
    items: [
      {
        slug: 'vannamei-shrimp',
        name: 'Vannamei Shrimp',
        scientific: 'Litopenaeus vannamei',
        forms: 'HOSO / HLSO / PD',
        description:
          'Whiteleg shrimp is the most widely farmed shrimp in the world, valued for consistent sizing and a mild, sweet flavour. Supplied head-on shell-on (HOSO), headless shell-on (HLSO) or peeled and deveined (PD), IQF or block frozen.',
        icon: 'shrimp',
        image: imgShrimp,
      },
      {
        slug: 'green-tiger-shrimp',
        name: 'Green Tiger Shrimp',
        scientific: 'Penaeus semisulcatus',
        forms: 'HOSO / PUD',
        description:
          'Green tiger shrimp is a wild-caught species of the Arabian Gulf and Arabian Sea, prized for its large size and firm texture. Supplied head-on shell-on (HOSO) or peeled undeveined (PUD) and frozen.',
        icon: 'shrimp',
        image: imgGreenTiger,
      },
      {
        slug: 'spiny-lobster',
        name: 'Spiny Lobster',
        scientific: 'Panulirus homarus',
        forms: 'Whole / Tails',
        description:
          'Scalloped spiny lobster is caught along the rocky coasts of southern Oman during the managed fishing season. Supplied whole or as tails, frozen.',
        icon: 'crab',
        image: imgLobster,
      },
      {
        slug: 'blue-swimming-crab',
        name: 'Blue Swimming Crab',
        scientific: 'Portunus pelagicus',
        forms: 'Whole / Cut / Pasteurised Meat',
        description:
          'Blue swimming crab is a fast-growing coastal crab with sweet white meat. Supplied whole, cut, or as pasteurised crab meat for food-service buyers.',
        icon: 'crab',
        image: imgCrab,
      },
      {
        slug: 'indian-white-shrimp',
        name: 'Indian White Shrimp',
        scientific: 'Fenneropenaeus indicus',
        forms: 'HOSO / HLSO / PD',
        description:
          'Indian white shrimp is a wild and farmed species of the Indian Ocean with a clean, sweet flavour. Supplied head-on shell-on, headless shell-on or peeled and deveined.',
        icon: 'shrimp',
        image: imgWhiteShrimp,
      },
      {
        slug: 'mud-crab',
        name: 'Mud Crab',
        scientific: 'Scylla serrata',
        forms: 'Live / Whole / Cut',
        description:
          'Mud crab is a large mangrove crab prized in Asian cuisine for its rich meat and roe. Supplied live for premium markets, or whole and cut frozen.',
        icon: 'crab',
        image: imgMudCrab,
      },
    ],
  },
  {
    id: 'cephalopods',
    label: 'Cephalopods',
    blurb: 'Cuttlefish, squid and octopus cleaned and prepared for retail and food-service lines worldwide.',
    items: [
      {
        slug: 'cuttlefish',
        name: 'Cuttlefish',
        scientific: 'Sepia pharaonis',
        forms: 'Whole Cleaned / Fillets',
        description:
          'Pharaoh cuttlefish is the principal cuttlefish of the Arabian Sea and Indian Ocean, with thick, tender white flesh. Supplied whole cleaned or as fillets, IQF or block frozen.',
        icon: 'squid',
        image: imgCuttlefish,
      },
      {
        slug: 'loligo-squid',
        name: 'Loligo Squid',
        scientific: 'Loligo duvauceli',
        forms: 'Whole / Rings / Tubes',
        description:
          'Indian squid is a small, tender loligo species caught in large volumes along the Arabian Sea. Supplied whole, as rings or as cleaned tubes.',
        icon: 'squid',
        image: imgSquid,
      },
      {
        slug: 'octopus',
        name: 'Octopus',
        scientific: 'Octopus cyanea',
        forms: 'Whole Cleaned / Flower',
        description:
          'Day octopus is common on Indian Ocean reefs and valued for its firm texture. Supplied whole cleaned or in flower style for Mediterranean and East Asian markets.',
        icon: 'squid',
        image: imgOctopus,
      },
      {
        slug: 'bigfin-reef-squid',
        name: 'Bigfin Reef Squid',
        scientific: 'Sepioteuthis lessoniana',
        forms: 'Whole / Cleaned',
        description:
          'Bigfin reef squid has a thick mantle and sweet flavour, favoured for sashimi and grilling. Supplied whole or cleaned and frozen.',
        icon: 'squid',
        image: imgReefSquid,
      },
      {
        slug: 'needle-cuttlefish',
        name: 'Needle Cuttlefish',
        scientific: 'Sepia aculeata',
        forms: 'Whole / Cleaned',
        description:
          'Needle cuttlefish is a smaller cuttlefish species landed by trawl across the region. Supplied whole or cleaned and frozen.',
        icon: 'squid',
        image: imgNeedleCuttlefish,
      },
    ],
  },
  {
    id: 'value-added',
    label: 'Value Added',
    blurb: 'Retail-ready lines processed and packed in-house — from portioned fillets to private-label medleys.',
    items: [
      {
        slug: 'fish-steaks',
        name: 'Fish Steaks',
        forms: 'Kingfish / Tuna / Barracuda — IQF',
        description:
          'Bone-in steaks cut from kingfish, tuna and barracuda to a uniform thickness, individually quick frozen and packed for retail and food service.',
        icon: 'fish',
        image: imgFishSteaks,
      },
      {
        slug: 'seafood-mix',
        name: 'Seafood Mix',
        forms: 'Mixed seafood medley packs',
        description:
          'A ready-to-cook medley of shrimp, squid rings, cuttlefish and fish pieces, individually quick frozen and packed to customer recipe and weight, with private-label options.',
        icon: 'box',
        image: imgSeafoodMix,
      },
    ],
  },
  {
    id: 'dried',
    label: 'Dried & Salted',
    blurb: 'Traditional sun-dried and salt-cured lines, prepared and graded for markets across Asia and Africa.',
    items: [
      {
        slug: 'dried-anchovy',
        name: 'Dried Anchovy',
        scientific: 'Stolephorus commersonnii',
        forms: 'Sun-dried / Graded',
        description:
          "Commerson's anchovy sun-dried on the coast and graded by size — a staple ingredient across South and Southeast Asia.",
        icon: 'fish',
        image: imgDriedAnchovy,
      },
      {
        slug: 'dried-sardine',
        name: 'Dried Sardine',
        scientific: 'Sardinella longiceps',
        forms: 'Sun-dried',
        description:
          'Indian oil sardine sun-dried whole for markets in East Africa and Asia, graded and packed in bulk.',
        icon: 'fish',
        image: imgDriedSardine,
      },
      {
        slug: 'salted-ribbon-fish',
        name: 'Salted Ribbon Fish',
        scientific: 'Trichiurus lepturus',
        forms: 'Salted & Dried',
        description:
          'Ribbon fish salted and dried using traditional methods, for markets that value a long shelf life without refrigeration.',
        icon: 'fish',
        image: imgSaltedFish,
      },
      {
        slug: 'dried-shrimp',
        name: 'Dried Shrimp',
        scientific: 'Metapenaeus spp.',
        forms: 'Sun-dried / Graded',
        description:
          'Small Metapenaeus shrimp boiled, sun-dried and graded — a widely used seasoning and ingredient across Asia and Africa.',
        icon: 'shrimp',
        image: imgDriedShrimp,
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

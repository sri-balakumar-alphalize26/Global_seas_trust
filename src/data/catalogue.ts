// ============================================
// Global Seas Trust — product catalogue
// Five categories shown as tabs on /products/.
// Photos are CC-licensed (see image-credits.json);
// items without a photo render an icon tile.
// ============================================

import type { ImageMetadata } from 'astro';

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
  name: string;
  scientific?: string;
  forms: string;
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
      { name: 'Yellowfin Tuna', scientific: 'Thunnus albacares', forms: 'Whole / Loins / Steaks', icon: 'fish', image: imgYellowfinTuna },
      { name: 'Kingfish', scientific: 'Scomberomorus commerson', forms: 'Whole / Steaks', icon: 'fish', image: imgKingfish },
      { name: 'Indian Mackerel', scientific: 'Rastrelliger kanagurta', forms: 'Whole Round / Block Frozen', icon: 'fish', image: imgIndianMackerel },
      { name: 'Horse Mackerel', scientific: 'Selar crumenophthalmus', forms: 'Whole Round / IQF', icon: 'fish', image: imgHorseMackerel },
      { name: 'Oil Sardine', scientific: 'Sardinella longiceps', forms: 'Whole Round / IQF', icon: 'fish', image: imgSardine },
      { name: 'Ribbon Fish', scientific: 'Trichiurus lepturus', forms: 'Whole / Graded', icon: 'fish', image: imgRibbonFish },
      { name: 'Red Snapper', scientific: 'Lutjanus argentimaculatus', forms: 'Whole / Gutted / Fillets', icon: 'fish', image: imgRedSnapper },
      { name: 'Grouper', scientific: 'Epinephelus coioides', forms: 'Whole / Gutted / Fillets', icon: 'fish', image: imgGrouper },
      { name: 'Spangled Emperor', scientific: 'Lethrinus nebulosus', forms: 'Whole / Gutted', icon: 'fish', image: imgEmperor },
      { name: 'Barracuda', scientific: 'Sphyraena jello', forms: 'Whole / Steaks', icon: 'fish', image: imgBarracuda },
      { name: 'Silver Pomfret', scientific: 'Pampus argenteus', forms: 'Whole Round / Graded', icon: 'fish', image: imgPomfret },
      { name: 'Grey Mullet', scientific: 'Mugil cephalus', forms: 'Whole Round / Gutted', icon: 'fish', image: imgGreyMullet },
      { name: 'Bombay Duck', scientific: 'Harpadon nehereus', forms: 'Whole / IQF', icon: 'fish', image: imgBombayDuck },
    ],
  },
  {
    id: 'crustaceans',
    label: 'Crustaceans',
    blurb: 'Farmed and wild-caught shrimp, lobster and crab — headless, peeled or whole, in the grade your market expects.',
    items: [
      { name: 'Vannamei Shrimp', scientific: 'Litopenaeus vannamei', forms: 'HOSO / HLSO / PD', icon: 'shrimp', image: imgShrimp },
      { name: 'Green Tiger Shrimp', scientific: 'Penaeus semisulcatus', forms: 'HOSO / PUD', icon: 'shrimp', image: imgGreenTiger },
      { name: 'Spiny Lobster', scientific: 'Panulirus homarus', forms: 'Whole / Tails', icon: 'crab', image: imgLobster },
      { name: 'Blue Swimming Crab', scientific: 'Portunus pelagicus', forms: 'Whole / Cut / Pasteurised Meat', icon: 'crab', image: imgCrab },
      { name: 'Indian White Shrimp', scientific: 'Fenneropenaeus indicus', forms: 'HOSO / HLSO / PD', icon: 'shrimp', image: imgWhiteShrimp },
      { name: 'Mud Crab', scientific: 'Scylla serrata', forms: 'Live / Whole / Cut', icon: 'crab', image: imgMudCrab },
    ],
  },
  {
    id: 'cephalopods',
    label: 'Cephalopods',
    blurb: 'Cuttlefish, squid and octopus cleaned and prepared for retail and food-service lines worldwide.',
    items: [
      { name: 'Cuttlefish', scientific: 'Sepia pharaonis', forms: 'Whole Cleaned / Fillets', icon: 'squid', image: imgCuttlefish },
      { name: 'Loligo Squid', scientific: 'Loligo duvauceli', forms: 'Whole / Rings / Tubes', icon: 'squid', image: imgSquid },
      { name: 'Octopus', scientific: 'Octopus cyanea', forms: 'Whole Cleaned / Flower', icon: 'squid', image: imgOctopus },
      { name: 'Bigfin Reef Squid', scientific: 'Sepioteuthis lessoniana', forms: 'Whole / Cleaned', icon: 'squid', image: imgReefSquid },
      { name: 'Needle Cuttlefish', scientific: 'Sepia aculeata', forms: 'Whole / Cleaned', icon: 'squid', image: imgNeedleCuttlefish },
    ],
  },
  {
    id: 'value-added',
    label: 'Value Added',
    blurb: 'Retail-ready lines processed and packed in-house — from portioned fillets to private-label medleys.',
    items: [
      { name: 'Fish Steaks', forms: 'Kingfish / Tuna / Barracuda — IQF', icon: 'fish', image: imgFishSteaks },
      { name: 'Seafood Mix', forms: 'Mixed seafood medley packs', icon: 'box', image: imgSeafoodMix },
    ],
  },
  {
    id: 'dried',
    label: 'Dried & Salted',
    blurb: 'Traditional sun-dried and salt-cured lines, prepared and graded for markets across Asia and Africa.',
    items: [
      { name: 'Dried Anchovy', scientific: 'Stolephorus commersonnii', forms: 'Sun-dried / Graded', icon: 'fish', image: imgDriedAnchovy },
      { name: 'Dried Sardine', scientific: 'Sardinella longiceps', forms: 'Sun-dried', icon: 'fish', image: imgDriedSardine },
      { name: 'Salted Ribbon Fish', scientific: 'Trichiurus lepturus', forms: 'Salted & Dried', icon: 'fish', image: imgSaltedFish },
      { name: 'Dried Shrimp', scientific: 'Metapenaeus spp.', forms: 'Sun-dried / Graded', icon: 'shrimp', image: imgDriedShrimp },
    ],
  },
];

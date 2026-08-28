// ============================================
// Global Sea Trust — site content
// Edit this file to change company details,
// products, stats, brands, and contact info.
// Images live in src/assets/ (site/ and products/).
// ============================================

import type { ImageMetadata } from 'astro';
import heroImage from '../assets/site/hero.jpg';
import featureImage from '../assets/site/feature.jpg';
import aboutImage from '../assets/site/about.jpg';
import imgColdchain from '../assets/site/process-coldchain.jpg';
import imgGrading from '../assets/site/process-grading.jpg';
import imgPacking from '../assets/site/process-packing.jpg';
import imgQa from '../assets/site/process-qa.jpg';
import imgDelivery from '../assets/site/process-delivery.jpg';
import imgRetail from '../assets/site/division-retail.jpg';
import imgYellowfinTuna from '../assets/products/yellowfin-tuna.jpg';
import imgKingfish from '../assets/products/kingfish.jpg';
import imgIndianMackerel from '../assets/products/indian-mackerel.jpg';
import imgRibbonFish from '../assets/products/ribbon-fish.jpg';
import imgSardine from '../assets/products/sardine.jpg';
import imgCuttlefish from '../assets/products/cuttlefish.jpg';
import imgSquid from '../assets/products/squid.jpg';
import imgShrimp from '../assets/products/shrimp.jpg';

export const siteImages = {
  hero: heroImage,
  feature: featureImage,
  about: aboutImage,
};

export const company = {
  name: 'Global Seas Trust',
  tagline: 'Quality Seafood. Trusted Worldwide.',
  founded: 2012,
  description:
    'At Global Seas Trust, our mission is to bring high-quality seafood from trusted sources to customers across the world. We are committed to delivering fresh and frozen seafood with uncompromising standards of quality, freshness, food safety, and reliability.',
  address: 'P.O. Box 1234, Industrial Port Area, Muscat, Sultanate of Oman',
  phone: '+968 9000 0000',
  email: 'info@globalseastrust.com',
  hours: 'Sunday – Thursday, 8:00 AM – 5:00 PM',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Our Products', href: '/products/' },
  { label: 'Our Brands', href: '/brands/' },
  { label: 'Contact Us', href: '/contact/' },
];

export const stats = [
  { value: '14+', label: 'Years of Experience', icon: 'anchor' },
  { value: '350+', label: 'Team Members', icon: 'people' },
  { value: '25+', label: 'Export Markets', icon: 'globe' },
  { value: '60T', label: 'Daily Cold-Chain Capacity', icon: 'truck' },
];

export interface Product {
  name: string;
  scientific: string;
  forms: string;
  icon: 'fish' | 'shrimp' | 'squid' | 'crab';
  image: ImageMetadata;
}

export const products: Product[] = [
  { name: 'Yellowfin Tuna', scientific: 'Thunnus albacares', forms: 'Whole / Loins / Steaks', icon: 'fish', image: imgYellowfinTuna },
  { name: 'Kingfish', scientific: 'Scomberomorus commerson', forms: 'Whole / Steaks', icon: 'fish', image: imgKingfish },
  { name: 'Indian Mackerel', scientific: 'Rastrelliger kanagurta', forms: 'Whole Round / Block Frozen', icon: 'fish', image: imgIndianMackerel },
  { name: 'Ribbon Fish', scientific: 'Trichiurus lepturus', forms: 'Whole / Graded', icon: 'fish', image: imgRibbonFish },
  { name: 'Oil Sardine', scientific: 'Sardinella longiceps', forms: 'Whole Round / IQF', icon: 'fish', image: imgSardine },
  { name: 'Cuttlefish', scientific: 'Sepia pharaonis', forms: 'Whole Cleaned / Fillets', icon: 'squid', image: imgCuttlefish },
  { name: 'Loligo Squid', scientific: 'Loligo duvauceli', forms: 'Whole / Rings / Tubes', icon: 'squid', image: imgSquid },
  { name: 'Vannamei Shrimp', scientific: 'Litopenaeus vannamei', forms: 'HOSO / HLSO / PD', icon: 'shrimp', image: imgShrimp },
];

export const certifications = [
  { code: 'HACCP', label: 'Hazard Analysis & Critical Control Points' },
  { code: 'ISO 22000', label: 'Food Safety Management' },
  { code: 'EU No.', label: 'Approved for European Union Export' },
  { code: 'BRC', label: 'Global Standard for Food Safety' },
  { code: 'HALAL', label: 'Certified Halal Handling' },
  { code: 'FDA', label: 'US FDA Registered Facility' },
];

export const divisions = [
  {
    title: 'Seafood Processing',
    icon: 'factory',
    image: aboutImage,
    text: 'Modern processing lines for grading, filleting, IQF and block freezing — engineered to preserve freshness from landing site to final packing.',
  },
  {
    title: 'Fish Meal & Fish Oil',
    icon: 'drop',
    image: imgSardine,
    text: 'By-products and pelagic catch converted into high-protein fish meal and refined fish oil for aquaculture and animal nutrition industries.',
  },
  {
    title: 'Value-Added Manufacturing',
    icon: 'box',
    image: imgRetail,
    text: 'Retail-ready portions, marinated lines and private-label packing tailored to supermarket chains and food-service partners worldwide.',
  },
];

export const processSteps = [
  { step: '01', title: 'Responsible Sourcing', image: featureImage, text: 'Catch secured daily from vetted fishing fleets and landing centres.' },
  { step: '02', title: 'Cold-Chain Intake', image: imgColdchain, text: 'Rapid icing and temperature-controlled transfer to our facilities.' },
  { step: '03', title: 'Processing & Grading', image: imgGrading, text: 'Hygienic processing, size grading and quality inspection by trained teams.' },
  { step: '04', title: 'Freezing & Packing', image: imgPacking, text: 'IQF and blast freezing locked at −40°C, packed to customer specification.' },
  { step: '05', title: 'Quality Assurance', image: imgQa, text: 'Lab testing and documentation against international food-safety standards.' },
  { step: '06', title: 'Global Delivery', image: imgDelivery, text: 'Reefer-container logistics to ports across Asia, Europe, Africa and the Americas.' },
];

export const brands = [
  {
    name: 'OceanCrest',
    positioning: 'Premium Export Range',
    text: 'Our flagship label for sashimi-grade tuna, kingfish and premium cephalopods — hand-graded and destined for discerning wholesale and HoReCa buyers.',
    color: '#123a9c',
  },
  {
    name: 'BlueHarvest',
    positioning: 'Everyday Family Seafood',
    text: 'Wholesome, affordable frozen seafood for retail shelves — sardines, mackerel and shrimp in family-sized packs with clear traceability.',
    color: '#1a5bd7',
  },
];

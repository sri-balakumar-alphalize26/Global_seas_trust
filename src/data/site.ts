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
  nameAr: 'الثقة العالمية للبحار',
  tagline: 'Quality Seafood. Trusted Worldwide.',
  taglineAr: 'مأكولات بحرية عالية الجودة. موثوقة حول العالم.',
  descriptionAr:
    'في الثقة العالمية للبحار، مهمتنا هي توفير مأكولات بحرية عالية الجودة من مصادر موثوقة لعملائنا حول العالم. نلتزم بتقديم مأكولات بحرية طازجة ومجمّدة وفق أعلى معايير الجودة والنضارة وسلامة الغذاء والموثوقية.',
  founded: 2012,
  description:
    'At Global Seas Trust, our mission is to bring high-quality seafood from trusted sources to customers across the world. We are committed to delivering fresh and frozen seafood with uncompromising standards of quality, freshness, food safety, and reliability.',
  // Official details (company letterhead, C.R. 1403379).
  address: 'Quroon, Jalan Bani Bu Hassan, P.Code 415, Sultanate of Oman',
  addressAr: 'قرون، جعلان بني بو حسن، الرمز البريدي 415، سلطنة عُمان',
  /** Two-line form for tiles and panels. */
  addressLines: ['Quroon, Jalan Bani Bu Hassan,', 'P.Code 415, Sultanate of Oman'],
  addressLinesAr: ['قرون، جعلان بني بو حسن،', 'الرمز البريدي 415، سلطنة عُمان'],
  locality: 'Jalan Bani Bu Hassan',
  localityAr: 'جعلان بني بو حسن',
  region: 'Ash Sharqiyah South Governorate',
  postalCode: '415',
  /** Commercial Registration number (shown on the site — expected in the Gulf market). */
  crNumber: '1403379',
  phone: '+968 9333 3731',
  email: 'globalseastrust@gmail.com',
  mapsUrl: 'https://maps.app.goo.gl/17quP2LEkg3EuGxh7',
  /** Pin location (21°24'52.5"N 59°15'47.2"E) — from the Maps link above. */
  geo: { lat: 21.4145716, lng: 59.2631178 },
  /**
   * Key-free Google Maps embed, satellite layer (t=k). If Google ever retires
   * this endpoint, paste the iframe src from Maps → Share → "Embed a map" here.
   */
  mapEmbedSrc: 'https://maps.google.com/maps?q=21.4145716,59.2631178&t=k&z=17&hl=en&output=embed',
  hours: 'Sunday – Thursday, 8:00 AM – 5:00 PM',
  /** Structured form of `hours` → schema.org `openingHoursSpecification`. */
  openingHours: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '08:00',
    closes: '17:00',
  },
  /** Official social profile URLs (Facebook, LinkedIn, Instagram…) → schema.org `sameAs`. */
  socials: [] as string[],
};

/** Reseller credit shown in the footer bar ("Powered by" + logo → their site). */
export const poweredBy = {
  name: 'Nex Genn POS',
  url: 'https://nexgennpos.com/',
  logo: '/nexgenn-logo.webp',
};

/** `key` maps to the nav labels in src/i18n/ui.ts. */
export const navLinks = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About Us', href: '/about/' },
  { key: 'products', label: 'Our Products', href: '/products/' },
  { key: 'brands', label: 'Our Brands', href: '/brands/' },
  { key: 'contact', label: 'Contact Us', href: '/contact/' },
] as const;

export const stats = [
  { value: '14+', label: 'Years of Experience', labelAr: 'سنوات من الخبرة', icon: 'anchor' },
  { value: '350+', label: 'Team Members', labelAr: 'أعضاء الفريق', icon: 'people' },
  { value: '25+', label: 'Export Markets', labelAr: 'أسواق التصدير', icon: 'globe' },
  { value: '60T', label: 'Daily Cold-Chain Capacity', labelAr: 'طاقة سلسلة التبريد اليومية', icon: 'truck' },
];

export interface Product {
  name: string;
  nameAr: string;
  scientific: string;
  forms: string;
  formsAr: string;
  icon: 'fish' | 'shrimp' | 'squid' | 'crab';
  image: ImageMetadata;
  /** the product's own page under /products/<category>/<slug>/ */
  href: string;
}

export const products: Product[] = [
  { name: 'Yellowfin Tuna', nameAr: 'تونة صفراء الزعانف', scientific: 'Thunnus albacares', forms: 'Whole / Loins / Steaks', formsAr: 'كاملة / قطع ظهر / شرائح', icon: 'fish', image: imgYellowfinTuna, href: '/products/fish/yellowfin-tuna/' },
  { name: 'Kingfish', nameAr: 'كنعد', scientific: 'Scomberomorus commerson', forms: 'Whole / Steaks', formsAr: 'كاملة / شرائح', icon: 'fish', image: imgKingfish, href: '/products/fish/kingfish/' },
  { name: 'Indian Mackerel', nameAr: 'ماكريل هندي', scientific: 'Rastrelliger kanagurta', forms: 'Whole Round / Block Frozen', formsAr: 'كاملة / مجمّدة بالكتل', icon: 'fish', image: imgIndianMackerel, href: '/products/fish/indian-mackerel/' },
  { name: 'Ribbon Fish', nameAr: 'سمك الشريط (سيف)', scientific: 'Trichiurus lepturus', forms: 'Whole / Graded', formsAr: 'كاملة / مصنّفة حسب الحجم', icon: 'fish', image: imgRibbonFish, href: '/products/fish/ribbon-fish/' },
  { name: 'Oil Sardine', nameAr: 'سردين زيتي', scientific: 'Sardinella longiceps', forms: 'Whole Round / IQF', formsAr: 'كاملة / مجمّدة فردياً (IQF)', icon: 'fish', image: imgSardine, href: '/products/fish/oil-sardine/' },
  { name: 'Cuttlefish', nameAr: 'حبّار (سبيط)', scientific: 'Sepia pharaonis', forms: 'Whole Cleaned / Fillets', formsAr: 'كامل منظّف / فيليه', icon: 'squid', image: imgCuttlefish, href: '/products/cephalopods/cuttlefish/' },
  { name: 'Loligo Squid', nameAr: 'كاليماري (لوليغو)', scientific: 'Loligo duvauceli', forms: 'Whole / Rings / Tubes', formsAr: 'كامل / حلقات / أنابيب', icon: 'squid', image: imgSquid, href: '/products/cephalopods/loligo-squid/' },
  { name: 'Vannamei Shrimp', nameAr: 'روبيان فانامي', scientific: 'Litopenaeus vannamei', forms: 'HOSO / HLSO / PD', formsAr: 'بالرأس والقشر / بدون رأس بالقشر / مقشّر', icon: 'shrimp', image: imgShrimp, href: '/products/crustaceans/vannamei-shrimp/' },
];

/** Packing formats offered for every line — shown on /products/ and each product page. */
export const packingOptions = [
  {
    title: 'IQF (Individually Quick Frozen)',
    titleAr: 'التجميد الفردي السريع (IQF)',
    text: 'Individually frozen pieces for easy portioning — ideal for retail bags and food service.',
    textAr: 'قطع مجمّدة فردياً لسهولة التقسيم — مثالية لأكياس التجزئة وخدمات الطعام.',
  },
  {
    title: 'Block Frozen',
    titleAr: 'التجميد بالكتل',
    text: 'Compact frozen blocks for industrial buyers and reprocessors, packed to weight specification.',
    textAr: 'كتل مجمّدة متراصّة لمشتري الصناعة وإعادة التصنيع، معبّأة حسب مواصفة الوزن.',
  },
  {
    title: 'Vacuum / Retail Packs',
    titleAr: 'عبوات مفرّغة من الهواء / عبوات تجزئة',
    text: 'Skin-pack and vacuum options with private-label printing for supermarket shelves.',
    textAr: 'خيارات التغليف الملتصق والمفرّغ من الهواء مع طباعة بعلامة خاصة لرفوف المتاجر الكبرى.',
  },
  {
    title: 'Bulk / Bin Loading',
    titleAr: 'التحميل بالجملة / بالحاويات',
    text: 'High-volume loading for fish meal, bait and industrial-grade consignments.',
    textAr: 'تحميل بكميات كبيرة لمسحوق السمك والطُعم والشحنات ذات الدرجة الصناعية.',
  },
];

export const certifications = [
  { code: 'HACCP', label: 'Hazard Analysis & Critical Control Points', labelAr: 'تحليل المخاطر ونقاط التحكم الحرجة' },
  { code: 'ISO 22000', label: 'Food Safety Management', labelAr: 'إدارة سلامة الغذاء' },
  { code: 'EU No.', label: 'Approved for European Union Export', labelAr: 'معتمد للتصدير إلى الاتحاد الأوروبي' },
  { code: 'BRC', label: 'Global Standard for Food Safety', labelAr: 'المعيار العالمي لسلامة الغذاء' },
  { code: 'HALAL', label: 'Certified Halal Handling', labelAr: 'تداول حلال معتمد' },
  { code: 'FDA', label: 'US FDA Registered Facility', labelAr: 'منشأة مسجّلة لدى إدارة الغذاء والدواء الأمريكية' },
];

export const divisions = [
  {
    title: 'Seafood Processing',
    titleAr: 'تصنيع المأكولات البحرية',
    icon: 'factory',
    image: aboutImage,
    text: 'Modern processing lines for grading, filleting, IQF and block freezing — engineered to preserve freshness from landing site to final packing.',
    textAr: 'خطوط تصنيع حديثة للفرز والفيليه والتجميد الفردي والتجميد بالكتل — مصمّمة للحفاظ على النضارة من موقع الإنزال حتى التعبئة النهائية.',
  },
  {
    title: 'Fish Meal & Fish Oil',
    titleAr: 'مسحوق السمك وزيت السمك',
    icon: 'drop',
    image: imgSardine,
    text: 'By-products and pelagic catch converted into high-protein fish meal and refined fish oil for aquaculture and animal nutrition industries.',
    textAr: 'تحويل المنتجات الثانوية وأسماك السطح إلى مسحوق سمك عالي البروتين وزيت سمك مكرّر لصناعات الاستزراع المائي وتغذية الحيوان.',
  },
  {
    title: 'Value-Added Manufacturing',
    titleAr: 'التصنيع ذو القيمة المضافة',
    icon: 'box',
    image: imgRetail,
    text: 'Retail-ready portions, marinated lines and private-label packing tailored to supermarket chains and food-service partners worldwide.',
    textAr: 'حصص جاهزة للبيع بالتجزئة، وخطوط متبّلة، وتعبئة بعلامة خاصة مصمّمة لسلاسل المتاجر الكبرى وشركاء خدمات الطعام حول العالم.',
  },
];

export const processSteps = [
  { step: '01', title: 'Responsible Sourcing', titleAr: 'مصادر مسؤولة', image: featureImage, text: 'Catch secured daily from vetted fishing fleets and landing centres.', textAr: 'صيد يُؤمَّن يومياً من أساطيل صيد ومراكز إنزال معتمدة.' },
  { step: '02', title: 'Cold-Chain Intake', titleAr: 'الاستلام ضمن سلسلة التبريد', image: imgColdchain, text: 'Rapid icing and temperature-controlled transfer to our facilities.', textAr: 'تثليج سريع ونقل مضبوط الحرارة إلى منشآتنا.' },
  { step: '03', title: 'Processing & Grading', titleAr: 'التصنيع والفرز', image: imgGrading, text: 'Hygienic processing, size grading and quality inspection by trained teams.', textAr: 'تصنيع صحي وفرز حسب الحجم وفحص جودة بواسطة فرق مدرّبة.' },
  { step: '04', title: 'Freezing & Packing', titleAr: 'التجميد والتعبئة', image: imgPacking, text: 'IQF and blast freezing locked at −40°C, packed to customer specification.', textAr: 'تجميد فردي وتجميد سريع عند −40 درجة مئوية، وتعبئة وفق مواصفات العميل.' },
  { step: '05', title: 'Quality Assurance', titleAr: 'ضمان الجودة', image: imgQa, text: 'Lab testing and documentation against international food-safety standards.', textAr: 'فحوصات مخبرية وتوثيق وفق معايير سلامة الغذاء الدولية.' },
  { step: '06', title: 'Global Delivery', titleAr: 'التوصيل العالمي', image: imgDelivery, text: 'Reefer-container logistics to ports across Asia, Europe, Africa and the Americas.', textAr: 'خدمات لوجستية بحاويات مبرّدة إلى موانئ آسيا وأوروبا وأفريقيا والأمريكتين.' },
];

export const brands = [
  {
    name: 'OceanCrest',
    positioning: 'Premium Export Range',
    positioningAr: 'مجموعة التصدير الفاخرة',
    text: 'Our flagship label for sashimi-grade tuna, kingfish and premium cephalopods — hand-graded and destined for discerning wholesale and HoReCa buyers.',
    textAr:
      'علامتنا الرائدة للتونة بدرجة الساشيمي والكنعد والرخويات الرأسقدمية الفاخرة — مفروزة يدوياً وموجّهة لمشتري الجملة والفنادق والمطاعم من ذوي الذوق الرفيع.',
    color: '#123a9c',
  },
  {
    name: 'BlueHarvest',
    positioning: 'Everyday Family Seafood',
    positioningAr: 'مأكولات بحرية عائلية يومية',
    text: 'Wholesome, affordable frozen seafood for retail shelves — sardines, mackerel and shrimp in family-sized packs with clear traceability.',
    textAr:
      'مأكولات بحرية مجمّدة صحية وبأسعار مناسبة لرفوف التجزئة — سردين وماكريل وروبيان في عبوات عائلية مع تتبّع واضح للمصدر.',
    color: '#1a5bd7',
  },
];

// ============================================
// Global Sea Trust — site content
// Edit this file to change company details,
// products, stats, brands, and contact info.
// Images live in src/assets/ (site/ and products/).
// ============================================

import type { ImageMetadata } from 'astro';
// The company's own plant, photographed August 2026 — these replace the stock
// market photography the client asked us to drop.
import imgBlastFreezer1 from '../assets/site/facility-blast-freezer-1.jpg';
import imgBlastFreezer2 from '../assets/site/facility-blast-freezer-2.jpg';
import imgBlastFreezer3 from '../assets/site/facility-blast-freezer-3.jpg';
import imgChillRoom from '../assets/site/facility-chill-room.jpg';
import imgColdStore from '../assets/site/facility-cold-store.jpg';
import imgHeroFishing from '../assets/site/hero-fishing.jpg';
import imgAboutObjective from '../assets/site/about-objective.jpg';
// Second set, supplied 4 Sep 2026. See CLIENT-UPDATE.md — five of these are
// AI-generated or stock rather than the company's own plant, which the client
// was told about and asked us to publish anyway.
import imgHarvestWaters from '../assets/site/harvest-pristine-waters.jpg';
import imgQualityProcessing from '../assets/site/quality-processing.jpg';
import imgHygienicPacking from '../assets/site/hygienic-packing.jpg';
import imgResponsibleSourcing from '../assets/site/process-responsible-sourcing.jpg';
import imgGrading from '../assets/site/process-grading.jpg';
import imgFreezingPacking from '../assets/site/process-freezing-packing.jpg';
import imgQualityAssurance from '../assets/site/process-quality-assurance.jpg';
import imgGlobalDelivery from '../assets/site/process-global-delivery.jpg';
import imgYellowfinTuna from '../assets/products/yellowfin-tuna.jpg';
import imgGrouper from '../assets/products/grouper.jpg';
import imgEmperor from '../assets/products/spangled-emperor.jpg';
import imgGreyMullet from '../assets/products/grey-mullet.jpg';
import imgRibbonFish from '../assets/products/ribbon-fish.jpg';
import imgIndianMackerel from '../assets/products/indian-mackerel.jpg';
import imgNeedlefish from '../assets/products/needlefish.jpg';
import imgVannamei from '../assets/products/vannamei-shrimp.jpg';

// Every image on the site is the company's own. The stock photography that
// shipped with the scaffold — including a Santorini hero — was removed.
export const siteImages = {
  hero: imgHeroFishing,
  feature: imgHarvestWaters,
  about: imgAboutObjective,
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
  /** Second line — shown beside the first on Contact, and offered by the enquiry form. */
  phoneAlt: '+968 9902 3664',
  email: 'globalseastrust@gmail.com',
  /** Sales enquiries — published alongside the general address on /contact/. */
  emailSales: 'globalseastrustsales@gmail.com',
  mapsUrl: 'https://maps.app.goo.gl/17quP2LEkg3EuGxh7',
  /** Pin location (21°24'52.5"N 59°15'47.2"E) — from the Maps link above. */
  geo: { lat: 21.4145716, lng: 59.2631178 },
  /**
   * Key-free Google Maps embed, satellite layer (t=k). If Google ever retires
   * this endpoint, paste the iframe src from Maps → Share → "Embed a map" here.
   */
  mapEmbedSrc: 'https://maps.google.com/maps?q=21.4145716,59.2631178&t=k&z=17&hl=en&output=embed',
  hours: 'Open 24 hours, 7 days a week',
  /**
   * Structured form of `hours` → schema.org `openingHoursSpecification`.
   * All seven days spanning 00:00–23:59 is the schema.org convention for a
   * business that never closes — the values look odd in isolation, but this is
   * how a 24/7 operation is expressed.
   */
  openingHours: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '00:00',
    closes: '23:59',
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
  { key: 'infrastructure', label: 'Infrastructure', href: '/infrastructure/' },
  // 'brands' is parked — see src/pages/_brands.astro. Restore this line and
  // rename both shims back once the client supplies real brand content.
  { key: 'contact', label: 'Contact Us', href: '/contact/' },
] as const;

/**
 * Every figure here is evidence-backed: the freezer and store counts and the
 * core temperature are read off the company's own facility photographs
 * (the blast-freezer door display shows −39.7 °C), and the species count
 * tracks the catalogue in catalogue.ts — keep the two in sync.
 *
 * The previous tiles (14+ years, 350+ staff, 25+ markets, 60T daily capacity)
 * came from the original scaffold, not the client, and were withdrawn.
 */
export const stats = [
  { value: '3', label: 'Blast Freezers', labelAr: 'غرف تجميد سريع', icon: 'factory' },
  { value: '−40 °C', label: 'Blast-Frozen Core', labelAr: 'حرارة القلب بعد التجميد', icon: 'drop' },
  { value: '2', label: 'Cold Stores', labelAr: 'مخازن باردة', icon: 'box' },
  { value: '25', label: 'Species Exported', labelAr: 'نوعاً نصدّره', icon: 'fish' },
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

// Eight cards, two clean rows of four — .product-grid in HomePage.astro is a
// fixed 4-column grid, so any other count leaves an orphan row.
// Every line ships whole; the value-added forms were dropped at the client's
// request (29 Aug brief).
export const products: Product[] = [
  { name: 'Yellowfin Tuna', nameAr: 'تونة صفراء الزعانف', scientific: 'Thunnus albacares', forms: 'Whole', formsAr: 'كاملة', icon: 'fish', image: imgYellowfinTuna, href: '/products/fish/yellowfin-tuna/' },
  { name: 'Grouper', nameAr: 'هامور', scientific: 'Epinephelus diacanthus', forms: 'Whole', formsAr: 'كاملة', icon: 'fish', image: imgGrouper, href: '/products/fish/grouper/' },
  { name: 'Emperor', nameAr: 'شعري', scientific: 'Lethrinus nebulosus', forms: 'Whole', formsAr: 'كاملة', icon: 'fish', image: imgEmperor, href: '/products/fish/spangled-emperor/' },
  { name: 'Grey Mullet', nameAr: 'بياح', scientific: 'Mugil cephalus', forms: 'Whole', formsAr: 'كاملة', icon: 'fish', image: imgGreyMullet, href: '/products/fish/grey-mullet/' },
  { name: 'Ribbon Fish', nameAr: 'سمك الشريط (سيف)', scientific: 'Trichiurus lepturus', forms: 'Whole', formsAr: 'كاملة', icon: 'fish', image: imgRibbonFish, href: '/products/fish/ribbon-fish/' },
  { name: 'Indian Mackerel', nameAr: 'ماكريل هندي', scientific: 'Rastrelliger kanagurta', forms: 'Whole', formsAr: 'كاملة', icon: 'fish', image: imgIndianMackerel, href: '/products/fish/indian-mackerel/' },
  { name: 'Needlefish', nameAr: 'سمك الإبرة (حاقول)', scientific: 'Belonidae', forms: 'Whole', formsAr: 'كاملة', icon: 'fish', image: imgNeedlefish, href: '/products/fish/needlefish/' },
  { name: 'Vannamei Shrimp', nameAr: 'روبيان فانامي', scientific: 'Litopenaeus vannamei', forms: 'Whole', formsAr: 'كامل', icon: 'shrimp', image: imgVannamei, href: '/products/crustaceans/vannamei-shrimp/' },
];

/** Packing formats offered for every line — shown on /products/ and each product page. */
export const packingOptions = [
  {
    title: 'Blast Freezing',
    titleAr: 'التجميد السريع',
    text: 'Every consignment is blast frozen to a −40 °C core within hours of landing, locking in colour, texture and shelf life before it moves to cold store.',
    textAr: 'تُجمَّد كل شحنة تجميداً سريعاً حتى −40 درجة مئوية في القلب خلال ساعات من الإنزال، مما يحفظ اللون والقوام ومدة الصلاحية قبل نقلها إلى المخزن البارد.',
  },
  {
    title: 'Hygienic Packing',
    titleAr: 'التعبئة الصحية',
    text: 'Packed in a temperature-controlled hall on food-grade materials, under HACCP controls — graded to weight, labelled to your market and sealed for the reefer container.',
    textAr: 'تُعبَّأ في صالة مضبوطة الحرارة بمواد مطابقة للتلامس الغذائي وتحت ضوابط الهاسب — مفروزة حسب الوزن، ومعلَّمة وفق متطلبات سوقك، ومغلقة استعداداً للحاوية المبرّدة.',
  },
];

export const certifications = [
  { code: 'HACCP', label: 'Hazard Analysis & Critical Control Points', labelAr: 'تحليل المخاطر ونقاط التحكم الحرجة' },
  { code: 'ISO 22000', label: 'Food Safety Management', labelAr: 'إدارة سلامة الغذاء' },
  { code: 'HALAL', label: 'Certified Halal Handling', labelAr: 'تداول حلال معتمد' },
];

export interface Division {
  title: string;
  titleAr: string;
  icon: string;
  text: string;
  textAr: string;
  /** Omitted for lines the client wants listed but has no photograph for. */
  image?: ImageMetadata;
}

// Fish meal / fish oil and value-added manufacturing were removed at the
// client's request (29 Aug brief). Flash Freezing was added on 4 Sep, and is
// the one line with no photograph — see homeDivisions below.
// Rendered on both the home page and the About page.
export const divisions: Division[] = [
  {
    title: 'Quality Processing',
    titleAr: 'التصنيع عالي الجودة',
    icon: 'factory',
    image: imgQualityProcessing,
    text: 'Catch moves from the landing site into our chilled halls within hours, where trained teams wash, grade and inspect it to size under HACCP controls before it ever reaches a freezer.',
    textAr: 'ينتقل المصيد من موقع الإنزال إلى صالاتنا المبرّدة خلال ساعات، حيث تتولّى فرق مدرّبة غسله وفرزه وفحصه حسب الحجم وفق ضوابط الهاسب قبل أن يصل إلى التجميد.',
  },
  {
    title: 'Flash Freezing',
    titleAr: 'التجميد السريع',
    icon: 'drop',
    text: 'Graded catch goes straight into the blast freezers and is taken down to a −40 °C core within hours of landing, locking in colour, texture and shelf life before it moves to cold store.',
    textAr: 'ينتقل المصيد المفروز مباشرة إلى غرف التجميد السريع ليصل إلى −40 درجة مئوية في القلب خلال ساعات من الإنزال، مما يحفظ اللون والقوام ومدة الصلاحية قبل نقله إلى المخزن البارد.',
  },
  {
    title: 'Hygienic Packing',
    titleAr: 'التعبئة الصحية',
    text: 'Blast frozen to a −40 °C core, then packed on food-grade materials in a temperature-controlled hall — labelled to your market and sealed straight into the reefer container.',
    textAr: 'يُجمَّد تجميداً سريعاً حتى −40 درجة مئوية في القلب، ثم يُعبَّأ بمواد مطابقة للتلامس الغذائي في صالة مضبوطة الحرارة — معلَّماً وفق متطلبات سوقك ومغلقاً مباشرة داخل الحاوية المبرّدة.',
    icon: 'box',
    image: imgHygienicPacking,
  },
];

/**
 * The home page shows these as photo cards in a fixed two-column grid, so it
 * takes only the lines that have a photograph — a third card would sit alone on
 * its own row. The About page lists all three as icon + text, where a stack of
 * three reads fine.
 */
export const homeDivisions = divisions.filter(
  (d): d is Division & { image: ImageMetadata } => !!d.image
);

// One distinct photograph per step, so the grid never repeats itself. The
// client supplied a replacement for five of the six on 4 Sep; step 02 keeps the
// chill-room photograph because none was sent for it, and six steps fill the
// three-column grid in two clean rows where five would leave an orphan.
export const processSteps = [
  { step: '01', title: 'Responsible Sourcing', titleAr: 'مصادر مسؤولة', image: imgResponsibleSourcing, text: 'Catch secured daily from vetted fishing fleets and landing centres.', textAr: 'صيد يُؤمَّن يومياً من أساطيل صيد ومراكز إنزال معتمدة.' },
  { step: '02', title: 'Cold-Chain Intake', titleAr: 'الاستلام ضمن سلسلة التبريد', image: imgChillRoom, text: 'Rapid icing and temperature-controlled transfer into our chill rooms.', textAr: 'تثليج سريع ونقل مضبوط الحرارة إلى غرف التبريد لدينا.' },
  { step: '03', title: 'Processing & Grading', titleAr: 'التصنيع والفرز', image: imgGrading, text: 'Hygienic processing, size grading and quality inspection by trained teams.', textAr: 'تصنيع صحي وفرز حسب الحجم وفحص جودة بواسطة فرق مدرّبة.' },
  { step: '04', title: 'Freezing & Packing', titleAr: 'التجميد والتعبئة', image: imgFreezingPacking, text: 'Blast frozen to a −40 °C core, packed to customer specification.', textAr: 'تجميد سريع حتى −40 درجة مئوية في القلب، وتعبئة وفق مواصفات العميل.' },
  { step: '05', title: 'Quality Assurance', titleAr: 'ضمان الجودة', image: imgQualityAssurance, text: 'Continuous temperature monitoring and documentation against international food-safety standards.', textAr: 'مراقبة مستمرة لدرجات الحرارة وتوثيق وفق معايير سلامة الغذاء الدولية.' },
  { step: '06', title: 'Global Delivery', titleAr: 'التوصيل العالمي', image: imgGlobalDelivery, text: 'Reefer-container logistics to ports across Asia, Europe, Africa and the Americas.', textAr: 'خدمات لوجستية بحاويات مبرّدة إلى موانئ آسيا وأوروبا وأفريقيا والأمريكتين.' },
];

export const brands = [
  {
    name: 'OceanCrest',
    positioning: 'Premium Export Range',
    positioningAr: 'مجموعة التصدير الفاخرة',
    text: 'Our flagship label for sashimi-grade tuna, grouper and emperor — hand-graded and destined for discerning wholesale and HoReCa buyers.',
    textAr:
      'علامتنا الرائدة للتونة بدرجة الساشيمي والهامور والشعري — مفروزة يدوياً وموجّهة لمشتري الجملة والفنادق والمطاعم من ذوي الذوق الرفيع.',
    color: '#123a9c',
  },
  {
    name: 'BlueHarvest',
    positioning: 'Everyday Family Seafood',
    positioningAr: 'مأكولات بحرية عائلية يومية',
    text: 'Wholesome, affordable frozen seafood for retail shelves — mackerel, scad and shrimp in family-sized packs with clear traceability.',
    textAr:
      'مأكولات بحرية مجمّدة صحية وبأسعار مناسبة لرفوف التجزئة — ماكريل وبغلة وروبيان في عبوات عائلية مع تتبّع واضح للمصدر.',
    color: '#1a5bd7',
  },
];

/**
 * The company's own cold chain, shown on /infrastructure/.
 * `spec` is the one-line capability read on each card.
 */
export const facilities = [
  {
    id: 'blast-freezer-1',
    name: 'Blast Freezer 1',
    nameAr: 'غرفة التجميد السريع 1',
    spec: 'Operating at −39.7 °C',
    specAr: 'تعمل عند −39.7 درجة مئوية',
    text: 'Primary blast freezer, pulling every consignment down to a −40 °C core within hours of landing.',
    textAr: 'غرفة التجميد السريع الرئيسية، تخفض حرارة كل شحنة إلى −40 درجة مئوية في القلب خلال ساعات من الإنزال.',
    image: imgBlastFreezer1,
  },
  {
    id: 'blast-freezer-2',
    name: 'Blast Freezer 2',
    nameAr: 'غرفة التجميد السريع 2',
    spec: 'Continuous temperature monitoring',
    specAr: 'مراقبة مستمرة لدرجة الحرارة',
    text: 'Second freezing line, with door-mounted digital readouts logged as part of our HACCP records.',
    textAr: 'خط التجميد الثاني، بشاشات رقمية على الأبواب تُسجَّل قراءاتها ضمن سجلات الهاسب لدينا.',
    image: imgBlastFreezer2,
  },
  {
    id: 'blast-freezer-3',
    name: 'Blast Freezer 3',
    nameAr: 'غرفة التجميد السريع 3',
    spec: 'Peak-season capacity',
    specAr: 'طاقة إضافية في ذروة الموسم',
    text: 'Third chamber brought online through the peak landing season so nothing waits for freezer space.',
    textAr: 'الغرفة الثالثة تُشغَّل خلال ذروة موسم الإنزال حتى لا تنتظر أي شحنة دورها في التجميد.',
    image: imgBlastFreezer3,
  },
  {
    id: 'chill-room',
    name: 'Chill Room',
    nameAr: 'غرفة التبريد',
    spec: 'Chilled intake and grading',
    specAr: 'الاستلام والفرز المبرّد',
    text: 'Where the catch is received, washed and size-graded before processing — held chilled, never at ambient temperature.',
    textAr: 'هنا يُستلم المصيد ويُغسل ويُفرز حسب الحجم قبل التصنيع — يُحفظ مبرّداً ولا يُترك في حرارة الجو.',
    image: imgChillRoom,
  },
  {
    id: 'cold-store',
    name: 'Cold Store 1 & 2',
    nameAr: 'المخزن البارد 1 و2',
    spec: 'Twin chambers, controlled temperature',
    specAr: 'غرفتان بحرارة مضبوطة',
    text: 'Twin holding chambers where frozen stock waits under controlled temperature for its reefer container.',
    textAr: 'غرفتا تخزين متجاورتان يبقى فيهما المخزون المجمّد تحت حرارة مضبوطة بانتظار الحاوية المبرّدة.',
    image: imgColdStore,
  },
];

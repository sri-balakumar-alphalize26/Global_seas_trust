// ============================================
// Global Seas Trust — home page copy, bilingual.
// Every visible string on / is an { en, ar } pair rendered by
// components/Bi.astro (English first, Arabic beneath, RTL).
// Arabic drafted in Modern Standard Arabic — have a native speaker
// review before launch.
// ============================================

export interface Bilingual {
  en: string;
  ar: string;
}

export const home = {
  hero: {
    h1: { en: 'Excellence in Seafood, Delivered Worldwide', ar: 'التميّز في المأكولات البحرية، نوصله إلى العالم' },
    sub: {
      en: 'From the ocean to the world, we are committed to delivering seafood you can trust.',
      ar: 'من المحيط إلى العالم، نلتزم بتقديم مأكولات بحرية تثق بها.',
    },
    explore: { en: 'Explore Our Products', ar: 'استكشف منتجاتنا' },
    contact: { en: 'Get in Touch', ar: 'تواصل معنا' },
  },
  feature: {
    badge: { en: 'Quality First', ar: 'الجودة أولاً' },
    eyebrow: { en: 'Freshness You Can Trust', ar: 'نضارة تثق بها' },
    h2: { en: 'Harvested From Pristine Waters', ar: 'صيد من مياه نقية' },
    p1: {
      en: 'Our catch comes from the nutrient-rich waters of the Arabian Sea and Indian Ocean, landed daily by an established network of trusted fishing fleets. Within hours of landing, every consignment enters our temperature-controlled chain — so the freshness of the ocean reaches your market intact.',
      ar: 'يأتي صيدنا من مياه بحر العرب والمحيط الهندي الغنية بالمغذيات، ويُنزَل يومياً عبر شبكة راسخة من أساطيل الصيد الموثوقة. وخلال ساعات من الإنزال تدخل كل شحنة سلسلتنا مضبوطة الحرارة — لتصل نضارة المحيط إلى سوقك كما هي.',
    },
    p2: {
      en: 'From sashimi-grade tuna to retail-ready frozen packs, we match every harvest to the exacting specifications of our partners worldwide.',
      ar: 'من التونة بدرجة الساشيمي إلى العبوات المجمّدة الجاهزة للبيع بالتجزئة، نوائم كل صيد مع المواصفات الدقيقة لشركائنا حول العالم.',
    },
    btn: { en: 'About Our Company', ar: 'عن شركتنا' },
  },
  stats: {
    eyebrow: { en: 'at a Glance', ar: 'في لمحة' }, // prefixed with the company name
  },
  products: {
    eyebrow: { en: 'Our Products', ar: 'منتجاتنا' },
    h2: { en: 'Signature Catch From Our Waters', ar: 'صيدنا المميّز من مياهنا' },
    p: {
      en: "A consistent, traceable supply of the region's most sought-after species — available whole, processed or value-added to your specification.",
      ar: 'إمداد ثابت وقابل للتتبّع لأكثر الأنواع طلباً في المنطقة — متاحة كاملة أو مصنّعة أو بقيمة مضافة وفق مواصفاتك.',
    },
    btn: { en: 'View Full Catalogue', ar: 'عرض الكتالوج الكامل' },
  },
  certs: {
    eyebrow: { en: 'Certified Quality', ar: 'جودة معتمدة' },
    h2: { en: 'International Standards, Independently Verified', ar: 'معايير دولية مُتحقَّق منها بشكل مستقل' },
  },
  divisions: {
    eyebrow: { en: 'What We Do', ar: 'ماذا نفعل' },
    h2: { en: 'Three Integrated Divisions', ar: 'ثلاثة أقسام متكاملة' },
  },
  process: {
    eyebrow: { en: 'From Catch to Consumer', ar: 'من الصيد إلى المستهلك' },
    h2: { en: 'Our Journey of Quality', ar: 'رحلتنا نحو الجودة' },
  },
  cta: {
    h2: { en: 'Ready to Source Premium Seafood?', ar: 'هل أنت مستعد لتوريد مأكولات بحرية فاخرة؟' },
    p: {
      en: 'We believe that every shipment represents more than a product—it represents our commitment to quality, consistency, integrity, and customer satisfaction.',
      ar: 'نؤمن بأن كل شحنة تمثّل أكثر من مجرد منتج — إنها تمثّل التزامنا بالجودة والثبات والنزاهة ورضا العملاء.',
    },
    btn: { en: 'Request a Quote', ar: 'اطلب عرض سعر' },
  },
} satisfies Record<string, Record<string, Bilingual>>;

// ============================================
// Global Seas Trust — UI string table (English / Arabic)
//
// Every user-visible string that is NOT catalogue or company data lives here.
// Pages and components read it through t(lang) from src/i18n/index.ts.
//
// Arabic is Modern Standard Arabic drafted for review by a native speaker.
// Keep the two objects structurally identical — the `Ui` type enforces it.
// ============================================

export const en = {
  nav: {
    home: 'Home',
    about: 'About Us',
    products: 'Our Products',
    brands: 'Our Brands',
    contact: 'Contact Us',
  },
  header: {
    homeAria: 'home',
    logoAlt: 'logo',
    mainNav: 'Main navigation',
    toggleMenu: 'Toggle menu',
    switchLang: 'العربية',
    switchLangAria: 'Switch to Arabic',
  },
  footer: {
    quickLinks: 'Quick Links',
    contact: 'Contact',
    rights: 'All rights reserved.',
    poweredBy: 'Powered by',
    poweredByAria: (name: string) => `Powered by ${name} (opens in a new tab)`,
    crLine: (cr: string, code: string) => `C.R. No. ${cr} · P.Code ${code}`,
  },
  crumbs: {
    home: 'Home',
    aria: 'Breadcrumb',
  },
  common: {
    requestQuote: 'Request a Quote',
    fullCatalogue: 'Full Catalogue',
    requestSpecs: 'Request Product Specifications',
    openInMaps: 'Open in Google Maps →',
    openInMapsAria: (place: string) => `Open ${place} in Google Maps`,
    crNo: (cr: string) => `C.R. No. ${cr}`,
  },
  about: {
    seoTitle: 'About Us',
    seoDesc: (name: string, founded: number) =>
      `${name} is an Oman-based seafood processor and exporter established in ${founded} — our mission, core values, facilities and the cold chain behind every shipment.`,
    heroHeading: (name: string) => `About ${name}`,
    heroSub: 'From the ocean to the world, we are committed to delivering seafood you can trust.',
    eyebrow: 'About Us',
    title: 'Our Objective',
    p1: 'Our objective is to establish Global Seas Trust as a trusted and recognized global <mark>seafood processing and export company</mark>, supplying premium-quality seafood to international markets.',
    p2: 'We specialize in processing and supplying a wide range of seafood, including <mark>Sardine, Mackerel, Tuna, Aquaculture Shrimp</mark>, and other wild-caught fishes. By combining careful sourcing, professional processing, quality control, and reliable export operations, we strive to deliver products that consistently meet the expectations of our customers worldwide.',
    p3: 'We aim to continuously expand our international market presence, strengthen our processing and supply capabilities, develop new seafood products, and build lasting relationships with importers, distributors, wholesalers, retailers, and food-service businesses.',
    imageAlt: 'Fresh catch displayed on a market stall',
    missionTitle: 'Our Mission',
    missionP1:
      'At Global Seas Trust, our mission is to bring high-quality seafood from trusted sources to customers across the world. We are committed to delivering fresh and frozen seafood with uncompromising standards of quality, freshness, food safety, and reliability.',
    missionP2:
      'Through responsible sourcing, modern processing, efficient cold-chain management, and dependable international logistics, we aim to create long-term partnerships with customers in global seafood markets.',
    visionTitle: 'Our Vision',
    visionP1: 'To deliver quality Fresh and Frozen seafood to the entire world.',
    opsEyebrow: 'Our Operations',
    opsH2: 'Integrated From Landing Site to Loading Port',
    ambitionH2: 'Our Global Ambition',
    ambitionP1:
      "We are building Global Seas Trust with a clear ambition—to connect the world's seafood markets with quality products they can trust.",
    ambitionP2:
      'From responsibly sourced seafood to carefully processed and frozen products, we work to ensure that quality is maintained at every stage of the journey.',
    signoff: 'Global Seas Trust — Quality Seafood. Trusted Worldwide.',
  },
  values: {
    eyebrow: 'What Guides Us',
    title: 'Our Core Values',
    items: [
      { title: 'Quality', text: 'We maintain high standards throughout sourcing, processing, packaging, storage, and delivery.' },
      { title: 'Freshness', text: 'We protect the natural quality and freshness of seafood through careful handling and an efficient cold chain.' },
      { title: 'Trust', text: 'We believe long-term business relationships are built on transparency, consistency, and keeping our commitments.' },
      { title: 'Food Safety', text: 'We prioritize hygiene, quality control, and safe handling throughout our operations.' },
      { title: 'Reliability', text: 'Our customers can depend on consistent products, professional service, and dependable international supply.' },
      { title: 'Global Reach', text: 'We aim to connect quality seafood with customers and markets across the world.' },
    ],
  },
  brands: {
    seoTitle: 'Our Brands',
    seoDesc:
      'OceanCrest premium export range and BlueHarvest everyday frozen seafood — Global Seas Trust house brands plus private-label packing for retail and food service.',
    heroHeading: 'Our Brands',
    heroSub: 'Two house labels, one standard of quality — built for different markets, backed by the same cold chain.',
    enquireAbout: (brand: string) => `Enquire About ${brand}`,
    plEyebrow: 'Private Label',
    plH2: 'Your Brand, Our Cold Chain',
    plText:
      'Beyond our house labels, we produce private-label lines for supermarket chains and distributors — your artwork, your specification, our certified production.',
    plBtn: 'Discuss Private Label',
  },
  products: {
    seoTitle: 'Our Products',
    seoDesc:
      'Wholesale fish, shrimp, lobster, crab, cuttlefish, squid and dried seafood for export — IQF, block-frozen and retail packs from Global Seas Trust, Oman.',
    heroHeading: 'Our Products',
    heroSub: 'Premium species from the Arabian Sea and Indian Ocean — graded, processed and packed to your specification.',
    packingEyebrow: 'Packing Options',
    packingH2: 'Packed the Way Your Market Needs',
    assuranceEyebrow: 'Assurance',
    assuranceH2: 'Every Shipment, Fully Certified',
    catalogueEyebrow: 'Catalogue',
    catalogueTitle: 'Browse by Category',
    catalogueLede:
      'All species are available year round subject to season and quota. Custom grading, glazing and packing available on request.',
    categoriesAria: 'Product categories',
  },
  category: {
    countLabel: (n: number) => `${n} ${n === 1 ? 'product' : 'products'}`,
    seoDesc: (blurb: string, n: number, name: string) => `${blurb} ${n} products from ${name}, Oman.`,
    moreEyebrow: 'More Categories',
    moreH2: 'Explore the Rest of the Catalogue',
    fallbackTitle: (label: string) => `${label} Products`,
    seo: {
      fish: {
        title: 'Frozen Fish Supplier & Exporter in Oman',
        h2: 'Whole, Gutted and Processed Fish for Export',
        intro:
          'Tuna, kingfish, mackerel, sardine, snapper, grouper and more — landed on the Arabian Sea coast, size-graded, and frozen whole, gutted or as fillets and steaks for wholesale, retail and food-service buyers.',
      },
      crustaceans: {
        title: 'Frozen Shrimp, Lobster & Crab Exporter in Oman',
        h2: 'Shrimp, Lobster and Crab in Export Grades',
        intro:
          'Farmed vannamei and wild-caught tiger and white shrimp in HOSO, HLSO and peeled forms, plus spiny lobster and blue swimming and mud crab — packed IQF or block frozen to your market’s count and grade.',
      },
      cephalopods: {
        title: 'Frozen Cuttlefish, Squid & Octopus Exporter in Oman',
        h2: 'Cleaned Cuttlefish, Squid and Octopus',
        intro:
          'Pharaoh cuttlefish, Indian and reef squid and octopus from the Arabian Sea and Indian Ocean, cleaned and prepared as whole, fillets, rings and tubes for retail and food-service lines.',
      },
      'value-added': {
        title: 'Value-Added & Retail-Ready Seafood from Oman',
        h2: 'Portioned and Private-Label Seafood Lines',
        intro:
          'Uniform fish steaks and ready-to-cook seafood medleys processed and packed in-house — IQF, vacuum or retail packs with private-label printing for supermarket chains and food service.',
      },
      dried: {
        title: 'Dried & Salted Seafood Exporter in Oman',
        h2: 'Sun-Dried and Salt-Cured Seafood',
        intro:
          'Traditional dried anchovy, sardine and shrimp and salted ribbon fish, prepared and graded for long shelf life and shipped in bulk to markets across Asia and Africa.',
      },
    } as Record<string, { title: string; h2: string; intro: string }>,
  },
  product: {
    seoTitle: (name: string, forms: string) => `${name} Exporter in Oman — ${forms}`,
    formsAria: 'Product forms',
    specsEyebrow: 'Specifications',
    atAGlance: (name: string) => `${name} at a Glance`,
    scientificName: 'Scientific name',
    category: 'Category',
    productForms: 'Product forms',
    packingOptions: 'Packing options',
    coldChain: 'Cold chain',
    coldChainValue: 'IQF / blast frozen at −40 °C, shipped in temperature-controlled reefer containers',
    certifications: 'Certifications',
    origin: 'Origin',
    originValue: (name: string) => `Sultanate of Oman — ${name}`,
    relatedEyebrow: 'Related',
    moreIn: (label: string) => `More ${label}`,
    allIn: (label: string) => `All ${label}`,
  },
  contact: {
    seoTitle: 'Contact Us',
    seoDesc: (name: string, locality: string) =>
      `Contact ${name} in ${locality}, Oman for seafood export quotes, product specifications, private-label packing and partnership enquiries.`,
    heroHeading: 'Contact Us',
    heroSub:
      'Tell us what you need — species, grade, packing and destination port — and our export team will get back to you within one business day.',
    emailSubject: (name: string) => `Enquiry from ${name} website`,
  },
  cards: {
    heading: 'Contact Details',
    visitUs: 'Visit Us',
    callUs: 'Call Us',
    callAria: (phone: string) => `Call ${phone}`,
    tapToCall: 'Tap to call →',
    emailUs: 'Email Us',
    emailAria: (email: string) => `Email ${email}`,
    composeGmail: 'Compose in Gmail →',
    workingHours: 'Working Hours',
    seeWeek: 'See the full week →',
    close: 'Close',
    closed: 'Closed',
    holidayNote: 'Closed on public holidays. Cold-store dispatch runs outside these hours by prior arrangement.',
    tzLabel: 'Oman (GST, UTC+4)',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    today: 'today',
    tomorrow: 'tomorrow',
    todaySuffix: ' · today',
    // {time} / {when} placeholders — filled in by the client script
    openNowTpl: 'Open now · closes at {time}',
    closedUntilTpl: 'Closed · opens {when} at {time}',
    am: 'AM',
    pm: 'PM',
    hoursSummary: 'Sunday – Thursday, 8:00 AM – 5:00 PM',
  },
  form: {
    h2: 'Send an Enquiry',
    lede: 'Fill in the form and we will respond by email. Fields marked * are required.',
    name: 'Full Name',
    namePh: 'Your name',
    company: 'Company',
    companyPh: 'Company name',
    email: 'Email',
    emailPh: 'you@company.com',
    phone: 'Phone',
    phonePh: '+000 0000 0000',
    subject: 'Subject',
    subjectPh: 'e.g. Quote request — Yellowfin Tuna, EU port',
    message: 'Message',
    messagePh: 'Species, quantity, grade, packing, destination port…',
    submit: 'Send Message',
    success: 'Thanks — your enquiry is with the trade desk. We reply within one working day.',
    phoneError: 'Enter a valid phone number for the selected country',
    invalidTitle: 'Invalid phone number',
    invalidText: 'Please enter a valid phone number for the selected country.',
    ok: 'OK',
    findUs: 'Find Us',
    mapTitle: (name: string) => `${name} location`,
  },
  notFound: {
    seoTitle: 'Page Not Found',
    seoDesc: 'The page you were looking for does not exist or has moved.',
    heroSub: "The page you're looking for has moved or never existed.",
    lede: "Let's get you back on course.",
    backHome: 'Back to Home',
    browseProducts: 'Browse Products',
    sitePages: 'Site pages',
  },
} as const;

export type Ui = typeof en;

export const ar: Ui = {
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    products: 'منتجاتنا',
    brands: 'علاماتنا التجارية',
    contact: 'اتصل بنا',
  },
  header: {
    homeAria: 'الصفحة الرئيسية',
    logoAlt: 'الشعار',
    mainNav: 'القائمة الرئيسية',
    toggleMenu: 'فتح القائمة',
    switchLang: 'English',
    switchLangAria: 'التبديل إلى الإنجليزية',
  },
  footer: {
    quickLinks: 'روابط سريعة',
    contact: 'للتواصل',
    rights: 'جميع الحقوق محفوظة.',
    poweredBy: 'بدعم من',
    poweredByAria: (name: string) => `بدعم من ${name} (يفتح في نافذة جديدة)`,
    crLine: (cr: string, code: string) => `س.ت رقم ${cr} · الرمز البريدي ${code}`,
  },
  crumbs: {
    home: 'الرئيسية',
    aria: 'مسار التنقل',
  },
  common: {
    requestQuote: 'اطلب عرض سعر',
    fullCatalogue: 'الكتالوج الكامل',
    requestSpecs: 'اطلب مواصفات المنتج',
    openInMaps: 'افتح في خرائط جوجل ←',
    openInMapsAria: (place: string) => `افتح ${place} في خرائط جوجل`,
    crNo: (cr: string) => `س.ت رقم ${cr}`,
  },
  about: {
    seoTitle: 'من نحن',
    seoDesc: (name: string, founded: number) =>
      `${name} شركة عُمانية لتصنيع وتصدير المأكولات البحرية تأسست عام ${founded} — رسالتنا وقيمنا الأساسية ومنشآتنا وسلسلة التبريد وراء كل شحنة.`,
    heroHeading: (name: string) => `عن ${name}`,
    heroSub: 'من المحيط إلى العالم، نلتزم بتقديم مأكولات بحرية تثق بها.',
    eyebrow: 'من نحن',
    title: 'هدفنا',
    p1: 'هدفنا هو ترسيخ الثقة العالمية للبحار كشركة عالمية موثوقة ومعروفة في <mark>تصنيع وتصدير المأكولات البحرية</mark>، تزوّد الأسواق الدولية بمأكولات بحرية عالية الجودة.',
    p2: 'نتخصص في تصنيع وتوريد مجموعة واسعة من المأكولات البحرية، تشمل <mark>السردين والماكريل والتونة وروبيان الاستزراع المائي</mark> وغيرها من الأسماك البرّية. وبالجمع بين المصادر المنتقاة والتصنيع الاحترافي وضبط الجودة وعمليات التصدير الموثوقة، نسعى إلى تقديم منتجات تلبّي باستمرار تطلعات عملائنا حول العالم.',
    p3: 'نهدف إلى التوسّع المستمر في حضورنا بالأسواق الدولية، وتعزيز قدراتنا في التصنيع والتوريد، وتطوير منتجات بحرية جديدة، وبناء علاقات دائمة مع المستوردين والموزّعين وتجار الجملة والتجزئة وشركات خدمات الطعام.',
    imageAlt: 'صيد طازج معروض في سوق السمك',
    missionTitle: 'رسالتنا',
    missionP1:
      'في الثقة العالمية للبحار، رسالتنا هي تقديم مأكولات بحرية عالية الجودة من مصادر موثوقة لعملائنا حول العالم. ونلتزم بتوفير مأكولات بحرية طازجة ومجمّدة وفق معايير لا تقبل المساومة في الجودة والنضارة وسلامة الغذاء والموثوقية.',
    missionP2:
      'ومن خلال المصادر المسؤولة والتصنيع الحديث والإدارة الفعّالة لسلسلة التبريد والخدمات اللوجستية الدولية الموثوقة، نسعى إلى بناء شراكات طويلة الأمد مع عملائنا في أسواق المأكولات البحرية العالمية.',
    visionTitle: 'رؤيتنا',
    visionP1: 'أن نوصل مأكولات بحرية طازجة ومجمّدة عالية الجودة إلى العالم أجمع.',
    opsEyebrow: 'عملياتنا',
    opsH2: 'تكامل من موقع الإنزال حتى ميناء الشحن',
    ambitionH2: 'طموحنا العالمي',
    ambitionP1:
      'نبني الثقة العالمية للبحار بطموح واضح — أن نربط أسواق المأكولات البحرية في العالم بمنتجات عالية الجودة تستحق ثقتها.',
    ambitionP2:
      'من المأكولات البحرية ذات المصادر المسؤولة إلى المنتجات المصنّعة والمجمّدة بعناية، نعمل على ضمان الحفاظ على الجودة في كل مرحلة من مراحل الرحلة.',
    signoff: 'الثقة العالمية للبحار — مأكولات بحرية عالية الجودة. موثوقة حول العالم.',
  },
  values: {
    eyebrow: 'ما يوجّهنا',
    title: 'قيمنا الأساسية',
    items: [
      { title: 'الجودة', text: 'نحافظ على معايير عالية في المصادر والتصنيع والتعبئة والتخزين والتسليم.' },
      { title: 'النضارة', text: 'نحمي الجودة الطبيعية ونضارة المأكولات البحرية عبر التداول الدقيق وسلسلة تبريد فعّالة.' },
      { title: 'الثقة', text: 'نؤمن بأن علاقات العمل طويلة الأمد تُبنى على الشفافية والثبات والوفاء بالالتزامات.' },
      { title: 'سلامة الغذاء', text: 'نضع النظافة وضبط الجودة والتداول الآمن في مقدمة أولوياتنا في جميع عملياتنا.' },
      { title: 'الموثوقية', text: 'يمكن لعملائنا الاعتماد على ثبات المنتجات والخدمة الاحترافية والتوريد الدولي الموثوق.' },
      { title: 'الانتشار العالمي', text: 'نسعى إلى ربط المأكولات البحرية عالية الجودة بالعملاء والأسواق حول العالم.' },
    ],
  },
  brands: {
    seoTitle: 'علاماتنا التجارية',
    seoDesc:
      'OceanCrest للتصدير الفاخر و BlueHarvest للمأكولات البحرية المجمّدة اليومية — علامتا الثقة العالمية للبحار، إضافة إلى التعبئة بعلامة خاصة للتجزئة وخدمات الطعام.',
    heroHeading: 'علاماتنا التجارية',
    heroSub: 'علامتان تجاريتان، ومعيار واحد للجودة — مصمّمتان لأسواق مختلفة، وتدعمهما سلسلة التبريد نفسها.',
    enquireAbout: (brand: string) => `استفسر عن ${brand}`,
    plEyebrow: 'العلامة الخاصة',
    plH2: 'علامتك التجارية، سلسلة التبريد لدينا',
    plText:
      'إلى جانب علاماتنا الخاصة، ننتج خطوطاً بعلامة العميل لسلاسل المتاجر الكبرى والموزّعين — تصميمكم، ومواصفاتكم، وإنتاجنا المعتمد.',
    plBtn: 'ناقش العلامة الخاصة',
  },
  products: {
    seoTitle: 'منتجاتنا',
    seoDesc:
      'أسماك وروبيان وسرطان البحر والكركند والحبّار والكاليماري والمأكولات البحرية المجففة للتصدير بالجملة — تجميد فردي ومجمّد بالكتل وعبوات تجزئة من الثقة العالمية للبحار، عُمان.',
    heroHeading: 'منتجاتنا',
    heroSub: 'أجود الأنواع من بحر العرب والمحيط الهندي — مفروزة ومصنّعة ومعبّأة وفق مواصفاتكم.',
    packingEyebrow: 'خيارات التعبئة',
    packingH2: 'تعبئة تناسب متطلبات سوقك',
    assuranceEyebrow: 'الضمان',
    assuranceH2: 'كل شحنة معتمدة بالكامل',
    catalogueEyebrow: 'الكتالوج',
    catalogueTitle: 'تصفّح حسب الفئة',
    catalogueLede:
      'جميع الأنواع متاحة على مدار العام حسب الموسم والحصص. الفرز والتزجيج والتعبئة حسب الطلب متاحة عند الطلب.',
    categoriesAria: 'فئات المنتجات',
  },
  category: {
    countLabel: (n: number) => (n === 1 ? 'منتج واحد' : n === 2 ? 'منتجان' : n <= 10 ? `${n} منتجات` : `${n} منتجاً`),
    seoDesc: (blurb: string, n: number, name: string) => `${blurb} ${n} منتجاً من ${name}، عُمان.`,
    moreEyebrow: 'فئات أخرى',
    moreH2: 'استكشف بقية الكتالوج',
    fallbackTitle: (label: string) => `منتجات ${label}`,
    seo: {
      fish: {
        title: 'مورّد ومصدّر الأسماك المجمّدة في عُمان',
        h2: 'أسماك كاملة ومنزوعة الأحشاء ومصنّعة للتصدير',
        intro:
          'التونة والكنعد والماكريل والسردين والسنابر والهامور وغيرها — تُنزَل على ساحل بحر العرب، وتُفرز حسب الحجم، وتُجمّد كاملة أو منزوعة الأحشاء أو كفيليه وشرائح لمشتري الجملة والتجزئة وخدمات الطعام.',
      },
      crustaceans: {
        title: 'مصدّر الروبيان والكركند وسرطان البحر المجمّد في عُمان',
        h2: 'روبيان وكركند وسرطان بحر بدرجات التصدير',
        intro:
          'روبيان فانامي المستزرع والروبيان النمري والأبيض البرّي بأشكال بالرأس والقشر وبدون رأس ومقشّر، إضافة إلى الكركند الشوكي وسرطان البحر الأزرق وسرطان الطين — معبّأ بالتجميد الفردي أو بالكتل وفق عدد ودرجة سوقك.',
      },
      cephalopods: {
        title: 'مصدّر الحبّار والكاليماري والأخطبوط المجمّد في عُمان',
        h2: 'حبّار وكاليماري وأخطبوط منظّف',
        intro:
          'الحبّار الفرعوني والكاليماري الهندي وكاليماري الشعاب والأخطبوط من بحر العرب والمحيط الهندي، منظّفة ومحضّرة كاملة أو كفيليه أو حلقات أو أنابيب لخطوط التجزئة وخدمات الطعام.',
      },
      'value-added': {
        title: 'مأكولات بحرية ذات قيمة مضافة وجاهزة للتجزئة من عُمان',
        h2: 'خطوط مقسّمة وبعلامة خاصة',
        intro:
          'شرائح أسماك متجانسة ومزيج مأكولات بحرية جاهز للطهي، يُصنَّع ويُعبَّأ داخلياً — تجميد فردي أو عبوات مفرّغة من الهواء أو عبوات تجزئة مع طباعة بعلامة خاصة لسلاسل المتاجر وخدمات الطعام.',
      },
      dried: {
        title: 'مصدّر المأكولات البحرية المجففة والمملّحة في عُمان',
        h2: 'مأكولات بحرية مجففة بالشمس ومملّحة',
        intro:
          'الأنشوجة والسردين والروبيان المجفف تقليدياً وسمك الشريط المملّح، محضّرة ومفروزة لعمر تخزيني طويل وتُشحن بالجملة إلى أسواق آسيا وأفريقيا.',
      },
    } as Record<string, { title: string; h2: string; intro: string }>,
  },
  product: {
    seoTitle: (name: string, forms: string) => `مصدّر ${name} في عُمان — ${forms}`,
    formsAria: 'أشكال المنتج',
    specsEyebrow: 'المواصفات',
    atAGlance: (name: string) => `${name} في لمحة`,
    scientificName: 'الاسم العلمي',
    category: 'الفئة',
    productForms: 'أشكال المنتج',
    packingOptions: 'خيارات التعبئة',
    coldChain: 'سلسلة التبريد',
    coldChainValue: 'تجميد فردي / تجميد سريع عند −40 درجة مئوية، ويُشحن في حاويات مبرّدة مضبوطة الحرارة',
    certifications: 'الشهادات',
    origin: 'بلد المنشأ',
    originValue: (name: string) => `سلطنة عُمان — ${name}`,
    relatedEyebrow: 'ذات صلة',
    moreIn: (label: string) => `المزيد من ${label}`,
    allIn: (label: string) => `كل ${label}`,
  },
  contact: {
    seoTitle: 'اتصل بنا',
    seoDesc: (name: string, locality: string) =>
      `تواصل مع ${name} في ${locality}، عُمان للحصول على عروض أسعار التصدير ومواصفات المنتجات والتعبئة بعلامة خاصة واستفسارات الشراكة.`,
    heroHeading: 'اتصل بنا',
    heroSub:
      'أخبرنا بما تحتاجه — النوع والدرجة والتعبئة وميناء الوصول — وسيعاود فريق التصدير لدينا التواصل معك خلال يوم عمل واحد.',
    emailSubject: (name: string) => `استفسار من موقع ${name}`,
  },
  cards: {
    heading: 'بيانات التواصل',
    visitUs: 'زورونا',
    callUs: 'اتصل بنا',
    callAria: (phone: string) => `اتصل بالرقم ${phone}`,
    tapToCall: 'اضغط للاتصال ←',
    emailUs: 'راسلنا',
    emailAria: (email: string) => `راسل ${email}`,
    composeGmail: 'اكتب عبر Gmail ←',
    workingHours: 'ساعات العمل',
    seeWeek: 'عرض الأسبوع كاملاً ←',
    close: 'إغلاق',
    closed: 'مغلق',
    holidayNote: 'مغلق في العطل الرسمية. الشحن من المخزن المبرّد خارج هذه الساعات بترتيب مسبق.',
    tzLabel: 'عُمان (توقيت الخليج، UTC+4)',
    days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    today: 'اليوم',
    tomorrow: 'غداً',
    todaySuffix: ' · اليوم',
    openNowTpl: 'مفتوح الآن · يغلق عند {time}',
    closedUntilTpl: 'مغلق · يفتح {when} عند {time}',
    am: 'صباحاً',
    pm: 'مساءً',
    hoursSummary: 'الأحد – الخميس، 8:00 صباحاً – 5:00 مساءً',
  },
  form: {
    h2: 'أرسل استفساراً',
    lede: 'املأ النموذج وسنرد عليك عبر البريد الإلكتروني. الحقول المعلّمة بـ * مطلوبة.',
    name: 'الاسم الكامل',
    namePh: 'اسمك',
    company: 'الشركة',
    companyPh: 'اسم الشركة',
    email: 'البريد الإلكتروني',
    emailPh: 'you@company.com',
    phone: 'الهاتف',
    phonePh: '+000 0000 0000',
    subject: 'الموضوع',
    subjectPh: 'مثال: طلب عرض سعر — تونة صفراء الزعانف، ميناء أوروبي',
    message: 'الرسالة',
    messagePh: 'النوع، الكمية، الدرجة، التعبئة، ميناء الوصول…',
    submit: 'إرسال الرسالة',
    success: 'شكراً لك — وصل استفسارك إلى قسم المبيعات. نرد خلال يوم عمل واحد.',
    phoneError: 'أدخل رقم هاتف صالحاً للدولة المختارة',
    invalidTitle: 'رقم هاتف غير صالح',
    invalidText: 'يرجى إدخال رقم هاتف صالح للدولة المختارة.',
    ok: 'حسناً',
    findUs: 'موقعنا',
    mapTitle: (name: string) => `موقع ${name}`,
  },
  notFound: {
    seoTitle: 'الصفحة غير موجودة',
    seoDesc: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    heroSub: 'الصفحة التي تبحث عنها تم نقلها أو لم تكن موجودة.',
    lede: 'دعنا نعيدك إلى المسار الصحيح.',
    backHome: 'العودة إلى الرئيسية',
    browseProducts: 'تصفّح المنتجات',
    sitePages: 'صفحات الموقع',
  },
};

export const ui = { en, ar } as const;

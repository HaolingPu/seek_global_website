// Bilingual content (EN / 中文). Each translatable string is { en, zh }.
// Sourced from official SEEK Biotechnology materials.

export const company = {
  nameEn: 'SEEK Biotechnology (Shanghai) Co., Ltd.',
  nameZh: '时科生物科技（上海）有限公司',
  established: 2011,
  mission: {
    en: 'Resource circulation · High-value utilization · Pollution reduction · Carbon lowering · Green development',
    zh: '资源循环 · 高值利用 · 减污降碳 · 绿色发展',
  },
  vision: {
    en: 'A world without polluted soil.',
    zh: '让天下没有污染的土壤。',
  },
  positioning: {
    en: 'Circular Economy Service Provider',
    zh: '循环经济服务商',
  },
  description: {
    en: 'SEEK Biotechnology (Shanghai) is a national-level high-tech enterprise positioned as a "circular economy service provider". Founded in 2011, we drive sustainable agriculture through technology innovation — building a green industrial chain that turns agricultural waste into biochar, biochar-based fertilizer and restored soil.',
    zh: '时科生物科技（上海）有限公司是一家以"循环经济服务商"为战略定位的国家高新技术企业。公司成立于 2011 年，多年来致力于通过技术创新推动农业的可持续发展，构建了"农业废弃物-生物炭-炭基肥-土壤改良"的绿色循环产业链。',
  },
}

export const contact = {
  hotline: '400-993-7600',
  tel: '021-52962258 / 021-52962268',
  email: 'info@seeksino.com',
  hq: {
    en: 'Building C, 3F, 1289 Xiangyang Road, Minhang District, Shanghai, China',
    zh: '上海市闵行区襄阳路1289号C栋3楼',
  },
  factory: {
    en: '2070 Lüxin Road, Jinshan District, Shanghai, China',
    zh: '上海市金山区绿欣路2070号',
  },
}

export const nav = [
  { key: 'home', en: 'Home', zh: '首页', href: '#home' },
  {
    key: 'solutions',
    en: 'Solutions',
    zh: '解决方案',
    href: '#solutions',
    children: [
      { en: 'Circular Economy EPC', zh: '循环经济EPC服务', href: '#solutions' },
      { en: 'Pyrolysis Equipment', zh: '热解炭化装备', href: '#solutions' },
      { en: 'Fertilizer Equipment', zh: '三双制肥装备', href: '#solutions' },
      { en: 'Carbon Trading', zh: '碳交易服务', href: '#solutions' },
      { en: 'Plant Nutrition', zh: '植物营养方案', href: '#solutions' },
      { en: 'Soil Improvement', zh: '土壤改良与修复', href: '#solutions' },
    ],
  },
  {
    key: 'technology',
    en: 'Technology',
    zh: '科技创新',
    href: '#technology',
    children: [
      { en: 'Core Systems', zh: '十大核心系统', href: '#technology' },
      { en: 'Honors & Qualifications', zh: '资质与荣誉', href: '#certifications' },
    ],
  },
  {
    key: 'about',
    en: 'About',
    zh: '关于我们',
    href: '#about',
    children: [
      { en: 'Group Overview', zh: '集团概况', href: '#about' },
      { en: 'Leadership', zh: '管理团队', href: '#leadership' },
    ],
  },
  { key: 'cases', en: 'Cases', zh: '项目案例', href: '#cases' },
  { key: 'news', en: 'News', zh: '新闻中心', href: '#news' },
  { key: 'contact', en: 'Contact', zh: '联系我们', href: '#contact' },
]

// Active language codes. Others show "translation coming soon" toast.
export const languages = [
  { code: 'en', label: 'English', active: true },
  { code: 'zh', label: '中文', active: true },
  { code: 'es', label: 'Español', active: false },
  { code: 'fr', label: 'Français', active: false },
  { code: 'de', label: 'Deutsch', active: false },
  { code: 'pt', label: 'Português', active: false },
  { code: 'ru', label: 'Русский', active: false },
  { code: 'ja', label: '日本語', active: false },
  { code: 'ko', label: '한국어', active: false },
  { code: 'ar', label: 'العربية', active: false },
  { code: 'vi', label: 'Tiếng Việt', active: false },
  { code: 'th', label: 'ภาษาไทย', active: false },
  { code: 'id', label: 'Bahasa Indonesia', active: false },
  { code: 'tr', label: 'Türkçe', active: false },
  { code: 'it', label: 'Italiano', active: false },
]

export const stats = [
  {
    value: 70,
    suffix: '+',
    en: 'Patented Technologies',
    zh: '项专利技术',
  },
  {
    value: 10,
    suffix: '+',
    en: 'Years of Equipment R&D',
    zh: '年装备研发经验',
  },
  {
    value: 100000,
    suffix: '+ t/yr',
    en: 'Organic Waste Processed',
    zh: '吨/年有机废弃物处理',
  },
  {
    value: 3000,
    suffix: '+',
    en: 'Customers Served Globally',
    zh: '家全球客户',
  },
]

export const solutions = [
  {
    id: 'epc',
    image: '/images/solutions/epc-circular-model.jpg',
    badge: { en: 'EPC', zh: '总包服务' },
    title: {
      en: 'Circular Economy EPC Services',
      zh: '循环经济EPC服务',
    },
    summary: {
      en: 'Turnkey engineering, procurement and construction for organic waste valorization parks — from planning to operations management.',
      zh: '面向有机废弃物资源化园区的工程总包服务——从规划、设计到设备、施工与运营一体化交付。',
    },
    features: {
      en: ['Full-cycle planning & design', 'Integrated equipment & process delivery', 'Operations management support'],
      zh: ['全周期规划与设计', '装备与工艺一体化交付', '运营管理全程支持'],
    },
  },
  {
    id: 'pyrolysis',
    image: '/images/solutions/pyrolysis-equipment.jpg',
    badge: { en: 'Equipment', zh: '核心装备' },
    title: {
      en: 'Energy-Saving Pyrolysis Equipment',
      zh: '节能热解炭化装备',
    },
    summary: {
      en: 'Proprietary biomass carbonization technology achieving zero tar and zero waste liquid, with continuous low-cost operation at industrial scale.',
      zh: '自主研发的生物质炭化技术，实现零焦油、零废液与低成本连续化生产，工业级稳定运行。',
    },
    features: {
      en: ['Zero tar · zero waste liquid', 'Energy-efficient carbonization', 'Continuous industrial operation'],
      zh: ['零焦油 · 零废液排放', '能耗低、产能稳定', '工业级连续化运行'],
    },
  },
  {
    id: 'fertilizer',
    image: '/images/solutions/fertilizer-equipment.jpg',
    badge: { en: '"Sanshuang" Tech', zh: '三双技术' },
    title: {
      en: '"Sanshuang" High-Efficiency Fertilizer Equipment',
      zh: '"三双"高效制肥装备',
    },
    summary: {
      en: 'Proprietary "Sanshuang" fertilizer-making technology — modular smart production lines for biochar-based, liquid and water-soluble fertilizers.',
      zh: '独有的"三双"制肥技术，模块化智能产线，可生产生物炭基肥、液体肥、水溶肥等多品类产品。',
    },
    features: {
      en: ['Proprietary "Sanshuang" process', 'Biochar / liquid / water-soluble lines', 'Smart digital control'],
      zh: ['"三双"自主工艺', '炭基肥 / 液肥 / 水溶肥兼容', '智能数字化控制'],
    },
  },
  {
    id: 'carbon',
    image: '/images/system-pyrolysis-en.jpg',
    badge: { en: 'Carbon', zh: '碳服务' },
    title: {
      en: 'Carbon Asset & Trading Services',
      zh: '碳资产与碳交易服务',
    },
    summary: {
      en: 'Methodology development, project registration and monetization support for biochar and organic-waste carbon assets.',
      zh: '面向生物炭与有机废弃物碳资产的方法学开发、项目登记与碳交易服务。',
    },
    features: {
      en: ['Carbon asset development', 'CCER / VCS advisory', 'Trading & monetization'],
      zh: ['碳资产开发', 'CCER / VCS 咨询', '交易与变现支持'],
    },
  },
  {
    id: 'nutrition',
    image: '/images/solutions/carbon-fertilizer.jpg',
    badge: { en: 'Plant Nutrition', zh: '植物营养' },
    title: {
      en: 'Biochar-Based Fertilizer Series',
      zh: '炭基肥料系列产品',
    },
    summary: {
      en: 'Crop-specific biochar-based, liquid and water-soluble fertilizers that raise yield and quality while rebuilding soil organic matter.',
      zh: '面向不同作物的生物炭基肥、液体肥与水溶肥，提升产量品质的同时持续修复土壤有机质。',
    },
    features: {
      en: ['Crop-specific formulations', 'Biochar / liquid / water-soluble', 'Higher yield, lower input'],
      zh: ['作物定制配方', '炭基 / 液体 / 水溶兼备', '增产提质、减少投入'],
    },
  },
  {
    id: 'soil',
    image: '/images/solutions/market-distribution.jpg',
    badge: { en: 'Soil', zh: '土壤修复' },
    title: {
      en: 'Soil Improvement & Remediation',
      zh: '土壤改良与修复',
    },
    summary: {
      en: 'End-to-end soil diagnostics and remediation programs restoring soil health, organic matter and productivity at scale.',
      zh: '端到端的土壤诊断与修复方案，规模化改良退化土壤、提升有机质与产能。',
    },
    features: {
      en: ['Soil diagnostics & mapping', 'Organic matter restoration', 'At-scale remediation programs'],
      zh: ['土壤诊断与制图', '有机质修复与提升', '规模化修复项目落地'],
    },
  },
]

export const valueChain = [
  {
    step: { en: 'Front-end', zh: '前端处理' },
    title: { en: 'Waste Aggregation', zh: '废弃物聚合' },
    body: {
      en: 'Jinshan agricultural waste valorization base processes 100,000+ tons of organic waste annually, converting it into production feedstock.',
      zh: '金山农业废弃物资源化利用基地，年处理有机废弃物超 10 万吨，转化为生产原料。',
    },
  },
  {
    step: { en: 'Mid-stage', zh: '中端转化' },
    title: { en: 'Biochar Conversion', zh: '炭化与制肥' },
    body: {
      en: 'Biomass carbonization plus the proprietary "Sanshuang" process produces biochar-based fertilizer series at industrial scale.',
      zh: '通过生物质炭化技术与"三双"高效制肥技术，将废弃物转化为生物炭并生产炭基系列肥料。',
    },
  },
  {
    step: { en: 'Back-end', zh: '后端应用' },
    title: { en: 'Soil & Crops', zh: '土壤与作物应用' },
    body: {
      en: 'Products restore degraded soil and improve crop quality across China and global markets — serving major agricultural projects.',
      zh: '产品用于修复退化土壤、提升作物品质，远销全球多地，服务大型农业项目。',
    },
  },
]

export const aboutHighlights = [
  {
    title: { en: 'Mission', zh: '使命' },
    text: {
      en: 'Resource circulation, high-value utilization — turning organic waste into soil, food and carbon assets.',
      zh: '资源循环、高值利用——将有机废弃物转化为土壤、食物与碳资产。',
    },
  },
  {
    title: { en: 'Vision', zh: '愿景' },
    text: {
      en: 'A world without polluted soil. We pursue a global standard for soil health.',
      zh: '让天下没有污染的土壤，建立全球级别的土壤健康标准。',
    },
  },
  {
    title: { en: 'Approach', zh: '路径' },
    text: {
      en: 'Combine proprietary equipment, agronomic know-how and EPC delivery to make sustainable production economically attractive.',
      zh: '将自主装备、农艺技术与 EPC 交付结合，让可持续生产具备商业可行性。',
    },
  },
]

export const leadership = [
  {
    name: { en: 'Pu Jiaxing', zh: '蒲加兴' },
    role: { en: 'Founder', zh: '创始人' },
    bio: {
      en: 'Founder of SEEK Biotechnology. Pioneered the company\'s circular-economy strategy and its proprietary biomass carbonization platform, building SEEK into a national-level high-tech enterprise since 2011.',
      zh: '时科生物科技创始人。主导公司循环经济战略与自主生物质炭化平台的建设，自 2011 年起带领时科成长为国家高新技术企业。',
    },
    photo: '/images/team-pu-jiaxing.jpg',
  },
  {
    name: { en: 'Pu Jiajun', zh: '蒲加军' },
    role: { en: 'General Manager', zh: '总经理' },
    bio: {
      en: 'General Manager of SEEK Biotechnology. Leads operations across the Jinshan production base, EPC delivery, and international market expansion.',
      zh: '时科生物科技总经理。统筹金山生产基地运营、EPC 项目交付与国际市场拓展。',
    },
    photo: '/images/team-pu-jiajun.jpg',
  },
]

export const cases = [
  {
    title: { en: 'Shanghai Jinshan Demonstration Base', zh: '上海金山示范基地' },
    location: { en: 'Shanghai, China', zh: '中国上海' },
    scale: { en: '90 acres', zh: '约 90 亩' },
    capacity: {
      en: '100,000 t waste → 50,000 t fertilizer / year',
      zh: '10 万吨废弃物 → 5 万吨肥料 / 年',
    },
    impact: {
      en: 'Domestic demonstration base for organic waste valorization.',
      zh: '国内有机废弃物资源化利用示范基地。',
    },
    image: '/images/cases/jinshan-gate.jpg',
  },
  {
    title: { en: 'Guizhou Tobacco Stalk Project', zh: '贵州烟秆资源化项目' },
    location: { en: 'Guizhou, China', zh: '中国贵州' },
    scale: { en: '50 acres', zh: '约 50 亩' },
    capacity: {
      en: '600,000 t stalks → 300,000 t fertilizer / year',
      zh: '60 万吨秸秆 → 30 万吨肥料 / 年',
    },
    impact: {
      en: '100M+ acres improved · ¥600M+ revenue increase for farmers.',
      zh: '改良农田超 1 亿亩，为农户增收超 6 亿元。',
    },
    image: '/images/cases/jinshan-interior.jpg',
  },
  {
    title: { en: 'Vietnam Flagship Project', zh: '越南旗舰项目' },
    location: { en: 'Vietnam', zh: '越南' },
    scale: { en: 'Southeast Asia', zh: '东南亚' },
    capacity: {
      en: '100,000 t waste → 50,000 t fertilizer / year',
      zh: '10 万吨废弃物 → 5 万吨肥料 / 年',
    },
    impact: {
      en: 'Southeast Asia flagship for circular economy delivery.',
      zh: '东南亚循环经济旗舰项目。',
    },
    image: '/images/cases/jinshan-pano-2.jpg',
  },
]

export const news = [
  {
    tag: { en: 'Group News', zh: '集团新闻' },
    title: {
      en: 'SEEK Biotech expands biochar capacity to support Southeast Asia projects',
      zh: '时科生物扩大生物炭产能，支撑东南亚项目交付',
    },
    excerpt: {
      en: 'New investments in Jinshan production lines strengthen SEEK\'s ability to deliver large-scale circular-economy projects abroad.',
      zh: '金山产线新一轮投入将进一步增强公司在海外大型循环经济项目的交付能力。',
    },
    date: '2026-04-18',
  },
  {
    tag: { en: 'Industry', zh: '行业资讯' },
    title: {
      en: 'Biochar-based fertilizers: rebuilding soil resilience for the next decade',
      zh: '炭基肥料：未来十年土壤韧性的重建之路',
    },
    excerpt: {
      en: 'A perspective on how biochar-based fertilizers restore organic matter and create monetizable carbon assets in agriculture.',
      zh: '深度解读炭基肥料如何修复土壤有机质，并在农业体系中形成可交易的碳资产。',
    },
    date: '2026-03-02',
  },
  {
    tag: { en: 'Group News', zh: '集团新闻' },
    title: {
      en: 'Patent milestone — SEEK Biotech reaches 70 inventions across the value chain',
      zh: '专利里程碑：时科生物全产业链发明专利累计达 70 项',
    },
    excerpt: {
      en: 'Covering pyrolysis, granulation, biochar formulations and soil amendments, SEEK strengthens its technology moat.',
      zh: '覆盖热解、造粒、生物炭配方与土壤调理剂等全产业链领域，公司技术护城河持续加深。',
    },
    date: '2026-01-21',
  },
]

export const certifications = Array.from({ length: 15 }, (_, i) => ({
  src: `/images/certs/cert-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `SEEK certification ${i + 1}`,
}))

export const patents = Array.from({ length: 3 }, (_, i) => ({
  src: `/images/certs/patent-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `SEEK invention patent ${i + 1}`,
}))

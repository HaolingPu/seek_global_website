import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const LangContext = createContext(null)

// UI strings (buttons, headings, labels) keyed by code.
const ui = {
  en: {
    // Top bar
    topbar_hotline: 'Hotline',
    topbar_cooperation: 'Project Cooperation',
    topbar_qa: 'Q&A',
    topbar_contact: 'Contact',
    // Header
    header_search_placeholder: 'Search the site…',
    header_get_price: 'Get Best Price',
    header_menu: 'Menu',
    // Hero
    hero_eyebrow: 'National-Level High-Tech Enterprise · Since 2011',
    hero_title_a: 'Resource Circulation,',
    hero_title_b: 'High-Value Utilization',
    hero_subtitle:
      'Pollution reduction · carbon lowering · green development. We turn organic waste into high-value resources through circular-economy EPC services, intelligent pyrolysis and fertilizer equipment, and at-scale soil remediation.',
    hero_cta_primary: 'Explore Solutions',
    hero_cta_secondary: 'Talk to an Expert',
    hero_tag_1: 'Circular Economy EPC',
    hero_tag_2: 'Zero-Tar Pyrolysis',
    hero_tag_3: 'Soil Health at Scale',
    hero_float_a_label: 'Patents (2024)',
    hero_float_b_label: 'Annual capacity',
    hero_float_b_caption: 'Guizhou stalk project',
    // Stats
    stats_eyebrow: 'By the numbers',
    stats_title: 'A decade of measurable impact',
    stats_sub: 'Numbers compiled across SEEK Biotechnology projects and equipment deliveries since 2011.',
    // Solutions
    sol_eyebrow: 'Solutions',
    sol_title: 'End-to-end circular economy delivery',
    sol_sub:
      'From planning and equipment to operations and carbon assets — we deliver complete programs that transform organic waste into measurable value.',
    sol_cta_view_more: 'View more',
    sol_cta_proposal: 'Request a tailored proposal',
    // About
    about_eyebrow: 'About SEEK',
    about_title: 'Circular economy, made operational.',
    about_chain_title: 'Our green circular value chain',
    about_chain_caption: 'Agricultural waste → Biochar → Biochar-based fertilizer → Soil improvement.',
    about_stat_founded: 'Founded',
    about_stat_impact: 'Population benefited',
    about_partner: 'Partner with us',
    // Leadership
    lead_eyebrow: 'Leadership',
    lead_title: 'The people behind SEEK',
    lead_sub: 'Founder-led, operations-driven — a leadership team built around technology and execution.',
    // Technology
    tech_eyebrow: 'Technology Innovation',
    tech_title: 'Engineered to make sustainability economical.',
    tech_sub:
      'SEEK combines an expert team, patented process know-how and intelligent equipment to deliver organic waste valorization that performs at industrial scale.',
    tech_pillar_rd: 'R&D Backed',
    tech_pillar_rd_text:
      'Proprietary pyrolysis and fertilizer process technologies developed across 10+ years of frontline projects.',
    tech_pillar_smart: 'Smart Equipment',
    tech_pillar_smart_text:
      'PLC + IoT controlled production lines for fertilizer and biochar — continuous monitoring and remote diagnostics.',
    tech_pillar_patents: '70+ Patents',
    tech_pillar_patents_text:
      'Patented technologies covering pyrolysis carbonization, fertilizer granulation, biochar formulations and soil amendments.',
    tech_pillar_standards: 'Standards Drafted',
    tech_pillar_standards_text:
      'Member of the International Biochar Initiative · drafted Biochar-Based Fertilizer Group Standard and Shanghai soil-conditioner standards.',
    tech_system_pyrolysis_title: 'Pyrolysis Carbonization System',
    tech_system_pyrolysis_text:
      'Ten core sub-systems delivering energy-efficient, zero-tar pyrolysis at industrial scale.',
    tech_system_fertilizer_title: 'Smart Fertilizer Production System',
    tech_system_fertilizer_text:
      'Ten core sub-systems integrating raw material handling, granulation, drying and packaging.',
    // Cases
    cases_eyebrow: 'Success Stories',
    cases_title: 'Projects that prove the model',
    cases_sub:
      'From domestic demonstration bases to flagship overseas deployments — SEEK delivers full programs that close the loop from organic waste to soil, food and carbon.',
    cases_prev: 'Previous',
    cases_next: 'Next',
    // Certifications
    certs_eyebrow: 'Honors & Qualifications',
    certs_title: 'Recognized by industry, certified by authorities.',
    certs_sub:
      'From national high-tech enterprise certification to industry awards and academic collaborations — recognition that backs our technology and delivery.',
    certs_h1_title: '15+ Qualifications',
    certs_h1_text:
      'National high-tech enterprise · Shanghai specialized & innovative SME · green product certifications.',
    certs_h2_title: '70+ Patents',
    certs_h2_text:
      'Inventions covering pyrolysis, granulation, biochar formulations and soil amendments.',
    certs_h3_title: 'Academic Partnerships',
    certs_h3_text:
      'Academician Workstation · active collaboration with national research institutes.',
    certs_section_certs: 'Selected certifications',
    certs_section_patents: 'Selected invention patents',
    // News
    news_eyebrow: 'News Center',
    news_title: 'Latest updates from SEEK',
    news_sub: 'Group news, project milestones and industry perspectives from our team.',
    news_all: 'All news',
    news_read_more: 'Read more',
    // Contact
    contact_eyebrow: 'Contact Us',
    contact_title: "Let's build the circular economy together.",
    contact_sub:
      'Tell us about your project — waste streams, capacity, location and timeline. Our team will respond with a tailored proposal within 1 business day.',
    contact_field_name: 'Your name',
    contact_field_email: 'Email',
    contact_field_subject: 'Subject',
    contact_field_subject_ph: 'e.g. Pyrolysis equipment inquiry',
    contact_field_message: 'Message',
    contact_field_message_hint: '(20 – 3,000 chars)',
    contact_field_message_ph:
      'Tell us about your waste streams, capacity goals, location and timeline…',
    contact_submit: 'Send Message',
    contact_min_err: 'Message must be at least 20 characters.',
    contact_max_err: 'Message must be 3,000 characters or fewer.',
    contact_success_title: 'Thanks — we will be in touch.',
    contact_success_body:
      'Your message has been received. A SEEK specialist will reach out within one business day.',
    contact_consent:
      'By submitting, you agree to be contacted by SEEK Biotechnology regarding your project inquiry.',
    contact_label_hotline: 'Hotline',
    contact_label_office: 'Office',
    contact_label_email: 'Email',
    contact_label_hq: 'Headquarters',
    contact_label_factory: 'Factory',
    // Footer
    footer_desc:
      'Resource circulation, high-value utilization. A state-level high-tech enterprise delivering circular-economy infrastructure since 2011.',
    footer_email_invite: 'Send us an email — let\'s stay connected.',
    footer_quick: 'Quick Links',
    footer_solutions: 'Solutions',
    footer_contact: 'Contact',
    footer_privacy: 'Privacy',
    footer_terms: 'Terms',
    footer_sitemap: 'Sitemap',
    footer_rights: 'All rights reserved.',
    // Toast messages
    toast_translation_soon: 'Translation in progress — falling back to English.',
    toast_search_soon: 'Search is coming soon. Use the navigation menu for now.',
    toast_page_soon: 'This page is coming soon.',
    // Page heroes
    page_home_kicker: 'SEEK Biotechnology',
    page_solutions_title: 'Solutions',
    page_solutions_sub:
      'Engineering, equipment and operating know-how for converting organic waste into value.',
    page_technology_title: 'Technology Innovation',
    page_technology_sub:
      'Patented process know-how, intelligent equipment and recognized industry standards.',
    page_about_title: 'About SEEK',
    page_about_sub:
      'A national-level high-tech enterprise positioned as a circular-economy service provider.',
    page_cases_title: 'Project Cases',
    page_cases_sub:
      'From domestic demonstration bases to flagship overseas deployments.',
    page_news_title: 'News Center',
    page_news_sub: 'Group news, project milestones and industry perspectives.',
    page_contact_title: 'Contact Us',
    page_contact_sub:
      'Tell us about your project — we will respond within one business day.',
    crumb_home: 'Home',
  },
  zh: {
    topbar_hotline: '服务热线',
    topbar_cooperation: '项目合作',
    topbar_qa: '常见问答',
    topbar_contact: '联系我们',
    header_search_placeholder: '站内搜索…',
    header_get_price: '获取报价',
    header_menu: '菜单',
    hero_eyebrow: '国家高新技术企业 · 创立于 2011',
    hero_title_a: '资源循环',
    hero_title_b: '高值利用',
    hero_subtitle:
      '减污降碳 · 绿色发展。时科生物以循环经济EPC服务、智能热解与制肥装备、规模化土壤修复，将有机废弃物转化为高价值资源。',
    hero_cta_primary: '浏览解决方案',
    hero_cta_secondary: '联系专家',
    hero_tag_1: '循环经济EPC',
    hero_tag_2: '零焦油热解',
    hero_tag_3: '规模化土壤修复',
    hero_float_a_label: '专利（2024）',
    hero_float_b_label: '年处理能力',
    hero_float_b_caption: '贵州烟秆项目',
    stats_eyebrow: '关键数据',
    stats_title: '十年深耕，可量化的成果',
    stats_sub: '数据来源于自 2011 年以来时科生物所交付的项目与装备体系。',
    sol_eyebrow: '解决方案',
    sol_title: '端到端的循环经济交付',
    sol_sub:
      '从规划、装备到运营与碳资产——我们提供完整方案，将有机废弃物转化为可衡量的价值。',
    sol_cta_view_more: '查看更多',
    sol_cta_proposal: '获取定制方案',
    about_eyebrow: '关于时科',
    about_title: '将循环经济，落地为日常运营。',
    about_chain_title: '绿色循环产业链',
    about_chain_caption: '农业废弃物 → 生物炭 → 炭基肥 → 土壤改良。',
    about_stat_founded: '成立年份',
    about_stat_impact: '惠及人口',
    about_partner: '与我们合作',
    lead_eyebrow: '管理团队',
    lead_title: '时科背后的人',
    lead_sub: '由创始人领衔、运营驱动——以技术与执行力构建的管理团队。',
    tech_eyebrow: '科技创新',
    tech_title: '让可持续，具备经济性。',
    tech_sub:
      '时科生物以专家团队、自主工艺和智能装备为支撑，让有机废弃物资源化在工业级规模上稳定运行。',
    tech_pillar_rd: '研发驱动',
    tech_pillar_rd_text: '十余年一线项目沉淀，形成自主热解与制肥工艺技术体系。',
    tech_pillar_smart: '智能装备',
    tech_pillar_smart_text: 'PLC + 物联网控制的肥料与生物炭产线，连续监控、远程诊断。',
    tech_pillar_patents: '70+ 项专利',
    tech_pillar_patents_text: '覆盖热解炭化、肥料造粒、生物炭配方与土壤调理剂的发明专利体系。',
    tech_pillar_standards: '参与制定标准',
    tech_pillar_standards_text:
      '国际生物炭协会会员；参与《生物炭基肥料团体标准》、上海市土壤调理剂地方标准等制定。',
    tech_system_pyrolysis_title: '热解炭化系统',
    tech_system_pyrolysis_text: '十大核心子系统协同，实现工业级零焦油、低能耗连续化生产。',
    tech_system_fertilizer_title: '智能制肥系统',
    tech_system_fertilizer_text: '十大核心子系统集成，从原料处理、造粒、烘干到包装一体化。',
    cases_eyebrow: '项目案例',
    cases_title: '用项目证明模式',
    cases_sub: '从国内示范基地到海外旗舰——时科以完整项目，闭合"废弃物-土壤-食物-碳"的循环。',
    cases_prev: '上一个',
    cases_next: '下一个',
    certs_eyebrow: '资质与荣誉',
    certs_title: '行业认可，权威认证。',
    certs_sub: '国家级高新技术企业、行业奖项、学术合作——为我们的技术与交付背书。',
    certs_h1_title: '15+ 项资质',
    certs_h1_text: '国家高新技术企业 · 上海市专精特新企业 · 绿色环保产品认证。',
    certs_h2_title: '70+ 项专利',
    certs_h2_text: '涵盖热解、造粒、生物炭配方与土壤调理剂的发明专利。',
    certs_h3_title: '产学研合作',
    certs_h3_text: '建立院士工作站，与多所科研院校长期合作。',
    certs_section_certs: '部分资质证书',
    certs_section_patents: '部分发明专利',
    news_eyebrow: '新闻中心',
    news_title: '时科最新动态',
    news_sub: '集团新闻、项目进展与行业洞察。',
    news_all: '全部新闻',
    news_read_more: '查看详情',
    contact_eyebrow: '联系我们',
    contact_title: '让我们一起构建循环经济。',
    contact_sub:
      '请告诉我们您的项目——废弃物种类、产能、地点与时间表。我们将在 1 个工作日内回复您。',
    contact_field_name: '您的姓名',
    contact_field_email: '邮箱',
    contact_field_subject: '主题',
    contact_field_subject_ph: '例如：热解装备询价',
    contact_field_message: '留言',
    contact_field_message_hint: '（20 – 3,000 字）',
    contact_field_message_ph: '请告诉我们您的废弃物种类、产能目标、所在地与时间安排…',
    contact_submit: '发送留言',
    contact_min_err: '留言不少于 20 个字符。',
    contact_max_err: '留言不超过 3,000 个字符。',
    contact_success_title: '已收到，我们会尽快联系您。',
    contact_success_body: '时科生物的专员将在 1 个工作日内与您取得联系。',
    contact_consent: '提交即表示您同意时科生物就项目咨询事宜与您联系。',
    contact_label_hotline: '服务热线',
    contact_label_office: '总机',
    contact_label_email: '邮箱',
    contact_label_hq: '总部',
    contact_label_factory: '工厂',
    footer_desc: '资源循环、高值利用。自 2011 年起致力于循环经济基础设施的国家高新技术企业。',
    footer_email_invite: '发送邮件——与我们保持联系。',
    footer_quick: '快捷导航',
    footer_solutions: '解决方案',
    footer_contact: '联系方式',
    footer_privacy: '隐私政策',
    footer_terms: '使用条款',
    footer_sitemap: '网站地图',
    footer_rights: '版权所有，保留一切权利。',
    toast_translation_soon: '该语种翻译版本筹备中，已切换为英文显示。',
    toast_search_soon: '站内搜索功能即将上线，目前请使用顶部导航。',
    toast_page_soon: '该页面即将上线。',
    page_home_kicker: '时科生物科技',
    page_solutions_title: '解决方案',
    page_solutions_sub: '将有机废弃物转化为高价值资源的工程、装备与运营能力。',
    page_technology_title: '科技创新',
    page_technology_sub: '自主工艺技术、智能装备与权威行业标准。',
    page_about_title: '关于时科',
    page_about_sub: '以"循环经济服务商"为战略定位的国家高新技术企业。',
    page_cases_title: '项目案例',
    page_cases_sub: '从国内示范基地到海外旗舰项目。',
    page_news_title: '新闻中心',
    page_news_sub: '集团新闻、项目进展与行业洞察。',
    page_contact_title: '联系我们',
    page_contact_sub: '告诉我们您的项目，我们将在 1 个工作日内回复您。',
    crumb_home: '首页',
  },
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('seek_lang')
      if (saved === 'en' || saved === 'zh') return saved
    } catch (_) {}
    return 'en'
  })
  const [toast, setToast] = useState(null)

  const showToast = useCallback((msg) => {
    setToast(msg)
  }, [])

  // Auto-dismiss
  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 3200)
    return () => clearTimeout(id)
  }, [toast])

  const setLang = useCallback(
    (code, activeMap) => {
      // activeMap is { en: true, zh: true, es: false, ... }
      if (activeMap && !activeMap[code]) {
        // Inactive language — show toast, do not switch
        const fallback = lang
        setLangState(fallback)
        setToast(ui[fallback].toast_translation_soon)
        return false
      }
      setLangState(code)
      try {
        localStorage.setItem('seek_lang', code)
      } catch (_) {}
      return true
    },
    [lang]
  )

  const t = useCallback(
    (key) => ui[lang]?.[key] ?? ui.en[key] ?? key,
    [lang]
  )

  // Helper to pick { en, zh } objects from content
  const pick = useCallback(
    (obj) => {
      if (obj == null) return obj
      if (typeof obj === 'object' && (obj.en !== undefined || obj.zh !== undefined)) {
        return obj[lang] ?? obj.en
      }
      return obj
    },
    [lang]
  )

  return (
    <LangContext.Provider value={{ lang, setLang, t, pick, toast, showToast }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

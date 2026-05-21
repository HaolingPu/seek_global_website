import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe, Menu, Search, X, Phone } from 'lucide-react'
import { nav, languages, contact } from '../data/content'
import { useLang } from '../i18n/LangContext'

export default function Header() {
  const { lang, setLang, t, showToast } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeMap = Object.fromEntries(languages.map((l) => [l.code, l.active]))
  const currentLabel = languages.find((l) => l.code === lang)?.label || 'English'

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-ink-900 text-white/80 text-xs">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={`tel:${contact.hotline.replace(/[^0-9]/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              {t('topbar_hotline')}: {contact.hotline}
            </a>
            <span className="opacity-60">·</span>
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <a href="#contact" className="hover:text-white">{t('topbar_cooperation')}</a>
            <span className="opacity-30">|</span>
            <a href="#contact" className="hover:text-white">{t('topbar_qa')}</a>
            <span className="opacity-30">|</span>
            <a href="#contact" className="hover:text-white">{t('topbar_contact')}</a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold shadow-sm">
              S
            </div>
            <div className="leading-tight">
              <div className="text-base md:text-lg font-bold tracking-tight text-ink-900">
                SEEK Biotechnology
              </div>
              <div className="text-[11px] text-ink-500 tracking-wide">时科生物科技</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div key={item.key} className="group relative">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition hover:text-brand-700"
                >
                  {item[lang] || item.en}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition group-hover:rotate-180" />
                  )}
                </a>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[240px] rounded-xl border border-ink-300/40 bg-white p-2 shadow-card">
                      {item.children.map((c) => (
                        <a
                          key={c.en}
                          href={c.href}
                          className="block rounded-md px-3 py-2 text-sm text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
                        >
                          {c[lang] || c.en}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => showToast(t('toast_search_soon'))}
              className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-700 transition hover:bg-ink-300/20"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-300/60 px-3 py-1.5 text-xs font-medium text-ink-700 transition hover:border-brand-500 hover:text-brand-700"
              >
                <Globe className="h-3.5 w-3.5" />
                {currentLabel}
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 max-h-80 w-52 overflow-y-auto rounded-xl border border-ink-300/40 bg-white p-2 shadow-card"
                  >
                    {languages.map((l) => {
                      const selected = l.code === lang
                      return (
                        <button
                          key={l.code}
                          onClick={() => {
                            const ok = setLang(l.code, activeMap)
                            if (ok || !l.active) setLangOpen(false)
                          }}
                          className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition hover:bg-brand-50 hover:text-brand-700 ${
                            selected ? 'text-brand-700 font-semibold bg-brand-50/60' : 'text-ink-700'
                          }`}
                        >
                          <span>{l.label}</span>
                          {!l.active && (
                            <span className="ml-2 rounded-full bg-ink-300/30 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-ink-500">
                              soon
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#contact" className="hidden md:inline-flex btn-primary py-2 px-5 text-xs">
              {t('header_get_price')}
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-700 hover:bg-ink-300/20"
              aria-label={t('header_menu')}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-900/40"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-white p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">{t('header_menu')}</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 hover:bg-ink-300/20"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 space-y-1">
                {nav.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item[lang] || item.en}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-6 w-full justify-center"
              >
                {t('header_get_price')}
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'

export default function PageHero({ title, subtitle, eyebrow }) {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden border-b border-ink-300/30 bg-gradient-to-br from-brand-50/60 via-white to-white">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-x relative py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <nav className="flex items-center gap-1.5 text-xs text-ink-500">
            <Link to="/" className="hover:text-brand-700 transition">
              {t('crumb_home')}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            <span className="text-ink-700">{title}</span>
          </nav>
          {eyebrow && <span className="eyebrow mt-4 block">{eyebrow}</span>}
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 leading-[1.1] text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base md:text-lg text-ink-500 leading-relaxed text-balance">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

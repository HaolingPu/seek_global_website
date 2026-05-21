import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { contact } from '../data/content'
import { useLang } from '../i18n/LangContext'

export default function ContactCTA() {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800" />
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-100/90">
              {t('contact_eyebrow')}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
              {t('contact_title')}
            </h2>
            <p className="mt-3 text-brand-50/85">{t('contact_sub')}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
            >
              {t('contact_submit')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${contact.hotline.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {contact.hotline}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { solutions } from '../data/content'
import { useLang } from '../i18n/LangContext'

export default function Solutions() {
  const { t, pick } = useLang()
  return (
    <section id="solutions" className="relative py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="eyebrow">{t('sol_eyebrow')}</span>
            <h2 className="section-title mt-3">{t('sol_title')}</h2>
            <p className="section-sub">{t('sol_sub')}</p>
          </div>
          <a href="#contact" className="link-arrow">
            {t('sol_cta_proposal')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card group border border-ink-300/30 overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] w-full relative overflow-hidden bg-brand-50">
                <img
                  src={s.image}
                  alt={pick(s.title)}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-semibold text-brand-700 shadow-sm">
                  {pick(s.badge)}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-ink-900 transition group-hover:text-brand-700">
                  {pick(s.title)}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{pick(s.summary)}</p>
                <ul className="mt-4 space-y-1.5">
                  {pick(s.features).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                      <Check className="h-4 w-4 mt-0.5 text-brand-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="link-arrow mt-6">
                  {t('sol_cta_view_more')}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

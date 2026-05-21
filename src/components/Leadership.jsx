import { motion } from 'framer-motion'
import { leadership } from '../data/content'
import { useLang } from '../i18n/LangContext'
import { assetUrl } from '../utils/assetUrl'

export default function Leadership() {
  const { t, pick } = useLang()
  return (
    <section id="leadership" className="py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">{t('lead_eyebrow')}</span>
          <h2 className="section-title mt-3">{t('lead_title')}</h2>
          <p className="section-sub">{t('lead_sub')}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name.en}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-5 rounded-3xl border border-ink-300/40 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover md:p-6"
            >
              <div className="h-32 w-28 shrink-0 overflow-hidden rounded-2xl bg-brand-50 md:h-40 md:w-36">
                <img
                  src={assetUrl(person.photo)}
                  alt={pick(person.name)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-ink-900">{pick(person.name)}</h3>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  {pick(person.role)}
                </div>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">{pick(person.bio)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

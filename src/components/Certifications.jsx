import { motion } from 'framer-motion'
import { Award, FileBadge } from 'lucide-react'
import { certifications, patents } from '../data/content'
import { useLang } from '../i18n/LangContext'
import { assetUrl } from '../utils/assetUrl'

export default function Certifications() {
  const { t } = useLang()

  return (
    <section id="certifications" className="bg-brand-50/40 py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">{t('certs_eyebrow')}</span>
          <h2 className="section-title mt-3">{t('certs_title')}</h2>
          <p className="section-sub">{t('certs_sub')}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <HighlightCard icon={Award} title={t('certs_h1_title')} text={t('certs_h1_text')} />
          <HighlightCard icon={FileBadge} title={t('certs_h2_title')} text={t('certs_h2_text')} />
          <HighlightCard icon={Award} title={t('certs_h3_title')} text={t('certs_h3_text')} />
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
            {t('certs_section_certs')}
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {certifications.map((c, i) => (
              <motion.div
                key={c.src}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="group aspect-[4/5] overflow-hidden rounded-xl border border-ink-300/40 bg-white shadow-sm transition-shadow hover:shadow-card-hover"
              >
                <img
                  src={assetUrl(c.src)}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {patents.length > 0 && (
          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
              {t('certs_section_patents')}
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {patents.map((p, i) => (
                <motion.div
                  key={p.src}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                  className="group aspect-[4/5] overflow-hidden rounded-xl border border-ink-300/40 bg-white shadow-sm transition-shadow hover:shadow-card-hover"
                >
                  <img
                    src={assetUrl(p.src)}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function HighlightCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-ink-300/40 bg-white p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-4 text-base font-semibold text-ink-900">{title}</h4>
      <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{text}</p>
    </div>
  )
}

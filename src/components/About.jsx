import { motion } from 'framer-motion'
import { Award, Leaf, Target, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, aboutHighlights, valueChain } from '../data/content'
import { useLang } from '../i18n/LangContext'

const icons = [Target, Leaf, Award]

export default function About({ hideHeader = false }) {
  const { t, pick } = useLang()
  return (
    <section id="about" className="relative bg-brand-50/40 py-20 lg:py-24">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            {!hideHeader && <span className="eyebrow">{t('about_eyebrow')}</span>}
            {!hideHeader && <h2 className="section-title mt-3">{t('about_title')}</h2>}
            <p className={hideHeader ? 'text-base md:text-lg text-ink-500 leading-relaxed' : 'section-sub'}>
              {pick(company.description)}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-ink-300/40 bg-white p-5">
                <div className="text-2xl font-bold text-brand-700">{company.established}</div>
                <div className="mt-1 text-xs text-ink-500">{t('about_stat_founded')}</div>
              </div>
              <div className="rounded-2xl border border-ink-300/40 bg-white p-5">
                <div className="text-2xl font-bold text-brand-700">100M+</div>
                <div className="mt-1 text-xs text-ink-500">{t('about_stat_impact')}</div>
              </div>
            </div>

            <Link to="/contact" className="btn-primary mt-8">
              {t('about_partner')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="aspect-[16/10] w-full rounded-3xl border border-ink-300/30 shadow-card overflow-hidden">
                <img
                  src="/images/about-minhang-hq.jpg"
                  alt="SEEK Biotechnology Minhang headquarters"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {aboutHighlights.map((h, i) => {
                const Icon = icons[i]
                return (
                  <div key={h.title.en} className="rounded-2xl border border-ink-300/40 bg-white p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-ink-900">{pick(h.title)}</h4>
                    <p className="mt-1 text-xs text-ink-500 leading-relaxed">{pick(h.text)}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Value chain */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-ink-300/40 bg-white p-6 md:p-10 shadow-card"
        >
          <div className="max-w-2xl">
            <h3 className="text-xl md:text-2xl font-semibold text-ink-900">
              {t('about_chain_title')}
            </h3>
            <p className="mt-1.5 text-sm text-ink-500">{t('about_chain_caption')}</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {valueChain.map((v, i) => (
              <div
                key={v.step.en}
                className="relative rounded-2xl border border-ink-300/40 bg-brand-50/40 p-5"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {`0${i + 1}`} · {pick(v.step)}
                </div>
                <h4 className="mt-2 text-base font-semibold text-ink-900">{pick(v.title)}</h4>
                <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{pick(v.body)}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

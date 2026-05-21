import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Gauge, ChevronLeft, ChevronRight } from 'lucide-react'
import { cases } from '../data/content'
import { useLang } from '../i18n/LangContext'

export default function CaseStudies({ hideHeader = false }) {
  const { t, pick } = useLang()
  const [active, setActive] = useState(0)
  const total = cases.length
  const current = cases[active]

  return (
    <section id="cases" className="py-20 lg:py-24">
      <div className="container-x">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <span className="eyebrow">{t('cases_eyebrow')}</span>
              <h2 className="section-title mt-3">{t('cases_title')}</h2>
              <p className="section-sub">{t('cases_sub')}</p>
            </div>
            <CarouselControls
              active={active}
              total={total}
              setActive={setActive}
              prevLabel={t('cases_prev')}
              nextLabel={t('cases_next')}
            />
          </motion.div>
        )}

        {hideHeader && (
          <div className="flex justify-end">
            <CarouselControls
              active={active}
              total={total}
              setActive={setActive}
              prevLabel={t('cases_prev')}
              nextLabel={t('cases_next')}
            />
          </div>
        )}

        <div className={`grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch ${hideHeader ? 'mt-6' : 'mt-10'}`}>
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-ink-300/30 shadow-card lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={current.image}
                  alt={pick(current.title)}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold">
                    <MapPin className="h-3.5 w-3.5" />
                    {pick(current.location)}
                  </span>
                  <h3 className="mt-3 max-w-xl text-2xl md:text-3xl font-semibold tracking-tight">
                    {pick(current.title)}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-white/85">{pick(current.impact)}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5">
            {cases.map((c, i) => (
              <button
                key={c.title.en}
                onClick={() => setActive(i)}
                className={`rounded-2xl border p-5 text-left transition ${
                  i === active
                    ? 'border-brand-500 bg-brand-50/50 shadow-card'
                    : 'border-ink-300/40 bg-white hover:border-brand-200 hover:bg-brand-50/30'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold text-ink-900">{pick(c.title)}</h4>
                  <span className="text-xs text-ink-500">{pick(c.scale)}</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {pick(c.location)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Gauge className="h-3.5 w-3.5" />
                    {pick(c.capacity)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-700">{pick(c.impact)}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CarouselControls({ active, total, setActive, prevLabel, nextLabel }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setActive((i) => (i - 1 + total) % total)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-300/60 text-ink-700 hover:border-brand-500 hover:text-brand-700"
        aria-label={prevLabel}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <span className="text-sm text-ink-500 tabular-nums">
        {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <button
        onClick={() => setActive((i) => (i + 1) % total)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-300/60 text-ink-700 hover:border-brand-500 hover:text-brand-700"
        aria-label={nextLabel}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

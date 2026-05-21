import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/content'
import { useLang } from '../i18n/LangContext'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.floor(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { t, lang } = useLang()
  return (
    <section className="relative border-y border-ink-300/30 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700 text-white">
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="container-x relative py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-100/90">
            {t('stats_eyebrow')}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{t('stats_title')}</h2>
          <p className="mt-3 text-brand-50/80">{t('stats_sub')}</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-brand-50/85">{s[lang] || s.en}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

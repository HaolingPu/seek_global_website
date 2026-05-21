import { motion } from 'framer-motion'
import { Atom, ShieldCheck, Cpu, Beaker } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

export default function Technology({ hideHeader = false }) {
  const { t } = useLang()

  const pillars = [
    { icon: Beaker, title: t('tech_pillar_rd'), text: t('tech_pillar_rd_text') },
    { icon: Cpu, title: t('tech_pillar_smart'), text: t('tech_pillar_smart_text') },
    { icon: Atom, title: t('tech_pillar_patents'), text: t('tech_pillar_patents_text') },
    { icon: ShieldCheck, title: t('tech_pillar_standards'), text: t('tech_pillar_standards_text') },
  ]

  const systems = [
    {
      title: t('tech_system_pyrolysis_title'),
      desc: t('tech_system_pyrolysis_text'),
      image: '/images/system-pyrolysis-en.jpg',
    },
    {
      title: t('tech_system_fertilizer_title'),
      desc: t('tech_system_fertilizer_text'),
      image: '/images/system-fertilizer-en.jpg',
    },
  ]

  return (
    <section id="technology" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="container-x relative">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="eyebrow">{t('tech_eyebrow')}</span>
            <h2 className="section-title mt-3">{t('tech_title')}</h2>
            <p className="section-sub">{t('tech_sub')}</p>
          </motion.div>
        )}

        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ${hideHeader ? '' : 'mt-12'}`}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl border border-ink-300/40 bg-white p-6 transition hover:border-brand-200 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm transition-transform group-hover:scale-105">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {systems.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-3xl border border-ink-300/40 bg-white p-5 shadow-card"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-brand-50">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <h4 className="mt-5 text-lg font-semibold text-ink-900">{s.title}</h4>
              <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

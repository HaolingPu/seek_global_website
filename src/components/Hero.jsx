import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Recycle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-x relative pt-8 pb-14 lg:pt-10 lg:pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">{t('hero_eyebrow')}</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
              {t('hero_title_a')}{' '}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                {t('hero_title_b')}
              </span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-500 leading-relaxed max-w-xl text-balance">
              {t('hero_subtitle')}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/solutions" className="btn-primary">
                {t('hero_cta_primary')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost">
                {t('hero_cta_secondary')}
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2">
                <Recycle className="h-4 w-4 text-brand-600" />
                {t('hero_tag_1')}
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-600" />
                {t('hero_tag_2')}
              </span>
              <span className="inline-flex items-center gap-2">
                <Leaf className="h-4 w-4 text-brand-600" />
                {t('hero_tag_3')}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-3xl border border-ink-300/30 shadow-card overflow-hidden">
                <img
                  src="/images/hero-jinshan-factory.jpg"
                  alt="SEEK Jinshan factory panorama"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-6 top-10 hidden md:block"
              >
                <div className="rounded-2xl border border-ink-300/40 bg-white px-4 py-3 shadow-card">
                  <div className="text-xs text-ink-500">{t('hero_float_b_label')}</div>
                  <div className="text-lg font-bold text-ink-900">600,000 t</div>
                  <div className="text-[11px] text-brand-600">{t('hero_float_b_caption')}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="absolute -right-4 bottom-12 hidden md:block"
              >
                <div className="rounded-2xl border border-ink-300/40 bg-white px-4 py-3 shadow-card">
                  <div className="text-xs text-ink-500">{t('hero_float_a_label')}</div>
                  <div className="text-lg font-bold text-ink-900">70+</div>
                  <div className="text-[11px] text-accent-500">Equipment & process</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

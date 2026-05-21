import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { news } from '../data/content'
import { useLang } from '../i18n/LangContext'

const fallbackImages = [
  '/images/cases/jinshan-pano-2.jpg',
  '/images/solutions/carbon-fertilizer.jpg',
  '/images/solutions/pyrolysis-equipment.jpg',
]

export default function News() {
  const { t, pick, showToast } = useLang()

  const handleReadMore = (e) => {
    e.preventDefault()
    showToast(t('toast_page_soon'))
  }

  return (
    <section id="news" className="bg-brand-50/30 py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="eyebrow">{t('news_eyebrow')}</span>
            <h2 className="section-title mt-3">{t('news_title')}</h2>
            <p className="section-sub">{t('news_sub')}</p>
          </div>
          <a href="#news" onClick={handleReadMore} className="link-arrow">
            {t('news_all')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <motion.article
              key={n.title.en}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card group flex flex-col overflow-hidden border border-ink-300/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
                <img
                  src={fallbackImages[i % fallbackImages.length]}
                  alt={pick(n.title)}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                    {pick(n.tag)}
                  </span>
                  <time className="tabular-nums text-ink-500">{n.date}</time>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug text-ink-900 transition group-hover:text-brand-700">
                  {pick(n.title)}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-500">
                  {pick(n.excerpt)}
                </p>
                <a href="#news" onClick={handleReadMore} className="link-arrow mt-5">
                  {t('news_read_more')}
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

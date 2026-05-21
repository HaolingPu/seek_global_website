import PageHero from '../components/PageHero'
import News from '../components/News'
import ContactCTA from '../components/ContactCTA'
import { useLang } from '../i18n/LangContext'

export default function NewsPage() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        eyebrow={t('news_eyebrow')}
        title={t('page_news_title')}
        subtitle={t('page_news_sub')}
      />
      <News hideHeader />
    </>
  )
}

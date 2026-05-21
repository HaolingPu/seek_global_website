import PageHero from '../components/PageHero'
import About from '../components/About'
import Leadership from '../components/Leadership'
import ContactCTA from '../components/ContactCTA'
import { useLang } from '../i18n/LangContext'

export default function AboutPage() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        eyebrow={t('about_eyebrow')}
        title={t('page_about_title')}
        subtitle={t('page_about_sub')}
      />
      <About hideHeader />
      <Leadership />
      <ContactCTA />
    </>
  )
}

import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import { useLang } from '../i18n/LangContext'

export default function ContactPage() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        eyebrow={t('contact_eyebrow')}
        title={t('page_contact_title')}
        subtitle={t('page_contact_sub')}
      />
      <Contact hideHeader />
    </>
  )
}

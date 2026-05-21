import PageHero from '../components/PageHero'
import Technology from '../components/Technology'
import Certifications from '../components/Certifications'
import ContactCTA from '../components/ContactCTA'
import { useLang } from '../i18n/LangContext'

export default function TechnologyPage() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        eyebrow={t('tech_eyebrow')}
        title={t('page_technology_title')}
        subtitle={t('page_technology_sub')}
      />
      <Technology hideHeader />
      <Certifications />
      <ContactCTA />
    </>
  )
}

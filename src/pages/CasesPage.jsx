import PageHero from '../components/PageHero'
import CaseStudies from '../components/CaseStudies'
import ContactCTA from '../components/ContactCTA'
import { useLang } from '../i18n/LangContext'

export default function CasesPage() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        eyebrow={t('cases_eyebrow')}
        title={t('page_cases_title')}
        subtitle={t('page_cases_sub')}
      />
      <CaseStudies hideHeader />
      <ContactCTA />
    </>
  )
}

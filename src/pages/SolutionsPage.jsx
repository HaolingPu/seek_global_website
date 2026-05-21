import PageHero from '../components/PageHero'
import Solutions from '../components/Solutions'
import ContactCTA from '../components/ContactCTA'
import { useLang } from '../i18n/LangContext'

export default function SolutionsPage() {
  const { t } = useLang()
  return (
    <>
      <PageHero
        eyebrow={t('sol_eyebrow')}
        title={t('page_solutions_title')}
        subtitle={t('page_solutions_sub')}
      />
      <Solutions hideHeader />
      <ContactCTA />
    </>
  )
}

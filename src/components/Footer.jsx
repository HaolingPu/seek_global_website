import { Mail, MapPin, Phone, Factory } from 'lucide-react'
import { company, contact, nav } from '../data/content'
import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t, pick, lang, showToast } = useLang()

  const handleSoon = (e) => {
    e.preventDefault()
    showToast(t('toast_page_soon'))
  }

  return (
    <footer className="bg-ink-900 text-white/80">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold shadow-sm">
                S
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold text-white">SEEK Biotechnology</div>
                <div className="text-[11px] tracking-wide text-white/60">时科生物科技</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{t('footer_desc')}</p>
            <p className="mt-5 text-xs text-white/60">{t('footer_email_invite')}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/15"
            >
              <Mail className="h-3.5 w-3.5" />
              {contact.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white">{t('footer_quick')}</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.key}>
                  <a href={n.href} className="text-sm text-white/70 transition hover:text-white">
                    {n[lang] || n.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-white">{t('footer_solutions')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="#solutions" className="hover:text-white transition">Circular Economy EPC</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Pyrolysis Equipment</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Fertilizer Equipment</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Carbon Trading</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Plant Nutrition</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Soil Remediation</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white">{t('footer_contact')}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-brand-200" />
                <div>
                  <a
                    href={`tel:${contact.hotline.replace(/[^0-9]/g, '')}`}
                    className="hover:text-white transition"
                  >
                    {contact.hotline}
                  </a>
                  <div className="text-xs text-white/55">{contact.tel}</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-200" />
                <span>{pick(contact.hq)}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Factory className="mt-0.5 h-4 w-4 text-brand-200" />
                <span>{pick(contact.factory)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 md:flex-row">
          <div>
            © 2019–{new Date().getFullYear()} {company.nameEn}. {t('footer_rights')}
          </div>
          <div className="flex items-center gap-5">
            <a href="#" onClick={handleSoon} className="transition hover:text-white">
              {t('footer_privacy')}
            </a>
            <a href="#" onClick={handleSoon} className="transition hover:text-white">
              {t('footer_terms')}
            </a>
            <a href="#" onClick={handleSoon} className="transition hover:text-white">
              {t('footer_sitemap')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

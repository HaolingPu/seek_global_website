import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Factory } from 'lucide-react'
import { contact } from '../data/content'
import { useLang } from '../i18n/LangContext'

export default function Contact() {
  const { t, pick } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.message.trim().length < 20) {
      setError(t('contact_min_err'))
      return
    }
    if (form.message.length > 3000) {
      setError(t('contact_max_err'))
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-50/40 to-white" />
      <div className="absolute -left-20 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">{t('contact_eyebrow')}</span>
            <h2 className="section-title mt-3">{t('contact_title')}</h2>
            <p className="section-sub">{t('contact_sub')}</p>

            <div className="mt-8 space-y-4">
              <ContactRow
                icon={Phone}
                label={t('contact_label_hotline')}
                value={contact.hotline}
                href={`tel:${contact.hotline.replace(/[^0-9]/g, '')}`}
              />
              <ContactRow
                icon={Phone}
                label={t('contact_label_office')}
                value={contact.tel}
              />
              <ContactRow
                icon={Mail}
                label={t('contact_label_email')}
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactRow
                icon={MapPin}
                label={t('contact_label_hq')}
                value={pick(contact.hq)}
              />
              <ContactRow
                icon={Factory}
                label={t('contact_label_factory')}
                value={pick(contact.factory)}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-ink-300/40 bg-white p-6 shadow-card md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink-900">
                    {t('contact_success_title')}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-500">{t('contact_success_body')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field
                      label={t('contact_field_name')}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label={t('contact_field_email')}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Field
                    label={t('contact_field_subject')}
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={t('contact_field_subject_ph')}
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-ink-700">
                      {t('contact_field_message')}{' '}
                      <span className="font-normal text-ink-500">
                        {t('contact_field_message_hint')}
                      </span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t('contact_field_message_ph')}
                      className="w-full rounded-xl border border-ink-300/60 bg-white px-4 py-3 text-sm text-ink-900 transition placeholder:text-ink-500/60 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-[11px] text-ink-500">
                        {form.message.length} / 3,000
                      </span>
                      {error && <span className="text-[11px] text-red-600">{error}</span>}
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    {t('contact_submit')}
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[11px] text-ink-500">{t('contact_consent')}</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href ? { href } : {}
  return (
    <Wrapper
      {...wrapperProps}
      className="flex items-start gap-3 rounded-2xl border border-ink-300/40 bg-white p-4 transition hover:border-brand-300"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
          {label}
        </div>
        <div className="break-words text-sm font-medium text-ink-900">{value}</div>
      </div>
    </Wrapper>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-ink-700">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-ink-300/60 bg-white px-4 py-2.5 text-sm text-ink-900 transition placeholder:text-ink-500/60 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  )
}

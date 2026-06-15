import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Page from '../components/Page'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { COMPANY, OFFICES, INQUIRY_REASONS } from '../data/site'

const EMPTY = { name: '', email: '', phone: '', subject: '', reason: '', message: '' }

function Field({ label, children, error }) {
  return (
    <label className="block">
      <span className="mb-2 block font-data text-[0.72rem] uppercase tracking-[0.16em] text-mist">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-bronze-hi">{error}</span>}
    </label>
  )
}

const inputCls =
  'w-full rounded-lg border border-white/10 bg-hull px-4 py-3 text-foam placeholder:text-mist/50 transition-colors focus:border-bronze focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.message.trim()) next.message = 'Tell us what you need.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // No backend wired yet: compose a pre-filled email to operations.
    // ── BACKEND NOTE: replace this block with a POST to your form handler
    //    (e.g. Formspree, a Cloud Function, or your own API endpoint). ──
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Reason: ${form.reason || '—'}`,
      '',
      form.message,
    ].join('\n')
    const subject = form.subject || `Service enquiry — ${form.reason || 'General'}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <Page>
      <Seo
        title="Contact"
        description="Request a service from Sea Shark Shipping Services LLC — Khorfakkan-based marine services. Offices in Dubai and Sharjah. 24/7 operations."
        path="/contact"
      />
      <PageHeader
        eyebrow="Get in touch"
        title={<>Tell us the vessel<br />and the need.</>}
        lead="One form, one accountable point of contact. We coordinate the rest — at any hour."
      />

      <section className="shell grid gap-16 pb-28 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:pb-36">
        {/* ── Form ── */}
        <Reveal>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-bronze/30 bg-hull p-10"
              >
                <h2 className="text-3xl text-foam">Thank you.</h2>
                <p className="mt-4 leading-relaxed text-mist">
                  Your email client should be opening with the details ready to
                  send. If it didn’t, reach us directly at{' '}
                  <a href={`mailto:${COMPANY.email}`} className="text-bronze-hi underline">
                    {COMPANY.email}
                  </a>{' '}
                  or{' '}
                  <a href={`tel:${COMPANY.phoneHref}`} className="text-bronze-hi underline">
                    {COMPANY.phone}
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setSent(false)
                    setForm(EMPTY)
                  }}
                  className="mt-8 font-data text-xs uppercase tracking-[0.16em] text-mist transition-colors hover:text-foam"
                >
                  ← Send another enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      className={inputCls}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      className={inputCls}
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      className={inputCls}
                      placeholder="+971 …"
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Subject">
                    <input
                      type="text"
                      value={form.subject}
                      onChange={update('subject')}
                      className={inputCls}
                      placeholder="Vessel / call reference"
                    />
                  </Field>
                </div>

                <Field label="Reason for enquiry">
                  <select value={form.reason} onChange={update('reason')} className={inputCls}>
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {INQUIRY_REASONS.map((r) => (
                      <option key={r} value={r} className="bg-hull">
                        {r}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" error={errors.message}>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className={`${inputCls} resize-none`}
                    placeholder="Vessel, location, timing and what you need."
                  />
                </Field>

                <MagneticButton type="submit">Send enquiry</MagneticButton>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>

        {/* ── Direct details ── */}
        <Reveal delay={0.1}>
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 px-4 py-2 font-data text-[0.72rem] uppercase tracking-[0.18em] text-bronze">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bronze" />
              24/7 Operations &amp; response
            </div>

            <div>
              <p className="eyebrow mb-3">Direct</p>
              <a href={`mailto:${COMPANY.email}`} className="block text-lg text-foam transition-colors hover:text-bronze-hi">
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phoneHref}`} className="block text-lg text-foam transition-colors hover:text-bronze-hi">
                {COMPANY.phone}
              </a>
            </div>

            <div>
              <p className="eyebrow mb-3">Offices</p>
              <ul className="space-y-3">
                {OFFICES.map((o) => (
                  <li key={o.label} className="text-mist">
                    <span className="text-foam">{o.area}</span>, {o.city}
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded map — keyless Google Maps embed centred on Khorfakkan Port.
                ASSET NOTE: swap the query for a pinned office address if preferred. */}
            <div className="overflow-hidden rounded-2xl border border-white/8">
              <iframe
                title="Khorfakkan Port location"
                src="https://maps.google.com/maps?q=Khorfakkan%20Port&z=12&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                style={{ border: 0, filter: 'grayscale(0.4) brightness(0.8)' }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}

import { CONTACTS, HOURS, SERVICES, PHOTOS } from '../content.js'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'

export default function Contact() {
  return (
    <>
      <PageBanner variant="tint" tag="[ Contact ]" title="Get in touch."
        lead="WhatsApp is the fastest way to reach us. Pick what you need and your message is ready to send."
        crumbs={[{ label: 'Contact' }]}>
        <div className="quick hb__quick">
          {SERVICES.map((s) => (
            <WaLink key={s.slug} className="quick__btn" message={s.wa}><span className="dot" /><span><small>WhatsApp</small>{s.cta}</span></WaLink>
          ))}
        </div>
      </PageBanner>
      <section className="section section--contact">
        <div className="wrap">
          <div className="contact-grid"><div className="contact">
            {CONTACTS.map((c, i) => (
              <Reveal className="box" key={c.label} delay={i * 70}>
                <p>{c.label}</p>
                <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}>{c.text}</a>
              </Reveal>
            ))}
            <Reveal className="box box--wide"><p>Office hours (Sharjah)</p><span>{HOURS}</span></Reveal>
          </div>
          <Reveal className="map">
            <iframe title="Map of Khorfakkan Port" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Khor+Fakkan+Port,+UAE&z=12&output=embed" />
          </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

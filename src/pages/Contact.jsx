import { CONTACTS, HOURS_ROWS, MAIN_SERVICES as SERVICES, PHOTOS } from '../content.js'
import { WhatsAppIcon } from '../components/Icons.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'

export default function Contact() {
  return (
    <>
      <PageBanner variant="tint" tag="Contact" title="Get in touch."
        lead="WhatsApp is the fastest way to reach us. Pick what you need and your message is ready to send."
        crumbs={[{ label: 'Contact' }]}>
        <div className="quick hb__quick">
          {SERVICES.map((s) => (
            <WaLink key={s.slug} className="quick__btn" message={s.wa} number={s.number}><span className="wa-ic"><WhatsAppIcon /></span><span><small>WhatsApp</small>{s.cta}</span></WaLink>
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
            <Reveal className="box"><p>Working hours</p><dl className="hours hours--box">{HOURS_ROWS.map(([d, t]) => <div key={d}><dt>{d}</dt><dd>{t}</dd></div>)}</dl></Reveal>
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

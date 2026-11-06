import { CONTACTS, HOURS_ROWS, MAIN_SERVICES, MINOR_SERVICES, WHATSAPP_NUMBER } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import { Head } from '../components/Blocks.jsx'

const ICONS = ['phone', 'phone', 'mail', 'pin', 'pin']

export default function Contact() {
  return (
    <>
      <PageHead eyebrow="Contact" title="Talk to our desk."
        lead="WhatsApp is the fastest way to reach us. Pick what you need and your message is ready to send."
        crumbs={[{ label: 'Contact' }]}>
        <div className="quick quick--core">
          {MAIN_SERVICES.map((s) => (
            <WaLink key={s.slug} message={s.wa} number={s.number}><span className="quick__ic"><WhatsAppIcon /></span><span><small>{s.title}</small><b>{s.cta}</b></span></WaLink>
          ))}
        </div>
        <div className="quick" style={{ marginTop: 12 }}>
          {MINOR_SERVICES.map((s) => (
            <WaLink key={s.slug} message={s.wa} number={s.number || WHATSAPP_NUMBER}><span className="quick__ic"><WhatsAppIcon /></span><span><small>{s.title}</small><b>{s.cta}</b></span></WaLink>
          ))}
        </div>
      </PageHead>

      <section className="sec">
        <div className="wrap">
          <Head eyebrow="Offices and lines" title="Every way to reach us." />
          <div className="reach">
            <div className="reach__list">
              {CONTACTS.map((c, i) => (
                <Reveal as="a" className={`reach__item${i === 0 ? ' reach__item--main' : ''}`} key={c.label} href={c.href} delay={i * 60}
                  {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}>
                  <span className="reach__ic"><ServiceIcon id={ICONS[i]} /></span>
                  <span><small>{c.label}</small><b>{c.text}</b></span>
                </Reveal>
              ))}
              <Reveal className="reach__item" delay={320}>
                <span className="reach__ic"><ServiceIcon id="clock" /></span>
                <span><small>Working hours</small><b>{HOURS_ROWS.map(([d, t]) => `${d} ${t}`).join(' · ')}</b></span>
              </Reveal>
            </div>
            <Reveal className="map" delay={120}>
              <iframe title="Map of Khorfakkan Port" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Khor+Fakkan+Port,+UAE&z=12&output=embed" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

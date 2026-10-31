import { SERVICES, PHOTOS, PHONE_DISPLAY, PHONE_LINK, EMAIL, HOURS_ROWS, OFFICES } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import Wave from '../components/Wave.jsx'
import WaLink from '../components/WaLink.jsx'

export default function Contact() {
  return (
    <>
      <PageHead image={PHOTOS.tugFront} label="Contact" title="Talk to us."
        lead="WhatsApp is the fastest way to reach us. Pick what you need and your message is ready to send."
        crumbs={[{ label: 'Contact' }]} />

      <section className="section">
        <div className="wrap">
          <Head label="Quick message" title="What do you need?" />
          <div className="quick">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <WaLink className="quick__btn" message={s.wa}>
                  <span className="quick__icon"><ServiceIcon id={s.icon} /></span>
                  <span><small>WhatsApp</small>{s.cta}</span>
                  <ServiceIcon id="arrow" />
                </WaLink>
              </Reveal>
            ))}
            <Reveal delay={270}>
              <WaLink className="quick__btn quick__btn--blue" message="Hello Sea Shark, I have an enquiry.">
                <span className="quick__icon"><WhatsAppIcon /></span>
                <span><small>WhatsApp</small>Something else</span>
                <ServiceIcon id="arrow" />
              </WaLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--ice">
        <Wave fill="#eef2fb" flip />
        <div className="wrap">
          <Head label="Details" title="Call, email or visit." />
          <div className="contact">
            <Reveal className="box"><p>Phone and WhatsApp</p><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></Reveal>
            <Reveal className="box" delay={70}><p>Operations email</p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></Reveal>
            {OFFICES.map((o, i) => (
              <Reveal className="box" key={o.name} delay={140 + i * 70}>
                <p>{o.name}</p><a href={o.map} target="_blank" rel="noopener">{o.place}</a>
              </Reveal>
            ))}
            <Reveal className="box box--hours" delay={280}>
              <p>Office hours</p>
              <table><tbody>{HOURS_ROWS.map(([d, t]) => <tr key={d}><td>{d}</td><td>{t}</td></tr>)}</tbody></table>
            </Reveal>
          </div>
          <Reveal className="map">
            <iframe title="Map of Khorfakkan Port" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Khor+Fakkan+Port,+UAE&z=12&output=embed" />
          </Reveal>
        </div>
      </section>
    </>
  )
}

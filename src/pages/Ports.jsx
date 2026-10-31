import { PORTS, FAQ, PHOTOS } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Contours, { Side } from '../components/Contours.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import Faq from '../components/Faq.jsx'
import Tbc from '../components/Tbc.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Ports() {
  return (
    <>
      <PageHead image={PHOTOS.portAerial} label="Ports & FAQ" title="Where we work, and what people ask."
        lead="We work at two ports on the Gulf of Oman coast of the UAE. Here is what we do at each, and answers to the questions we hear most."
        crumbs={[{ label: 'Ports & FAQ' }]} />

      <section className="section has-side">
        <Side side="right" />
        <div className="wrap">
          <Head label="Ports" title="Khorfakkan and Fujairah." />
          <div className="ports ports--big">
            {PORTS.map((p, i) => (
              <Reveal className={`port port--${i}`} key={p.id} delay={i * 120}>
                <Contours variant="card" />
                <span className="port__pin"><ServiceIcon id="pin" /></span>
                <p className="port__coords">{p.coords}</p>
                <h3>{p.name}</h3>
                <p>{p.lead}</p>
                <ul className="ticks">{p.work.map((w) => <li key={w.text}><i className="ring" />{w.text}<Tbc on={w.tbc} /></li>)}</ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="map">
            <iframe title="Map of the UAE east coast from Khorfakkan to Fujairah" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Khor+Fakkan+Port,+UAE&z=10&output=embed" />
          </Reveal>
        </div>
      </section>

      <section className="section section--mist has-side" id="faq">
        <Side side="left" />
        <div className="wrap faqwrap">
          <Head label="FAQ" title="Questions we hear most." note="Can't see yours? Ask us on WhatsApp." />
          <Reveal delay={100}><Faq items={FAQ} /></Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

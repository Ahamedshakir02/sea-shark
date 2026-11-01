import { PHOTOS, BARGE_SPECS } from '../content.js'
import Tbc from '../components/Tbc.jsx'
import { ServiceIcon } from '../components/Icons.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const FACTS = [
  { k: 'Name', v: 'Malik' },
  { k: 'Type', v: 'Fresh water barge' },
  { k: 'Owned by', v: 'Sea Shark Shipping Services LLC' },
  { k: 'Works at', v: 'Khorfakkan and Fujairah' },
]

export default function Barge() {
  return (
    <>
      <PageBanner image={PHOTOS.bargeAerial} tag="[ Our barge ]" title="Our own barge, not hired."
        lead="Malik is the fresh water barge we own and run ourselves." crumbs={[{ label: 'Our barge' }]}>
        <dl className="hb__chips">{BARGE_SPECS.slice(1, 4).map((f) => <div key={f.k}><dt>{f.k}</dt><dd>{f.v}</dd></div>)}</dl>
      </PageBanner>
      <section className="section">
        <div className="wrap feature__in">
          <Reveal className="feature__img"><img src={malik} alt="Malik, our fresh water barge, alongside in port" /></Reveal>
          <Reveal className="feature__text" delay={120}>
            <p className="tag tag--dark">[ Malik ]</p>
            <h2>Why owning the barge matters.</h2>
            <p>Most of the delays in fresh water supply come from waiting on someone else's boat. We own Malik, so when you book water we plan the delivery around your ship, not around a third party's timetable.</p>
            <p>We also look after the barge ourselves, which means we know its condition and keep it to the standard our clients expect.</p>
            <WaLink className="pill pill--wa" message="Hello Sea Shark, I need fresh water from Malik. Vessel: ... Location: ... Quantity: ...">
              <span className="dot" />Order water on WhatsApp
            </WaLink>
          </Reveal>
        </div>
      </section>
      <section className="section section--navy">
        <div className="wrap specs__in">
          <Reveal className="head"><p className="tag">[ Malik at a glance ]</p><h2>The barge in numbers.</h2>
            <p className="head__note">Exact figures are being confirmed with our operations team.</p></Reveal>
          <dl className="specs">
            {BARGE_SPECS.map((f, i) => (
              <Reveal key={f.k} delay={i * 50}><dt>{f.k}</dt><dd>{f.v}{f.tbc && <Tbc />}</dd></Reveal>
            ))}
          </dl>
        </div>
      </section>
      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ What it means for you ]</p><h2>Water on your schedule.</h2></Reveal>
          <div className="cards">
            {[
              ['Book ahead or same day', 'Tell us when your ship needs water and we plan Malik around it.'],
              ['Two ports', 'We deliver to ships at anchor at Khorfakkan and Fujairah. Alongside delivery is being confirmed.'],
              ['One contact', 'Message us on WhatsApp and the same team handles the job from start to finish.'],
            ].map(([t, x], i) => (
              <Reveal className="card" key={t} delay={i * 110}>
                <div className="card__icon"><ServiceIcon id="water" /></div>
                <h3>{t}</h3><p>{x}</p>
              </Reveal>
            ))}
          </div>
          <p className="note">Ask us for capacity and availability on WhatsApp.</p>
        </div>
      </section>
      <CtaBand image={PHOTOS.shipRedSky} title="Need fresh water for your ship?" message="Hello Sea Shark, I need fresh water from Malik. Vessel: ... Location: ... Quantity: ..." />
    </>
  )
}

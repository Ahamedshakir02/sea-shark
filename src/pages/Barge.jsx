import { PHOTOS, BARGE_SPECS, WATER_MESSAGE, SERVICES } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const FACTS = [
  { k: 'Name', v: 'Malik' },
  { k: 'Type', v: 'Fresh water barge' },
  { k: 'Owned by', v: 'Sea Shark Shipping Services LLC' },
  { k: 'Works at', v: 'Khorfakkan' },
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
          <Reveal className="feature__img"><img src={malik} alt="Malik, our fresh water barge, alongside in port" loading="lazy" decoding="async" /></Reveal>
          <Reveal className="feature__text" delay={120}>
            <p className="tag tag--dark">[ Malik ]</p>
            <h2>Why owning the barge matters.</h2>
            <p>Most of the delays in fresh water supply come from waiting on someone else's boat. We own Malik, so when you book water we plan the delivery around your ship, not around a third party's timetable.</p>
            <p>We also look after the barge ourselves, which means we know its condition and keep it to the standard our clients expect.</p>
            <WaLink className="pill pill--wa" message={WATER_MESSAGE}>
              <span className="wa-ic"><WhatsAppIcon /></span>Check water availability
            </WaLink>
          </Reveal>
        </div>
      </section>
      <section className="section section--navy">
        <div className="wrap specs__in">
          <Reveal className="head"><p className="tag">[ Malik at a glance ]</p><h2>The barge in numbers.</h2>
            <p className="head__note">Need capacity or pump details for your ship? Ask us on WhatsApp.</p></Reveal>
          <dl className="specs">
            {BARGE_SPECS.map((f, i) => (
              <Reveal key={f.k} delay={i * 50}><dt>{f.k}</dt><dd>{f.v}</dd></Reveal>
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
              ['At Khorfakkan', 'We deliver to ships at anchor at Khorfakkan. Ask us about ships alongside.'],
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
      <section className="section">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ A delivery, step by step ]</p><h2>How Malik delivers your water.</h2></Reveal>
          <ol className="steps steps--flow" style={{ '--n': SERVICES[0].process.length }}>
            {SERVICES[0].process.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 110}>
                <span className="steps__n">0{i + 1}</span><h3>{st.title}</h3><p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
          <p className="note">Keeping the water clean: Malik's tanks and hoses are used for drinking water only, and we look after them ourselves.</p>
        </div>
      </section>
      <CtaBand image={PHOTOS.shipRedSky} title="Need fresh water for your ship?" message={WATER_MESSAGE} />
    </>
  )
}

import { PHOTOS, BARGE_SPECS, WATER_MESSAGE, SERVICES, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_NUMBER } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Head, Timeline } from '../components/Blocks.jsx'
import malik from '../assets/boat-malik.jpg'

const water = SERVICES.find((s) => s.slug === 'fresh-water')
const BENEFITS = [
  ['Book ahead or same day', 'Tell us when your ship needs water and we plan Malik around it.'],
  ['At Khorfakkan', 'We deliver to ships at anchor at Khorfakkan. Ask us about ships alongside.'],
  ['One contact', 'Message us on WhatsApp and the same team handles the job from start to finish.'],
]

export default function Barge() {
  return (
    <>
      <PageHead variant="photo" image={PHOTOS.bargeAerial} eyebrow="Our barge" title="Our own barge, not hired."
        lead="Malik is the fresh water barge we own and run ourselves." crumbs={[{ label: 'Our barge' }]}>
        <dl className="facts" style={{ '--n': 3 }}>{BARGE_SPECS.slice(1, 4).map((f) => <div key={f.k}><dt>{f.k}</dt><dd>{f.v}</dd></div>)}</dl>
      </PageHead>

      <section className="sec">
        <div className="wrap feature">
          <Reveal className="feature__img"><img src={malik} alt="Malik, our fresh water barge, alongside in port" loading="lazy" decoding="async" width="1424" height="612" /></Reveal>
          <Reveal className="feature__text" delay={120}>
            <p className="eyebrow">Malik</p>
            <h2>Why owning the barge matters.</h2>
            <p>Most of the delays in fresh water supply come from waiting on someone else's boat. We own Malik, so when you book water we plan the delivery around your ship, not around a third party's timetable.</p>
            <p>We also look after the barge ourselves, which means we know its condition and keep it to the standard our clients expect.</p>
            <WaLink className="btn btn--wa" message={WATER_MESSAGE}><WhatsAppIcon />Check water availability</WaLink>
          </Reveal>
        </div>
      </section>

      <section className="sec sec--navy on-dark">
        <div className="wrap">
          <Head split eyebrow="Malik at a glance" title="The barge in brief." lead="Need capacity or pump details for your ship? Ask us on WhatsApp." />
          <Reveal as="dl" className="spec">{BARGE_SPECS.map((f) => <div key={f.k}><dt>{f.k}</dt><dd>{f.v}</dd></div>)}</Reveal>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <Head eyebrow="What it means for you" title="Water on your schedule." />
          <div className="cards cards--3">
            {BENEFITS.map(([t, x], i) => (
              <Reveal className="card" key={t} delay={i * 100}>
                <span className="card__icon"><ServiceIcon id="water" /></span><h3>{t}</h3><p>{x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head eyebrow="A delivery, step by step" title="How Malik delivers your water." />
          <Timeline steps={water.process} />
          <p className="note">Keeping the water clean: Malik's tanks and hoses are used for drinking water only, and we look after them ourselves.</p>
        </div>
      </section>
      <CtaBand image={PHOTOS.shipRedSky} title="Need fresh water for your ship?" text="Send the vessel, position and quantity, and we give you a delivery time."
        message={WATER_MESSAGE} number={WHATSAPP_NUMBER} phone={PHONE_DISPLAY} phoneLink={PHONE_LINK} />
    </>
  )
}

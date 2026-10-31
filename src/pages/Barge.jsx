import { BARGE_SPECS, SERVICES } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import WaLink from '../components/WaLink.jsx'
import Tbc from '../components/Tbc.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Wave from '../components/Wave.jsx'
import malik from '../assets/boat-malik.jpg'

const MEANS = [
  ['clock', 'Your schedule, not ours', 'We plan Malik around your ship. No waiting on a third party\'s boat.'],
  ['water', 'Water kept for drinking', 'Tanks and hoses used for drinking water only, looked after by us.'],
  ['chat', 'One contact', 'The same team takes your message, plans the run and confirms the delivery.'],
]

export default function Barge() {
  return (
    <>
      <PageHead image="malik" label="Our barge" title="Our own barge. Not hired."
        lead="Malik is the fresh water barge we own and run ourselves at Khorfakkan and Fujairah."
        crumbs={[{ label: 'Our barge' }]} />

      <section className="section">
        <div className="wrap split2">
          <Reveal className="collage collage--solo"><div className="blob blob--1"><img src={malik} alt="Malik, our fresh water barge, in port" /></div><span className="chip chip--a"><ServiceIcon id="water" />Owned and run by us</span></Reveal>
          <div>
            <Head label="Malik" title="Why owning the barge matters." />
            <Reveal className="prose" delay={100}>
              <p>Most delays in fresh water supply come from waiting on someone else's boat. We own Malik, so when you book water we plan the run around your ship.</p>
              <p>We also maintain the barge ourselves. We know its condition every day and keep it to the standard our clients expect.</p>
              <WaLink className="btn btn--indigo" message={SERVICES[0].wa}><ServiceIcon id="chat" />Order water on WhatsApp</WaLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--ice">
        <Wave fill="#eef2fb" flip />
        <div className="wrap">
          <Head label="Specification" title="Malik at a glance." note="Numbers marked 'to confirm' are being checked and will be added soon." />
          <Reveal as="dl" className="specs">
            {BARGE_SPECS.map((f) => <div key={f.k}><dt>{f.k}</dt><dd>{f.v} <Tbc on={f.tbc} /></dd></div>)}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Head label="What it means for you" title="Water on your schedule." />
          <div className="why why--three why--white">
            {MEANS.map(([ic, t, x], i) => (
              <Reveal className="why__item" key={t} delay={i * 100}>
                <span className="bubble"><ServiceIcon id={ic} /></span><h3>{t}</h3><p>{x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Need fresh water for your ship?" message={SERVICES[0].wa} />
    </>
  )
}

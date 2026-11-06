import { PHOTOS, VALUES, WHY, SAFETY, PRINCIPLES, photo } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Head } from '../components/Blocks.jsx'

export default function About() {
  return (
    <>
      <PageHead variant="split" image={PHOTOS.tankerDeckDusk} eyebrow="About us" title="A ship agency built on marine experience."
        lead="Ship agency, marine survey and underwater services at Khorfakkan, UAE, with offices in Sharjah and Dubai." crumbs={[{ label: 'About' }]} />

      <section className="sec">
        <div className="wrap story">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2>Built for vessels calling on the east coast.</h2>
            <div className="since"><strong>2023</strong><span>Founded, with 20+ years of combined marine experience behind it</span></div>
          </Reveal>
          <Reveal className="story__text" delay={120}>
            <p>Sea Shark Shipping Services LLC was founded in 2023 by people who have spent their careers around ships. Between them, our founders bring more than 20 years of combined marine experience.</p>
            <p>We act as ship agent at Khorfakkan Port on the UAE east coast, with offices in Sharjah and Dubai. Owners, operators, charterers and masters appoint us to handle their port calls, from pre-arrival planning and clearance to husbandry and crew support.</p>
            <p>Alongside agency we carry out marine surveys and underwater services such as hull inspection and cleaning. We also run our own vessel, the fresh water barge Malik, and arrange crew boats, so the needs of a vessel in port are handled by one team.</p>
            <p>We keep our services focused, so each port call gets proper attention and a prompt response.</p>
          </Reveal>
        </div>
      </section>

      <section className="mission">
        <div className="mission__img" style={{ '--img': `url(${photo(PHOTOS.boatWake, 1600)})` }} />
        <div className="mission__text on-dark">
          <Reveal>
            <p className="eyebrow">Mission</p>
            <h2>Dependable agency for every vessel we represent.</h2>
            <p className="lead">Every vessel we represent at Khorfakkan gets a well-prepared port call, clear communication and a job done properly.</p>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head eyebrow="Why Sea Shark" title="Why owners and operators choose us." />
          <Reveal className="why">
            {WHY.map((w, i) => <div key={w.title}><strong>0{i + 1}</strong><h3>{w.title}</h3><p>{w.text}</p></div>)}
          </Reveal>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <Head eyebrow="Our promise" title="What you can expect from us." />
          <div className="cards cards--3">
            {PRINCIPLES.map((st, i) => (
              <Reveal className="card" key={st.title} delay={i * 100}>
                <span className="card__n">0{i + 1}</span><h3>{st.title}</h3><p>{st.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--navy on-dark">
        <div className="wrap">
          <Head split eyebrow="Safety" title="Safety comes first, on every job." lead="Vessels, crews, divers and water: how we keep each one safe." />
          <div className="cards cards--fit">
            {SAFETY.map((x, i) => (
              <Reveal className="card" key={x.title} delay={(i % 3) * 90}>
                <span className="card__icon"><ServiceIcon id="shield" /></span><h3>{x.title}</h3><p>{x.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head eyebrow="Our values" title="How we work." />
          <div className="cards">
            {VALUES.map((v, i) => (
              <Reveal className="card" key={v.name} delay={i * 80}><span className="card__n">0{i + 1}</span><h3>{v.name}</h3><p>{v.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Want to work with us?" text="Tell us about your vessel and what the call needs. Our agency desk will reply." />
    </>
  )
}

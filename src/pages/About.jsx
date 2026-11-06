import { PHOTOS, VALUES, WHY, SAFETY, PRINCIPLES, photo } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function About() {
  return (
    <>
      <PageBanner variant="editorial" image={PHOTOS.tankerDeckDusk} image2={PHOTOS.ropeDeck} tag="About us" title="A ship agency built on marine experience."
        lead="Ship agency, marine survey and underwater services at Khorfakkan, UAE." crumbs={[{ label: 'About' }]}>
        <p className="hb__since"><strong>2023</strong>founded, with 20+ years of combined marine experience behind it</p>
      </PageBanner>

      <section className="section">
        <div className="wrap about">
          <Reveal>
            <p className="tag tag--dark">Our story</p>
            <h2>Built for vessels calling on the east coast.</h2>
          </Reveal>
          <Reveal className="about__text" delay={120}>
            <p>Sea Shark Shipping Services LLC was founded in 2023 by people who have spent their careers around ships. Between them, our founders bring more than 20 years of combined marine experience.</p>
            <p>We act as ship agent at Khorfakkan Port on the UAE east coast, with offices in Sharjah and Dubai. Owners, operators, charterers and masters appoint us to handle their port calls, from pre-arrival planning and clearance to husbandry and crew support.</p>
            <p>Alongside agency we carry out marine surveys and underwater services such as hull inspection and cleaning. We also run our own vessel, the fresh water barge Malik, and arrange crew boats, so the needs of a vessel in port are handled by one team.</p>
            <p>We keep our services focused, so each port call gets proper attention and a prompt response.</p>
          </Reveal>
        </div>
      </section>

      <section className="split">
        <div className="split__img" style={{ '--img': `url(${photo(PHOTOS.boatWake, 1600)})` }} />
        <div className="split__text">
          <Reveal>
            <p className="tag">Mission</p>
            <h2>Dependable agency for every vessel we represent.</h2>
            <p>Our aim is simple: every vessel we represent at Khorfakkan gets a well-prepared port call, clear communication and a job done properly.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">Why Sea Shark</p><h2>Why ships work with us.</h2></Reveal>
          <div className="why">
            {WHY.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 90}>
                <span className="steps__n">0{i + 1}</span><h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">Our promise</p><h2>What you can expect from us.</h2></Reveal>
          <ol className="steps">
            {PRINCIPLES.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 110}>
                <span className="steps__n">0{i + 1}</span><h3>{st.title}</h3><p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section--navy">
        <div className="wrap">
          <Reveal className="head head--row"><div><p className="tag">Safety</p><h2>Safety comes first, on every job.</h2></div>
            <p className="head__note">Vessels, crews, divers and water: how we keep each one safe.</p></Reveal>
          <div className="safety">
            {SAFETY.map((x, i) => (
              <Reveal className="safety__item" key={x.title} delay={i * 90}>
                <span className="safety__icon"><ServiceIcon id="check" /></span><h3>{x.title}</h3><p>{x.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">Our values</p><h2>How we work.</h2></Reveal>
          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal className="value" key={v.name} delay={i * 90}><h3>{v.name}</h3><p>{v.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand variant="plain" title="Want to work with us?" text="Tell us about your ship and what it needs. We reply during office hours." />
    </>
  )
}

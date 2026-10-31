import { PHOTOS, VALUES, WHY, photo } from '../content.js'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function About() {
  return (
    <>
      <PageBanner image={PHOTOS.ropeDeck} tag="[ About us ]" title="Young company, experienced hands."
        lead="A UAE marine services company built on local knowledge and our own vessel." crumbs={[{ label: 'About' }]} />

      <section className="section">
        <div className="wrap about">
          <Reveal>
            <p className="tag tag--dark">[ Our story ]</p>
            <h2>Built for ships calling on the east coast.</h2>
          </Reveal>
          <Reveal className="about__text" delay={120}>
            <p>Sea Shark Shipping Services LLC was founded in 2023 by people who have spent their careers around ships. Between them, our founders bring more than 20 years of combined marine experience.</p>
            <p>We work from Khorfakkan Port and Fujairah on the UAE east coast, with offices in Sharjah and Dubai. We supply fresh water from our own barge, arrange crew boats and act as ship agent for owners, operators and masters.</p>
            <p>We keep our list of services short on purpose, so we can do each one properly and answer quickly when a ship needs us.</p>
          </Reveal>
        </div>
      </section>

      <section className="split">
        <div className="split__img" style={{ '--img': `url(${photo(PHOTOS.tankerSunset, 1600)})` }} />
        <div className="split__text">
          <Reveal>
            <p className="tag">[ Mission ]</p>
            <h2>Fast, dependable support for every ship we serve.</h2>
            <p>Our aim is simple: when a vessel at Khorfakkan or Fujairah needs water, a crew transfer or an agent, it gets a quick answer and a job done properly.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ Why Sea Shark ]</p><h2>Why ships work with us.</h2></Reveal>
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
          <Reveal className="head"><p className="tag tag--dark">[ Our values ]</p><h2>How we work.</h2></Reveal>
          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal className="value" key={v.name} delay={i * 90}><h3>{v.name}</h3><p>{v.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

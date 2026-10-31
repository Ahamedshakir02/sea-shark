import { PHOTOS, VALUES, WHY, SAFETY, STATS, photo } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Contours from '../components/Contours.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import CountUp from '../components/CountUp.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function About() {
  return (
    <>
      <PageHead image={PHOTOS.ropeDeck} label="About us" title="young company. experienced hands."
        lead="A UAE marine services company built on local knowledge and our own vessel." crumbs={[{ label: 'About' }]} />

      <section className="section grid-bg">
        <div className="wrap split2 split2--text">
          <Head n="01" label="Our story" title="Built for ships calling on the east coast." />
          <Reveal className="prose" delay={100}>
            <p>Sea Shark Shipping Services LLC was founded in 2023 by people who have spent their careers around ships. Between them, our founders bring more than 20 years of combined marine experience.</p>
            <p>We work at Khorfakkan and Fujairah on the UAE east coast, with offices in Sharjah and Dubai. We supply fresh water from our own barge, act as ship agent, and arrange crew boats for owners, operators and masters.</p>
            <p>We keep our list of services short on purpose, so we can do each one properly and answer quickly when a ship needs us.</p>
          </Reveal>
        </div>
        <div className="wrap stats__in stats__in--flat">
          {STATS.map((s, i) => (
            <Reveal className="stat" key={s.label} delay={i * 80}><b><CountUp value={s.value} /></b><span>{s.label}</span></Reveal>
          ))}
        </div>
      </section>

      <section className="malik malik--flip">
        <Reveal className="malik__img"><img src={photo(PHOTOS.tankerSunset, 1400)} alt="" loading="lazy" /></Reveal>
        <div className="malik__panel malik__panel--blue">
          <Contours variant="a" />
          <Reveal className="malik__in">
            <p className="idx idx--light"><span>02</span>Mission</p>
            <h2>fast, dependable support for every ship we serve.</h2>
            <p>When a vessel at Khorfakkan or Fujairah needs water, an agent or a crew transfer, it should get a quick answer and a job done properly. That is the whole idea.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <Head n="03" label="Safety and quality" title="How we keep every job safe." note="Plain promises we work to every day." />
          <div className="why">
            {SAFETY.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 90}>
                <span className="why__icon"><ServiceIcon id={i === 3 ? 'doc' : i === 1 ? 'water' : i === 2 ? 'anchor' : 'shield'} /></span>
                <h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Head n="04" label="Why Sea Shark" title="Why ships work with us." />
          <div className="why">
            {WHY.map((w, i) => (
              <Reveal className="why__item why__item--line" key={w.title} delay={i * 90}>
                <span className="why__n">{`0${i + 1}`}</span><h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <Head n="05" label="Our values" title="What we stand by." />
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

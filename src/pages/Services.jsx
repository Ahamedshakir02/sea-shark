import { itemText } from '../components/Tbc.jsx'
import { Link } from 'react-router-dom'
import { MAIN_SERVICES as SERVICES, MINOR_SERVICES, PHOTOS, CLIENTS, STEPS, photo } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const img = (s, w) => (s === 'malik' ? malik : photo(s, w))

export default function Services() {
  return (
    <>
      <PageBanner variant="split"
        image={PHOTOS.tugWaves}
        tag="Services"
        title="Ship agency, marine survey and underwater services."
        lead="Three core services for vessels calling at Khorfakkan, coordinated by one team from appointment to sailing."
        crumbs={[{ label: 'Services' }]}>
        <ol className="hb__index">{SERVICES.map((s, i) => <li key={s.slug}><Link to={`/services/${s.slug}`}><span>0{i + 1}</span>{s.title}<ServiceIcon id="arrow" /></Link></li>)}</ol>
      </PageBanner>
      <section className="section">
        <div className="wrap rows">
          {SERVICES.map((s, i) => (
            <div className={`row${i % 2 ? ' row--flip' : ''}`} key={s.slug}>
              <Reveal className="row__img"><img src={img(s.row, 1200)} alt="" loading="lazy" decoding="async" /></Reveal>
              <Reveal className="row__text" delay={120}>
                <div className="card__icon"><ServiceIcon id={s.icon} /></div>
                <span className="tile__num">0{i + 1} · {s.kicker}</span>
                <h2>{s.title}</h2>
                <p>{s.intro}</p>
                <ul className="ticks">{s.includes.slice(0, 4).map((x) => <li key={itemText(x)}><ServiceIcon id="check" /><span>{itemText(x)}</span></li>)}</ul>
                <div className="feature__cta">
                  <Link className="pill pill--dark" to={`/services/${s.slug}`}>See details</Link>
                  <WaLink className="link" message={s.wa} number={s.number}>{s.cta} &rarr;</WaLink>
                </div>
              </Reveal>
            </div>
          ))}
          <p className="also">Also available: {MINOR_SERVICES.map((m, i) => <span key={m.slug}>{i ? ' and ' : ''}<Link to={`/services/${m.slug}`}>{m.title.toLowerCase()}</Link></span>)}, arranged with your port call.</p>
        </div>
      </section>
      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">Who we work with</p><h2>Built for the people behind every port call.</h2></Reveal>
          <div className="why">
            {CLIENTS.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 90}>
                <span className="steps__n">0{i + 1}</span><h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">How it works</p><h2>One process, whatever the job.</h2></Reveal>
          <ol className="steps">
            {STEPS.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 110}>
                <span className="steps__n">0{i + 1}</span><h3>{st.title}</h3><p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand image={PHOTOS.shipBlueSea} title="Not sure which service you need?" text="Tell us the vessel and the job, and our team will advise." />
    </>
  )
}

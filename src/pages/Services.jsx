import { Link } from 'react-router-dom'
import { SERVICES, PHOTOS, photo } from '../content.js'
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
      <PageBanner
        image={PHOTOS.tankerAerial}
        tag="[ Services ]"
        title="Everything a ship needs on the east coast."
        lead="Fresh water from our own barge, crew boats arranged as your agent, and full ship agency at Khorfakkan and Fujairah."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="section">
        <div className="wrap rows">
          {SERVICES.map((s, i) => (
            <div className={`row${i % 2 ? ' row--flip' : ''}`} key={s.slug}>
              <Reveal className="row__img"><img src={img(s.photo, 1200)} alt="" loading="lazy" /></Reveal>
              <Reveal className="row__text" delay={120}>
                <div className="card__icon"><ServiceIcon id={s.icon} /></div>
                <span className="tile__num">0{i + 1}</span>
                <h2>{s.title}</h2>
                <p>{s.intro}</p>
                <ul className="ticks">{s.includes.slice(0, 3).map((x) => <li key={x}><ServiceIcon id="check" />{x}</li>)}</ul>
                <div className="feature__cta">
                  <Link className="pill pill--dark" to={`/services/${s.slug}`}>See details</Link>
                  <WaLink className="link" message={s.wa}>{s.cta} &rarr;</WaLink>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}

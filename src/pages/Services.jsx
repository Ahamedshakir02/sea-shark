import Tbc, { itemText } from '../components/Tbc.jsx'
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
      <PageBanner variant="split"
        image={PHOTOS.bulkCarrierWake}
        tag="[ Services ]"
        title="Everything a ship needs on the east coast."
        lead="Fresh water from our own barge, crew boats arranged as your agent, and full ship agency at Khorfakkan and Fujairah."
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
                <ul className="ticks">{s.includes.slice(0, 4).map((x) => <li key={itemText(x)}><ServiceIcon id="check" /><span>{itemText(x)}{x.tbc && <> <Tbc /></>}</span></li>)}</ul>
                <div className="feature__cta">
                  <Link className="pill pill--dark" to={`/services/${s.slug}`}>See details</Link>
                  <WaLink className="link" message={s.wa}>{s.cta} &rarr;</WaLink>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <CtaBand image={PHOTOS.shipBlueSea} title="Not sure which service you need?" text="Tell us the ship and the job on WhatsApp, and we'll sort out the rest." />
    </>
  )
}

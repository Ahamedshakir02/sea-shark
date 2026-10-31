import { Link } from 'react-router-dom'
import { SERVICES, PHOTOS } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import { imgFor } from '../components/img.js'
import PageHead from '../components/PageHead.jsx'
import { Side } from '../components/Contours.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import WaLink from '../components/WaLink.jsx'
import Tbc from '../components/Tbc.jsx'
import CtaBand from '../components/CtaBand.jsx'

const OWN = [
  ['water', 'Fresh water', 'Our own barge, Malik', 'own'],
  ['agency', 'Ship agency', 'Our own team', 'own'],
  ['crew', 'Crew boats', 'Booked by us as your agent', 'arrange'],
]

export default function Services() {
  return (
    <>
      <PageHead image={PHOTOS.tankerAerial} label="Services" title="Everything a ship needs on the east coast."
        lead="Fresh water from our own barge, ship agency by our own team, and crew boats arranged for you at Khorfakkan and Fujairah."
        crumbs={[{ label: 'Services' }]} />

      <section className="section has-side">
        <Side side="right" />
        <div className="wrap rows">
          {SERVICES.map((s, i) => (
            <div className={`row${i % 2 ? ' row--flip' : ''}`} key={s.slug}>
              <Reveal className="row__img"><span className="bfill bfill--pale" /><div className={`pblob pblob--${["a","b","c"][i]}`}><img src={imgFor(s.photo, 1200)} alt="" loading="lazy" /></div>
                <span className="row__icon"><ServiceIcon id={s.icon} /></span></Reveal>
              <Reveal className="row__text" delay={120}>
                <p className="eyebrow"><i className="ring" />{s.kicker}</p>
                <h2>{s.title}</h2>
                <p>{s.intro}</p>
                <ul className="ticks">{s.includes.slice(0, 4).map((x) => <li key={x.title}><i className="ring" />{x.title}<Tbc on={x.tbc} /></li>)}</ul>
                <div className="hero__cta">
                  <Link className="btn btn--navy" to={`/services/${s.slug}`}>See details</Link>
                  <WaLink className="textlink" message={s.wa}>{s.cta} <ServiceIcon id="arrow" /></WaLink>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--mist has-side">
        <Side side="left" />
        <div className="wrap">
          <Head label="Straight answer" title="What we own and what we arrange."
            note="We'd rather tell you up front than have you find out on the day." />
          <div className="own">
            {OWN.map(([ic, t, x, k], i) => (
              <Reveal className={`own__row own__row--${k}`} key={t} delay={i * 90}>
                <span className="iblob"><ServiceIcon id={ic} /></span>
                <h3>{t}</h3><p>{x}</p><span className="own__tag">{k === 'own' ? 'Ours' : 'Arranged'}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

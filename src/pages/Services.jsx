import { Link } from 'react-router-dom'
import { SERVICES, PHOTOS } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import { SCENES } from '../components/Iso.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import WaLink from '../components/WaLink.jsx'
import Tbc from '../components/Tbc.jsx'
import CtaBand from '../components/CtaBand.jsx'

const OWN = [
  ['Fresh water', 'Our own barge, Malik', 'own'],
  ['Ship agency', 'Our own team', 'own'],
  ['Crew boats', 'Booked by us as your agent', 'arrange'],
]

export default function Services() {
  return (
    <>
      <PageHead image={PHOTOS.tankerAerial} label="Services" title="everything a ship needs on the east coast."
        lead="Fresh water from our own barge, ship agency by our own team, and crew boats arranged for you at Khorfakkan and Fujairah."
        crumbs={[{ label: 'Services' }]} />

      <section className="section">
        <div className="wrap rows">
          {SERVICES.map((s, i) => {
            const Art = SCENES[s.scene]
            return (
              <div className={`row${i % 2 ? ' row--flip' : ''}`} key={s.slug}>
                <Reveal className="row__art"><Art /></Reveal>
                <Reveal className="row__text" delay={120}>
                  <p className="idx"><span>{`0${i + 1}`}</span>{s.kicker}</p>
                  <h2>{s.title}</h2>
                  <p>{s.intro}</p>
                  <ul className="ticks">{s.includes.slice(0, 4).map((x) => <li key={x.title}><ServiceIcon id="check" />{x.title}<Tbc on={x.tbc} /></li>)}</ul>
                  <div className="hero__cta">
                    <Link className="btn btn--indigo" to={`/services/${s.slug}`}>See details</Link>
                    <WaLink className="textlink" message={s.wa}>{s.cta} <ServiceIcon id="arrow" /></WaLink>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <Head n="04" label="Straight answer" title="What we own and what we arrange."
            note="We'd rather tell you up front than have you find out on the day." />
          <div className="own">
            {OWN.map(([t, x, k], i) => (
              <Reveal className={`own__row own__row--${k}`} key={t} delay={i * 90}>
                <h3>{t}</h3><p>{x}</p><span>{k === 'own' ? 'Ours' : 'Arranged'}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

import { Link } from 'react-router-dom'
import { MAIN_SERVICES, MINOR_SERVICES, PHOTOS, CLIENTS, STEPS, photo } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Head, Timeline, Ticks } from '../components/Blocks.jsx'
import malik from '../assets/boat-malik.jpg'

const img = (s, w) => (s === 'malik' ? malik : photo(s, w))
const all = [...MAIN_SERVICES, ...MINOR_SERVICES]
const CLIENT_ICONS = ['ship', 'compass', 'anchor', 'doc']

export default function Services() {
  return (
    <>
      <PageHead variant="split" image={PHOTOS.tugWaves} eyebrow="Services"
        title="Agency, Survey and Diving Under One Roof."
        lead="Three core services for vessels calling at Khorfakkan, supported by fresh water supply and crew boats, all coordinated by one team."
        crumbs={[{ label: 'Services' }]}>
        <div className="index">
          {all.map((s, i) => (
            <Link key={s.slug} to={`/services/${s.slug}`}><small>0{i + 1}</small>{s.title}<em>{s.minor ? 'Support' : 'Core'}</em><ServiceIcon id="arrow" /></Link>
          ))}
        </div>
      </PageHead>

      <section className="sec">
        <div className="wrap">
          <Head eyebrow="Core services" title="What We Do for Vessels in Port." />
          <div className="rows">
            {MAIN_SERVICES.map((s, i) => (
              <div className={`row${i % 2 ? ' row--flip' : ''}`} key={s.slug}>
                <Reveal className="row__img"><img src={img(s.row, 1200)} alt="" loading="lazy" decoding="async" /><span className="row__num">0{i + 1} · {s.kicker}</span></Reveal>
                <Reveal className="row__text" delay={120}>
                  <span className="card__icon"><ServiceIcon id={s.icon} /></span>
                  <h2>{s.title}</h2>
                  <p>{s.intro}</p>
                  <Ticks items={(s.groups ? s.groups.map((g) => g.title) : s.includes.slice(0, 4).map((x) => x.title))} />
                  <div className="row__cta">
                    <Link className="btn btn--navy" to={`/services/${s.slug}`}>See Details</Link>
                    <WaLink className="arrow" message={s.wa} number={s.number}>{s.cta} <ServiceIcon id="arrow" /></WaLink>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <Head split eyebrow="Marine support" title="Water and Boats, When the Call Needs Them."
            lead="Available on their own, or arranged together with your port call." />
          <div className="support">
            {MINOR_SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link className="support__card" to={`/services/${s.slug}`}>
                  <div className="support__img"><img src={img(s.photo, 700)} alt="" loading="lazy" decoding="async" /></div>
                  <div className="support__body">
                    <h3>{s.title}</h3><p>{s.short}</p>
                    <span className="arrow">Learn More <ServiceIcon id="arrow" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head eyebrow="Who we work with" title="Built for the People Behind Every Port Call." />
          <div className="cards">
            {CLIENTS.map((w, i) => (
              <Reveal className="card" key={w.title} delay={i * 80}>
                <span className="card__icon"><ServiceIcon id={CLIENT_ICONS[i]} /></span><h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--navy on-dark">
        <div className="wrap">
          <Head split eyebrow="How it works" title="One Process, Whatever the Job."
            lead="Whether it is a full port call, a survey or a dive, it starts with one message to our desk." />
          <Timeline steps={STEPS} />
        </div>
      </section>
      <CtaBand image={PHOTOS.shipBlueSea} title="Not Sure Which Service You Need?" text="Tell us the vessel and the job, and our desk will advise." />
    </>
  )
}

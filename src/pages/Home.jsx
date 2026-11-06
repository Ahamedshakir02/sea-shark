import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MAIN_SERVICES, MINOR_SERVICES, STATS, PHOTOS, WHY, FAQ, CLIENTS, photo, AGENT_PHONE_DISPLAY, AGENT_PHONE_LINK, AGENT_WHATSAPP, EMAIL, HOURS_ROWS } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const agency = MAIN_SERVICES.find((s) => s.slug === 'ship-agency')
const GROUP_ICONS = ['port', 'people', 'doc', 'gear']
const imgOf = (s, w) => (s === 'malik' ? malik : photo(s, w))

// Core services explorer: pick a service on the left, see its scope on the right.
function ServiceExplorer() {
  const [active, setActive] = useState(0)
  const s = MAIN_SERVICES[active]
  const items = s.groups ? s.groups.flatMap((g) => g.items).slice(0, 8) : s.includes
  return (
    <div className="explorer">
      <div className="explorer__tabs" role="tablist" aria-label="Core services">
        {MAIN_SERVICES.map((x, i) => (
          <button key={x.slug} role="tab" id={`tab-${x.slug}`} aria-selected={i === active} aria-controls="explorer-panel"
            className={`explorer__tab${i === active ? ' is-active' : ''}`} onClick={() => setActive(i)}>
            <span className="explorer__icon"><ServiceIcon id={x.icon} /></span>
            <span className="explorer__label"><small>0{i + 1}</small>{x.title}</span>
            <ServiceIcon id="arrow" />
          </button>
        ))}
        <div className="explorer__more">
          <p>Supporting services</p>
          {MINOR_SERVICES.map((m) => <Link key={m.slug} to={`/services/${m.slug}`}><ServiceIcon id={m.icon} />{m.title}</Link>)}
        </div>
      </div>
      <div className="explorer__panel" id="explorer-panel" role="tabpanel" aria-labelledby={`tab-${s.slug}`} key={s.slug}>
        <div className="explorer__img"><img src={imgOf(s.tile, 1200)} alt="" decoding="async" /><span>{s.kicker}</span></div>
        <div className="explorer__body">
          <h3>{s.title}</h3>
          <p>{s.intro}</p>
          <ul className="explorer__list">{items.map((x) => <li key={x.title}><ServiceIcon id="check" />{x.title}</li>)}</ul>
          <div className="explorer__cta">
            <Link className="pill pill--dark" to={`/services/${s.slug}`}>Explore {s.title.toLowerCase()}</Link>
            <WaLink className="link" message={s.wa} number={s.number}>{s.cta} &rarr;</WaLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero hero--split" style={{ '--img': `url(${photo(PHOTOS.portAerial, 2200)})` }}>
        <div className="hero__shade" />
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="tag hero__a">Ship agency · Khorfakkan Port, UAE</p>
            <h1 className="hero__a" style={{ '--d': '120ms' }}>Your agent at Khorfakkan. <em>Every call, handled.</em></h1>
            <p className="hero__lead hero__a" style={{ '--d': '260ms' }}>
              Port agency, marine survey and underwater services for owners, operators and charterers. One team, from the first ETA notice to the sailing report.
            </p>
            <div className="hero__cta hero__a" style={{ '--d': '400ms' }}>
              <WaLink className="pill pill--light" message={agency.wa} number={AGENT_WHATSAPP}>Appoint us as agent</WaLink>
              <a className="pill pill--ghost" href="#services">Explore services</a>
            </div>
          </div>
          <aside className="desk hero__a" style={{ '--d': '520ms' }} aria-label="Agency desk">
            <p className="desk__eyebrow"><span className="desk__dot" />Agency desk · Khorfakkan</p>
            <h2 className="desk__title">Vessel calling soon?</h2>
            <p className="desk__text">Send these details and our desk confirms the call plan with you.</p>
            <ol className="desk__list">{agency.send.map((x) => <li key={x}>{x}</li>)}</ol>
            <WaLink className="pill pill--wa desk__btn" message={agency.wa} number={AGENT_WHATSAPP}><span className="wa-ic"><WhatsAppIcon /></span>Send on WhatsApp</WaLink>
            <div className="desk__rows">
              <a href={AGENT_PHONE_LINK}><ServiceIcon id="phone" />{AGENT_PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`}><ServiceIcon id="mail" />{EMAIL}</a>
              <span><ServiceIcon id="clock" />{HOURS_ROWS.map(([d, t]) => `${d} ${t.toLowerCase()}`).join(' · ')}</span>
            </div>
          </aside>
        </div>
        <div className="hero__facts">
          <div className="wrap hero__facts-in">
            {STATS.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">Core services</p><h2>Three services, one team in port.</h2></div>
            <p className="head__note">Book each service on its own, or let us coordinate all of them for the same port call.</p>
          </Reveal>
          <Reveal><ServiceExplorer /></Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">Ship agency scope</p><h2>Everything your vessel needs in port.</h2></div>
            <Link className="more" to="/services/ship-agency">Full agency scope <ServiceIcon id="arrow" /></Link>
          </Reveal>
          <div className="scope">
            {agency.groups.map((g, i) => (
              <Reveal className="scope__card" key={g.title} delay={i * 80}>
                <div className="scope__head">
                  <span className="scope__icon"><ServiceIcon id={GROUP_ICONS[i]} /></span>
                  <h3>{g.title}</h3>
                  <span className="scope__count">{g.items.length} services</span>
                </div>
                <ul>{g.items.map((x) => <li key={x.title}><strong>{x.title}</strong><span>{x.text}</span></li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">How a port call works</p><h2>Four stages. No surprises.</h2></div>
            <p className="head__note">One point of contact all the way, with updates at each stage.</p>
          </Reveal>
          <ol className="stepper" style={{ '--n': agency.process.length }}>
            {agency.process.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 100}>
                <span className="stepper__node">{i + 1}</span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="statement">
        <div className="wrap statement__in">
          <Reveal as="p" className="statement__big">
            A ship in port has one question: <span>who is looking after us here?</span> At Khorfakkan, that is our job.
          </Reveal>
          <Reveal className="statement__side" delay={120}>
            <p>We act for the vessel and her owners while she is in port: we prepare the call, coordinate every party involved and report back at each stage.</p>
            <Link className="more" to="/about">About Sea Shark <ServiceIcon id="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap duo">
          <div>
            <Reveal className="head"><p className="tag tag--dark">Who we act for</p><h2>On behalf of every party.</h2></Reveal>
            <ul className="who">
              {CLIENTS.map((w, i) => (
                <Reveal as="li" key={w.title} delay={i * 70}><h3>{w.title}</h3><p>{w.text}</p></Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal className="head"><p className="tag tag--dark">Why Sea Shark</p><h2>A dependable partner.</h2></Reveal>
            <ul className="who">
              {WHY.map((w, i) => (
                <Reveal as="li" key={w.title} delay={i * 70}><h3>{w.title}</h3><p>{w.text}</p></Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">Marine support</p><h2>Supporting services.</h2></div>
            <p className="head__note">Available on their own, or arranged together with your port call.</p>
          </Reveal>
          <div className="support">
            {MINOR_SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link className="support__card" to={`/services/${s.slug}`}>
                  <div className="support__img"><img src={imgOf(s.photo, 900)} alt="" loading="lazy" decoding="async" /></div>
                  <div className="support__body">
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="more">Learn more <ServiceIcon id="arrow" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap faqs">
          <Reveal>
            <p className="tag tag--dark">Questions</p>
            <h2>Before you appoint us.</h2>
            <p className="faqs__note">Can't find your answer? Our agency desk replies on WhatsApp and phone.</p>
            <Link className="more" to="/ports-and-faq">All questions <ServiceIcon id="arrow" /></Link>
          </Reveal>
          <div className="acc">
            {FAQ.slice(0, 6).map((f, i) => (
              <details key={f.q} className="acc__item" open={i === 0}>
                <summary>{f.q}<span aria-hidden="true" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand variant="plain" title="Vessel calling at Khorfakkan?" text="Send the vessel name, ETA and what the call involves, and our agency desk will confirm."
        message={agency.wa} number={AGENT_WHATSAPP} phone={AGENT_PHONE_DISPLAY} phoneLink={AGENT_PHONE_LINK} />
    </>
  )
}

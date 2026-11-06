import { Link } from 'react-router-dom'
import { SERVICES, STATS, PLACES, PHOTOS, WHY, FAQ, CLIENTS, photo, AGENT_PHONE_DISPLAY, AGENT_PHONE_LINK, AGENT_WHATSAPP, EMAIL, HOURS_ROWS } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const img = (s, w) => (s === 'malik' ? malik : photo(s, w))
const agency = SERVICES.find((s) => s.slug === 'ship-agency')
const marine = SERVICES.filter((s) => s.slug !== 'ship-agency')

export default function Home() {
  return (
    <>
      <section className="hero" style={{ '--img': `url(${photo(PHOTOS.portAerial, 2200)})` }}>
        <div className="hero__shade" />
        <div className="wrap hero__in">
          <p className="tag hero__a">Ship agency · Khorfakkan Port, UAE</p>
          <h1 className="hero__a" style={{ '--d': '120ms' }}>Your ship agent at Khorfakkan, from ETA to sailing.</h1>
          <p className="hero__lead hero__a" style={{ '--d': '260ms' }}>
            Sea Shark Shipping Services represents owners, operators and charterers calling at Khorfakkan: port call coordination, clearance, husbandry and crew support, handled by one local team.
          </p>
          <div className="hero__cta hero__a" style={{ '--d': '400ms' }}>
            <WaLink className="pill pill--light" message={agency.wa} number={AGENT_WHATSAPP}>Appoint us as agent</WaLink>
            <a className="pill pill--ghost" href={AGENT_PHONE_LINK}>Agency desk {AGENT_PHONE_DISPLAY}</a>
          </div>
        </div>
        <div className="hero__facts">
          <div className="wrap hero__facts-in">
            {STATS.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">Ship agency services</p><h2>Everything your vessel needs in port, coordinated by one agent.</h2></div>
            <Link className="more" to="/services/ship-agency">Ship agency in detail <ServiceIcon id="arrow" /></Link>
          </Reveal>
          <div className="groups">
            {agency.groups.map((g, i) => (
              <Reveal className="group" key={g.title} delay={i * 100}>
                <span className="group__n">0{i + 1}</span>
                <h3>{g.title}</h3>
                <ul>{g.items.map((x) => <li key={x.title}><strong>{x.title}</strong><span>{x.text}</span></li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">How we handle a port call</p><h2>A clear process, every call.</h2></div>
            <p className="head__note">You deal with one agency team, and you always know where your vessel stands.</p>
          </Reveal>
          <ol className="steps steps--flow" style={{ '--n': agency.process.length }}>
            {agency.process.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 100}>
                <span className="steps__n">0{i + 1}</span><h3>{st.title}</h3><p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">Who we act for</p><h2>Agency for every party behind the call.</h2></Reveal>
          <div className="why">
            {CLIENTS.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 80}><span className="steps__n">0{i + 1}</span><h3>{w.title}</h3><p>{w.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">Marine support</p><h2>Supporting services at Khorfakkan.</h2></div>
            <p className="head__note">Available on their own, or arranged together with your port call.</p>
          </Reveal>
          <div className="support">
            {marine.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link className="support__card" to={`/services/${s.slug}`}>
                  <div className="support__img"><img src={img(s.photo, 900)} alt="" loading="lazy" decoding="async" /></div>
                  <div className="support__body">
                    <span className="support__kicker">{s.kicker.replace('Marine support · ', '')}</span>
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
        <div className="wrap why-faq">
          <div>
            <Reveal className="head"><p className="tag tag--dark">Why Sea Shark</p><h2>A dependable local agent.</h2></Reveal>
            <div className="why why--two">
              {WHY.map((w, i) => (
                <Reveal className="why__item" key={w.title} delay={i * 80}><span className="steps__n">0{i + 1}</span><h3>{w.title}</h3><p>{w.text}</p></Reveal>
              ))}
            </div>
          </div>
          <Reveal className="faq-peek">
            <p className="tag tag--dark">Common questions</p>
            {FAQ.slice(0, 3).map((f) => <div className="faq-peek__item" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}
            <Link className="more" to="/ports-and-faq">All questions <ServiceIcon id="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap office">
          <Reveal>
            <p className="tag">Contact the agency desk</p>
            <h2>Khorfakkan Port, UAE.</h2>
            <p className="office__lead">Port operations at Khorfakkan, with offices in Sharjah and Dubai.</p>
          </Reveal>
          <Reveal className="office__grid" delay={100}>
            <div><span>Ship agency</span><a href={AGENT_PHONE_LINK}>{AGENT_PHONE_DISPLAY}</a></div>
            <div><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            {HOURS_ROWS.map(([d, t]) => <div key={d}><span>{d === 'Office' ? 'Office hours' : d}</span><p>{t}</p></div>)}
            {PLACES.filter((p) => p.type === 'Office').map((p) => <div key={p.name}><span>Office</span><p>{p.name}</p></div>)}
          </Reveal>
        </div>
      </section>

      <CtaBand variant="plain" title="Vessel calling at Khorfakkan?" text="Send the vessel name, ETA and what the call involves, and our agency desk will confirm."
        message={agency.wa} number={AGENT_WHATSAPP} phone={AGENT_PHONE_DISPLAY} phoneLink={AGENT_PHONE_LINK} />
    </>
  )
}

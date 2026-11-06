import { Link } from 'react-router-dom'
import { MAIN_SERVICES, MINOR_SERVICES, STATS, PLACES, PHOTOS, WHY, FAQ, CLIENTS, photo, AGENT_PHONE_DISPLAY, AGENT_PHONE_LINK, AGENT_WHATSAPP, EMAIL, HOURS_ROWS } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const agency = MAIN_SERVICES.find((s) => s.slug === 'ship-agency')

export default function Home() {
  return (
    <>
      <section className="hero" style={{ '--img': `url(${photo(PHOTOS.portAerial, 2200)})` }}>
        <div className="hero__shade" />
        <div className="wrap hero__in">
          <p className="tag hero__a">Sea Shark Shipping Services LLC · Khorfakkan, UAE</p>
          <h1 className="hero__a" style={{ '--d': '120ms' }}>Ship agency and marine services at <em>Khorfakkan.</em></h1>
          <p className="hero__lead hero__a" style={{ '--d': '260ms' }}>
            Port agency, marine survey and underwater services for owners, operators and charterers calling at Khorfakkan. One team, from the first ETA notice to the sailing report.
          </p>
          <div className="hero__cta hero__a" style={{ '--d': '400ms' }}>
            <WaLink className="pill pill--light" message={agency.wa} number={AGENT_WHATSAPP}>Appoint us as agent</WaLink>
            <Link className="pill pill--ghost" to="/services">Our services</Link>
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
            <div><p className="tag tag--dark">Core services</p><h2>Three services. <em>One standard.</em></h2></div>
            <p className="head__note">Each service can be booked on its own, or coordinated together for the same port call.</p>
          </Reveal>
          <div className="pillars">
            {MAIN_SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 110}>
                <Link className="pillar" to={`/services/${s.slug}`}>
                  <img src={photo(s.tile, 900)} alt="" loading="lazy" decoding="async" />
                  <div className="pillar__body">
                    <span className="pillar__n">0{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <ul>{(s.groups ? s.groups.map((g) => g.title) : s.includes.slice(0, 3).map((x) => x.title)).map((t) => <li key={t}>{t}</li>)}</ul>
                    <span className="pillar__go">Explore {s.title.toLowerCase()} <ServiceIcon id="arrow" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="wrap statement__in">
          <Reveal as="p" className="statement__big">
            A ship in port has one question: <span>who is looking after us here?</span> At Khorfakkan, that is our job.
          </Reveal>
          <Reveal className="statement__side" delay={120}>
            <p>We act for the vessel and her owners while she is in port: we prepare the call, coordinate every party involved and report back at each stage, to the standard owners and operators expect from their agent anywhere in the world.</p>
            <Link className="more more--light" to="/about">About Sea Shark <ServiceIcon id="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">Ship agency in full</p><h2>Everything your vessel needs in port, coordinated by one agent.</h2></div>
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
            <div><p className="tag tag--dark">How we handle a port call</p><h2>A clear process, <em>every call.</em></h2></div>
            <p className="head__note">You deal with one team, and you always know where your vessel stands.</p>
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
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">Marine support</p><h2>Supporting services at Khorfakkan.</h2></div>
            <p className="head__note">Available on their own, or arranged together with your port call.</p>
          </Reveal>
          <div className="support">
            {MINOR_SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link className="support__card" to={`/services/${s.slug}`}>
                  <div className="support__img"><img src={s.photo === 'malik' ? malik : photo(s.photo, 900)} alt="" loading="lazy" decoding="async" /></div>
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

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">Who we act for</p><h2>Trusted with the vessel, on behalf of every party.</h2></Reveal>
          <div className="why">
            {CLIENTS.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 80}><span className="steps__n">0{i + 1}</span><h3>{w.title}</h3><p>{w.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap why-faq">
          <div>
            <Reveal className="head"><p className="tag tag--dark">Why Sea Shark</p><h2>A dependable partner <em>in port.</em></h2></Reveal>
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
            <p className="tag">Contact our operations desk</p>
            <h2>Khorfakkan Port, UAE.</h2>
            <p className="office__lead">Port operations at Khorfakkan, with offices in Sharjah and Dubai.</p>
          </Reveal>
          <Reveal className="office__grid" delay={100}>
            <div><span>Agency desk</span><a href={AGENT_PHONE_LINK}>{AGENT_PHONE_DISPLAY}</a></div>
            <div><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            {HOURS_ROWS.map(([d, t]) => <div key={d}><span>{d === 'Office' ? 'Office hours' : d}</span><p>{t}</p></div>)}
            {PLACES.filter((p) => p.type === 'Office').map((p) => <div key={p.name}><span>Office</span><p>{p.name}</p></div>)}
          </Reveal>
        </div>
      </section>

      <CtaBand variant="plain" title="Vessel calling at Khorfakkan?" text="Send the vessel name, ETA and what the call involves, and our team will confirm."
        message={agency.wa} number={AGENT_WHATSAPP} phone={AGENT_PHONE_DISPLAY} phoneLink={AGENT_PHONE_LINK} />
    </>
  )
}

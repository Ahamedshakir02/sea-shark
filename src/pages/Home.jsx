import { Link } from 'react-router-dom'
import { MAIN_SERVICES, MINOR_SERVICES, STATS, PHOTOS, WHY, FAQ, CLIENTS, PORTS, photo, AGENT_PHONE_DISPLAY, AGENT_PHONE_LINK, AGENT_WHATSAPP, EMAIL, HOURS_ROWS } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Head, Timeline, Faq, HoursLine, sentences } from '../components/Blocks.jsx'
import malik from '../assets/boat-malik.jpg'

const agency = MAIN_SERVICES.find((s) => s.slug === 'ship-agency')
const port = PORTS[0]
const GROUP_ICONS = ['port', 'people', 'doc', 'gear']
const CLIENT_ICONS = ['ship', 'compass', 'anchor', 'doc']
const imgOf = (s, w) => (s === 'malik' ? malik : photo(s, w))
const agencyCount = agency.groups.reduce((n, g) => n + g.items.length, 0)

export default function Home() {
  return (
    <>
      <section className="hero on-dark" style={{ '--img': `url(${photo(PHOTOS.portAerial, 2200)})` }}>
        <div className="wrap hero__in">
          <div className="hero__copy">
            <p className="eyebrow hero__a">Ship agency · Khorfakkan Port, UAE</p>
            <h1 className="hero__a" style={{ '--d': '120ms' }}>Your Agent at Khorfakkan. <span className="accent">Every Port Call, Handled End to End.</span></h1>
            <p className="lead hero__a" style={{ '--d': '260ms' }}>
              Port agency, marine survey and underwater services for owners, operators and charterers. One team looks after your vessel from the first ETA notice to the sailing report.
            </p>
            <div className="btns hero__a" style={{ '--d': '380ms' }}>
              <WaLink className="btn btn--amber" message={agency.wa} number={AGENT_WHATSAPP}><WhatsAppIcon />Appoint Us as Agent</WaLink>
              <a className="btn btn--ghost" href="#services">Explore Our Services</a>
            </div>
          </div>
        </div>
        <div className="portbar hero__a" style={{ '--d': '520ms' }}>
          <dl className="wrap portbar__in">
            <div><dt>Port</dt><dd>{port.name}, Gulf of Oman</dd></div>
            <div><dt>Position</dt><dd>{port.coords}</dd></div>
            <div><dt>Core services</dt><dd>Agency · Survey · Diving</dd></div>
            <div><dt>Agency desk</dt><dd><a href={AGENT_PHONE_LINK}>{AGENT_PHONE_DISPLAY}</a></dd></div>
          </dl>
        </div>
      </section>

      <section className="sec">
        <div className="wrap intro">
          <Reveal>
            <p className="eyebrow">Sea Shark Shipping Services</p>
            <p className="intro__big">We act for the vessel and her owners while she is in port. <span>We prepare the call, coordinate every party involved and report back at each stage, so the ship turns around without avoidable delay.</span></p>
          </Reveal>
          <Reveal className="figures" delay={120}>
            {STATS.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
          </Reveal>
        </div>
      </section>

      <section className="sec sec--mist" id="services">
        <div className="wrap">
          <Head split eyebrow="Core services" title="Agency, Survey and Diving. One Team in Port."
            lead="Book each service on its own, or let us coordinate all three for the same port call." />
          <div className="core">
            {MAIN_SERVICES.map((s, i) => (
              <Reveal as={Link} key={s.slug} delay={i * 100} className="core__card" to={`/services/${s.slug}`}>
                <img src={imgOf(i === 0 ? s.banner : s.tile, i === 0 ? 1400 : 1000)} alt="" loading="lazy" decoding="async" />
                <div className="core__top"><span className="core__num">0{i + 1}</span><span className="core__tag">{i === 0 ? 'Our core service' : 'Core service'}</span></div>
                <div className="core__body">
                  <span className="core__icon"><ServiceIcon id={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  {i === 0 && <ul className="core__list">{agency.groups.map((g) => <li key={g.title}><ServiceIcon id="check" />{g.title}</li>)}</ul>}
                  <span className="arrow">Explore {s.title} <ServiceIcon id="arrow" /></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--navy on-dark">
        <div className="wrap scope">
          <Reveal className="scope__side">
            <p className="eyebrow">Ship agency scope</p>
            <h2>One Desk for Everything Your Vessel Needs in Port.</h2>
            <p className="lead">From <span className="nw">pre-arrival</span> planning to the final account, our agency desk handles the call so you deal with one contact, not ten.</p>
            <div className="scope__count">
              <div><strong>{agency.groups.length}</strong><span>areas of work</span></div>
              <div><strong>{agencyCount}</strong><span>agency services</span></div>
            </div>
            <Link className="btn btn--amber" to="/services/ship-agency">See the Full Agency Scope</Link>
          </Reveal>
          <div className="scope__groups">
            {agency.groups.map((g, i) => (
              <Reveal className="group group--compact" key={g.title} delay={i * 80}>
                <div className="group__head">
                  <span className="group__icon"><ServiceIcon id={GROUP_ICONS[i]} /></span>
                  <h3>{g.title}</h3>
                  <small>{g.items.length} services</small>
                </div>
                <ul>{g.items.map((x) => <li key={x.title}><ServiceIcon id="check" /><strong>{x.title}</strong></li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head split eyebrow="How a port call works" title="Four Stages. One Point of Contact."
            lead="You hear from us at every stage, from the appointment to the moment the ship sails." />
          <Timeline steps={agency.process} ends={['ETA notice', 'Sailing report']} />
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <Reveal className="appoint">
            <div className="appoint__img" style={{ '--img': `url(${photo(PHOTOS.terminalDusk, 1400)})` }}>
              <p className="appoint__quote"><span className="sent">A ship in port has one question: <span className="accent">who is looking after us here?</span></span> <span className="sent">At Khorfakkan, that is our job.</span></p>
            </div>
            <div className="appoint__body">
              <p className="eyebrow">Appoint us</p>
              <h2>{sentences('Vessel Calling Soon? Start With One Message.')}</h2>
              <p>Send these details to our agency desk and we confirm the call plan with you.</p>
              <ol className="checklist">{agency.send.map((x) => <li key={x}>{x}</li>)}</ol>
              <WaLink className="btn btn--wa btn--block" message={agency.wa} number={AGENT_WHATSAPP}><WhatsAppIcon />Send on WhatsApp</WaLink>
              <div className="contact-rows">
                <a href={AGENT_PHONE_LINK}><ServiceIcon id="phone" />{AGENT_PHONE_DISPLAY}</a>
                <a href={`mailto:${EMAIL}`}><ServiceIcon id="mail" />{EMAIL}</a>
                <span><ServiceIcon id="clock" /><span><HoursLine /></span></span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head eyebrow="Who we act for" title="Acting for Every Party in the Call." />
          <div className="cards">
            {CLIENTS.map((w, i) => (
              <Reveal className="card" key={w.title} delay={i * 80}>
                <span className="card__icon"><ServiceIcon id={CLIENT_ICONS[i]} /></span>
                <h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="why-title"><p className="eyebrow">Why Sea Shark</p></Reveal>
          <Reveal className="why">
            {WHY.map((w, i) => (
              <div key={w.title}><strong>0{i + 1}</strong><h3>{w.title}</h3><p>{w.text}</p></div>
            ))}
          </Reveal>
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
                  <div className="support__img"><img src={imgOf(s.photo, 700)} alt="" loading="lazy" decoding="async" /></div>
                  <div className="support__body">
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="arrow">Learn More <ServiceIcon id="arrow" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="support-note">Fresh water comes from Malik, our own barge. <Link to="/our-barge">Meet Malik</Link></p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap faqs">
          <Reveal className="faqs__side">
            <p className="eyebrow">Questions</p>
            <h2>Before You Appoint Us.</h2>
            <p className="lead">Short answers to what owners and operators ask first.</p>
            <Link className="arrow" to="/ports-and-faq">All Questions <ServiceIcon id="arrow" /></Link>
            <div className="desk">
              <h4>Can't find your answer?</h4>
              <p>Our agency desk replies on WhatsApp and phone.</p>
              <WaLink className="btn btn--navy btn--block" message="Hello Sea Shark, I have a question: ..." number={AGENT_WHATSAPP}>Ask Our Desk</WaLink>
              <dl>{HOURS_ROWS.map(([d, t]) => <div key={d}><dt>{d}</dt><dd>{t}</dd></div>)}</dl>
            </div>
          </Reveal>
          <Reveal delay={100}><Faq items={FAQ.slice(0, 6)} /></Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

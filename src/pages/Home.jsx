import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_LINK, SERVICES, STATS, STEPS, WHY, PORTS, FAQ, PHOTOS, photo } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import { PortScene } from '../components/Iso.jsx'
import Contours from '../components/Contours.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import CountUp from '../components/CountUp.jsx'
import WaLink from '../components/WaLink.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Faq from '../components/Faq.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const LINES = ['keep your', 'ship moving.']

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__panel">
          <Contours variant="a" />
          <div className="hero__in">
            <p className="idx idx--light rise"><span>&#8212;</span>Khorfakkan · Fujairah · UAE</p>
            <h1 className="lines" aria-label="Keep your ship moving.">
              {LINES.map((l, i) => <span key={l} aria-hidden="true"><span style={{ '--d': `${150 + i * 140}ms` }}>{l}</span></span>)}
            </h1>
            <p className="hero__lead rise" style={{ '--d': '520ms' }}>
              Fresh water from our own barge, crew boats arranged for you, and ship agency on the UAE east coast. One team, one WhatsApp chat.
            </p>
            <div className="hero__cta rise" style={{ '--d': '660ms' }}>
              <WaLink className="btn btn--blue" message="Hello Sea Shark, I need help with a vessel. Vessel: ... Port: ..."><WhatsAppIcon />Chat on WhatsApp</WaLink>
              <a className="btn btn--line-light" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
            </div>
            <p className="coords">25.35° N · 56.36° E</p>
          </div>
        </div>
        <div className="hero__side">
          <img className="hero__img" src={photo(PHOTOS.tankerSunset, 1600)} alt="" />
          <div className="ask rise" style={{ '--d': '800ms' }}>
            <p className="ask__q">What does your ship need today?</p>
            {SERVICES.map((s) => (
              <WaLink key={s.slug} className="ask__opt" message={s.wa}>
                <ServiceIcon id={s.icon} /><span>{s.title}</span><ServiceIcon id="arrow" />
              </WaLink>
            ))}
            <p className="ask__note">Opens WhatsApp with a ready message.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats__in">
          {STATS.map((s, i) => (
            <Reveal className="stat" key={s.label} delay={i * 80}>
              <b><CountUp value={s.value} /></b><span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section grid-bg">
        <div className="wrap intro">
          <div>
            <Head n="01" label="Who we are" title="A small marine team that answers fast." />
            <Reveal className="prose" delay={100}>
              <p>Sea Shark Shipping Services was set up in 2023 by people who have worked around ships for years. We own one vessel, the fresh water barge Malik, and we act as agent for everything else a ship needs at Khorfakkan and Fujairah.</p>
              <p>We keep the list short on purpose, so every job gets done properly.</p>
              <Link className="textlink" to="/about">More about us <ServiceIcon id="arrow" /></Link>
            </Reveal>
          </div>
          <Reveal className="intro__art" delay={160}><PortScene /></Reveal>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <Head n="02" label="What we do" title="Three services, one team.">
            <Link className="textlink" to="/services">All services <ServiceIcon id="arrow" /></Link>
          </Head>
          <div className="scards">
            {SERVICES.map((s, i) => <Reveal key={s.slug} delay={i * 110}><ServiceCard s={s} n={`0${i + 1}`} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="malik">
        <Reveal className="malik__img"><img src={malik} alt="Malik, our fresh water barge, in port" loading="lazy" /></Reveal>
        <div className="malik__panel">
          <Contours variant="b" />
          <Reveal className="malik__in">
            <p className="idx idx--light"><span>03</span>Our barge</p>
            <h2>meet malik.</h2>
            <p>Malik is the fresh water barge we own and run. It takes drinking water out to ships at Khorfakkan and Fujairah. Because the barge is ours, we control the schedule, the upkeep and the standard of every delivery.</p>
            <div className="hero__cta">
              <Link className="btn btn--white" to="/our-barge">About the barge</Link>
              <WaLink className="btn btn--line-light" message={SERVICES[0].wa}>Order water</WaLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section grid-bg">
        <div className="wrap">
          <Head n="04" label="How it works" title="From message to job done." />
          <ol className="route">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 120}>
                <span className="route__dot">{`0${i + 1}`}</span>
                <h3>{s.title}</h3><p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <Head n="05" label="Why Sea Shark" title="Why ships work with us." />
          <div className="why">
            {WHY.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 90}>
                <span className="why__n">{`0${i + 1}`}</span><h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Head n="06" label="Where we work" title="Two ports on the east coast.">
            <Link className="textlink" to="/ports-and-faq">Ports and FAQ <ServiceIcon id="arrow" /></Link>
          </Head>
          <div className="ports">
            {PORTS.map((p, i) => (
              <Reveal className="port" key={p.id} delay={i * 120}>
                <Contours variant={i ? 'b' : 'a'} />
                <span className="port__pin"><ServiceIcon id="pin" /></span>
                <p className="coords">{p.coords}</p>
                <h3>{p.name}</h3>
                <p>{p.lead}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap faqwrap">
          <Head n="07" label="Questions" title="Asked by masters and agents.">
            <Link className="textlink" to="/ports-and-faq#faq">All questions <ServiceIcon id="arrow" /></Link>
          </Head>
          <Reveal delay={100}><Faq items={FAQ.slice(0, 4)} /></Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

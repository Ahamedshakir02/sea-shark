import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_LINK, SERVICES, STATS, STEPS, WHY, PORTS, FAQ, PHOTOS, photo } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import CountUp from '../components/CountUp.jsx'
import WaLink from '../components/WaLink.jsx'
import Wave from '../components/Wave.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Faq from '../components/Faq.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const WHY_ICONS = ['water', 'chat', 'pin', 'anchor']
const HEADLINE = 'Fresh water, crew boats and ship agency on the UAE east coast.'
const TICKER = ['Fresh water supply', 'Khorfakkan', 'Ship agency', 'Fujairah', 'Crew boats', 'Sharjah', 'Husbandry', 'Dubai']

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__img" src={photo(PHOTOS.tankerSunset, 2400)} alt="" />
        <div className="hero__shade" />
        <div className="wrap hero__in">
          <p className="eyebrow eyebrow--light rise"><i />Khorfakkan · Fujairah · UAE</p>
          <h1 className="words" aria-label={HEADLINE}>
            {HEADLINE.split(' ').map((w, i) => (
              <span key={i} aria-hidden="true"><span style={{ '--d': `${120 + i * 55}ms` }}>{w}</span></span>
            ))}
          </h1>
          <p className="hero__lead rise" style={{ '--d': '800ms' }}>
            We run our own water barge, Malik, and act as your agent at Khorfakkan and Fujairah. Send us your vessel name and what you need on WhatsApp, and we take it from there.
          </p>
          <div className="hero__cta rise" style={{ '--d': '950ms' }}>
            <WaLink className="btn btn--blue" message="Hello Sea Shark, I need help with a vessel. Vessel: ... Port: ..."><WhatsAppIcon />Chat on WhatsApp</WaLink>
            <a className="btn btn--glass" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {[...TICKER, ...TICKER].map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>
        <Wave fill="#fff" className="hero__wave" />
      </section>

      <section className="stats-wrap">
        <div className="wrap">
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal className="stat" key={s.label} delay={i * 80}>
                <b><CountUp value={s.value} /></b><span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap intro">
          <div>
            <Head label="Who we are" title="A small marine team that answers fast." />
            <Reveal className="prose" delay={100}>
              <p>Sea Shark Shipping Services was set up in 2023 by people who have worked around ships for years. We own one vessel, the fresh water barge Malik, and we look after everything else a ship needs at Khorfakkan and Fujairah.</p>
              <p>We keep the list short on purpose, so every job gets done properly.</p>
              <Link className="textlink" to="/about">More about us <ServiceIcon id="arrow" /></Link>
            </Reveal>
          </div>
          <Reveal className="collage" delay={160}>
            <div className="blob"><img src={photo(PHOTOS.boatWake, 900)} alt="" /></div>
            <div className="collage__round"><img src={photo(PHOTOS.ropeCoil, 500)} alt="" /></div>
            <span className="chip chip--a"><ServiceIcon id="anchor" />Since 2023</span>
            <span className="chip chip--b"><ServiceIcon id="pin" />Khorfakkan · Fujairah</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--ice">
        <Wave fill="#eef2fb" flip />
        <div className="wrap">
          <Head label="What we do" title="Three services, one team.">
            <Link className="textlink" to="/services">All services <ServiceIcon id="arrow" /></Link>
          </Head>
          <div className="scards">
            {SERVICES.map((s, i) => <Reveal key={s.slug} delay={i * 110}><ServiceCard s={s} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section--ice section--tight">
        <div className="wrap">
          <div className="malik">
            <Reveal className="malik__img"><div className="blob blob--big"><img src={malik} alt="Malik, our fresh water barge, in port" loading="lazy" /></div></Reveal>
            <Reveal className="malik__in" delay={120}>
              <p className="eyebrow eyebrow--light"><i />Our barge</p>
              <h2>Meet Malik.</h2>
              <p>Malik is the fresh water barge we own and run. It takes drinking water out to ships at Khorfakkan and Fujairah. Because the barge is ours, we control the schedule, the upkeep and the standard of every delivery.</p>
              <div className="hero__cta">
                <Link className="btn btn--white" to="/our-barge">About the barge</Link>
                <WaLink className="btn btn--glass" message={SERVICES[0].wa}>Order water</WaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <Wave fill="#fff" flip />
        <div className="wrap">
          <Head label="How it works" title="From message to job done." center />
          <ol className="steps">
            <svg className="steps__line" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,30 C120,0 210,60 333,30 C456,0 544,60 666,30 C790,0 880,60 1000,30" />
            </svg>
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 140}>
                <span className="steps__dot">{i + 1}</span>
                <h3>{s.title}</h3><p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--ice">
        <Wave fill="#eef2fb" flip />
        <div className="wrap">
          <Head label="Why Sea Shark" title="Why ships work with us." />
          <div className="why">
            {WHY.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 90}>
                <span className="bubble"><ServiceIcon id={WHY_ICONS[i]} /></span><h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Wave fill="#fff" flip />
        <div className="wrap">
          <Head label="Where we work" title="Two ports on the east coast.">
            <Link className="textlink" to="/ports-and-faq">Ports and FAQ <ServiceIcon id="arrow" /></Link>
          </Head>
          <div className="ports">
            {PORTS.map((p, i) => (
              <Reveal className={`port port--${i}`} key={p.id} delay={i * 120}>
                <span className="port__pin"><ServiceIcon id="pin" /></span>
                <p className="port__coords">{p.coords}</p>
                <h3>{p.name}</h3>
                <p>{p.lead}</p>
                <Wave fill="rgba(255,255,255,.14)" className="port__wave" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ice">
        <Wave fill="#eef2fb" flip />
        <div className="wrap faqwrap">
          <Head label="Questions" title="Asked by masters and agents.">
            <Link className="textlink" to="/ports-and-faq#faq">All questions <ServiceIcon id="arrow" /></Link>
          </Head>
          <Reveal delay={100}><Faq items={FAQ.slice(0, 4)} /></Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

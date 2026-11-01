import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_LINK, SERVICES, STATS, STEPS, PLACES, PHOTOS, WHY, FAQ, photo } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import malik from '../assets/boat-malik.jpg'

const img = (s, w) => (s === 'malik' ? malik : photo(s, w))
const HEADLINE = 'Fresh water, crew boats and ship agency on the UAE east coast.'

export default function Home() {
  return (
    <>
      <section className="hero" style={{ '--img': `url(${photo(PHOTOS.tankerSunset, 2200)})` }}>
        <div className="hero__shade" />
        <div className="wrap hero__in">
          <p className="tag hero__a">[ Khorfakkan · Fujairah · UAE ]</p>
          <h1 className="words" aria-label={HEADLINE}>
            {HEADLINE.split(' ').map((w, i) => (
              <span key={i} aria-hidden="true"><span style={{ '--d': `${120 + i * 55}ms` }}>{w}</span></span>
            ))}
          </h1>
          <p className="hero__lead hero__a" style={{ '--d': '800ms' }}>
            We run our own water barge, Malik, and act as your agent at Khorfakkan and Fujairah. Send us your vessel name and what you need on WhatsApp, and we take it from there.
          </p>
          <div className="hero__cta hero__a" style={{ '--d': '950ms' }}>
            <WaLink className="pill pill--light" message="Hello Sea Shark, I need help with a vessel. Vessel name: ... Port: ...">
              <span className="wa-ic"><WhatsAppIcon /></span>Chat on WhatsApp
            </WaLink>
            <a className="pill pill--ghost" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap intro__in">
          <Reveal as="p" className="intro__big">
            Our own barge, three services we know inside out, and <span>a quick reply</span> when a ship needs us.
          </Reveal>
          <Reveal className="stats" delay={120}>
            {STATS.map((s) => <div key={s.label}><dd><CountUp value={s.value} /></dd><dt>{s.label}</dt></div>)}
          </Reveal>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag tag--dark">[ What we do ]</p><h2>Three services, one team.</h2></div>
            <Link className="more" to="/services">All services <ServiceIcon id="arrow" /></Link>
          </Reveal>
          <div className="tiles">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 110}>
                <Link className="tile" to={`/services/${s.slug}`}>
                  <img src={img(s.photo, 900)} alt="" loading="lazy" decoding="async" />
                  <div className="tile__body">
                    <span className="tile__num">0{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="tile__go">Learn more <ServiceIcon id="arrow" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="wrap feature__in">
          <Reveal className="feature__img">
            <img src={malik} alt="Malik, our fresh water barge, alongside in port" loading="lazy" decoding="async" />
            <span className="feature__badge">Owned and run by us</span>
          </Reveal>
          <Reveal className="feature__text" delay={120}>
            <p className="tag tag--dark">[ Our barge ]</p>
            <h2>Meet Malik.</h2>
            <p>Malik is our own fresh water barge. It delivers clean drinking water to ships at Khorfakkan and Fujairah. Because the barge is ours, we control the schedule, the upkeep and the standard of every delivery.</p>
            <div className="feature__cta">
              <Link className="pill pill--dark" to="/our-barge">About the barge</Link>
              <WaLink className="link" message="Hello Sea Shark, I need fresh water from Malik. Vessel: ... Location: ... Quantity: ...">Order water on WhatsApp &rarr;</WaLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ How it works ]</p><h2>From message to done.</h2></Reveal>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 110}>
                <span className="steps__n">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap">
          <Reveal className="head head--row">
            <div><p className="tag">[ Where we work ]</p><h2>On the UAE east coast.</h2></div>
            <p className="head__note">Two ports for our ships, two offices for our clients.</p>
          </Reveal>
          <div className="places">
            {PLACES.map((p, i) => (
              <Reveal className="place" key={p.name} delay={i * 90}>
                <ServiceIcon id="pin" />
                <span className="place__type">{p.type}</span>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap why-faq">
          <div>
            <Reveal className="head"><p className="tag tag--dark">[ Why ships call us ]</p><h2>Clear answers, no runaround.</h2></Reveal>
            <div className="why why--two">
              {WHY.map((w, i) => (
                <Reveal className="why__item" key={w.title} delay={i * 80}><span className="steps__n">0{i + 1}</span><h3>{w.title}</h3><p>{w.text}</p></Reveal>
              ))}
            </div>
          </div>
          <Reveal className="faq-peek">
            <p className="tag tag--dark">[ Quick answers ]</p>
            {FAQ.slice(0, 3).map((f) => <div className="faq-peek__item" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}
            <Link className="more" to="/ports-and-faq">All questions <ServiceIcon id="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

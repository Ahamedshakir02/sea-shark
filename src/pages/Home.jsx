import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_LINK, SERVICES, STATS, STEPS, WHY, PORTS, FAQ, PHOTOS, photo } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import CountUp from '../components/CountUp.jsx'
import WaLink from '../components/WaLink.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Faq from '../components/Faq.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Contours, { Side } from '../components/Contours.jsx'
import malik from '../assets/boat-malik.jpg'

const WHY_ICONS = ['water', 'chat', 'pin', 'anchor']
const HEADLINE = 'Keep your ship moving.'
const TICKER = ['Fresh water supply', 'Khorfakkan', 'Ship agency', 'Fujairah', 'Crew boats', 'Sharjah', 'Husbandry', 'Dubai']
const RINGS = ['', ' ring--navy', ' ring--light']

export default function Home() {
  return (
    <>
      <section className="hero">
        <Side side="left" />
        <Side side="right" className="side--hero" />
        <div className="wrap hero__grid">
          <div className="hero__text">
            <p className="eyebrow rise"><i className="ring" />Khorfakkan · Fujairah · UAE</p>
            <h1 className="words" aria-label={HEADLINE}>
              {HEADLINE.split(' ').map((w, i) => (
                <span key={i} aria-hidden="true"><span style={{ '--d': `${120 + i * 90}ms` }}>{w}</span></span>
              ))}
            </h1>
            <p className="hero__lead rise" style={{ '--d': '560ms' }}>
              Fresh water from <b>Malik</b>, our own barge. Ship agency and crew boats at <b>Khorfakkan</b> and <b>Fujairah</b>. Send your vessel name on WhatsApp and we take it from there.
            </p>
            <div className="hero__cta rise" style={{ '--d': '700ms' }}>
              <WaLink className="btn btn--blue" message="Hello Sea Shark, I need help with a vessel. Vessel: ... Port: ..."><WhatsAppIcon />Chat on WhatsApp</WaLink>
              <a className="btn btn--line" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
            </div>
          </div>
          <div className="hero__art rise" style={{ '--d': '300ms' }}>
            <span className="bfill bfill--pale" />
            <div className="pblob"><img src={photo(PHOTOS.tankerSunset, 1400)} alt="A tanker at sea at sunset" /></div>
            <span className="bfill bfill--light" />
            <span className="chip chip--a"><i className="ring" />Malik, our own water barge</span>
            <span className="chip chip--b"><i className="ring ring--navy" />Since 2023</span>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {[...TICKER, ...TICKER].map((t, i) => <span key={i}><i className={`ring${RINGS[i % 3]}`} />{t}</span>)}
          </div>
        </div>
      </section>

      <section className="section section--stats">
        <div className="wrap">
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal className="stat" key={s.label} delay={i * 80}>
                <b><CountUp value={s.value} /></b><span><i className={`ring${RINGS[i % 3]}`} />{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section has-side">
        <Side side="left" />
        <div className="wrap intro">
          <div>
            <Head label="Who we are" title="A small marine team that answers fast." />
            <Reveal className="prose" delay={100}>
              <p>Sea Shark Shipping Services was set up in 2023 by people who have worked around ships for years. We own one vessel, the fresh water barge <b>Malik</b>, and we look after everything else a ship needs at Khorfakkan and Fujairah.</p>
              <p>We keep the list short on purpose, so every job gets done properly.</p>
              <Link className="textlink" to="/about">More about us <ServiceIcon id="arrow" /></Link>
            </Reveal>
          </div>
          <Reveal className="collage" delay={160}>
            <span className="bfill bfill--pale" />
            <div className="pblob pblob--b"><img src={photo(PHOTOS.boatWake, 900)} alt="" /></div>
            <div className="collage__round"><img src={photo(PHOTOS.ropeCoil, 500)} alt="" /></div>
            <span className="chip chip--a"><i className="ring" />Since 2023</span>
            <span className="chip chip--b"><i className="ring ring--navy" />Khorfakkan · Fujairah</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--mist has-side">
        <Side side="right" />
        <div className="wrap">
          <Head label="What we do" title="Three services, one team.">
            <Link className="textlink" to="/services">All services <ServiceIcon id="arrow" /></Link>
          </Head>
          <div className="scards">
            {SERVICES.map((s, i) => <Reveal key={s.slug} delay={i * 110}><ServiceCard s={s} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="malik">
            <Contours variant="card" />
            <span className="bfill bfill--blue" />
            <Reveal className="malik__img"><div className="pblob pblob--wide"><img src={malik} alt="Malik, our fresh water barge, in port" loading="lazy" /></div></Reveal>
            <Reveal className="malik__in" delay={120}>
              <p className="eyebrow eyebrow--light"><i className="ring" />Our barge</p>
              <h2>Meet Malik.</h2>
              <p>Malik is the fresh water barge we own and run. It takes drinking water out to ships at Khorfakkan and Fujairah. Because the barge is ours, we control the schedule, the upkeep and the standard of every delivery.</p>
              <div className="hero__cta">
                <Link className="btn btn--white" to="/our-barge">About the barge</Link>
                <WaLink className="btn btn--ghost" message={SERVICES[0].wa}>Order water</WaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--flush has-side">
        <Side side="left" />
        <div className="wrap">
          <Head label="How it works" title="From message to job done." center />
          <ol className="steps">
            <svg className="steps__line" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,30 C120,0 210,60 333,30 C456,0 544,60 666,30 C790,0 880,60 1000,30" />
            </svg>
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 140}>
                <span className="steps__dot"><b>{i + 1}</b></span>
                <h3>{s.title}</h3><p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--mist has-side">
        <Side side="right" />
        <div className="wrap">
          <Head label="Why Sea Shark" title="Why ships work with us." />
          <div className="why">
            {WHY.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 90}>
                <span className="iblob"><ServiceIcon id={WHY_ICONS[i]} /></span><h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section has-side">
        <Side side="left" />
        <div className="wrap">
          <Head label="Where we work" title="Two ports on the east coast.">
            <Link className="textlink" to="/ports-and-faq">Ports and FAQ <ServiceIcon id="arrow" /></Link>
          </Head>
          <div className="ports">
            {PORTS.map((p, i) => (
              <Reveal className={`port port--${i}`} key={p.id} delay={i * 120}>
                <Contours variant="card" />
                <span className="port__pin"><ServiceIcon id="pin" /></span>
                <p className="port__coords">{p.coords}</p>
                <h3>{p.name}</h3>
                <p>{p.lead}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist has-side">
        <Side side="right" />
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

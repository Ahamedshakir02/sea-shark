import { Link, useParams } from 'react-router-dom'
import { SERVICES, STEPS, photo } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import NotFound from './NotFound.jsx'
import malik from '../assets/boat-malik.jpg'

const img = (s, w) => (s === 'malik' ? malik : photo(s, w))

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return <NotFound />
  const others = SERVICES.filter((x) => x.slug !== slug)

  return (
    <>
      <PageBanner image={s.banner} tag="[ Service ]" title={s.title} lead={s.short}
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]} />

      <section className="section">
        <div className="wrap detail">
          <Reveal className="detail__main">
            <p className="detail__intro">{s.intro}</p>
            <h2>What's included</h2>
            <ul className="ticks ticks--big">{s.includes.map((x) => <li key={x}><ServiceIcon id="check" />{x}</li>)}</ul>
            <div className="detail__img"><img src={img(s.photo, 1400)} alt="" loading="lazy" /></div>
          </Reveal>
          <aside className="detail__side">
            <Reveal className="sendbox" delay={120}>
              <h3>What to send us</h3>
              <p>Put these in your WhatsApp message and we can confirm faster:</p>
              <ol>{s.send.map((x) => <li key={x}>{x}</li>)}</ol>
              <WaLink className="pill pill--wa" message={s.wa}><span className="dot" />{s.cta}</WaLink>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ How it works ]</p><h2>Three simple steps.</h2></Reveal>
          <ol className="steps">
            {STEPS.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 110}>
                <span className="steps__n">0{i + 1}</span><h3>{st.title}</h3><p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ More services ]</p><h2>We can also help with</h2></Reveal>
          <div className="tiles tiles--two">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 110}>
                <Link className="tile" to={`/services/${o.slug}`}>
                  <img src={img(o.photo, 900)} alt="" loading="lazy" />
                  <div className="tile__body"><h3>{o.title}</h3><p>{o.short}</p><span className="tile__go">Learn more <ServiceIcon id="arrow" /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand message={s.wa} />
    </>
  )
}

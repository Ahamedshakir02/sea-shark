import { itemText } from '../components/Tbc.jsx'
import { Link, useParams } from 'react-router-dom'
import { SERVICES, STEPS, photo, PHONE_DISPLAY, PHONE_LINK } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
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
      <PageBanner variant="panel" image={s.banner} tag={`[ Service 0${SERVICES.indexOf(s) + 1} of 03 ]`} title={s.title} lead={s.short}
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]} />

      <section className="section">
        <div className="wrap detail">
          <Reveal className="detail__main">
            <p className="detail__intro">{s.intro}</p>
            <h2>What's included</h2>
            <ul className="incl">{s.includes.map((x, i) => (
              <li key={x.title}><span className="incl__n">{String(i + 1).padStart(2, '0')}</span><h3>{x.title}</h3><p>{x.text}</p></li>
            ))}</ul>
          </Reveal>
          <aside className="detail__side">
            <Reveal className="sendbox" delay={120}>
              <h3>What to send us</h3>
              <p>Put these in your WhatsApp message and we can confirm faster:</p>
              <ol>{s.send.map((x) => <li key={x}>{x}</li>)}</ol>
              <WaLink className="pill pill--wa" message={s.wa}><span className="wa-ic"><WhatsAppIcon /></span>{s.cta}</WaLink>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="urgent">
        <div className="wrap urgent__in">
          <p><strong>{s.urgent}</strong> Call us during office hours (Mon to Fri 9 to 5, Sat 9 to 1) or send a WhatsApp message.</p>
          <div className="urgent__cta"><a className="pill pill--light" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a><WaLink className="pill pill--ghost" message={s.wa}>WhatsApp us</WaLink></div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ How it works ]</p><h2>From first message to done.</h2></Reveal>
          <ol className="steps steps--flow" style={{ '--n': s.process.length }}>
            {s.process.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 110}>
                <span className="steps__n">0{i + 1}</span><h3>{st.title}</h3><p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap qa">
          <Reveal><p className="tag tag--dark">[ Quick answers ]</p><h2>Asked about {s.title.toLowerCase()}.</h2><Link className="link" to="/ports-and-faq">All questions &rarr;</Link></Reveal>
          <div className="faq">{s.faq.map((f, i) => (
            <Reveal className="faq__item" key={f.q} delay={i * 80}><h3><span className="faq__n">0{i + 1}</span>{f.q}</h3><p>{f.a}</p></Reveal>
          ))}</div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ More services ]</p><h2>We can also help with</h2></Reveal>
          <div className="tiles tiles--two">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 110}>
                <Link className="tile" to={`/services/${o.slug}`}>
                  <img src={img(o.tile, 900)} alt="" loading="lazy" decoding="async" />
                  <div className="tile__body"><h3>{o.title}</h3><p>{o.short}</p><span className="tile__go">Learn more <ServiceIcon id="arrow" /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand message={s.wa} image={s.band} />
    </>
  )
}

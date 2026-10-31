import { useParams } from 'react-router-dom'
import { SERVICES } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import Head from '../components/Head.jsx'
import WaLink from '../components/WaLink.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Tbc from '../components/Tbc.jsx'
import CtaBand from '../components/CtaBand.jsx'
import NotFound from './NotFound.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return <NotFound />
  const idx = SERVICES.indexOf(s)

  return (
    <>
      <PageHead image={s.banner} label={s.kicker} title={s.title.toLowerCase() + '.'} lead={s.short}
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]} />

      <section className="section grid-bg">
        <div className="wrap detail">
          <div>
            <Head n="01" label="The service" title="What it is." />
            <Reveal as="p" className="lead-big" delay={80}>{s.intro}</Reveal>
          </div>
          <aside className="detail__side">
            <Reveal className="sendbox" delay={140}>
              <p className="idx idx--light"><span>&#8212;</span>To book</p>
              <h3>What to send us</h3>
              <ol>{s.send.map((x) => <li key={x}>{x}</li>)}</ol>
              <WaLink className="btn btn--white" message={s.wa}><ServiceIcon id="chat" />{s.cta}</WaLink>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <Head n="02" label="What's included" title="What we take care of." />
          <div className="incl" style={{ '--cols': s.includes.length % 4 === 0 ? 4 : 3 }}>
            {s.includes.map((x, i) => (
              <Reveal className="incl__item" key={x.title} delay={(i % 4) * 80}>
                <span className="incl__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{x.title} <Tbc on={x.tbc} /></h3>
                <p>{x.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid-bg">
        <div className="wrap">
          <Head n="03" label="How it works" title="Step by step." />
          <ol className="route route--many" style={{ '--n': s.process.length }}>
            {s.process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100}>
                <span className="route__dot">{`0${i + 1}`}</span><h3>{p.title}</h3><p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--ice">
        <div className="wrap">
          <Head n="04" label="More services" title="We can also help with" />
          <div className="scards scards--two">
            {SERVICES.map((o, i) => o.slug !== slug && (
              <Reveal key={o.slug} delay={i * 100}><ServiceCard s={o} n={`0${i + 1}`} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={idx === 0 ? 'Need fresh water for your ship?' : idx === 1 ? 'Calling at Khorfakkan or Fujairah?' : 'Need people or stores moved?'} message={s.wa} />
    </>
  )
}

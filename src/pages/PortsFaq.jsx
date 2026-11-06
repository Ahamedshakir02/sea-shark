import { PORTS, FAQ, HOURS_ROWS, PORT_TABLE, CALL_TIPS, photo, AGENT_WHATSAPP } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Head, Faq } from '../components/Blocks.jsx'

export default function PortsFaq() {
  const p = PORTS[0]
  return (
    <>
      <PageHead eyebrow="Port & FAQ" title="Where we work, and what ships ask us."
        lead="Khorfakkan on the UAE east coast, and straight answers to the questions we hear most." crumbs={[{ label: 'Port & FAQ' }]}>
        <a className="coords" href={`#${p.id}`}><ServiceIcon id="pin" /><span><strong>{p.name}</strong><span>{p.coords}</span></span></a>
      </PageHead>

      <section className="sec">
        <div className="wrap">
          <Head split eyebrow="Our port" title="Khorfakkan, on the Gulf of Oman." lead="One port, covered by one team from the first message to the moment the ship sails." />
          <Reveal className="port" id={p.id}>
            <div className="port__img"><img src={photo(p.photo, 1200)} alt="" loading="lazy" decoding="async" /><span>{p.coords}</span></div>
            <div className="port__body">
              <h3>{p.name}</h3><p>{p.lead}</p>
              <table className="ptable">
                <thead><tr><th>Service</th><th>Khorfakkan</th></tr></thead>
                <tbody>{PORT_TABLE.map((r) => (
                  <tr key={r.service}><td>{r.service}</td><td>{r.khorfakkan === 'yes' ? <span className="yes"><ServiceIcon id="check" />Yes</span> : '-'}</td></tr>
                ))}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          <Head eyebrow="Planning a call" title="Getting the most from your call at Khorfakkan." />
          <div className="cards">
            {CALL_TIPS.map((w, i) => (
              <Reveal className="card" key={w.title} delay={i * 80}><span className="card__n">0{i + 1}</span><h3>{w.title}</h3><p>{w.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap faqs">
          <Reveal className="faqs__side">
            <p className="eyebrow">FAQ</p>
            <h2>Questions ships ask us.</h2>
            <p className="lead">Not here? Ask our desk on WhatsApp.</p>
            <div className="desk">
              <h4>Ask our desk</h4>
              <p>We reply during office hours. Our crews work around the clock.</p>
              <WaLink className="btn btn--wa btn--block" message="Hello Sea Shark, I have a question: ..." number={AGENT_WHATSAPP}><WhatsAppIcon />Ask on WhatsApp</WaLink>
              <dl>{HOURS_ROWS.map(([d, t]) => <div key={d}><dt>{d}</dt><dd>{t}</dd></div>)}</dl>
            </div>
          </Reveal>
          <Reveal delay={100}><Faq items={FAQ} /></Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

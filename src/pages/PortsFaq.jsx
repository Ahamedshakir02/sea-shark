import { PORTS, FAQ, PHOTOS, HOURS_ROWS, PORT_TABLE, photo } from '../content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import Tbc from '../components/Tbc.jsx'

export default function PortsFaq() {
  return (
    <>
      <PageBanner variant="navy" tag="[ Ports & FAQ ]" title="Where we work, and what ships ask us."
        lead="Two ports on the UAE east coast, and straight answers to the questions we hear most." crumbs={[{ label: 'Ports & FAQ' }]}>
        <div className="hb__coords">{PORTS.map((p) => <a key={p.id} href={`#${p.id}`}><ServiceIcon id="pin" /><span><strong>{p.name}</strong>{p.coords}</span></a>)}</div>
      </PageBanner>
      <section className="section">
        <div className="wrap">
          <Reveal className="head head--row"><div><p className="tag tag--dark">[ Our ports ]</p><h2>Two ports, one team.</h2></div>
            <p className="head__note">Khorfakkan and Fujairah sit on the same coast, on the Gulf of Oman, and the same team covers both.</p></Reveal>
          <div className="ports">
            {PORTS.map((p, i) => (
              <Reveal className="port" id={p.id} key={p.id} delay={i * 120}>
                <div className="port__img"><img src={photo(p.photo, 1200)} alt="" /><span className="port__coords">{p.coords}</span></div>
                <div className="port__body">
                  <h3>{p.name}</h3><p>{p.lead}</p>
                  <ul className="ticks">{p.work.map((w) => <li key={w.text}><ServiceIcon id="check" /><span>{w.text}{w.tbc && <> <Tbc /></>}</span></li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="ptable">
            <h3>What we do at each port</h3>
            <table>
              <thead><tr><th>Service</th><th>Khorfakkan</th><th>Fujairah</th></tr></thead>
              <tbody>{PORT_TABLE.map((r) => (
                <tr key={r.service}><td>{r.service}</td>{[r.khorfakkan, r.fujairah].map((v, i) => <td key={i}>{v === 'yes' ? <span className="ptable__yes"><ServiceIcon id="check" />Yes</span> : <Tbc />}</td>)}</tr>
              ))}</tbody>
            </table>
          </Reveal>
        </div>
      </section>
      <section className="section section--tint">
        <div className="wrap faq__in">
          <Reveal>
            <p className="tag tag--dark">[ FAQ ]</p><h2>Questions ships ask us.</h2>
            <p className="head__note faq__note">Not here? Ask us on WhatsApp and we will reply during office hours.</p>
            <WaLink className="pill pill--wa faq__ask" message="Hello Sea Shark, I have a question: ..."><span className="dot" />Ask us on WhatsApp</WaLink>
            <dl className="hours">{HOURS_ROWS.map(([d, t]) => <div key={d}><dt>{d}</dt><dd>{t}</dd></div>)}</dl>
          </Reveal>
          <div className="faq">
            {FAQ.map((f, i) => (
              <Reveal className="faq__item" key={f.q} delay={i * 50}>
                <h3><span className="faq__n">{String(i + 1).padStart(2, '0')}</span>{f.q}</h3>
                <p>{f.a}{f.tbc && <> <Tbc /></>}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

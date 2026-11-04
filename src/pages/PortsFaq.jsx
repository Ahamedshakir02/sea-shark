import { PORTS, FAQ, PHOTOS, HOURS_ROWS, PORT_TABLE, CALL_TIPS, photo } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'

export default function PortsFaq() {
  return (
    <>
      <PageBanner variant="navy" tag="[ Ports & FAQ ]" title="Where we work, and what ships ask us."
        lead="Khorfakkan on the UAE east coast, and straight answers to the questions we hear most." crumbs={[{ label: 'Ports & FAQ' }]}>
        <div className="hb__coords">{PORTS.map((p) => <a key={p.id} href={`#${p.id}`}><ServiceIcon id="pin" /><span><strong>{p.name}</strong>{p.coords}</span></a>)}</div>
      </PageBanner>
      <section className="section">
        <div className="wrap">
          <Reveal className="head head--row"><div><p className="tag tag--dark">[ Our ports ]</p><h2>Khorfakkan, on the Gulf of Oman.</h2></div>
            <p className="head__note">One port, covered by one team from the first message to the moment the ship sails.</p></Reveal>
          <div className="ports">
            {PORTS.map((p, i) => (
              <Reveal className="port" id={p.id} key={p.id} delay={i * 120}>
                <div className="port__img"><img src={photo(p.photo, 900)} alt="" loading="lazy" decoding="async" /><span className="port__coords">{p.coords}</span></div>
                <div className="port__body">
                  <h3>{p.name}</h3><p>{p.lead}</p>
                  <ul className="ticks">{p.work.map((w) => <li key={w.text}><ServiceIcon id="check" /><span>{w.text}</span></li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="ptable">
            <h3>What we do at Khorfakkan</h3>
            <table>
              <thead><tr><th>Service</th><th>Khorfakkan</th></tr></thead>
              <tbody>{PORT_TABLE.map((r) => (
                <tr key={r.service}><td>{r.service}</td>{[r.khorfakkan].map((v, i) => <td key={i}>{v === 'yes' ? <span className="ptable__yes"><ServiceIcon id="check" />Yes</span> : '-'}</td>)}</tr>
              ))}</tbody>
            </table>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Reveal className="head"><p className="tag tag--dark">[ Planning a call ]</p><h2>Getting the most from your call at Khorfakkan.</h2></Reveal>
          <div className="why">
            {CALL_TIPS.map((w, i) => (
              <Reveal className="why__item" key={w.title} delay={i * 90}>
                <span className="steps__n">0{i + 1}</span><h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="wrap faq__in">
          <Reveal>
            <p className="tag tag--dark">[ FAQ ]</p><h2>Questions ships ask us.</h2>
            <p className="head__note faq__note">Not here? Ask us on WhatsApp and we will reply during office hours.</p>
            <WaLink className="pill pill--wa faq__ask" message="Hello Sea Shark, I have a question: ..."><span className="wa-ic"><WhatsAppIcon /></span>Ask us on WhatsApp</WaLink>
            <dl className="hours">{HOURS_ROWS.map(([d, t]) => <div key={d}><dt>{d}</dt><dd>{t}</dd></div>)}</dl>
          </Reveal>
          <div className="faq">
            {FAQ.map((f, i) => (
              <Reveal className="faq__item" key={f.q} delay={i * 50}>
                <h3><span className="faq__n">{String(i + 1).padStart(2, '0')}</span>{f.q}</h3>
                <p>{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

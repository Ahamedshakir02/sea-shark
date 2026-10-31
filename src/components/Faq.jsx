import Tbc from './Tbc.jsx'

// Plain questions and answers that open on tap (no script needed).
export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}<span className="faq__plus" aria-hidden="true" /></summary>
          <p>{f.a} <Tbc on={f.tbc} /></p>
        </details>
      ))}
    </div>
  )
}

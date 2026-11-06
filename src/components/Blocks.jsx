import { Fragment } from 'react'
import { HOURS_ROWS } from '../content.js'
import { ServiceIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

// Titles with two sentences: each sentence wraps as one piece, so a line never ends
// with the first word or two of the next sentence.
export function sentences(text) {
  if (typeof text !== 'string') return text
  const parts = text.replace(/([.?!])\s+/g, '$1\n').split('\n')
  if (parts.length < 2) return text
  return parts.map((p, i) => <Fragment key={i}>{i > 0 && ' '}<span className="sent">{p}</span></Fragment>)
}

// Working hours on one line; each part stays whole if the line has to wrap.
export const HoursLine = () => HOURS_ROWS.map(([d, t], i) => (
  <Fragment key={d}>{i > 0 && ' · '}<span className="nw">{d} {t}</span></Fragment>
))

// Section heading: eyebrow, title and an optional lead, side by side when `split`.
export function Head({ eyebrow, title, lead, split, center, light, children }) {
  const cls = `head${split ? ' head--split' : ''}${center ? ' head--center' : ''}`
  return (
    <Reveal className={cls}>
      <div>
        {eyebrow && <p className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</p>}
        <h2>{sentences(title)}</h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </Reveal>
  )
}

// Numbered stages joined by a dotted line (stacks into a vertical line on phones).
export function Timeline({ steps, ends }) {
  return (
    <>
      <ol className="timeline" style={{ '--n': steps.length }}>
        {steps.map((st, i) => (
          <Reveal as="li" key={st.title} delay={i * 100}>
            <span className="timeline__node">{String(i + 1).padStart(2, '0')}</span>
            <h3>{st.title}</h3>
            <p>{st.text}</p>
          </Reveal>
        ))}
      </ol>
      {ends && <div className="timeline__ends" aria-hidden="true"><span>{ends[0]}</span><span>{ends[1]}</span></div>}
    </>
  )
}

// Questions that open one at a time; the first one starts open.
export function Faq({ items }) {
  return (
    <div className="acc">
      {items.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary><small>{String(i + 1).padStart(2, '0')}</small>{f.q}<i aria-hidden="true" /></summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function Ticks({ items }) {
  return <ul className="ticks">{items.map((t) => <li key={t}><ServiceIcon id="check" /><span>{t}</span></li>)}</ul>
}

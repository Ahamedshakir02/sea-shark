import { useEffect, useRef, useState } from 'react'
import { ServiceIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

// Section heading: eyebrow, title and an optional lead, side by side when `split`.
export function Head({ eyebrow, title, lead, split, center, light, children }) {
  const cls = `head${split ? ' head--split' : ''}${center ? ' head--center' : ''}`
  return (
    <Reveal className={cls}>
      <div>
        {eyebrow && <p className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </Reveal>
  )
}

// Numbered stages joined by a dotted line (stacks into a vertical line on phones).
// While the list scrolls through the screen, a solid line fills in and each stage lights up in turn.
export function Timeline({ steps, ends }) {
  const ref = useRef(null)
  const [p, setP] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setP(1); return }
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the list's top reaches 85% down the screen, 1 when its bottom reaches 45%.
      const start = vh * 0.85, end = vh * 0.45
      const t = (start - r.top) / (start - end + r.height)
      setP(Math.min(1, Math.max(0, t)))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])
  const n = steps.length
  // Stage i lights up once the fill reaches its node.
  const lit = (i) => p >= (n > 1 ? i / (n - 1) : 0) - 0.03
  return (
    <>
      <ol ref={ref} className="timeline" style={{ '--n': n, '--p': p }}>
        {steps.map((st, i) => (
          <Reveal as="li" key={st.title} delay={i * 100} className={lit(i) ? 'is-lit' : undefined}>
            <span className="timeline__node">{String(i + 1).padStart(2, '0')}</span>
            <h3>{st.title}</h3>
            <p>{st.text}</p>
          </Reveal>
        ))}
      </ol>
      {ends && <div className="timeline__ends" aria-hidden="true" style={{ '--p': p }}><span>{ends[0]}</span><span>{ends[1]}</span></div>}
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

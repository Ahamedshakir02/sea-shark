import { useEffect, useRef, useState } from 'react'

// Counts a number up when it scrolls into view ("20+ yrs" counts 0 to 20, keeps "+ yrs").
export default function CountUp({ value }) {
  const m = String(value).match(/^(\d+)(.*)$/)
  const ref = useRef(null)
  const [n, setN] = useState(m ? 0 : value)

  useEffect(() => {
    if (!m) return
    const target = +m[1]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || target > 3000) { setN(target); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now(), dur = 1400
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1)
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return <span ref={ref}>{m ? `${n}${m[2]}` : value}</span>
}

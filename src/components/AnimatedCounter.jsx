import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../lib/useReducedMotion'

/**
 * Counts a number up from 0 once it scrolls into view. Honest-signal stats
 * that are not numeric ("Khorfakkan", "Owned") are passed as plain strings
 * and rendered immediately without animation.
 */
export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1600,
  isStatic = false,
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(isStatic || reduced ? value : 0)

  useEffect(() => {
    if (isStatic || reduced) {
      setDisplay(value)
      return
    }
    const el = ref.current
    if (!el) return

    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          // easeOutExpo for a decisive settle
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
          setDisplay(Math.round(eased * value))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration, isStatic, reduced])

  return (
    <span ref={ref} className="font-display tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

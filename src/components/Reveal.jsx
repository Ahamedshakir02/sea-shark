import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../lib/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-triggered reveal. Wrap any block to fade + slide (or clip) it in
 * as it enters the viewport. When reduced motion is requested the content
 * simply renders in place at full opacity.
 *
 * @param {('up'|'clip'|'fade')} variant
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !ref.current) return
    const el = ref.current

    const from = {
      up: { y: 40, opacity: 0 },
      fade: { opacity: 0 },
      clip: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
    }[variant]

    const to = {
      y: 0,
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1,
      delay,
      ease: 'power3.out',
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      })
    })
    return () => ctx.revert()
  }, [variant, delay, reduced])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

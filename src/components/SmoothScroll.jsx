import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../lib/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

// Holds the active Lenis instance so the navbar / route changes can call
// lenis.scrollTo without prop-drilling.
let lenisRef = null
export const scrollTo = (target, opts) => lenisRef?.scrollTo(target, opts)

/**
 * Wraps the app. Initialises Lenis, drives it from GSAP's single ticker
 * (one rAF loop for both libraries), and keeps ScrollTrigger updated.
 * When the user prefers reduced motion we skip Lenis entirely and let the
 * browser scroll natively.
 */
export default function SmoothScroll({ children }) {
  const reduced = useReducedMotion()
  const { pathname } = useLocation()

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef = null
    }
  }, [reduced])

  // Reset scroll + recalculate triggers on every route change.
  useEffect(() => {
    if (lenisRef) lenisRef.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
    // Let the new page paint, then refresh trigger positions.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return children
}

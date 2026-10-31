import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Smooth, eased scrolling plus a slow parallax on the page photos.
export default function Motion() {
  const { pathname, hash } = useLocation()

  // Show the floating WhatsApp button once the visitor scrolls past the first screen
  useEffect(() => {
    const onScroll = () => document.documentElement.classList.toggle('scrolled', window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (calm()) return
    document.documentElement.style.scrollBehavior = 'auto'
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    window.__lenis = lenis
    let id
    const loop = (t) => {
      lenis.raf(t)
      // parallax: page photos drift slower than the page
      document.documentElement.style.setProperty('--py', `${Math.min(window.scrollY, 1200) * 0.35}px`)
      id = requestAnimationFrame(loop)
    }
    id = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null }
  }, [])

  // New page: jump to the top, or to the section named in the link (#faq)
  useEffect(() => {
    const target = hash && document.querySelector(hash)
    const top = target ? target.getBoundingClientRect().top + window.scrollY - 76 : 0
    if (window.__lenis) window.__lenis.scrollTo(top, { immediate: true })
    else window.scrollTo(0, top)
  }, [pathname, hash])

  return null
}

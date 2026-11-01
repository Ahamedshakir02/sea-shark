import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { firstPhoto } from '../imageLoading.js'

const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const OUT_MS = 360
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

// Page change: the Sea Shark loader comes up, the new page is put in place behind it,
// and the loader lifts once the new page's top photo is ready (never longer than 1.4s).
// Returns the location the routes should show, so the old page stays up while it fades out.
export function usePageTransition() {
  const location = useLocation()
  const [shown, setShown] = useState(location)
  const [stage, setStage] = useState('in')
  const timer = useRef()

  useEffect(() => {
    if (location.pathname === shown.pathname) { setShown(location); return }
    if (calm()) { setShown(location); window.scrollTo(0, 0); return }
    const loader = document.getElementById('loader')
    if (loader) { loader.classList.add('is-switch'); loader.classList.remove('is-done') }
    setStage('out')
    clearTimeout(timer.current)
    let live = true
    timer.current = setTimeout(() => {
      setShown(location)
      window.scrollTo({ top: 0, behavior: 'instant' })
      setStage('in')
      requestAnimationFrame(() => {
        const main = document.getElementById('main')
        Promise.all([wait(380), Promise.race([main ? firstPhoto(main) : null, wait(1400)])])
          .then(() => { if (live && loader) loader.classList.add('is-done') })
      })
    }, OUT_MS)
    return () => { live = false; clearTimeout(timer.current) }
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps

  return { shown, stage }
}

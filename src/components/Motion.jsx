import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const OUT_MS = 260

// Soft page change: the old page fades out, we jump to the top, the new page fades in.
// Returns the location the routes should show, so the old page stays up while it fades out.
export function usePageTransition() {
  const location = useLocation()
  const [shown, setShown] = useState(location)
  const [stage, setStage] = useState('in')
  const timer = useRef()

  useEffect(() => {
    if (location.pathname === shown.pathname) { setShown(location); return }
    if (calm()) { setShown(location); window.scrollTo(0, 0); return }
    setStage('out')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setShown(location)
      window.scrollTo({ top: 0, behavior: 'instant' })
      setStage('in')
    }, OUT_MS)
    return () => clearTimeout(timer.current)
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps

  return { shown, stage }
}

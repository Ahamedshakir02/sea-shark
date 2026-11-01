import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Keep motion calm: native scrolling, and every new page starts at the top.
export default function Motion() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

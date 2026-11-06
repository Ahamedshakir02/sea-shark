import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from '../content.js'

// Every page opens on a dark top section, so the header starts white-on-navy
// and turns into a solid white bar once the page scrolls.
export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // Close the phone menu with Escape or a tap outside it
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onTap = (e) => { if (!e.target.closest('.hdr')) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onTap)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onTap) }
  }, [open])

  const items = NAV.slice(0, -1)
  const contact = NAV[NAV.length - 1]

  return (
    <header className={`hdr${solid || open ? ' is-solid' : ''}`}>
      <div className="wrap hdr__in">
        <Link className="logo" to="/" aria-label="Sea Shark Shipping, home">
          <img className="logo__light" src="/logo-light.png" alt="Sea Shark Shipping Services LLC" width="992" height="211" />
          <img className="logo__dark" src="/logo.png" alt="" aria-hidden="true" width="992" height="211" />
        </Link>
        <button className="hdr__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span className="hdr__bars" aria-hidden="true"><i /><i /><i /></span>{open ? 'Close' : 'Menu'}
        </button>
        <nav aria-label="Main">
          <ul id="menu" className={`menu${open ? ' is-open' : ''}`}>
            {items.map((item) => (
              <li key={item.to}><NavLink to={item.to} end={item.end}>{item.label}</NavLink></li>
            ))}
            <li className="menu__cta"><NavLink to={contact.to}>{contact.label}</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

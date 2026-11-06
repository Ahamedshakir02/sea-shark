import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, AGENT_PHONE_DISPLAY, AGENT_PHONE_LINK, EMAIL } from '../content.js'
import WaLink from './WaLink.jsx'

// Pages whose top section is light, so the header text starts dark
const LIGHT_TOP = ['/services', '/about', '/contact']

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Nav turns solid once you scroll past the top of the page photo
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // Close the phone menu with Escape or a tap outside it
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onTap = (e) => { if (!e.target.closest('.nav')) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onTap)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onTap) }
  }, [open])

  return (
    <header className={`nav${solid ? ' is-solid' : ''}${LIGHT_TOP.includes(pathname) ? ' nav--ink' : ''}`}>
      <div className="topbar">
        <div className="wrap topbar__in">
          <span>Khorfakkan Port · United Arab Emirates</span>
          <span className="topbar__links">
            <a href={AGENT_PHONE_LINK}>Agency desk {AGENT_PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </span>
        </div>
      </div>
      <div className="wrap nav__in">
        <Link className="logo" to="/" aria-label="Sea Shark Shipping, home">
          <img className="logo__img logo__img--light" src="/logo-light.png" alt="Sea Shark Shipping Services LLC" width="992" height="211" />
          <img className="logo__img logo__img--dark" src="/logo.png" alt="" aria-hidden="true" width="992" height="211" />
        </Link>
        <button className="nav__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav aria-label="Main">
          <ul id="menu" className={`nav__menu${open ? ' is-open' : ''}`}>
            {NAV.map((item) => (
              <li key={item.to}><NavLink to={item.to} end={item.end}>{item.label}</NavLink></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

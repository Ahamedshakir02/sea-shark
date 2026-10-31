import { useEffect, useState } from 'react'
import { NAV, PHONE_DISPLAY, PHONE_LINK, EMAIL, PORTS_LINE } from '../content.js'
import { LogoMark } from './Icons.jsx'
import WaLink from './WaLink.jsx'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  // Nav turns solid once you scroll past the top of the hero
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${solid ? ' is-solid' : ''}`}>
      <div className="topbar">
        <div className="wrap topbar__in">
          <span>{PORTS_LINE}</span>
          <span>
            <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </span>
        </div>
      </div>
      <div className="wrap nav__in">
        <a className="logo" href="#top" aria-label="Sea Shark Shipping, home">
          <LogoMark />
          <span>Sea Shark<small>Shipping Services LLC</small></span>
        </a>
        <button className="nav__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav aria-label="Main">
          <ul id="menu" className={`nav__menu${open ? ' is-open' : ''}`}>
            {NAV.map((item) => (
              <li key={item.href}><a href={item.href} onClick={close}>{item.label}</a></li>
            ))}
            <li>
              <WaLink className="pill pill--light pill--sm" message="Hello Sea Shark, I have an enquiry.">
                <span className="dot" />WhatsApp
              </WaLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

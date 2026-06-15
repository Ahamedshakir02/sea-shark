import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV, COMPANY } from '../data/site'
import MagneticButton from './MagneticButton'

// Small bronze fin mark used as the logo glyph.
function FinMark({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M3 18c5-1 8-3.2 10-7 .4 4 .2 5.6-.8 7H3Z"
        fill="rgb(var(--bronze))"
      />
      <path d="M2 20.5c1.4-.9 2.3-.9 3.6 0s2.3.9 3.6 0" stroke="rgb(var(--bronze))" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? 'border-b border-white/5 bg-ink/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="shell flex h-[68px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${COMPANY.shortName} home`}>
          <FinMark />
          <span className="font-data text-sm uppercase tracking-[0.22em] text-foam">
            Sea&nbsp;Shark
          </span>
        </Link>

        {/* Desktop links — underline reveal on hover / active */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="group relative font-data text-[0.82rem] uppercase tracking-[0.14em] text-mist transition-colors hover:text-foam"
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-bronze transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <MagneticButton to="/contact" className="!px-5 !py-2.5 !text-[0.8rem]">
            Request a service
          </MagneticButton>
        </div>

        {/* Mobile: menu toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
          className="flex h-10 w-10 items-center justify-center"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 h-px w-6 bg-foam transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-px w-6 bg-foam transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-px w-6 bg-foam transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="block border-b border-white/5 py-4 font-display text-2xl text-foam"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-5">
                <MagneticButton to="/contact" className="w-full">
                  Request a service
                </MagneticButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

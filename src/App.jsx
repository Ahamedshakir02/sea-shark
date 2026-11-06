import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import { usePageTransition } from './components/Motion.jsx'
import Footer from './components/Footer.jsx'
import { WhatsAppIcon } from './components/Icons.jsx'
import WaLink from './components/WaLink.jsx'
import { AGENT_WHATSAPP } from './content.js'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Barge from './pages/Barge.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import PortsFaq from './pages/PortsFaq.jsx'

const TITLES = {
  '/': 'Sea Shark Shipping Services LLC | Ship agent at Khorfakkan Port, UAE',
  '/services': 'Services | Sea Shark Shipping',
  '/services/fresh-water': 'Fresh water supply | Sea Shark Shipping',
  '/services/crew-boats': 'Crew boat service | Sea Shark Shipping',
  '/services/ship-agency': 'Ship agency at Khorfakkan | Sea Shark Shipping',
  '/services/marine-survey': 'Marine survey at Khorfakkan | Sea Shark Shipping',
  '/services/underwater-services': 'Underwater hull services at Khorfakkan | Sea Shark Shipping',
  '/our-barge': 'Our barge Malik | Sea Shark Shipping',
  '/ports-and-faq': 'Ports & FAQ | Sea Shark Shipping',
  '/about': 'About us | Sea Shark Shipping',
  '/contact': 'Contact | Sea Shark Shipping',
}

// New page: set the browser tab title
function PageChange({ pathname }) {
  useEffect(() => {
    document.title = TITLES[pathname] || 'Sea Shark Shipping'
  }, [pathname])
  return null
}

// The floating WhatsApp button only shows in the middle of a page: hidden while the top section
// (which has its own WhatsApp button) or the closing WhatsApp band / footer is on screen.
function useFloatVisible(pathname) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(false)
    const main = document.getElementById('main')
    const ends = [main && main.firstElementChild, ...document.querySelectorAll('#main .cta, footer')].filter(Boolean)
    if (!ends.length || !('IntersectionObserver' in window)) { setShow(true); return }
    const seen = new Map()
    const io = new IntersectionObserver((list) => {
      list.forEach((e) => seen.set(e.target, e.isIntersecting))
      setShow(![...seen.values()].some(Boolean))
    }, { rootMargin: '-80px 0px 0px 0px' })
    ends.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
  return show
}

export default function App() {
  const { shown, stage } = usePageTransition()
  const floatOn = useFloatVisible(shown.pathname)
  return (
    <>
      <PageChange pathname={shown.pathname} />
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main" key={shown.pathname} className={`page page--${stage}`}>
        <Routes location={shown}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/our-barge" element={<Barge />} />
          <Route path="/ports-and-faq" element={<PortsFaq />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WaLink className={`wa-float${floatOn ? ' is-on' : ''}`} message="Hello Sea Shark, I have an enquiry." number={AGENT_WHATSAPP} aria-label="Chat with us on WhatsApp" aria-hidden={!floatOn} tabIndex={floatOn ? undefined : -1}>
        <WhatsAppIcon />
      </WaLink>
    </>
  )
}

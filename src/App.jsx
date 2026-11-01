import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import { usePageTransition } from './components/Motion.jsx'
import Footer from './components/Footer.jsx'
import { WhatsAppIcon } from './components/Icons.jsx'
import WaLink from './components/WaLink.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Barge from './pages/Barge.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import PortsFaq from './pages/PortsFaq.jsx'

const TITLES = {
  '/': 'Sea Shark Shipping Services LLC | Khorfakkan & Fujairah, UAE',
  '/services': 'Services | Sea Shark Shipping',
  '/services/fresh-water': 'Fresh water supply | Sea Shark Shipping',
  '/services/crew-boats': 'Crew boat service | Sea Shark Shipping',
  '/services/ship-agency': 'Ship agency | Sea Shark Shipping',
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

export default function App() {
  const { shown, stage } = usePageTransition()
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
      <WaLink className="wa-float" message="Hello Sea Shark, I have an enquiry." aria-label="Chat with us on WhatsApp">
        <WhatsAppIcon />
      </WaLink>
    </>
  )
}

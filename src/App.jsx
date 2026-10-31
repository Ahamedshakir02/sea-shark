import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
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

const TITLES = {
  '/': 'Sea Shark Shipping Services LLC | Khorfakkan & Fujairah, UAE',
  '/services': 'Services | Sea Shark Shipping',
  '/services/fresh-water': 'Fresh water supply | Sea Shark Shipping',
  '/services/crew-boats': 'Crew boat service | Sea Shark Shipping',
  '/services/ship-agency': 'Ship agency | Sea Shark Shipping',
  '/our-barge': 'Our barge Malik | Sea Shark Shipping',
  '/about': 'About us | Sea Shark Shipping',
  '/contact': 'Contact | Sea Shark Shipping',
}

// New page: start at the top and set the browser tab title
function PageChange() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[pathname] || 'Sea Shark Shipping'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <PageChange />
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/our-barge" element={<Barge />} />
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

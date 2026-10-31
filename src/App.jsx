import Nav from './components/Nav.jsx'
import { Hero, Intro, Services, Vessel, About, CtaBand, Contact } from './components/Sections.jsx'
import { WhatsAppIcon } from './components/Icons.jsx'
import WaLink from './components/WaLink.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Vessel />
        <About />
        <CtaBand />
        <Contact />
      </main>
      <footer className="foot">
        <div className="wrap foot__in">
          <span>&copy; {new Date().getFullYear()} Sea Shark Shipping Services LLC</span>
          <a href="#top">Back to top &uarr;</a>
        </div>
      </footer>
      <WaLink className="wa-float" message="Hello Sea Shark, I have an enquiry." aria-label="Chat with us on WhatsApp">
        <WhatsAppIcon />
      </WaLink>
    </>
  )
}

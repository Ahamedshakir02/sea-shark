import { Link } from 'react-router-dom'
import { NAV, SERVICES, PHONE_DISPLAY, PHONE_LINK, EMAIL, HOURS } from '../content.js'
import { LogoMark } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div>
          <Link className="logo logo--foot" to="/"><LogoMark /><span>Sea Shark<small>Shipping Services LLC</small></span></Link>
          <p className="foot__about">Fresh water supply, crew boats and ship agency at Khorfakkan and Fujairah, UAE.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>{NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{SERVICES.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>{HOURS}</li>
          </ul>
        </div>
      </div>
      <div className="wrap foot__in">
        <span>&copy; {new Date().getFullYear()} Sea Shark Shipping Services LLC</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top &uarr;</a>
      </div>
    </footer>
  )
}

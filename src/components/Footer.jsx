import { Link } from 'react-router-dom'
import { NAV, SERVICES, PHONE_DISPLAY, PHONE_LINK, EMAIL, HOURS_ROWS, OFFICES } from '../content.js'
import { LogoMark } from './Icons.jsx'
import Contours from './Contours.jsx'

export default function Footer() {
  return (
    <footer className="foot">
      <Contours variant="foot" />
      <div className="wrap"><p className="foot__big" aria-hidden="true">fair winds, <span>calm seas.</span></p></div>
      <div className="wrap foot__grid">
        <div className="foot__brand">
          <Link className="logo logo--light" to="/"><LogoMark /><span>Sea Shark<small>Shipping Services LLC</small></span></Link>
          <p>Fresh water from our own barge, crew boats and ship agency at Khorfakkan and Fujairah, UAE.</p>
          <p className="coords">Khorfakkan 25.35° N · Fujairah 25.17° N</p>
        </div>
        <div>
          <h4><i className="ring" />Pages</h4>
          <ul>{NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4><i className="ring" />Services</h4>
          <ul>{SERVICES.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h4><i className="ring" />Contact</h4>
          <ul>
            <li><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            {OFFICES.map((o) => <li key={o.name}>{o.place}</li>)}
          </ul>
        </div>
        <div>
          <h4><i className="ring" />Hours</h4>
          <ul>{HOURS_ROWS.map(([d, t]) => <li key={d}>{d}<br /><span className="dim">{t}</span></li>)}</ul>
        </div>
      </div>
      <div className="wrap foot__in">
        <span>&copy; {new Date().getFullYear()} Sea Shark Shipping Services LLC</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top &uarr;</a>
      </div>
    </footer>
  )
}

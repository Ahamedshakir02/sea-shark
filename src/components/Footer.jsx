import { Link } from 'react-router-dom'
import { MAIN_SERVICES, MINOR_SERVICES, PHONE_DISPLAY, PHONE_LINK, AGENT_PHONE_DISPLAY, AGENT_PHONE_LINK, EMAIL, HOURS_ROWS, PLACES } from '../content.js'

const COMPANY = [
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'All services' },
  { to: '/ports-and-faq', label: 'Port & FAQ' },
  { to: '/our-barge', label: 'Our barge Malik' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const offices = PLACES.filter((p) => p.type === 'Office')
  return (
    <footer className="foot">
      <div className="wrap foot__top">
        <div>
          <Link className="logo" to="/" aria-label="Sea Shark Shipping Services, home"><img src="/logo-light.png" alt="Sea Shark Shipping Services LLC" width="992" height="211" /></Link>
          <p className="foot__about">Ship agency, marine survey and underwater services for vessels calling at Khorfakkan Port, UAE.</p>
          <div className="foot__offices">{offices.map((o) => <span key={o.name}><b>Office</b> · {o.name}</span>)}</div>
        </div>
        <div>
          <h4>Core services</h4>
          <ul>{MAIN_SERVICES.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
          <h4 style={{ marginTop: 32 }}>Marine support</h4>
          <ul>{MINOR_SERVICES.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>{COMPANY.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><small>Agency desk</small><a href={AGENT_PHONE_LINK}>{AGENT_PHONE_DISPLAY}</a></li>
            <li><small>Water and boats</small><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
          <ul style={{ marginTop: 24 }}>{HOURS_ROWS.map(([d, t]) => <li key={d} className="foot__hours"><span>{d}</span><span>{t}</span></li>)}</ul>
        </div>
      </div>
      <div className="wrap"><div className="foot__bar">
        <span>&copy; {new Date().getFullYear()} Sea Shark Shipping Services LLC</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top &uarr;</a>
      </div></div>
    </footer>
  )
}

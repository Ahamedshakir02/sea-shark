import { Link } from 'react-router-dom'
import { NAV, SERVICES, PHONE_DISPLAY, PHONE_LINK, EMAIL, HOURS_ROWS } from '../content.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div>
          <Link className="logo logo--foot" to="/" aria-label="Sea Shark Shipping Services, home"><img className="logo__img" src="/logo-light.png" alt="Sea Shark Shipping Services LLC" width="992" height="197" /></Link>
          <p className="foot__about">Fresh water supply, crew boats and ship agency at Khorfakkan, UAE.</p>
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
            {HOURS_ROWS.map(([d, t]) => <li key={d} className="foot__hours"><span>{d}</span><span>{t}</span></li>)}
          </ul>
        </div>
      </div>
      <div className="wrap foot__in">
        <span>&copy; {new Date().getFullYear()} Sea Shark Shipping Services LLC</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top &uarr;</a>
      </div>
    </footer>
  )
}

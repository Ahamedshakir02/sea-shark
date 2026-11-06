import { Link } from 'react-router-dom'
import { NAV, MORE_LINKS, MAIN_SERVICES as SERVICES, PHONE_DISPLAY, PHONE_LINK, AGENT_PHONE_DISPLAY, AGENT_PHONE_LINK, EMAIL, HOURS_ROWS } from '../content.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div>
          <Link className="logo logo--foot" to="/" aria-label="Sea Shark Shipping Services, home"><img className="logo__img" src="/logo-light.png" alt="Sea Shark Shipping Services LLC" width="992" height="211" /></Link>
          <p className="foot__about">Ship agency, marine survey and underwater services at Khorfakkan Port, UAE.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>{[NAV[0], ...NAV.slice(4), ...MORE_LINKS].map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{SERVICES.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}<li><Link to="/services/fresh-water">Fresh water supply</Link></li><li><Link to="/services/crew-boats">Crew boats</Link></li><li><Link to="/our-barge">Our barge Malik</Link></li></ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={AGENT_PHONE_LINK}>Agency {AGENT_PHONE_DISPLAY}</a></li>
            <li><a href={PHONE_LINK}>Water and boats {PHONE_DISPLAY}</a></li>
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

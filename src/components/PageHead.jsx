import { Link } from 'react-router-dom'
import { imgFor } from './img.js'
import { Side } from './Contours.jsx'

// Top of every inner page: white, a big lowercase title, and the photo in a soft blob on the right.
export default function PageHead({ label, title, lead, crumbs = [], image }) {
  return (
    <section className="phead has-side">
      <Side side="left" />
      <Side side="right" className="side--hero" />
      <div className="wrap phead__grid">
        <div>
          <nav className="crumbs rise" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => <span key={c.label}>{c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>)}
          </nav>
          {label && <p className="eyebrow rise" style={{ '--d': '60ms' }}><i className="ring" />{label}</p>}
          <h1 className="rise" style={{ '--d': '120ms' }}>{title}</h1>
          {lead && <p className="phead__lead rise" style={{ '--d': '220ms' }}>{lead}</p>}
        </div>
        <div className="phead__art rise" style={{ '--d': '200ms' }}>
          <span className="bfill bfill--pale" />
          <div className="pblob pblob--b"><img src={imgFor(image, 1100)} alt="" /></div>
          <span className="bfill bfill--light" />
        </div>
      </div>
    </section>
  )
}

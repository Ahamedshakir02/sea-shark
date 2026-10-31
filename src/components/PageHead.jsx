import { Link } from 'react-router-dom'
import { imgFor } from './img.js'
import Wave from './Wave.jsx'

// Top of every inner page: a rounded photo card with the title over a deep blue wash.
export default function PageHead({ label, title, lead, crumbs = [], image }) {
  return (
    <section className="phead">
      <div className="phead__card">
        <img className="phead__img" src={imgFor(image, 2000)} alt="" />
        <div className="phead__in">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => <span key={c.label}>{c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>)}
          </nav>
          {label && <p className="eyebrow eyebrow--light rise"><i />{label}</p>}
          <h1 className="rise" style={{ '--d': '80ms' }}>{title}</h1>
          {lead && <p className="phead__lead rise" style={{ '--d': '180ms' }}>{lead}</p>}
        </div>
        <Wave fill="#fff" className="phead__wave" />
      </div>
    </section>
  )
}

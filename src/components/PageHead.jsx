import { Link } from 'react-router-dom'
import { photo } from '../content.js'
import Contours from './Contours.jsx'

// Top of every inner page: dark chart panel with the title, and a photo or drawing beside it.
export default function PageHead({ label, title, lead, crumbs = [], image, art, coords = '25.35° N · 56.36° E' }) {
  const src = image && (image.startsWith('photo-') ? photo(image, 1600) : image)
  return (
    <section className="phead">
      <div className="phead__panel">
        <Contours variant="b" />
        <div className="phead__in">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => <span key={c.label}>{c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>)}
          </nav>
          <p className="idx idx--light"><span>&#8212;</span>{label}</p>
          <h1 className="rise">{title}</h1>
          {lead && <p className="phead__lead rise" style={{ '--d': '160ms' }}>{lead}</p>}
          <p className="coords">{coords}</p>
        </div>
      </div>
      <div className={`phead__side${art ? ' phead__side--art' : ''}`}>
        {art || <img className="phead__img" src={src} alt="" />}
      </div>
    </section>
  )
}

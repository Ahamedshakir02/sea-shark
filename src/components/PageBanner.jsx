import { Link } from 'react-router-dom'
import { photo } from '../content.js'

// Photo header used at the top of every inner page.
export default function PageBanner({ image, tag, title, lead, crumbs = [] }) {
  return (
    <section className="banner" style={{ '--img': `url(${image.startsWith('photo-') ? photo(image, 2000) : image})` }}>
      <div className="banner__shade" />
      <div className="wrap banner__in">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}> / {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>
          ))}
        </nav>
        {tag && <p className="tag">{tag}</p>}
        <h1>{title}</h1>
        {lead && <p className="banner__lead">{lead}</p>}
      </div>
    </section>
  )
}

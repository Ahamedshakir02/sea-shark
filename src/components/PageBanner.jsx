import { Link } from 'react-router-dom'
import { photo } from '../content.js'

const src = (image, w) => (image && image.startsWith('photo-') ? photo(image, w) : image)

// Top of every inner page. Same type and colours everywhere, but each page picks its own layout:
// photo (full photo), split (text + framed photo), panel (navy panel + photo),
// navy (no photo), editorial (big type + photo pair), tint (light, no photo).
export default function PageBanner({ variant = 'photo', image, image2, tag, title, lead, crumbs = [], children }) {
  const crumbsEl = (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {crumbs.map((c) => <span key={c.label}> / {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>)}
    </nav>
  )
  const text = (
    <>
      {crumbsEl}
      {tag && <p className={`tag${['split', 'editorial', 'tint'].includes(variant) ? ' tag--dark' : ''}`}>{tag}</p>}
      <h1>{title}</h1>
      {lead && <p className="banner__lead">{lead}</p>}
    </>
  )
  if (variant === 'split') return (
    <section className="hb hb--split"><div className="wrap hb__grid">
      <div className="hb__text">{text}{children}</div>
      <div className="hb__frame"><img src={src(image, 1400)} alt="" /></div>
    </div></section>
  )
  if (variant === 'panel') return (
    <section className="hb hb--panel">
      <div className="hb__panel"><div className="hb__panel-in">{text}{children}</div></div>
      <div className="hb__photo" style={{ '--img': `url(${src(image, 1600)})` }} />
    </section>
  )
  if (variant === 'navy') return (
    <section className="hb hb--navy"><div className="wrap">{text}{children}</div></section>
  )
  if (variant === 'editorial') return (
    <section className="hb hb--editorial"><div className="wrap">
      {text}
      <div className="hb__pair">
        <div className="hb__pair-a"><img src={src(image, 1400)} alt="" /></div>
        <div className="hb__pair-b"><img src={src(image2, 900)} alt="" />{children}</div>
      </div>
    </div></section>
  )
  if (variant === 'tint') return (
    <section className="hb hb--tint"><div className="wrap">{text}{children}</div></section>
  )
  return (
    <section className="banner" style={{ '--img': `url(${src(image, 2000)})` }}>
      <div className="banner__shade" />
      <div className="wrap banner__in">{text}{children}</div>
    </section>
  )
}

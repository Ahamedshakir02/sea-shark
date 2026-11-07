import { Link } from 'react-router-dom'
import { photo } from '../content.js'
import { sentences } from './Blocks.jsx'

const src = (image, w) => (image && image.startsWith('photo-') ? photo(image, w) : image)

// Chart-style contour lines, drawn behind the plain and split page heads.
const Lines = () => (
  <svg className="ph__lines" viewBox="0 0 720 520" fill="none" aria-hidden="true">
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <path key={i} d={`M${-20 + i * 6} ${470 - i * 52}C${160 + i * 10} ${400 - i * 60} ${260 - i * 8} ${520 - i * 48} ${420 + i * 4} ${430 - i * 54}S${640 - i * 6} ${300 - i * 40} ${760} ${330 - i * 50}`}
        stroke="currentColor" strokeWidth="1.2" />
    ))}
  </svg>
)

// The top of every inner page. Always dark, so the header reads the same on every page.
// photo: full photo behind the text. split: text with a framed photo. plain: navy with chart lines.
export default function PageHead({ variant = 'plain', image, eyebrow, title, lead, crumbs = [], full, children }) {
  const text = (
    <>
      {crumbs.length > 0 && (
        <nav className="crumbs ph__a" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => <span key={c.label}><span aria-hidden="true">/ </span>{c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>)}
        </nav>
      )}
      {eyebrow && <p className="eyebrow ph__a" style={{ '--d': '60ms' }}>{eyebrow}</p>}
      <h1 className="ph__a" style={{ '--d': '120ms' }}>{sentences(title)}</h1>
      {lead && <p className="lead ph__a" style={{ '--d': '220ms' }}>{lead}</p>}
      {children && <div className="ph__extra ph__a" style={{ '--d': '320ms' }}>{children}</div>}
    </>
  )
  if (variant === 'photo') return (
    <section className="ph ph--photo on-dark" style={{ '--img': `url(${src(image, 2000)})` }}>
      <div className="wrap ph__in"><div style={{ maxWidth: 820 }}>{text}</div></div>
    </section>
  )
  if (variant === 'split') return (
    <section className="ph ph--split on-dark">
      <Lines />
      <div className="wrap ph__in">
        <div>{text}</div>
        <div className="ph__frame ph__a" style={{ '--d': '200ms' }}><img src={src(image, 1400)} alt="" /></div>
      </div>
    </section>
  )
  return (
    <section className={`ph ph--plain on-dark${full ? ' ph--full' : ''}`}>
      <Lines />
      <div className="wrap ph__in"><div style={{ maxWidth: 860 }}>{text}</div></div>
    </section>
  )
}

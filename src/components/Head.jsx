import Reveal from './Reveal.jsx'

// Section heading: a small ring-and-dot label, then the big lowercase title.
export default function Head({ label, title, note, light = false, center = false, children }) {
  return (
    <Reveal className={`head${light ? ' head--light' : ''}${center ? ' head--center' : ''}`}>
      {label && <p className={`eyebrow${light ? ' eyebrow--light' : ''}`}><i className="ring" />{label}</p>}
      <div className="head__row">
        <h2>{title}</h2>
        {note && <p className="head__note">{note}</p>}
        {children}
      </div>
    </Reveal>
  )
}

import Reveal from './Reveal.jsx'

// Section heading with a small rounded label above it.
export default function Head({ label, title, note, light = false, center = false, children }) {
  return (
    <Reveal className={`head${light ? ' head--light' : ''}${center ? ' head--center' : ''}`}>
      {label && <p className="eyebrow"><i />{label}</p>}
      <div className="head__row">
        <h2>{title}</h2>
        {note && <p className="head__note">{note}</p>}
        {children}
      </div>
    </Reveal>
  )
}

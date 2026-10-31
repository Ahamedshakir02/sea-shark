import Reveal from './Reveal.jsx'

// Section heading with a chart-style index: "01 / What we do".
export default function Head({ n, label, title, note, light = false, children }) {
  return (
    <Reveal className={`head${light ? ' head--light' : ''}`}>
      <p className="idx"><span>{n}</span>{label}</p>
      <div className="head__row">
        <h2>{title}</h2>
        {note && <p className="head__note">{note}</p>}
        {children}
      </div>
    </Reveal>
  )
}

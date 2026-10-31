import { Link } from 'react-router-dom'
import { imgFor } from './img.js'
import { ServiceIcon } from './Icons.jsx'

// Rounded card with a photo, a floating icon bubble and a short description.
export default function ServiceCard({ s }) {
  return (
    <Link className="scard" to={`/services/${s.slug}`}>
      <div className="scard__img"><img src={imgFor(s.photo, 900)} alt="" loading="lazy" /></div>
      <span className="scard__icon"><ServiceIcon id={s.icon} /></span>
      <div className="scard__body">
        <p className="scard__kick">{s.kicker}</p>
        <h3>{s.title}</h3>
        <p>{s.short}</p>
        <span className="scard__go">See the service <ServiceIcon id="arrow" /></span>
      </div>
    </Link>
  )
}

import { Link } from 'react-router-dom'
import { SCENES } from './Iso.jsx'
import { ServiceIcon } from './Icons.jsx'

// Card with a small drawing on top, used on Home and at the bottom of each service page.
export default function ServiceCard({ s, n }) {
  const Art = SCENES[s.scene]
  return (
    <Link className="scard" to={`/services/${s.slug}`}>
      <div className="scard__art"><Art /></div>
      <div className="scard__body">
        <p className="scard__kick"><span>{n}</span>{s.kicker}</p>
        <h3>{s.title}</h3>
        <p>{s.short}</p>
        <span className="scard__go">See the service <ServiceIcon id="arrow" /></span>
      </div>
    </Link>
  )
}

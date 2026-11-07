import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'

export default function NotFound() {
  return (
    <PageHead full eyebrow="404" title="Page Not Found." lead="The page you asked for isn't here. Try one of these instead.">
      <div className="btns">
        <Link className="btn btn--amber" to="/">Back to Home</Link>
        <Link className="btn btn--ghost" to="/services">Our Services</Link>
        <Link className="btn btn--ghost" to="/contact">Contact Us</Link>
      </div>
    </PageHead>
  )
}

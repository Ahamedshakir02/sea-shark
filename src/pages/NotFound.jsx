import { Link } from 'react-router-dom'
import { PHOTOS } from '../content.js'
import PageBanner from '../components/PageBanner.jsx'

export default function NotFound() {
  return (
    <>
      <PageBanner variant="navy" tag="[ 404 ]" title="This page has sailed." lead="The page you asked for isn't here. Try one of these instead.">
        <div className="hb__links"><Link className="pill pill--light" to="/">Back to home</Link><Link className="pill pill--ghost" to="/services">Our services</Link><Link className="pill pill--ghost" to="/contact">Contact us</Link></div>
      </PageBanner>
    </>
  )
}

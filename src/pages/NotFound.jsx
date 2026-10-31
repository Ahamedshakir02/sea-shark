import { Link } from 'react-router-dom'
import { PHOTOS } from '../content.js'
import PageBanner from '../components/PageBanner.jsx'

export default function NotFound() {
  return (
    <>
      <PageBanner image={PHOTOS.stormSunset} tag="[ 404 ]" title="This page has sailed." lead="The page you asked for isn't here." />
      <section className="section"><div className="wrap"><Link className="pill pill--dark" to="/">Back to home</Link></div></section>
    </>
  )
}

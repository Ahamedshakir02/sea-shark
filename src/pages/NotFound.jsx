import { Link } from 'react-router-dom'
import { PHOTOS } from '../content.js'
import PageHead from '../components/PageHead.jsx'

export default function NotFound() {
  return (
    <>
      <PageHead image={PHOTOS.stormSunset} label="404" title="This page has sailed." lead="The page you asked for isn't here." />
      <section className="section"><div className="wrap"><Link className="btn btn--navy" to="/">Back to home</Link></div></section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { BoatScene } from '../components/Iso.jsx'
import PageHead from '../components/PageHead.jsx'

export default function NotFound() {
  return (
    <>
      <PageHead art={<BoatScene />} label="404" title="this page has sailed." lead="The page you asked for isn't here." />
      <section className="section"><div className="wrap"><Link className="btn btn--indigo" to="/">Back to home</Link></div></section>
    </>
  )
}

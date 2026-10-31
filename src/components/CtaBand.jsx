import { photo, PHOTOS, PHONE_DISPLAY, PHONE_LINK } from '../content.js'
import WaLink from './WaLink.jsx'

export default function CtaBand({
  title = 'Need water, a crew boat or an agent today?',
  text = "Send us your vessel name and location on WhatsApp, and we'll sort it out.",
  message = 'Hello Sea Shark, I have an enquiry.',
}) {
  return (
    <section className="band">
      <div className="wrap">
        <div className="band__box" style={{ '--img': `url(${photo(PHOTOS.stormSunset, 1800)})` }}>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="band__cta">
            <WaLink className="pill pill--light" message={message}><span className="dot" />Message us on WhatsApp</WaLink>
            <a className="pill pill--ghost" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

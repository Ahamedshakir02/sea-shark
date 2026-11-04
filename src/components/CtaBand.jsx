import { photo, PHOTOS, PHONE_DISPLAY, PHONE_LINK } from '../content.js'
import { WhatsAppIcon } from './Icons.jsx'
import WaLink from './WaLink.jsx'

export default function CtaBand({
  title = 'Need water, a crew boat or an agent today?',
  text = "Send us your vessel name and location on WhatsApp, and we'll sort it out.",
  message = 'Hello Sea Shark, I have an enquiry.',
  variant,
  number,
  phone = PHONE_DISPLAY,
  phoneLink = PHONE_LINK,
  image = PHOTOS.stormSunset,
}) {
  if (variant === 'plain') return (
    <section className="band band--plain"><div className="wrap band__plain">
      <h2>{title}</h2><p>{text}</p>
      <div className="band__cta">
        <WaLink className="pill pill--wa" message={message} number={number}><span className="wa-ic"><WhatsAppIcon /></span>Message us on WhatsApp</WaLink>
        <a className="pill pill--outline" href={phoneLink}>Call {phone}</a>
      </div>
    </div></section>
  )
  return (
    <section className="band">
      <div className="wrap">
        <div className="band__box" style={{ '--img': `url(${photo(image, 1800)})` }}>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="band__cta">
            <WaLink className="pill pill--light" message={message} number={number}><span className="wa-ic"><WhatsAppIcon /></span>Message us on WhatsApp</WaLink>
            <a className="pill pill--ghost" href={phoneLink}>Call {phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

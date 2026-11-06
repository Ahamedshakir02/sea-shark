import { photo, PHOTOS, AGENT_WHATSAPP, AGENT_PHONE_DISPLAY, AGENT_PHONE_LINK } from '../content.js'
import { WhatsAppIcon } from './Icons.jsx'
import WaLink from './WaLink.jsx'

// Closing call to action on every page. Defaults to the ship agency desk.
export default function CtaBand({
  title = 'Vessel calling at Khorfakkan?',
  text = 'Send the vessel name, ETA and what the call involves. Our agency desk will confirm the plan with you.',
  message = 'Hello Sea Shark, I need ship agency support. Vessel: ... Port: ... ETA: ...',
  number = AGENT_WHATSAPP,
  phone = AGENT_PHONE_DISPLAY,
  phoneLink = AGENT_PHONE_LINK,
  image = PHOTOS.shipNight,
}) {
  return (
    <section className="cta on-dark" style={{ '--img': `url(${photo(image, 2000)})` }}>
      <div className="wrap cta__in">
        <div>
          <p className="eyebrow">Talk to our desk</p>
          <h2>{title}</h2>
          <p className="lead">{text}</p>
        </div>
        <div className="btns">
          <WaLink className="btn btn--wa" message={message} number={number}><WhatsAppIcon />Message on WhatsApp</WaLink>
          <a className="btn btn--ghost" href={phoneLink}>Call {phone}</a>
        </div>
      </div>
    </section>
  )
}

import { PHONE_DISPLAY, PHONE_LINK } from '../content.js'
import Reveal from './Reveal.jsx'
import WaLink from './WaLink.jsx'
import Contours from './Contours.jsx'
import { WhatsAppIcon } from './Icons.jsx'

export default function CtaBand({
  title = 'Need water, a crew boat or an agent?',
  text = 'Send your vessel name and position on WhatsApp. A real person replies during office hours.',
  message = 'Hello Sea Shark, I have an enquiry.',
}) {
  return (
    <section className="band">
      <Reveal className="wrap">
        <div className="band__card">
          <Contours variant="band" />
          <span className="bfill bfill--light" />
          <span className="bfill bfill--navy" />
          <div className="band__text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="band__cta">
            <WaLink className="btn btn--white" message={message}><WhatsAppIcon />Message us on WhatsApp</WaLink>
            <a className="btn btn--ghost" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

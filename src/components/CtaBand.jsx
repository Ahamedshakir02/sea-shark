import { PHONE_DISPLAY, PHONE_LINK } from '../content.js'
import Reveal from './Reveal.jsx'
import WaLink from './WaLink.jsx'
import { WhatsAppIcon } from './Icons.jsx'

const BUBBLES = [8, 18, 30, 44, 57, 69, 81, 92]

export default function CtaBand({
  title = 'Need water, a crew boat or an agent?',
  text = 'Send your vessel name and position on WhatsApp. A real person replies during office hours.',
  message = 'Hello Sea Shark, I have an enquiry.',
}) {
  return (
    <section className="band">
      <Reveal className="wrap">
        <div className="band__card">
          <div className="bubbles" aria-hidden="true">
            {BUBBLES.map((x, i) => <span key={x} style={{ '--x': `${x}%`, '--s': `${10 + (i % 3) * 8}px`, '--t': `${7 + (i % 4) * 2}s`, '--d': `${i * -1.3}s` }} />)}
          </div>
          <div className="band__text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="band__cta">
            <WaLink className="btn btn--white" message={message}><WhatsAppIcon />Message us on WhatsApp</WaLink>
            <a className="btn btn--glass" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

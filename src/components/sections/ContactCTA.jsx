import Reveal from '../Reveal'
import MagneticButton from '../MagneticButton'
import { COMPANY } from '../../data/site'

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink">
      {/* faint bronze horizon glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,var(--bronze),transparent)' }}
      />
      <div className="shell py-28 text-center md:py-36">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5vw,4rem)] text-foam">
            Need water, a transfer, or an agent at {COMPANY.base}?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-mist">
            Tell us the vessel and the need. We coordinate the rest — at any hour.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/contact">Request a service</MagneticButton>
            <MagneticButton to={`tel:${COMPANY.phoneHref}`} variant="ghost">
              Call operations
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

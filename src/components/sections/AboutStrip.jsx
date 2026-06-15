import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import { COMPANY } from '../../data/site'

export default function AboutStrip() {
  return (
    <section className="shell py-28 md:py-36">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <Reveal>
          <Eyebrow>The company</Eyebrow>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] text-foam">
              A young company, built on an old discipline: do the work properly,
              every time.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              Sea Shark Shipping Services was founded in {COMPANY.founded} and
              operates out of {COMPANY.base}. We own and run our own water barge
              and crew boat — so when a vessel needs water, a transfer or agency
              support, the readiness and the standard are ours to control.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl leading-relaxed text-mist">
              {COMPANY.positioning}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

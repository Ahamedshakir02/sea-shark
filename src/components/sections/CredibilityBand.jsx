import Reveal from '../Reveal'
import AnimatedCounter from '../AnimatedCounter'
import { CREDIBILITY } from '../../data/site'

export default function CredibilityBand() {
  return (
    <section className="border-y border-white/5 bg-hull">
      <div className="shell grid grid-cols-2 gap-y-12 py-20 md:grid-cols-4 md:py-24">
        {CREDIBILITY.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="px-2 text-center md:px-4">
            <div className="text-[clamp(2rem,4vw,3.4rem)] leading-none text-bronze-hi">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isStatic={stat.static}
              />
            </div>
            <p className="mx-auto mt-4 max-w-[14ch] text-sm leading-snug text-mist">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

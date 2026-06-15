import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import ServiceCard from '../ServiceCard'
import { SERVICES } from '../../data/services'

export default function ServicesPreview() {
  return (
    <section className="shell py-28 md:py-36">
      <div className="mb-16 max-w-2xl">
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.6rem)] text-foam">
            Three services, one standard.
          </h2>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.1} className="h-full">
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

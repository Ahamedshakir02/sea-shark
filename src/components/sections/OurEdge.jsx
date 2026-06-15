import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import { EDGE } from '../../data/site'

export default function OurEdge() {
  return (
    <section className="border-t border-white/5 bg-hull">
      <div className="shell py-28 md:py-36">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Our edge</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.4rem)] text-foam">
                Why a vessel calls us back.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md leading-relaxed text-mist">
                No fleet of brochures, no wall of logos. The advantage is
                simpler: we own what we operate, and we answer when called.
              </p>
            </Reveal>
          </div>

          <ul className="md:border-l md:border-white/8">
            {EDGE.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                as="li"
                className="border-b border-white/8 py-7 md:pl-10"
              >
                <div className="flex gap-6">
                  <span className="font-data text-sm text-bronze/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl text-foam">{item.title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-mist">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

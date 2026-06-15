import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import MagneticButton from '../MagneticButton'
import ParallaxMedia from '../ParallaxMedia'

export default function FleetTeaser() {
  return (
    <section className="shell py-28 md:py-36">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <Eyebrow>Owned &amp; operated</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.6rem)] text-foam">
              Our vessels.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <MagneticButton to="/fleet" variant="ghost">
            View the fleet
          </MagneticButton>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <figure>
            <ParallaxMedia
              label="WATER BARGE — PHOTO"
              alt="Sea Shark water barge"
              ratio="aspect-[5/4]"
            />
            <figcaption className="mt-4 flex items-baseline justify-between">
              <span className="text-lg text-foam">Water barge</span>
              <span className="font-data text-xs uppercase tracking-[0.16em] text-mist">
                Fresh-water supply
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <figure>
            <ParallaxMedia
              label="CREW BOAT — PHOTO"
              alt="Sea Shark crew boat"
              ratio="aspect-[5/4]"
            />
            <figcaption className="mt-4 flex items-baseline justify-between">
              <span className="text-lg text-foam">Crew boat</span>
              <span className="font-data text-xs uppercase tracking-[0.16em] text-mist">
                Transfers &amp; transport
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

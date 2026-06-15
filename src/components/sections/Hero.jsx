import { motion } from 'framer-motion'
import OceanHero from '../ocean/OceanHero'
import MagneticButton from '../MagneticButton'
import Eyebrow from '../Eyebrow'
import { stagger, rise } from '../../lib/motion'
import { COMPANY } from '../../data/site'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <OceanHero />

      <div className="shell relative pt-24">
        <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-3xl">
          <motion.div variants={rise}>
            <Eyebrow>Khorfakkan Port · UAE</Eyebrow>
          </motion.div>

          <motion.h1
            variants={rise}
            className="mt-6 text-[clamp(2.8rem,8vw,6.2rem)] leading-[0.98] text-foam"
          >
            Marine services,
            <br />
            <span className="italic text-bronze-hi">mastered.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-7 max-w-xl text-lg leading-relaxed text-mist"
          >
            Fresh-water supply, crew transfers and ship agency from {COMPANY.base} —
            run on owned vessels, around the clock.
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton to="/contact">Request a service</MagneticButton>
            <MagneticButton to="/services" variant="ghost">
              Our services
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foam/25 p-1.5">
          <span className="block h-2 w-px animate-scroll-cue rounded-full bg-bronze" />
        </div>
      </div>
    </section>
  )
}

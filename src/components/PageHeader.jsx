import { motion } from 'framer-motion'
import Eyebrow from './Eyebrow'
import { stagger, rise } from '../lib/motion'

// Top-of-page header for inner routes. Padded to clear the fixed navbar.
export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <header className="shell relative pt-36 pb-20 md:pt-44 md:pb-24">
      <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-3xl">
        <motion.div variants={rise}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          variants={rise}
          className="mt-6 text-[clamp(2.6rem,6vw,5rem)] leading-[1] text-foam"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p variants={rise} className="mt-7 max-w-xl text-lg leading-relaxed text-mist">
            {lead}
          </motion.p>
        )}
      </motion.div>
      <div className="waterline mt-16" />
    </header>
  )
}

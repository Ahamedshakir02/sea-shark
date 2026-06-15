import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServiceIcon from './ServiceIcon'

/**
 * Premium service card. Lifts and reveals a bronze underline + arrow on hover.
 * The whole card is a router link to the detail view.
 */
export default function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className="group h-full"
    >
      <Link
        to={`/services/${service.slug}`}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-hull p-8 transition-colors duration-500 hover:border-bronze/40"
      >
        {/* index + icon */}
        <div className="flex items-start justify-between">
          <span className="font-data text-xs tracking-[0.2em] text-bronze/60">
            {service.index}
          </span>
          <span className="text-mist transition-colors duration-500 group-hover:text-bronze">
            <ServiceIcon name={service.icon} className="h-8 w-8" />
          </span>
        </div>

        <h3 className="mt-10 text-2xl text-foam">{service.title}</h3>
        <p className="mt-1 font-data text-[0.78rem] uppercase tracking-[0.16em] text-bronze/80">
          {service.tagline}
        </p>
        <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-mist">
          {service.summary}
        </p>

        <span className="mt-8 inline-flex items-center gap-2 font-data text-xs uppercase tracking-[0.16em] text-foam">
          Learn more
          <span className="h-px w-6 bg-bronze transition-all duration-300 group-hover:w-10" />
        </span>

        {/* bronze wash on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </Link>
    </motion.div>
  )
}

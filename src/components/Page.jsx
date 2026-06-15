import { motion } from 'framer-motion'
import { pageTransition } from '../lib/motion'

// Wraps every routed page so route-to-route transitions are consistent.
export default function Page({ children, className = '' }) {
  return (
    <motion.main
      id="main"
      tabIndex={-1}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`outline-none ${className}`}
    >
      {children}
    </motion.main>
  )
}

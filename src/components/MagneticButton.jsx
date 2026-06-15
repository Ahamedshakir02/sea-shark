import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../lib/useReducedMotion'

/**
 * A magnetic, bronze-accented CTA. Pointer movement nudges the button toward
 * the cursor with a soft spring. Disabled for touch / reduced-motion.
 * Renders as a router <Link> when `to` is given, else a <button>.
 */
export default function MagneticButton({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'solid', // 'solid' | 'ghost'
  className = '',
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 14 })
  const sy = useSpring(y, { stiffness: 180, damping: 14 })

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-data text-sm tracking-wide transition-colors duration-300 focus-visible:outline-bronze-hi'
  const styles =
    variant === 'solid'
      ? 'bg-bronze text-ink hover:bg-bronze-hi'
      : 'border border-bronze/40 text-foam hover:border-bronze hover:text-bronze-hi'

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  )

  const motionProps = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: reset,
    style: { x: sx, y: sy },
    className: `${base} ${styles} ${className}`,
  }

  if (to) {
    // tel:, mailto: and absolute URLs are real anchors, not router links.
    const isExternal = /^(tel:|mailto:|https?:)/.test(to)
    const LinkEl = isExternal ? 'a' : Link
    const linkProps = isExternal
      ? { href: to, ...(to.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}) }
      : { to }

    return (
      <motion.div style={{ x: sx, y: sy }} className="inline-block">
        <LinkEl
          ref={ref}
          {...linkProps}
          onMouseMove={onMove}
          onMouseLeave={reset}
          onClick={onClick}
          className={`${base} ${styles} ${className}`}
        >
          {inner}
        </LinkEl>
      </motion.div>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {inner}
    </motion.button>
  )
}

// Shared Framer Motion variants. Kept here so transitions stay consistent
// across routes and components. Easing is a slow, cinematic ease-out.

const EASE = [0.22, 1, 0.36, 1]

// Route-to-route transition: a quiet clip + fade, like a slow shutter.
export const pageTransition = {
  initial: { opacity: 0, y: 24, clipPath: 'inset(6% 0% 0% 0%)' },
  animate: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.7, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.4, ease: EASE },
  },
}

// Staggered children for hero copy and lists.
export const stagger = {
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

export const rise = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

export const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: EASE } },
}

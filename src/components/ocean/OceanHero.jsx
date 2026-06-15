import { Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { useReducedMotion } from '../../lib/useReducedMotion'

// Lazy so three.js never blocks first paint of the hero copy.
const Ocean = lazy(() => import('./Ocean'))

/**
 * Full-bleed animated ocean behind the hero. Falls back to a static painted
 * gradient when reduced motion is requested or while the 3D chunk loads.
 *
 * ASSET NOTE: to swap in real footage instead of the 3D ocean, replace the
 * <Canvas> block with a muted autoplay <video> and keep the overlays below.
 */
export default function OceanHero() {
  const reduced = useReducedMotion()

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      {/* Painted base — visible instantly, and the permanent reduced-motion view */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 8%, #16314e 0%, #0b1825 38%, #05090f 78%)',
        }}
        aria-hidden="true"
      />

      {!reduced && (
        <Suspense fallback={null}>
          <Canvas
            className="absolute inset-0"
            dpr={[1, 1.75]}
            camera={{ position: [0, 2.1, 6], fov: 55 }}
            gl={{ antialias: true, powerPreference: 'high-performance' }}
          >
            <Ocean />
          </Canvas>
        </Suspense>
      )}

      {/* Cinematic finishing: vignette + film grain */}
      <div className="vignette pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="grain-layer animate-grain pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
    </div>
  )
}

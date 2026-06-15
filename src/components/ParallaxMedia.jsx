import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../lib/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * A framed media slot with vertical parallax on its inner layer.
 *
 * ASSET SLOT: drop the real photo in via the `src` prop (or replace the
 * placeholder block below with an <img>). Until then it renders a tasteful
 * steel-gradient placeholder with the asset label so the slot is obvious.
 */
export default function ParallaxMedia({
  src,
  alt = '',
  label = 'IMAGE SLOT',
  className = '',
  ratio = 'aspect-[4/3]',
}) {
  const wrap = useRef(null)
  const layer = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !layer.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        layer.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [reduced])

  return (
    <div
      ref={wrap}
      className={`relative overflow-hidden rounded-2xl border border-white/8 ${ratio} ${className}`}
    >
      <div ref={layer} className="absolute inset-0 -top-[12%] h-[124%]">
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background:
                'linear-gradient(135deg, #15243a 0%, #0b1825 55%, #05090f 100%)',
            }}
          >
            <span className="font-data text-[0.7rem] uppercase tracking-[0.22em] text-bronze/50">
              {label}
            </span>
          </div>
        )}
      </div>
      {/* subtle inner vignette to keep placeholders cinematic */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
    </div>
  )
}

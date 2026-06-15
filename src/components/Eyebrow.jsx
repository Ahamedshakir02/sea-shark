import { COMPANY } from '../data/site'

/**
 * The signature recurring eyebrow. Defaults to the real Khorfakkan
 * position so the locator encodes something true about where the company
 * operates, rather than a decorative 01/02/03 counter.
 */
export default function Eyebrow({ children, coords = true, className = '' }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      {coords && (
        <span className="text-bronze/70" aria-hidden="true">
          {COMPANY.coords}
        </span>
      )}
      {coords && children && (
        <span className="h-px w-6 bg-bronze/40" aria-hidden="true" />
      )}
      {children && <span>{children}</span>}
    </p>
  )
}

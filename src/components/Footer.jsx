import { Link } from 'react-router-dom'
import { COMPANY, OFFICES, NAV } from '../data/site'
import { SERVICES } from '../data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-hull">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Brand + positioning */}
        <div>
          <p className="font-data text-sm uppercase tracking-[0.22em] text-foam">
            Sea&nbsp;Shark
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Marine services from {COMPANY.base} — owned and operated, available
            around the clock.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-bronze/30 px-3 py-1.5 font-data text-[0.7rem] uppercase tracking-[0.18em] text-bronze">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
            24/7 Operations
          </span>
        </div>

        {/* Nav */}
        <nav aria-label="Footer">
          <h2 className="eyebrow mb-4" >Navigate</h2>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-mist transition-colors hover:text-foam">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h2 className="eyebrow mb-4">Services</h2>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-sm text-mist transition-colors hover:text-foam">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="eyebrow mb-4">Contact</h2>
          <ul className="space-y-2.5 text-sm text-mist">
            <li>
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-foam">
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a href={`tel:${COMPANY.phoneHref}`} className="transition-colors hover:text-foam">
                {COMPANY.phone}
              </a>
            </li>
            {OFFICES.map((o) => (
              <li key={o.label} className="pt-1 leading-relaxed">
                {o.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="shell flex flex-col items-start justify-between gap-2 py-6 text-xs text-mist md:flex-row md:items-center">
          <p>© {year} {COMPANY.legalName}. All rights reserved.</p>
          <p className="font-data tracking-[0.14em] text-bronze/70">{COMPANY.coords}</p>
        </div>
      </div>
    </footer>
  )
}

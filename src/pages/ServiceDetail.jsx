import { useParams, Navigate, Link } from 'react-router-dom'
import Page from '../components/Page'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import ServiceIcon from '../components/ServiceIcon'
import ParallaxMedia from '../components/ParallaxMedia'
import MagneticButton from '../components/MagneticButton'
import { SERVICES, getService } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  // Unknown slug → bounce to the services index.
  if (!service) return <Navigate to="/services" replace />

  const idx = SERVICES.findIndex((s) => s.slug === slug)
  const next = SERVICES[(idx + 1) % SERVICES.length]

  return (
    <Page>
      <Seo title={service.title} description={service.summary} path={`/services/${service.slug}`} />

      <header className="shell relative pt-36 pb-16 md:pt-44">
        <Reveal>
          <Link to="/services" className="font-data text-xs uppercase tracking-[0.16em] text-mist transition-colors hover:text-foam">
            ← All services
          </Link>
        </Reveal>
        <div className="mt-10 flex items-start gap-6">
          <span className="mt-2 text-bronze">
            <ServiceIcon name={service.icon} className="h-10 w-10" />
          </span>
          <div>
            <Reveal>
              <Eyebrow>{service.tagline}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1] text-foam">
                {service.title}
              </h1>
            </Reveal>
          </div>
        </div>
        <div className="waterline mt-14" />
      </header>

      <section className="shell grid gap-14 pb-24 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
        <div>
          {service.detail.map((para, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="mb-6 text-lg leading-relaxed text-mist">{para}</p>
            </Reveal>
          ))}

          <Reveal>
            <ul className="mt-10 space-y-3">
              {service.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-foam">
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <MagneticButton to="/contact">Request this service</MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ParallaxMedia
            label={`${service.title.toUpperCase()} — PHOTO`}
            alt={service.title}
            ratio="aspect-[3/4]"
          />
        </Reveal>
      </section>

      {/* Next service */}
      <section className="border-t border-white/5 bg-hull">
        <Link to={`/services/${next.slug}`} className="group block">
          <div className="shell flex items-center justify-between py-14">
            <div>
              <p className="eyebrow">Next service</p>
              <p className="mt-3 text-[clamp(1.6rem,3.5vw,2.6rem)] text-foam transition-colors group-hover:text-bronze-hi">
                {next.title}
              </p>
            </div>
            <span className="font-display text-4xl text-bronze transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </Link>
      </section>
    </Page>
  )
}

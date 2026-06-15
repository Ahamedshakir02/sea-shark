import Page from '../components/Page'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import ContactCTA from '../components/sections/ContactCTA'
import { SERVICES } from '../data/services'
import { COMPANY } from '../data/site'

export default function Services() {
  return (
    <Page>
      <Seo
        title="Services"
        description="Barge fresh-water supply, crew boat transfers and ship agency from Khorfakkan Port. Bespoke survey, technical and commercial marine services."
        path="/services"
      />
      <PageHeader
        eyebrow="What we do"
        title={<>A clear range,<br />handled properly.</>}
        lead={COMPANY.positioning}
      />

      <section className="shell pb-28 md:pb-36">
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </Page>
  )
}

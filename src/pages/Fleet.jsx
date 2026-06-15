import Page from '../components/Page'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ParallaxMedia from '../components/ParallaxMedia'
import ContactCTA from '../components/sections/ContactCTA'

const VESSELS = [
  {
    name: 'Water barge',
    role: 'Fresh-water supply',
    blurb:
      'Our owned barge supplies fresh and potable water to vessels at anchorage and berth off Khorfakkan — scheduled and operated entirely in-house.',
    label: 'WATER BARGE — HERO PHOTO',
  },
  {
    name: 'Crew boat',
    role: 'Transfers & transport',
    blurb:
      'Our crew boat moves personnel and light stores between shore and vessel for crew changes, technical visits, surveys and agency attendance.',
    label: 'CREW BOAT — HERO PHOTO',
  },
]

export default function Fleet() {
  return (
    <Page>
      <Seo
        title="Fleet"
        description="The Sea Shark fleet — an owned and operated water barge and crew boat working out of Khorfakkan Port."
        path="/fleet"
      />
      <PageHeader
        eyebrow="Owned & operated"
        title={<>Two vessels,<br />under our own flag.</>}
        lead="We don't charter the work out. The barge and the crew boat are ours — which is why the standard is, too."
      />

      <section className="shell space-y-24 pb-28 md:space-y-32 md:pb-36">
        {VESSELS.map((v, i) => (
          <div
            key={v.name}
            className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
              i % 2 === 1 ? 'md:[&>figure]:order-2' : ''
            }`}
          >
            <Reveal as="figure">
              <ParallaxMedia label={v.label} alt={v.name} ratio="aspect-[4/3]" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">{v.role}</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] text-foam">{v.name}</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">{v.blurb}</p>
            </Reveal>
          </div>
        ))}
      </section>

      <ContactCTA />
    </Page>
  )
}

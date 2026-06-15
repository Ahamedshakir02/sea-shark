import Page from '../components/Page'
import Seo from '../components/Seo'
import Hero from '../components/sections/Hero'
import AboutStrip from '../components/sections/AboutStrip'
import CredibilityBand from '../components/sections/CredibilityBand'
import ServicesPreview from '../components/sections/ServicesPreview'
import OurEdge from '../components/sections/OurEdge'
import FleetTeaser from '../components/sections/FleetTeaser'
import ContactCTA from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <Page>
      <Seo
        title="Marine Services, Khorfakkan"
        description="Sea Shark Shipping Services LLC — barge fresh-water supply, crew boat transfers and ship agency from Khorfakkan Port, UAE. Owned and operated vessels, 24/7."
        path="/"
      />
      <Hero />
      <AboutStrip />
      <CredibilityBand />
      <ServicesPreview />
      <OurEdge />
      <FleetTeaser />
      <ContactCTA />
    </Page>
  )
}

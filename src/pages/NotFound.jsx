import Page from '../components/Page'
import Seo from '../components/Seo'
import MagneticButton from '../components/MagneticButton'

export default function NotFound() {
  return (
    <Page>
      <Seo title="Page not found" path="/404" />
      <section className="shell flex min-h-[70svh] flex-col items-center justify-center text-center">
        <p className="eyebrow">Off the chart</p>
        <h1 className="mt-6 text-[clamp(3rem,10vw,7rem)] text-foam">404</h1>
        <p className="mt-4 max-w-sm text-mist">
          This heading leads nowhere. Let’s get you back to open water.
        </p>
        <div className="mt-10">
          <MagneticButton to="/">Back to home</MagneticButton>
        </div>
      </section>
    </Page>
  )
}

import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'
import { startSwipeDots } from './swipe.js'
import { startImageLoading, firstPhoto, warmOtherPages } from './imageLoading.js'

const root = document.getElementById('root')
startImageLoading(root)
startSwipeDots(root)
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Hide the loader once the page, fonts and first images are ready (shown at least briefly, never stuck).
const loader = document.getElementById('loader')
if (loader) {
  const start = performance.now()
  let done = false
  const hide = () => {
    if (done) return
    done = true
    const wait = Math.max(0, 700 - (performance.now() - start))
    setTimeout(() => loader.classList.add('is-done'), wait) // kept: it is reused on page changes
  }
  // Also wait for the first big photo, so the page opens with its photo already in place.
  const ready = () => Promise.all([document.fonts ? document.fonts.ready : null, firstPhoto(root)])
  if (document.readyState === 'complete') ready().then(hide)
  else window.addEventListener('load', () => ready().then(hide), { once: true })
  setTimeout(hide, 3500)
}
window.addEventListener('load', warmOtherPages, { once: true })

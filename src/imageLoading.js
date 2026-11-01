// Smooth photo loading: fade each photo in once it has fully downloaded,
// let the loader wait for the first big photo, and warm up other pages' photos when idle.
import { PHOTOS, SERVICES, photo } from './content.js'

const urlOf = (el) => {
  const m = (el.style.getPropertyValue('--img') || '').match(/url\(["']?(.*?)["']?\)/)
  return m ? m[1] : null
}

const pending = new Map()
export const preload = (url) => {
  if (!pending.has(url)) {
    pending.set(url, new Promise((resolve) => {
      const i = new Image()
      i.decoding = 'async'
      i.onload = i.onerror = () => (i.decode ? i.decode().catch(() => {}) : Promise.resolve()).then(resolve)
      i.src = url
    }))
  }
  return pending.get(url)
}

const markImg = (img) => {
  if (img.dataset.fadeSet) return
  img.dataset.fadeSet = '1'
  if (img.complete && img.naturalWidth) return // already there (cached): no fade needed
  img.classList.add('fade')
  const done = () => img.classList.add('is-loaded')
  img.addEventListener('load', done, { once: true })
  img.addEventListener('error', done, { once: true })
}

const markBg = (el) => {
  const url = urlOf(el)
  if (!url || el.dataset.bgUrl === url) return
  el.dataset.bgUrl = url
  el.classList.remove('bg-loaded')
  preload(url).then(() => { if (el.dataset.bgUrl === url) el.classList.add('bg-loaded') })
}

const scan = (root) => {
  if (!(root instanceof Element)) return
  if (root.tagName === 'IMG') markImg(root)
  if (root.style && root.style.getPropertyValue('--img')) markBg(root)
  root.querySelectorAll('img').forEach(markImg)
  root.querySelectorAll('[style*="--img"]').forEach(markBg)
}

export function startImageLoading(root) {
  scan(root)
  new MutationObserver((list) => {
    for (const m of list) {
      if (m.type === 'attributes') scan(m.target)
      else m.addedNodes.forEach(scan)
    }
  }).observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] })
}

// The first big photo on screen, so the loader can wait for it (the caller caps the wait).
export const firstPhoto = (root) => {
  const el = root.querySelector('[style*="--img"]')
  const url = el && urlOf(el)
  return url ? preload(url) : Promise.resolve()
}

// After the page settles, quietly fetch the top photos of the other pages so switching is instant.
export function warmOtherPages() {
  const c = navigator.connection
  if (c && (c.saveData || /2g/.test(c.effectiveType || ''))) return
  // Same widths the page tops ask for, so the browser cache serves them later.
  const tops = [[PHOTOS.bulkCarrierWake, 1400], [PHOTOS.bargeAerial, 2000], [PHOTOS.tankerDeckDusk, 1400],
    ...SERVICES.map((s) => [s.banner, 1600])]
  const run = () => tops.filter(([id]) => id && id.startsWith('photo-')).forEach(([id, w], n) =>
    setTimeout(() => preload(photo(id, w)), n * 400))
  ;(window.requestIdleCallback || ((f) => setTimeout(f, 1500)))(run, { timeout: 4000 })
}

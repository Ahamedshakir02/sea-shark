import { useEffect } from 'react'

/**
 * Lightweight per-route head management (no extra dependency).
 * Updates the document title and the description / OG tags already present
 * in index.html so each page is individually shareable and indexable.
 */
export default function Seo({ title, description, path = '' }) {
  useEffect(() => {
    const full = title
      ? `${title} — Sea Shark Shipping Services LLC`
      : 'Sea Shark Shipping Services LLC — Marine Services, Khorfakkan'
    document.title = full

    const set = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el && value) el.setAttribute(attr, value)
    }

    if (description) {
      set('meta[name="description"]', 'content', description)
      set('meta[property="og:description"]', 'content', description)
    }
    set('meta[property="og:title"]', 'content', full)
    set('link[rel="canonical"]', 'href', `https://www.seasharkuae.com${path}`)
    set('meta[property="og:url"]', 'content', `https://www.seasharkuae.com${path}`)
  }, [title, description, path])

  return null
}

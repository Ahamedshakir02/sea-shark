// ──────────────────────────────────────────────────────────────────
// Single source of truth for all company facts.
// RULE: nothing here may be invented. Awards, client counts, fleet size,
// "years of experience", and global offices are intentionally absent.
// ──────────────────────────────────────────────────────────────────

export const COMPANY = {
  legalName: 'Sea Shark Shipping Services LLC',
  shortName: 'Sea Shark',
  founded: '2023',
  country: 'UAE',
  base: 'Khorfakkan Port',
  // Real Khorfakkan coordinates — used as the recurring locator eyebrow.
  coords: '25.34°N · 56.35°E',
  positioning:
    'Bespoke survey, technical, agency and commercial marine services — built on safety, integrity, professionalism and continuous improvement.',
  email: 'ops@seasharkuae.com',
  phone: '+971 56 673 5968',
  phoneHref: '+971566735968',
}

export const OFFICES = [
  { city: 'Dubai', area: "Al Bada'a", label: "Al Bada'a, Dubai" },
  { city: 'Sharjah', area: 'Al Fisht 1', label: 'Al Fisht 1, Sharjah' },
]

// Honest credibility signals only — no faked scale.
export const CREDIBILITY = [
  { value: 2023, prefix: 'Est. ', label: 'Founded in the UAE', static: false },
  { value: 'Khorfakkan', label: 'Operational port base', static: true },
  { value: 24, suffix: '/7', label: 'Operations & response', static: false },
  { value: 'Owned', label: 'Barge & crew boat, operated in-house', static: true },
]

export const EDGE = [
  {
    title: 'We own our vessels',
    body: 'A water barge and crew boat operated in-house — not chartered, not subcontracted. Direct control over readiness and standards.',
  },
  {
    title: 'Based at Khorfakkan',
    body: 'A working presence at one of the region’s key bunkering and anchorage ports, with line of sight to the vessels we serve.',
  },
  {
    title: 'Available around the clock',
    body: 'Marine work does not keep office hours. We coordinate supply and transfers on the vessel’s schedule, not ours.',
  },
  {
    title: 'Safety before speed',
    body: 'Every job is run to a safety-first standard. Integrity and professionalism are the baseline, not the upsell.',
  },
]

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Contact', to: '/contact' },
]

export const INQUIRY_REASONS = [
  'Barge — fresh water supply',
  'Crew boat — transfer / transport',
  'Ship agency',
  'General enquiry',
]

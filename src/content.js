// All business details in one place, so updates never touch the layout.
export const WHATSAPP_NUMBER = '971566735968'
export const PHONE_DISPLAY = '+971 56 673 5968'
export const PHONE_LINK = 'tel:+971566735968'
export const EMAIL = 'ops@seasharkuae.com'
export const PORTS_LINE = 'Serving ships at Khorfakkan and Fujairah · Offices in Sharjah and Dubai'

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#fleet', label: 'Our barge' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export const SERVICES = [
  {
    id: 'water',
    title: 'Fresh water supply',
    text: 'Clean drinking water delivered by our own barge to ships at anchor or alongside. Book ahead or call us when you need it.',
    cta: 'Order water on WhatsApp',
    wa: 'Hello Sea Shark, I need fresh water supply. Vessel: ... Location: ... Quantity: ...',
  },
  {
    id: 'crew',
    title: 'Crew boat service',
    text: 'As your agent, we arrange crew boats for crew changes, crew transfers, stores and light cargo between shore and ship.',
    cta: 'Book a crew boat',
    wa: 'Hello Sea Shark, I need a crew boat. Vessel: ... Date and time: ...',
  },
  {
    id: 'agency',
    title: 'Ship agency',
    text: 'We look after your port call from arrival to sailing: husbandry, coordination, surveys, technical support, paperwork and clearance.',
    cta: 'Ask about agency',
    wa: 'Hello Sea Shark, I need ship agency support. Vessel: ... ETA: ...',
  },
]

export const STATS = [
  { label: 'Since', value: '2023' },
  { label: 'Own vessel', value: '1' },
  { label: 'Ports', value: 'Khorfakkan & Fujairah' },
]

export const VALUES = ['Safety', 'Integrity', 'Professionalism', 'Always improving']

export const CONTACTS = [
  { label: 'Phone', text: PHONE_DISPLAY, href: PHONE_LINK },
  { label: 'Operations email', text: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Sharjah office', text: 'Al Fisht 1, Sharjah', href: 'https://maps.google.com/?q=Al+Fisht+1+Sharjah', external: true },
  { label: 'Dubai office', text: "Al Bada'a, Dubai", href: "https://maps.google.com/?q=Al+Bada'a+Dubai", external: true },
]

export const HOURS = 'Mon to Fri 9am to 5pm · Sat 9am to 1pm · Sun closed'

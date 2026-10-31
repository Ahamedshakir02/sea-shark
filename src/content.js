// All business details and page copy in one place, so updates never touch the layout.
// Only facts the client has confirmed go here: no invented numbers, reviews or 24/7 claims.

export const WHATSAPP_NUMBER = '971566735968'
export const PHONE_DISPLAY = '+971 56 673 5968'
export const PHONE_LINK = 'tel:+971566735968'
export const EMAIL = 'ops@seasharkuae.com'
export const PORTS_LINE = 'Serving ships at Khorfakkan and Fujairah · Offices in Sharjah and Dubai'
export const HOURS = 'Mon to Fri 9am to 5pm · Sat 9am to 1pm · Sun closed'

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

// Photos: free Unsplash images (hotlinked, sized per use) plus the client's own barge photo.
export const photo = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=72&auto=format&fit=crop`

export const PHOTOS = {
  tankerSunset: 'photo-1496347326319-2935d381b307',
  tankerAerial: 'photo-1518527989017-5baca7a58d3c',
  tugFront: 'photo-1548222277-9f99bfec1555',
  tugCity: 'photo-1605676103133-df5f92882cae',
  portAerial: 'photo-1724364552281-dbed323c4633',
  ropeDeck: 'photo-1602595715098-2aa51402967d',
  ropeCoil: 'photo-1519142891393-97f6fce43ee4',
  boatWake: 'photo-1552160757-52790c6f4faf',
  stormSunset: 'photo-1437385545573-fcf5b4b7fb57',
}

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/our-barge', label: 'Our barge' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const SERVICES = [
  {
    slug: 'fresh-water',
    icon: 'water',
    title: 'Fresh water supply',
    short: 'Clean drinking water delivered by our own barge, Malik, to ships at anchor or alongside.',
    photo: 'malik',
    banner: PHOTOS.tankerAerial,
    intro:
      'Running low on fresh water should never hold a ship up. Malik, our own water barge, brings clean drinking water out to vessels at anchor or alongside at Khorfakkan and Fujairah. Because we own and run the barge ourselves, we set the schedule, not a third party.',
    includes: [
      'Drinking water delivered by our own barge, Malik',
      'Supply to ships at anchor or alongside',
      'Deliveries at Khorfakkan and Fujairah',
      'Bookings in advance or at short notice',
      'One contact from first message to delivery',
    ],
    send: ['Vessel name', 'Where the ship is (port, berth or anchorage)', 'Quantity of water needed', 'When you need it'],
    wa: 'Hello Sea Shark, I need fresh water supply. Vessel: ... Location: ... Quantity: ... When: ...',
    cta: 'Order water on WhatsApp',
  },
  {
    slug: 'crew-boats',
    icon: 'crew',
    title: 'Crew boat service',
    short: 'Crew changes, transfers, stores and light cargo moved between shore and ship.',
    photo: PHOTOS.tugFront,
    banner: PHOTOS.tugCity,
    intro:
      'Crew changes and small deliveries are often planned around tight windows. As your agent, we arrange crew boats at Khorfakkan and Fujairah to move people, stores and light cargo between shore and ship, and we keep you updated until the job is done.',
    includes: [
      'Crew changes, sign-on and sign-off',
      'Crew transfers between shore and ship',
      'Delivery of ship stores and spare parts',
      'Light cargo runs to vessels at anchor',
      'Arranged and followed up by our team as your agent',
    ],
    send: ['Vessel name', 'Where the ship is', 'Number of people or what needs moving', 'Date and time'],
    wa: 'Hello Sea Shark, I need a crew boat. Vessel: ... Location: ... People or cargo: ... Date and time: ...',
    cta: 'Book a crew boat',
  },
  {
    slug: 'ship-agency',
    icon: 'agency',
    title: 'Ship agency',
    short: 'Your port call handled from arrival to sailing: coordination, paperwork and clearance.',
    photo: PHOTOS.portAerial,
    banner: PHOTOS.portAerial,
    intro:
      'A port call has many moving parts. We act as your agent on the UAE east coast, so owners, operators and masters deal with one team that coordinates the call, handles the paperwork and keeps everyone informed.',
    includes: [
      'Port call coordination with the port and local parties',
      'Husbandry: crew changes, stores and supplies',
      'Surveys and technical support',
      'Commercial support for owners and operators',
      'Documents and clearance',
    ],
    send: ['Vessel name and IMO number', 'Port and ETA', 'What the call involves', 'Owner or operator contact'],
    wa: 'Hello Sea Shark, I need ship agency support. Vessel: ... Port: ... ETA: ...',
    cta: 'Ask about agency',
  },
]

export const STATS = [
  { label: 'Founded', value: '2023' },
  { label: 'Combined marine experience', value: '20+ yrs' },
  { label: 'Own water barge', value: '1' },
  { label: 'Ports served', value: '2' },
]

export const STEPS = [
  { title: 'Message us', text: 'Send your vessel name, location and what you need on WhatsApp, or call us.' },
  { title: 'We confirm', text: 'We check the job, agree the timing with you and keep you posted.' },
  { title: 'Job done', text: 'Water delivered, crew moved or port call handled. One contact the whole way.' },
]

export const PLACES = [
  { name: 'Khorfakkan Port', type: 'Port', text: 'Fresh water, crew boats and agency for ships calling at Khorfakkan.' },
  { name: 'Fujairah', type: 'Port and anchorage', text: 'Supply and support for vessels at Fujairah.' },
  { name: 'Al Fisht 1, Sharjah', type: 'Office', text: 'Our Sharjah office. Open Mon to Fri 9 to 5, Sat 9 to 1.' },
  { name: "Al Bada'a, Dubai", type: 'Office', text: 'Our Dubai office.' },
]

export const VALUES = [
  { name: 'Safety', text: 'Every transfer and delivery is planned with people and vessels kept safe first.' },
  { name: 'Integrity', text: 'Clear answers, honest timings and no surprises on the job.' },
  { name: 'Professionalism', text: 'We work to the standard ship owners and masters expect.' },
  { name: 'Always improving', text: 'We are a young company and we keep getting better at what we do.' },
]

export const WHY = [
  { title: 'Our own barge', text: 'Malik is ours, so fresh water runs on our schedule.' },
  { title: 'Local ports', text: 'We work at Khorfakkan and Fujairah every day.' },
  { title: 'One contact', text: 'One team on WhatsApp from first message to job done.' },
  { title: 'Experienced hands', text: 'Founders with more than 20 years of combined marine experience.' },
]

export const CONTACTS = [
  { label: 'Phone', text: PHONE_DISPLAY, href: PHONE_LINK },
  { label: 'Operations email', text: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Sharjah office', text: 'Al Fisht 1, Sharjah', href: 'https://maps.google.com/?q=Al+Fisht+1+Sharjah', external: true },
  { label: 'Dubai office', text: "Al Bada'a, Dubai", href: "https://maps.google.com/?q=Al+Bada'a+Dubai", external: true },
]

// All business details and page copy in one place, so updates never touch the layout.
// Only facts the client has confirmed go here: no invented numbers, reviews or 24/7 claims.

export const WHATSAPP_NUMBER = '971566735968'
export const PHONE_DISPLAY = '+971 56 673 5968'
export const PHONE_LINK = 'tel:+971566735968'
export const EMAIL = 'ops@seasharkuae.com'
export const HOURS = 'Mon to Fri 9am to 5pm · Sat 9am to 1pm · Sun closed'

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

// Photos: free Unsplash images (hotlinked, sized per use) plus the client's own barge photo.
// Width is capped to what this screen can show (larger side, for cover photos), so small screens download smaller files.
const screenCap = () => {
  if (typeof window === 'undefined') return 2000
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  return Math.ceil((Math.max(window.innerWidth, window.innerHeight) * dpr) / 200) * 200
}
export const photo = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${Math.min(w, screenCap())}&q=60&auto=format&fit=crop`

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
  tankerDeckDusk: 'photo-1763699934108-a57e41e91a01',
  tankerBowSunset: 'photo-1598408745613-178751e2ccde',
  bulkCarrierWake: 'photo-1568347877321-f8935c7dc5a3',
  containerTugs: 'photo-1606185540834-d6e7483ee1a4',
  craneShip: 'photo-1670121180530-cfcba4438038',
  terminalDusk: 'photo-1769837496184-32831581c55a',
  tankersAnchor: 'photo-1569350818415-ffe59f37e028',
  bargeAerial: 'photo-1640269892407-ebc38e0f0c54',
  wakeAerial: 'photo-1616580621828-a503bb2a3d77',
  tugContainer: 'photo-1569158065797-f406b86c3b3e',
  redTug: 'photo-1596433686857-874561edccf3',
  tugHarbour: 'photo-1775446408099-55ac754e652d',
  tankerAerialRed: 'photo-1582517378602-f109b395ce40',
  shipBlueSea: 'photo-1642864835712-a9e172ceeafe',
  tankerAerialGreen: 'photo-1699588999922-730553a918d0',
  tugWaves: 'photo-1614894970666-40d6db9c7d55',
  shipFrontSea: 'photo-1598625802173-8ff2d54dde02',
  shipNight: 'photo-1502621737164-fb78cb47e276',
  shipRedSky: 'photo-1530890448995-4d82724f702c',
}

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/our-barge', label: 'Our barge' },
  { to: '/ports-and-faq', label: 'Ports & FAQ' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const SERVICES = [
  {
    slug: 'fresh-water',
    icon: 'water',
    photo: 'malik',
    row: PHOTOS.tankerAerialGreen,
    tile: PHOTOS.tankerAerialRed,
    band: PHOTOS.wakeAerial,
    title: 'Fresh water supply',
    kicker: 'Our own barge',
    short: 'Drinking water delivered by Malik, the barge we own and run, to ships at Khorfakkan.',
    banner: PHOTOS.tankerAerial,
    intro:
      'Running low on fresh water should never hold a ship up. Malik, our own water barge, brings drinking water out to vessels at Khorfakkan. Because we own the barge, we plan the delivery around your ship, not around someone else\'s timetable.',
    includes: [
      { title: 'Our own barge', text: 'Every delivery is made by Malik, which we own and look after ourselves.' },
      { title: 'At anchor', text: 'We take the water out to ships waiting at anchor.' },
      { title: 'Alongside on request', text: 'Ship at a berth? Ask us on WhatsApp and we will tell you what we can arrange.' },
      { title: 'At Khorfakkan', text: 'Deliveries to ships calling at Khorfakkan.' },
      { title: 'Ahead or short notice', text: 'Book days ahead, or message us when the need comes up.' },
      { title: 'Clear paperwork', text: 'A delivery note signed on board for the quantity supplied.' },
    ],
    process: [
      { title: 'You message us', text: 'Vessel, position, quantity and when you need it.' },
      { title: 'We confirm', text: 'Time, place and quantity agreed with you or your agent.' },
      { title: 'Malik comes alongside', text: 'The barge moors to your ship and the hose is connected.' },
      { title: 'Water delivered', text: 'The agreed quantity is pumped across and measured.' },
      { title: 'Signed off', text: 'Paperwork signed and the barge casts off.' },
    ],
    send: ['Vessel name and IMO', 'Position (port, berth or anchorage)', 'Quantity of water', 'Date and time needed', 'Agent or master contact'],
    wa: 'Hello Sea Shark, I need fresh water. Vessel: ... Position: ... Quantity: ... When: ...',
    cta: 'Order water on WhatsApp',
    urgent: 'Need water today?',
    faq: [
      { q: 'Do you deliver water to ships at anchor?', a: 'Yes. Malik takes water out to ships at anchor at Khorfakkan.' },
      { q: 'How quickly can you deliver?', a: 'It depends on where the ship is and how much water is needed. Send us the vessel, position and quantity and we give you a time straight away.' },
    ],
  },
  {
    slug: 'ship-agency',
    icon: 'agency',
    photo: PHOTOS.portAerial,
    row: PHOTOS.craneShip,
    tile: PHOTOS.tugContainer,
    band: PHOTOS.shipNight,
    title: 'Ship agency',
    kicker: 'One team for the port call',
    short: 'Your port call handled on the UAE east coast: arrival, paperwork, husbandry and sailing.',
    banner: PHOTOS.containerTugs,
    intro:
      'A port call has many moving parts. As your agent at Khorfakkan, we are the one team that owners, operators and masters deal with, from the first ETA message to the moment the ship sails.',
    includes: [
      { title: 'Port call coordination', text: 'We line up the port, authorities and local parties before the ship arrives.' },
      { title: 'Documents and clearance', text: 'Arrival and departure paperwork prepared and filed for you.' },
      { title: 'Husbandry and supplies', text: 'Stores, provisions, spare parts and mail arranged and brought to the ship.' },
      { title: 'Crew change support', text: 'Sign-on and sign-off, transport and hotel for the crew.' },
      { title: 'Surveys arranged', text: 'We book surveyors and inspectors and get them out to the vessel.' },
      { title: 'Technical and commercial support', text: 'Help for owners and operators with what the call needs.' },
      { title: 'Cash to master', text: 'Cash delivered to the master on request.' },
      { title: 'Waste removal', text: 'Garbage and sludge removal arranged with licensed contractors.' },
    ],
    process: [
      { title: 'Appoint us', text: 'Send the vessel, ETA and what the call involves.' },
      { title: 'Pre-arrival', text: 'We prepare documents and line up everyone needed.' },
      { title: 'In port', text: 'We coordinate the work and keep you updated.' },
      { title: 'Sailing', text: 'Departure cleared and a short report sent to you.' },
    ],
    send: ['Vessel name and IMO', 'Port and ETA', 'What the call involves', 'Owner or operator contact'],
    wa: 'Hello Sea Shark, I need ship agency support. Vessel: ... Port: ... ETA: ...',
    cta: 'Appoint us as agent',
    urgent: 'Ship arriving soon?',
    faq: [
      { q: 'Which port do you cover?', a: 'Khorfakkan, on the UAE east coast.' },
      { q: 'Can you arrange a crew change?', a: 'We arrange the boat out to the ship. Message us on WhatsApp with the details and we will tell you what else we can handle.' },
    ],
  },
  {
    slug: 'crew-boats',
    icon: 'crew',
    photo: PHOTOS.tugFront,
    row: PHOTOS.redTug,
    tile: PHOTOS.tugHarbour,
    band: PHOTOS.shipFrontSea,
    title: 'Crew boats',
    kicker: 'Arranged as your agent',
    short: 'We arrange the right boat to move crew, stores and light cargo between shore and ship.',
    banner: PHOTOS.tugCity,
    intro:
      'We don\'t own crew boats, and we don\'t pretend to. As your agent, we book the right boat for the job at Khorfakkan, plan it around your ship and stay with it until everyone and everything is where it should be.',
    includes: [
      { title: 'Crew changes at anchor', text: 'People moved safely between shore and ship.' },
      { title: 'Stores and spares', text: 'Ship stores and spare parts delivered to the vessel.' },
      { title: 'Light cargo runs', text: 'Small loads taken out to ships at anchor.' },
      { title: 'Surveyor and agent transfers', text: 'Inspectors, surveyors and agents taken out and back.' },
      { title: 'The right boat', text: 'We pick a boat that suits the people, load and weather.' },
      { title: 'Followed up', text: 'We track the job and tell you when it is done.' },
    ],
    process: [
      { title: 'Tell us the job', text: 'How many people, what load, from where to where.' },
      { title: 'We book the boat', text: 'Right size, right time, confirmed back to you.' },
      { title: 'Transfer', text: 'Boat goes out, people and goods move across.' },
      { title: 'Done', text: 'We confirm the job is complete.' },
    ],
    send: ['Vessel name', 'Ship position', 'Number of people', 'Cargo weight or size', 'Pickup point, date and time'],
    wa: 'Hello Sea Shark, I need a crew boat. Vessel: ... Position: ... People: ... Cargo: ... When: ...',
    cta: 'Book a crew boat',
    urgent: 'Need a boat today?',
    faq: [
      { q: 'Do you own crew boats?', a: 'No. We own one vessel, the water barge Malik. For crew boats we act as your agent and book the right boat for the job.' },
      { q: 'How many people can a boat take?', a: 'It depends on the boat we book. Tell us how many people and how much cargo, and we pick a boat that fits.' },
    ],
  },
]

export const STATS = [
  { label: 'Founded', value: '2023' },
  { label: 'Combined marine experience', value: '20+ yrs' },
  { label: 'Own water barge', value: '1' },
  { label: 'Offices, Sharjah and Dubai', value: '2' },
]

export const STEPS = [
  { title: 'Message us', text: 'Vessel name, position and what you need, on WhatsApp or by phone.' },
  { title: 'We confirm', text: 'We check the job, agree the timing and keep you posted.' },
  { title: 'Job done', text: 'Water delivered, crew moved or port call handled. One contact all the way.' },
]

export const PLACES = [
  { name: 'Khorfakkan Port', type: 'Port', text: 'Fresh water, crew boats and agency for ships calling at Khorfakkan.' },
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
  { title: 'We own the barge', text: 'Malik is ours, so fresh water runs on our schedule, not a third party\'s.' },
  { title: 'Easy to reach', text: 'Message us on WhatsApp or call during office hours.' },
  { title: 'One team, start to finish', text: 'The same people handle your job from first message to done.' },
  { title: 'Experienced hands', text: 'Founders with more than 20 years of combined marine experience.' },
]

export const CONTACTS = [
  { label: 'Phone', text: PHONE_DISPLAY, href: PHONE_LINK },
  { label: 'Operations email', text: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Sharjah office', text: 'Al Fisht 1, Sharjah', href: 'https://maps.google.com/?q=Al+Fisht+1+Sharjah', external: true },
  { label: 'Dubai office', text: "Al Bada'a, Dubai", href: "https://maps.google.com/?q=Al+Bada'a+Dubai", external: true },
]

export const HOURS_ROWS = [
  ['Monday to Friday', '9:00 to 17:00'],
  ['Saturday', '9:00 to 13:00'],
  ['Sunday', 'Closed'],
]

export const PORTS = [
  { id: 'khorfakkan', name: 'Khorfakkan', coords: '25.35° N · 56.36° E', photo: PHOTOS.terminalDusk,
    lead: 'A deep-water port on the Gulf of Oman, inside the Emirate of Sharjah.',
    work: [{ text: 'Fresh water from Malik to ships at anchor' }, { text: 'Crew boats arranged for crew changes and stores' }, { text: 'Ship agency for port calls' }] },
]

export const SAFETY = [
  { title: 'Safe transfers', text: 'Every crew move and delivery is planned around people first, then weather and sea state.' },
  { title: 'Clean water handling', text: "Malik's tanks and hoses are kept for drinking water only and looked after by us." },
  { title: 'Port rules followed', text: 'We work inside the port rules and keep the right people informed.' },
  { title: 'Clear paperwork', text: 'Quantities, times and jobs recorded, so there are no surprises later.' },
]

export const BARGE_SPECS = [
  { k: 'Name', v: 'Malik' },
  { k: 'Type', v: 'Fresh water supply barge' },
  { k: 'Owner', v: 'Sea Shark Shipping Services LLC' },
  { k: 'Works at', v: 'Khorfakkan' },
]

export const FAQ = [
  { q: 'How quickly can you deliver fresh water?', a: 'It depends on where the ship is and how much water is needed. Send us the vessel, position and quantity on WhatsApp and we will give you a time straight away.' },
  { q: 'What do you need from us to book?', a: 'Vessel name and IMO, where the ship is, what you need and when. For water add the quantity, for crew boats add the number of people and any cargo.' },
  { q: 'Do you deliver water to ships at anchor?', a: 'Yes. Malik takes water out to ships at anchor at Khorfakkan.' },
  { q: 'Can you deliver to ships alongside?', a: 'Ask us on WhatsApp for your berth and we will confirm.' },
  { q: 'Do you own crew boats?', a: 'No. We own one vessel, the water barge Malik. For crew boats we act as your agent and book the right boat for the job.' },
  { q: 'Can you arrange a crew change?', a: 'We arrange the boat out to the ship. Message us on WhatsApp with the details and we will tell you what else we can handle.' },
  { q: 'What are your office hours?', a: 'Monday to Friday 9:00 to 17:00, Saturday 9:00 to 13:00, closed Sunday.' },
  { q: 'How do we pay?', a: 'We agree payment terms with you before the job.' },
]

// Which service runs at which port (shown as a table on Ports & FAQ).
export const PORT_TABLE = [
  { service: 'Fresh water at anchor', khorfakkan: 'yes' },
  { service: 'Crew boats (arranged)', khorfakkan: 'yes' },
  { service: 'Ship agency', khorfakkan: 'yes' },
]

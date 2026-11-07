// All business details and page copy in one place, so updates never touch the layout.
// Only facts the client has confirmed go here: no invented numbers, reviews or 24/7 claims.

// Main line: fresh water and crew boats.
export const WHATSAPP_NUMBER = '971545439022'
// Shown numbers use non-breaking spaces so they never split across two lines.
export const PHONE_DISPLAY = '+971\u00a054\u00a0543\u00a09022'
export const PHONE_LINK = 'tel:+971545439022'
// Ship agency line.
export const AGENT_WHATSAPP = '971566735968'
export const AGENT_PHONE_DISPLAY = '+971\u00a056\u00a0673\u00a05968'
export const AGENT_PHONE_LINK = 'tel:+971566735968'
export const EMAIL = 'ops@seasharkuae.com'

// Clients usually open with this question, so the message starts with it.
export const WATER_MESSAGE = 'Hello Sea Shark, is fresh water available? Vessel: ... Location: ... Quantity: ... When: ...'

export const waLink = (text, number = WHATSAPP_NUMBER) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`

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
  diver: 'photo-1742325989789-b42912a531dd',
  diverPair: 'photo-1544551763-46a013bb70d5',
  shipDeck: 'photo-1775145408468-ec55b208f645',
  containerYard: 'photo-1494412519320-aa613dfb7738',
}

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/services/ship-agency', label: 'Ship Agency' },
  { to: '/services/marine-survey', label: 'Marine Survey' },
  { to: '/services/underwater-services', label: 'Underwater Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

// Extra links shown in the footer only.
export const MORE_LINKS = [
  { to: '/services', label: 'All Services' },
  { to: '/ports-and-faq', label: 'Port & FAQ' },
]

export const SERVICES = [
  {
    slug: 'ship-agency',
    icon: 'agency',
    photo: PHOTOS.portAerial,
    row: PHOTOS.craneShip,
    tile: PHOTOS.tugContainer,
    band: PHOTOS.shipNight,
    title: 'Ship Agency',
    kicker: 'Our Core Service',
    short: 'Port agency at Khorfakkan for owners, operators and charterers: clearance, husbandry, crew and reporting, from ETA to sailing.',
    banner: PHOTOS.containerTugs,
    intro:
      'Ship agency is the centre of what we do. As your appointed agent at Khorfakkan, we represent your vessel in port and act as the single point of contact for owners, operators, charterers and masters, from the first ETA notice until the ship has sailed.',
    more:
      'A well-\u2060run port call depends on preparation. We plan ahead of arrival, coordinate the port, authorities and local suppliers during the call, and keep you informed at each stage, so the vessel turns around without avoidable delay.',
    groups: [
      { title: 'Port Call Management', items: [
        { title: 'Full Port Agency', text: 'We represent the vessel in port and act as the single contact for every party involved in the call.' },
        { title: 'Pre-\u2060Arrival Planning', text: 'ETA, berth or anchorage and port requirements prepared before the vessel arrives.' },
        { title: 'Berth, Pilot and Tug Bookings', text: 'Berthing, pilotage, towage and mooring arranged with the port.' },
        { title: 'Clearance and Documentation', text: 'Inward and outward clearance with port, customs and immigration, prepared and filed for you.' },
        { title: 'Port Cost Estimates and Accounts', text: 'A proforma estimate (PDA) before arrival and a final account (FDA) after sailing, with supporting invoices.' },
        { title: 'Updates and Sailing Report', text: 'Progress updates during the call and a statement of facts when the ship sails.' },
      ] },
      { title: 'Husbandry and Crew', items: [
        { title: 'Crew Change Support', text: 'Sign-\u2060on and sign-\u2060off, with transport and hotel arranged for the crew.' },
        { title: 'Crew Visas and Travel', text: 'Shore passes, visas and travel arrangements coordinated for joining and leaving crew.' },
        { title: 'Medical Assistance', text: 'Doctor and hospital visits arranged for crew members who need care ashore.' },
        { title: 'Stores and Provisions', text: 'Ship stores and provisions arranged and delivered to the vessel.' },
        { title: 'Cash to Master', text: 'Cash delivered to the master on request.' },
        { title: 'Mail and Documents', text: 'Ship mail and documents collected and delivered on board.' },
      ] },
      { title: 'Owners\' and cargo interests', items: [
        { title: 'Protective Agency', text: 'When the charterer appoints the port agent, we look after the owner\'s interests during the call.' },
        { title: 'Cargo Documentation', text: 'Cargo papers, manifests and notices prepared and exchanged with the right parties.' },
        { title: 'Bunker Call Coordination', text: 'Bunker deliveries coordinated with the supplier, the port and the vessel.' },
        { title: 'Spare Parts Clearance and Delivery', text: 'Spares cleared through customs and delivered to the ship on time for her call.' },
        { title: 'Technical and Commercial Support', text: 'Practical help for owners and operators with what the call requires.' },
      ] },
      { title: 'Vessel Services', items: [
        { title: 'Marine Surveys', text: 'On-\u2060hire, off-\u2060hire, draft and condition surveys carried out on board.' },
        { title: 'Underwater Services', text: 'Hull inspection, hull cleaning and propeller polishing by divers.' },
        { title: 'Repair and Dry Dock Coordination', text: 'Repair teams and workshops lined up for work during the call.' },
        { title: 'Waste Removal', text: 'Garbage and sludge removal arranged with licensed contractors.' },
        { title: 'Fresh Water and Crew Boats', text: 'Fresh water from our own barge, Malik, and crew boats arranged with the call.' },
      ] },
    ],
    who: ['Ship owners', 'Operators and ship managers', 'Charterers', 'Masters and crews'],
    includes: [
      { title: 'Port Call Coordination', text: 'We line up the port, authorities and local parties before the ship arrives.' },
      { title: 'Documents and Clearance', text: 'Arrival and departure paperwork prepared and filed for you.' },
      { title: 'Husbandry and Supplies', text: 'Stores, provisions, spare parts and mail arranged and brought to the ship.' },
      { title: 'Crew Change Support', text: 'Sign-\u2060on and sign-\u2060off, transport and hotel for the crew.' },
      { title: 'Surveys Arranged', text: 'We book surveyors and inspectors and get them out to the vessel.' },
      { title: 'Technical and Commercial Support', text: 'Help for owners and operators with what the call needs.' },
      { title: 'Cash to Master', text: 'Cash delivered to the master on request.' },
      { title: 'Waste Removal', text: 'Garbage and sludge removal arranged with licensed contractors.' },
    ],
    process: [
      { title: 'Appointment', text: 'Send the vessel, ETA and what the call involves. We confirm and open the file.' },
      { title: 'Pre-\u2060Arrival', text: 'Documents prepared, port and authorities informed, services booked.' },
      { title: 'Vessel in Port', text: 'We coordinate every party on the call and keep you updated.' },
      { title: 'Sailing and Report', text: 'Departure cleared and a short port call report sent to you.' },
    ],
    send: ['Vessel name and IMO', 'Port and ETA', 'What the call involves', 'Owner or operator contact'],
    wa: 'Hello Sea Shark, I need ship agency support. Vessel: ... Port: ... ETA: ...',
    cta: 'Appoint Us as Agent',
    ctaShort: 'Appoint Us',
    number: AGENT_WHATSAPP,
    phone: AGENT_PHONE_DISPLAY,
    phoneLink: AGENT_PHONE_LINK,
    urgent: 'Ship Arriving Soon?',
    faq: [
      { q: 'Which port do you cover?', a: 'Khorfakkan, on the UAE east coast.' },
      { q: 'Can you arrange a crew change?', a: 'Yes, as part of our agency service. Send us the details and we will confirm what is needed for the call.' },
      { q: 'When should we appoint you?', a: 'As early as you can, ideally once the ETA is known. The more notice we have, the more we can prepare before the ship arrives.' },
      { q: 'Will you keep us updated?', a: 'Yes. We update you as things happen during the call and send a statement of facts when the ship sails.' },
      { q: 'Do you provide a port cost estimate?', a: 'Yes. Send us the vessel details and the call plan, and we prepare a proforma disbursement account before arrival.' },
      { q: 'Can you act as protective agent?', a: 'Yes. When the charterer\'s agent handles the call, we can look after the owner\'s interests alongside them.' },
    ],
  },
  {
    slug: 'marine-survey',
    icon: 'survey',
    photo: PHOTOS.tankerDeckDusk,
    row: PHOTOS.shipDeck,
    tile: PHOTOS.shipDeck,
    band: PHOTOS.shipRedSky,
    title: 'Marine Survey',
    kicker: 'Core Service',
    short: 'Marine surveys for vessels at Khorfakkan: on-\u2060hire and off-\u2060hire, draft and condition surveys, with clear written reports.',
    banner: PHOTOS.shipDeck,
    intro:
      'A survey gives owners, charterers and operators an accurate record of a vessel at a point in time. We carry out marine surveys for vessels calling at Khorfakkan and report the findings clearly, so decisions can be made with confidence.',
    more:
      'Surveys can be booked on their own or together with your port call, so the surveyor boards at the right time without delaying cargo work or sailing.',
    who: ['Ship owners', 'Charterers', 'Operators and ship managers', 'Masters'],
    includes: [
      { title: 'On-\u2060Hire and Off-\u2060Hire Surveys', text: 'Condition and bunkers on board recorded at delivery and redelivery.' },
      { title: 'Draft Surveys', text: 'Cargo quantity worked out from the vessel\'s draft readings.' },
      { title: 'Condition Surveys', text: 'The vessel\'s general condition inspected and recorded.' },
      { title: 'Clear Written Reports', text: 'Findings, photographs and figures set out in a report you can use.' },
      { title: 'Planned With the Port Call', text: 'Timed around berthing, cargo work and sailing, with our agency team.' },
      { title: 'At Anchor or Alongside', text: 'Surveyor taken out to the vessel wherever she is in port.' },
    ],
    process: [
      { title: 'Request', text: 'Tell us the vessel, the type of survey and when it is needed.' },
      { title: 'Scheduled', text: 'We agree the time and arrange access to the vessel.' },
      { title: 'Survey on Board', text: 'The survey is carried out and readings recorded.' },
      { title: 'Report', text: 'A written report is sent to you.' },
    ],
    send: ['Vessel name and IMO', 'Type of survey needed', 'Port position and ETA', 'Who the report is for'],
    wa: 'Hello Sea Shark, I need a marine survey. Vessel: ... Survey type: ... When: ...',
    cta: 'Request a Survey',
    includesTitle: 'Surveys You Can Rely On, Reports You Can Use.',
    number: AGENT_WHATSAPP,
    phone: AGENT_PHONE_DISPLAY,
    phoneLink: AGENT_PHONE_LINK,
    urgent: 'Survey Needed at Short Notice?',
    faq: [
      { q: 'Which surveys do you carry out?', a: 'On-\u2060hire and off-\u2060hire, draft and condition surveys. Tell us what you need and we will confirm.' },
      { q: 'Can a survey be done during the port call?', a: 'Yes. We plan it around berthing, cargo work and sailing so the vessel is not delayed.' },
      { q: 'Do we receive a written report?', a: 'Yes. Every survey ends with a written report sent to you.' },
    ],
  },
  {
    slug: 'underwater-services',
    icon: 'diver',
    photo: PHOTOS.diver,
    row: PHOTOS.diverPair,
    tile: PHOTOS.diverPair,
    band: PHOTOS.shipBlueSea,
    title: 'Underwater Services',
    kicker: 'Core Service',
    short: 'Diving services for vessels at Khorfakkan: underwater hull inspection, hull cleaning and propeller polishing.',
    banner: PHOTOS.diver,
    intro:
      'Much of what matters on a ship sits below the waterline. Our underwater services let owners and operators inspect and maintain the hull and propeller while the vessel is in port, without the time and cost of dry docking.',
    more:
      'Diving work is planned with the port call, so it fits around cargo operations and the vessel\'s sailing time, and the findings are reported back to you.',
    who: ['Ship owners', 'Operators and ship managers', 'Technical superintendents', 'Masters'],
    includes: [
      { title: 'Underwater Hull Inspection', text: 'The hull, rudder and propeller checked by divers, with findings reported.' },
      { title: 'Hull Cleaning', text: 'Marine growth removed to help the vessel keep her speed and fuel use.' },
      { title: 'Propeller Polishing', text: 'Propeller blades cleaned and polished while the vessel is in port.' },
      { title: 'Reported to You', text: 'What was found and what was done, set out after the job.' },
      { title: 'Planned With the Port Call', text: 'Timed around cargo work and sailing, with our agency team.' },
      { title: 'Safety First', text: 'Diving only goes ahead when the vessel, port and conditions allow it.' },
    ],
    process: [
      { title: 'Request', text: 'Tell us the vessel, the work needed and the time in port.' },
      { title: 'Planned', text: 'We agree the timing and the permissions the dive needs.' },
      { title: 'Dive', text: 'Divers carry out the inspection or cleaning.' },
      { title: 'Report', text: 'Findings and work done reported to you.' },
    ],
    send: ['Vessel name and IMO', 'Work needed (inspection, cleaning, polishing)', 'Port position and ETA', 'Time available in port'],
    wa: 'Hello Sea Shark, I need underwater services. Vessel: ... Work: ... When: ...',
    cta: 'Request Diving Services',
    includesTitle: 'Hull and Propeller Work, Below the Waterline.',
    number: AGENT_WHATSAPP,
    phone: AGENT_PHONE_DISPLAY,
    phoneLink: AGENT_PHONE_LINK,
    urgent: 'Need Divers During This Call?',
    faq: [
      { q: 'What underwater work do you do?', a: 'Underwater hull inspection, hull cleaning and propeller polishing.' },
      { q: 'Can the work be done while the ship is in port?', a: 'Yes. We plan the dive around the port call. Tell us the vessel position and time in port and we will confirm.' },
      { q: 'Do we get a report?', a: 'Yes. We report what was found and what was done.' },
    ],
  },
  {
    slug: 'fresh-water',
    icon: 'water',
    photo: 'malik',
    row: PHOTOS.tankerAerialGreen,
    tile: PHOTOS.tankerAerialRed,
    band: PHOTOS.wakeAerial,
    title: 'Fresh Water Supply',
    kicker: 'Marine Support',
    minor: true,
    short: 'Drinking water delivered by Malik, the barge we own and run, to ships at Khorfakkan.',
    banner: PHOTOS.tankerAerial,
    intro:
      'Running low on fresh water should never hold a ship up. Malik, our own water barge, brings drinking water out to vessels at Khorfakkan. Because we own the barge, we plan the delivery around your ship, not around someone else\'s timetable.',
    more:
      'Fresh water is one of the first things a crew checks before the next passage. Whether you are topping up at anchor before sailing on or running low after a long voyage, tell us what you need and we plan Malik around your ship.',
    who: ['Ships waiting at anchor', 'Ships about to sail on', 'Owners and operators planning a call', 'Agents booking for their principals'],
    includes: [
      { title: 'Our Own Barge', text: 'Every delivery is made by Malik, which we own and look after ourselves.' },
      { title: 'At Anchor', text: 'We take the water out to ships waiting at anchor.' },
      { title: 'Alongside on Request', text: 'Ship at a berth? Ask us on WhatsApp and we will tell you what we can arrange.' },
      { title: 'At Khorfakkan', text: 'Deliveries to ships calling at Khorfakkan.' },
      { title: 'Ahead or Short Notice', text: 'Book days ahead, or message us when the need comes up.' },
      { title: 'Clear Paperwork', text: 'A delivery note signed on board for the quantity supplied.' },
    ],
    process: [
      { title: 'You Message Us', text: 'Vessel, position, quantity and when you need it.' },
      { title: 'We Confirm', text: 'Time, place and quantity agreed with you or your agent.' },
      { title: 'Malik Comes Alongside', text: 'The barge moors to your ship and the hose is connected.' },
      { title: 'Water Delivered', text: 'The agreed quantity is pumped across and measured.' },
      { title: 'Signed Off', text: 'Paperwork signed and the barge casts off.' },
    ],
    send: ['Vessel name and IMO', 'Position (port, berth or anchorage)', 'Quantity of water', 'Date and time needed', 'Agent or master contact'],
    wa: WATER_MESSAGE,
    cta: 'Check Water Availability',
    includesTitle: 'Drinking Water, Delivered to Your Ship.',
    urgent: 'Need Water Today?',
    faq: [
      { q: 'Do you deliver water to ships at anchor?', a: 'Yes. Malik takes water out to ships at anchor at Khorfakkan.' },
      { q: 'How quickly can you deliver?', a: 'It depends on where the ship is and how much water is needed. Send us the vessel, position and quantity and we give you a time straight away.' },
      { q: 'Is the water for drinking?', a: "Yes. Malik carries fresh drinking water only, and its tanks and hoses are kept for that use." },
      { q: 'Can we book before the ship arrives?', a: 'Yes. Send us the ETA and the quantity, and we plan the delivery for when your ship is in position.' },
      { q: 'What if our plans change?', a: 'Tell us as soon as you know. We move the delivery with you wherever we can.' },
    ],
  },
  {
    slug: 'crew-boats',
    icon: 'crew',
    photo: PHOTOS.tugFront,
    row: PHOTOS.redTug,
    tile: PHOTOS.tugHarbour,
    band: PHOTOS.shipFrontSea,
    title: 'Crew Boats',
    kicker: 'Marine Support',
    minor: true,
    short: 'We arrange the right boat to move crew, stores and light cargo between shore and ship.',
    banner: PHOTOS.tugCity,
    intro:
      'The right boat, booked and followed through. As your agent, we book the right boat for the job at Khorfakkan, plan it around your ship and stay with it until everyone and everything is where it should be.',
    more:
      'Moving people and goods between shore and ship takes planning: the right boat, the right time and the right sea conditions. We handle that planning, so your crew and your cargo get across safely.',
    who: ['Crews signing on or off', 'Surveyors and inspectors', 'Agents visiting the ship', 'Ships waiting for stores or spares'],
    includes: [
      { title: 'Crew Changes at Anchor', text: 'People moved safely between shore and ship.' },
      { title: 'Stores and Spares', text: 'Ship stores and spare parts delivered to the vessel.' },
      { title: 'Light Cargo Runs', text: 'Small loads taken out to ships at anchor.' },
      { title: 'Surveyor and Agent Transfers', text: 'Inspectors, surveyors and agents taken out and back.' },
      { title: 'The Right Boat', text: 'We pick a boat that suits the people, load and weather.' },
      { title: 'Followed Up', text: 'We track the job and tell you when it is done.' },
    ],
    process: [
      { title: 'Tell Us the Job', text: 'How many people, what load, from where to where.' },
      { title: 'We Book the Boat', text: 'Right size, right time, confirmed back to you.' },
      { title: 'Transfer', text: 'Boat goes out, people and goods move across.' },
      { title: 'Done', text: 'We confirm the job is complete.' },
    ],
    send: ['Vessel name', 'Ship position', 'Number of people', 'Cargo weight or size', 'Pickup point, date and time'],
    wa: 'Hello Sea Shark, I need a crew boat. Vessel: ... Position: ... People: ... Cargo: ... When: ...',
    cta: 'Book a Crew Boat',
    includesTitle: 'The Right Boat for Every Transfer.',
    urgent: 'Need a Boat Today?',
    faq: [
      { q: 'Do you own crew boats?', a: 'No. We own one vessel, the water barge Malik. For crew boats we act as your agent and book the right boat for the job.' },
      { q: 'How many people can a boat take?', a: 'It depends on the boat we book. Tell us how many people and how much cargo, and we pick a boat that fits.' },
      { q: 'Can we book at short notice?', a: 'Yes. Message us and we will tell you what we can arrange and when.' },
      { q: 'What if the sea is too rough?', a: 'Safety comes first. If conditions are not safe we tell you early and agree a new time with you.' },
    ],
  },
]

export const STATS = [
  { label: 'Port of Operation', value: 'Khorfakkan' },
  { label: 'Combined Marine Experience', value: '20+ yrs' },
  { label: 'Crews on Call', value: '24 hrs' },
  { label: 'Offices, Sharjah and Dubai', value: '2' },
]

// Main services shown everywhere; fresh water and crew boats are minor side services.
export const MAIN_SERVICES = SERVICES.filter((s) => !s.minor)
export const ALL_SERVICES = SERVICES
export const MINOR_SERVICES = SERVICES.filter((s) => s.minor)

export const STEPS = [
  { title: 'Contact Our Desk', text: 'Vessel name, ETA or position and what you need, by WhatsApp, phone or email.' },
  { title: 'We Confirm', text: 'We confirm the scope and timing and keep you informed throughout.' },
  { title: 'Completed and Reported', text: 'Port call handled, survey reported or dive completed, with one contact all the way.' },
]

export const PLACES = [
  { name: 'Khorfakkan Port', type: 'Port', text: 'Ship agency, marine survey and underwater services for vessels calling at Khorfakkan.' },
  { name: 'Al Fisht 1, Sharjah', type: 'Office', text: 'Our Sharjah office. Open 9 AM to 5 PM.' },
  { name: "Al Bada'a, Dubai", type: 'Office', text: 'Our Dubai office.' },
]

export const VALUES = [
  { name: 'Safety', text: 'Every transfer and delivery is planned with people and vessels kept safe first.' },
  { name: 'Integrity', text: 'Clear answers, honest timings and no surprises on the job.' },
  { name: 'Professionalism', text: 'We work to the standard ship owners and masters expect.' },
  { name: 'Always Improving', text: 'We review every job and keep raising the standard of the next one.' },
]

export const WHY = [
  { title: 'One Point of Contact', text: 'A single agency team handles your vessel from appointment to sailing report.' },
  { title: 'Local Presence', text: 'We work at Khorfakkan every day, with offices in Sharjah and Dubai.' },
  { title: 'Experienced Team', text: 'Founders with more than 20 years of combined marine experience.' },
  { title: 'Agency, Survey and Diving Together', text: 'Three core services coordinated by one team for each port call.' },
]

export const CONTACTS = [
  { label: 'Ship Agency Desk', text: AGENT_PHONE_DISPLAY, href: AGENT_PHONE_LINK },
  { label: 'Fresh Water and Crew Boats', text: PHONE_DISPLAY, href: PHONE_LINK },
  { label: 'Operations Email', text: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Sharjah Office', text: 'Al Fisht 1, Sharjah', href: 'https://maps.google.com/?q=Al+Fisht+1+Sharjah', external: true },
  { label: 'Dubai Office', text: "Al Bada'a, Dubai", href: "https://maps.google.com/?q=Al+Bada'a+Dubai", external: true },
]

export const HOURS_ROWS = [
  ['Office', '9 AM to 5 PM'],
  ['Crews', '24 hours'],
]

export const PORTS = [
  { id: 'khorfakkan', name: 'Khorfakkan', coords: '25.35° N · 56.36° E', photo: PHOTOS.terminalDusk,
    lead: 'A deep-\u2060water port on the Gulf of Oman, inside the Emirate of Sharjah.',
    work: [{ text: 'Ship agency for port calls' }, { text: 'Marine surveys on board' }, { text: 'Underwater hull inspection and cleaning' }, { text: 'Fresh water and crew boats on request' }] },
]

export const SAFETY = [
  { title: 'Safe Transfers', text: 'Every crew move and boarding is planned around people first, then weather and sea state.' },
  { title: 'Safe Diving', text: 'Underwater work only goes ahead when the vessel, port and sea conditions allow it.' },
  { title: 'Clean Water Handling', text: "Malik's tanks and hoses are kept for drinking water only and looked after by us." },
  { title: 'Port Rules Followed', text: 'We work inside the port rules and keep the right people informed.' },
  { title: 'Clear Paperwork', text: 'Quantities, times and jobs recorded, so there are no surprises later.' },
]

export const BARGE_SPECS = [
  { k: 'Name', v: 'Malik' },
  { k: 'Type', v: 'Fresh water supply barge' },
  { k: 'Owner', v: 'Sea Shark Shipping Services LLC' },
  { k: 'Works At', v: 'Khorfakkan' },
]

export const FAQ = [
  { q: 'How do we appoint you as agent?', a: `Call or WhatsApp our agency desk on ${AGENT_PHONE_DISPLAY} with the vessel name, ETA and what the call involves, or email ${EMAIL}.` },
  { q: 'Can we book more than one service for the same ship?', a: 'Yes. Agency, survey and underwater work can be arranged together for the same call, handled by one team.' },
  { q: 'What do you need from us to start?', a: 'Vessel name and IMO, port and ETA or position, and what the call involves. We confirm the rest with you.' },
  { q: 'Which surveys do you carry out?', a: 'On-\u2060hire and off-\u2060hire, draft and condition surveys. Tell us what you need and we will confirm.' },
  { q: 'What underwater work do you do?', a: 'Underwater hull inspection, hull cleaning and propeller polishing, planned around the port call.' },
  { q: 'Can you arrange a crew change?', a: 'Yes, as part of our agency service. Send us the details and we will confirm what is needed for the call.' },
  { q: 'How quickly can you deliver fresh water?', a: 'It depends on where the ship is and how much water is needed. Send us the vessel, position and quantity on WhatsApp and we will give you a time straight away.' },
  { q: 'Do you deliver water to ships at anchor?', a: 'Yes. Malik, our own barge, takes water out to ships at anchor at Khorfakkan.' },
  { q: 'Can you deliver to ships alongside?', a: 'Ask us on WhatsApp for your berth and we will confirm.' },
  { q: 'Do you own crew boats?', a: 'No. We own one vessel, the water barge Malik. For crew boats we act as your agent and book the right boat for the job.' },
  { q: 'What are your working hours?', a: 'The office is open 9 AM to 5 PM. Our crews work 24 hours.' },
  { q: 'How do we pay?', a: 'We agree payment terms with you before the job.' },
]

export const CLIENTS = [
  { title: 'Ship Owners', text: 'A local agent at Khorfakkan looking after your vessel and your interests while she is in port.' },
  { title: 'Operators and Managers', text: 'Port calls, surveys and hull work coordinated, with updates at each step.' },
  { title: 'Masters and Crews', text: 'A direct line to our desk for what the vessel needs, when it needs it.' },
  { title: 'Charterers', text: 'A reliable agent and surveyors at Khorfakkan acting on your instructions.' },
]

export const CALL_TIPS = [
  { title: 'Send Your ETA Early', text: 'More notice means paperwork, bookings and services are ready before the ship arrives.' },
  { title: 'Share the Position', text: 'Anchorage or berth: tell us where the ship will be so we plan the right approach.' },
  { title: 'One Message for Everything', text: 'Agency, survey and underwater work for the same call can all go in one message.' },
  { title: 'Tell Us When Plans Change', text: 'If the ETA moves, let us know and we move the plan with you.' },
]

export const PRINCIPLES = [
  { title: 'We Answer Quickly', text: 'Ships do not wait, so neither do we. Messages are answered promptly, and urgent jobs are picked up by our crews around the clock.' },
  { title: 'We Say What We Can Do', text: 'Before the job starts, we tell you plainly what we will do and when, and then we do it.' },
  { title: 'We Follow Through', text: 'The person who takes your message stays with the job until it is done and you have heard back from us.' },
]

// Which service runs at which port (shown as a table on Ports & FAQ).
export const PORT_TABLE = [
  { service: 'Ship Agency', khorfakkan: 'yes' },
  { service: 'Marine Survey', khorfakkan: 'yes' },
  { service: 'Underwater Services', khorfakkan: 'yes' },
  { service: 'Fresh Water at Anchor', khorfakkan: 'yes' },
  { service: 'Crew Boats (Arranged)', khorfakkan: 'yes' },
]

// The three core services. `icon` names map to inline SVGs in <ServiceIcon/>.
// Detail copy stays factual: what the service is, no invented capacity claims.

export const SERVICES = [
  {
    slug: 'barge-fresh-water-supply',
    index: '01',
    icon: 'droplet',
    title: 'Barge Service',
    tagline: 'Fresh water supply to vessels',
    summary:
      'Potable and fresh water delivered to vessels at anchorage and berth, using our own water barge.',
    detail: [
      'Our owned water barge supplies fresh water directly to vessels — at anchorage off Khorfakkan or alongside at berth.',
      'Because the barge is operated in-house, scheduling and turnaround stay under our control. We coordinate quantities and timing around the vessel’s plan.',
      'Every supply run is carried out to a safety-first standard, with clean handling from quay to vessel.',
    ],
    points: ['Owned water barge', 'Anchorage & berth delivery', 'Coordinated to the vessel’s schedule'],
  },
  {
    slug: 'crew-boat-transfer',
    index: '02',
    icon: 'wake',
    title: 'Crew Boat Service',
    tagline: 'Ship transportation & crew transfer',
    summary:
      'Crew and small-cargo transfers between shore and vessel aboard our own crew boat.',
    detail: [
      'Our crew boat moves personnel and light stores between shore and vessel — for crew changes, technical visits, surveys and agency attendance.',
      'Operated by our own team out of Khorfakkan, with availability matched to vessel movements rather than fixed hours.',
      'Safe embarkation and transfer is the priority on every run, in coordination with the vessel and port.',
    ],
    points: ['Owned crew boat', 'Crew change & technical visits', 'Around-the-clock availability'],
  },
  {
    slug: 'ship-agency',
    index: '03',
    icon: 'compass',
    title: 'Ship Agency',
    tagline: 'Agency services',
    summary:
      'Port agency support coordinating the vessel’s needs while in the area.',
    detail: [
      'We act on the vessel’s behalf in port — coordinating the practical needs of a call so the master and owner have a single, accountable point of contact.',
      'This sits alongside our bespoke survey, technical and commercial services, kept deliberately broad so each call is handled to what it actually needs.',
      'The approach is the same throughout: integrity, professionalism, and continuous improvement.',
    ],
    points: ['Single point of contact', 'Survey & technical coordination', 'Commercial support'],
  },
]

export const getService = (slug) => SERVICES.find((s) => s.slug === slug)

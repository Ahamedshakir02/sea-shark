// Small isometric drawings (barge, crew boat, agency office, port) built from simple
// 3D blocks. Every block is a footprint (x, y points) raised by a height.
// Screen position: X = (x - y) * cos30, Y = (x + y) * sin30 - z.

const C = 0.866
const toScreen = (x, y, z) => [(x - y) * C, (x + y) * 0.5 - z]

const TONES = {
  pale: ['#ffffff', '#e3e9f6', '#c8d4ee'],
  ice: ['#f4f7fd', '#d9e2f3', '#bccae6'],
  indigo: ['#4044b8', '#2a2d8f', '#1d1f6b'],
  blue: ['#6a90ff', '#2f62f5', '#2049c2'],
  green: ['#9ccd62', '#7cb342', '#5d8f2e'],
  ink: ['#3a3f66', '#22264a', '#151833'],
}

// One raised block. pts: footprint in plan, z: bottom, h: height, tone: colour set.
function block({ pts, z = 0, h = 1, tone = 'pale' }) {
  const [top, left, right] = TONES[tone]
  const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length
  const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length
  const faces = []
  pts.forEach((p, i) => {
    const q = pts[(i + 1) % pts.length]
    let nx = q[1] - p[1], ny = -(q[0] - p[0])
    const mx = (p[0] + q[0]) / 2 - cx, my = (p[1] + q[1]) / 2 - cy
    if (nx * mx + ny * my < 0) { nx = -nx; ny = -ny }
    if (nx + ny <= 0.0001) return // faces away from us
    faces.push({
      d: [toScreen(p[0], p[1], z), toScreen(q[0], q[1], z), toScreen(q[0], q[1], z + h), toScreen(p[0], p[1], z + h)],
      fill: nx > ny ? right : left,
      depth: (p[0] + q[0] + p[1] + q[1]) / 2,
    })
  })
  faces.sort((a, b) => a.depth - b.depth)
  faces.push({ d: pts.map((p) => toScreen(p[0], p[1], z + h)), fill: top })
  return { faces, key: z * 1000 + cx + cy }
}

const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]

// Groups are drawn in the order given; blocks inside a group are drawn bottom-up, back to front.
function Scene({ groups, pad = 1.2, className = '', label, sea }) {
  const all = []
  if (sea) { const [a, b, c, d] = sea; all.push(toScreen(a, b, 0), toScreen(c, b, 0), toScreen(c, d, 0), toScreen(a, d, 0)) }
  const rendered = groups.map((g) => {
    const blocks = g.blocks.map(block).sort((a, b) => a.key - b.key)
    blocks.forEach((b) => b.faces.forEach((f) => all.push(...f.d)))
    return { ...g, blocks }
  })
  const xs = all.map((p) => p[0]), ys = all.map((p) => p[1])
  const x0 = Math.min(...xs) - pad, y0 = Math.min(...ys) - pad
  const w = Math.max(...xs) - x0 + pad, h = Math.max(...ys) - y0 + pad
  return (
    <svg className={`iso ${className}`} viewBox={`${x0} ${y0} ${w} ${h}`} role={label ? 'img' : undefined}
      aria-label={label} aria-hidden={label ? undefined : 'true'}>
      {sea && water(...sea)}
      {rendered.map((g, gi) => (
        <g key={gi} className={g.className}>
          {g.blocks.map((b, bi) => b.faces.map((f, fi) => (
            <polygon key={`${bi}-${fi}`} points={f.d.map((p) => p.join(',')).join(' ')} fill={f.fill}
              stroke="rgba(18,21,46,.08)" strokeWidth="0.04" strokeLinejoin="round" />
          )))}
          {g.after}
        </g>
      ))}
    </svg>
  )
}

// Text painted on a side of a block that runs along x (normal facing +y).
// u: distance along x, y: the side's y, z: height of the text baseline.
const SideText = ({ x, y, z, size = 1, children, fill = '#fff' }) => {
  const [tx, ty] = toScreen(x, y, z)
  return (
    <text transform={`matrix(${C},0.5,0,1,${tx},${ty})`} fontSize={size} fill={fill}
      fontFamily="Golos Text, system-ui, sans-serif" fontWeight="700" letterSpacing="0.12">{children}</text>
  )
}

// Flat sea with a few ripple lines.
function water(x0, y0, x1, y1) {
  const poly = [toScreen(x0, y0, 0), toScreen(x1, y0, 0), toScreen(x1, y1, 0), toScreen(x0, y1, 0)]
  const lines = []
  for (let i = 1; i < 6; i++) {
    const y = y0 + ((y1 - y0) * i) / 6
    const a = toScreen(x0 + 1, y, 0), b = toScreen(x1 - 1, y, 0)
    lines.push(<line key={i} className="iso__ripple" x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} style={{ '--i': i }} />)
  }
  return (
    <g>
      <polygon points={poly.map((p) => p.join(',')).join(' ')} fill="#dce6f7" />
      {lines}
    </g>
  )
}

// Malik, the water barge. ox, oy move it around a bigger scene.
function bargeBlocks(ox = 0, oy = 0) {
  const m = (pts) => pts.map(([x, y]) => [x + ox, y + oy])
  return [
    { pts: m([[0, 0], [19, 0], [22.5, 3.5], [19, 7], [0, 7]]), h: 1.8, tone: 'indigo' },
    { pts: m(rect(0.4, 0.4, 18.6, 6.6)), z: 1.8, h: 0.25, tone: 'ice' },
    { pts: m(rect(4.6, 1.3, 10.6, 5.7)), z: 2.05, h: 1.3, tone: 'pale' },
    { pts: m(rect(11.4, 1.3, 17.4, 5.7)), z: 2.05, h: 1.3, tone: 'pale' },
    { pts: m(rect(0.8, 1.4, 3.8, 5.6)), z: 2.05, h: 3.2, tone: 'pale' },
    { pts: m(rect(0.6, 1.2, 4.0, 5.8)), z: 5.25, h: 0.3, tone: 'green' },
    { pts: m(rect(18.6, 2.6, 19.8, 4.4)), z: 1.8, h: 0.9, tone: 'green' },
  ]
}

function boatBlocks(ox = 0, oy = 0) {
  const m = (pts) => pts.map(([x, y]) => [x + ox, y + oy])
  return [
    { pts: m([[0, 0], [10.5, 0], [13.5, 2], [10.5, 4], [0, 4]]), h: 1.4, tone: 'blue' },
    { pts: m(rect(0.3, 0.3, 10.2, 3.7)), z: 1.4, h: 0.15, tone: 'ice' },
    { pts: m(rect(2, 0.7, 7.4, 3.3)), z: 1.55, h: 1.1, tone: 'pale' },
    { pts: m(rect(1.95, 0.65, 7.45, 3.35)), z: 2.65, h: 0.55, tone: 'ink' },
    { pts: m(rect(1.8, 0.5, 7.6, 3.5)), z: 3.2, h: 0.25, tone: 'pale' },
  ]
}

export function BargeScene({ className }) {
  return (
    <Scene className={className} label="Drawing of Malik, our fresh water barge"
      sea={[-4, -4, 27, 12]}
      groups={[{ className: 'bob', blocks: bargeBlocks(), after: <SideText x={8} y={7} z={0.55} size={1}>MALIK</SideText> }]} />
  )
}

export function BoatScene({ className }) {
  return (
    <Scene className={className} label="Drawing of a crew boat"
      sea={[-4, -4, 18, 9]}
      groups={[{ className: 'bob bob--fast', blocks: boatBlocks() }]} />
  )
}

export function AgencyScene({ className }) {
  return (
    <Scene className={className} label="Drawing of a port office with containers"
      groups={[
        { blocks: [{ pts: rect(-2, -2, 22, 14), h: 0.8, tone: 'ice' }] },
        {
          blocks: [
            { pts: rect(0, 0, 9, 7), z: 0.8, h: 6.5, tone: 'pale' },
            { pts: rect(-0.2, -0.2, 9.2, 7.2), z: 7.3, h: 0.35, tone: 'indigo' },
            { pts: rect(9.02, 1, 9.08, 6), z: 2, h: 4, tone: 'ink' },
            { pts: rect(2, 7.02, 7, 7.08), z: 2, h: 4, tone: 'ink' },
            { pts: rect(12, 1, 19, 3.6), z: 0.8, h: 2.4, tone: 'indigo' },
            { pts: rect(12, 4.2, 19, 6.8), z: 0.8, h: 2.4, tone: 'green' },
            { pts: rect(12, 1, 19, 3.6), z: 3.2, h: 2.4, tone: 'blue' },
            { pts: rect(12, 8, 19, 10.6), z: 0.8, h: 2.4, tone: 'pale' },
            { pts: rect(3, 10, 3.5, 10.5), z: 0.8, h: 7, tone: 'ink' },
            { pts: rect(3.5, 10.1, 5.6, 10.4), z: 6.2, h: 1.4, tone: 'green' },
          ],
        },
      ]} />
  )
}

// Hero scene: quay with containers, Malik at the quay and a crew boat heading out.
export function PortScene({ className }) {
  return (
    <Scene className={className} label="Drawing of our barge Malik and a crew boat at a port"
      sea={[-2, 10, 44, 36]}
      groups={[
        {
          blocks: [
            { pts: rect(-2, -2, 44, 10), h: 1.6, tone: 'ice' },
            { pts: rect(2, 1, 9, 3.6), z: 1.6, h: 2.4, tone: 'indigo' },
            { pts: rect(2, 1, 9, 3.6), z: 4, h: 2.4, tone: 'pale' },
            { pts: rect(2, 4.2, 9, 6.8), z: 1.6, h: 2.4, tone: 'green' },
            { pts: rect(10, 1, 17, 3.6), z: 1.6, h: 2.4, tone: 'pale' },
            { pts: rect(10, 4.2, 17, 6.8), z: 1.6, h: 2.4, tone: 'indigo' },
            { pts: rect(10, 4.2, 17, 6.8), z: 4, h: 2.4, tone: 'blue' },
            { pts: rect(24, 1, 25, 2), z: 1.6, h: 11, tone: 'pale' },
            { pts: rect(24, 7, 25, 8), z: 1.6, h: 11, tone: 'pale' },
            { pts: rect(23.6, 0.6, 25.4, 8.4), z: 12.6, h: 1, tone: 'pale' },
            { pts: rect(24, 0.6, 25, 18), z: 13.6, h: 0.8, tone: 'indigo' },
            { pts: rect(23.8, 11.5, 25.2, 13), z: 9.4, h: 1.2, tone: 'green' },
            { pts: rect(32, 2, 40, 7.5), z: 1.6, h: 4, tone: 'pale' },
            { pts: rect(31.8, 1.8, 40.2, 7.7), z: 5.6, h: 0.3, tone: 'indigo' },
          ],
        },
        { className: 'bob', blocks: bargeBlocks(6, 12), after: <SideText x={14} y={19} z={0.55} size={1}>MALIK</SideText> },
        { className: 'bob bob--fast', blocks: boatBlocks(27, 27) },
      ]} />
  )
}

export const SCENES = { barge: BargeScene, boat: BoatScene, agency: AgencyScene }

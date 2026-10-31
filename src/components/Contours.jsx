// Thin, hand-drawn-looking contour lines, like a sea chart's depth lines.
// The shapes are generated once from a few numbers, so each preset stays organic but stable.

const f = (n) => Math.round(n * 10) / 10

// Smooth curve through points (Catmull-Rom turned into cubic Beziers)
function smooth(pts, closed) {
  const n = pts.length
  const at = (i) => (closed ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))])
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`
  const end = closed ? n : n - 1
  for (let i = 0; i < end; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2)
    d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)},${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)},${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])},${f(p2[1])}`
  }
  return closed ? `${d}Z` : d
}

// Rings that widen outwards, each a little more wobbly than the last
function rings({ cx, cy, r, gap, count, a = 0.13, b = 0.07, p = 0, squash = 0.82 }) {
  return Array.from({ length: count }, (_, k) => {
    const R = r + k * gap
    const pts = []
    for (let i = 0; i < 30; i++) {
      const t = (i / 30) * Math.PI * 2
      const rr = R * (1 + a * Math.sin(2 * t + p + k * 0.3) + b * Math.sin(3 * t + p * 1.7 - k * 0.22))
      pts.push([cx + rr * Math.cos(t), cy + rr * squash * Math.sin(t)])
    }
    return smooth(pts, true)
  })
}

// Long open lines that drift across the area
function flows({ x0, x1, y, gap, count, amp, freq = 1, p = 0 }) {
  return Array.from({ length: count }, (_, k) => {
    const pts = []
    for (let i = 0; i <= 18; i++) {
      const u = (i / 18) * Math.PI * 2 * freq
      pts.push([x0 + ((x1 - x0) * i) / 18, y + k * gap + amp * Math.sin(u + p + k * 0.45) + amp * 0.35 * Math.sin(2.3 * u + p)])
    }
    return smooth(pts, false)
  })
}

const PRESETS = {
  hero: { box: [1440, 900], paths: [
    ...rings({ cx: 1290, cy: 300, r: 120, gap: 46, count: 5, p: 0.6 }),
    ...flows({ x0: -40, x1: 520, y: 640, gap: 34, count: 3, amp: 46, freq: 0.8, p: 1.2 }),
  ] },
  head: { box: [1440, 640], paths: [
    ...rings({ cx: 1320, cy: 160, r: 90, gap: 40, count: 5, p: 2.1 }),
    ...flows({ x0: -40, x1: 640, y: 560, gap: 30, count: 3, amp: 36, freq: 0.7, p: 0.4 }),
  ] },
  card: { box: [800, 600], paths: rings({ cx: 720, cy: 520, r: 70, gap: 38, count: 7, p: 1.1 }) },
  band: { box: [1200, 500], paths: [
    ...rings({ cx: 1080, cy: 90, r: 60, gap: 36, count: 6, p: 3.2 }),
    ...flows({ x0: -40, x1: 700, y: 420, gap: 28, count: 3, amp: 30, freq: 0.9, p: 2.5 }),
  ] },
  side: { box: [600, 600], paths: rings({ cx: 300, cy: 300, r: 140, gap: 34, count: 4, p: 4.1, squash: 0.9 }) },
  foot: { box: [1440, 420], paths: [
    ...rings({ cx: 1300, cy: 60, r: 80, gap: 42, count: 6, p: 0.2 }),
    ...flows({ x0: -40, x1: 900, y: 330, gap: 30, count: 3, amp: 34, freq: 1, p: 1.9 }),
  ] },
}

// Side art: soft blobs and contour lines that come in from the left or right edge of the page,
// like the brand board. Pale blobs sit behind content; bright blobs stay near the edge.
const blob = (o) => rings({ ...o, count: 1, gap: 0 })[0]
const SIDES = {
  right: {
    box: [400, 900],
    pale: [blob({ cx: 330, cy: 540, r: 210, a: 0.17, b: 0.1, p: 0.8, squash: 1.45 })],
    bright: [blob({ cx: 420, cy: 440, r: 120, a: 0.12, b: 0.08, p: 2.2, squash: 1.5 }), blob({ cx: 390, cy: 800, r: 52, a: 0.15, b: 0.1, p: 1.1, squash: 1.4 })],
    lines: [...rings({ cx: 430, cy: 330, r: 170, gap: 44, count: 3, a: 0.2, b: 0.12, p: 1.4, squash: 1.35 })],
  },
  left: {
    box: [400, 900],
    pale: [blob({ cx: 40, cy: 300, r: 150, a: 0.18, b: 0.1, p: 3.1, squash: 1.3 })],
    bright: [],
    lines: [...rings({ cx: -10, cy: 470, r: 150, gap: 42, count: 3, a: 0.2, b: 0.12, p: 4.4, squash: 1.45 })],
  },
}

export function Side({ side = 'right', className = '' }) {
  const s = SIDES[side]
  return (
    <svg className={`side side--${side} ${className}`} viewBox={`0 0 ${s.box[0]} ${s.box[1]}`} preserveAspectRatio={side === 'right' ? 'xMaxYMid meet' : 'xMinYMid meet'} aria-hidden="true">
      <g className="side__pale">{s.pale.map((d, i) => <path key={i} d={d} />)}</g>
      <g className="side__bright">{s.bright.map((d, i) => <path key={i} d={d} style={{ '--i': i }} />)}</g>
      <g className="side__lines">{s.lines.map((d, i) => <path key={i} d={d} pathLength="1" style={{ '--i': i }} />)}</g>
    </svg>
  )
}

export default function Contours({ variant = 'hero', className = '' }) {
  const { box, paths } = PRESETS[variant]
  return (
    <svg className={`contours ${className}`} viewBox={`0 0 ${box[0]} ${box[1]}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g>
        {paths.map((d, i) => <path key={i} d={d} pathLength="1" style={{ '--i': i }} />)}
      </g>
    </svg>
  )
}

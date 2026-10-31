// Depth lines like on a sea chart, used behind dark panels. Drawn once, drift slowly with CSS.
function ring(cx, cy, r, wobble, seed) {
  const n = 64
  let d = ''
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2
    const k = 1 + wobble * (Math.sin(a * 3 + seed) * 0.6 + Math.sin(a * 5 + seed * 1.7) * 0.4)
    const x = cx + Math.cos(a) * r * k * 1.35
    const y = cy + Math.sin(a) * r * k
    d += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`
  }
  return d + 'Z'
}

const SETS = {
  a: [[880, 120, 0.9], [120, 560, 2.3]],
  b: [[160, 140, 1.4], [900, 600, 0.4]],
}

export default function Contours({ variant = 'a', className = '' }) {
  const paths = []
  SETS[variant].forEach(([cx, cy, seed], s) => {
    for (let i = 1; i <= 9; i++) paths.push(<path key={`${s}-${i}`} d={ring(cx, cy, i * 46, 0.08 + i * 0.012, seed + i * 0.25)} />)
  })
  return (
    <svg className={`contours ${className}`} viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g>{paths}</g>
    </svg>
  )
}

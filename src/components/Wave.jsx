// Soft layered waves used where one section flows into the next.
// fill: colour of the section below. flip: wave sits at the top of a dark block instead.
export default function Wave({ fill = '#fff', className = '', flip = false }) {
  return (
    <div className={`wave${flip ? ' wave--flip' : ''} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path className="wave__back" fill={fill} opacity=".35"
          d="M0,64 C180,108 360,20 540,48 C720,76 900,118 1080,86 C1260,54 1350,30 1440,44 L1440,120 L0,120 Z" />
        <path className="wave__mid" fill={fill} opacity=".55"
          d="M0,82 C200,40 380,104 600,84 C820,64 980,30 1200,60 C1320,76 1390,92 1440,84 L1440,120 L0,120 Z" />
        <path fill={fill}
          d="M0,96 C240,70 420,118 720,100 C1000,84 1180,72 1440,98 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}

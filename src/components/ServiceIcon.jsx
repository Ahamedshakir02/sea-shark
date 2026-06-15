// Inline, stroked line icons — no icon library dependency. Each draws on
// currentColor so it inherits the bronze accent on hover.

const paths = {
  // fresh water / barge
  droplet: (
    <>
      <path d="M12 3.5c3.5 4 5.5 6.6 5.5 9.4A5.5 5.5 0 0 1 12 18.4a5.5 5.5 0 0 1-5.5-5.5C6.5 10.1 8.5 7.5 12 3.5Z" />
      <path d="M9.4 13.2a2.7 2.7 0 0 0 2.6 2.2" />
    </>
  ),
  // crew boat / wake
  wake: (
    <>
      <path d="M3 14.5h18l-2.2 3.2a2 2 0 0 1-1.65.86H6.85a2 2 0 0 1-1.65-.86L3 14.5Z" />
      <path d="M6.5 14.5V8.2a1.5 1.5 0 0 1 1.5-1.5h5.4l2.6 3.1v4.7" />
      <path d="M2 21c1.5-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0" />
    </>
  ),
  // ship agency / compass
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.2 8.8-2 4.2-4.2 2 2-4.2 4.2-2Z" />
    </>
  ),
}

export default function ServiceIcon({ name, className = 'h-7 w-7' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

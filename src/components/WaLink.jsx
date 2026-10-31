import { waLink } from '../content.js'

// A link that opens WhatsApp with a ready-made message.
export default function WaLink({ message, className, children, ...rest }) {
  return (
    <a className={className} href={waLink(message)} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  )
}

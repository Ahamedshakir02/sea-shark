import { SHOW_TBC } from '../content.js'

// Small "to confirm" tag on facts still waiting for the client's answer.
export default function Tbc({ on }) {
  if (!on || !SHOW_TBC) return null
  return <span className="tbc" title="Waiting for the client to confirm">to confirm</span>
}

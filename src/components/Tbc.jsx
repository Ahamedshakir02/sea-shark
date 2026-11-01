// Small "to confirm" tag for details the client still has to confirm.
export default function Tbc() {
  return <span className="tbc">to confirm</span>
}
export const itemText = (x) => (typeof x === 'string' ? x : x.title || x.text)

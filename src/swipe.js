// Phone swipe rows: add small dots under each row that show which card is in view.
const ROWS = '.tiles,.steps,.steps--flow,.incl,.why,.why--two,.ports,.safety,.cards'
const phone = () => window.matchMedia('(max-width:720px)').matches

const addDots = (row) => {
  if (row.dataset.dots || !phone() || row.children.length < 2) return
  row.dataset.dots = '1'
  const dots = document.createElement('div')
  dots.className = 'swipe-dots'
  dots.setAttribute('aria-hidden', 'true')
  const items = [...row.children]
  items.forEach(() => dots.appendChild(document.createElement('i')))
  row.after(dots)
  const update = () => {
    const x = row.scrollLeft + 20
    let n = 0
    items.forEach((el, i) => { if (el.offsetLeft - row.offsetLeft <= x + 10) n = i })
    if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 4) n = items.length - 1
    ;[...dots.children].forEach((d, i) => d.classList.toggle('on', i === n))
  }
  row.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true })
  update()
}

export function startSwipeDots(root) {
  const scan = () => root.querySelectorAll(ROWS).forEach(addDots)
  scan()
  new MutationObserver(scan).observe(root, { childList: true, subtree: true })
}

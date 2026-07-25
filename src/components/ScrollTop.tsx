import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/** Кнопка «вгору» — зʼявляється, коли сторінку прогорнули вниз. */
export function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`to-top${show ? ' show' : ''}`}
      aria-label="Догори"
      onClick={() => {
        ;(document.scrollingElement ?? document.documentElement).scrollTop = 0
      }}
    >
      <ArrowUp size={22} />
    </button>
  )
}

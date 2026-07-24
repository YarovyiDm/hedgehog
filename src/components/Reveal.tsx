import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Плавна поява при прокрутці. Спрацьовує один раз — без миготіння туди-сюди. */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal${seen ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

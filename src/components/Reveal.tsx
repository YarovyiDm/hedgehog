import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Поява при прокрутці.
 *
 * Свідомо БЕЗ IntersectionObserver: якщо він з якоїсь причини не спрацює
 * (прихована вкладка, офскрін-рендер, екзотичний браузер), сторінка лишається
 * повністю порожньою — надто дорога ціна за анімацію. Тут один спільний
 * rAF-обробник прокрутки на всі блоки: передбачувано й дешево.
 *
 * Ховаємо теж лише з JS: якщо скрипт не відпрацює, контент просто видно.
 */

type Item = { el: HTMLElement; show: () => void }

const pending = new Set<Item>()

function check() {
  for (const it of [...pending]) {
    const b = it.el.getBoundingClientRect()
    if (b.top < window.innerHeight * 0.92 && b.bottom > 0) {
      it.show()
      pending.delete(it)
    }
  }
}

// Без requestAnimationFrame: у неактивній вкладці він не виконується,
// і блоки лишалися невидимими. Scroll браузер і так шле раз на кадр.
function schedule() {
  check()
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  // повернувся на вкладку — rAF у прихованій вкладці не працює, тож догортаємо
  document.addEventListener('visibilitychange', schedule)
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'idle' | 'armed' | 'in'>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // те, що вже в кадрі, показуємо одразу — без миготіння на першому екрані
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setState('in')
      return
    }

    setState('armed')
    const item: Item = { el, show: () => setState('in') }
    pending.add(item)
    schedule()
    return () => { pending.delete(item) }
  }, [])

  return (
    <div ref={ref} className={`reveal ${state}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

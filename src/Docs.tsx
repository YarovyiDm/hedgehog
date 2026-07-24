import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { marked } from 'marked'
import raw from './content/IMPLEMENTED.md?raw'

/**
 * Технічна документація — дослівна копія IMPLEMENTED.md, але в оформленні лендінгу.
 * Оновити зміст: `npm run sync-docs` (тягне свіжий файл із ~/Documents).
 */

type Head = { id: string; text: string }

const OFFSET = 140 // на якій висоті заголовок вважається «поточним»

function slug(s: string) {
  return (
    s
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .trim()
      .replace(/\s+/g, '-') || 'section'
  )
}

export function Docs() {
  const boxRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState('')

  // id проставляємо в САМОМУ HTML, а не по DOM: React перемальовує
  // dangerouslySetInnerHTML і затирає атрибути, дописані вручну.
  const { html, toc } = useMemo(() => {
    let out = marked.parse(raw, { gfm: true, breaks: false }) as string
    const used = new Set<string>()
    const toc: Head[] = []

    out = out.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, '').trim()
      let id = slug(text)
      let n = 2
      while (used.has(id)) id = `${slug(text)}-${n++}`
      used.add(id)
      toc.push({ id, text })
      return `<h2 id="${id}">${inner}</h2>`
    })
    return { html: out, toc }
  }, [])

  /**
   * Скролспай на прокрутці. Свідомо без IntersectionObserver: він мовчки
   * не спрацьовує в неактивній вкладці, і підсвітка «застрягала».
   * Тут — простий пошук останнього заголовка, що вже проїхав повз OFFSET.
   */
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const update = () => {
      const hs = Array.from(box.querySelectorAll('h2'))
      if (!hs.length) return

      let current = hs[0].id
      for (const h of hs) {
        if (h.getBoundingClientRect().top <= OFFSET) current = h.id
        else break
      }
      setActive(prev => (prev === current ? prev : current))
    }

    // Без rAF: браузер і так шле scroll не частіше разу на кадр, а rAF
    // мовчки не виконується в неактивній вкладці — підсвітка застрягала.
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [html])

  // Тримаємо активний пункт у полі зору: розділів багато, сайдбар має свій скрол
  useEffect(() => {
    const nav = navRef.current
    if (!nav || !active) return
    const link = nav.querySelector<HTMLAnchorElement>(`a[data-id="${active}"]`)
    if (!link) return

    const navBox = nav.getBoundingClientRect()
    const box = link.getBoundingClientRect()
    if (box.top < navBox.top + 8) nav.scrollTop -= navBox.top + 8 - box.top
    else if (box.bottom > navBox.bottom - 8) nav.scrollTop += box.bottom - (navBox.bottom - 8)
  }, [active])

  const goTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    // через scrollTop, а не scrollIntoView: другий нічого не робить у неактивній вкладці
    const y = el.getBoundingClientRect().top + window.scrollY - 16
    ;(document.scrollingElement ?? document.documentElement).scrollTop = y
    setActive(id)
  }

  return (
    <div className="docs">
      <div className="docs-wrap">
        <aside className="docs-nav" ref={navRef}>
          <a className="back" href="#/">
            <ArrowLeft size={16} /> на головну
          </a>

          <nav>
            {toc.map(h => (
              <a
                key={h.id}
                data-id={h.id}
                href={`#${h.id}`}
                className={active === h.id ? 'on' : ''}
                onClick={e => {
                  e.preventDefault() // хеш лишаємо як є, щоб не смикати маршрут
                  goTo(h.id)
                }}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </aside>

        <main className="docs-body">
          <header className="docs-head">
            <div className="eyebrow">технічний довідник</div>
            <h1>Як це влаштовано</h1>
            <p>
              Кожна система, кожна формула й кожне число балансу — усе, з чого
              насправді зроблений «Їжачок».
            </p>
          </header>

          <div className="md" ref={boxRef} dangerouslySetInnerHTML={{ __html: html }} />
        </main>
      </div>
    </div>
  )
}

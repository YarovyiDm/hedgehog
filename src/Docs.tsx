import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Search } from 'lucide-react'
import { marked } from 'marked'
import raw from './content/IMPLEMENTED.md?raw'

/**
 * Технічна документація — дослівна копія IMPLEMENTED.md, але в оформленні лендінгу.
 * Оновити зміст: `npm run sync-docs` (тягне свіжий файл із ~/Documents).
 */

type Head = { id: string; text: string }

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
  const [heads, setHeads] = useState<Head[]>([])
  const [active, setActive] = useState('')
  const [q, setQ] = useState('')

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

  useEffect(() => setHeads(toc), [toc])

  useEffect(() => {
    const box = boxRef.current
    if (!box) return

    // підсвічування поточного розділу
    const io = new IntersectionObserver(
      entries => {
        const vis = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setActive(vis[0].target.id)
      },
      { rootMargin: '-8% 0px -70% 0px' },
    )
    box.querySelectorAll('h2').forEach(h => io.observe(h))
    return () => io.disconnect()
  }, [html])

  // фільтр по розділах: ховаємо все між заголовками, що не збіглися
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const needle = q.trim().toLowerCase()

    let show = true
    let matched = ''
    for (const el of Array.from(box.children) as HTMLElement[]) {
      if (el.tagName === 'H2') {
        matched = el.textContent?.toLowerCase() ?? ''
        show = !needle || matched.includes(needle)
        // якщо заголовок не збігся — перевіримо вміст розділу нижче
        if (!show) {
          let probe = el.nextElementSibling as HTMLElement | null
          while (probe && probe.tagName !== 'H2') {
            if ((probe.textContent ?? '').toLowerCase().includes(needle)) { show = true; break }
            probe = probe.nextElementSibling as HTMLElement | null
          }
        }
      }
      el.style.display = show ? '' : 'none'
    }
  }, [q, html])

  return (
    <div className="docs">
      <div className="docs-wrap">
        <aside className="docs-nav">
          <a className="back" href="#/">
            <ArrowLeft size={16} /> на головну
          </a>

          <div className="docs-search">
            <Search size={15} />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Пошук по довіднику…" />
          </div>

          <nav>
            {heads.map(h => (
              <a key={h.id} href={`#${h.id}`} className={active === h.id ? 'on' : ''}>
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

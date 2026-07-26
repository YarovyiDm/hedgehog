import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, Backpack, BookOpen, Bug, CloudFog, CloudRain, Eye, Flame,
  Footprints, Gauge, Heart, Leaf, Moon as MoonIcon, Mountain, Snowflake, Sparkles,
  Waves, Wind,
} from 'lucide-react'

import { Ambient } from './components/Ambient'
import { Reveal } from './components/Reveal'
import {
  ArtFox, ArtNest, ArtNight, ArtPond, ArtRoll, ArtSkills, ArtSpines, ArtWeather, ArtYear, Moon, Ridge,
} from './components/Art'
import { Docs } from './Docs'
import { ScrollTop } from './components/ScrollTop'
import type { ReactNode } from 'react'

type Fact = { icon: ReactNode; t: string; d: string }
type Stat = { n: string; unit?: string; c: string }

type Ch = {
  n: string
  title: string
  lead: string
  body: ReactNode
  facts?: Fact[]
  stats?: Stat[]
  art: ReactNode
}

/* ───────────────────────── розділи-історії ───────────────────────── */

const chapters: Ch[] = [
  {
    n: '01',
    title: 'Носи світ на спині',
    lead: 'Одне яблуко — чи три ягоди й квітка?',
    body: (
      <>
        <p>
          Голки — це не меню з клітинками. Це <b>твоє обличчя</b>: усе, що ти знайшов,
          гойдається в тебе на спині, і кожен бачить, з чим ти повертаєшся.
        </p>
        <p>
          Місця мало, тож кожен похід починається з маленького вибору. І саме тому
          дорога додому щось важить.
        </p>
      </>
    ),
    facts: [
      { icon: <Backpack size={19} />, t: 'Ніякого меню', d: 'Інвентар — це буквально твої голки' },
      { icon: <Heart size={19} />, t: 'Повний їжачок — найкращий кадр', d: 'Яблуко, гриби й квіти, що хитаються на бігу' },
    ],
    art: <ArtSpines />,
  },
  {
    n: '02',
    title: 'Ліс прокидається, коли всі сплять',
    lead: 'Світлячки, місяць і тиша, яку чути.',
    body: (
      <>
        <p>
          Затишні ігри зазвичай сонячні. Ця — про <b>ніч</b>: коли повітря холоне, над
          травою спалахують вогники, а кожен шурхіт чути за десять кроків.
        </p>
        <p>
          Ти виходиш тоді, коли ліс належить тобі. Майже.
        </p>
      </>
    ),
    art: <ArtNight />,
  },
  {
    n: '03',
    title: 'Усе, що несеш, можна пустити в діло',
    lead: 'Дві сухі гілки — і темрява трохи відступає.',
    body: (
      <>
        <p>
          Ніяких дерев умінь і крамниць. Хочеш розвести вогонь — неси гілки. Хочеш
          сховати свій запах — знайди квітку.
        </p>
        <p>
          Через це кожна знахідка стає вибором: <i>зберегти на зиму — чи витратити зараз,
          щоб урятуватися?</i>
        </p>
      </>
    ),
    facts: [
      { icon: <Flame size={19} />, t: 'Вогонь', d: 'Тепле коло, у яке хижак не зайде' },
      { icon: <Wind size={19} />, t: 'Запах', d: 'Стати непомітним — коштує квітки' },
      { icon: <Sparkles size={19} />, t: 'Ривок', d: 'Гриб — рвонути й відірватися від погоні' },
    ],
    art: <ArtSkills />,
  },
  {
    n: '04',
    title: 'Лисиця памʼятає твій запах',
    lead: 'Вона не ходить по скрипту. Вона вирішує.',
    body: (
      <>
        <p>
          У неї свій характер, свій голод і свої справи. Сита — може позіхнути й піти.
          Голодна — піде по твоєму сліду, навіть не бачачи тебе.
        </p>
        <p>
          Але правила чесні для двох: <b>вона теж може тебе загубити</b>. Завмри в траві,
          зайди їй за спину, зникни в тумані.
        </p>
      </>
    ),
    facts: [
      { icon: <Eye size={19} />, t: 'Бачить перед собою', d: 'Ззаду до неї можна підкрастися' },
      { icon: <Footprints size={19} />, t: 'Іде по сліду', d: 'Запах видає тебе краще за силует' },
    ],
    art: <ArtFox />,
  },
  {
    n: '05',
    title: 'З гори — клубком',
    lead: 'Згорнувся — і поїхав.',
    body: (
      <>
        <p>
          Найшвидший спосіб дістатися вниз — і найвеселіший. Спершу поволі, потім вітер
          у вухах, а стовбури пролітають повз.
        </p>
        <p>
          Керувати можна, але <b>ліниво</b>: розігнаного клубка так просто не повернеш.
        </p>
      </>
    ),
    art: <ArtRoll />,
  },
  {
    n: '06',
    title: 'Пірни — і зникни',
    lead: 'Вода змиває твій слід.',
    body: (
      <>
        <p>
          Так, їжаки плавають — і це рятує. Лисиця добігає до берега, нюхає повітря
          і не розуміє, куди ти подівся.
        </p>
        <p>
          А ще біля води живуть жаби. Пройдеш тихо — навіть не поворухнуться.
          Побіжиш — <b>порснуть урізнобіч</b>.
        </p>
      </>
    ),
    art: <ArtPond />,
  },
  {
    n: '07',
    title: 'Погода змінює правила',
    lead: 'Туман засліплює обох.',
    body: (
      <>
        <p>
          Дощ прибиває запахи й ліпить листя тобі на голки. Туман з’їдає ліс на кілька
          кроків — і головним чуттям стає ніс.
        </p>
        <p>
          Погода тут не картинка на фоні. Це те, під що <b>підлаштовуєш плани</b>.
        </p>
      </>
    ),
    facts: [
      { icon: <CloudRain size={19} />, t: 'Дощ по голках', d: 'Той самий звук, заради якого хочеться сидіти й слухати' },
      { icon: <CloudFog size={19} />, t: 'Ранковий туман', d: 'Небезпечно. І неймовірно красиво' },
    ],
    art: <ArtWeather />,
  },
  {
    n: '08',
    title: 'Рік, що справді минає',
    lead: 'Ночі коротшають до літа й довшають до зими.',
    body: (
      <>
        <p>
          Весна дарує квіти, літо — ягоди, осінь засипає ліс грибами й яблуками.
          А потім ночі стають довгими, і ти розумієш: часу лишилось небагато.
        </p>
      </>
    ),
    stats: [
      { n: '4', c: 'сезони, що змінюють усе' },
      { n: '12', c: 'ночей до першого снігу' },
      { n: '0', c: 'способів програти' },
    ],
    art: <ArtYear />,
  },
  {
    n: '09',
    title: 'Уся зима залежить від тебе',
    lead: 'Тут не можна програти. Можна лише зустріти зиму по-різному.',
    body: (
      <>
        <p>
          Немає смерті, немає напису «ти програв». Є тільки гніздо, комора — і те,
          наскільки тепло тобі буде спати.
        </p>
        <p>
          <i>«Гніздо тепле, комора повна. Їжачок згортається в затишний клубочок
          і поринає в солодкі сни аж до весни».</i>
        </p>
      </>
    ),
    art: <ArtNest />,
  },
]

const pillars = [
  { icon: <Backpack size={22} />, t: 'Усе на голках', d: 'Інвентар, який видно. Навантажений їжачок — це вже картинка' },
  { icon: <MoonIcon size={22} />, t: 'Нічна гра', d: 'Ти прокидаєшся тоді, коли решта лісу засинає' },
  { icon: <Mountain size={22} />, t: 'Без насильства', d: 'Від хижаків не відбиваються — від них ховаються' },
  { icon: <Gauge size={22} />, t: 'Без поразки', d: 'Ніяких очок здоровʼя. Лише мʼякі наслідки' },
]

const moments = [
  { icon: <CloudRain size={18} />, t: 'Дощ стукає по голках' },
  { icon: <Bug size={18} />, t: 'Метелик сідає на ніс' },
  { icon: <Sparkles size={18} />, t: 'Світлячки над ставком' },
  { icon: <Leaf size={18} />, t: 'Стрибок у купу листя' },
  { icon: <Waves size={18} />, t: 'Жаби порскають з-під лап' },
  { icon: <Snowflake size={18} />, t: 'Перший сніг' },
]

/* ───────────────────────── компоненти ───────────────────────── */

function Chapter({ c, i }: { c: Ch; i: number }) {
  return (
    <section className={`chapter${i % 2 ? ' flip' : ''}`}>
      <div className="wrap ch-grid">
        <div>
          <Reveal>
            <div className="ch-num">{c.n}</div>
            <h2 className="ch-title">{c.title}</h2>
            <p className="ch-lead">{c.lead}</p>
            <div className="ch-body">{c.body}</div>
          </Reveal>

          {c.stats && (
            <Reveal delay={90}>
              <div className="stats">
                {c.stats.map(s => (
                  <div key={s.c}>
                    <div className="stat-n">{s.n}{s.unit && <small>{s.unit}</small>}</div>
                    <div className="stat-c">{s.c}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {c.facts && (
            <div className="facts">
              {c.facts.map((f, k) => (
                <Reveal key={f.t} delay={60 + k * 70}>
                  <div className="fact">
                    {f.icon}
                    <div>
                      <div className="fact-t">{f.t}</div>
                      <div className="fact-d">{f.d}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <Reveal delay={120}>
          <div className="art">{c.art}</div>
        </Reveal>
      </div>
    </section>
  )
}

function Landing() {
  return (
    <>
      <Ambient />
      <div className="page">
        <header className="hero">
          <Moon />
          <div className="hero-inner wrap">
            <div className="eyebrow">cozy life simulator · у розробці</div>
            <h1>Їжачок</h1>
            <p className="tagline">рік із життя маленької істоти у великому лісі</p>

            <div className="hero-meta">
              <span><MoonIcon size={16} /> нічна гра</span>
              <span><Mountain size={16} /> без насильства</span>
              <span><Gauge size={16} /> без Game Over</span>
            </div>

            <div className="hero-cta">
              <a className="cta ghost" href="#/docs">
                <BookOpen size={17} />
                Технічний довідник
              </a>
            </div>
          </div>
          <div className="ridge"><Ridge /></div>
          <div className="scroll-hint">гортай <ArrowDown size={17} /></div>
        </header>

        <main>
          {/* гачок */}
          <section className="hook" id="story">
            <div className="wrap">
              <Reveal>
                <h2>Попереду зима. У тебе — кілька ночей.</h2>
                <p>
                  Ніхто тебе не квапить і не рахує очки. Ти просто ходиш нічним лісом,
                  збираєш те, що знайдеш, і носиш додому. А коли впаде перший сніг —
                  ліс тихо підсумує, як ти прожив цей рік.
                </p>
              </Reveal>
            </div>
          </section>

          {/* чотири стовпи */}
          <section className="pillars">
            <div className="wrap pillar-grid">
              {pillars.map((p, i) => (
                <Reveal key={p.t} delay={i * 80}>
                  <div className="pillar">
                    {p.icon}
                    <h3>{p.t}</h3>
                    <p>{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {chapters.map((c, i) => <Chapter key={c.n} c={c} i={i} />)}

          {/* маленькі радощі */}
          <section className="moments">
            <div className="wrap">
              <Reveal>
                <h2 className="center-title">Миті, заради яких усе</h2>
              </Reveal>
              <div className="moment-grid">
                {moments.map((m, i) => (
                  <Reveal key={m.t} delay={i * 60}>
                    <div className="moment">{m.icon}<span>{m.t}</span></div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* для кого */}
          <section className="audience">
            <div className="wrap">
              <Reveal>
                <h2 className="center-title">Якщо тобі заходили</h2>
                <div className="tech">
                  {['Stardew Valley', 'A Short Hike', 'Unpacking', 'Lil Gator Game', 'Unravel Two'].map(t => (
                    <span className="chip" key={t}><Heart size={14} />{t}</span>
                  ))}
                </div>
                <p className="audience-note">…то ти вже знаєш, що тут відбувається.</p>
              </Reveal>
            </div>
          </section>

          {/* фінал */}
          <section className="closing wrap">
            <Reveal>
              <h2>Прототип уже живий</h2>
              <p>
                Ліс, лисиці, сезони, погода й зима вже працюють. Далі — звуки,
                друзі-тварини й нові куточки лісу.
              </p>
              <div className="hero-cta center">
                <a className="cta" href="#/docs">
                  <BookOpen size={18} />
                  Подивитися, як це зроблено
                  <ArrowRight size={17} className="cta-go" />
                </a>
              </div>
            </Reveal>
          </section>
        </main>

        <footer>Їжачок · прототип · зроблено з любовʼю до маленьких колючих істот</footer>
      </div>
    </>
  )
}

export default function App() {
  // Маршрут — лише те, що починається з "#/". Усе інше («#story») —
  // це якір усередині сторінки, і чіпати маршрут не можна.
  const [route, setRoute] = useState(() =>
    location.hash.startsWith('#/') ? location.hash.slice(2) : '',
  )

  useEffect(() => {
    const onHash = () => {
      if (!location.hash.startsWith('#/')) return
      setRoute(location.hash.slice(2))
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <>
      {route === 'docs' ? <Docs /> : <Landing />}
      <ScrollTop />
    </>
  )
}

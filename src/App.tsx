import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, Backpack, BookOpen, CloudFog, CloudRain, Compass, Eye, Flame,
  Footprints, Gauge, Leaf, Moon as MoonIcon, Mountain, Save, Snowflake, Sparkles, Waves, Wind,
} from 'lucide-react'

import { Ambient } from './components/Ambient'
import { Reveal } from './components/Reveal'
import {
  ArtFox, ArtNest, ArtPond, ArtRoll, ArtSkills, ArtSpines, ArtWeather, ArtYear, Moon, Ridge,
} from './components/Art'
import type { ReactNode } from 'react'
import { Docs } from './Docs'

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

const chapters: Ch[] = [
  {
    n: '01',
    title: 'Носи світ на спині',
    lead: 'Голки — не інвентар, а логістична задача.',
    body: (
      <>
        <p>
          У їжачка немає ні рук, ні кишень. Усе, що він несе, <b>видно на спині</b> — і місця
          там рівно стільки, скільки є. Тому кожен похід починається з вибору.
        </p>
        <p>
          Предмети займають різне місце: одне яблуко «зʼїдає» стільки ж, скільки три ягоди.
          Взяти велике — чи набрати дрібного? Це і є та сама головоломка, заради якої все.
        </p>
      </>
    ),
    stats: [
      { n: '8', c: 'одиниць місця на голках' },
      { n: '3', c: 'класи розміру предметів' },
      { n: '12', unit: 'з «Оберемком»', c: 'коли звʼязав гілочками' },
    ],
    art: <ArtSpines />,
  },
  {
    n: '02',
    title: 'Сила там, де є ресурс',
    lead: 'Скіли не купуються й не вибираються з меню — вони крафтяться просто на ходу.',
    body: (
      <>
        <p>
          Жодних талісманів і полиць з апгрейдами. Скіл спрацьовує тоді, коли на голках
          є потрібне, і <b>витрачає це саме</b>. Дві гілки — багаття. Гриб — приплив сил.
          Квітка — і твій запах зникає.
        </p>
        <p>
          Через це кожна знахідка стає двозначною: <i>зберегти на зиму чи спалити зараз,
          щоб утекти?</i>
        </p>
      </>
    ),
    facts: [
      { icon: <Flame size={19} />, t: 'Багаття · 2 гілки', d: 'Лисиці не заходять у вогонь — коло безпеки на 20 секунд' },
      { icon: <Sparkles size={19} />, t: 'Бадьорість · 1 гриб', d: 'Хвилину витривалість тане вдвічі повільніше' },
      { icon: <Wind size={19} />, t: 'Маскування · 1 квітка', d: 'Слід зникає — але й сам гірше чуєш корм' },
      { icon: <Backpack size={19} />, t: 'Оберемок · 2 гілки', d: 'Несеш більше, поки не донесеш додому' },
    ],
    art: <ArtSkills />,
  },
  {
    n: '03',
    title: 'Хитрі, але чесні',
    lead: 'Лисиця не скрипт на рейках. У неї потреби, характер і два справжні чуття.',
    body: (
      <>
        <p>
          Вона голодніє, втомлюється й вирішує сама: полювати чи піти спати. Сита або боязка —
          може й проігнорувати тебе.
        </p>
        <p>
          Бачить <b>конусом</b>, тож повз неї реально прокрастися ззаду. А ще йде
          <b> по запаховому сліду</b>, навіть не бачачи. Але правила однакові для двох:
          у тумані вона сліпне так само, як і ти.
        </p>
      </>
    ),
    facts: [
      { icon: <Eye size={19} />, t: 'Зір конусом 55°', d: 'Біг помітний, хода тихіша, нерухомість ховає' },
      { icon: <Footprints size={19} />, t: 'Слід запаху', d: 'Веде до тебе наосліп — поки не змиє вода' },
      { icon: <Compass size={19} />, t: 'Характер', d: 'Сміливість, лінь, цікавість — усі чотири різні' },
    ],
    art: <ArtFox />,
  },
  {
    n: '04',
    title: 'Клубочок котиться',
    lead: 'Згорнувся на схилі — і поїхав. Спершу повільно, далі не спинити.',
    body: (
      <>
        <p>
          Розганяє лише та частина тяжіння, що збігається з твоїм курсом — тож угору не виїдеш,
          а впоперек схилу поволі згасатимеш. Це не «заплатка», а сама формула.
        </p>
        <p>
          Кермувати можна, але <b>ліниво</b>: чим швидше котишся, тим важче довертати.
          А впертись лапками й утриматись вийде, лише поки не розігнався.
        </p>
      </>
    ),
    stats: [
      { n: '8.0', c: 'максимум кочення (біг — 3.8)' },
      { n: '×0.25', c: 'швидкості лишиться, якщо влетиш у дерево' },
    ],
    art: <ArtRoll />,
  },
  {
    n: '05',
    title: 'Вода все змиває',
    lead: 'Досі від лисиці не було ради. Тепер є — але доведеться намокнути.',
    body: (
      <>
        <p>
          У воді слід не лишається, а лисиці туди не лізуть. Вона добігає до берега — і губить
          тебе. Чесний шлях відірватися, а не чит.
        </p>
        <p>
          Влетів у ставок із розгону? Вода <b>зʼїсть половину швидкості за чверть секунди</b>,
          а решту ти ковзатимеш, і лапки нічого не вирішуватимуть.
        </p>
      </>
    ),
    facts: [
      { icon: <Waves size={19} />, t: 'Їжаки справді плавають', d: 'Маловідомий факт, який став механікою' },
      { icon: <Leaf size={19} />, t: 'Жаби живуть своїм життям', d: 'Хода їх не лякає — а біг і фиркання розганяють урізнобіч' },
    ],
    art: <ArtPond />,
  },
  {
    n: '06',
    title: 'Погода як правило гри',
    lead: 'Дощ і туман — не декорація, а зміна умов для обох сторін.',
    body: (
      <>
        <p>
          Туман падає до чотирнадцяти кроків видимості — і зір майже вимикається.
          Головним чуттям стає ніс.
        </p>
        <p>
          А ще він приходить <b>після дощу</b>, як у житті: мокра земля віддає вологу, і вона
          конденсується. Восени, коли злив найбільше, туман стоїть майже щоночі.
        </p>
      </>
    ),
    facts: [
      { icon: <CloudRain size={19} />, t: 'Дощ', d: 'Листя липне до їжака — осінній look задарма' },
      { icon: <CloudFog size={19} />, t: 'Туман після дощу — 70%', d: 'Наповзає 6 секунд, розсіюється 10' },
    ],
    art: <ArtWeather />,
  },
  {
    n: '07',
    title: 'Рік за дванадцять ночей',
    lead: 'Кожен ігровий день — це місяць. Ніч ходить синусоїдою, як у природі.',
    body: (
      <>
        <p>
          Найкоротша ніч — на літньому сонцестоянні, найдовша — на зимовому. Виходить природний
          ритм, якого ніхто не вигадував: <b>літо тисне часом</b>, зате дає ягоди, а
          <b> осінь дарує довгі ночі</b> саме тоді, коли треба встигнути найбільше.
        </p>
      </>
    ),
    stats: [
      { n: '100', unit: 'с', c: 'ніч у червні — найкоротша' },
      { n: '193', unit: 'с', c: 'ніч у листопаді — остання перед зимою' },
    ],
    art: <ArtYear />,
  },
  {
    n: '08',
    title: 'І приходить зима',
    lead: 'Тут гра не програється. Вона просто підбиває підсумок.',
    body: (
      <>
        <p>
          Немає смерті й немає «Game Over». Є лише те, наскільки тепло й ситно ти проведеш зиму —
          і воно цілком залежить від того, скільки ночей ти не полінувався.
        </p>
        <p>
          <i>«Гніздо тепле, комора повна. Їжачок згортається в затишний клубочок
          і поринає в солодкі сни аж до весни».</i>
        </p>
      </>
    ),
    facts: [
      { icon: <Snowflake size={19} />, t: 'Чотири фінали', d: 'Від «голодної зими» до «затишної й ситої»' },
      { icon: <Save size={19} />, t: 'Зберігаєшся, коли лягаєш спати', d: 'Тихо, без меню — і завжди в безпечну мить' },
    ],
    art: <ArtNest />,
  },
]

function Chapter({ c, i }: { c: Ch; i: number }) {
  return (
    <section className={`chapter${i % 2 ? ' flip' : ''}`}>
      <div className="wrap ch-grid">
        <div>
          <Reveal>
            <div className="ch-num">РОЗДІЛ {c.n}</div>
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

export default function App() {
  // Маршрут — лише те, що починається з "#/". Усе інше («#керування») —
  // це якір усередині сторінки, і чіпати маршрут не можна, інакше клік
  // у змісті документації викидав назад на лендінг.
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

  if (route === 'docs') return <Docs />

  return (
    <>
      <Ambient />
      <div className="page">
        <header className="hero">
          <Moon />
          <div className="hero-inner wrap">
            <div className="eyebrow">cozy life simulator · прототип</div>
            <h1>Їжачок</h1>
            <p className="tagline">рік із життя маленької істоти у великому лісі</p>
            <div className="hero-meta">
              <span><MoonIcon size={16} /> нічна гра</span>
              <span><Mountain size={16} /> без насильства</span>
              <span><Gauge size={16} /> без Game Over</span>
            </div>

            <a className="cta" href="#/docs">
              <BookOpen size={18} />
              Документація
              <ArrowRight size={17} className="cta-go" />
            </a>
          </div>
          <div className="ridge"><Ridge /></div>
          <div className="scroll-hint">гортай <ArrowDown size={17} /></div>
        </header>

        <main>
          {chapters.map((c, i) => <Chapter key={c.n} c={c} i={i} />)}

          <section className="closing wrap">
            <Reveal>
              <h2>Світ, якого немає в редакторі</h2>
              <p>
                Ліс, пагорби, ставки, лисиці — усе це збирається кодом у момент запуску.
                Жодного обʼєкта не розставлено руками.
              </p>
              <div className="tech">
                {['Unity 6 · URP', 'C#', 'Рельєф із мешу', 'Utility AI', 'Реєстри замість пошуку по сцені', 'Детерміноване збереження'].map(t => (
                  <span className="chip" key={t}><Leaf size={15} />{t}</span>
                ))}
              </div>
            </Reveal>
          </section>
        </main>

        <footer>Їжачок · прототип v0.1 · зроблено з любовʼю до маленьких колючих істот</footer>
      </div>
    </>
  )
}

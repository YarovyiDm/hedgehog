import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, Backpack, Bird, BookOpen, CloudFog, CloudRain, Droplets, Eye, Flame,
  Footprints, Gauge, Heart, Leaf, Moon as MoonIcon, Mountain, Snowflake, Sparkles,
  Squirrel, Sun, Trees, Waves, Wind, Worm,
} from 'lucide-react'

import { Ambient } from './components/Ambient'
import { Reveal } from './components/Reveal'
import {
  ArtCritters, ArtFox, ArtNest, ArtNight, ArtPond, ArtRoll, ArtSkills, ArtSpines, ArtWeather, ArtYear, Moon, Ridge,
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
      { icon: <Heart size={19} />, t: 'Повний їжачок — найкращий кадр', d: 'Боровик, яблуко, горіх і суниці, наколоті просто на голки' },
    ],
    art: <ArtSpines />,
  },
  {
    n: '02',
    title: 'Ніс знає більше, ніж очі',
    lead: 'Їжачок бачить погано. Зате чує все.',
    body: (
      <>
        <p>
          Понюхай повітря — і в ньому проступлять <b>тонкі пасма запаху</b>: у бік боровика під дубом,
          суниць на узліссі, яблука під старою яблунею. Що ближче — то густіше пасмо й чіткіший
          силует того, чим пахне.
        </p>
        <p>
          Запах не веде за руку: напрям трохи пливе, вітер несе його далі з одного боку й ховає з іншого.
          Біжиш, нюхаєш, знову біжиш — і ліс перетворюється на гру в «тепло-холодно».
        </p>
      </>
    ),
    facts: [
      { icon: <Wind size={19} />, t: 'Вітер має значення', d: 'З навітряного боку запах чути майже вдвічі далі' },
      { icon: <Eye size={19} />, t: 'І небезпека теж пахне', d: 'Червонувате пасмо — десь поруч лисиця' },
    ],
    art: <ArtSkills />,
  },
  {
    n: '03',
    title: 'Ліс прокидається, коли всі сплять',
    lead: 'Кожна ніч починається із заходу сонця.',
    body: (
      <>
        <p>
          Сонце ще визирає з-за обрію, помаранчеві промені пробиваються крізь ліс, а зі сходу
          виходить місяць. За хвилину небо синіє, проступають зорі — і над травою спалахують світлячки.
        </p>
        <p>
          Ти виходиш тоді, коли ліс належить тобі. Майже.
        </p>
      </>
    ),
    facts: [
      { icon: <Sun size={19} />, t: 'Промені крізь ліс', d: 'Низьке тепле світло й довгі тіні на початку кожної ночі' },
      { icon: <MoonIcon size={19} />, t: 'Місячна ніч', d: 'Відблиск місяця на воді, мерехтливі зорі' },
    ],
    art: <ArtNight />,
  },
  {
    n: '04',
    title: 'Ліс, що росте як справжній',
    lead: 'Кожна травинка — на своєму місці.',
    body: (
      <>
        <p>
          Сосни тримаються сухих пагорбів, ялини — вологих низин, берези виходять на узлісся, а вільхи
          стоять над водою, виставивши коріння арками. Під кожним деревом — своє: жолуді й дубове листя,
          шишки й хвоя, береста й сережки.
        </p>
        <p>
          Трава ходить хвилями за вітром і розступається перед тобою, за спиною лишається прим’ята стежка,
          а в тіні під кронами ростуть папороть і мох. Усе намальоване вручну — від кори до пелюстки.
        </p>
      </>
    ),
    facts: [
      { icon: <Trees size={19} />, t: 'Шість порід дерев', d: 'Дуб, сосна, ялина, береза, вільха й дика яблуня — кожна зі своєю корою' },
      { icon: <Leaf size={19} />, t: 'Їжа там, де їй місце', d: 'Горіхи під ліщиною, лисички в моху під ялинами, ожина на узліссі' },
    ],
    art: <ArtYear />,
  },
  {
    n: '05',
    title: 'Усе, що несеш, можна пустити в діло',
    lead: 'Дві сухі гілки — і темрява трохи відступає.',
    body: (
      <>
        <p>
          Ніяких дерев умінь і крамниць. Хочеш розвести вогонь — неси гілки. Хочеш
          сховати свій запах — знайди дзвоники.
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
    n: '06',
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
    n: '07',
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
    n: '08',
    title: 'Пірни — і зникни',
    lead: 'Вода змиває твій слід.',
    body: (
      <>
        <p>
          Так, їжаки плавають — і це рятує. Лисиця добігає до берега, нюхає повітря
          і не розуміє, куди ти подівся.
        </p>
        <p>
          Струмок біжить між ставками, під водою гойдаються водорості, на гладі цвіте латаття.
          Плюхнешся з розгону — розійдуться кола й полетять бризки.
        </p>
        <p>
          А ще біля води живуть жаби: кумкають, надуваючи горло, й гребуть лапками. Пройдеш тихо —
          навіть не поворухнуться. Побіжиш — <b>порснуть урізнобіч</b>.
        </p>
      </>
    ),
    art: <ArtPond />,
  },
  {
    n: '09',
    title: 'Ліс живе своїм життям',
    lead: 'Пташки в кронах, метелики над галявиною, білки при деревах.',
    body: (
      <>
        <p>
          Поки ти збираєш на зиму, ліс не стоїть декорацією. У кожного своя справа:
          <b> білка</b> порається біля свого дерева, <b>черв’ячок</b> ліниво повзе травою,
          <b> жучок</b> снує у власних клопотах.
        </p>
        <p>
          Над галявиною пурхають метелики й сідають на траву, над ставком зависають бабки, а з крони
          в крону перелітають горобці, синиці й зяблики — вилітають з листя й пірнають у сусіднє дерево.
        </p>
        <p>
          Підійдеш ближче — білка кине все й <b>чкурне вгору стовбуром</b>, а черв’як
          сховається під землю. Не ловець і не здобич — просто сусіди, з якими ліс живий.
        </p>
      </>
    ),
    facts: [
      { icon: <Squirrel size={19} />, t: 'Білки при деревах', d: 'Гуляють своєю галявинкою, а злякавшись — миттю на стовбур' },
      { icon: <Bird size={19} />, t: 'Пташки й метелики', d: 'Перелітають з дерева на дерево, пурхають над квітами' },
      { icon: <Worm size={19} />, t: 'Дрібне життя внизу', d: 'Черв’ячки й жучки в траві — зникають, щойно підходиш' },
    ],
    art: <ArtCritters />,
  },
  {
    n: '10',
    title: 'Погода змінює правила',
    lead: 'Туман засліплює обох.',
    body: (
      <>
        <p>
          Дощ прибиває запахи й ліпить листя тобі на голки. Ліс поволі мокріє й темніє,
          під кронами майже сухо — лише зрідка падає важка крапля з листя. Струснешся — з голок
          розлетяться бризки.
        </p>
        <p>
          Туман з’їдає ліс на кілька кроків — і головним чуттям стає ніс.
        </p>
        <p>
          Погода тут не картинка на фоні. Це те, під що <b>підлаштовуєш плани</b>.
        </p>
      </>
    ),
    facts: [
      { icon: <CloudRain size={19} />, t: 'Дощ по голках', d: 'Той самий звук, заради якого хочеться сидіти й слухати' },
      { icon: <Droplets size={19} />, t: 'Мокрий ліс', d: 'Земля темніє, листя блищить, з кущів сиплються краплі' },
      { icon: <CloudFog size={19} />, t: 'Ранковий туман', d: 'Небезпечно. І неймовірно красиво' },
    ],
    art: <ArtWeather />,
  },
  {
    n: '11',
    title: 'Рік, що справді минає',
    lead: 'Ночі коротшають до літа й довшають до зими.',
    body: (
      <>
        <p>
          Весна дарує квіти й перші суниці, літо — ягоди й лисички, осінь засипає ліс боровиками,
          горіхами й яблуками, а взимку на кущах лишається хіба шипшина.
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
    n: '12',
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
  { icon: <Squirrel size={18} />, t: 'Білка зиркає зі стовбура' },
  { icon: <Sparkles size={18} />, t: 'Світлячки над ставком' },
  { icon: <Sun size={18} />, t: 'Захід сонця крізь ліс' },
  { icon: <Bird size={18} />, t: 'Пташка пірнає в крону' },
  { icon: <Droplets size={18} />, t: 'Струсити дощ із голок' },
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
                Живий мальований ліс, нюх, лисиці, жаби й пташки, сезони, погода й зима вже працюють. Далі — звуки,
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

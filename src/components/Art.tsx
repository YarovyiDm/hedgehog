/**
 * Ілюстрації сайту: м'які силуети нічного лісу (SVG) + справжні мальовані спрайти й рендери з гри
 * (предмети, квіти, латаття, жаби, лісова сцена — з атласів Meshy й моделей Blender, `src/assets/art`).
 */
import porcini from '../assets/art/porcini.png'
import apple from '../assets/art/apple.png'
import strawberry from '../assets/art/strawberry.png'
import hazelnut from '../assets/art/hazelnut.png'
import chanterelle from '../assets/art/chanterelle.png'
import twig from '../assets/art/twig.png'
import moss from '../assets/art/moss.png'
import blackberry from '../assets/art/blackberry.png'
import rosehip from '../assets/art/rosehip.png'
import bluebell from '../assets/art/bluebell.png'
import daisy from '../assets/art/daisy.png'
import acorn from '../assets/art/acorn.png'
import oakleaf from '../assets/art/oakleaf.png'
import lilypad from '../assets/art/lilypad.png'
import lilywhite from '../assets/art/lilywhite.png'
import grass1 from '../assets/art/grass1.png'
import grass2 from '../assets/art/grass2.png'
import grass3 from '../assets/art/grass3.png'
import fern from '../assets/art/fern.png'
import frog1 from '../assets/art/frog1.png'
import frog2 from '../assets/art/frog2.png'
import forest from '../assets/art/forest.png'

/** Мальований спрайт: (x, y) — центр низу, h — висота. */
function Sprite({ href, x, y, h, w, rot = 0, o = 1, white = false }: { href: string; x: number; y: number; h: number; w?: number; rot?: number; o?: number; white?: boolean }) {
  const ww = w ?? h
  return (
    <image href={href} x={x - ww / 2} y={y - h} width={ww} height={h} opacity={o}
      transform={rot ? `rotate(${rot} ${x} ${y - h / 2})` : undefined}
      filter={white ? 'url(#toWhite)' : undefined} preserveAspectRatio="xMidYMax meet" />
  )
}

/** Фільтр «силует білим» (іконки запаху). Вставляється в кожен SVG, де потрібен. */
function WhiteDefs() {
  return (
    <defs>
      <filter id="toWhite" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 .97  0 0 0 1 0" />
      </filter>
    </defs>
  )
}

/** Кущик мальованої трави. */
function Tuft({ x, y, h = 30, k = 0 }: { x: number; y: number; h?: number; k?: number }) {
  return <Sprite href={[grass1, grass2, grass3][k % 3]} x={x} y={y} h={h} w={h * 1.25} />
}

const C = {
  dark: '#0f1a16',
  ground: '#33513f',
  ground2: '#3f6349',
  trunk: '#7b4a34',
  leaf: '#4e8c52',
  leaf2: '#3c7343',
  hog: '#8b6c54',
  spine: '#57432f',
  fox: '#d9702a',
  foxLight: '#eea067',
  water: '#3f7fa8',
  waterTop: '#5b9fc7',
  cream: '#f5e7c9',
  ember: '#e28b3e',
  moss: '#86b96b',
  frog: '#5e9a4a',
  mist: '#a9c0bb',
  squirrel: '#a0632f',
  squirrelTail: '#bd8049',
  squirrelBelly: '#e0bd93',
  worm: '#d98a8a',
  beetle: '#2a241c',
}

/* ---------- гряда під героєм ---------- */
export function Ridge() {
  return (
    <svg viewBox="0 0 1440 260" preserveAspectRatio="none" style={{ width: '100%', height: '34vh', display: 'block' }}>
      <path d="M0 150 L180 96 L330 140 L520 78 L700 132 L880 88 L1080 138 L1260 100 L1440 146 L1440 260 L0 260Z" fill="#132019" opacity=".9" />
      <path d="M0 186 L200 140 L400 178 L610 130 L820 172 L1030 136 L1250 180 L1440 148 L1440 260 L0 260Z" fill="#16281f" />
      <path d="M0 220 L240 190 L470 216 L720 186 L980 214 L1230 190 L1440 214 L1440 260 L0 260Z" fill="#1b3025" />
      {[120, 350, 610, 900, 1180, 1380].map((x, i) => (
        <g key={x} opacity={0.55 + (i % 3) * 0.12}>
          <rect x={x - 3} y={196 - i % 2 * 12} width="6" height="34" fill="#0e1a14" />
          <path d={`M${x - 20} ${198 - (i % 2) * 12} L${x} ${152 - (i % 2) * 16} L${x + 20} ${198 - (i % 2) * 12}Z`} fill="#132a1d" />
        </g>
      ))}
    </svg>
  )
}

/* ---------- місяць ---------- */
export function Moon() {
  return (
    <svg viewBox="0 0 200 200" style={{ position: 'absolute', top: '9%', right: '11%', width: 'clamp(90px,13vw,180px)', opacity: 0.95 }}>
      <circle cx="100" cy="100" r="66" fill="#f2ead2" opacity=".08" />
      <circle cx="100" cy="100" r="52" fill="#f6efd9" opacity=".14" />
      <circle cx="100" cy="100" r="40" fill="#f7f0dd" />
      <circle cx="86" cy="88" r="8" fill="#e6dcc2" opacity=".7" />
      <circle cx="112" cy="110" r="5.5" fill="#e6dcc2" opacity=".6" />
      <circle cx="98" cy="118" r="3.5" fill="#e6dcc2" opacity=".5" />
    </svg>
  )
}

/* ---------- 01 · голки й вантаж ---------- */
export function ArtSpines() {
  return (
    <svg viewBox="0 0 400 300">
      <ellipse cx="200" cy="252" rx="120" ry="16" fill="#0b120f" opacity=".55" />
      {/* тіло */}
      <ellipse cx="196" cy="206" rx="96" ry="56" fill={C.hog} />
      <ellipse cx="188" cy="196" rx="86" ry="48" fill={C.spine} />
      {/* мордочка */}
      <ellipse cx="298" cy="216" rx="34" ry="26" fill={C.hog} />
      <circle cx="326" cy="218" r="7" fill="#20160f" />
      <circle cx="306" cy="204" r="4.5" fill="#20160f" />
      {/* голки */}
      {Array.from({ length: 13 }, (_, i) => {
        const x = 116 + i * 13
        const h = 20 + Math.sin(i * 0.9) * 7
        return (
          <g key={i}>
            <path d={`M${x} 172 L${x + 6} ${152 - h} L${x + 12} 172Z`} fill="#4a3a2c" />
            <path d={`M${x + 4} ${160 - h * .55} L${x + 6} ${152 - h} L${x + 8} ${160 - h * .55}Z`} fill="#e9dcc3" />
          </g>
        )
      })}
      {Array.from({ length: 11 }, (_, i) => {
        const x = 124 + i * 14
        return <path key={'b' + i} d={`M${x} 196 L${x + 7} ${172 - (i % 3) * 4} L${x + 14} 196Z`} fill="#5a4636" stroke="#2a2018" strokeWidth=".8" />
      })}
      {/* вантаж, наколотий на голки: яблуко(3) · боровик(2) · горіх(1) · суниці(1) */}
      <Sprite href={apple} x={150} y={178} h={74} rot={-8} />
      <Sprite href={porcini} x={214} y={168} h={72} rot={4} />
      <Sprite href={hazelnut} x={262} y={176} h={44} rot={10} />
      <Sprite href={strawberry} x={184} y={150} h={44} rot={-14} />
      {[[150, 96, '3'], [218, 88, '2'], [266, 124, '1']].map(([x, y, n]) => (
        <g key={n + String(x)}>
          <circle cx={x as number} cy={y as number} r="10" fill="#0f1a16" opacity=".75" />
          <text x={x as number} y={(y as number) + 4.5} textAnchor="middle" fill={C.cream} fontSize="12" fontWeight="700" fontFamily="Lora, serif">{n}</text>
        </g>
      ))}
      {/* лапки */}
      <rect x="150" y="248" width="20" height="10" rx="5" fill={C.spine} />
      <rect x="238" y="248" width="20" height="10" rx="5" fill={C.spine} />
    </svg>
  )
}

/* ---------- 02 · скіли ---------- */
export function ArtSkills() {
  const row = (y: number, item: React.ReactNode, glyph: React.ReactNode, label: string) => (
    <g>
      {item}
      <path d={`M150 ${y} L214 ${y}`} stroke={C.ember} strokeWidth="2.5" strokeDasharray="7 6" />
      <path d={`M214 ${y} l-9 -6 l0 12 Z`} fill={C.ember} />
      {glyph}
      {/* прикріплено до правого краю (text-anchor end) — тож підпис ніколи не вилазить */}
      <text x="392" y={y + 5} textAnchor="end" fill={C.mist} fontSize="13" fontFamily="Inter, sans-serif">{label}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 400 300">
      {/* трохи ліворуч, щоб композиція «інгредієнт → ефект → підпис» була по центру */}
      <g transform="translate(-26 0)">
        {row(66,
          <g><Sprite href={twig} x={112} y={92} h={44} w={60} /></g>,
          <g><path d="M252 82 q10-30 24-14 q12-20 22 8 q6 20-23 20 q-27 0-23-14Z" fill={C.ember} /></g>,
          'багаття')}
        {row(150,
          <g><Sprite href={porcini} x={112} y={176} h={52} /></g>,
          <g><path d="M262 136 l8 18 l18 4 l-14 13 l4 19 l-16-10 l-16 10 l4-19 l-14-13 l18-4Z" fill={C.moss} /></g>,
          'бадьорість')}
        {row(234,
          <g><Sprite href={bluebell} x={112} y={262} h={54} w={60} /></g>,
          <g><ellipse cx="272" cy="230" rx="26" ry="17" fill="none" stroke={C.mist} strokeWidth="3" strokeDasharray="6 7" />
             <circle cx="272" cy="230" r="7" fill={C.mist} opacity=".5" /></g>,
          'маскування')}
      </g>
    </svg>
  )
}

/* ---------- 03 · лисиця, чуття ---------- */
export function ArtFox() {
  return (
    <svg viewBox="0 0 400 300">
      <ellipse cx="200" cy="262" rx="150" ry="14" fill="#0b120f" opacity=".5" />
      {/* конус зору */}
      <path d="M262 168 L60 78 L60 236Z" fill={C.ember} opacity=".13" />
      <path d="M262 168 L60 78 M262 168 L60 236" stroke={C.ember} strokeWidth="1.6" opacity=".45" strokeDasharray="8 7" />
      {/* слід запаху */}
      {[0, 1, 2, 3, 4].map(i => (
        <circle key={i} cx={92 + i * 30} cy={228 - i * 5} r={8 - i} fill={C.moss} opacity={0.55 - i * 0.08} />
      ))}
      {/* лисиця */}
      <g>
        <ellipse cx="286" cy="196" rx="62" ry="34" fill={C.fox} />
        <path d="M338 186 q40-16 46-44 q6 26-16 48 q-14 14-30 10Z" fill="#f0eae0" />
        <ellipse cx="236" cy="182" rx="30" ry="22" fill={C.foxLight} />
        <path d="M222 164 L214 132 L242 152Z" fill={C.fox} />
        <path d="M252 160 L250 128 L272 152Z" fill={C.fox} />
        <circle cx="215" cy="180" r="5.5" fill="#22150c" />
        <circle cx="240" cy="176" r="4" fill="#22150c" />
        <rect x="258" y="222" width="14" height="26" rx="6" fill={C.fox} />
        <rect x="304" y="222" width="14" height="26" rx="6" fill={C.fox} />
      </g>
      {/* тел «полює» */}
      <circle cx="286" cy="128" r="9" fill="#e2503e" />
      <circle cx="286" cy="128" r="16" fill="#e2503e" opacity=".22" />
    </svg>
  )
}

/* ---------- 04 · пагорб і кочення ---------- */
export function ArtRoll() {
  return (
    <svg viewBox="0 0 400 300">
      <path d="M0 250 Q120 60 400 232 L400 300 L0 300Z" fill={C.ground} />
      <path d="M0 262 Q130 86 400 246 L400 300 L0 300Z" fill={C.ground2} opacity=".55" />
      {/* траєкторія */}
      <path d="M96 118 Q188 150 300 220" stroke={C.cream} strokeWidth="2" fill="none" strokeDasharray="5 9" opacity=".45" />
      {/* клубок на розгоні */}
      {[{ x: 118, y: 126, r: 13, o: .22 }, { x: 178, y: 152, r: 15, o: .4 }, { x: 240, y: 184, r: 17, o: .65 }].map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={C.spine} opacity={b.o} />
      ))}
      <g>
        <circle cx="304" cy="222" r="22" fill={C.spine} />
        {Array.from({ length: 10 }, (_, i) => {
          const a = (i / 10) * Math.PI * 2
          return <path key={i} d={`M${304 + Math.cos(a) * 20} ${222 + Math.sin(a) * 20} L${304 + Math.cos(a) * 31} ${222 + Math.sin(a) * 31} L${304 + Math.cos(a + 0.3) * 20} ${222 + Math.sin(a + 0.3) * 20}Z`} fill={C.spine} />
        })}
        <circle cx="304" cy="222" r="12" fill={C.hog} />
      </g>
      {/* дерево-перешкода */}
      <rect x="352" y="196" width="9" height="42" fill={C.trunk} />
      <path d="M330 200 L356 154 L382 200Z" fill={C.leaf2} />
      <text x="120" y="96" fill={C.cream} fontSize="16" fontFamily="Lora, serif" fontStyle="italic">повільно…</text>
      <text x="286" y="270" fill={C.ember} fontSize="17" fontFamily="Lora, serif" fontWeight="700">8.0</text>
    </svg>
  )
}

/* ---------- 05 · ставок і жаби ---------- */
export function ArtPond() {
  return (
    <svg viewBox="0 0 400 300">
      <path d="M0 210 Q90 176 200 192 Q320 210 400 178 L400 300 L0 300Z" fill={C.ground} />
      <ellipse cx="200" cy="232" rx="140" ry="52" fill={C.water} />
      <ellipse cx="200" cy="226" rx="140" ry="52" fill={C.waterTop} opacity=".55" />
      {[[150, 216, 20], [232, 240, 26], [286, 214, 16]].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.34} fill="none" stroke="#bfe1f2" strokeWidth="1.6" opacity=".4" />
      ))}
      {/* латаття й квітка */}
      <Sprite href={lilypad} x={262} y={232} h={22} w={52} o={.95} />
      <Sprite href={lilywhite} x={300} y={250} h={24} w={44} />
      <Sprite href={lilypad} x={118} y={248} h={18} w={42} o={.9} />
      {/* жаби на березі (рендер моделі з гри) */}
      <image href={frog1} x={2} y={158} width={96} height={54} />
      <image href={frog2} x={312} y={138} width={86} height={50} />
      {/* жабеня на лататті */}
      <image href={frog2} x={240} y={202} width={46} height={27} />
      {/* прибережна трава */}
      <Tuft x={34} y={206} h={34} k={0} /><Tuft x={372} y={190} h={36} k={2} /><Tuft x={350} y={196} h={28} k={1} />
      {/* їжак пливе — з голками, бо без них це просто камінець */}
      <g>
        {Array.from({ length: 11 }, (_, i) => {
          const x = 150 + i * 5.6
          const h = 13 + Math.sin(i * 0.75) * 5
          return <path key={i} d={`M${x} 228 L${x + 2.8} ${222 - h} L${x + 5.6} 228Z`} fill={C.spine} />
        })}
        <ellipse cx="176" cy="230" rx="30" ry="15" fill={C.spine} />
        <ellipse cx="202" cy="233" rx="13" ry="10" fill={C.hog} />
        <circle cx="212" cy="232" r="3" fill="#20160f" />
        <circle cx="205" cy="228" r="2" fill="#20160f" />
        <ellipse cx="176" cy="244" rx="46" ry="8" fill="#bfe1f2" opacity=".35" />
      </g>
    </svg>
  )
}

/* ---------- 06 · погода ---------- */
export function ArtWeather() {
  return (
    <svg viewBox="0 0 400 300">
      {[{ x: 60, s: 1, o: 1 }, { x: 150, s: .85, o: .62 }, { x: 240, s: .7, o: .38 }, { x: 322, s: .58, o: .2 }].map((t, i) => (
        <g key={i} opacity={t.o} transform={`translate(${t.x} ${250 - 80 * t.s}) scale(${t.s})`}>
          <rect x="-6" y="20" width="12" height="60" fill={C.trunk} />
          <path d="M-42 30 L0 -44 L42 30Z" fill={C.leaf2} />
          <path d="M-32 58 L0 4 L32 58Z" fill={C.leaf} />
        </g>
      ))}
      {/* пелена */}
      {[196, 216, 236, 256].map((y, i) => (
        <rect key={y} x="0" y={y} width="400" height="16" rx="8" fill={C.mist} opacity={0.06 + i * 0.035} />
      ))}
      <rect x="0" y="252" width="400" height="48" fill={C.ground} opacity=".9" />
      {/* дощ */}
      {Array.from({ length: 22 }, (_, i) => (
        <line key={i} x1={12 + i * 18} y1={10 + (i % 4) * 22} x2={6 + i * 18} y2={40 + (i % 4) * 22}
          stroke="#9fd0e8" strokeWidth="1.7" opacity=".38" />
      ))}
    </svg>
  )
}

/* ---------- 07 · рік і довжина ночі ---------- */
export function ArtYear() {
  const pts = Array.from({ length: 13 }, (_, i) => {
    const x = 30 + i * 28
    const night = 150 - 50 * Math.cos((2 * Math.PI * (i - 3)) / 12)
    return [x, 250 - (night - 90) * 1.05] as const
  })
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1]}`).join(' ')
  const seasons = [
    { x: 30, w: 84, c: '#5f9e63', n: 'весна' },
    { x: 114, w: 84, c: '#7cb85f', n: 'літо' },
    { x: 198, w: 84, c: '#c98a3c', n: 'осінь' },
    { x: 282, w: 84, c: '#8fa9bd', n: 'зима' },
  ]
  return (
    <svg viewBox="0 0 400 300">
      {seasons.map(s => (
        <g key={s.n}>
          <rect x={s.x} y="60" width={s.w} height="200" fill={s.c} opacity=".08" />
          <text x={s.x + s.w / 2} y="282" textAnchor="middle" fill={s.c} fontSize="14" fontFamily="Inter, sans-serif">{s.n}</text>
        </g>
      ))}
      <path d={d} stroke={C.cream} strokeWidth="3" fill="none" strokeLinejoin="round" />
      {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="4" fill={i === 3 ? C.moss : i === 9 ? C.water : C.ember} />)}
      <text x="120" y="106" fill={C.moss} fontSize="14" fontFamily="Lora, serif" fontStyle="italic">100с</text>
      <text x="268" y="86" fill={C.water} fontSize="14" fontFamily="Lora, serif" fontStyle="italic">200с</text>
      <text x="30" y="46" fill={C.mist} fontSize="13" fontFamily="Inter, sans-serif">довжина ночі</text>
    </svg>
  )
}

/* ---------- 08 · гніздо й зима ---------- */
export function ArtNest() {
  return (
    <svg viewBox="0 0 400 300">
      <ellipse cx="200" cy="258" rx="150" ry="20" fill="#0b120f" opacity=".45" />
      {/* сніжинки */}
      {Array.from({ length: 26 }, (_, i) => (
        <circle key={i} cx={20 + ((i * 71) % 370)} cy={16 + ((i * 43) % 150)} r={1.6 + (i % 3) * 0.7} fill="#dfeef5" opacity={.25 + (i % 4) * .13} />
      ))}
      {/* обід гнізда */}
      <ellipse cx="200" cy="222" rx="126" ry="46" fill="#2b2118" />
      <ellipse cx="200" cy="214" rx="112" ry="38" fill="#3b2d20" />
      {Array.from({ length: 14 }, (_, i) => {
        const a = (i / 14) * Math.PI * 2
        return <rect key={i} x={200 + Math.cos(a) * 118 - 11} y={222 + Math.sin(a) * 42 - 5} width="22" height="10" rx="5"
          fill={C.trunk} transform={`rotate(${(a * 180) / Math.PI + 90} ${200 + Math.cos(a) * 118} ${222 + Math.sin(a) * 42})`} />
      })}
      {/* купки */}
      <g>{[[168, 206], [186, 198], [204, 206], [176, 214], [196, 212]].map(([x, y], i) =>
        <rect key={i} x={x} y={y} width="17" height="7" rx="3" fill="#c98a3c" opacity=".85" />)}</g>
      <Sprite href={apple} x={252} y={216} h={26} />
      <Sprite href={hazelnut} x={272} y={214} h={18} />
      <Sprite href={porcini} x={234} y={216} h={24} />
      <Sprite href={moss} x={166} y={222} h={18} w={26} />
      {/* їжак спить */}
      <g>
        <circle cx="200" cy="196" r="26" fill={C.spine} />
        {Array.from({ length: 12 }, (_, i) => {
          const a = Math.PI + (i / 11) * Math.PI
          return <path key={i} d={`M${200 + Math.cos(a) * 24} ${196 + Math.sin(a) * 24} L${200 + Math.cos(a) * 36} ${196 + Math.sin(a) * 36} L${200 + Math.cos(a + 0.25) * 24} ${196 + Math.sin(a + 0.25) * 24}Z`} fill={C.spine} />
        })}
        <circle cx="200" cy="200" r="16" fill={C.hog} />
      </g>
      <text x="238" y="166" fill={C.cream} fontSize="20" fontFamily="Lora, serif" fontStyle="italic" opacity=".8">z</text>
      <text x="256" y="150" fill={C.cream} fontSize="15" fontFamily="Lora, serif" fontStyle="italic" opacity=".55">z</text>
    </svg>
  )
}

/* ---------- ніч: коли ліс належить тобі ---------- */
export function ArtNight() {
  const flies = [[70, 96], [128, 62], [196, 104], [268, 74], [318, 122], [104, 148], [242, 156], [352, 92]]
  return (
    <svg viewBox="0 0 400 300">
      <circle cx="318" cy="58" r="30" fill="#f7f0dd" opacity=".14" />
      <circle cx="318" cy="58" r="20" fill="#f7f0dd" />
      {Array.from({ length: 26 }, (_, i) => (
        <circle key={i} cx={14 + ((i * 61) % 380)} cy={12 + ((i * 37) % 150)} r={1 + (i % 3) * 0.6}
          fill="#dfeef5" opacity={0.2 + (i % 4) * 0.16} />
      ))}
      {/* дерева силуетами */}
      {[[40, 1], [96, .8], [300, .9], [366, .7]].map(([x, sc], i) => (
        <g key={i} transform={`translate(${x} 250) scale(${sc})`} opacity=".55">
          <rect x="-5" y="-46" width="10" height="46" fill="#132019" />
          <path d="M-34 -40 L0 -122 L34 -40Z" fill="#16281f" />
        </g>
      ))}
      <path d="M0 248 Q120 224 220 244 Q320 262 400 236 L400 300 L0 300Z" fill={C.ground} />
      {/* світлячки */}
      {flies.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill="#c8ff8a" opacity=".12" />
          <circle cx={x} cy={y} r="3" fill="#c8ff8a" opacity=".85" />
        </g>
      ))}
      {/* їжачок дивиться вгору */}
      <g transform="translate(186 236)">
        {Array.from({ length: 11 }, (_, i) => {
          const x = -34 + i * 6
          const h = 15 + Math.sin(i * 0.8) * 6
          return <path key={i} d={`M${x} -8 L${x + 3} ${-8 - h} L${x + 6} -8Z`} fill={C.spine} />
        })}
        <ellipse cx="0" cy="0" rx="38" ry="20" fill={C.spine} />
        <ellipse cx="32" cy="-2" rx="15" ry="12" fill={C.hog} />
        <circle cx="43" cy="-4" r="3.2" fill="#20160f" />
        <circle cx="35" cy="-8" r="2.2" fill="#20160f" />
      </g>
    </svg>
  )
}

/* ---------- живий ліс: білки, черв'яки, жучки ---------- */
export function ArtCritters() {
  return (
    <svg viewBox="0 0 400 300">
      {/* земля */}
      <path d="M0 236 Q120 214 240 228 Q330 238 400 218 L400 300 L0 300Z" fill={C.ground} />
      <path d="M0 250 Q140 232 280 244 Q350 250 400 236 L400 300 L0 300Z" fill={C.ground2} opacity=".5" />

      {/* «своя територія» — м'яке коло навколо дерева */}
      <ellipse cx="300" cy="248" rx="98" ry="22" fill="none" stroke={C.cream} strokeWidth="1.6" strokeDasharray="6 8" opacity=".3" />

      {/* дерево */}
      <ellipse cx="324" cy="244" rx="46" ry="10" fill="#0b120f" opacity=".4" />
      <path d="M262 172 L324 56 L386 172Z" fill={C.leaf2} />
      <path d="M276 200 L324 96 L372 200Z" fill={C.leaf} />
      <rect x="316" y="150" width="16" height="92" rx="4" fill={C.trunk} />
      <ellipse cx="323" cy="226" rx="3" ry="4" fill="#5d3a22" opacity=".8" />

      {/* білка чкурить угору стовбуром (голова догори) + сліди руху */}
      <path d="M308 188 q16 -8 30 0" stroke={C.cream} strokeWidth="1.6" fill="none" opacity=".4" strokeDasharray="4 5" />
      <path d="M312 178 q12 -6 22 0" stroke={C.cream} strokeWidth="1.4" fill="none" opacity=".28" strokeDasharray="3 5" />
      <g>
        <path d="M318 210 C 300 220, 302 246, 320 240 C 310 240, 312 220, 326 216 Z" fill={C.squirrelTail} />
        <ellipse cx="324" cy="216" rx="8.5" ry="14" fill={C.squirrel} />
        <ellipse cx="322" cy="217" rx="4.5" ry="10" fill={C.squirrelBelly} opacity=".8" />
        <circle cx="323" cy="199" r="7" fill={C.squirrel} />
        <path d="M318 195 l1 -6 l4 4 Z" fill={C.squirrel} />
        <path d="M328 195 l-1 -6 l-4 4 Z" fill={C.squirrel} />
        <circle cx="320" cy="199" r="1.6" fill="#20160f" />
      </g>

      {/* білка сидить біля дерева з горішком (дивиться на стовбур) */}
      <g>
        <path d="M234 238 C 210 238, 206 200, 230 194 C 216 202, 220 224, 238 230 Z" fill={C.squirrelTail} />
        <ellipse cx="240" cy="226" rx="12" ry="16" fill={C.squirrel} />
        <ellipse cx="244" cy="230" rx="7" ry="11" fill={C.squirrelBelly} opacity=".85" />
        <circle cx="250" cy="208" r="8.5" fill={C.squirrel} />
        <path d="M245 202 l1 -8 l5 5 Z" fill={C.squirrel} />
        <path d="M254 201 l1 -7 l4 5 Z" fill={C.squirrel} />
        <circle cx="253" cy="208" r="1.9" fill="#20160f" />
        <circle cx="259" cy="211" r="1.3" fill="#20160f" />
        <ellipse cx="249" cy="224" rx="4" ry="3" fill={C.squirrel} />
        <Sprite href={acorn} x={254} y={230} h={12} />
        <ellipse cx="240" cy="242" rx="8" ry="3.2" fill={C.squirrel} />
      </g>

      {/* черв'ячок повзе травою */}
      <g>
        {[[72, 240, 4.2], [82, 236, 4.8], [93, 235, 5.1], [104, 237, 4.8], [114, 234, 4], [122, 231, 3.2]].map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={C.worm} />
        ))}
        <circle cx="123" cy="230" r="1.1" fill="#5a2f2f" />
      </g>

      {/* жучок поряд */}
      <g>
        <ellipse cx="158" cy="244" rx="9" ry="6" fill={C.beetle} />
        <line x1="158" y1="239" x2="158" y2="249" stroke="#4a4030" strokeWidth="1" />
        <circle cx="167" cy="244" r="3.2" fill="#3a3226" />
        {[-6, 0, 6].map((dx, i) => (
          <g key={i} stroke={C.beetle} strokeWidth="1.4" strokeLinecap="round">
            <line x1={158 + dx} y1="248" x2={153 + dx} y2="252" />
            <line x1={158 + dx} y1="240" x2={153 + dx} y2="237" />
          </g>
        ))}
      </g>

      {/* пташки перелітають з крони в крону (пунктир — хвиляста траєкторія) */}
      <path d="M70 92 q40 -30 70 -6 q40 -26 80 2 q30 -18 70 -10" stroke={C.cream} strokeWidth="1.4" fill="none" strokeDasharray="3 7" opacity=".35" />
      {[[140, 84, 1], [222, 86, .8]].map(([x, y, sc], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${sc})`}>
          <ellipse cx="0" cy="0" rx="9" ry="5.5" fill="#8a5f3e" />
          <circle cx="8" cy="-3" r="4.4" fill="#8a5f3e" />
          <path d="M12 -3 l5 1.5 l-5 1.2Z" fill="#3a2a1d" />
          <path d="M-2 -2 q-6 -16 -16 -14 q4 8 10 14Z" fill="#6b4630" />
          <path d="M-9 0 l-9 -3 l2 6Z" fill="#6b4630" />
          <circle cx="9.5" cy="-4" r="1" fill="#1a120c" />
        </g>
      ))}
      {/* метелик над травою */}
      <g transform="translate(118 196) rotate(-12)">
        <ellipse cx="-7" cy="-4" rx="8" ry="6" fill="#d24b2c" /><ellipse cx="7" cy="-4" rx="8" ry="6" fill="#d24b2c" />
        <ellipse cx="-6" cy="5" rx="5.5" ry="4.5" fill="#b23a22" /><ellipse cx="6" cy="5" rx="5.5" ry="4.5" fill="#b23a22" />
        <circle cx="-8" cy="-5" r="2.2" fill="#2f4fb0" /><circle cx="8" cy="-5" r="2.2" fill="#2f4fb0" />
        <rect x="-1" y="-8" width="2" height="16" rx="1" fill="#2a241c" />
      </g>
      {/* мальована трава й квіти спереду */}
      <Tuft x={40} y={262} h={36} k={0} /><Tuft x={190} y={258} h={30} k={1} /><Tuft x={360} y={256} h={34} k={2} />
      <Sprite href={daisy} x={96} y={266} h={30} w={34} />

      <text x="300" y="276" textAnchor="middle" fill={C.mist} fontSize="12.5" fontFamily="Inter, sans-serif" opacity=".7">своя територія</text>
    </svg>
  )
}

/* ---------- нюх: пасма запаху в нічному повітрі ---------- */
export function ArtScent() {
  const wisp = (d: string, o: number, w: number) => (
    <path d={d} stroke="#f2e9d6" strokeWidth={w} fill="none" strokeLinecap="round" opacity={o} filter="url(#blurW)" />
  )
  return (
    <svg viewBox="0 0 400 300">
      <WhiteDefs />
      <defs>
        <filter id="blurW"><feGaussianBlur stdDeviation="2.2" /></filter>
        <radialGradient id="dusk" cx="50%" cy="100%" r="80%">
          <stop offset="0" stopColor="#24372b" /><stop offset="1" stopColor="#0f1a16" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="400" height="300" fill="url(#dusk)" />
      {/* дерева силуетами */}
      {[[30, .9], [92, .7], [330, .85], [378, .65]].map(([x, sc], i) => (
        <g key={i} transform={`translate(${x} 236) scale(${sc})`} opacity=".5">
          <rect x="-5" y="-50" width="10" height="50" fill="#132019" />
          <path d="M-34 -42 L0 -130 L34 -42Z" fill="#16281f" />
        </g>
      ))}
      <path d="M0 238 Q120 222 230 236 Q320 246 400 226 L400 300 L0 300Z" fill={C.ground} />
      {/* пасма від їжачка до запахів: сильний (гриб) — густіший, слабкий (ягоди) — ледь */}
      {wisp('M150 212 C 190 196, 210 214, 246 190 S 300 170, 322 156', .55, 5)}
      {wisp('M150 212 C 186 202, 206 220, 240 198 S 296 182, 318 166', .25, 9)}
      {wisp('M140 206 C 120 186, 98 192, 80 170 S 60 140, 48 126', .28, 3.5)}
      {wisp('M146 214 C 170 230, 210 232, 236 248', .18, 3)}
      {/* силуети «чий запах» */}
      <Sprite href={porcini} x={322} y={156} h={30} white o={.85} />
      <Sprite href={strawberry} x={50} y={128} h={24} white o={.45} />
      <Sprite href={apple} x={244} y={256} h={18} white o={.3} />
      {/* справжній боровик у траві далі */}
      <Sprite href={porcini} x={352} y={238} h={24} />
      <Tuft x={340} y={242} h={26} k={1} /><Tuft x={66} y={244} h={28} k={2} />
      {/* їжачок нюхає (морда вгору) */}
      <g transform="translate(128 226)">
        {Array.from({ length: 11 }, (_, i) => {
          const x = -34 + i * 6
          const h = 15 + Math.sin(i * 0.8) * 6
          return <path key={i} d={`M${x} -8 L${x + 3} ${-8 - h} L${x + 6} -8Z`} fill={C.spine} />
        })}
        <ellipse cx="0" cy="0" rx="38" ry="20" fill={C.spine} />
        <ellipse cx="31" cy="-6" rx="15" ry="12" fill={C.hog} transform="rotate(-18 31 -6)" />
        <circle cx="44" cy="-12" r="3.2" fill="#20160f" />
        <circle cx="34" cy="-12" r="2.2" fill="#20160f" />
      </g>
      <text x="200" y="40" textAnchor="middle" fill={C.mist} fontSize="13" fontFamily="Inter, sans-serif" opacity=".75">ближче — густіше пасмо</text>
    </svg>
  )
}

/* ---------- захід сонця: промені крізь ліс, місяць зі сходу ---------- */
export function ArtSunset() {
  return (
    <svg viewBox="0 0 400 300">
      <defs>
        <linearGradient id="skyS" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#24304e" /><stop offset=".55" stopColor="#7a4f62" /><stop offset=".85" stopColor="#e3895a" /><stop offset="1" stopColor="#f4b26b" />
        </linearGradient>
        <radialGradient id="sunG" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff2c9" /><stop offset=".25" stopColor="#ffc779" stopOpacity=".9" /><stop offset="1" stopColor="#ff9a4d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ray" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffd59a" stopOpacity=".55" /><stop offset="1" stopColor="#ffd59a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="300" fill="url(#skyS)" />
      {/* місяць зі сходу — блідий */}
      <circle cx="236" cy="54" r="16" fill="#f7f0dd" opacity=".55" />
      <circle cx="236" cy="54" r="28" fill="#f7f0dd" opacity=".08" />
      {/* сонце наполовину за обрієм */}
      <circle cx="96" cy="206" r="90" fill="url(#sunG)" />
      <circle cx="96" cy="206" r="20" fill="#fff0c4" />
      {/* дальній ліс */}
      <path d="M0 210 L20 186 L36 204 L56 176 L78 206 L104 182 L128 206 L150 178 L176 206 L200 186 L224 208 L250 180 L276 206 L300 184 L326 208 L350 182 L376 206 L400 188 L400 300 L0 300Z" fill="#3a2c3a" opacity=".85" />
      {/* промені крізь ліс */}
      {[[-4, 22], [6, 14], [14, 30], [24, 12]].map(([a, w], i) => (
        <path key={i} d={`M96 206 L400 ${150 + a * 4} L400 ${150 + a * 4 + w} Z`} fill="url(#ray)" opacity={.5 - i * .08} />
      ))}
      {/* ближні дерева силуетами: дуб праворуч, ялинка ліворуч */}
      <g fill="#1c1820">
        <path d="M322 270 L328 160 Q330 140 318 120 L326 118 Q336 136 340 150 Q348 128 364 116 L368 122 Q350 140 346 170 L352 270Z" />
        {[[300, 104, 30], [336, 84, 36], [376, 100, 34], [356, 128, 26], [318, 128, 22], [398, 128, 24]].map(([x, y, r], i) =>
          <circle key={i} cx={x} cy={y} r={r} />)}
        <path d="M22 270 L28 270 L28 250 L60 250 L36 214 L54 214 L30 176 L44 176 L24 126 L4 176 L18 176 L-6 214 L12 214 L-12 250 L22 250Z" />
      </g>
      <path d="M0 252 Q110 236 210 248 Q300 258 400 240 L400 300 L0 300Z" fill="#1f2a20" />
      {/* трава в контровому світлі */}
      {[[30, 0], [70, 2], [118, 1], [160, 0], [214, 2], [262, 1], [306, 0], [352, 2]].map(([x, k], i) => (
        <Tuft key={i} x={x} y={262 + (i % 2) * 6} h={30 + (i % 3) * 6} k={k} />
      ))}
      {/* їжачок дивиться на захід */}
      <g transform="translate(250 262)">
        {Array.from({ length: 10 }, (_, i) => {
          const x = -30 + i * 6
          const h = 13 + Math.sin(i * 0.8) * 5
          return <path key={i} d={`M${x} -7 L${x + 3} ${-7 - h} L${x + 6} -7Z`} fill="#2b2119" />
        })}
        <ellipse cx="0" cy="0" rx="33" ry="17" fill="#2b2119" />
        <path d="M-28 -12 Q0 -24 30 -10" stroke="#ffcf8f" strokeWidth="2" fill="none" opacity=".7" />
        <ellipse cx="-28" cy="-2" rx="13" ry="10" fill="#3a2c22" />
      </g>
    </svg>
  )
}

/* ---------- ліс, що росте як справжній: рендер сцени з гри ---------- */
export function ArtForest() {
  return (
    <svg viewBox="0 0 400 300">
      <defs>
        <clipPath id="forestClip"><rect x="0" y="0" width="400" height="300" rx="22" /></clipPath>
        <linearGradient id="forestFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset=".6" stopColor="#0f1a16" stopOpacity="0" /><stop offset="1" stopColor="#0f1a16" stopOpacity=".55" />
        </linearGradient>
      </defs>
      <g clipPath="url(#forestClip)">
        <image href={forest} x="0" y="0" width="400" height="300" preserveAspectRatio="xMidYMid slice" />
        <rect x="0" y="0" width="400" height="300" fill="url(#forestFade)" />
      </g>
      {/* те, що лежить під деревами */}
      <Sprite href={oakleaf} x={60} y={292} h={26} rot={-20} />
      <Sprite href={acorn} x={92} y={290} h={18} />
      <Sprite href={chanterelle} x={330} y={292} h={30} />
      <Sprite href={blackberry} x={128} y={292} h={22} />
      <Sprite href={rosehip} x={296} y={292} h={20} />
      <Sprite href={fern} x={372} y={294} h={40} />
    </svg>
  )
}

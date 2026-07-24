/**
 * Пласкі low-poly ілюстрації в стилі самої гри (Kenney Nature Kit):
 * прості трикутники й кола, тепла лісова палітра, жодних градієнтів-«вау».
 */

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
        return <path key={i} d={`M${x} 170 L${x + 6} ${152 - h} L${x + 12} 170Z`} fill={C.spine} />
      })}
      {/* вантаж: яблуко(3) · гриб(2) · ягода(1) */}
      <g>
        <circle cx="150" cy="124" r="27" fill="#c4392a" />
        <path d="M150 100 q6-12 15-14" stroke="#5d3a22" strokeWidth="4" fill="none" />
        <text x="150" y="132" textAnchor="middle" fill={C.cream} fontSize="20" fontWeight="700" fontFamily="Lora, serif">3</text>
      </g>
      <g>
        <ellipse cx="223" cy="132" rx="21" ry="14" fill="#d8604c" />
        <rect x="217" y="132" width="12" height="18" rx="4" fill="#efdcc0" />
        <text x="223" y="128" textAnchor="middle" fill={C.cream} fontSize="15" fontWeight="700" fontFamily="Lora, serif">2</text>
      </g>
      <g>
        <circle cx="278" cy="140" r="14" fill="#a3243c" />
        <text x="278" y="146" textAnchor="middle" fill={C.cream} fontSize="13" fontWeight="700" fontFamily="Lora, serif">1</text>
      </g>
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
      <text x="330" y={y + 5} fill={C.mist} fontSize="15" fontFamily="Inter, sans-serif">{label}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 400 300">
      {row(66,
        <g><rect x="86" y="58" width="52" height="9" rx="4" transform="rotate(-12 112 62)" fill="#6b452c" />
           <rect x="86" y="70" width="52" height="9" rx="4" transform="rotate(9 112 74)" fill="#6b452c" /></g>,
        <g><path d="M252 82 q10-30 24-14 q12-20 22 8 q6 20-23 20 q-27 0-23-14Z" fill={C.ember} /></g>,
        'багаття')}
      {row(150,
        <g><ellipse cx="112" cy="146" rx="24" ry="15" fill="#d8604c" /><rect x="105" y="146" width="14" height="20" rx="5" fill="#efdcc0" /></g>,
        <g><path d="M262 136 l8 18 l18 4 l-14 13 l4 19 l-16-10 l-16 10 l4-19 l-14-13 l18-4Z" fill={C.moss} /></g>,
        'бадьорість')}
      {row(234,
        <g><circle cx="112" cy="230" r="13" fill="#b06fc4" /><rect x="109" y="238" width="6" height="22" fill={C.leaf2} /></g>,
        <g><ellipse cx="272" cy="230" rx="26" ry="17" fill="none" stroke={C.mist} strokeWidth="3" strokeDasharray="6 7" />
           <circle cx="272" cy="230" r="7" fill={C.mist} opacity=".5" /></g>,
        'маскування')}
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
      {/* жаби */}
      {[[126, 206], [214, 246], [292, 210]].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="15" ry="9" fill={C.frog} />
          <circle cx={x - 5} cy={y - 7} r="4" fill={C.frog} />
          <circle cx={x + 5} cy={y - 7} r="4" fill={C.frog} />
          <circle cx={x - 5} cy={y - 8} r="1.8" fill="#f5f0c8" />
          <circle cx={x + 5} cy={y - 8} r="1.8" fill="#f5f0c8" />
        </g>
      ))}
      {/* жаба у стрибку */}
      <path d="M330 196 q18-34 44-8" stroke={C.moss} strokeWidth="2" fill="none" strokeDasharray="4 6" />
      <g><ellipse cx="374" cy="192" rx="13" ry="8" fill={C.frog} /><circle cx="370" cy="186" r="3.4" fill={C.frog} /><circle cx="378" cy="186" r="3.4" fill={C.frog} /></g>
      {/* їжак пливе */}
      <g>
        <ellipse cx="176" cy="230" rx="30" ry="17" fill={C.spine} />
        <ellipse cx="202" cy="234" rx="13" ry="10" fill={C.hog} />
        <circle cx="211" cy="233" r="3" fill="#20160f" />
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
      <g>{[[240, 208], [256, 202], [268, 210], [248, 216]].map(([x, y], i) =>
        <circle key={i} cx={x} cy={y} r="7" fill="#a3243c" />)}</g>
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

import { useMemo } from 'react'

/** Нерухоме тло: небо, зорі й світлячки — та сама атмосфера, що в грі. */
export function Ambient() {
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 62}%`,
        size: Math.random() * 2 + 1,
        delay: `${Math.random() * 4}s`,
        dur: `${3 + Math.random() * 4}s`,
      })),
    [],
  )

  const flies = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        dx: `${(Math.random() - 0.5) * 220}px`,
        dy: `${(Math.random() - 0.5) * 180}px`,
        dur: `${14 + Math.random() * 20}s`,
        delay: `${Math.random() * 8}s`,
      })),
    [],
  )

  return (
    <>
      <div className="sky" />
      <div className="stars">
        {stars.map(s => (
          <span
            key={s.id}
            className="star"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              ['--d' as string]: s.dur,
            }}
          />
        ))}
      </div>
      <div className="fireflies">
        {flies.map(f => (
          <span
            key={f.id}
            className="ff"
            style={{
              left: f.left,
              top: f.top,
              animationDelay: f.delay,
              ['--d' as string]: f.dur,
              ['--dx' as string]: f.dx,
              ['--dy' as string]: f.dy,
            }}
          />
        ))}
      </div>
    </>
  )
}

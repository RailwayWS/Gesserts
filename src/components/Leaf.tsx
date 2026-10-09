import type { CSSProperties } from 'react'

export type LeafSpec = {
  left?: string
  right?: string
  top?: string
  bottom?: string
  size: number
  tone: 'green' | 'deep' | 'dry' | 'shade'
  /** Loop length in seconds. */
  duration: number
  delay?: number
  /** Resting and swayed rotation in degrees. */
  from: number
  to: number
  dx: number
  dy: number
  opacity?: number
  hideOnPhone?: boolean
}

/** A single wild fig leaf drifting on its own loop. Decorative only. */
export function Leaf({ spec }: { spec: LeafSpec }) {
  const { left, right, top, bottom, size, opacity } = spec
  const drift = {
    '--dur': `${spec.duration}s`,
    '--delay': `${spec.delay ?? 0}s`,
    '--r0': `${spec.from}deg`,
    '--r1': `${spec.to}deg`,
    '--dx': `${spec.dx}px`,
    '--dy': `${spec.dy}px`,
  } as CSSProperties

  return (
    <div
      className={`leaf leaf--${spec.tone}${spec.hideOnPhone ? ' hide-phone' : ''}`}
      style={{ left, right, top, bottom, width: size, height: size, opacity }}
    >
      <svg className="leaf__drift" style={drift} viewBox="0 0 100 100">
        <use href="#fig-leaf" />
      </svg>
    </div>
  )
}

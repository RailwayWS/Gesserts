import type { CSSProperties, ReactNode } from 'react'
import { useParallax } from '../hooks/parallax'

type Props = {
  shift: number
  mode?: 'page' | 'view'
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export function Parallax({ shift, mode = 'page', className, style, children }: Props) {
  const ref = useParallax<HTMLDivElement>(shift, mode)
  return (
    <div ref={ref} className={className ? `parallax ${className}` : 'parallax'} style={style}>
      {children}
    </div>
  )
}

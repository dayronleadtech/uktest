import { type ReactNode } from 'react'

type Level = 1 | 2 | 3 | 4 | 5 | 6

type HeadingProps = {
  level?: Level
  children: ReactNode
  className?: string
  useDefaultStyles?: boolean
}

const LEVEL_DEFAULTS: Record<Level, string> = {
  1: 'text-2xl md:text-3xl font-bold',
  2: 'text-xl md:text-2xl font-bold',
  3: 'text-lg md:text-xl font-semibold',
  4: 'text-base md:text-lg font-semibold',
  5: 'text-sm md:text-base font-medium',
  6: 'text-sm md:text-base font-medium',
}

export function Heading({
  level = 2,
  children,
  className = '',
  useDefaultStyles = true,
}: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  const classes = useDefaultStyles ? `${LEVEL_DEFAULTS[level]} ${className}`.trim() : className.trim()

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  )
}

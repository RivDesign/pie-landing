import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Tone = 'muted' | 'light' | 'accent'

/**
 * Editorial dispatch label — monospace-style Latin eyebrow with a leading
 * hairline rule and an optional sequence index (e.g. "02"), inspired by
 * high-end editorial B2B layouts. Reads left-to-right (Latin) inside the
 * RTL page. Content text is passed through unchanged.
 */
export function SectionLabel({
  children,
  index,
  tone = 'muted',
  className,
}: {
  children: ReactNode
  index?: string
  tone?: Tone
  className?: string
}) {
  const ruleCls = tone === 'light' ? 'bg-white/25' : 'bg-border'
  const indexCls =
    tone === 'light'
      ? 'text-white/80'
      : tone === 'accent'
        ? 'text-accent'
        : 'text-foreground/70'
  const labelCls =
    tone === 'light'
      ? 'text-white/55'
      : tone === 'accent'
        ? 'text-accent'
        : 'text-muted-foreground'

  return (
    <div
      dir="ltr"
      className={cn(
        'flex items-center gap-3 font-latin whitespace-nowrap',
        className,
      )}
    >
      <span className={cn('h-px w-8 shrink-0', ruleCls)} aria-hidden="true" />
      {index ? (
        <span className={cn('text-[11px] font-bold tabular-nums', indexCls)}>
          {index}
        </span>
      ) : null}
      <span
        className={cn(
          'text-[11px] font-semibold uppercase tracking-[0.28em]',
          labelCls,
        )}
      >
        {children}
      </span>
    </div>
  )
}

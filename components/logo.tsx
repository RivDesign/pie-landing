import { cn } from '@/lib/utils'

/**
 * VETROS wordmark.
 * - `variant="dark"` uses the original artwork (dark ink) for light surfaces.
 * - `variant="light"` uses a pre-processed white knockout (transparent
 *   background, no plate) for dark surfaces like the footer.
 * Swap the files in /public to change the artwork everywhere.
 */
export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  const src = variant === 'light' ? '/vetros-logo-light.png' : '/vetros-logo.svg'
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src || '/placeholder.svg'}
      alt="VETROS"
      className={cn('w-auto select-none', className)}
      draggable={false}
    />
  )
}

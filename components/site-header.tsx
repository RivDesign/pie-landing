'use client'

import { useEffect, useState } from 'react'
import { ArrowUpLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Official PIE VETROS identity — used exactly as provided, never recreated or distorted. */
function BrandLogo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/pie-logo.svg"
      alt="شرکت نوآوران پدرام شرق — پلتفرم تجهیز وتروس"
      className={cn('w-auto select-none', className)}
      draggable={false}
    />
  )
}

const NAV = [
  { label: 'درباره پلتفرم', href: '#about' },
  { label: 'مسیر تجهیز', href: '#journey' },
  { label: 'حوزه‌های فعالیت', href: '#industries' },
  { label: 'برندها', href: '#participation' },
  { label: 'تماس', href: '#contact' },
]

const VETROS_URL = 'https://vetros.ir'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* Genuine RTL header: brand sits on the FAR RIGHT (reading start),
          navigation extends toward the left, primary CTA on the far left. */}
      <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-5 md:px-10">
        {/* Official PIE VETROS logo — far-right brand position, subtle hover */}
        <a
          href="#top"
          aria-label="شرکت نوآوران پدرام شرق — خانه"
          className="group flex items-center py-4"
        >
          <BrandLogo className="h-9 transition-opacity duration-200 group-hover:opacity-70 md:h-11" />
        </a>

        <div className="flex items-center gap-6 lg:gap-9">
          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={VETROS_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 text-[13px] font-semibold tracking-wide text-foreground transition-colors hover:text-accent md:inline-flex font-latin"
            >
              VETROS
              <ArrowUpLeft size={13} className="opacity-60" />
            </a>
            <span className="hidden h-4 w-px bg-border md:block" />
            <a
              href="#contact"
              className="inline-flex rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              شروع همکاری
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

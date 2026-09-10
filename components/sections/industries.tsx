'use client'

import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

interface Path {
  num: string
  title: string
  desc: string
  Mark: () => JSX.Element
}

/* ── Minimal geometric botanical marks ─────────────────────────────
   Shared language: 44×44 viewBox, 1.5 stroke, rounded joins, single
   accent stroke on transparent fill. Each abstract-natural, unique but
   part of one system. */

function MarkGrain() {
  // صنایع غذایی — a stylized grain / sprout
  return (
    <svg viewBox="0 0 44 44" fill="none" className="h-11 w-11" aria-hidden="true">
      <path
        d="M22 40V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path
            d={`M22 ${16 + i * 7} C16 ${13 + i * 7}, 13 ${17 + i * 7}, 13 ${22 + i * 7} C18 ${21 + i * 7}, 21 ${19 + i * 7}, 22 ${15 + i * 7}`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={`M22 ${16 + i * 7} C28 ${13 + i * 7}, 31 ${17 + i * 7}, 31 ${22 + i * 7} C26 ${21 + i * 7}, 23 ${19 + i * 7}, 22 ${15 + i * 7}`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <circle cx="22" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function MarkBoll() {
  // کیف، کفش و پوشاک — a cotton boll / fiber bud
  return (
    <svg viewBox="0 0 44 44" fill="none" className="h-11 w-11" aria-hidden="true">
      <path
        d="M22 39V25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 25C22 25 14 24 12 16C12 16 20 15 22 23C24 15 32 16 32 16C30 24 22 25 22 25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M22 23C22 23 21 13 22 7C23 13 22 23 22 23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MarkRosette() {
  // صنایع دستی — a geometric six-petal rosette
  return (
    <svg viewBox="0 0 44 44" fill="none" className="h-11 w-11" aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="22"
          cy="14"
          rx="4.5"
          ry="8.5"
          stroke="currentColor"
          strokeWidth="1.5"
          transform={`rotate(${deg} 22 22)`}
        />
      ))}
      <circle cx="22" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function MarkRings() {
  // مبلمان و تجهیزات خانه — wood cross-section growth rings
  return (
    <svg viewBox="0 0 44 44" fill="none" className="h-11 w-11" aria-hidden="true">
      <circle cx="22" cy="22" r="16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="10.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="1" fill="currentColor" />
    </svg>
  )
}

const PATHS: Path[] = [
  {
    num: '01',
    title: 'صنایع غذایی',
    desc: 'محصولات طبیعی، مواد غذایی خشک، فرآوری و بسته‌بندی استاندارد برای بازارهای صادراتی.',
    Mark: MarkGrain,
  },
  {
    num: '02',
    title: 'کیف، کفش و پوشاک',
    desc: 'توسعه محصول، تأمین مواد اولیه، طراحی، تولید و آماده‌سازی برای عرضه در بازار جهانی.',
    Mark: MarkBoll,
  },
  {
    num: '03',
    title: 'صنایع دستی',
    desc: 'توسعه محصولات اصیل، استانداردسازی کیفیت و تبدیل صنایع دستی ایران به برندهای جهانی.',
    Mark: MarkRosette,
  },
  {
    num: '04',
    title: 'مبلمان و تجهیزات خانه',
    desc: 'مبلمان، دکوراسیون و تجهیزات خانه و آشپزخانه، همراه با زنجیره تأمین یکپارچه و منسجم.',
    Mark: MarkRings,
  },
]

export function Industries() {
  return (
    <section
      id="industries"
      className="border-b border-border bg-background py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Asymmetric editorial header */}
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div>
            <Reveal>
              <SectionLabel index="03">PRODUCTION PATHS</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 text-pretty text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                چهار مسیر اصلی تولید
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground md:pb-2">
              وتروس از چهار نقطه کلیدی، زنجیره تولید را توسعه می‌دهد.
            </p>
          </Reveal>
        </div>

        {/* Editorial index — full-width numbered rows */}
        <div className="mt-16 border-b border-border md:mt-20">
          {PATHS.map((p, i) => {
            const { Mark } = p
            return (
              <Reveal key={p.num} delay={i * 70}>
                <article className="group relative grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3 border-t border-border py-8 transition-colors duration-500 md:grid-cols-[7rem_1fr_auto] md:gap-x-12 md:py-11">
                  {/* hairline sweep on hover */}
                  <span
                    className="pointer-events-none absolute right-0 top-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                    aria-hidden="true"
                  />
                  <span className="font-latin text-4xl font-bold tabular-nums text-border transition-colors duration-500 group-hover:text-accent md:text-6xl">
                    {p.num}
                  </span>

                  <div className="col-start-2 md:col-start-2">
                    <h3 className="text-pretty text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-base">
                      {p.desc}
                    </p>
                  </div>

                  <span className="col-span-2 text-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 md:col-span-1 md:justify-self-end">
                    <Mark />
                  </span>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

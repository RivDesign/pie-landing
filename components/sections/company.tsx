import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ArrowLeft } from 'lucide-react'

const CAPABILITIES = [
  {
    title: 'توسعه زیرساخت',
    desc: 'طراحی و ایجاد زیرساخت‌های عملیاتی و تولیدی',
  },
  {
    title: 'توسعه پلتفرم',
    desc: 'طراحی و توسعه ابزارها و سیستم‌های موردنیاز اکوسیستم',
  },
  {
    title: 'توسعه تولید',
    desc: 'ایجاد، تجهیز و توسعه واحدهای تولیدی و برندهای منتخب',
  },
]

export function Company() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel index="06" tone="light">
            THE COMPANY BEHIND THE PLATFORM
          </SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-7 max-w-3xl text-pretty text-3xl font-semibold leading-[1.35] tracking-tight md:text-4xl lg:text-[44px] lg:leading-[1.3] font-modam">
            پشت این پلتفرم، یک تیم توسعه‌دهنده ایستاده است.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <Reveal delay={120}>
            <div>
              <span className="block font-latin text-8xl font-bold leading-none tracking-tight md:text-[140px]">
                PIE
              </span>
              <p className="mt-6 text-lg font-medium text-primary-foreground/90">
                PIE، توسعه‌دهنده پلتفرم تجهیز وتروس است.
              </p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/60">
                PIE با تمرکز بر طراحی و توسعه زیرساخت‌های تولید، فناوری، زنجیره
                تأمین و توسعه کسب‌وکار، مسئولیت بخشی از طراحی، توسعه و اجرای
                پلتفرم تجهیز وتروس را بر عهده دارد.
              </p>
              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground/50"
              >
                ارتباط به تیم توسعه  PIE
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </a>
            </div>
          </Reveal>

          <div className="border-t border-primary-foreground/15">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={140 + i * 90}>
                <div className="group flex items-start gap-6 border-b border-primary-foreground/15 py-7 md:gap-8 md:py-9">
                  <span className="mt-1 font-latin text-2xl font-bold tabular-nums text-accent md:text-3xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-foreground md:text-2xl font-modam">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-primary-foreground/60">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

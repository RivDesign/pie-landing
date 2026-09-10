import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { ArrowLeft } from 'lucide-react'

const VETROS_URL = 'https://vetros.ir'

export function Vision() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-24 md:py-36">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel index="08">THE VISION</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 text-balance text-5xl font-semibold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl lg:text-[92px] lg:leading-[1.08]">
            از یک کارگاه
            <br />
            <span className="text-accent">تا یک برند جهانی.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-9 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            وتروس تلاش می‌کند مسیر تولید را کوتاه‌تر، هوشمندتر و قابل‌دسترس‌تر
            کند؛ از تجهیز زیرساخت تا توسعه محصول و اتصال به بازار جهانی.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              شروع همکاری با وتروس
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            </a>
            <a
              href={VETROS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              پلتفرم VETROS
              <ArrowLeft size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

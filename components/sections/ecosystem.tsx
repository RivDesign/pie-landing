import { Reveal } from '@/components/reveal'
import { ExportGlobe } from '@/components/export-globe'
import { SectionLabel } from '@/components/section-label'
import { ArrowLeft } from 'lucide-react'

const VETROS_URL = 'https://vetros.ir'

export function Ecosystem() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border bg-background py-24 md:py-36"
    >
      {/* faint grid backdrop reinforces the industrial / technical feel */}
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel index="02" className="justify-center">
              THE VETROS ECOSYSTEM
            </SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-pretty text-3xl font-semibold font-modam leading-[1.3] tracking-tight md:text-4xl lg:text-[42px]">
              یک اکوسیستم یکپارچه؛ از تولید ایران تا{' '}
              <span className="text-accent">بازارهای جهانی</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              <span className="font-latin">VETROS</span> تولید ایران را در یک
              اکوسیستم یکپارچه سازمان می‌دهد؛ تولیدکنندگان، برندها، تجهیز،
              استانداردسازی و صادرات را به هم پیوند می‌دهد و کالای ایرانی را از
              خاورمیانه به بازارهای جهانی می‌رساند.
            </p>
          </Reveal>
        </div>

        {/* signature export hemisphere — Iran → Middle East → the world */}
        <Reveal delay={200}>
          <div className="mx-auto mt-12 max-w-[1180px] md:mt-16">
            <ExportGlobe />
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={280}>
          <div className="mt-14 flex justify-center">
            <a
              href={VETROS_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              مشاهده اکوسیستم وتروس
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

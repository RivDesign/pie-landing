import { Reveal } from "@/components/reveal";
import { HeroVisual } from "@/components/hero-visual";
import { ArrowLeft } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-44 md:pb-24"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Meta row — dispatch marker + live status */}
        <Reveal>
          <div className="flex items-center justify-between border-b border-border pb-6">
            <div className="flex items-center gap-3 font-latin" dir="ltr">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.28em] text-muted-foreground">
                VETROS X2 · PRODUCTION INFRASTRUCTURE
              </span>
            </div>
            <span
              className="hidden font-latin text-[11px] font-semibold tracking-[0.28em] text-foreground/40 sm:block"
              dir="ltr"
            >
              DISPATCH · 01
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-10 max-w-5xl text-balance text-[27px] leading-normal tracking-tight sm:text-[34px] sm:leading-normal md:text-[46px] md:leading-[1.45] lg:text-[56px] lg:leading-[1.4] font-modam font-bold">
            آینده‌ای قدرتمند برای تولید ملی ایرانیان ایران؛
            <br className="hidden sm:block" />{" "}
            <span className="text-muted-foreground">
              با ایجاد اتحاد بین تولیدکنندگان و اتصال محصولات ایرانی به بازارهای
              جهانی
            </span>
          </h1>
        </Reveal>

        {/* Asymmetric lede + actions */}
        <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <Reveal delay={160}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              پلتفرم تجهیز وتروس، زیرساختی برای تأمین، تجهیز، توسعه،
              استانداردسازی و آماده‌سازی تولیدکنندگان ایرانی برای ورود به
              بازارهای داخلی و جهانی است.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#journey"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                مسیر تجهیز را ببینید
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-muted"
              >
                شروع همکاری
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={320}>
        <div className="relative mx-auto mt-16 max-w-[1400px] px-5 md:mt-24 md:px-10">
          <div className="rounded-xl border border-border bg-surface/60 px-4 py-10 backdrop-blur-sm md:px-12 md:py-14">
            <HeroVisual />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

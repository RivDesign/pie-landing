"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    num: "01",
    title: "مشارکت مردمی",
    desc: "مشارکت مردم در توسعه و ایجاد ظرفیت‌های تولیدی",
  },
  { num: "02", title: "ارزیابی", desc: "بررسی ظرفیت و وضعیت فعلی تولید" },
  {
    num: "03",
    title: "تأمین",
    desc: "تأمین مواد اولیه، تجهیزات و ابزار موردنیاز",
  },
  { num: "04", title: "تجهیز", desc: "ارتقای کارگاه و فرآیند تولید" },
  {
    num: "05",
    title: "توسعه",
    desc: "بهبود محصول، طراحی و توسعه فرآیند تولید",
  },
  {
    num: "06",
    title: "استانداردسازی",
    desc: "کنترل کیفیت و آماده‌سازی مطابق استانداردهای بازار هدف",
  },
  {
    num: "07",
    title: "برندینگ",
    desc: "توسعه هویت برند، بسته‌بندی و آماده‌سازی محصول",
  },
  {
    num: "08",
    title: "بازار",
    desc: "اتصال محصول به شبکه فروش و بازارهای هدف",
  },
  {
    num: "09",
    title: "لجستیک",
    desc: "انبارداری، حمل‌ونقل و آماده‌سازی زنجیره توزیع",
  },
  { num: "10", title: "صادرات", desc: "ورود محصول به بازارهای بین‌المللی" },
];

export function Journey() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index ?? 0,
            );
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const progress = ((active + 1) / STEPS.length) * 100;

  return (
    <section
      id="journey"
      className="border-b border-border bg-background py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel index="05">PRODUCER JOURNEY</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 text-pretty text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl font-modam">
              تولیدکننده از کجا شروع می‌کند؟
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          {/* Sticky progress panel */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-xl border border-border bg-surface/50 p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-latin text-7xl font-bold text-accent tabular-nums">
                  {STEPS[active].num}
                </span>
                <span className="text-sm text-muted-foreground">
                  از {STEPS.length}
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-foreground font-modam">
                {STEPS[active].title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {STEPS[active].desc}
              </p>

              <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Scroll-driven list */}
          <ol className="relative">
            <span
              className="absolute bottom-0 right-[11px] top-2 w-px bg-border"
              aria-hidden
            />
            {STEPS.map((s, i) => (
              <li
                key={s.num}
                data-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="relative py-6 pr-10"
              >
                <span
                  className={cn(
                    "absolute right-1.5 top-8 h-3 w-3 rounded-full border-2 bg-background transition-colors duration-300",
                    i <= active ? "border-accent bg-accent" : "border-border",
                  )}
                  aria-hidden
                />
                <div
                  className={cn(
                    "transition-all duration-300",
                    i === active ? "opacity-100" : "opacity-45",
                  )}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-latin text-sm font-semibold text-muted-foreground tabular-nums">
                      {s.num}
                    </span>
                    <h4 className="text-2xl font-semibold text-foreground md:text-3xl font-modam">
                      {s.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

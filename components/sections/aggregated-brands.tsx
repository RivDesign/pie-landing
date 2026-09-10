import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ProductGallery } from "@/components/product-gallery";
import { ValueLoop } from "@/components/value-loop";
import { ArrowLeft } from "lucide-react";
import VetrosLogo from "@/assets/Vetros-logo.png";
import Image from "next/image";
import ImgEcoIrenLogo from "@/assets/eco-iren-logo.png";
import ImgZenqovoLogo from "@/assets/zenqovo-logo.png";
import ImgWdsLogo from "@/assets/wds-logo.png";
import ImgNichvanLogo from "@/assets/nichvan-logo.png";
const PILLARS = [
  {
    num: "01",
    title: "تأمین هوشمند",
    desc: "تجمیع نیازهای خرید مواد اولیه، تجهیزات و خدمات برای ایجاد قدرت تأمین و کاهش هزینه‌های زنجیره تولید.",
  },
  {
    num: "02",
    title: "استانداردسازی",
    desc: "ایجاد استانداردهای مشترک و کنترل کیفیت برای اطمینان از ثبات محصول، صرف‌نظر از واحد تولیدکننده.",
  },
  {
    num: "03",
    title: "توسعه محصول و برند",
    desc: "طراحی، توسعه و بهینه‌سازی محصولات بر اساس نیاز بازارهای هدف و ایجاد هویت تجاری یکپارچه.",
  },
  {
    num: "04",
    title: "لجستیک و بازار جهانی",
    desc: "ایجاد زیرساخت مشترک برای انبارداری، حمل‌ونقل، فروش B2B و D2C و ورود به بازارهای بین‌المللی.",
  },
];

const FRAGMENTED = [
  "تولیدکنندگان مستقل",
  "ظرفیت‌های پراکنده",
  "تأمین‌های جداگانه",
  "برندهای کوچک",
  "بازار محدود",
];

const UNIFIED = [
  "تولیدکنندگان ایرانی",
  "تجمیع ظرفیت",
  "تأمین مشترک",
  "استاندارد مشترک",
  "برند واحد",
  "بازار جهانی",
];

const VALUE = [
  {
    title: "دسترسی به بازار بزرگ‌تر",
    desc: "ورود به شبکه فروش و بازارهای هدف گسترده‌تر.",
  },
  {
    title: "استانداردسازی و کنترل کیفیت",
    desc: "کیفیت پایدار مطابق استانداردهای بازار.",
  },
  { title: "تأمین قدرتمندتر", desc: "خرید مشترک و زنجیره تأمین کارآمدتر." },
  { title: "توسعه محصول", desc: "بهبود و توسعه محصول بر اساس نیاز بازار." },
  { title: "برندینگ حرفه‌ای", desc: "هویت تجاری قوی و قابل‌رقابت." },
  {
    title: "بسته‌بندی جهانی",
    desc: "بسته‌بندی مطابق استاندارد بازارهای بین‌المللی.",
  },
  { title: "لجستیک یکپارچه", desc: "انبار، حمل‌ونقل و توزیع مشترک." },
  { title: "فروش B2B و D2C", desc: "کانال‌های فروش متنوع و مستقیم." },
];

const ARCHITECTURE = [
  {
    num: "01",
    brand: "ECO IREN",
    name: "برند تجمیعی ۰۱",
    industry: "صنایع غذایی",
    image: ImgEcoIrenLogo,
  },
  {
    num: "02",
    brand: "ZENQOVO",
    name: "برند تجمیعی ۰۲",
    industry: "کیف، کفش و پوشاک",
    image: ImgZenqovoLogo,
  },
  {
    num: "03",
    brand: "WHITE DEER",
    name: "برند تجمیعی ۰۳",
    industry: "صنایع دستی",
    image: ImgWdsLogo,
  },
  {
    num: "04",
    brand: "NICHVAN",
    name: "برند تجمیعی ۰۴",
    industry: "مبلمان و تجهیزات خانه",
    image: ImgNichvanLogo,
  },
];

const PRODUCERS = ["۰۱", "۰۲", "۰۳", "۰۴", "۰۵", "۰۶"];

export function AggregatedBrands() {
  return (
    <section
      id="participation"
      className="border-b border-border bg-background text-foreground"
    >
      {/* ============ 01 CORE MESSAGE + 02 VISUAL ============ */}
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel index="04">AGGREGATED BRANDS</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 text-balance text-4xl font-semibold font-modam leading-[1.25] tracking-tight md:text-5xl lg:text-[60px] lg:leading-[1.15]">
                چند تولیدکننده،
                <br />
                <span className="text-accent">یک برند جهانی.</span>
              </h2>
            </Reveal>
          </div>
          <div className="space-y-5">
            <Reveal delay={140}>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                وتروس با ایجاد برندهای تجمیعی، ظرفیت تولیدکنندگان ایرانی را در
                یک ساختار یکپارچه گرد هم می‌آورد تا محصولاتی استاندارد،
                قابل‌رقابت و آماده حضور در بازارهای جهانی شکل بگیرند.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                در این مدل، تولیدکنندگان هویت و تخصص تولیدی خود را حفظ می‌کنند،
                اما در بخش‌هایی مانند استانداردسازی، توسعه محصول، تأمین،
                برندینگ، لجستیک و بازار، در یک ساختار مشترک با یکدیگر همکاری
                می‌کنند.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-16 md:mt-20">
            <ProductGallery />
          </div>
        </Reveal>
      </div>

      {/* ============ 03 WHAT IS AN AGGREGATED BRAND ============ */}
      <div className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionLabel>DEFINITION</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h3 className="mt-6 text-pretty text-2xl font-semibold tracking-tight md:text-3xl font-modam">
                  برند تجمیعی چیست؟
                </h3>
              </Reveal>
            </div>
            <div className="space-y-5">
              <Reveal delay={120}>
                <p className="text-pretty text-lg leading-relaxed text-foreground/90">
                  برند تجمیعی، یک ساختار تجاری واحد است که ظرفیت چندین
                  تولیدکننده متخصص و مکمل را زیر یک هویت برند مشترک جمع می‌کند.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  در این مدل، قدرت تولید، دانش فنی، ظرفیت تأمین و کیفیت
                  تولیدکنندگان به یکدیگر متصل می‌شود و در کنار زیرساخت‌های مشترک
                  برند، توسعه محصول، استانداردسازی، لجستیک و فروش قرار می‌گیرد.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={80}>
            <p className="mt-14 max-w-4xl text-balance font-modam text-3xl font-semibold leading-[1.4] tracking-tight md:mt-20 md:text-4xl lg:text-5xl">
              از ظرفیت‌های پراکنده، به یک ساختار یکپارچه برای{" "}
              <span className="text-accent">توسعه جامع و تولید ملی.</span>
            </p>
          </Reveal>
        </div>
      </div>

      {/* ============ 04 WHY AGGREGATION ============ */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <SectionLabel index="—">WHY AGGREGATION</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="mt-7 max-w-2xl text-pretty text-3xl font-semibold tracking-tight md:text-4xl font-modam">
              از ظرفیت های پراکنده، به یک ساختار واحد
            </h3>
          </Reveal>

          {/* RTL: fragmented (start) on the right, unified (destination) on the left */}
          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-8">
            {/* RIGHT — fragmented */}
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-7 md:p-8">
                <span className="text-sm font-semibold text-muted-foreground">
                  تولیدکنندگان پراکنده
                </span>
                <ol className="mt-6 flex flex-col">
                  {FRAGMENTED.map((f, i) => (
                    <li key={f} className="flex flex-col items-center">
                      <span className="w-full rounded-lg border border-border bg-background px-4 py-3 text-center text-sm text-foreground/80">
                        {f}
                      </span>
                      {i < FRAGMENTED.length - 1 && (
                        <span
                          className="my-1.5 h-4 w-px bg-border"
                          aria-hidden
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* transition arrow */}
            <div className="flex items-center justify-center md:px-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-background text-accent">
                <ArrowLeft size={18} />
              </span>
            </div>

            {/* LEFT — unified */}
            <Reveal delay={120}>
              <div className="flex h-full flex-col rounded-2xl border border-accent/40 bg-background p-7 shadow-[0_1px_0_0_var(--border)] md:p-8">
                <span className="text-sm font-semibold text-accent">
                  یک برند تجمیعی
                </span>
                <ol className="mt-6 flex flex-col">
                  {UNIFIED.map((u, i) => (
                    <li key={u} className="flex flex-col items-center">
                      <span className="w-full rounded-lg border border-accent/25 bg-surface px-4 py-3 text-center text-sm font-medium text-foreground">
                        {u}
                      </span>
                      {i < UNIFIED.length - 1 && (
                        <span
                          className="my-1.5 h-4 w-px bg-accent/30"
                          aria-hidden
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ============ 05 FOUR CORE PILLARS ============ */}
      <div className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
            <div>
              <Reveal>
                <SectionLabel>FOUR PILLARS</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h3 className="mt-6 text-pretty text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl font-modam">
                  چهار ستون مدل تجمیعی
                </h3>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:pb-2">
                ساختار مشترکی که ظرفیت تولیدکنندگان را به یک برند قابل‌رقابت
                تبدیل می‌کند.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 border-b border-border md:mt-16">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 70}>
                <article className="group relative grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t border-border py-8 transition-colors duration-500 md:grid-cols-[7rem_1fr] md:gap-x-12 md:py-11">
                  <span
                    className="pointer-events-none absolute right-0 top-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                    aria-hidden="true"
                  />
                  <span className="font-latin text-4xl font-bold tabular-nums text-border transition-colors duration-500 group-hover:text-accent md:text-6xl">
                    {p.num}
                  </span>
                  <div>
                    <h4 className="text-pretty text-2xl font-semibold text-foreground md:text-3xl font-modam">
                      {p.title}
                    </h4>
                    <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ============ 06 PRODUCER NETWORK ============ */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>PRODUCER NETWORK</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-7 text-pretty text-3xl font-semibold tracking-tight md:text-4xl font-modam">
                هم‌افزایی تولیدکنندگان پروژه زیر چتر برندهای تجمیعی هولدینگ
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                وتروس بستری برای گردهم‌آوردن تولیدکنندگان پروژه در قالب برندهای
                تجمیعی هولدینگ فراهم می‌کند؛ جایی که همکاری، اعتبار و ظرفیت رشد
                کسب‌وکارها چندبرابر می‌شود.
              </p>
            </Reveal>
          </div>

          {/* RTL network: producers (right) -> brand (center) -> channels (left) */}
          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-4">
            {/* producers */}
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                {PRODUCERS.map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-3 py-3"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-foreground">
                      تولیدکننده {n}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="flex items-center justify-center">
              <ArrowLeft size={18} className="hidden text-accent md:block" />
              <span className="h-px w-full bg-border md:hidden" />
            </div>

            {/* brand core */}
            <Reveal delay={100}>
              <div className="rounded-2xl border border-primary bg-primary px-6 py-8 text-center text-primary-foreground">
                <div className="aspect-610/203 relative max-w-25 mx-auto">
                  <Image
                    fill
                    src={VetrosLogo}
                    alt="Vetros Logo"
                    className="object-cover size-full block"
                  />
                </div>
                <p className="mt-1 text-sm opacity-80">برند تجمیعی</p>
                <span className="mx-auto mt-4 block h-px w-10 bg-primary-foreground/25" />
                <p className="mt-4 text-xs leading-relaxed opacity-70">
                  اتصال، سازمان‌دهی و تقویت شبکه تولید
                </p>
              </div>
            </Reveal>

            <div className="flex items-center justify-center">
              <ArrowLeft size={18} className="hidden text-accent md:block" />
              <span className="h-px w-full bg-border md:hidden" />
            </div>

            {/* channels */}
            <Reveal delay={200}>
              <div className="flex flex-col gap-3">
                {["B2B", "D2C", "GLOBAL MARKET"].map((c) => (
                  <div
                    key={c}
                    className="flex items-center justify-between rounded-lg border border-accent/40 bg-surface px-4 py-3.5"
                  >
                    <span className="font-latin text-sm font-bold tracking-wide text-foreground">
                      {c}
                    </span>
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                      aria-hidden
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ============ 07 VALUE FOR PRODUCERS ============ */}
      <div className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>VALUE FOR PRODUCERS</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-7 text-pretty text-3xl font-semibold tracking-tight md:text-4xl font-modam">
                تولیدکننده از پیوستن چه به‌دست می‌آورد؟
              </h3>
            </Reveal>
          </div>

          <div className="mt-14 grid border-t border-border sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {VALUE.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col border-b border-border py-7 md:px-7 md:[&:not(:nth-child(4n+1))]:border-r md:[&:not(:nth-child(4n+1))]:border-border">
                  <span className="font-latin text-xs font-bold tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-4 text-pretty font-semibold leading-snug text-foreground font-modam">
                    {v.title}
                  </h4>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ============ 08 GLOBAL BRAND ARCHITECTURE ============ */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
            <div>
              <Reveal>
                <SectionLabel>BRAND ARCHITECTURE</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h3 className="mt-6 text-pretty text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl font-modam">
                  یک پلتفرم، چند برند جهانی
                </h3>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:pb-2">
                وتروس می‌تواند در صنایع مختلف، برندهای تجمیعی مستقلی توسعه دهد؛
                هر برند، شبکه‌ای از تولیدکنندگان زیر یک هویت بین‌المللی مشترک.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {ARCHITECTURE.map((b, i) => (
              <Reveal key={b.num} delay={i * 80}>
                <article className="group flex h-full flex-col border border-border bg-surface/40 p-7 transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-baseline justify-between">
                    <span className="font-latin text-sm font-bold tabular-nums text-border transition-colors group-hover:text-accent">
                      {b.num}
                    </span>

                    <span className="font-latin text-[11px] font-bold tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
                      {b.brand}
                    </span>
                  </div>
                  <div className="flex items-center justify-between  mt-5">
                    <div className="flex flex-col gap-0.5">
                      <h4 className=" text-xl font-semibold text-foreground">
                        {b.name}
                      </h4>
                      <p className=" text-sm text-accent">{b.industry}</p>
                    </div>
                    <div className="relative aspect-square size-12">
                      <Image
                        fill
                        src={b.image}
                        alt={b.name}
                        className="block size-full object-cover"
                      />
                    </div>
                  </div>

                  <span className="mt-7 block h-px w-full bg-border" />

                  <ul className="mt-6 space-y-2.5 text-[13px] text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span
                        className="h-1 w-1 rounded-full bg-accent"
                        aria-hidden
                      />
                      چند تولیدکننده
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="h-1 w-1 rounded-full bg-accent"
                        aria-hidden
                      />
                      یک برند مشترک
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="h-1 w-1 rounded-full bg-accent"
                        aria-hidden
                      />
                      استاندارد مشترک
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="h-1 w-1 rounded-full bg-accent"
                        aria-hidden
                      />
                      بازار جهانی
                    </li>
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-12 max-w-3xl text-pretty leading-relaxed text-muted-foreground md:mt-14">
              این برندها بر پایه استانداردهای طراحی جهانی توسعه یافته‌اند،
              گواهی‌نامه‌های بین‌المللی <span className="font-latin">ISO</span>{" "}
              لازم را دریافت کرده‌اند و برای ورود و فعالیت پایدار در بازارهای
              جهانی آماده‌سازی می‌شوند.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ============ 09 ECONOMIC MODEL ============ */}
      <div className="border-t border-border bg-warm text-warm-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionLabel index="—" className="justify-center">
                ECONOMIC MODEL
              </SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mt-7 text-balance font-modam text-3xl font-semibold leading-[1.35] tracking-tight md:text-4xl lg:text-[44px] lg:leading-[1.3]">
                رشد برند، به رشد شبکه تولید بازمی‌گردد.
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-7 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                با توسعه برندهای تجمیعی و افزایش ظرفیت فروش، ارزش ایجادشده
                می‌تواند در مسیر توسعه شبکه تولید، ارتقای تجهیزات، افزایش ظرفیت
                کارگاه‌ها، توسعه محصولات و ایجاد واحدهای تولیدی جدید دوباره به
                چرخه تولید بازگردد.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground/80">
                این مدل، یک ساختار توسعه‌ای و راهبردی است؛ نه پیشنهاد مالی و
                بدون هرگونه تضمین سود یا بازده.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-16 md:mt-20">
              <ValueLoop />
            </div>
          </Reveal>
        </div>
      </div>

      {/* ============ 10 FINAL STATEMENT ============ */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <SectionLabel>THE MODEL</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="mt-7 max-w-4xl text-balance font-modam text-3xl font-semibold leading-[1.3] tracking-tight md:text-5xl lg:text-[56px] lg:leading-[1.2]">
              از تولیدکنندگان پراکنده،
              <br />
              برندهای جهانی می‌سازیم.
            </h3>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              وتروس با اتصال تولیدکنندگان، ایجاد زیرساخت‌های مشترک و توسعه
              برندهای تجمیعی، تلاش می‌کند ظرفیت‌های تولیدی پراکنده را به
              مجموعه‌هایی منسجم، استاندارد و قابل‌رقابت در بازار جهانی تبدیل
              کند.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              آشنایی با برندهای تجمیعی
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

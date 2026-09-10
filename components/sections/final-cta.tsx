import { Logo } from "@/components/logo";

const FOOTER_LINKS = [
  { label: "درباره پلتفرم", href: "#about" },
  { label: "مسیر تجهیز", href: "#journey" },
  { label: "حوزه‌های فعالیت", href: "#industries" },
  { label: "برندها", href: "#participation" },
  { label: "تماس", href: "#contact" },
];

const VETROS_URL = "https://vetros.ir";

export function FinalCtaFooter() {
  return (
    <footer className="bg-[#0a0b0d] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          {/* PIE identity */}
          <div className="flex flex-col items-start gap-4">
            <span className="font-latin text-xl font-bold tracking-tight text-white font-modam">
              PIE شرکت نوآوران پدرام شرق
            </span>
            <p className="text-base leading-relaxed text-white/55">
              توسعه‌دهنده پلتفرم تجهیز وتروس
            </p>
            <p className="mt-2 text-lg font-medium text-white/80">
              پلتفرم تجهیز وتروس <span className="font-latin">X2</span>
            </p>
          </div>

          {/* Relationship connector: PIE → develops X2 → part of VETROS */}
          <div
            className="hidden items-center justify-center lg:flex"
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-2 text-white/30">
              <span className="h-14 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
              <span className="text-lg">←</span>
              <span className="h-14 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
            </div>
          </div>

          {/* VETROS ecosystem identity */}
          <div className="flex flex-col items-start gap-5 lg:items-end lg:text-left">
            <a
              href={VETROS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
              aria-label="ورود به وب‌سایت اکوسیستم وتروس"
            >
              <Logo variant="light" className="h-11 md:h-12" />
            </a>
            <p className="text-sm leading-relaxed text-white/55">
              اکوسیستم وتروس
            </p>
            <a
              href={VETROS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
            >
              ورود به اکوسیستم <span className="font-latin">VETROS</span>
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
            </a>
          </div>
        </div>

        <nav className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-10">
          {FOOTER_LINKS.map((link, i) => (
            <a
              key={`${link.href}-${i}`}
              href={link.href}
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40 font-latin">
          © 2026 PIE / VETROS — All rights reserved.
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { Mail, MapPin, Check } from "lucide-react";

const COOP_TYPES = [
  "برای همکاری با ما",
  "برای پیوستن به شبکه تولیدکنندگان",
  "برای توسعه یک برند",
  "برای مشارکت در پروژه‌های تولیدی",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="border-b border-border bg-surface py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left — narrative + info */}
          <div>
            <Reveal>
              <SectionLabel index="07">GET IN TOUCH</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 text-pretty text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl font-modam">
                با تیم <span className="font-latin">PIE</span> در ارتباط باشید.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
                اگر تولیدکننده، صاحب برند، سرمایه‌گذار پروژه، متخصص صنعتی یا
                مجموعه‌ای علاقه‌مند به همکاری با وتروس هستید، با تیم{" "}
                <span className="font-latin">PIE</span> در ارتباط باشید.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-10 flex flex-col gap-5">
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                    <Mail size={17} className="text-accent" />
                  </span>
                  <a
                    href="mailto:info@vetros.ir"
                    className="font-latin text-sm text-foreground"
                    dir="ltr"
                  >
                    info@vetros.ir
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                    <MapPin size={17} className="text-accent" />
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ایران — مشهد مقدس — دفتر مرکزی وتروس
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={140}>
            <div className="rounded-xl border border-border bg-background p-6 md:p-9">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check size={26} />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">
                    درخواست شما ثبت شد
                  </h3>
                  <p className="mt-3 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                    کارشناسان وتروس در اولین فرصت با شما تماس خواهند گرفت.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                  <Field label="نام و نام خانوادگی" name="name" required />
                  <Field label="نام شرکت / مجموعه" name="company" />
                  <Field label="شماره تماس" name="phone" type="tel" required />
                  <Field label="ایمیل" name="email" type="email" />

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="coop"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      نوع همکاری
                    </label>
                    <select
                      id="coop"
                      name="coop"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        انتخاب کنید
                      </option>
                      {COOP_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      توضیحات کوتاه
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      ارسال درخواست
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}

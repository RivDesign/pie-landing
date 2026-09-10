"use client";

/**
 * ECONOMIC MODEL — economic development sequence.
 *
 * Desktop/tablet: a spacious right→left arc. Because the site is RTL the flow
 * STARTS far-right (۰۱ آموزش تولیدکننده) and ENDS far-left (۰۷ تولید بیشتر),
 * fanning over a central green anchor circle that the seven steps orbit
 * without touching. An accent pulse travels the arc right→left to signal
 * progression toward «تولید بیشتر».
 *
 * Mobile: an ordered vertical list, 01 → 07.
 */

const STEPS = [
  {
    num: "01",
    title: "آموزش تولیدکننده",
    desc: "توانمندسازی، آموزش مهارت و انتقال دانش موردنیاز برای ارتقای تولید",
  },
  {
    num: "02",
    title: "مشارکت با وتروس",
    desc: "اتصال تولیدکننده به زیرساخت‌ها، شبکه و مدل همکاری وتروس",
  },
  {
    num: "03",
    title: "برند تجمیعی",
    desc: "قرار گرفتن تولیدکنندگان در ساختار برندهای تجمیعی و استفاده از زیرساخت مشترک برند",
  },
  {
    num: "04",
    title: "ایجاد ارزش",
    desc: "تولید محصول، ایجاد ارزش اقتصادی و شکل‌گیری ظرفیت تجاری",
  },
  {
    num: "05",
    title: "فروش",
    desc: "عرضه محصول در بازارهای هدف و توسعه فروش B2B و D2C",
  },
  {
    num: "06",
    title: "توسعه ظرفیت",
    desc: "بازگشت بخشی از ارزش ایجادشده به مسیر توسعه تجهیزات، ظرفیت تولید و زیرساخت",
  },
  {
    num: "07",
    title: "تولید بیشتر",
    desc: "افزایش ظرفیت تولید، توسعه واحدهای جدید و گسترش شبکه تولیدکنندگان",
  },
];

const VB_W = 1000;
const VB_H = 660;
const C = { x: 500, y: 486 };
const R_NODE = 306;
const R_CARD = 392;
const R_CENTER = 104;

// i = 0 (far right, θ=0) → i = 6 (far left, θ=180). Screen y is inverted so
// increasing θ sweeps over the TOP of the anchor circle.
function pos(i: number, r: number) {
  const theta = (i * 30 * Math.PI) / 180;
  return { x: C.x + r * Math.cos(theta), y: C.y - r * Math.sin(theta) };
}

// Arc sampled from the same formula so it passes exactly through every node,
// drawn right → left (θ: 0 → π).
const ARC_PATH =
  "M " +
  Array.from({ length: 73 }, (_, k) => {
    const th = (k / 72) * Math.PI;
    return `${(C.x + R_NODE * Math.cos(th)).toFixed(1)},${(
      C.y -
      R_NODE * Math.sin(th)
    ).toFixed(1)}`;
  }).join(" L ");

export function ValueLoop() {
  return (
    <div className="w-full">
      {/* ---------- Desktop / tablet: right → left arc ---------- */}
      <div className="relative mx-auto hidden w-full max-w-[1080px] lg:block">
        <div className="relative aspect-[1000/660] w-full">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            role="img"
            aria-label="مدل اقتصادی وتروس: از آموزش تولیدکننده در سمت راست تا تولید بیشتر در سمت چپ"
          >
            {/* direction hint: soft gradient fading toward the left endpoint */}
            <defs>
              <linearGradient id="flowGrad" x1="1" y1="0" x2="0" y2="0">
                <stop
                  offset="0%"
                  stopColor="var(--accent)"
                  stopOpacity="0.15"
                />
                <stop
                  offset="55%"
                  stopColor="var(--accent)"
                  stopOpacity="0.55"
                />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* central anchor circle */}
            <circle
              cx={C.x}
              cy={C.y}
              r={R_CENTER + 22}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.2"
              strokeDasharray="2 8"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${C.x} ${C.y}`}
                to={`360 ${C.x} ${C.y}`}
                dur="60s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={C.x}
              cy={C.y}
              r={R_CENTER}
              fill="var(--accent)"
              fillOpacity="0.06"
              stroke="var(--accent)"
              strokeWidth="1.6"
            />
            <text
              x={C.x}
              y={C.y - 10}
              textAnchor="middle"
              className="fill-foreground font-modam"
              style={{ fontSize: 19, fontWeight: 700 }}
            >
              مدل توسعه
            </text>
            <text
              x={C.x}
              y={C.y + 20}
              textAnchor="middle"
              className="fill-accent font-modam"
              style={{ fontSize: 22, fontWeight: 800 }}
            >
              اقتصادی
            </text>

            {/* flow arc (right → left) */}
            <path
              d={ARC_PATH}
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* connectors node → card, and nodes */}
            {STEPS.map((s, i) => {
              const n = pos(i, R_NODE);
              const c = pos(i, R_NODE + 44);
              return (
                <g key={s.num}>
                  <line
                    x1={n.x}
                    y1={n.y}
                    x2={c.x}
                    y2={c.y}
                    stroke="var(--border)"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="8"
                    fill="var(--background)"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                  />
                  <circle cx={n.x} cy={n.y} r="3" fill="var(--accent)" />
                </g>
              );
            })}

            {/* travelling pulse: right → left toward «تولید بیشتر» */}
            <circle r="5.5" fill="var(--accent)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path={ARC_PATH}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;1;0"
                keyTimes="0;0.08;0.5;0.92;1"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* step cards — absolutely positioned around the arc */}
          {STEPS.map((s, i) => {
            const c = pos(i, R_CARD);
            return (
              <div
                key={s.num}
                className="absolute w-[168px] -translate-x-1/2 -translate-y-1/2 text-center"
                style={{
                  left: `${(c.x / VB_W) * 100}%`,
                  top: `${(c.y / VB_H) * 100}%`,
                }}
              >
                <span className="font-latin text-sm font-bold tabular-nums text-accent">
                  {s.num}
                </span>
                <h4 className="mt-1.5 text-[15px] font-semibold leading-snug">
                  {s.title}
                </h4>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- Mobile: ordered vertical list 01 → 07 ---------- */}
      <ol className="mx-auto flex max-w-md flex-col lg:hidden">
        {STEPS.map((s, i) => (
          <li key={s.num} className="flex flex-col">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-background/60 p-5">
              <span className="font-latin text-base font-bold tabular-nums text-accent">
                {s.num}
              </span>
              <div>
                <h4 className="text-base font-semibold text-foreground">
                  {s.title}
                </h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className="my-1.5 ms-[1.6rem] h-5 w-px bg-border"
                aria-hidden
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

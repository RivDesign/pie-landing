'use client'

/**
 * Subtle animated industrial network:
 * Producer → Equipment → Product → Standard → Global Market
 * Rendered RTL-aware (flows from right to left). Pure SVG + CSS.
 */
const NODES = [
  { label: 'تولیدکننده', en: 'PRODUCER' },
  { label: 'تجهیز', en: 'EQUIP' },
  { label: 'محصول', en: 'PRODUCT' },
  { label: 'استاندارد', en: 'STANDARD' },
  { label: 'بازار جهانی', en: 'GLOBAL' },
]

export function HeroVisual() {
  const count = NODES.length
  const margin = 90
  const span = (1000 - margin * 2) / (count - 1)
  // RTL: first node on the right
  const xs = NODES.map((_, i) => 1000 - margin - i * span)
  const y = 92

  return (
    <div className="relative w-full" aria-hidden="true">
      <svg
        viewBox="0 0 1000 184"
        className="w-full overflow-visible"
        fill="none"
      >
        <line
          x1={xs[0]}
          y1={y}
          x2={xs[count - 1]}
          y2={y}
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        <line
          x1={xs[0]}
          y1={y}
          x2={xs[count - 1]}
          y2={y}
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeDasharray="8 10"
          className="hero-flow"
        />

        <circle r="4" fill="var(--accent)" className="hero-pulse">
          <animateMotion
            dur="4.5s"
            repeatCount="indefinite"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
            path={`M ${xs[0]} ${y} L ${xs[count - 1]} ${y}`}
          />
        </circle>

        {NODES.map((n, i) => (
          <g key={n.en}>
            <circle
              cx={xs[i]}
              cy={y}
              r="7"
              fill="var(--background)"
              stroke="var(--foreground)"
              strokeWidth="1.5"
            />
            <circle cx={xs[i]} cy={y} r="2.5" fill="var(--foreground)" />
            <line
              x1={xs[i]}
              y1={y - 7}
              x2={xs[i]}
              y2={y - 26}
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x={xs[i]}
              y={y - 34}
              textAnchor="middle"
              className="fill-foreground"
              style={{ fontSize: 17, fontWeight: 500 }}
            >
              {n.label}
            </text>
            <text
              x={xs[i]}
              y={y + 44}
              textAnchor="middle"
              className="fill-muted-foreground font-latin"
              style={{ fontSize: 11, letterSpacing: 1.5 }}
            >
              {n.en}
            </text>
          </g>
        ))}
      </svg>

      <style jsx>{`
        .hero-flow {
          animation: heroDash 1.4s linear infinite;
        }
        @keyframes heroDash {
          to {
            stroke-dashoffset: -18;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-flow {
            animation: none;
          }
          .hero-pulse {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

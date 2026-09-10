'use client'

/**
 * VETROS export hemisphere.
 *
 * A minimal, premium wireframe half-globe that emerges from the bottom of
 * the section. The origin sits over the Iran / Middle East region and
 * animated export routes fan outward across the dome toward global
 * destinations (Europe, Africa, South & East Asia, the Americas).
 *
 * This is a stylised digital ecosystem visualization — not a geographic
 * map. All geometry is generated via a small orthographic projection so the
 * grid, nodes and routes sit believably on a sphere. Colors come entirely
 * from the existing design tokens (ink wireframe on the white canvas,
 * emerald accent for the live export routes).
 */

const CX = 500
const CY = 560
const R = 430
// viewing tilt (radians) — lifts the northern cap toward the viewer so the
// dome reads as a hemisphere emerging from the Iran / Middle East region.
const TILT = 0.62

type P = { x: number; y: number; z: number }

function project(lat: number, lon: number): P {
  const phi = (lat * Math.PI) / 180
  const lam = (lon * Math.PI) / 180
  const x0 = Math.cos(phi) * Math.sin(lam)
  const y0 = Math.sin(phi)
  const z0 = Math.cos(phi) * Math.cos(lam)
  // rotate around the X axis by TILT
  const y1 = y0 * Math.cos(TILT) - z0 * Math.sin(TILT)
  const z1 = y0 * Math.sin(TILT) + z0 * Math.cos(TILT)
  return { x: CX + R * x0, y: CY - R * y1, z: z1 }
}

// Build an SVG polyline path following the front hemisphere only (z >= 0).
function frontPath(points: P[]): string {
  let d = ''
  let pen = false
  for (const p of points) {
    if (p.z >= -0.02) {
      d += `${pen ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)} `
      pen = true
    } else {
      pen = false
    }
  }
  return d.trim()
}

const MERIDIANS: string[] = []
for (let lon = -150; lon <= 150; lon += 30) {
  const pts: P[] = []
  for (let lat = -80; lat <= 80; lat += 3) pts.push(project(lat, lon))
  MERIDIANS.push(frontPath(pts))
}

const PARALLELS: string[] = []
for (let lat = 0; lat <= 75; lat += 15) {
  const pts: P[] = []
  for (let lon = -180; lon <= 180; lon += 3) pts.push(project(lat, lon))
  PARALLELS.push(frontPath(pts))
}

// Origin (Iran / Middle East) and global export destinations.
const ORIGIN = project(42, 20)
const DESTS = [
  project(68, 15), // northern Europe
  project(58, -15), // western Europe
  project(52, -45), // the Americas
  project(36, -12), // north Africa
  project(40, 48), // south Asia
  project(55, 60), // east Asia
]

// A flight-style arc that bows outward from the sphere surface.
function routePath(a: P, b: P, lift: number): string {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = mx - CX
  const dy = my - CY
  const len = Math.hypot(dx, dy) || 1
  const cx = mx + (dx / len) * lift
  const cy = my + (dy / len) * lift
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(
    1,
  )} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
}

const ROUTES = DESTS.map((d, i) => ({
  path: routePath(ORIGIN, d, 64 + (i % 3) * 22),
  dest: d,
  delay: i * 0.55,
}))

export function ExportGlobe() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="60 190 880 400"
        className="w-full"
        role="img"
        aria-label="نیم‌کره صادرات وتروس: مسیرهای صادراتی از ایران به بازارهای جهانی"
      >
        <defs>
          <radialGradient id="domeGlow" cx="50%" cy="82%" r="60%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.14" />
            <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.03" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="var(--background)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--background)" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* ambient glow behind the dome */}
        <rect x="0" y="0" width="1000" height="600" fill="url(#domeGlow)" />

        {/* globe rim (dome silhouette) */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="var(--foreground)"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />

        {/* wireframe: parallels + meridians (front hemisphere) */}
        <g fill="none" stroke="var(--foreground)" strokeWidth="1">
          {PARALLELS.map((d, i) => (
            <path key={`par-${i}`} d={d} strokeOpacity="0.1" />
          ))}
          {MERIDIANS.map((d, i) => (
            <path key={`mer-${i}`} d={d} strokeOpacity="0.09" />
          ))}
        </g>

        {/* export routes fanning out from Iran */}
        {ROUTES.map((r, i) => (
          <g key={`route-${i}`}>
            <path
              d={r.path}
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.4"
              strokeWidth="1.3"
            />
            {/* traveling light trail */}
            <circle r="3.1" fill="var(--accent)">
              <animateMotion
                dur="3.4s"
                begin={`${r.delay}s`}
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                path={r.path}
              />
              <animate
                attributeName="opacity"
                dur="3.4s"
                begin={`${r.delay}s`}
                repeatCount="indefinite"
                keyTimes="0;0.12;0.8;1"
                values="0;1;1;0"
              />
            </circle>
            {/* destination node */}
            <circle
              cx={r.dest.x}
              cy={r.dest.y}
              r="4.5"
              fill="var(--background)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <circle cx={r.dest.x} cy={r.dest.y} r="1.8" fill="var(--accent)" />
          </g>
        ))}

        {/* origin: Iran / Middle East */}
        <circle cx={ORIGIN.x} cy={ORIGIN.y} r="46" fill="url(#originGlow)" />
        <circle
          cx={ORIGIN.x}
          cy={ORIGIN.y}
          r="7"
          fill="var(--accent)"
          stroke="var(--background)"
          strokeWidth="1.5"
        />
        {/* expanding pulse ring */}
        <circle
          cx={ORIGIN.x}
          cy={ORIGIN.y}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.4"
        >
          <animate
            attributeName="r"
            dur="3s"
            repeatCount="indefinite"
            values="7;30"
          />
          <animate
            attributeName="opacity"
            dur="3s"
            repeatCount="indefinite"
            values="0.6;0"
          />
        </circle>
        <text
          x={ORIGIN.x}
          y={ORIGIN.y + 30}
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontSize: 15, fontWeight: 700 }}
        >
          ایران
        </text>

        {/* bottom fade so the hemisphere emerges from the canvas */}
        <rect
          x="0"
          y="0"
          width="1000"
          height="600"
          fill="url(#fadeBottom)"
          pointerEvents="none"
        />
      </svg>

      {/* subtle directional caption */}
      <div className="mt-2 flex items-center justify-center gap-3 text-[11px] font-medium tracking-wide text-muted-foreground">
        <span className="font-latin">IRAN</span>
        <span className="h-px w-10 bg-accent/50" />
        <span className="font-latin">GLOBAL MARKETS</span>
      </div>
    </div>
  )
}

import { ImageIcon } from 'lucide-react'

/**
 * Product gallery scaffold for the four main VETROS production branches.
 * Image containers are intentionally empty for now — real product images
 * drop into each slot later without any layout changes.
 */
const BRANCHES = [
  { num: '01', name: 'صنایع غذایی', slots: 3 },
  { num: '02', name: 'کیف، کفش و پوشاک', slots: 3 },
  { num: '03', name: 'صنایع دستی', slots: 3 },
  { num: '04', name: 'مبلمان و تجهیزات خانه', slots: 3 },
]

export function ProductGallery() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {BRANCHES.map((branch) => (
        <div key={branch.num} className="flex flex-col">
          {/* Branch header */}
          <div className="flex items-baseline justify-between border-b border-border pb-4">
            <h3 className="text-lg font-semibold text-foreground">
              {branch.name}
            </h3>
            <span
              className="font-latin text-xs font-bold tabular-nums text-muted-foreground/60"
              dir="ltr"
            >
              {branch.num}
            </span>
          </div>

          {/* Single featured image per branch */}
          <div className="mt-5">
            <ImageSlot className="aspect-[4/5]" />
          </div>
        </div>
      ))}
    </div>
  )
}

function ImageSlot({ className = '' }: { className?: string }) {
  return (
    <div
      className={
        'group relative overflow-hidden rounded-xl border border-border bg-surface/50 transition-colors duration-300 hover:border-foreground/20 ' +
        className
      }
    >
      {/* Empty image container — ready for a product image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ImageIcon
          className="text-muted-foreground/25 transition-colors duration-300 group-hover:text-muted-foreground/40"
          size={22}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">جایگاه تصویر محصول</span>
    </div>
  )
}

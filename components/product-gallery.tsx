import { ImageIcon } from "lucide-react";
import ImgEcoIren from "@/assets/eco iren.png";
import ImgZenqovo from "@/assets/zenqovo.png";
import ImgWhiteDeer from "@/assets/white deer.png";
import ImgNichvan from "@/assets/nichvan.png";
import Image, { StaticImageData } from "next/image";
/**
 * Product gallery scaffold for the four main VETROS production branches.
 * Image containers are intentionally empty for now — real product images
 * drop into each slot later without any layout changes.
 */
const BRANCHES = [
  { num: "01", name: "صنایع غذایی", slots: 3, image: ImgEcoIren },
  { num: "02", name: "کیف، کفش و پوشاک", slots: 3, image: ImgZenqovo },
  { num: "03", name: "صنایع دستی", slots: 3, image: ImgWhiteDeer },
  { num: "04", name: "مبلمان و تجهیزات خانه", slots: 3, image: ImgNichvan },
];

export function ProductGallery() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {BRANCHES.map((branch) => (
        <div key={branch.num} className="flex flex-col">
          {/* Branch header */}
          <div className="flex items-baseline justify-between border-b border-border pb-4">
            <h3 className="text-lg font-semibold text-foreground font-modam">
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
            <ImageSlot
              className="aspect-[4/5]"
              alt={branch.name}
              src={branch.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ImageSlot({
  className = "",
  src,
  alt,
}: {
  className?: string;
  src: StaticImageData;
  alt: string;
}) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-xl border border-border bg-surface/50 transition-colors duration-300 hover:border-foreground/20 " +
        className
      }
    >
      {/* Empty image container — ready for a product image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          fill
          className="text-muted-foreground/25 transition-colors duration-300 group-hover:text-muted-foreground/40"
          src={src}
          alt={alt}
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">جایگاه تصویر محصول</span>
    </div>
  );
}

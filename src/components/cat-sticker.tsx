import Image from "next/image"

import { cn } from "@/lib/cn"

import styles from "./cat-sticker.module.css"

const cats = {
  polite: { src: "/images/stickers/polite-cat.webp", width: 360, height: 464 },
  pop: { src: "/images/stickers/popcat.webp", width: 300, height: 384 },
  surprised: { src: "/images/stickers/astonished-cat.webp", width: 158, height: 152 },
}

const placements = {
  portrait:
    "right-[-60px] -bottom-4 w-[clamp(90px,7.5vw,128px)] rotate-12 wide:right-[-70px]",
  work: "left-[52%] -bottom-2 w-[clamp(100px,8.2vw,140px)] -rotate-12",
  about:
    "top-[70px] left-[132px] w-[clamp(100px,8.5vw,145px)] rotate-9 text-muted wide:left-[150px]",
  contact:
    "right-[150px] -bottom-3 w-[clamp(128px,10vw,168px)] -rotate-9 wide:right-[180px]",
}

type CatStickerProps = {
  cat: keyof typeof cats
  placement: keyof typeof placements
}

// Декоративные стикеры не попадают в порядок чтения и навигацию с клавиатуры.
export const CatSticker = ({ cat, placement }: CatStickerProps) => {
  const image = cats[cat]

  return (
    <span
      className={cn(
        "pointer-events-none absolute z-3 block select-none",
        placements[placement]
      )}
      aria-hidden="true"
    >
      <Image
        className={cn("h-auto w-full", styles.outline)}
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        sizes="(min-width: 1600px) 160px, 128px"
        draggable={false}
      />
      <span
        className={cn(
          "absolute top-[5%] right-[-15%] text-[27px] leading-none text-accent after:absolute after:top-[27px] after:left-[15px] after:text-[12px] after:content-['✦']",
          placement === "work" && "top-[20%] right-auto left-[-13%]",
          placement === "contact" &&
            "top-[10%] right-[-16%] text-[33px] leading-none"
        )}
      >
        ✦
      </span>
    </span>
  )
}

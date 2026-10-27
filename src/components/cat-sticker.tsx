import Image from "next/image"
import styles from "./cat-sticker.module.css"

const cats = {
  polite: { src: "/images/stickers/polite-cat.webp", width: 360, height: 464 },
  pop: { src: "/images/stickers/popcat.webp", width: 300, height: 384 },
  surprised: { src: "/images/stickers/astonished-cat.webp", width: 158, height: 152 },
}

type CatStickerProps = {
  cat: keyof typeof cats
  placement: "portrait" | "work" | "about" | "contact"
}

/** Cutout stickers are decoration, so they stay out of focus and reading order. */
export function CatSticker({ cat, placement }: CatStickerProps) {
  const image = cats[cat]

  return (
    <span className={`${styles.sticker} ${styles[placement]}`} aria-hidden="true">
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        sizes="(min-width: 1600px) 160px, 128px"
        draggable={false}
      />
      <span className={styles.sparkle}>✦</span>
    </span>
  )
}

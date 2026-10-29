"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/cn"

const stickers = {
  hello: "/images/stickers/sticker.webm",
  work: "/images/stickers/sticker1.webm",
  about: "/images/stickers/sticker2.webm",
  services: "/images/stickers/sticker3.webm",
  contact: "/images/stickers/sticker4.webm",
}

export const AnimatedSticker = ({
  sticker,
  className,
}: {
  sticker: keyof typeof stickers
  className?: string
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let isVisible = false

    const updatePlayback = () => {
      if (isVisible && !reducedMotion.matches && !document.hidden) {
        void video.play().catch(() => {})
      } else {
        video.pause()
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      updatePlayback()
    })

    observer.observe(video)
    reducedMotion.addEventListener("change", updatePlayback)
    document.addEventListener("visibilitychange", updatePlayback)

    return () => {
      observer.disconnect()
      reducedMotion.removeEventListener("change", updatePlayback)
      document.removeEventListener("visibilitychange", updatePlayback)
      video.pause()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={cn(
        "pointer-events-none absolute z-3 aspect-square select-none object-contain",
        className
      )}
      src={stickers[sticker]}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
    />
  )
}

"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/cn"

export const AmbientSculpture = ({ className }: { className?: string }) => {
  const sculptureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = sculptureRef.current
    const hero = element?.closest("section")
    if (
      !element ||
      !hero ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    let frame = 0
    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5
        element.style.setProperty("--pointer-x", `${x * 24}deg`)
        element.style.setProperty("--pointer-y", `${y * -24}deg`)
      })
    }

    hero.addEventListener("pointermove", handlePointerMove)
    return () => {
      hero.removeEventListener("pointermove", handlePointerMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      className={cn(
        "sculpture-scene relative mr-[25px] size-[95px] perspective-[500px] transition-transform duration-400 ease-out",
        className
      )}
      aria-hidden="true"
      ref={sculptureRef}
    >
      <div className="absolute inset-[7px] animate-orbit transform-3d [transform:rotateX(-22deg)_rotateZ(-22deg)]">
        {Array.from({ length: 9 }, (_, index) => (
          <span
            className="absolute inset-0 rounded-full border border-accent opacity-64 backface-visible"
            key={index}
            style={{ transform: `rotateY(${index * 20}deg)` }}
          />
        ))}
      </div>
      <span className="absolute inset-0 grid animate-star-turn place-items-center text-[44px] text-accent">
        ✳
      </span>
    </div>
  )
}

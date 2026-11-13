"use client"

import { useEffect, useRef } from "react"

import type { CSSProperties, ReactNode } from "react"

const slowTravelRate = 0.16
const minimumVisibleRatio = 0.4

export const ProjectArchWheel = ({
  action,
  children,
  durationSeconds,
  label,
}: {
  action: ReactNode
  children: ReactNode
  durationSeconds: number
  label: string
}) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const wheelRef = useRef<HTMLDivElement>(null)

  const setTravelRate = (rate: number) => {
    wheelRef.current?.getAnimations().forEach((animation) => {
      animation.updatePlaybackRate(rate)
    })
  }

  useEffect(() => {
    const viewport = viewportRef.current
    const wheel = wheelRef.current
    if (!viewport || !wheel) return

    const cardObserver = new IntersectionObserver(
      (entries) => {
        for (const { target, intersectionRatio } of entries) {
          if (target instanceof HTMLElement) {
            target.inert = intersectionRatio < minimumVisibleRatio
          }
        }
      },
      { root: viewport, threshold: minimumVisibleRatio },
    )
    for (const card of wheel.children) cardObserver.observe(card)

    const viewportObserver = new IntersectionObserver(([entry]) => {
      wheel.toggleAttribute("data-offscreen", !entry.isIntersecting)
    })
    viewportObserver.observe(viewport)

    return () => {
      cardObserver.disconnect()
      viewportObserver.disconnect()
    }
  }, [])

  return (
    <section
      id="project-arch"
      className="relative left-1/2 isolate h-[clamp(162px,47vw,290px)] w-dvw max-w-[1920px] -translate-x-1/2 @container-size [--arch-base-radius:min(46vw,calc((100cqh-36px)*0.89))] [--arch-radius:calc(var(--arch-base-radius)*0.86)] [--card-size:calc(var(--arch-base-radius)*0.44)] [--arch-lift:calc(var(--card-size)*0.24)] sm:h-[clamp(280px,43vw,380px)] sm:[--arch-base-radius:min(43vw,89cqh)] lg:h-auto lg:min-h-[236px] lg:flex-1 lg:[--arch-base-radius:min(clamp(380px,34vw,630px),89cqh)]"
      aria-label={label}
      style={{ "--arch-duration": `${durationSeconds}s` } as CSSProperties}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setTravelRate(slowTravelRate)
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "touch") setTravelRate(1)
      }}
    >
      <div
        ref={viewportRef}
        className="absolute inset-x-0 -top-(--arch-lift) bottom-0 overflow-clip max-sm:bottom-9 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-2 after:h-8 after:bg-[linear-gradient(transparent,var(--color-page))] sm:after:h-12"
      >
        <div
          ref={wheelRef}
          className="arch-wheel absolute bottom-0 left-1/2 size-0 transform-[rotate(-90deg)] motion-safe:animate-arch-travel motion-safe:will-change-transform"
        >
          {children}
        </div>
      </div>

      {action}
    </section>
  )
}

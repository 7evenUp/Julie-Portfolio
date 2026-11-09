"use client"

import { useLayoutEffect, useRef } from "react"

import type { ReactNode } from "react"

const PageMotion = ({ children }: { children: ReactNode }) => {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || !window.IntersectionObserver) return

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )
    const elements = root.querySelectorAll<HTMLElement>("[data-reveal]")
    const reveal = (element: HTMLElement) => {
      element.dataset.revealState = "visible"
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    )

    elements.forEach((element) => {
      // Уже видимый контент и переходы по якорям не ждут прокрутки.
      if (
        motionPreference.matches ||
        element.getBoundingClientRect().top < window.innerHeight * 0.92
      ) {
        reveal(element)
      } else {
        element.dataset.revealState = "pending"
        observer.observe(element)
      }
    })

    const handleMotionChange = () => {
      if (!motionPreference.matches) return
      elements.forEach(reveal)
      observer.disconnect()
    }
    const handleFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      const element = event.target.closest<HTMLElement>("[data-reveal]")
      if (!element) return
      reveal(element)
      observer.unobserve(element)
    }

    motionPreference.addEventListener("change", handleMotionChange)
    root.addEventListener("focusin", handleFocus)

    return () => {
      observer.disconnect()
      motionPreference.removeEventListener("change", handleMotionChange)
      root.removeEventListener("focusin", handleFocus)
      elements.forEach((element) => delete element.dataset.revealState)
    }
  }, [])

  // Оставляем фон под закреплённым хедером, сохраняя отступ для контента.
  return (
    <div className="-mt-(--site-header-height) max-[1120px]:overflow-x-auto">
      <div
        ref={rootRef}
        className="relative isolate min-w-[1120px] overflow-clip bg-page pt-(--site-header-height)"
      >
        {children}
      </div>
    </div>
  )
}

export default PageMotion

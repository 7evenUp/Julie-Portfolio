"use client"

import { useEffect, useRef, useState } from "react"

import { heroTypewriter } from "@/content/site"

const { words, typingMs, deletingMs, holdMs, emptyMs, initialHoldMs } =
  heroTypewriter

const DesignLabel = () => (
  <span className="group relative mr-6 bg-accent font-bold text-black">
    Дизайн{" "}
    <span className="absolute -top-2 -left-2 size-4 border-t border-l border-accent transition-transform group-hover:scale-[115%]" />
    <span className="absolute -bottom-2 -left-2 size-4 border-b border-l border-accent transition-transform group-hover:scale-[115%]" />
    <span className="absolute -top-2 -right-2 size-4 border-t border-r border-accent transition-transform group-hover:scale-[115%]" />
    <span className="absolute -right-2 -bottom-2 size-4 border-r border-b border-accent transition-transform group-hover:scale-[115%]" />
  </span>
)

const HeroHeading = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [frame, setFrame] = useState({
    wordIndex: 0,
    length: words[0]?.length ?? 0,
    phase: "initial" as "initial" | "holding" | "deleting" | "empty" | "typing",
  })

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let isInView = true
    const updatePlayback = () => {
      setIsReducedMotion(preference.matches)
      setIsRunning(isInView && !document.hidden && !preference.matches)
    }
    const observer = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting
      updatePlayback()
    })
    if (headingRef.current) observer.observe(headingRef.current)
    updatePlayback()
    preference.addEventListener("change", updatePlayback)
    document.addEventListener("visibilitychange", updatePlayback)

    return () => {
      observer.disconnect()
      preference.removeEventListener("change", updatePlayback)
      document.removeEventListener("visibilitychange", updatePlayback)
    }
  }, [])

  useEffect(() => {
    if (!isRunning || words.length < 2) return

    const delays = {
      initial: initialHoldMs,
      holding: holdMs,
      deleting: deletingMs,
      empty: emptyMs,
      typing: typingMs,
    }
    
    const timer = window.setTimeout(
      () => {
        setFrame((current) => {
          if (current.phase === "initial" || current.phase === "holding") {
            return { ...current, phase: "deleting" }
          }
          if (current.phase === "deleting") {
            const length = Math.max(0, current.length - 1)
            return { ...current, length, phase: length ? "deleting" : "empty" }
          }
          const wordIndex =
            current.phase === "empty"
              ? (current.wordIndex + 1) % words.length
              : current.wordIndex % words.length
          const length = current.phase === "empty" ? 1 : current.length + 1
          return {
            wordIndex,
            length,
            phase: length >= words[wordIndex].length ? "holding" : "typing",
          }
        })
      },
      Math.max(16, delays[frame.phase]),
    )

    return () => window.clearTimeout(timer)
  }, [
    frame,
    isRunning,
    words,
    typingMs,
    deletingMs,
    holdMs,
    emptyMs,
    initialHoldMs,
  ])

  const word = words[frame.wordIndex % words.length] ?? ""
  const text = isReducedMotion ? (words[0] ?? "") : word.slice(0, frame.length)

  return (
    <h1
      ref={headingRef}
      id="hero-title"
      className="relative grid w-full text-[clamp(56px,4.85vw,92px)] leading-[1.12] font-normal tracking-[-0.065em]"
    >
      <span className="sr-only">Дизайн {words.join(", ")}</span>

      {/* Все фразы резервируют место: при печати не сдвигаются описание и арка. */}
      {words.map((phrase, index) => (
        <span
          key={`${phrase}-${index}`}
          aria-hidden="true"
          className="invisible pointer-events-none select-none [grid-area:1/1]"
        >
          <span className="font-bold">Дизайн </span> {phrase.slice(0, -1)}
          <span className="whitespace-nowrap">
            {phrase.slice(-1)}
            <span className="hero-caret" />
          </span>
        </span>
      ))}

      <span aria-hidden="true" className="[grid-area:1/1]">
        <DesignLabel /> {text.slice(0, -1)}
        <span className="whitespace-nowrap">
          {text.slice(-1)}
          <span className="hero-caret" />
        </span>
      </span>
    </h1>
  )
}

export default HeroHeading

"use client"

import { useEffect, useRef, useState } from "react"

import { heroTypewriter } from "@/content/site"

const { typingMs, deletingMs, holdMs, emptyMs, initialHoldMs } = heroTypewriter

const DesignLabel = ({ text }: { text: string }) => (
  <span className="group relative mr-[0.27em] bg-accent pr-[0.12em] font-bold text-black lg:mr-6">
    {text}
    <span className="absolute -top-[0.12em] -left-[0.12em] size-[0.25em] border-t border-l border-accent transition-transform group-hover:scale-[115%]" />
    <span className="absolute -bottom-[0.12em] -left-[0.12em] size-[0.25em] border-b border-l border-accent transition-transform group-hover:scale-[115%]" />
    <span className="absolute -top-[0.12em] -right-[0.12em] size-[0.25em] border-t border-r border-accent transition-transform group-hover:scale-[115%]" />
    <span className="absolute -right-[0.12em] -bottom-[0.12em] size-[0.25em] border-r border-b border-accent transition-transform group-hover:scale-[115%]" />
  </span>
)

const TypedText = ({ text, compact }: { text: string; compact: boolean }) => (
  <span className={compact ? "max-lg:text-[0.84em]" : undefined}>
    {text.slice(0, -1)}
    <span className="whitespace-nowrap">
      {text.slice(-1)}
      <span className="hero-caret" />
    </span>
  </span>
)

const HeroHeading = ({
  design,
  words,
}: {
  design: string
  words: string[]
}) => {
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

  const word = words[isReducedMotion ? 0 : frame.wordIndex % words.length] ?? ""
  const text = isReducedMotion ? word : word.slice(0, frame.length)

  return (
    <h1
      ref={headingRef}
      id="hero-title"
      className="relative grid w-full text-[clamp(32px,8.4vw,49px)] leading-[1.14] font-normal tracking-[-0.065em] wrap-anywhere sm:text-[clamp(39px,5.55vw,56px)] lg:text-[clamp(52px,4.85vw,92px)] lg:leading-[1.12]"
    >
      <span className="sr-only">
        {design} {words.join(", ")}
      </span>

      {/* Все фразы резервируют место: при печати не сдвигаются описание и арка. */}
      {words.map((phrase, index) => (
        <span
          key={`${phrase}-${index}`}
          aria-hidden="true"
          className="invisible pointer-events-none select-none [grid-area:1/1]"
        >
          <DesignLabel text={design} />{" "}
          <TypedText text={phrase} compact={phrase.length >= 28} />
        </span>
      ))}

      <span aria-hidden="true" className="[grid-area:1/1]">
        <DesignLabel text={design} />{" "}
        <TypedText text={text} compact={word.length >= 28} />
      </span>
    </h1>
  )
}

export default HeroHeading

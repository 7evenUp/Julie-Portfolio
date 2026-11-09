"use client"

import { useFormStatus } from "react-dom"

import type { MouseEvent } from "react"

const LanguageSwitch = ({
  isEnglish,
  label,
}: {
  isEnglish: boolean
  label: string
}) => {
  const { pending } = useFormStatus()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (pending) event.preventDefault()
  }

  return (
    <button
      type="submit"
      role="switch"
      aria-checked={isEnglish}
      aria-label={label}
      aria-disabled={pending}
      onClick={handleClick}
      className="group grid h-11 w-[60px] place-items-center rounded-full hover:bg-white/9 aria-disabled:opacity-65 min-[360px]:w-[76px] sm:h-12 sm:w-[108px]"
    >
      <span
        aria-hidden="true"
        className="relative grid size-full grid-cols-2 items-center rounded-full bg-black/25 p-[3px] text-xs font-semibold"
      >
        <span className="absolute inset-y-[3px] left-[3px] w-[calc(50%-3px)] rounded-full bg-accent transition-transform duration-200 group-aria-checked:translate-x-full motion-reduce:transition-none" />
        <span className="relative text-page group-aria-checked:text-ink">
          RU
        </span>
        <span className="relative text-ink group-aria-checked:text-page">
          EN
        </span>
      </span>
    </button>
  )
}

export default LanguageSwitch

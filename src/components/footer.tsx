import Link from "next/link"

import { ArrowUpRight, Asterisk, Globe } from "./icons"

import { site, siteCopy } from "@/content/site"

import { getLanguage } from "@/lib/language"

export const Footer = async () => {
  const language = await getLanguage()
  const copy = siteCopy[language]

  return (
    <footer className="w-full bg-line font-mono text-[11px] leading-[1.65] font-normal tracking-[0.035em] text-[#a6b296]">
      <div className="mx-auto grid w-[calc(100%-var(--gutter)*2)] max-w-[1632px] grid-cols-[1fr_auto] items-center gap-x-3 py-3 sm:flex sm:min-h-[95px] sm:justify-between">
        <Link
          href="/#main"
          className="flex min-h-11 w-fit items-center gap-2 font-sans text-sm font-semibold tracking-[-0.3px] text-ink"
        >
          {site.brand}
          <Asterisk className="size-3 text-accent" />
        </Link>
        <span className="justify-self-end">© 2026 {copy.formalName}</span>
        <Link href="/#main" className="flex min-h-11 w-fit items-center gap-2">
          {copy.backToTop} <ArrowUpRight className="size-3" />
        </Link>
        <Globe className="h-7 w-12 justify-self-end" />
      </div>
    </footer>
  )
}

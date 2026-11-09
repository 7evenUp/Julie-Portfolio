import Link from "next/link"

import { Asterisk } from "@/components/icons"

import { siteCopy } from "@/content/site"

import { getLanguage } from "@/lib/language"

const NotFound = async () => {
  const copy = siteCopy[await getLanguage()].notFound

  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex min-h-svh flex-col items-center justify-center gap-5 px-(--gutter) py-8 sm:gap-[30px]"
    >
      <Asterisk className="size-12 text-accent sm:size-[70px]" />
      <span className="text-center font-mono text-[11px] leading-[1.65] tracking-[0.035em] text-muted">
        404 / {copy.label}
      </span>
      <h1 className="text-center text-[clamp(34px,8vw,70px)] leading-[1.15] font-normal tracking-[-0.06em]">
        {copy.title[0]}
        <br />
        {copy.title[1]}
      </h1>
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-6 rounded-[40px] border border-accent bg-accent px-[25px] py-[19px] text-xs font-semibold text-[#20251a] transition-[background,transform] duration-250 hover:-translate-y-[3px] hover:bg-[#e3ffac]"
      >
        {copy.home} ↗
      </Link>
    </main>
  )
}

export default NotFound

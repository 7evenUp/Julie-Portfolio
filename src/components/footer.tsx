import { ArrowUpRight, Asterisk, Globe } from "./icons"

import { site } from "@/content/site"

export const Footer = () => {
  return (
    <footer className="w-full font-mono text-[8px] leading-[1.65] font-normal tracking-[0.035em] text-[#7a866c] wide:text-[11px] bg-line">
      <div className="max-w-[1632px] flex items-center justify-between mx-auto w-[calc(100%-var(--gutter)*2)] h-[95px]">
        <a
          href="#"
          className="flex items-center gap-3 font-sans text-[13px] font-semibold tracking-[-0.3px] text-ink"
        >
          {site.brand}
          <Asterisk className="size-3 text-accent" />
        </a>
        <span>© 2026 Юлия</span>
        <a href="#main" className="flex items-center gap-3">
          Наверх <ArrowUpRight className="size-3" />
        </a>
        <Globe className="h-7 w-12 text-[#a6b296]" />
      </div>
    </footer>
  )
}

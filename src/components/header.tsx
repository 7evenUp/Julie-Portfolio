import Link from "next/link"

import { ArrowUpRight, Asterisk } from "./icons"

import { site } from "@/content/site"
import { projects } from "@/content/projects"

export const Header = () => {
  return (
    <header className="mx-auto flex h-[84px] w-[calc(100%-var(--gutter)*2)] max-w-[1632px] items-center justify-between border-b border-line">
      <Link
        href="/"
        className="group flex items-center gap-2.5 text-[24px] font-bold tracking-[-1.1px]"
        aria-label="Юлия — на главную"
      >
        <Asterisk className="size-[21px] text-accent transition-transform duration-500 group-hover:rotate-90" />
        {site.brand}
      </Link>

      <nav
        className="flex items-center gap-11 text-xs"
        aria-label="Основная навигация"
      >
        <Link
          href="/#work"
          className="flex items-center gap-2 transition-colors duration-200 hover:text-accent"
        >
          Работы
          <span className="self-start pt-0.5 font-mono text-[9px] leading-[normal] text-muted">
            {String(projects.length).padStart(2, "0")}
          </span>
        </Link>
        <Link
          href="/#contact"
          className="flex items-center gap-6 rounded-[30px] border border-[#54584f] px-5 py-[13px] transition-colors duration-200 hover:text-accent"
        >
          Обсудить проект <ArrowUpRight className="size-[15px]" />
        </Link>
      </nav>
    </header>
  )
}

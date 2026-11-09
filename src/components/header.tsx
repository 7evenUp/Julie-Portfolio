import Link from "next/link"

import { Asterisk, ChatBubble, Grid } from "./icons"

import { site } from "@/content/site"

const navigation = [
  { href: "/#work", label: "Проекты", Icon: Grid },
  { href: "/#contact", label: "Контакты", Icon: ChatBubble },
]

export const Header = () => {
  return (
    <header className="site-header pointer-events-none sticky top-0 left-0 z-10 flex h-(--site-header-height) w-[min(100%,100dvw)] items-end justify-center px-3 max-lg:pb-2">
      <div className="site-header-surface pointer-events-auto grid w-full max-w-[496px] grid-cols-[auto_minmax(0,1fr)] items-center gap-1.5 rounded-full border border-white/15 p-1.5 backdrop-blur-xl sm:gap-3 sm:p-2">
        <Link
          href="/"
          className="group flex h-11 items-center gap-1.5 rounded-full px-1.5 text-[13px] font-bold tracking-[-0.045em] sm:h-12 sm:gap-2.5 sm:px-4 sm:text-xl"
          aria-label="Юлия — на главную"
        >
          <Asterisk className="size-3.5 text-accent transition-transform duration-500 group-hover:rotate-45 sm:size-5" />
          {site.brand}
        </Link>

        <nav
          className="relative grid grid-cols-2 gap-1.5 before:absolute before:top-1/4 before:-left-1.5 before:h-1/2 before:w-px before:bg-white/15 sm:gap-2 sm:before:-left-2"
          aria-label="Основная навигация"
        >
          {navigation.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className="glass-button">
              <Icon className="size-3.5 sm:size-[18px]" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

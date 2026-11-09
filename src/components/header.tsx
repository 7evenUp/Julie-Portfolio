import Link from "next/link"

import { Asterisk, ChatBubble, Grid } from "./icons"
import LanguageSwitch from "./language-switch"

import { site, siteCopy } from "@/content/site"

import type { Language } from "@/lib/language"

import { setLanguage } from "@/lib/language"

export const Header = ({ language }: { language: Language }) => {
  const copy = siteCopy[language].header
  const navigation = [
    { href: "/#work", label: copy.projects, Icon: Grid },
    { href: "/#contact", label: copy.contact, Icon: ChatBubble },
  ]
  const isEnglish = language === "en"
  const changeLanguage = setLanguage.bind(null, isEnglish ? "ru" : "en")

  return (
    <header className="site-header pointer-events-none sticky top-0 left-0 z-10 flex h-(--site-header-height) w-[min(100%,100dvw)] items-end justify-center px-3 max-lg:pb-2">
      <div className="site-header-surface pointer-events-auto grid w-full max-w-[584px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1.5 rounded-full border border-white/15 p-1.5 backdrop-blur-xl sm:gap-3 sm:p-2">
        <Link
          href="/"
          className="group flex h-11 items-center gap-1.5 rounded-full px-1.5 text-[13px] font-bold tracking-[-0.045em] sm:h-12 sm:gap-2.5 sm:px-4 sm:text-xl"
          aria-label={copy.home}
        >
          <Asterisk className="size-3.5 text-accent transition-transform duration-500 group-hover:rotate-45 sm:size-5" />
          {site.brand}
        </Link>

        <nav
          className="relative grid grid-cols-2 gap-1.5 before:absolute before:top-1/4 before:-left-1.5 before:h-1/2 before:w-px before:bg-white/15 sm:gap-2 sm:before:-left-2"
          aria-label={copy.navigation}
        >
          {navigation.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="glass-button max-[370px]:text-[11px]"
            >
              <Icon className="size-3.5 max-[420px]:hidden sm:size-[18px]" />
              {label}
            </Link>
          ))}
        </nav>

        <form action={changeLanguage}>
          <LanguageSwitch isEnglish={isEnglish} label={copy.language} />
        </form>
      </div>
    </header>
  )
}

import Link from "next/link"

import { ArrowUpRight, Asterisk, SocialIcon } from "./icons"

import { site, siteCopy, socialLinks } from "@/content/site"

import { getLanguage } from "@/lib/language"

export const Footer = async () => {
  const language = await getLanguage()
  const copy = siteCopy[language]

  return (
    <footer className="w-full bg-line font-mono text-[11px] leading-[1.65] font-normal tracking-[0.035em] text-[#a6b296]">
      <div className="mx-auto grid w-[calc(100%-var(--gutter)*2)] max-w-[1632px] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 py-5 sm:gap-y-4 sm:py-6">
        <Link
          href="/#main"
          className="col-span-2 flex min-h-11 w-fit items-center gap-2 font-sans text-sm font-semibold tracking-[-0.3px] text-ink md:col-span-1"
        >
          {site.brand}
          <Asterisk className="size-3 text-accent" />
        </Link>
        <nav
          aria-label={copy.header.contact}
          className="col-span-2 text-ink md:col-span-1 md:justify-self-end"
        >
          <ul className="flex flex-wrap gap-2">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full bg-white/8 transition-colors hover:bg-accent hover:text-page motion-reduce:transition-none"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon name={label} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-wrap items-center gap-x-3">
          <span>© 2026 {copy.formalName}</span>
          <a
            href={site.developer}
            className="underline underline-offset-4 hover:text-accent"
            target="_blank"
          >
            {copy.developerCredit}
          </a>
        </div>
        <Link
          href="/#main"
          className="flex min-h-11 w-fit items-center gap-2 justify-self-end"
        >
          {copy.backToTop} <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </footer>
  )
}

import { AnimatedSticker } from "./animated-sticker"
import { Asterisk } from "./icons"
import { CatSticker } from "./cat-sticker"

import { site, siteCopy } from "@/content/site"

import type { Language } from "@/lib/language"

export const Contact = ({ language }: { language: Language }) => {
  const copy = siteCopy[language].contact
  const contacts = [
    {
      label: "Telegram",
      href: site.telegram,
      icon: "M22.05 2.87 1.42 10.83c-1.41.57-1.4 1.35-.26 1.7l5.3 1.65L18.73 6.44c.58-.35 1.11-.16.67.22l-9.94 8.97-.37 5.47c.54 0 .78-.25 1.08-.54l2.59-2.52 5.39 3.98c.99.55 1.7.27 1.95-.91l3.54-16.69c.36-1.45-.55-2.11-1.59-1.55Z",
    },
    {
      label: "Behance",
      href: site.behance,
      icon: "M0 4h7.5c3 0 4.7 1.5 4.7 4 0 1.5-.7 2.5-1.9 3.1 1.7.5 2.7 1.9 2.7 3.9 0 3-2.2 5-5.3 5H0V4Zm3.5 2.7V10H7c1.2 0 1.8-.6 1.8-1.7S8.1 6.7 7 6.7H3.5Zm0 5.8v4.8h3.7c1.5 0 2.3-.8 2.3-2.4 0-1.5-.8-2.4-2.3-2.4H3.5ZM15.5 5.5h7v1.8h-7zM24 15H16c.1 1.7 1.1 2.7 2.7 2.7 1.1 0 1.9-.5 2.2-1.2h2.9c-.7 2.4-2.5 3.7-5.1 3.7-3.5 0-5.8-2.4-5.8-6s2.4-6 5.8-6c3.6 0 5.5 2.8 5.3 6.8Zm-8-2h4.8c-.2-1.5-1-2.3-2.3-2.3s-2.3.8-2.5 2.3Z",
    },
  ]

  return (
    <section
      className="relative mx-auto w-[calc(100%-var(--gutter)*2)] max-w-[1632px] pt-10 pb-14 sm:pt-14 sm:pb-[67px] composition:pt-[65px]"
      aria-labelledby="contact"
    >
      <div
        className="relative flex items-center justify-between composition:mt-[45px]"
        data-reveal="contact"
      >
        <div className="relative composition:max-w-[calc(100%-370px)] wide:max-w-[calc(100%-400px)]">
          <h2
            id="contact"
            className="text-[clamp(36px,6vw,54px)] leading-[1.14] font-normal tracking-[-0.06em] text-pretty composition:text-[clamp(54px,5.2vw,85px)]"
          >
            {copy.title}
          </h2>
          <AnimatedSticker
            sticker="contact"
            className="absolute top-1/2 right-0 hidden w-20 translate-x-full -translate-y-1/2 rotate-12 composition:block"
          />
        </div>

        <div className="hidden composition:contents">
          <CatSticker cat="polite" placement="contact" />
          <Asterisk className="mr-[47px] size-[98px] -rotate-15 text-accent" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-start justify-between gap-x-6 gap-y-4 sm:mt-7 composition:mt-[50px]">
        <p
          className="text-[15px] leading-[1.7] text-[#a5ad9b]"
          data-reveal="contact"
          data-reveal-step="1"
        >
          {copy.invitation[0]}
          <br />
          {copy.invitation[1]}
        </p>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-4 composition:gap-x-11">
          {contacts.map((contact, index) =>
            contact.href ? (
              <a
                className="flex min-h-11 items-center gap-2.5 border-b border-[#8d987d] text-sm transition-colors duration-250 hover:text-accent"
                key={contact.label}
                data-reveal="contact"
                data-reveal-step={index + 1}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={contact.icon} />
                </svg>
                {contact.label}
              </a>
            ) : (
              <div
                className="min-w-[110px] border-b border-[#3b4333] pb-2.5 text-xs text-[#a3ad96]"
                key={contact.label}
                data-reveal="contact"
                data-reveal-step={index + 1}
              >
                <span>{contact.label}</span>
                <span className="mt-[9px] flex items-center gap-3.5 font-mono text-[8px] leading-[1.65] font-normal tracking-[0.035em] text-[#6e7961]">
                  {copy.comingSoon}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

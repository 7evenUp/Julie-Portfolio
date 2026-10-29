import { AnimatedSticker } from "./animated-sticker"
import { ArrowUpRight, Asterisk } from "./icons"
import { CatSticker } from "./cat-sticker"

import { site } from "@/content/site"

export const Contact = () => {
  const contacts = [
    { label: "Telegram", href: site.telegram },
    {
      label: "Электронная почта",
      href: site.email ? `mailto:${site.email}` : "",
    },
    { label: "Behance", href: site.behance },
  ]

  return (
    <section
      className="relative mx-auto w-[calc(100%-var(--gutter)*2)] max-w-[1632px] border-t border-line pt-[65px] pb-[67px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <AnimatedSticker
        sticker="contact"
        className="bottom-1 left-[38%] w-[60px] rotate-12"
      />

      <div className="relative mt-[45px] flex items-center justify-between">
        <h2
          id="contact-title"
          className="text-[clamp(54px,5.2vw,85px)] leading-[1.14] font-normal tracking-[-0.06em]"
        >
          Обсудить проект
        </h2>
        <CatSticker cat="polite" placement="contact" />
        <Asterisk className="mr-[47px] size-[98px] -rotate-15 text-accent" />
      </div>

      <div className="mt-[50px] flex items-start justify-between">
        <p className="text-[13px] leading-[1.9] text-[#a5ad9b] wide:text-[15px]">
          Напишите, что нужно сделать,
          <br />
          укажите сроки и бюджет.
        </p>
        <div className="flex items-start gap-11 pt-[5px]">
          {contacts.map((contact) =>
            contact.href ? (
              <a
                className="flex items-center gap-4 border-b border-[#8d987d] pb-2.5 text-[12px] transition-colors duration-250 hover:text-accent"
                key={contact.label}
                href={contact.href}
                target={
                  contact.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel="noopener noreferrer"
              >
                {contact.label}
                <ArrowUpRight className="size-[13px]" />
              </a>
            ) : (
              <div
                className="min-w-[110px] border-b border-[#3b4333] pb-2.5 text-[12px] text-[#a3ad96]"
                key={contact.label}
              >
                <span>{contact.label}</span>
                <span className="mt-[9px] flex items-center gap-3.5 font-mono text-[8px] leading-[1.65] font-normal tracking-[0.035em] text-[#6e7961]">
                  Скоро <ArrowUpRight className="size-[13px]" />
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

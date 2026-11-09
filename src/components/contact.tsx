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
      className="relative ml-[var(--contact-gutter)] w-[calc(min(100%,100dvw)-var(--contact-gutter)*2)] max-w-[1632px] pt-[65px] pb-[67px] [--contact-gutter:20px] sm:[--contact-gutter:40px] min-[1120px]:mx-auto min-[1120px]:w-[calc(100%-var(--gutter)*2)]"
      aria-labelledby="contact"
    >
      <div
        className="relative mt-[45px] flex items-center justify-between"
        data-reveal="contact"
      >
        <div className="relative">
          <h2
            id="contact"
            className="text-[clamp(36px,6vw,54px)] leading-[1.14] font-normal tracking-[-0.06em] min-[1120px]:text-[clamp(54px,5.2vw,85px)]"
          >
            Обсудить проект
          </h2>
          <AnimatedSticker
            sticker="contact"
            className="absolute top-1/2 right-0 hidden w-20 translate-x-full -translate-y-1/2 rotate-12 min-[1120px]:block"
          />
        </div>

        <div className="hidden min-[1120px]:contents">
          <CatSticker cat="polite" placement="contact" />
          <Asterisk className="mr-[47px] size-[98px] -rotate-15 text-accent" />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-start justify-between gap-6 min-[1120px]:mt-[50px]">
        <p
          className="text-[13px] leading-[1.9] text-[#a5ad9b] wide:text-[15px]"
          data-reveal="contact"
          data-reveal-step="1"
        >
          Напиши, что нужно сделать,
          <br />и мы это сделаем.
        </p>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-4 min-[1120px]:gap-x-11">
          {contacts.map((contact, index) =>
            contact.href ? (
              <a
                className="flex items-center gap-4 border-b border-[#8d987d] pb-2.5 text-xs transition-colors duration-250 hover:text-accent"
                key={contact.label}
                data-reveal="contact"
                data-reveal-step={index + 1}
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
                className="min-w-[110px] border-b border-[#3b4333] pb-2.5 text-xs text-[#a3ad96]"
                key={contact.label}
                data-reveal="contact"
                data-reveal-step={index + 1}
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

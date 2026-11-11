import Image from "next/image"

import { SocialIcon } from "./icons"

import { site, siteCopy } from "@/content/site"

import { getLanguage } from "@/lib/language"

export const Contact = async () => {
  const language = await getLanguage()
  const copy = siteCopy[language].contact
  const telegramUrl = new URL(site.telegram)
  telegramUrl.searchParams.set(
    "text",
    "Привет 👋\nНашёл контакт через твой сайт\nХотелось бы обсудить один проект\nАктуально?)",
  )

  return (
    <section
      className="relative mx-auto w-[calc(100%-var(--gutter)*2)] max-w-[1632px] py-10 sm:py-14 composition:py-20"
      aria-labelledby="contact"
    >
      <div
        className="grid items-center gap-8 bg-[#1b201a] p-[clamp(20px,5vw,80px)] md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]"
        data-reveal="contact"
      >
        <div>
          <h2
            id="contact"
            className="max-w-[12ch] text-[clamp(34px,5.2vw,84px)] leading-[1.02] font-normal tracking-[-0.055em] text-balance"
          >
            {copy.title}
          </h2>
          <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-ink/80 lg:mt-6 lg:text-lg">
            {copy.invitation}
          </p>
          <a
            className="mt-6 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-accent px-4 text-sm font-semibold text-page transition-colors hover:bg-ink active:bg-accent/80 motion-reduce:transition-none sm:px-5 lg:mt-8"
            href={telegramUrl.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon name="Telegram" className="size-4" />
            {copy.telegram}
          </a>
        </div>

        <Image
          src="/images/stickers/contact-airplane.webp"
          alt=""
          width={1120}
          height={747}
          sizes="(min-width: 1720px) 700px, (min-width: 768px) 42vw, (min-width: 480px) 448px, 86vw"
          className="mx-auto h-auto w-full max-w-md md:max-w-none"
        />
      </div>
    </section>
  )
}

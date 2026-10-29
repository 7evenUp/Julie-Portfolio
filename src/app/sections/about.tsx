import { AnimatedSticker } from "@/components/animated-sticker"
import { CatSticker } from "@/components/cat-sticker"
import { ArrowUpRight, Asterisk } from "@/components/icons"
import { SectionTopline } from "@/components/section-topline"

import { site } from "@/content/site"

const services = [
  {
    number: "01",
    title: "Сайты",
    text: "От первого впечатления до последнего клика.",
    tags: "Лендинги / Многостраничные сайты",
  },
  {
    number: "02",
    title: "Графика",
    text: "Визуальный характер, который замечают.",
    tags: "Баннеры / Афиши / Соцсети",
  },
  {
    number: "03",
    title: "Особенные моменты",
    text: "Бережный дизайн для ваших важных историй.",
    tags: "Приглашения / Свадебная полиграфия",
  },
]

const About = () => {
  return (
    <section
      className="relative mx-auto w-[calc(100%-var(--gutter)*2)] max-w-[1632px] pt-[126px] pb-[100px]"
      id="about"
      aria-labelledby="about-title"
    >
      <AnimatedSticker sticker="about" className="top-5 right-[24%] w-[88px] rotate-9" />
      <AnimatedSticker sticker="services" className="bottom-2 left-[40%] w-[84px] -rotate-9" />
      <SectionTopline title="[ 02 — Дизайнер за кадром ]">
        Чуть ближе
      </SectionTopline>

      <div className="mt-[55px] mb-[67px] grid grid-cols-[1fr_2fr]">
        <div className="relative flex flex-col items-start gap-5 pl-8">
          <Asterisk className="size-[100px] animate-star-turn text-accent [animation-duration:60s]" />
          <span className="font-mono text-[10px] leading-[1.65] font-normal tracking-[0.035em] text-muted wide:text-[11px]">
            Это я, Юлия.
          </span>
          <CatSticker cat="pop" placement="about" />
        </div>
        <div>
          <h2
            id="about-title"
            className="text-[clamp(32px,3.15vw,52px)] leading-[1.3] font-normal tracking-[-0.05em]"
          >
            Хороший дизайн начинается
            <br />с <span className="text-accent">любопытства.</span>
          </h2>
          <p className="mt-[26px] max-w-[605px] text-base leading-[1.9] tracking-[-0.2px] text-[#9ca393] wide:text-[19px]">
            {site.about}
          </p>
        </div>
      </div>

      <div>
        {services.map((service) => (
          <div
            className="grid grid-cols-[1fr_4fr_5fr_30px] items-center gap-[25px] border-t border-line py-7 last:border-b wide:py-[35px]"
            key={service.number}
          >
            <span className="font-mono text-[10px] leading-[1.65] font-normal tracking-[0.035em] text-[#8f9885] wide:text-[11px]">
              /{service.number}
            </span>
            <h3 className="text-[24px] font-normal tracking-[-0.8px] wide:text-[29px]">
              {service.title}
            </h3>
            <p className="text-[11px] leading-[1.8] text-[#b0b7a6] wide:text-[13px]">
              {service.text}
              <span className="mt-[5px] block font-mono text-[8px] leading-[1.65] font-normal tracking-[0.035em] text-[#7e8873]">
                {service.tags}
              </span>
            </p>
            <ArrowUpRight className="size-5 text-[#acb69f]" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default About

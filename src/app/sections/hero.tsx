import Image from "next/image"

import HeroHeading from "./hero-heading"

import { AmbientSculpture } from "@/components/ambient"
import { AnimatedSticker } from "@/components/animated-sticker"
import { ProjectArch } from "@/components/project-arch"

import { site, siteCopy } from "@/content/site"

import type { Language } from "@/lib/language"

const Hero = ({ language }: { language: Language }) => {
  const copy = siteCopy[language].hero

  return (
    <section
      className="relative mx-auto flex w-[calc(100%-var(--gutter)*2)] max-w-[1632px] flex-col lg:h-[calc(100svh-var(--site-header-height))] lg:min-h-[510px]"
      aria-labelledby="hero-title"
    >
      <div className="relative z-2 grid shrink-0 items-center gap-y-6 pt-[clamp(34px,5vw,42px)] pb-3 max-[360px]:gap-y-5 max-[360px]:pb-2 sm:grid-cols-[1fr_minmax(0,2fr)] sm:pb-4 lg:pt-9 composition:pt-[clamp(24px,3svh,42px)]">
        <div className="hero-portrait relative ml-2 w-[clamp(104px,calc(38vw-18px),172px)] max-sm:landscape:w-[clamp(96px,25vw,124px)] sm:ml-3 sm:w-[clamp(140px,22vw,195px)] lg:ml-[35px] lg:w-[clamp(180px,16vw,270px)] wide:ml-[42px]">
          <span className="absolute -top-5 -left-1 z-2 -rotate-10 font-handwriting text-[clamp(28px,4.4vw,36px)] leading-none font-medium whitespace-nowrap text-accent lg:-top-[26px] lg:-left-[18px] lg:text-[clamp(34px,3vw,48px)]">
            {copy.greeting}
          </span>
          <div className="relative aspect-[5/6] w-full -rotate-3 bg-[#242724] transition-transform duration-550 hover:rotate-0 sm:aspect-[4/5] lg:h-[clamp(224px,39svh,350px)] lg:aspect-auto">
            <Image
              className="h-full w-full object-cover object-[50%_34%] opacity-91 grayscale"
              src={site.portrait}
              alt={copy.portraitAlt}
              width={640}
              height={800}
              sizes="(min-width: 1024px) clamp(180px, 16vw, 270px), (min-width: 640px) clamp(140px, 22vw, 195px), (orientation: landscape) clamp(96px, 25vw, 124px), clamp(104px, 38vw - 18px, 172px)"
              preload
            />
            <span className="absolute -top-[7px] -left-[7px] size-[19px] border-t border-l border-accent" />
            <span className="absolute -right-[7px] -bottom-[7px] size-[19px] border-r border-b border-accent" />
          </div>
          <AnimatedSticker
            sticker="hello"
            className="top-[18%] -right-16 w-13 rotate-12 sm:top-auto sm:-right-5 sm:bottom-2 lg:-top-2 lg:-right-[72px] lg:bottom-auto lg:w-[62px] composition:-right-[85px] composition:w-[72px] wide:-right-[105px] wide:w-[88px]"
          />
        </div>

        <div className="hero-intro relative min-w-0 sm:pl-5 lg:pl-[29px] wide:pl-[45px]">
          <HeroHeading key={language} design={copy.design} words={copy.words} />
          <p className="mt-2 max-w-[490px] text-base leading-[1.6] tracking-[-0.025em] text-[#b8bcb3] max-[360px]:text-[15px] sm:mt-[18px] wide:max-w-[560px] wide:text-lg">
            {copy.introduction}
          </p>
        </div>
      </div>

      <AmbientSculpture className="max-sm:top-22 max-sm:right-1 max-sm:bottom-auto max-sm:size-16 max-sm:translate-y-0 sm:max-lg:hidden" />

      <ProjectArch label={copy.arch} linkLabel={copy.viewProjects} />
    </section>
  )
}

export default Hero

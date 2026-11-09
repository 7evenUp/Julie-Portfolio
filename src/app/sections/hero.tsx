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
      className="relative mx-auto flex h-[calc(100svh-var(--site-header-height))] min-h-[520px] w-[calc(100%-var(--gutter)*2)] max-w-[1632px] flex-col"
      aria-labelledby="hero-title"
    >
      <div className="relative z-2 grid shrink-0 grid-cols-[1fr_2fr] items-center pt-[clamp(24px,3svh,42px)] pb-4">
        <div className="hero-portrait relative ml-[35px] w-[clamp(180px,16vw,270px)] wide:ml-[42px]">
          <span className="absolute -top-[26px] -left-[18px] z-2 -rotate-10 font-handwriting text-[clamp(34px,3vw,48px)] leading-none font-medium whitespace-nowrap text-accent">
            {copy.greeting}
          </span>
          <div className="relative h-87.5 w-full -rotate-3 bg-[#242724] transition-transform duration-550 hover:rotate-0">
            <Image
              className="h-full w-full object-cover object-[50%_34%] opacity-91 grayscale"
              src={site.portrait}
              alt={copy.portraitAlt}
              width={640}
              height={800}
              sizes="320px"
              priority
            />
            <span className="absolute -top-[7px] -left-[7px] size-[19px] border-t border-l border-accent" />
            <span className="absolute -right-[7px] -bottom-[7px] size-[19px] border-r border-b border-accent" />
          </div>
          <AnimatedSticker
            sticker="hello"
            className="-top-2 -right-[85px] w-[72px] rotate-12 wide:-right-[105px] wide:w-[88px]"
          />
        </div>

        <div className="hero-intro relative pl-[29px] wide:pl-[45px]">
          <HeroHeading key={language} design={copy.design} words={copy.words} />
          <p className="mt-[18px] max-w-[490px] text-base leading-[1.65] tracking-[-0.025em] text-[#b8bcb3] wide:max-w-[560px] wide:text-lg">
            {copy.introduction}
          </p>
        </div>
      </div>

      <AmbientSculpture />

      <ProjectArch label={copy.arch} linkLabel={copy.viewProjects} />
    </section>
  )
}

export default Hero

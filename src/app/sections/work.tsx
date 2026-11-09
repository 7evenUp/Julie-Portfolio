import { AnimatedSticker } from "@/components/animated-sticker"
import { CatSticker } from "@/components/cat-sticker"
import { ProjectGrid } from "@/components/project-grid"

import { siteCopy } from "@/content/site"

import type { Language } from "@/lib/language"

const Work = ({ language }: { language: Language }) => {
  return (
    <section
      className="relative mx-auto w-[calc(100%-var(--gutter)*2)] max-w-[1632px] pt-14 pb-5 sm:pt-18 composition:pt-[94px] composition:pb-10"
      aria-labelledby="work"
    >
      <AnimatedSticker
        sticker="work"
        className="top-7 right-[28%] w-12 -rotate-12 sm:top-5 sm:w-16 composition:top-2 composition:right-[23%] composition:w-20"
      />

      <div className="relative flex items-end justify-between composition:mt-10">
        <CatSticker cat="surprised" placement="work" />
        <h2
          id="work"
          className="text-[clamp(38px,8vw,56px)] leading-[1.14] font-normal tracking-[-0.06em] composition:text-[clamp(54px,5.2vw,85px)]"
        >
          {siteCopy[language].header.projects}
        </h2>
      </div>

      <ProjectGrid language={language} />
    </section>
  )
}

export default Work

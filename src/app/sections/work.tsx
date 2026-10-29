import { AnimatedSticker } from "@/components/animated-sticker"
import { CatSticker } from "@/components/cat-sticker"
import { ProjectGrid } from "@/components/project-grid"

const Work = () => {
  return (
    <section
      className="relative mx-auto w-[calc(100%-var(--gutter)*2)] max-w-[1632px] scroll-mt-[25px] pt-[94px] pb-10"
      id="work"
      aria-labelledby="work-title"
    >
      <AnimatedSticker
        sticker="work"
        className="top-2 right-[20%] w-[76px] -rotate-12"
      />

      <div className="relative mt-[37px] flex items-end justify-between">
        <CatSticker cat="surprised" placement="work" />
        <h2
          id="work-title"
          className="text-[clamp(54px,5.2vw,85px)] leading-[1.14] font-normal tracking-[-0.06em]"
        >
          Проекты
        </h2>
      </div>

      <ProjectGrid />
    </section>
  )
}

export default Work

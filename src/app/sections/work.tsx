import { CatSticker } from "@/components/cat-sticker"
import { ArrowUpRight, Asterisk } from "@/components/icons"
import { ProjectGrid } from "@/components/project-grid"
import { SectionTopline } from "@/components/section-topline"

const Work = () => {
  return (
    <section
      className="mx-auto w-[calc(100%-var(--gutter)*2)] max-w-[1632px] scroll-mt-[25px] pt-[94px] pb-10"
      id="work"
      aria-labelledby="work-title"
    >
      <SectionTopline title="[ 01 — Избранные работы ]">
        Собраны с вниманием
      </SectionTopline>

      <div className="relative mt-[37px] flex items-end justify-between">
        <CatSticker cat="surprised" placement="work" />
        <h2
          id="work-title"
          className="text-[clamp(54px,5.2vw,85px)] leading-[1.14] font-normal tracking-[-0.06em]"
        >
          Разные задачи.
          <br />
          <span className="text-muted">Один почерк.</span>
        </h2>
        <p className="relative mb-1.5 pr-[30px] text-xs leading-[1.9] text-[#a2a79c] wide:text-sm">
          У каждого проекта свой характер.
          <br />
          Нажмите на работу, чтобы узнать её историю.
          <ArrowUpRight className="absolute top-0 -right-2 size-[23px] rotate-90 text-accent" />
        </p>
      </div>

      <ProjectGrid />

      <div className="flex items-center justify-between border-t border-line pt-[22px] font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-[#8c9383] wide:text-[11px]">
        <span>Авторские проекты и визуальные эксперименты.</span>
        <span className="flex items-center gap-5">
          У каждой работы — своя история
          <Asterisk className="size-[18px] text-accent" />
        </span>
      </div>
    </section>
  )
}

export default Work

import Image from "next/image"

import { AmbientSculpture } from "@/components/ambient"
import { AnimatedSticker } from "@/components/animated-sticker"
import { CatSticker } from "@/components/cat-sticker"
import { ProjectArch } from "@/components/project-arch"

import { site } from "@/content/site"

const Hero = () => {
  return (
    <section
      className="relative mx-auto flex h-[calc(100svh-84px)] w-[calc(100%-var(--gutter)*2)] max-w-[1632px] flex-col"
      aria-labelledby="hero-title"
    >
      <div className="relative z-2 grid shrink-0 grid-cols-[1fr_2fr] items-center pt-[clamp(24px,3svh,42px)] pb-4">
        <div className="relative ml-[35px] w-[clamp(180px,16vw,270px)] wide:ml-[42px]">
          <span className="absolute -top-[26px] -left-[18px] z-2 -rotate-10 font-handwriting text-[clamp(34px,3vw,48px)] leading-none font-medium whitespace-nowrap text-accent">
            Привет, я Юля!
          </span>
          <div className="relative h-87.5 w-full -rotate-3 bg-[#242724] transition-transform duration-550 hover:rotate-0">
            <Image
              className="h-full w-full object-cover object-[50%_34%] opacity-91 grayscale"
              src={site.portrait}
              alt="Юля, веб- и графический дизайнер"
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

        <div className="relative pl-[29px] wide:pl-[45px]">
          <h1
            id="hero-title"
            className="relative w-fit text-[clamp(56px,4.85vw,92px)] leading-[1.12] font-normal tracking-[-0.065em] whitespace-nowrap"
          >
            <span className="relative mr-2 group bg-accent text-black font-bold">
              Дизайн{" "}
              <span className="absolute -left-2 -top-2 size-4 border-t border-l border-accent group-hover:scale-[115%] transition-transform" />
              <span className="absolute -left-2 -bottom-2 size-4 border-b border-l border-accent group-hover:scale-[115%] transition-transform" />
              <span className="absolute -right-2 -top-2 size-4 border-t border-r border-accent group-hover:scale-[115%] transition-transform" />
              <span className="absolute -right-2 -bottom-2 size-4 border-b border-r border-accent group-hover:scale-[115%] transition-transform" />
            </span>{" "}
            сайтов
            <br />и графики
            <span className="absolute -top-[0.13em] -right-[0.48em] inline-block text-[0.62em] text-accent">
              *
            </span>
          </h1>
          <p className="mt-[18px] max-w-[490px] text-base leading-[1.65] tracking-[-0.025em] text-[#b8bcb3] wide:max-w-[560px] wide:text-lg">
            {site.introduction}
          </p>
          <AmbientSculpture className="absolute right-3 bottom-0 size-[76px] mr-0 wide:right-5 wide:size-[90px]" />
        </div>
      </div>

      <ProjectArch />
    </section>
  )
}

export default Hero

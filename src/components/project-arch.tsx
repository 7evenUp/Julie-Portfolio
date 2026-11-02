"use client"

import Image from "next/image"

import { ArrowDown } from "./icons"

import { arch } from "@/content/arch"

import type { CSSProperties } from "react"

// Две одинаковые половины обеспечивают непрерывный цикл поворота на 180°.
const wheelItems = [...arch.items, ...arch.items]

export const ProjectArch = () => {
  return (
    <section
      id="project-arch"
      className="relative left-1/2 isolate min-h-0 w-screen max-w-[1920px] flex-1 -translate-x-1/2 overflow-clip [container-type:size] [--arch-radius:min(clamp(320px,28.5vw,530px),80cqh)] [--card-size:min(clamp(132px,11.3vw,204px),32cqh)]"
      aria-label="Анимированная арка из восьми карточек проектов"
      style={{ "--arch-duration": `${arch.durationSeconds}s` } as CSSProperties}
    >
      <div className="absolute inset-0 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-2 after:h-12 after:bg-[linear-gradient(transparent,var(--color-page))]">
        <div
          className="absolute bottom-0 left-1/2 size-0 animate-arch-travel [transform:rotate(-90deg)] will-change-transform"
          aria-hidden="true"
        >
          {wheelItems.map((item, index) => (
            <div
              className="arch-card-position absolute top-0 left-0 size-(--card-size)"
              key={`${item.id}-${index}`}
              style={
                {
                  "--arch-angle": `${(index * 360) / wheelItems.length}deg`,
                } as CSSProperties
              }
            >
              <div className="relative size-full overflow-hidden rounded-[26px] bg-[#34382f] shadow-[0_12px_28px_#0002]">
                <Image
                  className="size-full object-cover"
                  src={item.image}
                  alt=""
                  width={400}
                  height={400}
                  sizes="(min-width: 1600px) 190px, 155px"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[clamp(24px,4svh,48px)] left-1/2 z-3 min-w-[340px] -translate-x-1/2 text-center">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-6 rounded-[40px] border border-accent bg-accent px-[25px] py-[19px] text-xs font-semibold text-[#20251a] transition-[background,transform] duration-250 hover:-translate-y-[3px] hover:bg-[#e3ffac]"
          >
            Посмотреть все проекты <ArrowDown className="size-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"

import { ArrowDown } from "./icons"

import { arch } from "@/content/arch"

import type { CSSProperties } from "react"

// Две одинаковые половины обеспечивают непрерывный цикл поворота на 180°.
const wheelItems = [...arch.items, ...arch.items]

export const ProjectArch = ({
  label,
  linkLabel,
}: {
  label: string
  linkLabel: string
}) => {
  return (
    <section
      id="project-arch"
      className="relative left-1/2 isolate h-[clamp(162px,47vw,290px)] w-dvw max-w-[1920px] -translate-x-1/2 overflow-clip @container-size [--arch-base-radius:min(46vw,calc((100cqh-36px)*0.89))] [--arch-radius:calc(var(--arch-base-radius)*0.86)] [--card-size:calc(var(--arch-base-radius)*0.44)] sm:h-[clamp(280px,43vw,380px)] sm:[--arch-base-radius:min(43vw,89cqh)] lg:h-auto lg:min-h-[236px] lg:flex-1 lg:[--arch-base-radius:min(clamp(380px,34vw,630px),89cqh)]"
      aria-label={label}
      style={{ "--arch-duration": `${arch.durationSeconds}s` } as CSSProperties}
    >
      <div className="absolute inset-0 overflow-clip max-sm:bottom-9 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-2 after:h-8 after:bg-[linear-gradient(transparent,var(--color-page))] sm:after:h-12">
        <div
          className="absolute bottom-0 left-1/2 size-0 animate-arch-travel transform-[rotate(-90deg)] will-change-transform"
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
              <div className="relative size-full overflow-hidden rounded-[clamp(14px,3.5vw,26px)] bg-[#34382f] shadow-[0_12px_28px_#0002]">
                <Image
                  className="size-full object-cover"
                  src={item.image}
                  alt=""
                  width={400}
                  height={400}
                  sizes="(max-width: 639px) 20vw, (max-width: 1023px) 18vw, (max-width: 1118px) 168px, (max-width: 1853px) 15vw, 278px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/#work"
        className="glass-button absolute bottom-1 left-1/2 z-3 -translate-x-1/2 border border-white/15 px-5 backdrop-blur-xl sm:bottom-[clamp(16px,4svh,48px)]"
      >
        <ArrowDown className="size-3.5 sm:size-[18px]" />
        {linkLabel}
      </Link>
    </section>
  )
}

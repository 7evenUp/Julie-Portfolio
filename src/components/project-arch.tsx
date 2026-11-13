import Image from "next/image"
import Link from "next/link"

import { ArrowDown } from "./icons"
import { ProjectArchWheel } from "./project-arch-wheel"

import { arch } from "@/content/arch"
import { getProject } from "@/content/projects"
import { siteCopy } from "@/content/site"
import { getLanguage } from "@/lib/language"

import type { CSSProperties } from "react"

export const ProjectArch = async ({
  label,
  linkLabel,
}: {
  label: string
  linkLabel: string
}) => {
  const language = await getLanguage()
  const items = arch.items.flatMap(({ id, image }) => {
    const project = getProject(id, language)
    return project ? [{ slug: project.slug, title: project.title, image }] : []
  })
  // Две одинаковые половины обеспечивают непрерывный цикл поворота на 180°.
  const wheelItems = [...items, ...items]

  return (
    <ProjectArchWheel
      label={label}
      durationSeconds={arch.durationSeconds}
      action={
        <Link
          href="/#work"
          className="glass-button absolute bottom-1 left-1/2 z-3 -translate-x-1/2 border border-white/15 px-5 backdrop-blur-xl sm:bottom-[clamp(16px,4svh,48px)]"
        >
          <ArrowDown className="size-3.5 sm:size-[18px]" />
          {linkLabel}
        </Link>
      }
    >
      {wheelItems.map((item, index) => (
        <div
          className="arch-card-position absolute top-0 left-0 size-(--card-size)"
          key={`${item.slug}-${index}`}
          inert={index === 0 || index >= items.length}
          style={
            {
              "--arch-angle": `${(index * 360) / wheelItems.length}deg`,
            } as CSSProperties
          }
        >
          <Link
            href={`/projects/${item.slug}`}
            scroll={false}
            className="arch-card-link block size-full focus-visible:outline-none"
            aria-label={`${item.title} — ${siteCopy[language].project.more}`}
          >
            <span className="arch-card-cover relative block size-full overflow-hidden rounded-[clamp(14px,3.5vw,26px)] bg-[#34382f] shadow-[0_12px_28px_#0002]">
              <Image
                className="size-full object-cover"
                src={item.image}
                alt=""
                width={400}
                height={400}
                sizes="(max-width: 639px) 20vw, (max-width: 1023px) 18vw, (max-width: 1118px) 168px, (max-width: 1853px) 15vw, 278px"
              />
            </span>
          </Link>
        </div>
      ))}
    </ProjectArchWheel>
  )
}

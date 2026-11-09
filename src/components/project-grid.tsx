import Image from "next/image"
import Link from "next/link"

import { ArrowUpRight } from "./icons"

import { categoryLabels, getProjects } from "@/content/projects"
import { siteCopy } from "@/content/site"

import type { Project } from "@/content/projects"
import type { Language } from "@/lib/language"

import { cn } from "@/lib/cn"

// Позиции закреплены за работами: размер и отступ не зависят от их типа.
const projectLayouts: Record<string, string> = {
  "tete-a-tete": "col-start-2 col-end-8 row-start-1",
  "midnight-session":
    "col-start-9 col-end-13 row-start-1 pt-[140px] wide:pt-[190px]",
  "wedding-stationery": "col-start-3 col-end-7 row-start-2 pt-[90px]",
  "poster-studies": "col-start-8 col-end-11 row-start-2 pt-40",
  "vibe-coding-banners": "col-start-1 col-end-6 row-start-3 pt-20",
  forma: "col-start-7 col-end-13 row-start-3 pt-40",
}

const ProjectCard = ({
  project,
  number,
  language,
}: {
  project: Project
  number: number
  language: Language
}) => {
  const category = categoryLabels[language][project.category]

  return (
    <article className={cn("relative min-w-0", projectLayouts[project.slug])}>
      <Link
        href={`/projects/${project.slug}`}
        scroll={false}
        className="group block"
        data-reveal="project"
        aria-label={`${project.title} — ${siteCopy[language].project.more}`}
      >
        <div
          className="relative isolate overflow-hidden"
          style={{ background: project.background }}
        >
          <Image
            className="w-full scale-[1.002] transition-[transform,filter] duration-[800ms,600ms] ease-[cubic-bezier(0.2,0.7,0.3,1),ease] group-hover:scale-[1.04] group-hover:brightness-[1.04]"
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            sizes={project.layout === "portrait" ? "28vw" : "60vw"}
          />
          <span className="absolute top-[13px] left-[15px] -translate-y-[5px] bg-[#11180fc9] px-[7px] py-1 font-mono text-[7px] leading-[1.65] font-normal tracking-[0.035em] text-[#f5f7eb] opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 wide:text-[11px]">
            {String(number).padStart(2, "0")} / {category}
          </span>
          <span className="absolute right-[17px] bottom-[17px] grid size-10 translate-y-[60px] place-items-center rounded-full bg-page opacity-0 transition-[background,transform] duration-300 group-hover:translate-y-0 group-hover:bg-accent group-hover:text-page group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:bg-accent group-focus-visible:text-page group-focus-visible:opacity-100">
            <ArrowUpRight className="size-[17px]" />
          </span>
        </div>

        <div className="mt-[15px] flex justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg leading-[1.4] font-medium tracking-[-0.25px] wide:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-[1.6] text-muted wide:text-base">
              {project.summary}
            </p>
          </div>
          <span className="max-w-[35%] shrink-0 text-right text-[13px] leading-[1.65] font-normal text-muted wide:text-sm">
            {category}
          </span>
        </div>
      </Link>

      <span
        className="absolute -right-[15px] -bottom-[60px] font-mono text-[18px] text-[#5d6555]"
        aria-hidden="true"
      >
        +
      </span>
    </article>
  )
}

export const ProjectGrid = ({ language }: { language: Language }) => {
  return (
    <div className="grid grid-cols-12 gap-x-6 pt-30 pb-[90px] wide:pb-[115px]">
      {getProjects(language).map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          number={index + 1}
          language={language}
        />
      ))}
    </div>
  )
}

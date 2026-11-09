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
  "tete-a-tete":
    "composition:col-start-2 composition:col-end-8 composition:row-start-1",
  "midnight-session":
    "composition:col-start-9 composition:col-end-13 composition:row-start-1 composition:pt-[140px] wide:pt-[190px]",
  "wedding-stationery":
    "composition:col-start-3 composition:col-end-7 composition:row-start-2 composition:pt-[90px]",
  "poster-studies":
    "composition:col-start-8 composition:col-end-11 composition:row-start-2 composition:pt-40",
  "vibe-coding-banners":
    "composition:col-start-1 composition:col-end-6 composition:row-start-3 composition:pt-20",
  forma:
    "composition:col-start-7 composition:col-end-13 composition:row-start-3 composition:pt-40",
}
const projectOrder = new Map(
  Object.keys(projectLayouts).map((slug, index) => [slug, index]),
)

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
    <article
      className={cn(
        "relative min-w-0 max-sm:even:ml-[9%] max-sm:[&:nth-child(2n+3)]:mr-[9%] sm:max-composition:even:mt-12",
        projectLayouts[project.slug],
      )}
    >
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
            sizes={
              project.layout === "portrait"
                ? "(max-width: 639px) 90vw, (max-width: 1119px) 45vw, 28vw"
                : "(max-width: 639px) 90vw, (max-width: 1119px) 45vw, 50vw"
            }
          />
          <span className="absolute top-[13px] left-[15px] -translate-y-[5px] bg-[#11180fc9] px-[7px] py-1 font-mono text-[7px] leading-[1.65] font-normal tracking-[0.035em] text-[#f5f7eb] opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 wide:text-[11px]">
            {String(number).padStart(2, "0")} / {category}
          </span>
          <span className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-page transition-[background,opacity,transform] duration-300 group-hover:bg-accent group-hover:text-page group-focus-visible:bg-accent group-focus-visible:text-page composition:right-[17px] composition:bottom-[17px] composition:size-10 composition:pointer-fine:translate-y-[60px] composition:pointer-fine:opacity-0 composition:pointer-fine:group-hover:translate-y-0 composition:pointer-fine:group-hover:opacity-100 composition:pointer-fine:group-focus-visible:translate-y-0 composition:pointer-fine:group-focus-visible:opacity-100">
            <ArrowUpRight className="size-[17px]" />
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-2 composition:mt-[15px] composition:flex-row composition:justify-between composition:gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg leading-[1.4] font-medium tracking-[-0.25px] wide:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-[15px] leading-[1.6] text-muted composition:mt-2 wide:text-base">
              {project.summary}
            </p>
          </div>
          <span className="text-[13px] leading-[1.65] font-normal text-muted composition:max-w-[35%] composition:shrink-0 composition:text-right wide:text-sm">
            {category}
          </span>
        </div>
      </Link>

      <span
        className="absolute -right-[15px] -bottom-[60px] hidden font-mono text-[18px] text-[#5d6555] composition:block"
        aria-hidden="true"
      >
        +
      </span>
    </article>
  )
}

export const ProjectGrid = ({ language }: { language: Language }) => {
  const projects = getProjects(language).sort(
    (a, b) =>
      (projectOrder.get(a.slug) ?? projectOrder.size) -
      (projectOrder.get(b.slug) ?? projectOrder.size),
  )

  return (
    <div className="grid grid-cols-1 gap-y-10 pt-8 pb-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:pt-12 sm:pb-16 composition:grid-cols-12 composition:gap-y-0 composition:pt-30 composition:pb-[90px] wide:pb-[115px]">
      {projects.map((project, index) => (
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

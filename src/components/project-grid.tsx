import Image from "next/image"
import Link from "next/link"

import { categoryLabels, getProjects } from "@/content/projects"
import { siteCopy } from "@/content/site"

import type { Project } from "@/content/projects"

import { cn } from "@/lib/cn"
import { getLanguage } from "@/lib/language"

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

const ProjectCard = async ({ project }: { project: Project }) => {
  const language = await getLanguage()
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
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        data-reveal="project"
        aria-label={`${project.title} — ${siteCopy[language].project.more}`}
      >
        <div
          className="overflow-hidden"
          style={{ background: project.background }}
        >
          <Image
            className={cn(
              "w-full motion-safe:transition-[scale] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
              "motion-safe:group-hover:scale-[1.065] motion-safe:group-focus-visible:scale-[1.065]",
            )}
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
        </div>

        <div className="mt-3 flex flex-col gap-2 composition:mt-[15px] composition:flex-row composition:justify-between composition:gap-4">
          <div className="min-w-0 flex-1">
            <h3
              className={cn(
                "relative w-fit text-lg leading-[1.4] font-medium tracking-[-0.25px] wide:text-xl",
                "group-hover:text-accent group-focus-visible:text-accent motion-safe:transition-colors",
                "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current",
                "group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-safe:after:transition-[scale] motion-safe:after:duration-300",
              )}
            >
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

export const ProjectGrid = async () => {
  const language = await getLanguage()
  const projects = getProjects(language).sort(
    (a, b) =>
      (projectOrder.get(a.slug) ?? projectOrder.size) -
      (projectOrder.get(b.slug) ?? projectOrder.size),
  )

  return (
    <div className="grid grid-cols-1 gap-y-10 pt-8 pb-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:pt-12 sm:pb-16 composition:grid-cols-12 composition:gap-y-0 composition:pt-30 composition:pb-[90px] wide:pb-[115px]">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

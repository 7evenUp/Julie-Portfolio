"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { ArrowUpRight } from "./icons"

import { categories, projects } from "@/content/projects"

import type { Category, Project } from "@/content/projects"

import { cn } from "@/lib/cn"

const projectLayouts: Record<Project["layout"], string> = {
  wide: "col-start-1 col-end-8 row-start-1",
  portrait: "col-start-10 col-end-13 row-start-1 pt-[140px] wide:pt-[190px]",
  medium: "col-start-2 col-end-7 row-start-2 pt-[90px]",
  offset: "col-start-8 col-end-13 row-start-2 pt-[210px] wide:pt-[240px]",
  last: "col-start-2 col-end-10 row-start-3 pt-[110px]",
}

const ProjectCard = ({
  project,
  index,
  isFiltered,
}: {
  project: Project
  index: number
  isFiltered: boolean
}) => {
  return (
    <article
      className={cn(
        "relative min-w-0 animate-card-enter",
        !isFiltered &&
          (index >= 5
            ? "col-span-6 row-auto pt-[95px]"
            : projectLayouts[project.layout])
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        scroll={false}
        className="group"
        aria-label={`${project.title} — подробнее о проекте`}
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
            {String(projects.indexOf(project) + 1).padStart(2, "0")} /{" "}
            {project.category}
          </span>
          <span className="absolute right-[17px] bottom-[17px] grid size-10 translate-y-[60px] place-items-center rounded-full bg-page opacity-0 transition-[background,transform] duration-300 group-hover:translate-y-0 group-hover:bg-accent group-hover:text-page group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:bg-accent group-focus-visible:text-page group-focus-visible:opacity-100">
            <ArrowUpRight className="size-[17px]" />
          </span>
        </div>

        <div className="mt-[15px] flex justify-between gap-2.5">
          <div>
            <h3 className="text-[14px] font-medium tracking-[-0.25px] wide:text-[17px]">
              {project.title}
              {project.isDemo && (
                <span className="ml-[9px] inline-block border border-line px-[5px] py-px align-middle font-mono text-[7px] leading-[1.65] font-normal tracking-[0.03em] text-muted wide:text-[11px]">
                  Демо
                </span>
              )}
            </h3>
            <p className="mt-[5px] text-[10px] leading-[1.6] text-muted wide:text-[12px]">
              {project.summary}
            </p>
          </div>
          <span className="flex items-start gap-[13px] font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-muted">
            {project.year}
            <ArrowUpRight className="mt-0.5 size-[13px] text-ink" />
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

export const ProjectGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Все работы")
  const isFiltered = selectedCategory !== "Все работы"
  const visibleProjects = projects.filter(
    (project) => !isFiltered || project.category === selectedCategory
  )

  const hasRealProjects = projects.some((project) => !project.isDemo)
  const hasDemoProjects = projects.some((project) => project.isDemo)
  const projectLabel =
    hasRealProjects && hasDemoProjects
      ? "Авторские проекты и демо-концепции"
      : hasDemoProjects
        ? "Демонстрационные концепции"
        : "Авторские проекты"

  return (
    <>
      <div className="mt-[42px] flex items-center justify-between gap-5 border-b border-line pb-6">
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Категории проектов"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-[30px] border border-transparent px-3.5 py-2.5 text-[10px] whitespace-nowrap text-[#aeb3a7] transition-[background,color,border-color] duration-250 hover:border-[#59604e] hover:text-accent wide:px-[18px] wide:py-[11px] wide:text-[12px]",
                selectedCategory === category && "bg-ink text-page hover:text-page"
              )}
              aria-pressed={selectedCategory === category}
            >
              {category}
              {category === "Все работы" && (
                <sup className="static ml-1.5 align-super font-mono text-[8px] leading-[normal]">
                  {String(projects.length).padStart(2, "0")}
                </sup>
              )}
            </button>
          ))}
        </div>
        <span className="flex items-center gap-[7px] font-mono text-[8px] leading-[1.65] font-normal tracking-[0.035em] whitespace-nowrap text-[#959b8c] wide:text-[9px]">
          <span className="size-1 rounded-full bg-accent" />
          {projectLabel}
        </span>
      </div>

      <p className="sr-only" role="status">
        Показано проектов: {visibleProjects.length}
      </p>

      <div
        className={cn(
          "grid grid-cols-12 gap-x-6 pt-[42px] pb-[90px] wide:pb-[115px]",
          isFiltered && "min-h-[550px] grid-cols-2 items-start gap-10"
        )}
      >
        {visibleProjects.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            isFiltered={isFiltered}
            key={project.slug}
          />
        ))}
      </div>
    </>
  )
}

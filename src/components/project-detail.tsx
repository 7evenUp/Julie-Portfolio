import Image from "next/image"
import Link from "next/link"

import { ArrowUpRight } from "./icons"

import { projects } from "@/content/projects"

import type { Project } from "@/content/projects"

import { cn } from "@/lib/cn"

type ProjectDetailProps = {
  project: Project
  inModal?: boolean
  className?: string
}

export const ProjectDetail = ({
  project,
  inModal = false,
  className,
}: ProjectDetailProps) => {
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]
  const Heading = inModal ? "h2" : "h1"

  return (
    <article className={cn("p-11", className)}>
      <div>
        <div className="flex justify-between font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-[#a9b09f] wide:text-[11px]">
          <span>
            {project.category} / {project.year}
          </span>
          {project.isDemo && <span className="text-accent">Демо-концепция</span>}
        </div>
        <Heading
          id="project-title"
          className="mt-[25px] text-[51px] leading-[1.2] font-normal tracking-[-2.5px]"
        >
          {project.title}
        </Heading>
        <p className="mt-[17px] text-base leading-[1.7] text-[#a2ad97]">
          {project.summary}
        </p>
      </div>

      <Image
        className="mt-[34px] w-full"
        src={project.cover.src}
        alt={project.cover.alt}
        width={project.cover.width}
        height={project.cover.height}
        sizes="(min-width: 1300px) 1100px, 90vw"
        priority
      />

      <div className="my-[50px] grid grid-cols-[2fr_1fr] gap-[70px]">
        <div>
          <span className="font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-[#7e8c70] wide:text-[11px]">
            О проекте
          </span>
          <p className="mt-[15px] text-[14px] leading-[1.95] text-[#bdc7b2]">
            {project.description}
          </p>
          {project.url && (
            <a
              className="mt-[25px] inline-flex items-center gap-6 border-b border-[#72796a] pb-[9px] text-[12px] transition-[color,border-color] duration-200 hover:border-accent hover:text-accent"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Посмотреть проект <ArrowUpRight className="size-[17px]" />
            </a>
          )}
        </div>
        <div>
          <span className="font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-[#7e8c70] wide:text-[11px]">
            Что сделано
          </span>
          <ul className="mt-[15px] list-none p-0">
            {project.services.map((service) => (
              <li
                className="text-[12px] leading-[2.2] text-[#bdc7b2]"
                key={service}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-[25px]">
        {project.gallery.map((image) => (
          <Image
            className="w-full"
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1300px) 1100px, 90vw"
          />
        ))}
      </div>

      <Link
        href={`/projects/${nextProject.slug}`}
        className="group mt-[45px] flex items-center justify-between border-t border-[#3a4531] pt-[30px]"
        replace={inModal}
        scroll={!inModal}
      >
        <div>
          <span className="font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-[#7e8c70]">
            Следующий проект
          </span>
          <p className="mt-2.5 text-[25px] tracking-[-0.8px]">{nextProject.title}</p>
        </div>
        <ArrowUpRight className="size-[35px] text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </article>
  )
}

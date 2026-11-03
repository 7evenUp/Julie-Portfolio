import Image from "next/image"
import Link from "next/link"

import { ArrowUpRight } from "./icons"
import { PosterCarousel } from "./poster-carousel"
import { ProjectLink } from "./project-link"

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
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length]
  const Heading = inModal ? "h2" : "h1"
  const hasCarousel = project.galleryLayout === "carousel"

  return (
    <article
      className={cn(hasCarousel ? "p-5 sm:p-8 lg:p-11" : "p-11", className)}
    >
      <div>
        <div className="flex justify-between font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-[#a9b09f] wide:text-[11px]">
          <span>
            {project.category} / {project.year}
          </span>
        </div>
        <Heading
          id="project-title"
          className={cn(
            "mt-[25px] leading-[1.2] font-normal",
            hasCarousel
              ? "text-[32px] tracking-[-0.05em] sm:text-[44px] lg:text-[51px]"
              : "text-[51px] tracking-[-2.5px]",
          )}
        >
          {project.title}
        </Heading>
        <p className="mt-[17px] text-base leading-[1.7] text-[#a2ad97]">
          {project.summary}
        </p>
        {project.url && (
          <ProjectLink href={project.url} className="mt-[17px]" />
        )}
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

      <div
        className={cn(
          "my-[50px] grid",
          hasCarousel
            ? "gap-8 sm:grid-cols-[2fr_1fr] sm:gap-10"
            : "grid-cols-[2fr_1fr] gap-[70px]",
        )}
      >
        <div>
          <span className="font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-[#7e8c70] wide:text-[11px]">
            О проекте
          </span>
          <p
            className={cn(
              "mt-[15px] leading-[1.95] text-[#bdc7b2]",
              hasCarousel ? "text-base" : "text-[14px]",
            )}
          >
            {project.description}
          </p>
        </div>
        <div>
          <span className="font-mono text-[9px] leading-[1.65] font-normal tracking-[0.035em] text-[#7e8c70] wide:text-[11px]">
            Что сделано
          </span>
          <ul className="mt-[15px] list-none p-0">
            {project.services.map((service) => (
              <li
                className={cn(
                  "leading-[2.2] text-[#bdc7b2]",
                  hasCarousel ? "text-base" : "text-xs",
                )}
                key={service}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {hasCarousel ? (
        <PosterCarousel
          key={project.slug}
          images={project.gallery}
          inModal={inModal}
          kind={project.category === "Баннеры" ? "banners" : "posters"}
        />
      ) : (
        <div className="grid gap-[25px]">
          {project.gallery.map((image) => (
            <figure key={image.src}>
              {image.title && (
                <figcaption className="mb-[15px] font-mono text-xs leading-[1.65] text-[#a2ad97]">
                  {image.title}
                </figcaption>
              )}
              <Image
                className="w-full"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1300px) 1100px, 90vw"
              />
            </figure>
          ))}
        </div>
      )}

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
          <p className="mt-2.5 text-[25px] tracking-[-0.8px]">
            {nextProject.title}
          </p>
        </div>
        <ArrowUpRight className="size-[35px] text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </article>
  )
}

import Image from "next/image"
import Link from "next/link"

import { ArrowUpRight } from "./icons"
import { PosterCarousel } from "./poster-carousel"
import { ProjectLink } from "./project-link"

import { categoryLabels, getNextProject } from "@/content/projects"
import { siteCopy } from "@/content/site"

import type { Project } from "@/content/projects"
import type { Language } from "@/lib/language"

import { cn } from "@/lib/cn"

type ProjectDetailProps = {
  project: Project
  language: Language
  inModal?: boolean
  className?: string
}

export const ProjectDetail = ({
  project,
  language,
  inModal = false,
  className,
}: ProjectDetailProps) => {
  const copy = siteCopy[language].project
  const nextProject = getNextProject(project.slug, language)
  const Heading = inModal ? "h2" : "h1"
  const hasCarousel = project.galleryLayout === "carousel"
  const imageSizes = inModal
    ? "(min-width: 1200px) 990px, (min-width: 640px) 80vw, 90vw"
    : "(min-width: 1100px) 1012px, 90vw"

  return (
    <article className={cn("p-(--project-gutter)", className)}>
      <div>
        <div className="font-mono text-[11px] leading-[1.65] tracking-[0.035em] text-[#a9b09f]">
          <span>{categoryLabels[language][project.category]}</span>
        </div>
        <Heading
          id="project-title"
          className="mt-3 text-[clamp(30px,6.2vw,51px)] leading-[1.14] font-normal tracking-[-0.05em] text-balance wrap-anywhere sm:mt-[25px]"
        >
          {project.title}
        </Heading>
        <p className="mt-[17px] text-base leading-[1.7] text-[#a2ad97]">
          {project.summary}
        </p>
        {!inModal && project.url && (
          <ProjectLink
            href={project.url}
            label={copy.view}
            className="mt-[17px]"
          />
        )}
      </div>

      <Image
        className="mt-6 w-full sm:mt-[34px]"
        src={project.cover.src}
        alt={project.cover.alt}
        width={project.cover.width}
        height={project.cover.height}
        sizes={imageSizes}
        preload
      />

      <div className="my-8 grid gap-6 sm:my-[50px] sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] sm:gap-8 lg:gap-16">
        <div>
          <span className="font-mono text-xs leading-[1.65] tracking-[0.035em] text-[#a9b09f]">
            {copy.about}
          </span>
          <p className="mt-2 max-w-[66ch] text-[15px] leading-[1.75] text-[#bdc7b2] sm:mt-3 sm:text-base">
            {project.description}
          </p>
        </div>
        <div>
          <span className="font-mono text-xs leading-[1.65] tracking-[0.035em] text-[#a9b09f]">
            {copy.services}
          </span>
          <ul className="mt-2 list-none p-0 sm:mt-3">
            {project.services.map((service) => (
              <li
                className="text-[15px] leading-[1.8] text-[#bdc7b2]"
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
          language={language}
          inModal={inModal}
          kind={project.category === "Баннеры" ? "banners" : "posters"}
        />
      ) : (
        <div
          className={cn(
            "grid",
            project.galleryLayout !== "continuous" && "gap-3 sm:gap-[25px]",
          )}
        >
          {project.gallery.map((image) => (
            <figure
              key={image.src}
              className={image.trimBottom ? "overflow-hidden" : undefined}
            >
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
                style={
                  image.trimBottom
                    ? {
                        marginBottom: `-${(image.trimBottom / image.width) * 100}%`,
                      }
                    : undefined
                }
                sizes={imageSizes}
              />
            </figure>
          ))}
        </div>
      )}

      <Link
        href={`/projects/${nextProject.slug}`}
        className="group mt-8 flex items-center justify-between gap-3 border-t border-[#3a4531] pt-5 sm:mt-[45px] sm:pt-[30px]"
        replace={inModal}
        scroll={!inModal}
      >
        <div className="min-w-0">
          <span className="font-mono text-xs leading-[1.65] tracking-[0.035em] text-[#a9b09f]">
            {copy.next}
          </span>
          <p className="mt-1.5 text-xl tracking-[-0.035em] wrap-anywhere sm:text-[25px]">
            {nextProject.title}
          </p>
        </div>
        <ArrowUpRight className="size-6 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-[35px]" />
      </Link>
    </article>
  )
}

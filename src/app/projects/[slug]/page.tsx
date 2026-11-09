import Link from "next/link"
import { notFound } from "next/navigation"

import { Header } from "@/components/header"
import { ProjectDetail } from "@/components/project-detail"

import { categoryLabels, getProject } from "@/content/projects"
import { siteCopy, siteUrl } from "@/content/site"

import { getLanguage } from "@/lib/language"

export { projectMetadata as generateMetadata } from "@/lib/project-metadata"

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const language = await getLanguage()
  const copy = siteCopy[language]
  const project = getProject((await params).slug, language)
  if (!project) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    genre: categoryLabels[language][project.category],
    inLanguage: language,
    creator: { "@type": "Person", name: copy.name },
    ...(siteUrl
      ? {
          url: `${siteUrl}/projects/${project.slug}`,
          image: `${siteUrl}${project.cover.src}`,
        }
      : {}),
  }

  return (
    <div className="relative isolate bg-page">
      <Header language={language} />

      <main
        id="main"
        tabIndex={-1}
        className="mx-auto mt-4 max-w-[1100px] pb-8 sm:mt-8 sm:pb-[60px] lg:mt-[45px]"
      >
        <Link
          href="/#work"
          className="ml-(--project-gutter) inline-flex min-h-11 items-center font-mono text-xs leading-[1.65] tracking-[0.035em] text-accent"
        >
          ← {copy.project.all}
        </Link>
        <ProjectDetail
          project={project}
          language={language}
          className="pt-3 sm:pt-5 lg:pt-[29px]"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </main>
    </div>
  )
}

export default ProjectPage

import Link from "next/link"
import { notFound } from "next/navigation"

import { Header } from "@/components/header"
import { ProjectDetail } from "@/components/project-detail"

import { projects, getProject } from "@/content/projects"
import { site, siteUrl } from "@/content/site"

export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }))
export { projectMetadata as generateMetadata } from "@/lib/project-metadata"

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const project = getProject((await params).slug)
  if (!project) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    genre: project.category,
    inLanguage: "ru-RU",
    creator: { "@type": "Person", name: site.name },
    ...(siteUrl
      ? {
          url: `${siteUrl}/projects/${project.slug}`,
          image: `${siteUrl}${project.cover.src}`,
        }
      : {}),
  }

  return (
    <div className="relative isolate min-w-[1120px] overflow-clip bg-page">
      <Header />

      <main id="main" className="mx-auto mt-[45px] max-w-[1100px] pb-[60px]">
        <Link
          href="/#work"
          className="ml-11 inline-block font-mono text-[11px] leading-[1.65] font-normal tracking-[0.035em] text-accent"
        >
          ← Все проекты
        </Link>
        <ProjectDetail project={project} className="pt-[35px]" />

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

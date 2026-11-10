import { notFound } from "next/navigation"

import { ProjectModal } from "@/components/project-modal"
import { ProjectDetail } from "@/components/project-detail"

import { getProject } from "@/content/projects"
import { siteCopy } from "@/content/site"

import { getLanguage } from "@/lib/language"

export { projectMetadata as generateMetadata } from "@/lib/project-metadata"

export default async function InterceptedProject({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const language = await getLanguage()
  const project = getProject((await params).slug, language)
  if (!project) notFound()
  return (
    <ProjectModal projectUrl={project.url} labels={siteCopy[language].project}>
      <ProjectDetail project={project} inModal />
    </ProjectModal>
  )
}

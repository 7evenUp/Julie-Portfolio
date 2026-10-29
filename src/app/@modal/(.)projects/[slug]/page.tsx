import { notFound } from "next/navigation"
import { getProject } from "@/content/projects"
import { ProjectModal } from "@/components/project-modal"
import { ProjectDetail } from "@/components/project-detail"

export { projectMetadata as generateMetadata } from "@/lib/project-metadata"

export default async function InterceptedProject({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  return (
    <ProjectModal projectUrl={project.url}>
      <ProjectDetail project={project} inModal />
    </ProjectModal>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"

import { ProjectLink } from "./project-link"

import type { MouseEvent, ReactNode, SyntheticEvent } from "react"

export const ProjectModal = ({
  children,
  projectUrl,
  labels,
}: {
  children: ReactNode
  projectUrl?: string
  labels: { close: string; closeLabel: string; view: string }
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const isProjectRoute = pathname.startsWith("/projects/")

  const handleClose = () => {
    dialogRef.current?.close()
    router.back()
  }

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault()
    handleClose()
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) handleClose()
  }

  useEffect(() => {
    if (!isProjectRoute) return

    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = "hidden"

    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [isProjectRoute])

  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0 })
  }, [pathname])

  if (!isProjectRoute) return null

  return (
    <dialog
      className="m-auto max-h-[90vh] w-[min(1080px,90vw)] max-w-none animate-modal-enter overflow-auto overscroll-contain border-0 bg-transparent p-0 text-ink outline-none [scrollbar-color:#59644c_#1c2118] backdrop:bg-[#080b08c9] backdrop:backdrop-blur-[12px]"
      ref={dialogRef}
      aria-labelledby="project-title"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <div className="border border-[#38422e] bg-[#181c16]">
        <div className="sticky top-0 z-3 flex h-16 items-center justify-between border-b border-[#323b2b] bg-[#181c16f5] px-[35px] backdrop-blur-[16px]">
          {projectUrl && <ProjectLink href={projectUrl} label={labels.view} />}
          <button
            className="ml-auto flex shrink-0 items-center gap-5 py-2.5 pl-5 hover:text-accent"
            type="button"
            onClick={handleClose}
            aria-label={labels.closeLabel}
          >
            <span className="font-mono text-[10px] leading-[1.65] font-normal tracking-[0.035em] wide:text-[11px]">
              {labels.close}
            </span>
            <span
              className="relative size-[18px] before:absolute before:top-2 before:left-0 before:h-px before:w-5 before:rotate-45 before:bg-current after:absolute after:top-2 after:left-0 after:h-px after:w-5 after:-rotate-45 after:bg-current"
              aria-hidden="true"
            />
          </button>
        </div>

        {children}
      </div>
    </dialog>
  )
}

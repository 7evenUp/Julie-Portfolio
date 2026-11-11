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
    if (!dialog) return

    dialog.autofocus = window.matchMedia("(pointer: coarse)").matches
    dialog.showModal()

    return () => {
      dialog.close()
    }
  }, [isProjectRoute])

  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0 })
  }, [pathname])

  if (!isProjectRoute) return null

  return (
    <dialog
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none animate-modal-enter overflow-auto overscroll-contain scroll-pt-16 border-0 bg-[#181c16] p-0 text-ink outline-none [scrollbar-color:#59644c_#1c2118] backdrop:bg-[#080b08c9] backdrop:backdrop-blur-[12px] sm:m-auto sm:h-auto sm:max-h-[90dvh] sm:w-[min(1080px,90%)] sm:scroll-pt-[72px]"
      ref={dialogRef}
      aria-labelledby="project-title"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <div className="sm:border sm:border-[#38422e]">
        <div className="sticky top-0 z-3 flex min-h-14 items-center justify-between gap-2 border-b border-[#323b2b] bg-[#181c16f5] px-(--project-gutter) py-1 backdrop-blur-[16px] sm:min-h-16">
          {projectUrl && <ProjectLink href={projectUrl} label={labels.view} />}
          <button
            className="ml-auto flex min-h-11 shrink-0 items-center gap-2 px-1 hover:text-accent sm:gap-5 sm:px-2"
            type="button"
            onClick={handleClose}
            aria-label={labels.closeLabel}
          >
            <span className="font-mono text-[11px] leading-[1.65] tracking-[0.035em]">
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

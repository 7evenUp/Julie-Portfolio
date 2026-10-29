"use client"

import Image from "next/image"
import { useId, useRef, useState } from "react"

import { ArrowDown } from "./icons"

import type { CSSProperties, KeyboardEvent, PointerEvent } from "react"
import type { Project } from "@/content/projects"

import { cn } from "@/lib/cn"

import styles from "./poster-carousel.module.css"

type DragSession = {
  pointerId: number
  startX: number
  startY: number
  step: number
  delta: number
  axis: "pending" | "horizontal" | "vertical"
}

export const PosterCarousel = ({
  images,
  inModal = false,
}: {
  images: Project["gallery"]
  inModal?: boolean
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef<DragSession | null>(null)
  const suppressClickRef = useRef(false)
  const stageId = useId()
  const headingId = useId()
  const Heading = inModal ? "h3" : "h2"
  const lastIndex = images.length - 1
  const position = Math.max(0, Math.min(lastIndex, activeIndex - dragOffset))
  const activeImage = images[activeIndex]

  const selectImage = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(lastIndex, index)))
    setDragOffset(0)
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0 || images.length < 2) return

    const stage = event.currentTarget
    const width = stage.clientWidth
    const largeWidth = Math.min(width * 0.7, stage.clientHeight * 0.7065)
    const smallWidth = Math.min(
      width * 0.11,
      112,
      (width - largeWidth - 32) / 2,
    )

    suppressClickRef.current = false
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      step: (largeWidth + smallWidth) / 2 + 16,
      delta: 0,
      axis: "pending",
    }
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId || drag.axis === "vertical")
      return

    const deltaX = event.clientX - drag.startX
    const deltaY = event.clientY - drag.startY

    if (drag.axis === "pending") {
      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 8) return
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        drag.axis = "vertical"
        return
      }

      drag.axis = "horizontal"
      event.currentTarget.setPointerCapture(event.pointerId)
      setIsDragging(true)
    }

    drag.delta = deltaX
    setDragOffset(deltaX / drag.step)
  }

  const finishDrag = (
    event: PointerEvent<HTMLDivElement>,
    cancelled = false,
  ) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    dragRef.current = null
    suppressClickRef.current = drag.axis === "horizontal"

    if (!cancelled && drag.axis === "horizontal") {
      const distance = Math.abs(drag.delta)
      const steps =
        distance >= Math.min(40, drag.step * 0.15)
          ? Math.max(1, Math.round(distance / drag.step))
          : 0
      selectImage(activeIndex - Math.sign(drag.delta) * steps)
    } else {
      setDragOffset(0)
    }

    setIsDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const destinations: Record<string, number> = {
      ArrowLeft: activeIndex - 1,
      ArrowRight: activeIndex + 1,
      Home: 0,
      End: lastIndex,
    }

    if (!(event.key in destinations)) return
    event.preventDefault()
    selectImage(destinations[event.key])
  }

  if (!activeImage) return null

  return (
    <section
      aria-labelledby={headingId}
      aria-roledescription="карусель"
      onKeyDown={handleKeyDown}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <Heading
          id={headingId}
          className="text-2xl font-medium tracking-[-0.04em] sm:text-[32px]"
        >
          Серия постеров
        </Heading>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Предыдущий постер"
            aria-controls={stageId}
            disabled={activeIndex === 0}
            className={styles.control}
            onClick={() => selectImage(activeIndex - 1)}
          >
            <ArrowDown className="size-5 rotate-90" />
          </button>
          <button
            type="button"
            aria-label="Следующий постер"
            aria-controls={stageId}
            disabled={activeIndex === lastIndex}
            className={styles.control}
            onClick={() => selectImage(activeIndex + 1)}
          >
            <ArrowDown className="size-5 -rotate-90" />
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <div
          id={stageId}
          className={cn(styles.stage, isDragging && styles.dragging)}
          tabIndex={0}
          role="group"
          aria-label="Постеры. Используйте стрелки влево и вправо для переключения"
          style={
            {
              "--start-weight": Math.max(0, 1 - position),
              "--end-weight": Math.max(
                0,
                position - Math.max(0, lastIndex - 1),
              ),
            } as CSSProperties
          }
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={(event) => finishDrag(event)}
          onPointerCancel={(event) => finishDrag(event, true)}
          onLostPointerCapture={(event) => {
            if (event.target === event.currentTarget) finishDrag(event, true)
          }}
          onClickCapture={(event) => {
            if (suppressClickRef.current) {
              event.preventDefault()
              event.stopPropagation()
            }
          }}
        >
          {images.map((image, index) => {
            const distance = index - position

            return (
              <button
                key={image.src}
                type="button"
                className={styles.slide}
                aria-label={image.title ?? image.alt}
                aria-pressed={activeIndex === index}
                tabIndex={-1}
                onClick={() => selectImage(index)}
                style={
                  {
                    "--distance": distance,
                    "--emphasis": Math.max(0, 1 - Math.abs(distance)),
                  } as CSSProperties
                }
              >
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 640px) 70vw, 450px"
                  draggable={false}
                />
              </button>
            )
          })}
        </div>
      </div>

      <div
        className="mt-5 flex items-baseline justify-between gap-5 text-base"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="min-w-0">{activeImage.title ?? activeImage.alt}</p>
        <span className="shrink-0 text-muted tabular-nums">
          <span className="sr-only">Постер </span>
          {activeIndex + 1} из {images.length}
        </span>
      </div>
    </section>
  )
}

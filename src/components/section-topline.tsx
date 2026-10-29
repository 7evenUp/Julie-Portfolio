import type { ReactNode } from "react"

export const SectionTopline = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className="flex justify-between font-mono text-[10px] leading-[1.65] font-normal tracking-[0.035em] text-muted wide:text-[11px]">
      <span className="text-ink">{title}</span>
      <span>{children}</span>
    </div>
  )
}

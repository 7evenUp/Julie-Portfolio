import type { SVGProps } from "react"

import { cn } from "@/lib/cn"

export const ArrowUpRight = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("block shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  )
}

export const ArrowDown = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("block shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3v17m-7-7 7 7 7-7" />
    </svg>
  )
}

export const Grid = ({
  className,
}: Pick<SVGProps<SVGSVGElement>, "className">) => (
  <svg
    className={cn("block shrink-0", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" />
    <rect x="3" y="14" width="7" height="7" rx="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
  </svg>
)

export const ChatBubble = ({
  className,
}: Pick<SVGProps<SVGSVGElement>, "className">) => (
  <svg
    className={cn("block shrink-0", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3.5c5.1 0 9 3.3 9 8s-3.9 8-9 8c-1.1 0-2.2-.2-3.2-.5L4 21l1.2-4.4A7.3 7.3 0 0 1 3 11.5c0-4.7 3.9-8 9-8Z" />
  </svg>
)

export const Asterisk = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("block shrink-0", className)}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="m43 0 14 0 1 32 24-23 10 10-24 24 32 0v14l-32 1 23 24-10 10-24-24v32H43l-1-32-24 23L8 81l24-24H0V43l32-1L9 18 19 8l24 24z" />
    </svg>
  )
}

export const Globe = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("block shrink-0", className)}
      viewBox="0 0 72 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="36" cy="20" rx="34" ry="17" />
      <ellipse cx="36" cy="20" rx="22" ry="17" />
      <ellipse cx="36" cy="20" rx="9" ry="17" />
      <path d="M2 20h68M36 3v34" />
    </svg>
  )
}

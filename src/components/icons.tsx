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

const socialIconPaths = {
  Telegram:
    "M22.05 2.87 1.42 10.83c-1.41.57-1.4 1.35-.26 1.7l5.3 1.65L18.73 6.44c.58-.35 1.11-.16.67.22l-9.94 8.97-.37 5.47c.54 0 .78-.25 1.08-.54l2.59-2.52 5.39 3.98c.99.55 1.7.27 1.95-.91l3.54-16.69c.36-1.45-.55-2.11-1.59-1.55Z",
  Behance:
    "M0 4h7.5c3 0 4.7 1.5 4.7 4 0 1.5-.7 2.5-1.9 3.1 1.7.5 2.7 1.9 2.7 3.9 0 3-2.2 5-5.3 5H0V4Zm3.5 2.7V10H7c1.2 0 1.8-.6 1.8-1.7S8.1 6.7 7 6.7H3.5Zm0 5.8v4.8h3.7c1.5 0 2.3-.8 2.3-2.4 0-1.5-.8-2.4-2.3-2.4H3.5ZM15.5 5.5h7v1.8h-7zM24 15H16c.1 1.7 1.1 2.7 2.7 2.7 1.1 0 1.9-.5 2.2-1.2h2.9c-.7 2.4-2.5 3.7-5.1 3.7-3.5 0-5.8-2.4-5.8-6s2.4-6 5.8-6c3.6 0 5.5 2.8 5.3 6.8Zm-8-2h4.8c-.2-1.5-1-2.3-2.3-2.3s-2.3.8-2.5 2.3Z",
  VK: "M13.1 18.4c-7 0-11-4.8-11.2-12.8h3.5c.1 5.9 2.7 8.4 4.8 8.9V5.6h3.3v5.1c2-.2 4.1-2.5 4.8-5.1h3.3c-.5 3.1-2.8 5.4-4.4 6.4 1.6.8 4.2 2.8 5.2 6.4h-3.7c-.8-2.5-2.8-4.5-5.2-4.7v4.7h-.4Z",
  Instagram:
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
}

type SocialIconProps = Pick<SVGProps<SVGSVGElement>, "className"> & {
  name: keyof typeof socialIconPaths
}

export const SocialIcon = ({ name, className }: SocialIconProps) => (
  <svg
    aria-hidden="true"
    className={cn("block shrink-0", className)}
    viewBox="0 0 24 24"
    fill="currentColor"
    fillRule="evenodd"
  >
    <path d={socialIconPaths[name]} />
  </svg>
)

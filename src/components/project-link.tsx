import { cn } from "@/lib/cn"

export const ProjectLink = ({
  href,
  label,
  className,
}: {
  href: string
  label: string
  className?: string
}) => {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-full bg-[#2b3424] py-1 pl-2 pr-3 text-xs text-accent no-underline transition-colors duration-200 hover:bg-[#35422a] active:bg-[#3d4b30] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span
        className="relative block size-8 shrink-0 perspective-[160px]"
        aria-hidden="true"
      >
        <span className="absolute inset-1 animate-orbit transform-3d [transform:rotateX(-22deg)_rotateZ(-22deg)] motion-reduce:animate-none">
          {Array.from({ length: 9 }, (_, index) => (
            <span
              className="absolute inset-0 rounded-full border border-accent opacity-64 backface-visible"
              key={index}
              style={{ transform: `rotateY(${index * 20}deg)` }}
            />
          ))}
        </span>
      </span>
      <span>{label}</span>
    </a>
  )
}

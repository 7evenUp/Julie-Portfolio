import { cn } from "@/lib/cn"

export const AmbientSculpture = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "sculpture-scene absolute right-3 bottom-1/2 translate-y-1/2 size-20 perspective-[500px] transition-transform duration-400 ease-out",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-[7px] animate-orbit transform-3d [transform:rotateX(-22deg)_rotateZ(-22deg)]">
        {Array.from({ length: 9 }, (_, index) => (
          <span
            className="absolute inset-0 rounded-full border border-accent opacity-64 backface-visible"
            key={index}
            style={{ transform: `rotateY(${index * 20}deg)` }}
          />
        ))}
      </div>
      <svg
        className="absolute inset-0 m-auto size-8 origin-center animate-star-turn text-accent"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 0v32M0 16h32M5 5l22 22M27 5 5 27" />
      </svg>
    </div>
  )
}

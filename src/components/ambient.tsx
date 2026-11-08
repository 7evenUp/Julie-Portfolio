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
      <span className="absolute inset-0 grid animate-star-turn place-items-center text-[44px] text-accent">
        ✳
      </span>
    </div>
  )
}

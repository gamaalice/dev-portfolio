import type { Skill } from "@/types/portfolio"

export function SkillBadge({ name, icon }: Skill) {
  const fallback = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex min-h-12 w-full min-w-0 items-center gap-3 rounded-xl border border-white/40 bg-white/45 px-3 py-2 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-xl text-primary">
        {icon || <span className="text-xs font-bold tracking-tight">{fallback}</span>}
      </span>

      <span className="min-w-0 break-words text-sm sm:text-base font-medium leading-snug text-card-foreground">
        {name}
      </span>
    </div>
  )
}

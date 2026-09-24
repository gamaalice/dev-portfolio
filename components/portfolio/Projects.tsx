import { projectLinks } from "@/data/projects"

import { GLASS_CARD } from "@/types/portfolio"

import type { Translation } from "@/types/portfolio"

type ProjectsProps = {
  t: Translation["projects"]
  isVisible: boolean
}

export function Projects({ t, isVisible }: ProjectsProps) {
  return (
    <section
      id="projects"
      className={`py-32 px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-black">
          {t.title} {t.titleHighlight}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {t.items.map((project, index) => {
            const links = projectLinks[index]

            return (
              <div
                key={index}
                className={`
                  group
                  overflow-hidden
                  rounded-[28px]
                  cursor-pointer
                  transition-all
                  duration-500
                  hover:shadow-2xl
                  hover:shadow-primary/30
                  ${GLASS_CARD}
                `}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted/60">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: project.imageSize || "100%" }}
                    className="
                      h-auto
                      object-contain
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      gap-5
                      bg-black/60
                      backdrop-blur-sm
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  >
                    {links?.site && (
                      <a
                        href={links.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-7
                          py-3
                          rounded-full
                          bg-primary
                          text-white
                          font-semibold
                          text-sm
                          shadow-xl
                          hover:scale-105
                          transition-transform
                        "
                      >
                        Ver Site
                      </a>
                    )}

                    {links?.github && (
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-7
                          py-3
                          rounded-full
                          bg-white/10
                          border
                          border-white/80
                          text-white
                          font-semibold
                          text-sm
                          backdrop-blur-md
                          shadow-xl
                          hover:bg-white
                          hover:text-black
                          hover:scale-105
                          transition-all
                        "
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <h3
                    className="
                      text-2xl
                      font-bold
                      mb-3
                      text-card-foreground
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-muted-foreground
                      mb-6
                      leading-relaxed
                      text-base
                    "
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-white/45
                          border
                          border-white/40
                          text-primary
                          text-sm
                          font-medium
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
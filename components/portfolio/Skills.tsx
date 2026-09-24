import { techStack } from "@/data/tech-stack"
import { SkillBadge } from "@/components/portfolio/SkillBadge"
import { GLASS_CARD } from "@/types/portfolio"
import type { Translation } from "@/types/portfolio"

type SkillsProps = {
  t: Translation["skills"]
  isVisible: boolean
}

export function Skills({ t, isVisible }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`py-32 px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-black">
            {t.title} {t.titleHighlight}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, skills]) => (
            <div key={category} className={`p-6 sm:p-8 rounded-2xl ${GLASS_CARD}`}>
              <h3 className="text-xl font-bold mb-6 text-primary">
                {t.categories[category as keyof typeof t.categories]}
              </h3>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(135px,1fr))] gap-3">
                {skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

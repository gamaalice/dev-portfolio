import { GraduationCap } from "lucide-react"

import { GLASS_CARD } from "@/types/portfolio"
import type { Translation } from "@/types/portfolio"

type EducationProps = {
  t: Translation["education"]
  isVisible: boolean
}

export function Education({ t, isVisible }: EducationProps) {
  return (
    <section
      id="education"
      className={`py-32 px-6 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-black">
          {t.sectionTitle}
        </h2>

        <div className="space-y-8">
          {t.items.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" />
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

              <div className="pl-8">
                <div className={`p-8 rounded-2xl transition-shadow duration-300 hover:shadow-2xl ${GLASS_CARD}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-card-foreground">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.university}</p>
                      <p className="text-lg text-muted-foreground">{item.period}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

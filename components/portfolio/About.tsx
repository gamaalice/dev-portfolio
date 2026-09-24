import { FaGlobeAmericas, FaTasks, FaCode } from "react-icons/fa"

import { GLASS_CARD } from "@/types/portfolio"
import type { Language, Translation } from "@/types/portfolio"

type AboutProps = {
  t: Translation["about"]
  language: Language
  isVisible: boolean
}

export function About({ t, language, isVisible }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-32 px-6 relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-black">
          {t.title} {t.titleHighlight}
        </h2>

        <div className="space-y-12">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-accent/10 to-primary/10" />

            <div className={`relative rounded-3xl p-6 sm:p-10 ${GLASS_CARD}`}>
              <div className="grid md:grid-cols-2 gap-6 text-lg leading-relaxed">
                <p className="text-foreground/90">{t.p1}</p>
                <p className="text-foreground/90">{t.p2}</p>
                <p className="text-foreground/90">{t.p3}</p>
                <p className="text-foreground/90">{t.p4}</p>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg text-primary mt-8 bg-primary/5 rounded-r-lg">
                {t.quote}
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15 ${GLASS_CARD}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FaGlobeAmericas className="text-2xl text-primary" />
                </div>

                <h3 className="text-xl font-bold text-primary">
                  {language === "pt" ? "Intercâmbio" : "Exchange Program"}
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "pt"
                  ? "Em 2025, vivenciei uma imersão internacional nos Estados Unidos, Canadá e México, que aprimorou minha adaptabilidade, comunicação e capacidade de atuar em ambientes multiculturais. Possuo proficiência intermediária em Inglês e Espanhol."
                  : "In 2025, I experienced an international immersion in the United States, Canada, and Mexico, which enhanced my adaptability, communication, and ability to work in multicultural environments. I hold intermediate proficiency in English and Spanish."}
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/15 ${GLASS_CARD}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaTasks className="text-2xl text-secondary" />
                </div>

                <h3 className="text-xl font-bold text-secondary">
                  {language === "pt" ? "Gestão de Projeto" : "Project Management"}
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "pt"
                  ? "Aplico metodologias ágeis no ciclo de desenvolvimento, com noções de Kanban e Scrum, estruturando projetos em sprints, decompondo escopo em incrementos funcionais e gerenciando backlog com priorização baseada em valor. Estou buscando aprofundar isso formalmente, com foco em planejamento de entregas, controle de riscos e critérios de aceitação bem definidos."
                  : "I apply agile methodologies throughout the development cycle, with a working knowledge of Kanban and Scrum, structuring projects into sprints, breaking scope into functional increments, and managing backlogs with value-based prioritization. I'm looking to deepen this formally, with a focus on delivery planning, risk control, and well-defined acceptance criteria."}
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/15 ${GLASS_CARD}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FaCode className="text-2xl text-accent" />
                </div>

                <h3 className="text-xl font-bold text-accent">{language === "pt" ? "Fullstack" : "Fullstack"}</h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "pt"
                  ? "Atuo nas camadas de frontend e backend das minhas próprias soluções, entregando projetos completos, da interface à lógica de negócio e persistência de dados. É essa visão de ponta a ponta que estou expandindo agora para automação e integração com IA."
                  : "I work across the frontend and backend layers of my own solutions, delivering complete projects from interface to business logic and data persistence. That end-to-end mindset is what I'm now expanding into automation and AI integration."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
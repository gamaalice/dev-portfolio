
import {
  FaGlobeAmericas,
  FaLayerGroup,
  FaProjectDiagram,
} from "react-icons/fa"

import { GLASS_CARD } from "@/types/portfolio"

import type { Language, Translation } from "@/types/portfolio"

type AboutProps = {
  t: Translation["about"]
  language: Language
  isVisible: boolean
}

export function About({ t, language, isVisible }: AboutProps) {
  const content =
    language === "pt"
      ? {
          subtitle:
            "Desenvolvimento Full-Stack, com foco em soluções bem estruturadas e integração de sistemas",

          p1:
            "Minha trajetória na tecnologia começou como freelancer, desenvolvendo sites, landing pages e portfólios. Com o tempo, passei a trabalhar em aplicações mais completas e sistemas de gestão, ampliando minha atuação para além do Front-end.",

          p2:
            "Hoje, atuo como desenvolvedora Front-end Júnior na EASE Engenharia, participando de diferentes etapas do desenvolvimento de um site institucional, do levantamento de requisitos à implementação e integração de funcionalidades. Também desenvolvo projetos próprios para explorar tecnologias e aprofundar meus conhecimentos em desenvolvimento de software.",

          focus: {
            title: "Foco profissional",
            text:
              "Gosto de entender o problema antes de pensar na implementação. Busco construir aplicações bem estruturadas, com código organizado, componentes reutilizáveis e integrações que façam sentido para quem utiliza o sistema. Tenho aprofundado meus conhecimentos em arquitetura de software, backend, Python, inteligência artificial e automação.",
          },

          international: {
            title: "Experiência internacional",
            text:
              "Estados Unidos · Canadá · México · Inglês intermediário · Espanhol intermediário",
          },

          quote:
            "Uma boa solução começa com a compreensão do problema, não com a primeira linha de código.",

          expertise: {
            frontend: {
              title: "Desenvolvimento Front-end",
              items: [
                "Interfaces responsivas e componentes reutilizáveis",
                "Desenvolvimento com React, TypeScript e Next.js",
                "Atenção à usabilidade, consistência visual e organização do código",
              ],
            },

            software: {
              title: "Engenharia de Software",
              items: [
                "Desenvolvimento de aplicações integrando frontend, backend e banco de dados",
                "Construção e integração de APIs REST",
                "Organização de código e estruturação de aplicações",
              ],
            },

            planning: {
              title: "Planejamento e Resolução de Problemas",
              items: [
                "Levantamento de requisitos e definição de escopo",
                "Organização de tarefas e acompanhamento de entregas",
                "Conhecimentos em metodologias ágeis, como Scrum e Kanban",
              ],
            },
          },
        }
      : {
          subtitle:
            "Full-Stack development, focused on well-structured solutions and system integration",

          p1:
            "My journey in technology began as a freelancer, building websites, landing pages, and portfolios. Over time, I moved on to more complete applications and management systems, expanding my work beyond front-end development.",

          p2:
            "Today, I work as a Junior Front-end Developer at EASE Engenharia, contributing to different stages of an institutional website project, from requirements gathering to implementation and feature integration. I also build personal projects to explore technologies and deepen my software development skills.",

          focus: {
            title: "Professional focus",
            text:
              "I like to understand the problem before thinking about implementation. I aim to build well-structured applications with organized code, reusable components, and integrations that make sense for the people who use them. I am deepening my knowledge of software architecture, backend development, Python, artificial intelligence, and automation.",
          },

          international: {
            title: "International experience",
            text:
              "United States · Canada · Mexico · Intermediate English · Intermediate Spanish",
          },

          quote:
            "A good solution starts with understanding the problem, not with the first line of code.",

          expertise: {
            frontend: {
              title: "Front-end Development",
              items: [
                "Responsive interfaces and reusable components",
                "Development with React, TypeScript, and Next.js",
                "Focus on usability, visual consistency, and code organization",
              ],
            },

            software: {
              title: "Software Engineering",
              items: [
                "Building applications that integrate frontend, backend, and databases",
                "Building and integrating REST APIs",
                "Code organization and application structure",
              ],
            },

            planning: {
              title: "Planning and Problem-Solving",
              items: [
                "Requirements gathering and scope definition",
                "Task organization and delivery tracking",
                "Knowledge of agile methodologies, including Scrum and Kanban",
              ],
            },
          },
        }

  return (
    <section
      id="about"
      className={`py-32 px-6 relative transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[0.9] text-black">
            {t.title}{" "}
            <span className="text-primary">{t.titleHighlight}</span>
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-medium text-muted-foreground max-w-3xl">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {/* Main About Card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-accent/10 to-primary/10" />

            <div
              className={`relative rounded-3xl p-6 sm:p-10 ${GLASS_CARD}`}
            >
              <div className="grid md:grid-cols-2 gap-6 text-lg leading-relaxed">
                <p className="text-foreground/90">{content.p1}</p>

                <p className="text-foreground/90">{content.p2}</p>

                {/* Professional Focus */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FaLayerGroup className="text-lg text-primary" />
                    </div>

                    <h3 className="text-lg font-bold text-primary">
                      {content.focus.title}
                    </h3>
                  </div>

                  <p className="text-foreground/90">
                    {content.focus.text}
                  </p>
                </div>

                {/* International Experience */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaGlobeAmericas className="text-primary" />

                    <span className="text-base font-semibold text-foreground">
                      {content.international.title}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {content.international.text
                      .split("·")
                      .map((item, index) => (
                        <span
                          key={index}
                          className="text-lg leading-relaxed text-foreground/90"
                        >
                          {item.trim()}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg text-primary mt-8 bg-primary/5 rounded-r-lg">
                {content.quote}
              </blockquote>
            </div>
          </div>

          {/* Expertise */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Front-end */}
            <div
              className={`h-full p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15 ${GLASS_CARD}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FaLayerGroup className="text-2xl text-primary" />
                </div>

                <h3 className="text-xl font-bold text-primary">
                  {content.expertise.frontend.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {content.expertise.frontend.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Engineering */}
            <div
              className={`h-full p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/15 ${GLASS_CARD}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaProjectDiagram className="text-2xl text-secondary" />
                </div>

                <h3 className="text-xl font-bold text-secondary">
                  {content.expertise.software.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {content.expertise.software.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Planning */}
            <div
              className={`h-full p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/15 ${GLASS_CARD}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FaProjectDiagram className="text-2xl text-accent" />
                </div>

                <h3 className="text-xl font-bold text-accent">
                  {content.expertise.planning.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {content.expertise.planning.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

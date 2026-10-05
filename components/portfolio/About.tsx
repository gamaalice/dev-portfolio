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
  const subtitle =
    language === "pt"
      ? "Base sólida em Front-end, expandindo para Full-Stack"
      : "Front-end foundation, expanding into Full-Stack"

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

          <p className="mt-3 text-lg sm:text-xl font-medium text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="space-y-12">

          {/* Main About Card */}
          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-accent/10 to-primary/10" />

            <div className={`relative rounded-3xl p-6 sm:p-10 ${GLASS_CARD}`}>

              <div className="grid md:grid-cols-2 gap-6 text-lg leading-relaxed">

                <p className="text-foreground/90">
                  {t.p1}
                </p>

                <p className="text-foreground/90">
                  {t.p2}
                </p>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FaLayerGroup className="text-lg text-primary" />
                    </div>

                    <h3 className="text-lg font-bold text-primary">
                      {t.focus.title}
                    </h3>
                  </div>

                  <p className="text-foreground/90">
                    {t.focus.text}
                  </p>
                </div>

              <div>
  <div className="flex items-center gap-2 mb-3">
    <FaGlobeAmericas className="text-primary" />
    <span className="text-base font-semibold text-foreground">
      {t.international.title}
    </span>
  </div>

 <div className="flex flex-wrap gap-2">
  {t.international.text
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

              <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg text-primary mt-8 bg-primary/5 rounded-r-lg">
                {language === "pt"
                  ? "Engenharia começa antes do código, no momento em que você entende o problema por completo."
                  : "Engineering starts before the code, the moment you fully understand the problem."}
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
                  {t.expertise.frontend.title}
                </h3>

              </div>

              <ul className="space-y-3">
                {t.expertise.frontend.items.map((item, index) => (
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
                  {t.expertise.software.title}
                </h3>

              </div>

              <ul className="space-y-3">
                {t.expertise.software.items.map((item, index) => (
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
                  {t.expertise.planning.title}
                </h3>

              </div>

              <ul className="space-y-3">
                {t.expertise.planning.items.map((item, index) => (
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
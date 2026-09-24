import { ArrowRight } from "lucide-react"

import type { Translation } from "@/types/portfolio"

type HeroProps = {
  t: Translation["hero"]
}

export function Hero({ t }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-lg font-medium mb-4 animate-fadeIn">
            {t.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.12] animate-fadeIn">
            <span className="block text-balance">{t.name}</span>
            <span className="block pb-3 bg-gradient-to-r from-[#f0d4ff] via-[#ffffff] to-[#fde8ff] bg-clip-text text-transparent animate-gradient text-balance drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
              {t.title}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-black max-w-2xl mx-auto leading-relaxed text-pretty animate-fadeIn">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fadeIn">
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
            >
              {t.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
            >
              {t.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

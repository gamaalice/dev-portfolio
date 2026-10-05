import { ArrowRight } from "lucide-react"
import { Ballet } from "next/font/google"

import type { Translation } from "@/types/portfolio"

const ballet = Ballet({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

type HeroProps = {
  t: Translation["hero"]
}

export function Hero({ t }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm sm:text-base font-medium mb-6 animate-fadeIn">
            {t.badge}
          </div>

          {/* Heading */}
          <h1 className="tracking-tight leading-[1.05] animate-fadeIn">
            <span className="block text-6xl sm:text-7xl md:text-8xl font-black text-balance">
              {t.name}
            </span>

            <span
              className={`${ballet.className} block mt-2 text-4xl sm:text-5xl md:text-6xl font-normal pb-3 bg-gradient-to-r from-[#f0d4ff] via-[#ffffff] to-[#fde8ff] bg-clip-text text-transparent animate-gradient text-balance drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]`}
              style={{
                WebkitTextStroke: "0.35px rgba(255,255,255,0.35)",
              }}
            >
              {t.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed text-pretty mt-8 animate-fadeIn">
            {t.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 animate-fadeIn">
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
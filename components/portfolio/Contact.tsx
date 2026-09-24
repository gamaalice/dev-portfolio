import { Github, Linkedin, Mail } from "lucide-react"

import type { Translation } from "@/types/portfolio"

type ContactProps = {
  t: Translation["contact"]
  isVisible: boolean
}

export function Contact({ t, isVisible }: ContactProps) {
  return (
    <section
      id="contact"
      className={`py-32 px-6 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black">
            {t.title} {t.titleHighlight}
          </h2>
        </div>

        <p className="text-xl text-muted-foreground mb-12">{t.description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:alicegamas.dev@gmail.com"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>

          <a
            href="https://github.com/gamaalice"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border-2 border-primary text-primary rounded-full font-medium flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            {t.github}
          </a>

          <a
            href="https://linkedin.com/in/alice-gama-75913022a"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border-2 border-primary text-primary rounded-full font-medium flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
            {t.linkedin}
          </a>
        </div>
      </div>
    </section>
  )
}

import { Languages } from "lucide-react"

import type { Language } from "@/types/portfolio"

type LanguageModalProps = {
  onSelectLanguage: (lang: Language) => void
}

export function LanguageModal({ onSelectLanguage }: LanguageModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-card rounded-3xl p-10 shadow-2xl max-w-md w-full mx-4 border-2 border-primary/30 animate-float">
        <h2 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Welcome | Bem-vindo
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-lg">
          Select your language | Selecione seu idioma
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => onSelectLanguage("en")}
            className="px-8 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Languages className="w-6 h-6" />
            English
          </button>

          <button
            onClick={() => onSelectLanguage("pt")}
            className="px-8 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Languages className="w-6 h-6" />
            Português
          </button>
        </div>
      </div>
    </div>
  )
}

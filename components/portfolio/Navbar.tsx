"use client"

import { useState } from "react"
import { Github, Linkedin, Menu, X, Languages } from "lucide-react"

import type { Language, Translation } from "@/types/portfolio"

type NavbarProps = {
  t: Translation
  language: Language
  scrollProgress: number
  onToggleLanguage: () => void
}

export function Navbar({ t, language, scrollProgress, onToggleLanguage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-card/80 border-b border-border">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AG
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-lg hover:text-primary transition-colors">
              {t.nav.home}
            </a>
            <a href="#about" className="text-lg hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#education" className="text-lg hover:text-primary transition-colors">
              {t.nav.education}
            </a>
            <a href="#projects" className="text-lg hover:text-primary transition-colors">
              {t.nav.projects}
            </a>
            <a href="#skills" className="text-lg hover:text-primary transition-colors">
              {t.nav.skills}
            </a>
            <a href="#contact" className="text-lg hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-md font-large cursor-pointer"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span>{language === "pt" ? "EN" : "PT"}</span>
            </button>

            <a
              href="https://github.com/gamaalice"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/alice-gama-75913022a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg hover:text-primary transition-colors"
            >
              {t.nav.home}
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg hover:text-primary transition-colors"
            >
              {t.nav.about}
            </a>

            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg hover:text-primary transition-colors"
            >
              {t.nav.education}
            </a>

            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg hover:text-primary transition-colors"
            >
              {t.nav.projects}
            </a>

            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg hover:text-primary transition-colors"
            >
              {t.nav.skills}
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </a>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onToggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary text-lg font-medium cursor-pointer"
              >
                <Languages className="w-4 h-4" />
                <span>{language === "pt" ? "EN" : "PT"}</span>
              </button>

              <a
                href="https://github.com/gamaalice"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/alice-gama-75913022a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

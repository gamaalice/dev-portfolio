"use client"

import { About } from "@/components/portfolio/About"
import { Contact } from "@/components/portfolio/Contact"
import { Education } from "@/components/portfolio/Education"
import { Footer } from "@/components/portfolio/Footer"
import { Hero } from "@/components/portfolio/Hero"
import { LanguageModal } from "@/components/portfolio/LanguageModal"
import { Navbar } from "@/components/portfolio/Navbar"
import { Projects } from "@/components/portfolio/Projects"
import { Skills } from "@/components/portfolio/Skills"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useLanguage } from "@/hooks/useLanguage"
import { useScrollProgress } from "@/hooks/useScrollProgress"

export function Portfolio() {
  const scrollProgress = useScrollProgress()
  const isVisible = useIntersectionObserver()
  const { language, t, showLanguageModal, toggleLanguage, selectLanguage } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {showLanguageModal && <LanguageModal onSelectLanguage={selectLanguage} />}

      <div
        className="fixed inset-0 pointer-events-none [contain:paint]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(73, 34, 91, 0.9) 0%, transparent 42%), radial-gradient(circle at 70% 60%, rgba(73, 34, 91, 0.82) 0%, transparent 36%), linear-gradient(to top, rgba(73, 34, 91, 0.95) 0%, transparent 58%), #E7DBEF",
        }}
      />

      <Navbar
        t={t}
        language={language}
        scrollProgress={scrollProgress}
        onToggleLanguage={toggleLanguage}
      />

      <Hero t={t.hero} />

      <About t={t.about} language={language} isVisible={!!isVisible.about} />

      <Education t={t.education} isVisible={!!isVisible.education} />

      <Projects t={t.projects} isVisible={!!isVisible.projects} />

      <Skills t={t.skills} isVisible={!!isVisible.skills} />

      <Contact t={t.contact} isVisible={!!isVisible.contact} />

      <Footer t={t.footer} />

      <div />
    </div>
  )
}

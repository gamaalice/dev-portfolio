"use client"

import { useEffect, useState } from "react"

import { translations } from "@/data/translations"
import type { Language } from "@/types/portfolio"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("pt")
  const [showLanguageModal, setShowLanguageModal] = useState(false)

  const t = translations[language]

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem("languageSelected")
    if (!hasSelectedLanguage) {
      setShowLanguageModal(true)
    } else {
      const savedLanguage = localStorage.getItem("preferredLanguage") as Language
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === "pt" ? "en" : "pt"
    setLanguage(newLang)
    localStorage.setItem("preferredLanguage", newLang)
  }

  const selectLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("languageSelected", "true")
    localStorage.setItem("preferredLanguage", lang)
    setShowLanguageModal(false)
  }

  return {
    language,
    t,
    showLanguageModal,
    toggleLanguage,
    selectLanguage,
  }
}

import type { ReactNode } from "react"

export type Language = "pt" | "en"

export type Translation = {
  nav: {
    home: string
    about: string
    education: string
    projects: string
    skills: string
    contact: string
  }

  hero: {
    badge: string
    name: string
    title: string
    description: string
    cta1: string
    cta2: string
  }

  about: {
    title: string
    titleHighlight: string
    p1: string
    p2: string
    p3: string
    p4: string
    quote: string
  }

  education: {
    sectionTitle: string
    items: {
      degree: string
      university: string
      period: string
      description: string
    }[]
  }

  projects: {
    title: string
    titleHighlight: string
    viewProject: string
    items: {
      title: string
      description: string
      tech: string[]
      image: string
      imageSize?: string
    }[]
  }

  skills: {
    title: string
    titleHighlight: string
    categories: {
      languages: string
      ai: string
      frameworks: string
      libraries: string
      tools: string
      databases: string
      other: string
    }
  }

  contact: {
    title: string
    titleHighlight: string
    description: string
    github: string
    linkedin: string
  }

  footer: {
    copyright: string
  }
}

export type Skill = {
  name: string
  icon?: ReactNode
}

export type ProjectLink = {
  site: string
  github: string
}

export const GLASS_CARD =
  "bg-white/70 border border-white/50 shadow-xl shadow-primary/10"
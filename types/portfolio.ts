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
    focus: {
      title: string
      text: string
    }
    expertise: {
      frontend: {
        title: string
        items: string[]
      }
      software: {
        title: string
        items: string[]
      }
      planning: {
        title: string
        items: string[]
      }
    }
    international: {
      title: string
      text: string
    }
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
  viewSite: string
  viewGithub: string
  carousel: {
    previous: string
    next: string
    goToImage: string
    previewUnavailable: string
  }
  items: {
      number: string
      title: string
      category: string
      year: string
      description: string
      tech: string[]
      highlights: string[]
      images: string[]
      site: string
      github: string
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
    email: string
    name: string
    message: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    send: string
    sending: string
    success: string
    error: string
  }

  footer: {
    copyright: string
  }
}

export type Skill = {
  name: string
  icon?: ReactNode
}

export const GLASS_CARD =
  "bg-white/70 border border-white/50 shadow-xl shadow-primary/10"
"use client"

import { useState, useEffect, type ReactNode } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Menu,
  X,
  Languages,
  GraduationCap,
} from "lucide-react"
import { FaGlobeAmericas, FaTasks, FaCode } from "react-icons/fa"

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si"

type Language = "pt" | "en"

type Translation = {
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
    p5: string
    p6: string
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
    }[]
  }
  skills: {
    title: string
    titleHighlight: string
    categories: {
      languages: string
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

const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      education: "Educação",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      badge: "Engenheira de Software",
      name: "Alice Gama",
      title: "Software Engineer",
      description: "Transformando complexidade em funcionalidade através de arquitetura sólida e inovação",
      cta1: "Ver Projetos",
      cta2: "Contato",
    },
    about: {
      title: "Sobre",
      titleHighlight: "Mim",
      p1: "Sou Engenheira de Software orientada pela busca constante por eficiência, para melhor na arquitetura, fluxos, decisões, processos e conexões de sistemas.",
      p2: "Meu foco se desenvolve na interseção entre desenvolvimento, automação e análise, construindo uma base sólida para atuar em ambientes que exigem precisão e clareza estrutural.",
      p3: "Venho me especializando cada vez mais em tecnologias como React, Next.js, JavaScript, TypeScript e Node, ao mesmo tempo em que aprofundo meu domínio em Python para automação, integração e tratamento de dados.",
      p4: "Essa combinação me permite transitar entre camadas, unindo engenharia de software, validação técnica e qualidade em um processo único com o objetivo de construir soluções robustas, bem estruturadas e sustentáveis.",
      p5: "Tenho interesse por gestão de projetos, automação de processos e aplicações tecnológicas ligadas ao desenvolvimento de soluções tecnológicas, áreas que ampliam minha capacidade de compreender sistemas de forma geral, antecipar riscos e estruturar soluções que equilibram desempenho, clareza e impacto.",
      p6: "Sigo evoluindo como profissional com a intenção de construir soluções robustas, bem estruturadas e sustentáveis, sempre guiada por uma visão de engenharia que privilegia lógica, precisão e propósito.",
      quote: "Para mim, engenharia é a arte de transformar complexidade em funcionalidade.",
    },
    education: {
      sectionTitle: "Educação",
      items: [
        {
          degree: "Bacharelado em Engenharia de Software",
          university: "Cruzeiro do Sul",
          period: "2024 - 2027",
          description: "",
        },
        {
          degree: "Curso Full Stack",
          university: "Udemy",
          period: "2025",
          description: "",
        },
          {
      degree: "Gestão de Projetos",
      university: "LabProject PMO",
      period: "2026",
      description: "",
    },
      ],
    },
    projects: {
      title: "Projetos em",
      titleHighlight: "Destaque",
      viewProject: "Ver Projeto",
      items: [
        {
          title: "Personal Budget Manager",
          description:
            "Um aplicativo simples e organizado de controle financeiro pessoal, desenvolvido com Tkinter puro, Pandas e Matplotlib. Os dados são armazenados em um arquivo CSV limpo que começa vazio, e todas as transações são adicionadas por meio da interface.",
          tech: ["Python", "Tkinter", "Pandas", "Matplotlib"],
          image: "/assets/budgetpersonal.png",
        },
        {
          title: "CryptoDashboard",
          description:
            "Ferramenta open-source para dashboards cripto em tempo real com integração de APIs e visualização de dados.",
          tech: ["Next.js", "TypeScript", "Tailwind"],
          image: "/assets/cryptodash.png",
        },
        {
          title: "Social Button",
          description: "Conjunto de botões sociais interativos com design responsivo e animações suaves.",
          tech: ["React", "CSS3", "JavaScript"],
          image: "/assets/button.png",
        },
        {
          title: "Modern Login Portal",
          description: "Portal de login moderno com autenticação e validação em tempo real, design elegante e seguro.",
          tech: ["Next.js", "React", "TypeScript"],
          image: "/assets/loginstyles2.png",
        },
      {
  title: "Lunara - Freelancer Management App",
  description:
    "Aplicação de gestão para freelancers com clientes, projetos, tarefas, finanças e prazos em um único ambiente. Desenvolvida com autenticação, banco de dados real, isolamento por usuário, PWA e versão desktop com Tauri.",
  tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Firestore", "Tauri"],
  image: "/assets/lunara.png",
},
        {
          title: "Tower Blocks Game",
          description: "Jogo de blocos em estilo torre com interface moderna e animações suaves.",
          tech: ["Javascript", "CSS", "HTML"],
          image: "/assets/tower2.png",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      titleHighlight: "Técnicas",
      categories: {
        languages: "Linguagens",
        frameworks: "Frameworks",
        libraries: "Bibliotecas",
        tools: "Ferramentas",
        databases: "Bancos de Dados",
        other: "Outros",
      },
    },
    contact: {
      title: "Vamos",
      titleHighlight: "Conversar",
      description: "Disponível para novos projetos e oportunidades. Entre em contato!",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      copyright: "© 2026 Alice Gama. Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Software Engineer",
      name: "Alice Gama",
      title: "Software Engineer",
      description: "Transforming complexity into functionality through solid architecture and innovation",
      cta1: "View Projects",
      cta2: "Contact",
    },
    about: {
      title: "About",
      titleHighlight: "Me",
      p1: "I am a Software Engineer driven by a constant pursuit of efficiency, aiming to improve architecture, workflows, decisions, processes, and system connections.",
      p2: "My focus develops at the intersection of development, automation, and analysis, building a solid foundation to work in environments that demand precision and structural clarity.",
      p3: "I have been increasingly specializing in technologies such as React, Next.js, JavaScript, TypeScript, and Node, while deepening my expertise in Python for automation, integration, and data processing.",
      p4: "This combination allows me to move across layers, bringing together software engineering, technical validation, and quality in a unified process with the goal of building robust, well-structured, and sustainable solutions.",
      p5: "I am interested in project management, process automation, and technological applications related to the development of solutions, areas that expand my ability to understand systems as a whole, anticipate risks, and design solutions that balance performance, clarity, and impact.",
      p6: "I continue to evolve as a professional with the intention of building robust, well-structured, and sustainable solutions, always guided by an engineering vision that values logic, precision, and purpose.",
      quote: "For me, engineering is the art of transforming complexity into functionality.",
    },
    education: {
      sectionTitle: "Education",
      items: [
        {
          degree: "Bachelor's in Software Engineering",
          university: "Cruzeiro do Sul",
          period: "2024 - 2027",
          description: "",
        },
        {
          degree: "Full Stack Development Course",
          university: "Udemy",
          period: "2025",
          description: "",
        },
                {
      degree: "Project Management",
      university: "LabProject PMO",
      period: "2026",
      description: "",
    },
      ],
    },
    projects: {
      title: "Featured",
      titleHighlight: "Projects",
      viewProject: "View Project",
      items: [
        {
          title: "Personal Budget Manager",
          description:
            "A simple and organized personal financial control application, developed with pure Tkinter, Pandas, and Matplotlib. Data is stored in a clean CSV file that starts empty, and all transactions are added through the interface.",
          tech: ["Python", "Tkinter", "Pandas", "Matplotlib"],
          image: "/assets/budgetpersonal.png",
        },
        {
          title: "CryptoDashboard",
          description: "Open-source tool for real-time crypto dashboards with API integration and data visualization.",
          tech: ["Next.js", "TypeScript", "Tailwind"],
          image: "/assets/cryptodash.png",
        },
        {
          title: "Social Button",
          description: "Set of interactive social buttons with responsive design and smooth animations.",
          tech: ["React", "CSS3", "JavaScript"],
          image: "/assets/button.png",
        },
        {
          title: "Modern Login Portal",
          description: "Modern login portal with authentication and real-time validation, elegant and secure design.",
          tech: ["Next.js", "React", "TypeScript"],
          image: "/assets/loginstyles2.png",
        },
       {
  title: "Lunara - Freelancer Management App",
  description:
    "A freelancer management app that centralizes clients, projects, tasks, finances, and deadlines in one workspace. Built with authentication, real database persistence, user-based data isolation, PWA support, and a desktop version with Tauri.",
  tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Firestore", "Tauri"],
  image: "/assets/lunara.png",
},
        {
          title: "Tower Blocks Game",
          description: "Tower-style block game with modern interface and smooth animations.",
          tech: ["Javascript", "CSS", "HTML"],
          image: "/assets/tower2.png",
        },
      ],
    },
    skills: {
      title: "Skills",
      titleHighlight: "Technical",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        libraries: "Libraries",
        tools: "Tools",
        databases: "Databases",
        other: "Others",
      },
    },
    contact: {
      title: "Let's",
      titleHighlight: "Talk",
      description: "Available for new projects and opportunities. Get in touch!",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      copyright: "© 2026 Alice Gama. All rights reserved.",
    },
  },
}

type Skill = {
  name: string
  icon?: ReactNode
}

function SkillBadge({ name, icon }: Skill) {
  const fallback = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex min-h-12 w-full min-w-0 items-center gap-3 rounded-xl border border-white/40 bg-white/45 px-3 py-2 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-xl text-primary">
        {icon || <span className="text-xs font-bold tracking-tight">{fallback}</span>}
      </span>

      <span className="min-w-0 break-words text-sm sm:text-base font-medium leading-snug text-card-foreground">
        {name}
      </span>
    </div>
  )
}

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>("pt")
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [showLanguageModal, setShowLanguageModal] = useState(false)

  const t = translations[language]

  const glassCard = "bg-white/70 border border-white/50 shadow-xl shadow-primary/10"

  useEffect(() => {
    let frameId: number | null = null

    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
      frameId = null
    }

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollProgress)
      }
    }

    updateScrollProgress()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

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

  const projectLinks = [
    "https://github.com/gamaalice/budgetpersonal",
    "https://cryptodashbord-wine.vercel.app/",
    "https://github.com/gamaalice/socialbutton",
    "https://github.com/gamaalice/modern-login",
    "https://github.com/gamaalice/Lunara-App",
    "https://github.com/gamaalice/towerblocks",
  ]

  const techStack = {
    languages: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "SQL", icon: "" },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> },
    ],
    frameworks: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
    libraries: [
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Matplotlib", icon: "" },
    ],
    tools: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: "" },
      { name: "Figma", icon: <SiFigma /> },
    ],
    databases: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {showLanguageModal && (
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
                onClick={() => selectLanguage("en")}
                className="px-8 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Languages className="w-6 h-6" />
                English
              </button>

              <button
                onClick={() => selectLanguage("pt")}
                className="px-8 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Languages className="w-6 h-6" />
                Português
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className="fixed inset-0 pointer-events-none [contain:paint]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(73, 34, 91, 0.9) 0%, transparent 42%), radial-gradient(circle at 70% 60%, rgba(73, 34, 91, 0.82) 0%, transparent 36%), linear-gradient(to top, rgba(73, 34, 91, 0.95) 0%, transparent 58%), #E7DBEF",
        }}
      />

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
                onClick={toggleLanguage}
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
                  onClick={toggleLanguage}
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

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-lg font-medium mb-4 animate-fadeIn">
              {t.hero.badge}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.12] animate-fadeIn">
              <span className="block text-balance">{t.hero.name}</span>
              <span className="block pb-3 bg-gradient-to-r from-[#f0d4ff] via-[#ffffff] to-[#fde8ff] bg-clip-text text-transparent animate-gradient text-balance drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
                {t.hero.title}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-black max-w-2xl mx-auto leading-relaxed text-pretty animate-fadeIn">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fadeIn">
              <a
                href="#projects"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
              >
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`py-32 px-6 relative transition-all duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-black">
            {t.about.title} {t.about.titleHighlight}
          </h2>

          <div className="space-y-12">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-accent/10 to-primary/10" />

              <div className={`relative rounded-3xl p-6 sm:p-10 ${glassCard}`}>
                <div className="grid md:grid-cols-2 gap-6 text-lg leading-relaxed">
                  <p className="text-foreground/90">{t.about.p1}</p>
                  <p className="text-foreground/90">{t.about.p2}</p>
                  <p className="text-foreground/90">{t.about.p3}</p>
                  <p className="text-foreground/90">{t.about.p4}</p>
                  <p className="text-foreground/90">{t.about.p5}</p>
                  <p className="text-foreground/90">{t.about.p6}</p>
                </div>

                <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg text-primary mt-8 bg-primary/5 rounded-r-lg">
                  {t.about.quote}
                </blockquote>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div
                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15 ${glassCard}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaGlobeAmericas className="text-2xl text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-primary">
                    {language === "pt" ? "Intercâmbio" : "Exchange Program"}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === "pt"
                    ? "Em 2025, vivenciei uma imersão internacional nos Estados Unidos, Canadá e México, que aprimorou minha adaptabilidade, comunicação e capacidade de atuar em ambientes multiculturais. Possuo proficiência intermediária em Inglês e Espanhol."
                    : "In 2025, I experienced an international immersion in the United States, Canada, and Mexico, which enhanced my adaptability, communication, and ability to work in multicultural environments. I hold intermediate proficiency in English and Spanish."}
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/15 ${glassCard}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <FaTasks className="text-2xl text-secondary" />
                  </div>

                  <h3 className="text-xl font-bold text-secondary">
                    {language === "pt" ? "Gestão de Projeto" : "Project Management"}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === "pt"
                    ? "Aplico metodologias ágeis no ciclo de desenvolvimento, estruturando projetos em sprints, decompondo escopo em incrementos funcionais e gerenciando backlog com priorização baseada em valor. Planejo entregas com controle de riscos, rastreabilidade e critérios de aceitação bem definidos, garantindo previsibilidade e qualidade em cada fase do desenvolvimento."
                    : "I apply agile methodologies throughout the development cycle,  structuring projects into sprints, decomposing scope into functional increments, and managing backlogs with value-based prioritization. I plan deliveries with risk control, traceability, and well-defined acceptance criteria, ensuring predictability and quality at every phase of development."}
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/15 ${glassCard}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FaCode className="text-2xl text-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-accent">{language === "pt" ? "Fullstack" : "Fullstack"}</h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === "pt"
                    ? "Tenho proficiência avançada em frontend e venho expandindo minha atuação no backend com foco em automação de processos e integração de sistemas. Meu objetivo é dominar todas as camadas do desenvolvimento, entregando soluções completas e bem arquitetadas."
                    : "I have advanced proficiency in frontend development and I am expanding my backend expertise with a focus on process automation and system integration. My goal is to master every layer of development, delivering complete and well-architected solutions."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="education"
        className={`py-32 px-6 bg-muted/30 transition-all duration-1000 ${
          isVisible.education ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-black">
            {t.education.sectionTitle}
          </h2>

          <div className="space-y-8">
            {t.education.items.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" />
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

                <div className="pl-8">
                  <div className={`p-8 rounded-2xl transition-shadow duration-300 hover:shadow-2xl ${glassCard}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-card-foreground">{item.degree}</h3>
                        <p className="text-primary font-medium">{item.university}</p>
                        <p className="text-lg text-muted-foreground">{item.period}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`py-32 px-6 transition-all duration-1000 ${
          isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-black">
            {t.projects.title} {t.projects.titleHighlight}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <a
                key={index}
                href={projectLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${glassCard}`}
                aria-label={`${t.projects.viewProject}: ${project.title}`}
              >
                <div className="aspect-video overflow-hidden bg-muted/60">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{project.title}</h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-lg">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-white/45 border border-white/40 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className={`py-32 px-6 transition-all duration-1000 ${
          isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-black">
              {t.skills.title} {t.skills.titleHighlight}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, skills]) => (
              <div key={category} className={`p-6 sm:p-8 rounded-2xl ${glassCard}`}>
                <h3 className="text-xl font-bold mb-6 text-primary">
                  {t.skills.categories[category as keyof typeof t.skills.categories]}
                </h3>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(135px,1fr))] gap-3">
                  {skills.map((skill, skillIndex) => (
                    <SkillBadge key={skillIndex} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-32 px-6 bg-muted/30 transition-all duration-1000 ${
          isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black">
              {t.contact.title} {t.contact.titleHighlight}
            </h2>
          </div>

          <p className="text-xl text-muted-foreground mb-12">{t.contact.description}</p>

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
              {t.contact.github}
            </a>

            <a
              href="https://linkedin.com/in/alice-gama-75913022a"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-primary text-primary rounded-full font-medium flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/40 bg-white/60">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>

      <div />
    </div>
  )
}
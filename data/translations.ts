import type { Language, Translation } from "@/types/portfolio"

export const translations: Record<Language, Translation> = {
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
      badge: "Desenvolvedora Full-Stack",
      name: "Alice Gama",
      title: "Full-Stack Developer",
      description: "Transformando complexidade em funcionalidade através de arquitetura sólida e inovação",
      cta1: "Ver Projetos",
      cta2: "Contato",
    },
  about: {
      title: "Sobre",
      titleHighlight: "Mim",
      p1: "Sou engenheira de software em formação, com vivência sólida em frontend construída ao longo de vários anos como freelancer. Comecei com sites simples, landing pages e portfólios para outros profissionais, e fui trazendo esse trabalho para dentro de empresas, resolvendo problemas internos.",
p2: "Hoje atuo como desenvolvedora frontend junior, responsável pelo site institucional completo de uma empresa de engenharia, com múltiplas páginas e portfólio próprio integrado. Trabalho com React, Next.js, TypeScript e Node, unindo código limpo a uma boa base em UI/UX e princípios de layout.",
p3: "Meu foco atual é expandir esse domínio para além do que já tenho em Node, Next e Nest. Resolver problemas com tecnologia hoje passa por automação e IA, por isso estou me aprofundando em Python e explorando ferramentas como n8n para integrar sistemas e aplicar IA em processos reais.",
p4: "Gosto de participar do ciclo completo de um projeto, da estruturação do banco de dados até a entrega final da interface, sempre buscando entender o problema por inteiro antes de começar a escrever código.",
quote: "Engenharia começa antes do código, no momento em que você entende o problema por completo.",
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
          degree: "The Complete Full-Stack Web Development Bootcamp",
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
        {
          degree: "Learn Figma for UI/UX Design (with a Design Project)",
          university: "Udemy",
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
          imageSize: "130%",
        },
        {
          title: "CryptoDashboard",
          description:
            "Ferramenta open-source para dashboards cripto em tempo real com integração de APIs e visualização de dados.",
          tech: ["Next.js", "TypeScript", "Tailwind"],
          image: "/assets/cryptodash.png",
          imageSize: "100%",
        },
        {
          title: "Job Scoring AI",
          description:
            "Sistema de pontuação de vagas com IA, avaliando cada oportunidade em 5 critérios estruturados — aderência técnica, fit de perfil, remuneração, qualidade da empresa e localização.",
          tech: ["Claude", "Anthropic", "Prompt Engineering", "AI Integration"],
          image: "/assets/job-score1.png",
          imageSize: "120%",
        },
        {
          title: "Lunara - Freelancer Management App",
          description:
            "Aplicação de gestão para freelancers com clientes, projetos, tarefas, finanças e prazos em um único ambiente. Desenvolvida com autenticação, banco de dados real, isolamento por usuário, PWA e versão desktop com Tauri.",
          tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Firestore", "Tauri"],
          image: "/assets/lunara.png",
          imageSize: "100%",
        },
        {
          title: "Tower Blocks Game",
          description: "Jogo de blocos em estilo torre com interface moderna e animações suaves.",
          tech: ["Javascript", "CSS", "HTML"],
          image: "/assets/tower2.png",
          imageSize: "100%",
        },
        {
  title: "Velvet — Biblioteca Pessoal de Livros",
  description: "Aplicação de biblioteca pessoal para organizar livros, acompanhar o progresso de leitura e registrar avaliações, resenhas e gêneros.",
  tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  image: "/assets/velvet.png",
  imageSize: "100%",
},
      ],
    },
    skills: {
      title: "Habilidades",
      titleHighlight: "Técnicas",
     categories: {
  languages: "Linguagens",
  ai: "Inteligência Artificial",
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
      copyright: `© ${new Date().getFullYear()} Alice Gama. Todos os direitos reservados.`,
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
      badge: "Full-Stack Developer",
      name: "Alice Gama",
      title: "Full-Stack Developer",
      description: "Transforming complexity into functionality through solid architecture and innovation",
      cta1: "View Projects",
      cta2: "Contact",
    },
    about: {
      title: "About",
      titleHighlight: "Me",
     p1: "I'm a software engineer in training, with solid experience in frontend built over several years as a freelancer. I started with simple sites, landing pages, and portfolios for other professionals, and gradually brought that work into companies, solving internal problems.",
p2: "Today I work as a junior frontend developer, responsible for the full institutional website of an engineering company, with multiple pages and an integrated portfolio section. I work with React, Next.js, TypeScript, and Node, combining clean code with a solid foundation in UI/UX and layout principles.",
p3: "My current focus is expanding beyond what I already have in Node, Next, and Nest. Solving problems with technology today means automation and AI, so I'm deepening my skills in Python and exploring tools like n8n to integrate systems and apply AI in real processes.",
p4: "I like being involved in the full cycle of a project, from database structuring to the final delivery of the interface, always aiming to fully understand the problem before writing a single line of code.",
quote: "Engineering starts before the code, the moment you fully understand the problem.",
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
          degree: "The Complete Full-Stack Web Development Bootcamp",
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
        {
          degree: "Learn Figma for UI/UX Design (with a Design Project)",
          university: "Udemy",
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
          imageSize: "1120%",
        },
        {
          title: "CryptoDashboard",
          description: "Open-source tool for real-time crypto dashboards with API integration and data visualization.",
          tech: ["Next.js", "TypeScript", "Tailwind"],
          image: "/assets/cryptodash.png",
          imageSize: "130%",
        },
        {
          title: "Job Scoring AI",
          description:
            "AI-powered job scoring system that evaluates each opportunity across 5 structured criteria — requirements match, profile fit, compensation, company quality, and location.",
          tech: ["Claude", "Anthropic", "Prompt Engineering", "AI Integration"],
          image: "/assets/job-score1.png",
          imageSize: "120%",
        },
        {
          title: "Lunara - Freelancer Management App",
          description:
            "A freelancer management app that centralizes clients, projects, tasks, finances, and deadlines in one workspace. Built with authentication, real database persistence, user-based data isolation, PWA support, and a desktop version with Tauri.",
          tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Firestore", "Tauri"],
          image: "/assets/lunara.png",
          imageSize: "120%",
        },
        {
          title: "Tower Blocks Game",
          description: "Tower-style block game with modern interface and smooth animations.",
          tech: ["Javascript", "CSS", "HTML"],
          image: "/assets/tower2.png",
          imageSize: "100%",
        },
        {
  title: "Velvet — Personal Book Library",
  description: "Personal book library application for organizing books, tracking reading progress, and managing ratings, reviews, and genres.",
  tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  image: "/assets/velvet.png",
  imageSize: "120%",
},
      ],
    },
    skills: {
      title: "Skills",
      titleHighlight: "Technical",
      categories: {
  languages: "Languages",
  ai: "Artificial Intelligence",
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
     copyright: `© ${new Date().getFullYear()} Alice Gama. All rights reserved.`,
    },
  },
}

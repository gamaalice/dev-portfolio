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
  description:
    "Base sólida em Front-end, expandindo para Full-Stack com foco em arquitetura, integração de sistemas e desenvolvimento de aplicações completas.",
  cta1: "Ver Projetos",
  cta2: "Contato",
    },
  about: {
  title: "Sobre",
  titleHighlight: "Mim",

  p1: "Sou estudante de Engenharia de Software, com conclusão prevista para 2027, e me posiciono profissionalmente como Desenvolvedora Full-Stack, com experiência mais concentrada em Front-end e atuação também no desenvolvimento de backend, integração de dados e construção de aplicações completas. Minha trajetória começou como freelancer, com sites, landing pages e portfólios para outros profissionais, e evoluiu para soluções voltadas a empresas e problemas internos, incluindo sistemas de gestão.",

  p2: "Atualmente atuo como desenvolvedora Front-end Junior no desenvolvimento do site institucional completo de uma empresa de engenharia. Ao longo dos meus projetos profissionais e pessoais, participo de diferentes etapas do ciclo de desenvolvimento, desde o levantamento e organização de requisitos, planejamento e definição da arquitetura até implementação, integração com banco de dados, autenticação e deploy. Tenho especial interesse em arquitetura de software, organização e manutenção do código, componentização, integração entre sistemas e experiência do usuário.",

  focus: {
    title: "Foco atual",
    text: "Python, automação e integração com IA, explorando ferramentas como n8n para integrar sistemas e aplicar essas tecnologias em processos e problemas reais."
  },

  expertise: {
    frontend: {
      title: "Front-end Engineering",
      items: [
        "Desenvolvimento de aplicações web modernas, responsivas e escaláveis",
        "React, Next.js, Vite, JavaScript e TypeScript",
        "Arquitetura baseada em componentes e UI reutilizável",
        "Interfaces com foco em usabilidade e experiência do usuário",
        "Integração com APIs REST e serviços em nuvem"
      ]
    },

    software: {
      title: "Software Engineering",
      items: [
        "Arquitetura de software com foco em organização, escalabilidade e manutenção",
        "Modelagem de dados, persistência e autenticação",
        "Node.js, Next.js e NestJS para lógica de backend e integração de APIs",
        "Desenvolvimento de aplicações completas entre diferentes camadas",
        "Expansão para Python, automação, tratamento de dados e integração com IA"
      ]
    },

    planning: {
      title: "Planning & Development",
      items: [
        "Metodologias ágeis com conhecimentos em Scrum e Kanban",
        "Estruturação de sprints e decomposição de escopo",
        "Organização e priorização de backlog",
        "Entregas iterativas e incrementais",
        "Levantamento de requisitos e planejamento técnico"
      ]
    }
  },

  international: {
    title: "Experiência Internacional",
    text: "Em 2025, realizei uma experiência de imersão internacional nos Estados Unidos, Canadá e México, ampliando minha adaptabilidade, comunicação e capacidade de atuar em diferentes contextos e ambientes multiculturais. Possuo proficiência intermediária em Inglês e Espanhol."
  }
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
  title: "Projetos",
  titleHighlight: "",
  viewSite: "Ver no ar",
  viewGithub: "GitHub",
  carousel: {
  previous: "Imagem anterior",
  next: "Próxima imagem",
  goToImage: "Ir para imagem",
  previewUnavailable: "Preview indisponível",
},

  items: [
    {
      number: "01",
      title: "EASE Engenharia",
      category: "Projeto Profissional · Full-Stack Web",
      year: "2026",

      description:
        "Desenvolvimento do site institucional completo da EASE Engenharia, combinando uma aplicação frontend em React com backend em PHP para processamento de formulários, Ouvidoria e gerenciamento de arquivos.",

      tech: [
        "React",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "PHP",
        "Composer",
        "PHPMailer",
      ],

      highlights: [
        "Frontend responsivo e componentizado",
        "Backend e APIs em PHP",
        "Formulários e gerenciamento de arquivos",
        "Validação e proteção de endpoints",
        "SEO técnico e preparação para produção",
      ],

      images: [
        "/assets/ease/header.png",
        "/assets/ease/home.png",
        "/assets/ease/ouvidoria.png",
        "/assets/ease/projetos.png",
        "/assets/ease/sobre.png",
      ],

      site: "https://www.easeengenharia.com.br/",
      github: "",
    },

    {
      number: "02",
      title: "Lunara",
      category: "Full-Stack Web Application",
      year: "2026",

      description:
        "Aplicação de gestão para freelancers que centraliza clientes, projetos, tarefas, finanças e prazos em um único ambiente, com autenticação, persistência de dados, isolamento por usuário, PWA e versão desktop.",

      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Firebase",
        "Firestore",
        "Tauri",
      ],

      highlights: [
        "Autenticação e isolamento de dados por usuário",
        "Gestão de clientes, projetos e tarefas",
        "Controle financeiro e acompanhamento de prazos",
        "PWA para acesso multiplataforma",
        "Versão desktop com Tauri",
      ],

      images: [
        "/assets/lunara/1.png",
        "/assets/lunara/2.png",
        "/assets/lunara/3.png",
        "/assets/lunara/4.png",
        "/assets/lunara/5.png",
        "/assets/lunara/6.png",
        "/assets/lunara/7.png",
        "/assets/lunara/8.png",
        "/assets/lunara/9.png",
        "/assets/lunara/10.png",
        "/assets/lunara/11.png",
        "/assets/lunara/12.png",
        "/assets/lunara/13.png",
        "/assets/lunara/14.png",
        "/assets/lunara/15.png",
      ],

      site: "https://app-lunara.vercel.app/login",
      github: "https://github.com/gamaalice/Lunara-App",
    },

    {
      number: "03",
      title: "Job Scoring AI",
      category: "AI Automation · AI Integration",
      year: "2026",

      description:
        "Sistema de avaliação automatizada de vagas que utiliza uma skill para Claude para analisar oportunidades segundo critérios estruturados e gerar resultados que apoiam a comparação entre diferentes vagas.",

      tech: [
        "Claude",
        "Anthropic",
        "Prompt Engineering",
        "AI Integration",
      ],

      highlights: [
        "Avaliação estruturada de oportunidades",
        "Análise por critérios independentes",
        "Semantic matching",
        "Pesquisa externa condicional",
        "Resultados sem score final combinado",
      ],

      images: [],

      site: "",
      github: "https://github.com/gamaalice/scorer-skill",
    },

    {
      number: "04",
      title: "Velvet",
      category: "Full-Stack Web Application",
      year: "2026",

      description:
        "Aplicação de biblioteca pessoal para organizar livros, acompanhar o progresso de leitura e gerenciar avaliações, resenhas, gêneros e informações de cada obra.",

      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
      ],

      highlights: [
        "Autenticação e sessões de usuário",
        "Biblioteca individual por usuário",
        "Gerenciamento completo de livros",
        "Avaliações, resenhas e progresso de leitura",
        "Persistência relacional com PostgreSQL e Prisma",
      ],

      images: [
        "/assets/velvet/mainpage.png",
        "/assets/velvet/card_1.png",
        "/assets/velvet/card_2.png",
        "/assets/velvet/estante.png",
        "/assets/velvet/footer.png",
        "/assets/velvet/singin.png",
      ],

      site: "https://velvet-eight-chi.vercel.app/",
      github: "https://github.com/gamaalice/Velvet",
    },

    {
      number: "05",
      title: "CryptoDashboard",
      category: "Data Dashboard · Web Application",
      year: "2025",

      description:
        "Dashboard de criptomoedas que integra dados de mercado por meio da CoinGecko API para acompanhar preços, capitalização, variações e histórico de diferentes ativos.",

      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Recharts",
        "CoinGecko API",
      ],

      highlights: [
        "Integração com dados de mercado da CoinGecko",
        "Pesquisa e acompanhamento de ativos",
        "Sistema de favoritos com LocalStorage",
        "Visualização de dados e gráficos",
        "Interface responsiva",
      ],

      images: [
        "/assets/cryptodash/1.png",
        "/assets/cryptodash/2.png",
        "/assets/cryptodash/3.png",
        "/assets/cryptodash/4.png",
        "/assets/cryptodash/5.png",
      ],

      site: "https://cryptodashbord-wine.vercel.app/",
      github: "https://github.com/gamaalice/cryptodashbord",
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

  email: "Email",
  name: "Nome",
  message: "Mensagem",

  namePlaceholder: "Seu nome",
  emailPlaceholder: "seu@email.com",
  messagePlaceholder: "O que você gostaria de me dizer?",

  send: "Enviar mensagem",
  sending: "Enviando...",
  success: "Mensagem enviada com sucesso. Obrigada pelo contato!",
  error:
    "Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.",
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
  description:
    "A strong Front-end foundation, expanding into Full-Stack development with a focus on architecture, system integration, and complete applications.",
  cta1: "View Projects",
  cta2: "Contact",
    },
    about: {
  title: "About",
  titleHighlight: "Me",

  p1: "I'm a Software Engineering student, graduating in 2027, and I position myself professionally as a Full-Stack Developer, with most of my experience concentrated in Front-end and hands-on experience in backend development, data integration, and building complete applications. My journey started as a freelancer, building websites, landing pages, and portfolios for other professionals, and evolved into solutions for companies and internal business problems, including management systems.",

  p2: "I currently work as a Junior Front-end Developer on the development of the complete institutional website of an engineering company. Across my professional and personal projects, I take part in different stages of the development cycle, from requirements gathering and organization, planning, and architectural decisions to implementation, database integration, authentication, and deployment. I'm particularly interested in software architecture, code organization and maintainability, componentization, system integration, and user experience.",

  focus: {
    title: "Current Focus",
    text: "Python, automation, and AI integration, exploring tools such as n8n to connect systems and apply these technologies to real processes and problems."
  },

  expertise: {
    frontend: {
      title: "Front-end Engineering",
      items: [
        "Development of modern, responsive, and scalable web applications",
        "React, Next.js, Vite, JavaScript, and TypeScript",
        "Component-based architecture and reusable UI",
        "Interfaces focused on usability and user experience",
        "Integration with REST APIs and cloud services"
      ]
    },

    software: {
      title: "Software Engineering",
      items: [
        "Software architecture focused on organization, scalability, and maintainability",
        "Data modeling, persistence, and authentication",
        "Node.js, Next.js, and NestJS for backend logic and API integration",
        "Development of complete applications across different layers",
        "Expanding into Python, automation, data handling, and AI integration"
      ]
    },

    planning: {
      title: "Planning & Development",
      items: [
        "Agile methodologies with working knowledge of Scrum and Kanban",
        "Sprint structuring and scope decomposition",
        "Backlog organization and prioritization",
        "Iterative and incremental delivery",
        "Requirements gathering and technical planning"
      ]
    }
  },

  international: {
    title: "International Experience",
    text: "In 2025, I took part in an international immersion experience across the United States, Canada, and Mexico, strengthening my adaptability, communication, and ability to work across different contexts and multicultural environments. I have intermediate proficiency in English and Spanish."
  }
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
  title: "Selected",
  titleHighlight: "Projects",
  viewSite: "View Live",
  viewGithub: "GitHub",
carousel: {
  previous: "Previous image",
  next: "Next image",
  goToImage: "Go to image",
  previewUnavailable: "Preview unavailable",
},
  items: [
    {
      number: "01",
      title: "EASE Engenharia",
      category: "Professional Project · Full-Stack Web",
      year: "2025",
      description:
        "Development of the complete institutional website for EASE Engenharia, combining a React frontend with a PHP backend for form processing, Ombudsman requests, and file management.",
      tech: [
        "React",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "PHP",
        "Composer",
        "PHPMailer",
      ],
      highlights: [
        "Responsive and component-based frontend",
        "PHP backend and APIs",
        "Forms and file management",
        "Endpoint validation and protection",
        "Technical SEO and production readiness",
      ],
      images: [
        "/assets/ease/header.png",
        "/assets/ease/home.png",
        "/assets/ease/ouvidoria.png",
        "/assets/ease/projetos.png",
        "/assets/ease/sobre.png",
      ],
      site: "https://www.easeengenharia.com.br/",
      github: "",
    },

    {
      number: "02",
      title: "Lunara",
      category: "Full-Stack Web Application",
      year: "2025",
      description:
        "A management application for freelancers that centralizes clients, projects, tasks, finances, and deadlines in a single environment, with authentication, data persistence, user isolation, PWA support, and a desktop version.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Firebase",
        "Firestore",
        "TanStack Query",
        "Tauri",
      ],
      highlights: [
        "Authentication and user data isolation",
        "Client, project, and task management",
        "Financial control and deadline tracking",
        "PWA for cross-platform access",
        "Desktop version with Tauri",
      ],
      images: [
        "/assets/lunara/1.png",
        "/assets/lunara/2.png",
        "/assets/lunara/3.png",
        "/assets/lunara/4.png",
        "/assets/lunara/5.png",
        "/assets/lunara/6.png",
        "/assets/lunara/7.png",
        "/assets/lunara/8.png",
        "/assets/lunara/9.png",
        "/assets/lunara/10.png",
        "/assets/lunara/11.png",
        "/assets/lunara/12.png",
        "/assets/lunara/13.png",
        "/assets/lunara/14.png",
        "/assets/lunara/15.png",
      ],
      site: "https://app-lunara.vercel.app/login",
      github: "https://github.com/gamaalice/Lunara-App",
    },

    {
      number: "03",
      title: "Job Scoring AI",
      category: "AI Automation · AI Integration",
      year: "2026",
      description:
        "An automated job evaluation system using a Claude skill to analyze opportunities according to structured criteria and generate results that support comparison between different positions.",
      tech: [
        "Claude",
        "Anthropic",
        "Prompt Engineering",
        "AI Integration",
      ],
      highlights: [
        "Structured job opportunity evaluation",
        "Analysis based on independent criteria",
        "Semantic matching",
        "Conditional external research",
        "Results without a combined final score",
      ],
      images: [],
      site: "",
      github: "https://github.com/gamaalice/scorer-skill",
    },

    {
      number: "04",
      title: "Velvet",
      category: "Full-Stack Web Application",
      year: "2025",
      description:
        "A personal book library application for organizing books, tracking reading progress, and managing ratings, reviews, genres, and information for each title.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
      ],
      highlights: [
        "Authentication and user sessions",
        "Individual library for each user",
        "Complete book management",
        "Ratings, reviews, and reading progress",
        "Relational persistence with PostgreSQL and Prisma",
      ],
      images: [
        "/assets/velvet/mainpage.png",
        "/assets/velvet/card_1.png",
        "/assets/velvet/card_2.png",
        "/assets/velvet/estante.png",
        "/assets/velvet/footer.png",
        "/assets/velvet/singin.png",
      ],
      site: "https://velvet-eight-chi.vercel.app/",
      github: "https://github.com/gamaalice/Velvet",
    },

    {
      number: "05",
      title: "CryptoDashboard",
      category: "Data Dashboard · Web Application",
      year: "2025",
      description:
        "A cryptocurrency dashboard that integrates market data through the CoinGecko API to track prices, market capitalization, variations, and historical data across different assets.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Recharts",
        "CoinGecko API",
      ],
      highlights: [
        "Integration with CoinGecko market data",
        "Asset search and tracking",
        "Favorites system with LocalStorage",
        "Data visualization and charts",
        "Responsive interface",
      ],
      images: [
        "/assets/cryptodash/1.png",
        "/assets/cryptodash/2.png",
        "/assets/cryptodash/3.png",
        "/assets/cryptodash/4.png",
        "/assets/cryptodash/5.png",
      ],
      site: "https://cryptodashbord-wine.vercel.app/",
      github: "https://github.com/gamaalice/cryptodashbord",
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

  email: "Email",
  name: "Name",
  message: "Message",

  namePlaceholder: "Your name",
  emailPlaceholder: "you@email.com",
  messagePlaceholder: "What would you like to tell me?",

  send: "Send message",
  sending: "Sending...",
  success: "Message sent successfully. Thank you for reaching out!",
  error:
    "Your message could not be sent. Please try again in a moment.",
    },
    footer: {
     copyright: `© ${new Date().getFullYear()} Alice Gama. All rights reserved.`,
    },
  },
}

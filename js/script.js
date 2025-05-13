// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  const preloader = document.querySelector(".preloader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("fade-out");
      document.body.style.overflow = "visible";
    }, 1000);
  });

  // SISTEMA DE TRADUÇÃO (APENAS PORTUGUÊS E INGLÊS)
  const translations = {
    pt: {
      // Navegação
      nav_home: "Início",
      nav_about: "Sobre",
      nav_skills: "Habilidades",
      nav_projects: "Projetos",
      nav_contact: "Contato",

      // Header
      subtitle: "Miss Front-End em construção",

      // Terminal
      terminal_line1: "Miss Front-End em construção",
      terminal_line2: "Olá, visitante!",
      terminal_line3: "Use o scroll para explorar",

      // Sobre
      about_title: "Desenvolvedora Front-End e Engenheira de Software em formação",
      about_p1: "Sou focada na criação de soluções inovadoras com alta eficiência, usabilidade e acessibilidade. Comprometida com o aprendizado contínuo e a qualidade do código.",
      about_p2: "Tenho grande interesse por CSS e JavaScript, com uma afinidade especial pela área de design de interfaces. Busco constantemente criar experiências digitais que equilibrem estética, funcionalidade e desempenho.",
      about_p3: "Sou entusiasta do ecossistema JavaScript moderno, com habilidades em TypeScript, que agrega maior segurança e robustez ao código.",

      // Habilidades
      skills_title: "Minhas Principais Habilidades",
      skills_description: "Nesta seção, encontram-se as linguagens, ferramentas e tecnologias com as quais tenho mais afinidade no momento. São os principais recursos que utilizo para transformar ideias em interfaces funcionais, criativas e acessíveis.",
      skills_languages: "Linguagens",
      skills_frameworks: "Frameworks & Bibliotecas",
      skills_tools: "Ferramentas",

      // Projetos
      projects_title: "Projetos",
      view_github: "Ver no GitHub",
      view_demo: "Demo",

      // Contato
      contact_title: "Entre em Contato",
      contact_description: "Estou disponível para novos projetos e oportunidades.",
      contact_email: "Email",

      // Footer
      footer_rights: "Todos os direitos reservados.",
    },
    en: {
      // Navigation
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",

      // Header
      subtitle: "Miss Front-End, work in progress",

      // Terminal
      terminal_line1: "Miss Front-End, work in progress",
      terminal_line2: "Hello, visitor!",
      terminal_line3: "Use scroll to explore",

      // About
      about_title: "Front-End Developer and Software Engineer in training",
      about_p1: "I focus on creating innovative solutions with high efficiency, usability, and accessibility. Committed to continuous learning and code quality.",
      about_p2: "I have a great interest in CSS and JavaScript, with a special affinity for interface design. I constantly seek to create digital experiences that balance aesthetics, functionality, and performance.",
      about_p3: "I am an enthusiast of the modern JavaScript ecosystem, with skills in TypeScript, which adds greater security and robustness to the code.",

      // Skills
      skills_title: "My Main Skills",
      skills_description: "In this section, you'll find the languages, tools, and technologies with which I have the most affinity at the moment. These are the main resources I  and technologies with which I have the most affinity at the moment. These are the main resources I use to transform ideas into functional, creative, and accessible interfaces.",
      skills_languages: "Languages",
      skills_frameworks: "Frameworks & Libraries",
      skills_tools: "Tools",

      // Projects
      projects_title: "Projects",
      view_github: "View on GitHub",
      view_demo: "Demo",

      // Contact
      contact_title: "Get in Touch",
      contact_description: "I'm available for new projects and opportunities.",
      contact_email: "Email",

      // Footer
      footer_rights: "All rights reserved.",
    }
  };

  // Função para traduzir a página
  function translatePage(language) {
    // Salvar a preferência de idioma
    localStorage.setItem("preferredLanguage", language);

    // Atualizar o texto do seletor de idioma
    document.getElementById("current-language").textContent = language.toUpperCase();

    // Traduzir elementos com atributo data-translate
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });

    // Atualizar o terminal com o idioma selecionado
    updateTerminalLanguage(language);
  }

  // Função para atualizar o terminal com base no idioma
  function updateTerminalLanguage(language) {
    const terminal = document.getElementById("terminal-vitrine");
    if (!terminal) return;

    // Limpar o terminal
    terminal.innerHTML = '';

    // Adicionar linhas traduzidas
    const linhas = [
      `<div class="linha-terminal"><span class="prefixo">alice@gama:</span><span class="comando">~$</span><span class="output"> ${translations[language].terminal_line1}</span></div>`,
      `<div class="linha-terminal"><span class="prefixo">system:</span><span class="output"> ${translations[language].terminal_line2}</span></div>`,
      `<div class="linha-terminal"><span class="prefixo">tip:</span><span class="output"> ${translations[language].terminal_line3}</span></div>`,
      '<div class="linha-terminal"><span class="comando">~</span><span class="cursor-blink">|</span></div>',
    ];

    // Adicionar as linhas ao terminal
    linhas.forEach(linha => {
      const div = document.createElement('div');
      div.innerHTML = linha;
      terminal.appendChild(div.firstChild);
    });
  }

  // Terminal Animation
  const terminal = document.getElementById("terminal-vitrine");

  if (terminal) {
    // Inicializar com o idioma salvo ou padrão
    const savedLanguage = localStorage.getItem("preferredLanguage") || "pt";
    
    // Configurar o terminal com o idioma correto
    updateTerminalLanguage(savedLanguage);
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    // Add shadow to navbar on scroll
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Update active nav link based on scroll position
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });

    // Show/hide back to top button
    const backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 500) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Update ARIA attributes
    const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
    menuToggle.setAttribute("aria-expanded", !expanded);
  });

  // Close mobile menu when clicking on a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Code Editor Tabs
  const fileTabs = document.querySelectorAll(".file");
  const codeContent = document.getElementById("code-content");
  const filename = document.querySelector(".filename");

  const codeSnippets = {
    script: `
// script.js

export const mainLanguages = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Tailwind CSS",
  "JQuery",
  "Bootstrap"
];

export const toolsAndLibraries = [
  "Git",
  "GitHub",
  "React",
  "Styled Components",
  "Framer Motion",
  "VS Code",
  "PyCharm"
];`,
    html: `

  <header>
    <h1>Alice Gama</h1>
    <p>Front-End Developer</p>
  </header>
  
  <main>
    <!-- Content goes here -->
  </main>
  
  <footer>
    <p>&copy; 2024 Alice Gama</p>
  </footer>
</body>
</html>`,
    css: `
/* styles.css */

:root {
  --primary-color: #7519D1;
  --text-color: #262626;
  --background: #f8f8ff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  color: var(--text-color);
  background-color: var(--background);
  line-height: 1.6;
}

header {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

/* More styles... */`,
  };

  fileTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Update active tab
      fileTabs.forEach((t) => t.classList.remove("ativo"));
      tab.classList.add("ativo");

      // Update code content
      const fileType = tab.getAttribute("data-file");
      codeContent.innerHTML = `<pre>${codeSnippets[fileType]}</pre>`;

      // Update filename
      filename.textContent = tab.textContent;
    });
  });

  
  // CARROSSEL 
  const track = document.querySelector(".carousel-track");
  if (track) {
    const slides = Array.from(track.children);
    const indicators = document.querySelectorAll(".indicator");

    let currentIndex = 0;

    function updateCarousel() {
      // Esconder todos os slides
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      
      // Mostrar apenas o slide atual
      slides[currentIndex].classList.add("active");
      
      // Atualizar indicadores
      indicators.forEach((ind, index) => {
        ind.classList.toggle("active", index === currentIndex);
      });
    }

    // Adicionar eventos aos indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    // Inicializar o carrossel
    updateCarousel();
  }


  // Initialize ScrollReveal
  const ScrollReveal = window.ScrollReveal;

  ScrollReveal().reveal(
    ".section-title, .about-content, .terminal-habilidades, .skills-grid, .slide, .contact-container",
    {
      duration: 1000,
      origin: "bottom",
      distance: "30px",
      delay: 200,
      easing: "ease-in-out",
    }
  );

  // Inicialização do seletor de idioma
  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    const languageDropdown = document.querySelector(".language-dropdown");
    const languageButtons = document.querySelectorAll(".language-dropdown button");

    // Inicializar com o idioma salvo ou padrão
    const savedLanguage = localStorage.getItem("preferredLanguage") || "pt";
    translatePage(savedLanguage);

    // Abrir/fechar dropdown
    languageToggle.addEventListener("click", () => {
      languageDropdown.classList.toggle("active");
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".language-selector")) {
        languageDropdown.classList.remove("active");
      }
    });

    // Mudar idioma
    languageButtons.forEach((button) => {
      button.addEventListener("click", function() {
        const language = this.getAttribute("data-lang");
        translatePage(language);
        languageDropdown.classList.remove("active");
      });
    });
  }
});

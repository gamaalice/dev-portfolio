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

// SISTEMA DE TRADUÇÃO (PORTUGUÊS E INGLÊS)
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

  // Dados dos projetos
  projects: [
    {
      id: "social-button",
      title: "Social Button",
      description: "Este projeto apresenta um conjunto de botões sociais interativos, que exibem a informação proporcionando uma experiência visual moderna. Cada botão possui um design responsivo e cores alinhadas à identidade da plataforma, garantindo estética e funcionalidade."
    },
    {
      id: "dark-mode",
      title: "Dark Mode",
      description: "Este projeto implementa uma interface de usuário com alternância entre temas claro e escuro, permitindo uma experiência visual interativa. Além disso, possui um menu de navegação estruturado com seções definidas, utilizando ícones da biblioteca Font Awesome."
    },
    {
      id: "login-style",
      title: "Login Style",
      description: "Este projeto apresenta um formulário de login estilizado, com animações interativas que proporcionam uma experiência moderna e intuitiva ao usuário. Além do design responsivo, ele inclui alternância de temas, validação de campos e alertas para garantir acessibilidade e funcionalidade eficientes."
    },
    {
      id: "valentine-js",
      title: "Will you be my Valentine?",
      description: "Este projeto apresenta uma aplicação interativa desenvolvida com JavaScript, proporcionando uma experiência dinâmica e envolvente ao usuário. Ele inclui mensagens personalizadas no botão \"Não\", aumento progressivo do botão \"Sim\" e redirecionamento condicional para uma página dedicada, tornando a interação divertida e intuitiva."
    },
    {
      id: "ease-engenharia",
      title: "Protótipo - Ease Engenharia",
      description: "Este projeto apresenta um protótipo de site desenvolvido para a empresa Ease Engenharia, com foco na exibição profissional de seus serviços e projetos concluídos."
    },
    {
      id: "dulceeco",
      title: "Protótipo - Dulce&Co",
      description: "Este projeto apresenta o protótipo de um site desenvolvido para uma marca em fase de lançamento, com foco em identidade visual, usabilidade e presença digital."
    }
  ],

  // Contato
  contact_title: "Entre em Contato",
  contact_description: "Estou disponível para novos projetos e oportunidades.",
  contact_email: "Email",

  // Footer
  footer_rights: "Todos os direitos reservados."
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
  skills_description: "In this section, you'll find the languages, tools, and technologies with which I have the most affinity at the moment. These are the main resources I use to transform ideas into functional, creative, and accessible interfaces.",
  skills_languages: "Languages",
  skills_frameworks: "Frameworks & Libraries",
  skills_tools: "Tools",

  // Projects
  projects_title: "Projects",
  view_github: "View on GitHub",
  view_demo: "Demo",

  // Project data
  projects: [
    {
      id: "social-button",
      title: "Social Button",
      description: "This project presents a set of interactive social buttons that display information while offering a modern visual experience. Each button features a responsive design and colors aligned with the platform's identity, ensuring both aesthetics and functionality."
    },
    {
      id: "dark-mode",
      title: "Dark Mode",
      description: "This project implements a user interface with a toggle between light and dark themes, providing an interactive visual experience. It also includes a structured navigation menu with defined sections, using icons from the Font Awesome library."
    },
    {
      id: "login-style",
      title: "Login Style",
      description: "This project showcases a stylized login form with interactive animations that provide a modern and intuitive user experience. In addition to the responsive design, it includes theme toggling, field validation, and alerts to ensure accessibility and efficient functionality."
    },
    {
      id: "valentine-js",
      title: "Will you be my Valentine?",
      description: "This project features an interactive JavaScript-based application, offering a dynamic and engaging user experience. It includes custom messages on the 'No' button, progressive enlargement of the 'Yes' button, and conditional redirection to a dedicated page — making the interaction fun and intuitive."
    },
    {
      id: "ease-engenharia",
      title: "Prototype - Ease Engenharia",
      description: "This project presents a website prototype developed for the company Ease Engenharia, focused on professionally showcasing its services and completed projects."
    },
    {
      id: "dulceeco",
      title: "Prototype - Dulce&Co",
      description: "This project introduces a prototype website designed for a brand in its launch phase, with a focus on visual identity, usability, and digital presence."
    }
  ],

  // Contact
  contact_title: "Get in Touch",
  contact_description: "I'm available for new projects and opportunities.",
  contact_email: "Email",

  // Footer
  footer_rights: "All rights reserved."
}
};

// Função para atualizar o conteúdo dos projetos com base no idioma
function updateProjects(language) {
const projectSlides = document.querySelectorAll('.slide');
const projectsData = translations[language].projects;

projectSlides.forEach(slide => {
  const projectId = slide.getAttribute('data-project');
  const projectData = projectsData.find(p => p.id === projectId);
  
  if (projectData) {
    // Atualizar título e descrição
    const titleElement = slide.querySelector('h3');
    const descriptionElement = slide.querySelector('p');
    
    if (titleElement) titleElement.textContent = projectData.title;
    if (descriptionElement) descriptionElement.textContent = projectData.description;
    
    // Atualizar textos dos links
    const githubLink = slide.querySelector('.github span');
    const demoLink = slide.querySelector('.demo span');
    
    if (githubLink) githubLink.textContent = translations[language].view_github;
    if (demoLink) demoLink.textContent = translations[language].view_demo;
  }
});
}

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

// Atualizar os projetos
updateProjects(language);

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

// Adicionar cada linha ao terminal com um pequeno atraso para efeito de digitação
linhas.forEach((linha, index) => {
  setTimeout(() => {
    terminal.innerHTML += linha;
  }, index * 300);
});
}

// Configurar o seletor de idioma
const languageToggle = document.getElementById("language-toggle");
const languageDropdown = document.querySelector(".language-dropdown");
const languageButtons = document.querySelectorAll(".language-dropdown button");

// Mostrar/ocultar o dropdown de idiomas
languageToggle.addEventListener("click", () => {
languageDropdown.classList.toggle("active");
});

// Fechar o dropdown quando clicar fora dele
document.addEventListener("click", (event) => {
if (!event.target.closest(".language-selector")) {
languageDropdown.classList.remove("active");
}
});

// Configurar os botões de idioma
languageButtons.forEach((button) => {
button.addEventListener("click", () => {
const language = button.getAttribute("data-lang");
translatePage(language);
languageDropdown.classList.remove("active");
});
});

// Verificar se há uma preferência de idioma salva
const savedLanguage = localStorage.getItem("preferredLanguage");
if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
translatePage(savedLanguage);
} else {
// Usar o idioma do navegador ou padrão (pt)
const browserLanguage = navigator.language.split("-")[0];
const defaultLanguage = browserLanguage === "en" ? "en" : "pt";
translatePage(defaultLanguage);
}

// Configurar o menu de navegação móvel
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
menuToggle.classList.toggle("active");
navMenu.classList.toggle("active");

// Atualizar o atributo aria-expanded
const isExpanded = menuToggle.classList.contains("active");
menuToggle.setAttribute("aria-expanded", isExpanded);
});

// Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
link.addEventListener("click", () => {
menuToggle.classList.remove("active");
navMenu.classList.remove("active");
menuToggle.setAttribute("aria-expanded", "false");
});
});

// Destacar o link ativo na navegação
function setActiveNavLink() {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

let currentSection = "";

sections.forEach((section) => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;
  
  if (window.scrollY >= sectionTop - 200) {
    currentSection = section.getAttribute("id");
  }
});

navLinks.forEach((link) => {
  link.classList.remove("active");
  if (link.getAttribute("href") === `#${currentSection}`) {
    link.classList.add("active");
  }
});
}

window.addEventListener("scroll", setActiveNavLink);

// Configurar o carrossel de projetos
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;

// Função para mostrar um slide específico
function showSlide(index) {
  // Esconder todos os slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Mostrar o slide atual
  slides[index].classList.add('active');
  
  // Atualizar indicadores
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  
  currentSlide = index;
}

// Configurar os indicadores
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
  });
});

// Inicializar o carrossel com o primeiro slide
showSlide(0);

// Adicionar navegação por teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    let prevSlide = currentSlide - 1;
    if (prevSlide < 0) prevSlide = slides.length - 1;
    showSlide(prevSlide);
  } else if (e.key === 'ArrowRight') {
    let nextSlide = currentSlide + 1;
    if (nextSlide >= slides.length) nextSlide = 0;
    showSlide(nextSlide);
  }
});

// Adicionar navegação por toque (swipe)
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

track.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe para a esquerda (próximo slide)
    let nextSlide = currentSlide + 1;
    if (nextSlide >= slides.length) nextSlide = 0;
    showSlide(nextSlide);
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe para a direita (slide anterior)
    let prevSlide = currentSlide - 1;
    if (prevSlide < 0) prevSlide = slides.length - 1;
    showSlide(prevSlide);
  }
}

// Botão de voltar ao topo
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Animações com ScrollReveal
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false
});

sr.reveal('.section-title', {});
sr.reveal('.about-text', { delay: 300 });
sr.reveal('.about-image', { delay: 400 });
sr.reveal('.skills-grid', { delay: 300 });
sr.reveal('.slide', { interval: 200 });
sr.reveal('.contact-container', { delay: 300 });

// Configurar a alternância de arquivos no editor de código
const fileButtons = document.querySelectorAll('.sidebar .file');
const codeContent = document.getElementById('code-content');

const codeFiles = {
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
];
`,
  html: `
<!-- index.html -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfólio | Alice Gama</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <header>
    <h1>Alice Gama</h1>
    <p>Desenvolvedora Front-End</p>
  </header>

  <!-- Conteúdo do site -->

  <script src="./js/script.js"></script>
</body>
</html>
  `,
  css: `
/* styles.css */

:root {
--primary-color: #6c63ff;
--secondary-color: #f5f5f5;
--text-color: #333;
--accent-color: #ff6584;
}

body {
font-family: 'Poppins', sans-serif;
line-height: 1.6;
color: var(--text-color);
background-color: var(--secondary-color);
}

.container {
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
}
`
};

fileButtons.forEach(button => {
  button.addEventListener('click', () => {
    const fileType = button.getAttribute('data-file');
    
    // Atualizar classe ativa
    fileButtons.forEach(btn => btn.classList.remove('ativo'));
    button.classList.add('ativo');
    
    // Atualizar conteúdo
    codeContent.innerHTML = `<pre>${codeFiles[fileType]}</pre>`;
    
    // Atualizar nome do arquivo na interface
    const filename = document.querySelector('.filename');
    if (filename) {
      filename.textContent = button.textContent;
    }
  });
});

// Remover as linhas duplicadas que estavam causando o problema
// Não inicializar o terminal aqui, pois ele já é inicializado na função translatePage
// que é chamada logo abaixo quando verificamos o idioma salvo

});
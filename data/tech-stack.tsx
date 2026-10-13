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
  SiFirebase,
  SiGoogle,
  SiDialogflow,
  SiGithubcopilot,
  SiAnthropic,
  SiPhp,
  SiAngular,
  SiVuedotjs,
  SiExpo,
  SiDotnet,
  SiVercel,
  SiN8N,
  SiSqlite,
} from "react-icons/si"

import {
  FaDatabase,
  FaWandMagicSparkles,
  FaCode,
  FaChartLine,
} from "react-icons/fa6"

import type { Skill } from "@/types/portfolio"
import { FaHashtag } from "react-icons/fa";
export const techStack: Record<string, Skill[]> = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "PHP", icon: <SiPhp /> },
 { name: "C#", icon: <FaHashtag /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss /> },
  ],

  ai: [
    { name: "Claude", icon: <SiAnthropic /> },
    { name: "Prompt Engineering", icon: <FaWandMagicSparkles /> },
    { name: "Dialogflow", icon: <SiDialogflow /> },
    { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
    { name: "Cursor", icon: <FaCode /> },
  ],

  frameworks: [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "Expo", icon: <SiExpo /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "ASP.NET Core", icon: <SiDotnet /> },
  ],

  libraries: [
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "shadcn/ui", icon: <FaCode /> },
    { name: "Zod", icon: <FaCode /> },
    { name: "TanStack Query", icon: <FaCode /> },
    { name: "Prisma", icon: <FaDatabase /> },
    { name: "Entity Framework Core", icon: <FaDatabase /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Matplotlib", icon: <FaChartLine /> },
    { name: "PHPMailer", icon: <FaCode /> },
  ],

  tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "n8n", icon: <SiN8N /> },
    { name: "Google Auth", icon: <SiGoogle /> },
    { name: "Better Auth", icon: <FaCode /> },
  ],

  databases: [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Oracle", icon: <FaDatabase /> },
  ],
};

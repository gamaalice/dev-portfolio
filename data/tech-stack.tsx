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
  SiTurso,
} from "react-icons/si"

import {
  FaDatabase,
  FaWandMagicSparkles,
  FaCode,
  FaChartLine,
} from "react-icons/fa6"

import type { Skill } from "@/types/portfolio"

export const techStack: Record<string, Skill[]> = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
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
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
  ],

  libraries: [
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Matplotlib", icon: <FaChartLine /> },
  ],

  tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Google Auth", icon: <SiGoogle /> },
    { name: "Better Auth", icon: <FaCode /> },
  ],

  databases: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Prisma", icon: <FaDatabase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Oracle", icon: <FaDatabase /> },
  ],
}
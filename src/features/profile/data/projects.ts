import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "chandan-dot-com",
    title: "chandanpradhan.vercel.app",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/ncdai/chanhdai.com",
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `A minimal portfolio, component registry, and blog.
- Clean & modern design
- Light & Dark theme support
- vCard integration
- SEO optimization: [JSON-LD schema](https://json-ld.org), sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable PWA

Blog Features:
- MDX & Markdown support
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews`,
    logo: "/images/icon-vector.svg",
    isExpanded: true,
  },
  {
    id: "movie-mania",
    title: "Movie Mania",
    period: {
      start: "03.2023",
      end: "07.2023",
    },
    link: "https://movie-mania09.vercel.app/",
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Lazy Loading",
      "Infinite Scroll",
    ],
    description: `A responsive movie discovery web app built using React.js.
- Implemented movie search, filtering, and infinite scroll for seamless user experience.
- Integrated third-party TMDB API to display live movie data including ratings, genres, and cast.
- Used lazy loading and skeleton screens to optimize performance and UX.
- Designed an engaging UI/UX with dynamic sections like upcoming releases and recommendations.`,
    logo: "/images/projects/movie-mania.webp",
    isExpanded: false,
  },
  {
    id: "config-automation",
    title: "Config Automation",
    period: {
      start: "06.2023",
      end: "08.2023",
    },
    link: "https://github.com/chandanPradhan09/config-automation",
    skills: ["Bash", "Python", "Automation", "DevOps", "Shell Scripting"],
    description: `A command-line configuration automation tool designed to streamline environment setup.
- Automated setup for 15+ backend services, reducing configuration time by 65%.
- Integrated Bash and Python scripts for flexible service management.
- Enhanced CI/CD efficiency and deployment consistency across environments.`,
    logo: "/images/projects/config-automation.webp",
    isExpanded: false,
  },
];

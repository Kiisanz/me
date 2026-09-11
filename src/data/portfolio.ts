import type { SocialLink } from "@/components/molecules/social-links";

export const portfolio = {
  name: "Rifki Maulana",
  siteUrl: "https://me.rmaul.xyz",
  socials: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/caastanzo/",
    },
    { platform: "github", label: "GitHub", href: "https://github.com/Kiisanz" },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mochamad-rifki-maulana/",
    },
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://web.facebook.com/mchdrfky",
    },
  ] satisfies SocialLink[],
  hero: {
    eyebrow: "Frontend-first, full-stack capable",
    specialties: [
      "Thoughtful Interfaces",
      "Responsive Websites",
      "Accessible Experiences",
      "Full-Stack Apps",
    ] as const,
    specialtyIcons: [
      "interface",
      "responsive",
      "accessibility",
      "fullstack",
    ] as const,
    description:
      "I build responsive, accessible interfaces with care for the details—and connect the APIs and databases that make them work.",
    primaryAction: { label: "View projects", href: "#work" },
    secondaryAction: { label: "Get in touch", href: "#contact" },
  },
  experience: [
    {
      company: "CV ARAS Creative",
      role: "Full-Stack Developer",
      employmentType: "Contract",
      contributions: [
        "Contribute to UI and backend development for SEKANTOR, a human resource management application.",
        "Contribute to UI and backend development for SIEMPE, a multichannel marketplace integration platform.",
        "Manage server infrastructure supporting the applications.",
      ],
      projects: [
        { title: "SEKANTOR", href: "/projects/sekantor" },
        { title: "SIEMPE", href: "/projects/siempe" },
      ],
      startDate: "2024-11",
      startLabel: "November 2024",
      endLabel: "Present",
    },
  ],
  about: {
    birthDate: "2007-12-11",
    birthDateLabel: "11 December 2007",
    education: {
      school: "SMAN 1 Jalaksana",
      program: "MIPA",
      graduationYear: "2024",
    },
  },
  email: "rifki.coding@gmail.com",
  cvUrl: "/CV_Mochamad_Rifki_Maulana_ATS_Frontend-1.pdf",
  role: "Frontend Developer · Full-Stack Capable",
  intro:
    "I’m Rifki Maulana, a frontend-first developer building thoughtful web interfaces, with full-stack capabilities to bring complete applications to life.",
  skills: {
    title: "My tech universe.",
    intro:
      "Frontend at the center. A supporting orbit of backend tools. These are the technologies I use to bring web applications to life.",
    groups: [
      {
        title: "Frontend development",
        featured: ["React.js", "Next.js", "Tailwind CSS"],
        description:
          "Responsive websites, dashboards, and application interfaces built with reusable components.",
        technologies: [
          "React.js",
          "Next.js",
          "Vite",
          "Webpack",
          "Tailwind CSS",
          "shadcn/ui",
          "Bootstrap 5",
        ],
      },
      {
        title: "Backend & API integration",
        description:
          "Backend services and API integrations that connect the interface to application logic and data.",
        technologies: ["NestJS", "Express", "Laravel", "CodeIgniter"],
        featured: ["NestJS", "Laravel"],
      },
      {
        title: "Data & supporting infrastructure",
        featured: ["PostgreSQL", "Redis"],
        description:
          "Databases, caching, background jobs, and data access tools that support full-stack applications.",
        technologies: [
          "MySQL",
          "PostgreSQL",
          "Redis",
          "BullMQ",
          "TypeORM",
          "Sequelize",
        ],
      },
      {
        title: "Development workflow",
        description: "Version control with Git.",
        technologies: ["Git"],
        featured: [],
      },
    ],
  },
  projects: [
    {
      number: "01",
      title: "SEKANTOR",
      slug: "sekantor",
      image: {
        src: "/projects/sekantor/dashboard-preview.png",
        alt: "Illustrative SEKANTOR dashboard showing attendance summaries, a trend chart, and leave requests",
        caption:
          "Illustrative dashboard preview — not a production screenshot.",
        width: 1642,
        height: 958,
      },
      gallery: [
        {
          src: "/projects/sekantor/sekantor2.png",
          alt: "Illustrative SEKANTOR weekly employee schedule with shift times and date filters",
          caption:
            "Weekly scheduling — illustrative preview, not a production screenshot.",
          width: 1642,
          height: 958,
        },
      ],
      contribution:
        "UI and backend development, alongside server infrastructure management.",
      category: "Human resource management",
      client: "ARAS Creative",
      description:
        "A human resource management system for ARAS Creative, combining a Next.js interface and shadcn/ui components with a Go backend.",
      stack: [
        "Next.js",
        "shadcn/ui",
        "Go",
        "Docker",
        "GitHub Actions",
        "NGINX",
      ],
      features: [
        "Work schedules",
        "Attendance",
        "Leave management",
        "Digital contracts",
        "Payroll",
      ],
      style: "hrms",
    },
    {
      number: "02",
      title: "SIEMPE",
      slug: "siempe",
      image: {
        src: "/projects/siempe/dashboard-preview.png",
        alt: "SIEMPE dashboard preview with sales charts, marketplace channels, and recent orders",
        caption: "Dashboard interface preview.",
        width: 1642,
        height: 958,
      },
      gallery: [
        {
          src: "/projects/siempe/sign-in.png",
          alt: "SIEMPE sign-in interface alongside a summary of marketplace management features",
          caption: "Sign-in interface.",
          width: 2048,
          height: 1197,
        },
      ],
      contribution:
        "UI and backend development, alongside server infrastructure management.",
      category: "Multichannel marketplace integration",
      client: "SIEMPE",
      description:
        "A multichannel marketplace integration platform for managing orders, returns, stock, and shipping in one place. Built with Vite, TypeScript, and shadcn/ui, backed by NestJS.",
      stack: [
        "Vite",
        "TypeScript",
        "shadcn/ui",
        "NestJS",
        "BullMQ",
        "Redis",
        "PostgreSQL",
        "Docker",
        "GitHub Actions",
        "NGINX",
      ],
      features: [
        "Marketplace integrations",
        "Order management",
        "Returns management",
        "Stock management",
        "Shipping",
      ],
      style: "siempe",
    },
  ],
};

export type PortfolioProject = (typeof portfolio.projects)[number];

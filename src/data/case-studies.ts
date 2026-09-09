export type CaseStudy = {
  period: string;
  role: string;
  team: string;
  audience: string;
  status: string;
  overview: string;
  contributions: { title: string; description: string }[];
  challengeTitle: string;
  challenge: string;
  integrations?: string[];
  outcome: string;
  confidentiality: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  sekantor: {
    period: "November 2025 – February 2026",
    role: "Full-Stack Developer",
    team: "Part of a development team, contributing to frontend and backend development.",
    audience: "HR, managers, and finance",
    status: "Deployed · Internal use",
    overview:
      "SEKANTOR brings work schedules, attendance, leave, contracts, and payroll into one HR management platform for CV ARAS Creative. It centralizes day-to-day administration and supports paperless operations through digital contracts. HR and managers use it for people operations, while finance relies on its payroll workflows.",
    contributions: [
      {
        title: "Contract document template builder",
        description:
          "Contributed to both the UI and backend of the contract document template builder, supporting the creation of digital employee contracts.",
      },
      {
        title: "Attendance integrity",
        description:
          "Hardened backend attendance logic with anti-spoofing checks, with a focus on the reliability of records used in payroll.",
      },
      {
        title: "Employee mobile application",
        description:
          "Contributed to the mobile application that lets employees track their own attendance.",
      },
      {
        title: "Deployment & infrastructure",
        description:
          "Handled Docker deployments, CI/CD workflows with GitHub Actions, and NGINX reverse-proxy configuration.",
      },
    ],
    challengeTitle: "The challenge: attendance that payroll can rely on",
    challenge:
      "Keeping attendance synchronized was a critical challenge because it affects employee payroll. Clock-in and clock-out events can diverge from leave records when employees miss a punch or submit leave information late. My work on attendance logic focused on this data-integrity problem: the system needs to account for these discrepancies rather than assume every record is complete and aligned.",
    outcome:
      "The team successfully deployed SEKANTOR for internal daily HR operations. It made employee information and administrative processes easier to manage in one place. Digital contracts reduced the need to print large volumes of paperwork and made contract signing across multiple employees more efficient.",
    confidentiality:
      "SEKANTOR is a confidential internal application. Production screenshots, a public demo, and the source repository are not shared. This case study describes my contributions at a high level.",
  },
  siempe: {
    period: "February 2026 – August 2026",
    role: "Full-Stack Developer",
    team: "Contributed to frontend and backend development, with a focus on product management interfaces and stock management flows.",
    audience: "Shippers, admins, brand managers, and finance",
    status: "Deployed · Internal use",
    overview:
      "SIEMPE brings orders, products, and stock from multiple e-commerce marketplaces into one operational platform. It helps internal teams manage product information and inventory centrally, reducing the need to switch between separate marketplace dashboards. BullMQ and Redis support queue processing, while PostgreSQL serves as the application database.",
    integrations: ["Shopee", "Lazada", "TikTok Shop", "Blibli"],
    contributions: [
      {
        title: "Product forms & management UI",
        description:
          "Contributed to the product forms and product management interface, giving teams a central place to manage product information across marketplace channels.",
      },
      {
        title: "Stock management backend",
        description:
          "Worked on backend stock management flows, focusing on synchronization between master stock records and marketplace inventory.",
      },
      {
        title: "Deployment & infrastructure",
        description:
          "Handled Docker deployments, CI/CD with GitHub Actions, and NGINX reverse-proxy configuration, alongside server infrastructure management.",
      },
    ],
    challengeTitle: "The challenge: keeping marketplace inventory aligned",
    challenge:
      "Synchronizing third-party APIs was a key challenge, especially when order statuses and inventory needed to stay aligned with master records across marketplaces. Stock discrepancies can lead to overselling. My backend work focused on the stock management flows involved in keeping physical inventory, master stock, and marketplace availability consistent.",
    outcome:
      "SIEMPE is used internally to reduce repetitive marketplace administration. Teams can update prices and product names, and synchronize physical stock with marketplace inventory, from one application rather than opening each platform separately. This centralizes routine work and reduces the workload of maintaining multiple sales channels.",
    confidentiality:
      "SIEMPE is an internal professional project. No public demo or source repository is linked; this case study focuses on my contributions and the operational workflows.",
  },
};

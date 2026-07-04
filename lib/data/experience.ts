export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Lead Software Engineer",
    company: "Mondaysys Ltd",
    period: "Jul 2025 — Present",
    bullets: [
      "Architect, develop, and maintain ERP and POS solutions for supermarket and retail businesses using ERPNext, Frappe Framework, and POS Awesome.",
      "Analyze business requirements and implement ERP modules — Inventory, Sales, Purchasing, Accounting, HRMS, and Payroll — for multiple client organizations.",
      "Lead development of Shopify public and private applications, successfully publishing a public app on the Shopify App Store.",
      "Mentor junior engineers and promote knowledge sharing to improve team productivity.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Together Initiatives Limited",
    period: "Jul 2022 — Jun 2025",
    bullets: [
      "Delivered the Absorb Learning Management System for Absorb Software (Canada): test planning, requirement analysis, and UI/API test case design.",
      "Automated test suites with Playwright and Cypress, executing smoke, regression, and end-to-end coverage.",
      "Built Dr. Yahki's AI Assistant (Python, LLM) and a React-based Visitor Management System.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Hyper Helios",
    period: "Oct 2020 — Jun 2022",
    bullets: [
      "Built and maintained full-stack applications with React and Django, including The Job Wave job portal and Million Challenge.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Staff Asia",
    period: "Feb 2020 — Sep 2020",
    bullets: ["Analyzed and processed data using Python, NumPy, and Pandas."],
  },
  {
    role: "Resource Person (Math Trainer)",
    company: "Math Olympiad Sub-component, PEDP4",
    period: "Nov 2018 — Jan 2020",
    bullets: ["Trained students for the Math Olympiad program."],
  },
];

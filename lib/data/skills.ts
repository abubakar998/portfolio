export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js"] },
  { group: "Backend", items: ["FastAPI", "Django", "Node.js", "Express", "Frappe"] },
  { group: "Platforms", items: ["ERPNext", "Shopify"] },
  { group: "Data", items: ["PostgreSQL", "SQLAlchemy", "Prisma"] },
  { group: "Tooling", items: ["Git", "Docker"] },
  { group: "Testing", items: ["Playwright", "Cypress"] },
];

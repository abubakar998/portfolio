export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["JavaScript", "Python"] },
  { group: "Frontend", items: ["React"] },
  { group: "Backend", items: ["Node.js", "FastAPI"] },
  { group: "Platforms", items: ["ERPNext", "Shopify"] },
  { group: "Data", items: ["PostgreSQL"] },
  { group: "Tooling", items: ["Git", "Docker"] },
  { group: "Testing", items: ["Playwright", "Cypress"] },
];

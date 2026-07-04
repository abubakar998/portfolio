export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Shopify App Store App",
    description:
      "Led development and publishing of a public Shopify application on the Shopify App Store, alongside private apps for enterprise clients, using the Shopify ecosystem and APIs.",
    tags: ["Shopify", "Node.js", "React"],
  },
  {
    title: "Absorb Learning Management System",
    description:
      "Test planning and automation for Absorb Software's LMS (Canada) — designed UI/API test cases and automated smoke, regression, and end-to-end suites.",
    tags: ["Playwright", "Cypress", "QA Automation"],
  },
  {
    title: "Dr. Yahki's AI Assistant",
    description:
      "An LLM-powered assistant built with Python, integrating language model capabilities into a conversational product.",
    tags: ["Python", "LLM"],
  },
  {
    title: "Visitor Management System",
    description:
      "A React-based system for managing visitor check-ins and tracking within an organization.",
    tags: ["React"],
  },
  {
    title: "The Job Wave",
    description:
      "A full-stack job portal connecting employers and job seekers, built with React and Django.",
    tags: ["React", "Django"],
  },
  {
    title: "Million Challenge",
    description:
      "A full-stack web platform built with React and Django as part of the Hyper Helios project portfolio.",
    tags: ["React", "Django"],
  },
];

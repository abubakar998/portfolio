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
      "Trustpop, a published Shopify App that adds customizable trust badges and payment icons to any storefront page — no code required.",
    tags: ["Shopify", "Remix", "Prisma", "PostgreSQL"],
    link: "https://apps.shopify.com/trustpop"
  },
  {
    title: "Absorb Software",
    description:
      "UI and API test automation for Absorb's enterprise learning platform — built and maintained smoke, regression, and end-to-end suites.",
    tags: ["Playwright", "Cypress", "QA Automation"],
    link: "https://absorbai.com"
  },
  {
    title: "The Job Wave",
    description:
      "A maritime recruitment platform connecting seafaring, offshore, inland-shipping, and shore-based professionals with employers across Western Europe.",
    tags: ["React", "Django", "PostgreSQL"],
    link: "https://thejobwave.com"
  },
  {
    title: "Million Challenge",
    description:
      "A campaign platform for Creator Wizard's Million Sponsorships Challenge — creators log sponsorship pitches and track progress on a public leaderboard.",
    tags: ["React", "Django", "PostgreSQL"],
    link: "https://million.creatorwizard.com/"
  },
];

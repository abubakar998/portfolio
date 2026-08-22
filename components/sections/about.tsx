import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" title="About" className="border-t border-border">
      <div className="space-y-4 text-muted leading-relaxed">
        <p>
          I&apos;m a Senior/Lead Full Stack Engineer with experience building and maintaining
          production applications across both frontend and backend. My main strengths are
          TypeScript, React, Next.js, Python, Node.js, PostgreSQL, and AWS.
        </p>
        <p>
          I&apos;ve worked on SaaS products, e-commerce applications, ERP/POS systems, Shopify apps,
          and AI-powered applications. In my current role, I also take ownership of architecture,
          code reviews, technical decisions, and mentoring junior engineers.
        </p>
        <p>
          What I particularly enjoy is working on products end-to-end—from understanding the
          business requirement and designing the architecture to implementation, testing,
          deployment, and continuous improvement.
        </p>
      </div>
    </Section>
  );
}

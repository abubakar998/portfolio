import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" title="About" className="border-t border-border">
      <div className="max-w-2xl space-y-4 text-muted leading-relaxed">
        <p>
          I&apos;m a software engineer based in Dhaka, Bangladesh, with a Bachelor of Science from the
          Bangladesh University of Engineering and Technology (BUET). My coursework covered Data
          Structures &amp; Algorithms, Database Management Systems, Operating Systems, Computer
          Networks, Software Engineering, Software Testing &amp; Quality Assurance, Distributed
          Systems, Machine Learning, Data Science, and Object-Oriented Programming.
        </p>
        <p>
          I currently lead ERP and POS solution development at Mondaysys Ltd, building on ERPNext,
          Frappe Framework, and the Shopify ecosystem. Earlier in my career I worked across QA
          automation, full-stack development, and data analysis — giving me a broad, practical view
          of how software gets built, tested, and shipped.
        </p>
      </div>
    </Section>
  );
}

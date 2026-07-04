import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium text-accent">Hi, I&apos;m</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{siteConfig.name}</h1>
        <p className="mt-2 text-xl text-muted">{siteConfig.title} · {siteConfig.location}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{siteConfig.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={siteConfig.resumePath}
            download
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex gap-5 text-sm text-muted">
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={siteConfig.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}

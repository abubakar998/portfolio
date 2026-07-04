import { Section } from "@/components/ui/section";
import { experience } from "@/lib/data/experience";

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="border-t border-border">
      <ol className="space-y-10 border-l border-border pl-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <span className="text-sm text-muted">{job.period}</span>
            </div>
            <p className="mb-3 text-sm font-medium text-accent">{job.company}</p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data/skills";

export function Skills() {
  return (
    <Section id="skills" title="Skills" className="border-t border-border">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="mb-3 text-sm font-semibold text-muted">{group.group}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

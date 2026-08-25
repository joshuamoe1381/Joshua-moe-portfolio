import { Reveal } from "@/components/motion/Reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <section className="section-space border-t border-line">
      <div className="grid-page grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="meta text-ink-muted">Education</p>
        </Reveal>
        <Reveal className="md:col-span-9" delay={0.08}>
          <h3 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-tight tracking-[-0.035em]">
            {education.school}
          </h3>
          <p className="mt-4 text-ink">{education.degree}</p>
          <p className="mt-1 text-sm text-ink-secondary">{education.college}</p>
          <p className="meta mt-4 text-ink-muted">{education.dates}</p>
          <p className="mt-6 text-sm text-ink-secondary">
            Minors: {education.minors.join("; ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

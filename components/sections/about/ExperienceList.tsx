import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/experience";

export function ExperienceList() {
  return (
    <section className="section-space border-t border-line">
      <div className="grid-page">
        <Reveal>
          <p className="meta mb-12 text-ink-muted md:mb-16">Experience</p>
        </Reveal>
        <div>
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.04}>
              <article className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
                <div className="md:col-span-4">
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-tight tracking-[-0.03em]">
                    {item.role}
                  </h3>
                  <p className="meta mt-3 text-ink-secondary">{item.dates}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base text-ink md:text-lg">{item.company}</p>
                  <p className="meta mt-2 text-ink-muted">{item.location}</p>
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-secondary md:text-base">
                    {item.summary}
                  </p>
                  {item.detail ? (
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-secondary md:text-base">
                      {item.detail}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}

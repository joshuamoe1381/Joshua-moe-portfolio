import { Reveal } from "@/components/motion/Reveal";
import { leadership } from "@/data/leadership";

export function Leadership() {
  return (
    <section className="section-space border-t border-line">
      <div className="grid-page">
        <Reveal>
          <p className="meta mb-12 text-ink-muted md:mb-16">Leadership</p>
        </Reveal>
        <div>
          {leadership.map((item, index) => (
            <Reveal key={item.organization} delay={index * 0.05}>
              <article className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:py-12">
                <div className="md:col-span-5">
                  <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-tight tracking-[-0.03em] uppercase">
                    {item.organization}
                  </h3>
                  <p className="meta mt-3 text-ink-secondary">{item.role}</p>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-ink-secondary md:col-span-7 md:text-base">
                  {item.summary}
                </p>
              </article>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}

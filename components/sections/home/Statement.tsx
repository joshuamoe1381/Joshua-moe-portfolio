import { Reveal } from "@/components/motion/Reveal";

export function Statement() {
  return (
    <section className="section-space border-t border-line">
      <div className="grid-page">
        <Reveal>
          <h2 className="display-section max-w-[18ch] uppercase">
            I build creative systems that connect strategy, storytelling,
            production, and growth.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-secondary md:mt-14 md:text-lg">
            From the first idea through final delivery, I work across brand,
            content, campaigns, production, and digital experiences — leading
            the strategy while staying close enough to the work to make it
            better.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

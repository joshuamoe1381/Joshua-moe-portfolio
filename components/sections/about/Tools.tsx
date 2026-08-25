import { Reveal } from "@/components/motion/Reveal";
import { tools } from "@/data/tools";

export function Tools() {
  const loop = [...tools, ...tools];

  return (
    <section className="section-space overflow-hidden border-t border-line">
      <div className="grid-page mb-10 md:mb-14">
        <Reveal>
          <p className="meta text-ink-muted">Tools</p>
        </Reveal>
      </div>
      <div className="relative">
        <div className="marquee-track flex items-center gap-0">
          {loop.map((tool, index) => (
            <span
              key={`${tool}-${index}`}
              className="meta whitespace-nowrap px-6 text-ink-muted md:px-10"
            >
              {tool}
              <span className="ml-6 text-line md:ml-10" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

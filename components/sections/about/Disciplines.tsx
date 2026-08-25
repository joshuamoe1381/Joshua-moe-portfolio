import { Reveal } from "@/components/motion/Reveal";
import { disciplines } from "@/data/disciplines";

export function Disciplines() {
  return (
    <section className="section-space border-t border-line">
      <div className="grid-page">
        <Reveal>
          <p className="meta mb-12 text-ink-muted md:mb-16">Core disciplines</p>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {disciplines.map((column, index) => (
            <Reveal key={column.title} delay={index * 0.08}>
              <h3 className="meta mb-6 text-ink">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line pt-2 text-sm text-ink-secondary md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

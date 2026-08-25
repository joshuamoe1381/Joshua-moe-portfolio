import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Arrow } from "@/components/ui/Arrow";

export function AboutPreview() {
  return (
    <section className="border-t border-line pt-[clamp(88px,12vw,176px)] pb-[clamp(48px,6vw,80px)]">
      <div className="grid-page">
        <Reveal>
          <p className="meta mb-8 text-ink-muted">About</p>
          <h2 className="display-section max-w-[12ch] uppercase">
            Strategy in the room. Hands-on in the work.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-ink-secondary md:text-lg">
            <p>
              Joshua Moe is a Creative Director working across brand strategy,
              campaigns, social, film, photography, digital experiences, and
              content systems.
            </p>
            <p>
              His approach combines creative leadership with hands-on production
              — developing the idea, directing the execution, and staying
              involved through final delivery.
            </p>
          </div>
          <Link
            href="/about"
            className="group meta mt-10 inline-flex items-center gap-3 text-ink"
          >
            More about me
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
              <Arrow />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

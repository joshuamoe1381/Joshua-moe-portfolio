import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { about, practice } from "@/data/about";
import { education } from "@/data/education";
import { leadership } from "@/data/leadership";
import { tools } from "@/data/tools";
import { resolvePublicSrc } from "@/lib/media";

function AboutRail({
  id,
  label,
  children,
}: {
  id?: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className="grid items-start gap-10 border-t border-line pt-16 md:pt-20 lg:grid-cols-12 lg:gap-8"
    >
      <p className="meta text-ink-muted lg:sticky lg:top-28 lg:col-span-3">
        {label}
      </p>
      <div className="lg:col-span-9">{children}</div>
    </div>
  );
}

function ToolsTicker() {
  const loop = [...tools, ...tools];

  return (
    <div
      className="tools-marquee relative overflow-hidden"
      aria-label="Tools and platforms"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent md:w-20" />
      <div className="marquee-track flex items-center">
        {loop.map((tool, index) => (
          <span
            key={`${tool}-${index}`}
            className="meta whitespace-nowrap px-6 text-ink-muted md:px-10"
          >
            {tool}
            <span className="ml-6 text-white/20 md:ml-10" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  const portraitSrc = resolvePublicSrc("/media/joshua-hero.jpg");

  return (
    <section id="about" className="section-space overflow-hidden border-t border-line">
      <div className="grid-page">
        <Reveal>
          <p className="meta mb-10 text-ink-muted md:mb-14">{about.label}</p>
        </Reveal>

        <Reveal>
          <div className="flex items-start gap-5 sm:gap-8 lg:gap-12">
            <div className="relative size-[clamp(6.75rem,22vw,16rem)] shrink-0 rounded-full border border-white/25 p-[5px] sm:p-[7px]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-bg-elevated">
                <MediaFrame
                  src={portraitSrc}
                  alt="Joshua Moe seated in a director's chair on set."
                  seed="joshua-about"
                  className="absolute inset-0 rounded-full"
                  sizes="(min-width: 1024px) 256px, 40vw"
                  objectPosition="center 32%"
                />
              </div>
            </div>
            <div className="min-w-0 max-w-3xl space-y-8">
              <p className="font-display text-[clamp(1.35rem,2.8vw,2.4rem)] leading-[1.2] tracking-[-0.03em] text-ink">
                {about.lead}
              </p>
              <div className="space-y-6 text-base leading-relaxed text-ink-secondary md:text-lg">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 md:mt-24" delay={0.06}>
          <AboutRail id="practice" label={practice.label}>
            {practice.items.map((item, index) => (
              <article
                key={item.title}
                className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-3 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-x-8 md:py-10 md:first:pt-0"
              >
                <span className="meta text-ink-muted md:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] leading-tight tracking-[-0.03em] uppercase">
                    {item.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                    {item.tags.map((tag) => (
                      <li key={tag} className="meta text-ink-secondary">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="col-start-2 max-w-xl text-sm leading-relaxed text-ink-secondary md:col-span-6 md:col-start-7 md:text-base">
                  {item.body}
                </p>
              </article>
            ))}
            <div className="hairline" />
          </AboutRail>
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <AboutRail label="Leadership">
            {leadership.map((item) => (
              <article
                key={item.organization}
                className="grid gap-3 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8 md:py-10 md:first:pt-0"
              >
                <div className="md:col-span-5">
                  <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] leading-tight tracking-[-0.03em] uppercase">
                    {item.organization}
                  </h3>
                  <p className="meta mt-3 text-ink-secondary">{item.role}</p>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-ink-secondary md:col-span-7 md:text-base">
                  {item.summary}
                </p>
              </article>
            ))}
            <div className="hairline" />
          </AboutRail>
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <AboutRail label="Education">
            <div>
              <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-tight tracking-[-0.035em]">
                {education.school}
              </h3>
              <p className="mt-4 text-ink">{education.degree}</p>
              <p className="mt-1 text-sm text-ink-secondary">
                {education.college}
              </p>
              <p className="mt-4 text-sm text-ink-secondary">
                Minors: {education.minors.join("; ")}
              </p>
              <p className="meta mt-5 text-ink-muted">{education.dates}</p>
              <div className="mt-10 hairline" />
            </div>
          </AboutRail>
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <div className="border-t border-line pt-16 md:pt-20">
            <p className="meta mb-10 text-ink-muted md:mb-12">Tools</p>
            <ToolsTicker />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

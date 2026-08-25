import { Reveal } from "@/components/motion/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { resolvePublicSrc } from "@/lib/media";

export function Introduction() {
  const portraitSrc = resolvePublicSrc("/media/joshua-about.jpg");

  return (
    <section className="section-space border-t border-line">
      <div className="grid-page">
        <Reveal>
          <p className="meta mb-10 text-ink-muted md:mb-14">About me</p>
        </Reveal>
        <Reveal delay={0.06}>
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
                Joshua Moe is a Creative Director based in Minneapolis,
                Minnesota, working across the intersection of strategy,
                storytelling, design, and production. He leads creative from
                the first idea through execution — building brand systems,
                campaigns, social content, film, photography, digital
                experiences, and the workflows that keep all of it moving.
              </p>
              <p className="text-base leading-relaxed text-ink-secondary md:text-lg">
                His background combines creative leadership with hands-on
                craft. Whether directing a production, shaping a campaign,
                building a website, developing a brand system, or leading a
                cross-functional team, he approaches the work with the same
                goal: make the idea clear, make the execution strong, and make
                every touchpoint feel intentional.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

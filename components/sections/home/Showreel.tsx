"use client";

import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { useCursor } from "@/components/motion/CursorProvider";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/lib/cn";

export function Showreel({
  src,
  videoUrl,
}: {
  src?: string;
  videoUrl?: string;
}) {
  const { setLabel } = useCursor();
  const reduceMotion = useReducedMotion();
  const label = videoUrl ? "PLAY" : null;

  const frame = (
    <div className="relative aspect-[16/9] overflow-hidden bg-bg-elevated md:aspect-[2/1]">
      <MediaFrame
        src={src}
        alt="Live event still from Joshua Moe's creative reel."
        seed="joshua-reel"
        className="absolute inset-0"
        imageClassName={cn(
          "object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          !reduceMotion && "group-hover:scale-[1.03] motion-reduce:group-hover:scale-100",
        )}
        sizes="100vw"
        objectPosition="center 45%"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/58" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-8">
        <p className="text-center font-display text-[clamp(1.5rem,4vw,3.25rem)] leading-tight tracking-[0.12em] text-white uppercase">
          My Creative Reel
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="reel"
      aria-label="My creative reel"
      className="pt-[clamp(88px,12vw,176px)]"
    >
      <div className="grid-page">
        <Reveal>
          <p className="meta mb-10 text-ink-muted md:mb-12">My creative reel</p>
        </Reveal>
        <Reveal y={20}>
          {videoUrl ? (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setLabel(label)}
              onMouseLeave={() => setLabel(null)}
              onFocus={() => setLabel(label)}
              onBlur={() => setLabel(null)}
            >
              {frame}
              <span className="sr-only">Watch my creative reel</span>
            </a>
          ) : (
            <div className="group">{frame}</div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

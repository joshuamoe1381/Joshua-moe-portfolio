"use client";

import { useReducedMotion } from "motion/react";
import { useCursor } from "@/components/motion/CursorProvider";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getProjectHref, type Project } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WorkTile({
  project,
  logoSrc,
  thumbnailSrc,
}: {
  project: Project;
  logoSrc?: string;
  thumbnailSrc?: string;
}) {
  const { setLabel } = useCursor();
  const reduceMotion = useReducedMotion();
  const href = getProjectHref(project);
  const label = href ? "PLAY" : null;

  const media = (
    <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
      <MediaFrame
        src={thumbnailSrc}
        alt=""
        seed={project.slug}
        className="absolute inset-0"
        imageClassName={cn(
          "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          !reduceMotion && "group-hover:scale-[1.04]",
        )}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/58" />
      {logoSrc ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-8 py-6 sm:px-10">
          {/* Logos must be supplied as white artwork. */}
          {/* SVG wordmarks stay on <img> to avoid next/image hydration mismatches. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={420}
            height={140}
            className="h-auto max-h-16 w-auto max-w-[72%] object-contain sm:max-h-20 lg:max-h-24"
          />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-8">
          <p className="text-center font-display text-[clamp(1.1rem,2.4vw,1.85rem)] leading-tight tracking-[-0.03em] text-white uppercase">
            {project.client}
          </p>
        </div>
      )}
    </div>
  );

  const sharedClass = "group block";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClass}
        onMouseEnter={() => setLabel(label)}
        onMouseLeave={() => setLabel(null)}
        onFocus={() => setLabel(label)}
        onBlur={() => setLabel(null)}
      >
        {media}
        <span className="sr-only">{`Watch ${project.client}`}</span>
      </a>
    );
  }

  return (
    <article className={sharedClass}>
      {media}
      <span className="sr-only">{project.client}</span>
    </article>
  );
}

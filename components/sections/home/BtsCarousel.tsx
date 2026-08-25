"use client";

import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { BtsStill } from "@/data/bts";
import { cn } from "@/lib/cn";

const GAP = 16;
const INTERVAL_MS = 3800;

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-4 md:size-[1.1rem]"
    >
      <path
        d={direction === "prev" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BtsCarousel({ stills }: { stills: BtsStill[] }) {
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const loop = stills.length > 1 ? [...stills, ...stills] : stills;

  const wrapLoop = useCallback(
    (el: HTMLDivElement) => {
      if (stills.length < 2) return;
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      if (el.scrollLeft < 0) el.scrollLeft += half;
    },
    [stills.length],
  );

  const go = useCallback(
    (direction: -1 | 1) => {
      const el = scrollerRef.current;
      const slide = el?.querySelector<HTMLElement>("[data-slide]");
      if (!el || !slide) return;

      const step = slide.offsetWidth + GAP;
      const half = el.scrollWidth / 2;

      if (stills.length > 1 && half > 0) {
        if (direction > 0 && el.scrollLeft + step >= half - 4) {
          el.scrollLeft -= half;
        }
        if (direction < 0 && el.scrollLeft - step <= 4) {
          el.scrollLeft += half;
        }
      }

      el.scrollBy({
        left: direction * step,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [reduceMotion, stills.length],
  );

  useEffect(() => {
    if (reduceMotion || stills.length < 2) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      go(1);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [go, reduceMotion, stills.length]);

  if (stills.length === 0) return null;

  const showControls = stills.length > 1;

  return (
    <div
      className="relative h-full min-h-0"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={scrollerRef}
        className="bts-scroller flex h-full snap-x snap-mandatory gap-4 overflow-x-auto select-none"
        aria-label="Behind the scenes on set"
        onScroll={() => {
          const el = scrollerRef.current;
          if (el) wrapLoop(el);
        }}
      >
        {loop.map((still, index) => (
          <div
            key={`${still.src}-${index}`}
            data-slide
            className={cn(
              "relative h-full shrink-0 snap-start overflow-hidden rounded-3xl bg-bg-elevated",
              still.portrait ? "aspect-[2/3]" : "aspect-[3/2]",
            )}
            aria-hidden={index >= stills.length || undefined}
          >
            <MediaFrame
              src={still.src}
              alt={index < stills.length ? still.alt : ""}
              seed={still.src}
              className="absolute inset-0 rounded-3xl"
              sizes="(min-width: 1024px) 42vw, 80vw"
              priority={index === 0}
              objectPosition="center"
            />
          </div>
        ))}
      </div>

      {showControls ? (
        <>
          <button
            type="button"
            aria-label="Previous still"
            className="absolute top-1/2 left-1 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-ink backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-black/75 md:left-2 md:size-10"
            onClick={() => go(-1)}
          >
            <Chevron direction="prev" />
          </button>
          <button
            type="button"
            aria-label="Next still"
            className="absolute top-1/2 right-1 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-ink backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-black/75 md:right-2 md:size-10"
            onClick={() => go(1)}
          >
            <Chevron direction="next" />
          </button>
        </>
      ) : null}
    </div>
  );
}

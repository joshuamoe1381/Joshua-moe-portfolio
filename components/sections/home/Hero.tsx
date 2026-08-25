"use client";

import { motion, useReducedMotion } from "motion/react";
import { BrandMarquee } from "@/components/sections/home/BrandMarquee";
import { BtsCarousel } from "@/components/sections/home/BtsCarousel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { BtsStill } from "@/data/bts";
import { site } from "@/data/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero({
  heroSrc,
  btsStills = [],
}: {
  heroSrc?: string;
  btsStills?: BtsStill[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] pt-[72px] md:pt-[84px]">
      <div className="flex min-h-[calc(100svh-72px)] flex-col md:min-h-[calc(100svh-84px)]">
        <div className="grid-page flex items-start justify-between gap-6 pt-6 md:pt-10">
          <motion.p
            className="meta max-w-[14rem] text-ink-secondary md:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {site.jobTitle}
          </motion.p>
          <motion.p
            className="meta text-right text-ink-secondary"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
          >
            {site.location.label}
          </motion.p>
        </div>

        <div className="grid-page mt-8 flex items-center gap-5 sm:gap-8 md:mt-10 lg:mt-12 lg:gap-12">
          <motion.div
            className="relative size-[clamp(6.75rem,24vw,20rem)] shrink-0 rounded-full border border-white/25 p-[5px] sm:p-[7px]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-bg-elevated">
              <MediaFrame
                src={heroSrc}
                alt="Joshua Moe seated in a director's chair on set."
                seed="joshua-hero"
                className="absolute inset-0 rounded-full"
                sizes="(min-width: 1024px) 320px, 40vw"
                objectPosition="center 32%"
                priority
              />
            </div>
          </motion.div>

          <div className="min-w-0">
            <h1 className="font-display text-[clamp(2.35rem,6.6vw,8.75rem)] font-medium leading-[0.82] tracking-[-0.055em] uppercase">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.12, ease }}
              >
                Joshua
              </motion.span>
              <motion.span
                className="block"
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
              >
                Moe
              </motion.span>
            </h1>
            <motion.p
              className="mt-5 max-w-xl text-sm leading-relaxed text-ink-secondary md:mt-7 md:text-base"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease }}
            >
              {site.disciplines}
            </motion.p>
          </div>
        </div>

        <div className="min-h-8 flex-1" aria-hidden="true" />

        <div className="relative h-[clamp(11.5rem,23svh,17rem)] px-[clamp(20px,3vw,64px)]">
          <BtsCarousel stills={btsStills} />
        </div>

        <div className="min-h-8 flex-1" aria-hidden="true" />

        <div className="mt-1">
          <BrandMarquee />
        </div>

        <div className="grid-page mt-8 flex items-end justify-between gap-6 border-t border-line pt-6 pb-8 md:mt-10 md:pb-10">
          <motion.p
            className="meta text-ink"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            {site.availability}
          </motion.p>
          <a href="#selected-work" className="meta text-ink-secondary hover:text-ink">
            Scroll to explore ↓
          </a>
        </div>
      </div>
    </section>
  );
}

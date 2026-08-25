"use client";

import { cn } from "@/lib/cn";

type AbstractPlaceholderProps = {
  seed: string;
  label?: string;
  className?: string;
};

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function AbstractPlaceholder({
  seed,
  label,
  className,
}: AbstractPlaceholderProps) {
  const variant = hashSeed(seed) % 4;

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-bg-elevated",
        className,
      )}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_3px)]" />

      {variant === 0 && (
        <>
          <div className="absolute inset-y-0 left-[18%] w-px bg-white/10" />
          <div className="absolute inset-x-0 top-[32%] h-px bg-white/10" />
          <div className="absolute right-[12%] top-[18%] h-[38%] w-[28%] border border-white/10" />
        </>
      )}
      {variant === 1 && (
        <>
          <div className="absolute left-[8%] top-[20%] h-[60%] w-[42%] border border-white/10" />
          <div className="absolute bottom-[16%] right-[10%] h-px w-[36%] bg-white/15" />
        </>
      )}
      {variant === 2 && (
        <>
          <div className="absolute inset-0 origin-center rotate-[-18deg] scale-125 bg-[linear-gradient(90deg,transparent_0%,transparent_46%,rgba(255,255,255,0.06)_46%,rgba(255,255,255,0.06)_47%,transparent_47%)]" />
          <div className="absolute bottom-[18%] left-[10%] h-px w-1/2 bg-white/12" />
        </>
      )}
      {variant === 3 && (
        <>
          <div className="absolute left-1/2 top-1/2 h-[55%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute inset-x-[12%] top-1/2 h-px bg-white/10" />
        </>
      )}

      {label ? (
        <div className="absolute inset-x-[clamp(20px,3vw,48px)] bottom-[clamp(20px,4vw,40px)]">
          <p className="meta text-ink-muted">{label}</p>
        </div>
      ) : null}
    </div>
  );
}

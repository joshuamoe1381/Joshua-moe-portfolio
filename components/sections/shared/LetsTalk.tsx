import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { mailto } from "@/data/site";

export function LetsTalk() {
  return (
    <section className="border-t border-line">
      <div className="grid-page py-[clamp(96px,14vw,200px)]">
        <p className="meta mb-6 text-ink-muted">Have a project, role, or idea?</p>
        <Link
          href={mailto}
          className="group flex items-end justify-between gap-6"
        >
          <span className="display-cta">Let&apos;s talk.</span>
          <span className="mb-3 hidden text-[clamp(2rem,5vw,4rem)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:-translate-y-2 md:block">
            <Arrow />
          </span>
        </Link>
      </div>
    </section>
  );
}

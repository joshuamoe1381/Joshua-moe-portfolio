import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { type Project } from "@/data/projects";

export function NextProject({ project }: { project: Project }) {
  return (
    <section className="border-t border-line">
      <div className="grid-page py-[clamp(72px,10vw,140px)]">
        <p className="meta mb-6 text-ink-muted">Next project</p>
        <Link
          href={`/work/${project.slug}`}
          className="group flex items-end justify-between gap-6"
        >
          <span className="font-display text-[clamp(2.4rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.05em] uppercase">
            {project.title}
          </span>
          <span className="meta mb-2 inline-flex items-center gap-3 text-ink">
            Next project
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
              <Arrow />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}

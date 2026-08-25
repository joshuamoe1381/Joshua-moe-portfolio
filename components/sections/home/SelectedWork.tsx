import { Reveal } from "@/components/motion/Reveal";
import { WorkGrid } from "@/components/project/WorkGrid";
import { getFeaturedProjects } from "@/data/projects";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section id="selected-work" className="pt-[clamp(56px,7vw,96px)] pb-[clamp(88px,12vw,176px)]">
      <div className="grid-page">
        <Reveal>
          <p className="meta mb-10 text-ink-muted md:mb-12">Selected work</p>
        </Reveal>
        <WorkGrid projects={projects} />
      </div>
    </section>
  );
}

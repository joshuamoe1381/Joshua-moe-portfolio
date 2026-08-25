import { WorkTile } from "@/components/project/WorkTile";
import { type Project } from "@/data/projects";
import { resolvePublicSrc } from "@/lib/media";

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {projects.map((project) => (
        <WorkTile
          key={project.slug}
          project={project}
          thumbnailSrc={resolvePublicSrc(project.thumbnail)}
          logoSrc={resolvePublicSrc(project.logo)}
        />
      ))}
    </div>
  );
}

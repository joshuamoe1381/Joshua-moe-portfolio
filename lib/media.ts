import { existsSync } from "node:fs";
import path from "node:path";
import type { Project } from "@/data/projects";

export function publicFileExists(publicPath?: string): boolean {
  if (!publicPath) return false;
  const relative = publicPath.replace(/^\//, "");
  return existsSync(path.join(process.cwd(), "public", relative));
}

export function resolvePublicSrc(publicPath?: string): string | undefined {
  return publicFileExists(publicPath) ? publicPath : undefined;
}

export function resolveProjectMedia(project: Project): Project {
  return {
    ...project,
    thumbnail: resolvePublicSrc(project.thumbnail) ?? "",
    logo: resolvePublicSrc(project.logo) ?? "",
    heroImage: resolvePublicSrc(project.heroImage) ?? "",
    heroVideo: resolvePublicSrc(project.heroVideo),
    gallery: project.gallery.map((item) => resolvePublicSrc(item) ?? ""),
  };
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextProject } from "@/components/project/NextProject";
import { Reveal } from "@/components/motion/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import {
  getNextProject,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import { resolveProjectMedia } from "@/lib/media";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Joshua Moe`,
      description: project.description,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const found = getProjectBySlug(slug);
  if (!found) notFound();

  const project = resolveProjectMedia(found);
  const next = getNextProject(found.slug);

  return (
    <>
      <article>
        <header className="pt-[120px] md:pt-[140px]">
          <div className="grid-page">
            <Reveal>
              <p className="meta mb-6 text-ink-muted">
                {project.client} · {project.year}
              </p>
              <h1 className="display-section uppercase">{project.title}</h1>
              <p className="meta mt-6 text-ink-secondary">
                {project.services.join(" · ")}
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-10 md:mt-14" y={20}>
            <div className="relative h-[min(86vh,980px)] min-h-[420px] w-full">
              <MediaFrame
                src={project.heroImage || undefined}
                videoSrc={project.heroVideo}
                alt={`${project.title} hero`}
                seed={project.slug}
                placeholderLabel="Replace with project hero media"
                className="absolute inset-0"
                sizes="100vw"
                priority
              />
            </div>
          </Reveal>
        </header>

        <div className="grid-page grid gap-12 py-[clamp(72px,10vw,140px)] md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="meta text-ink-muted">Overview</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <p className="max-w-2xl text-lg leading-relaxed text-ink md:text-xl">
              {project.overview}
            </p>
          </Reveal>
        </div>

        <div className="grid-page grid gap-12 border-t border-line py-[clamp(64px,8vw,110px)] md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="meta text-ink-muted">Role</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {project.role}
            </p>
          </Reveal>
        </div>

        <div className="grid-page grid gap-12 border-t border-line py-[clamp(64px,8vw,110px)] md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="meta text-ink-muted">Challenge</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {project.challenge}
            </p>
          </Reveal>
        </div>

        <div className="grid-page grid gap-12 border-t border-line py-[clamp(64px,8vw,110px)] md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="meta text-ink-muted">Approach</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {project.approach}
            </p>
          </Reveal>
        </div>

        <section className="border-t border-line py-[clamp(72px,10vw,140px)]">
          <div className="grid-page mb-10">
            <p className="meta text-ink-muted">Work</p>
          </div>
          <div className="flex flex-col gap-4">
            {project.gallery.map((src, index) => (
              <Reveal key={`${project.slug}-gallery-${index}`} delay={index * 0.05}>
                <div className="relative h-[min(78vh,860px)] min-h-[320px] w-full">
                  <MediaFrame
                    src={src || undefined}
                    alt={`${project.title} still ${index + 1}`}
                    seed={`${project.slug}-gallery-${index}`}
                    placeholderLabel="Replace with gallery media"
                    className="absolute inset-0"
                    sizes="100vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="grid-page grid gap-12 border-t border-line py-[clamp(72px,10vw,140px)] md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="meta text-ink-muted">Result</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {project.result}
            </p>
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="meta mt-8 inline-block text-ink"
              >
                View live project →
              </a>
            ) : null}
          </Reveal>
        </div>
      </article>
      {next ? <NextProject project={next} /> : null}
    </>
  );
}

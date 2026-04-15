import type { Metadata } from "next";
import { ProjectImageSlider } from "@/components/project-image-slider";
import { apiGet, getAssetUrl, type ProjectData } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await apiGet<ProjectData>(`/projects/${slug}`).catch(() => null);

  return {
    title: `${project?.title ?? "Project"} | Atech`,
    description: project?.short_description ?? "Project details",
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await apiGet<ProjectData>(`/projects/${slug}`).catch(() => null);

  if (!project) {
    return <section className="container-shell py-12 text-muted">Project not found.</section>;
  }

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : typeof project.technologies === "string"
      ? project.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];
  const galleryUrls = (project.gallery_images ?? [])
    .map((image) => getAssetUrl(image))
    .filter((image): image is string => Boolean(image));
  const imageUrls = [
    getAssetUrl(project.cover_image),
    ...galleryUrls,
  ].filter((image): image is string => Boolean(image));

  return (
    <section className="container-shell py-14">
      <article className="surface-card p-8 md:p-10">
        <p className="eyebrow">Project detail</p>
        <h1 className="section-title mt-4">{project.title}</h1>
        <ProjectImageSlider images={imageUrls} title={project.title} />
        <div
          className="mt-6 max-w-3xl leading-8 text-muted [&>p]:mb-4"
          dangerouslySetInnerHTML={{ __html: project.full_description }}
        />
        {technologies.length ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>
        ) : null}
      </article>
    </section>
  );
}

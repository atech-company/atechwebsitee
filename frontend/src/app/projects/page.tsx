import Link from "next/link";
import type { Metadata } from "next";
import { apiGet, getAssetUrl, type ProjectData } from "@/lib/api";

export const metadata: Metadata = {
  title: "Projects | Atech",
  description: "Portfolio projects",
};

export default async function ProjectsPage() {
  const projects = await apiGet<ProjectData[]>("/projects").catch(() => []);

  return (
    <section className="container-shell space-y-8 py-14">
      <div className="surface-card p-8 md:p-10">
        <p className="eyebrow">Portfolio</p>
        <h1 className="section-title mt-4">Featured Projects</h1>
        <p className="mt-3 max-w-2xl text-muted">A curated portfolio of company websites, ecommerce builds, and content platforms.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const coverImageUrl = getAssetUrl(project.cover_image);

          return (
          <article key={project.slug} className="surface-card p-7">
            {coverImageUrl ? (
              <img
                src={coverImageUrl}
                alt={project.title}
                className="mb-4 h-52 w-full rounded-xl border border-white/10 object-cover"
                loading="lazy"
              />
            ) : (
              <div className="mb-4 flex h-52 w-full items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#0f1f35] via-[#111a2c] to-[#1c1f30] px-4 text-center text-sm font-medium text-white/75">
                {project.title}
              </div>
            )}
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{project.short_description}</p>
            <Link className="btn-outline mt-5" href={`/projects/${project.slug}`}>
              View details
            </Link>
          </article>
          );
        })}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { RotatingText } from "@/components/RotatingText";
import { ContactForm } from "@/components/contact-form";
import { HeroScene } from "@/components/hero-scene";
import { apiGet, type PageData, type ProjectData, type ServiceData } from "@/lib/api";

export const metadata: Metadata = {
  title: "Home | Atech",
  description: "Performance-first digital company platform.",
};

export default async function HomePage() {
  const page = await apiGet<PageData>("/pages/home").catch(() => null);
  const services = await apiGet<ServiceData[]>("/services").catch(() => []);
  const projects = await apiGet<ProjectData[]>("/projects").catch(() => []);

  return (
    <section className="pb-16">
      <div
        className="relative overflow-hidden border-y border-white/10"
        style={{
          backgroundImage: `
            linear-gradient(120deg, rgba(2,6,23,0.92) 20%, rgba(2,6,23,0.78) 45%, rgba(3,7,18,0.92) 100%),
            url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2200&q=80")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_right,rgba(168,85,247,0.16),transparent_22%)]" />
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute right-8 top-12 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-12 right-1/3 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />

        <div className="container-shell grid min-h-[82vh] items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.9fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-cyan-400">Premium software agency</p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-white md:text-6xl xl:text-7xl">
              Building Digital{" "}
              <span className="mt-2 block md:mt-0 md:inline">
                <RotatingText />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {page?.hero_subtitle ??
                "We craft premium software solutions that transform businesses and delight users. Experience the future of digital innovation."}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/projects" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[500px] lg:justify-end">
            <div className="absolute h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
            <div className="absolute right-10 top-14 h-44 w-44 rounded-full bg-violet-600/15 blur-3xl" />

            <div className="relative w-full max-w-[520px] rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(11,22,50,0.82),rgba(8,18,36,0.62),rgba(14,26,56,0.72))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[30px] border border-white/5" />
              <div className="relative overflow-hidden rounded-[24px] bg-[#020817]/60 p-4">
                <HeroScene />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-shell space-y-12 py-12">
        <div className="surface-card p-8 md:p-10">
          <p className="eyebrow">Why A TECH</p>
          <p className="mt-4 max-w-3xl leading-8 text-muted">
            {page?.hero_subtitle ??
              "Production-grade CMS platform with robust API architecture and premium UI."}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-white">120+</p>
              <p className="mt-2 text-sm text-muted">Projects delivered</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">99.9%</p>
              <p className="mt-2 text-sm text-muted">Platform reliability</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">24/7</p>
              <p className="mt-2 text-sm text-muted">Support coverage</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="section-title mt-3">What We Deliver</h2>
            </div>
            <Link className="btn-outline" href="/services">
              All services
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article key={service.slug} className="surface-card p-6">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {service.short_description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Projects</p>
              <h2 className="section-title mt-3">Featured Work</h2>
            </div>
            <Link className="btn-outline" href="/projects">
              View portfolio
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <article key={project.slug} className="surface-card p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {project.short_description}
                </p>
                <Link
                  className="mt-4 inline-block text-sm font-medium text-secondary"
                  href={`/projects/${project.slug}`}
                >
                  Explore case study
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.05fr_1fr]">
          <div className="surface-card p-8 md:p-10">
            <p className="eyebrow">Contact us</p>
            <h2 className="section-title mt-4">
              Let&apos;s turn your idea into a high-performance product.
            </h2>
            <p className="mt-4 leading-8 text-muted">
              Share your project scope, timeline, and goals. Our team will respond with a
              clear technical direction.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
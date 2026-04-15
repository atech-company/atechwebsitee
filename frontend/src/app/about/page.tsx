import type { Metadata } from "next";
import { apiGet, type PageData } from "@/lib/api";

export const metadata: Metadata = {
  title: "About | Atech",
  description: "About Atech company profile",
};

export default async function AboutPage() {
  const page = await apiGet<PageData>("/pages/about").catch(() => null);

  return (
    <section className="container-shell space-y-8 py-14">
      <div className="surface-card p-8 md:p-10">
        <p className="eyebrow">About us</p>
        <h1 className="section-title mt-4">{page?.title ?? "About Us"}</h1>
        <p className="mt-4 max-w-3xl leading-8 text-muted">
          {page?.content ?? "Company content is managed from Laravel CMS."}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="surface-card p-6">
          <h2 className="text-lg font-semibold">Product Thinking</h2>
          <p className="mt-2 text-sm text-muted">We align business goals and technical architecture from day one.</p>
        </article>
        <article className="surface-card p-6">
          <h2 className="text-lg font-semibold">Engineering Quality</h2>
          <p className="mt-2 text-sm text-muted">Maintainable systems with security-first backend and fast frontend delivery.</p>
        </article>
        <article className="surface-card p-6">
          <h2 className="text-lg font-semibold">Scale Ready</h2>
          <p className="mt-2 text-sm text-muted">Designed to support growth, performance, and long-term platform stability.</p>
        </article>
      </div>
    </section>
  );
}

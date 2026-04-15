import type { Metadata } from "next";
import { apiGet, type ServiceData } from "@/lib/api";

export const metadata: Metadata = {
  title: "Services | Atech",
  description: "Services powered by CMS API",
};

export default async function ServicesPage() {
  const services = await apiGet<ServiceData[]>("/services").catch(() => []);

  return (
    <section className="container-shell space-y-8 py-14">
      <div className="surface-card p-8 md:p-10">
        <p className="eyebrow">What we do</p>
        <h1 className="section-title mt-4">Services</h1>
        <p className="mt-3 max-w-2xl text-muted">Comprehensive solutions tailored to business growth and product quality.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="surface-card p-7">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{service.short_description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

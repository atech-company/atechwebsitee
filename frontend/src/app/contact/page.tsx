import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Atech",
  description: "Contact our team",
};

export default function ContactPage() {
  return (
    <section className="container-shell grid gap-6 py-14 md:grid-cols-[1.05fr_1fr]">
      <div className="surface-card p-8 md:p-10">
        <p className="eyebrow">Get in touch</p>
        <h1 className="section-title mt-4">Let&apos;s build your next product.</h1>
        <p className="mt-4 max-w-xl leading-8 text-muted">
          Tell us your goals and constraints. We will propose a technical direction focused on speed, quality, and scale.
        </p>
      </div>

      <form className="surface-card space-y-4 p-8">
        <input className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" placeholder="Your name" />
        <input className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" placeholder="Your email" type="email" />
        <input className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" placeholder="Subject" />
        <textarea className="h-32 w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" placeholder="Project details" />
        <button className="btn-primary w-full" type="button">
          Send message
        </button>
      </form>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Failed to submit form.");
      }

      setMessage("Your message has been sent successfully.");
      event.currentTarget.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="surface-card space-y-4 p-7 md:p-8" onSubmit={onSubmit}>
      <input name="name" className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" placeholder="Your name" required />
      <input name="email" className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" placeholder="Your email" type="email" required />
      <input name="subject" className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" placeholder="Subject" required />
      <textarea name="message" className="h-32 w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm" placeholder="Project details" required />
      <button className="btn-primary w-full disabled:opacity-70" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send message"}
      </button>
      {message ? <p className="text-sm text-secondary">{message}</p> : null}
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
    </form>
  );
}

"use client";

import { RotatingPhrases } from "@/components/RotatingPhrases";

export function HeroScene() {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(140deg,rgba(10,21,45,0.92),rgba(7,16,34,0.78),rgba(12,25,54,0.88))]">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="hero-orb-pulse absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
      <div className="hero-ring-float absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/20" />
      <div className="hero-ring-float-delayed absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.05),transparent_54%)]" />

      <div className="relative z-10 flex h-full min-h-[320px] flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/55">Digital Engineering</p>
        <h3 className="mt-3 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-5xl font-semibold tracking-[0.2em] text-transparent md:text-6xl">
          ATECH
        </h3>
        <div className="mt-5 min-h-[2.4rem] text-base font-medium md:text-xl">
          <RotatingPhrases />
        </div>
      </div>
    </div>
  );
}

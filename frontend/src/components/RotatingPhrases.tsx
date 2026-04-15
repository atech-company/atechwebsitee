"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Build Fast",
  "Launch Smart",
  "Scale Clean",
  "Design Better",
  "Engineer Growth",
  "Ship with Confidence",
  "Power Digital Innovation",
];

export function RotatingPhrases() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex min-w-[22ch] items-center justify-center" aria-live="polite" aria-atomic="true">
      <span key={PHRASES[index]} className="hero-phrase inline-block bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
        {PHRASES[index]}
      </span>
    </span>
  );
}

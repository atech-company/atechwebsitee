"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Build Fast.",
  "Launch Smart.",
  "Scale Clean.",
  "Innovate Continuously.",
  "Deliver Excellence.",
];

export function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-flex min-w-[20ch] items-baseline align-baseline sm:min-w-[21ch]"
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        key={PHRASES[index]}
        className="rotating-phrase bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
      >
        {PHRASES[index]}
      </span>
      <span className="ml-1 rotating-cursor text-primary" aria-hidden="true">
        |
      </span>
    </span>
  );
}

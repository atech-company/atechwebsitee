"use client";

import { useMemo, useState } from "react";

type ProjectImageSliderProps = {
  images: string[];
  title: string;
};

export function ProjectImageSlider({ images, title }: ProjectImageSliderProps) {
  const sanitized = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!sanitized.length) {
    return null;
  }

  const current = sanitized[activeIndex];
  const hasMultiple = sanitized.length > 1;

  const goNext = () => setActiveIndex((prev) => (prev + 1) % sanitized.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + sanitized.length) % sanitized.length);

  return (
    <div className="mt-6">
      <div className="relative">
        <img src={current} alt={`${title} image ${activeIndex + 1}`} className="h-72 w-full rounded-xl border border-white/10 object-cover md:h-96" />
        <button
          type="button"
          onClick={goPrev}
          disabled={!hasMultiple}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-xs text-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous image"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!hasMultiple}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-xs text-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next image"
        >
          Next
        </button>
      </div>

      {sanitized.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {sanitized.map((image, index) => (
            <button
              type="button"
              key={image + index}
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-md border ${index === activeIndex ? "border-secondary" : "border-white/15"}`}
              aria-label={`Go to image ${index + 1}`}
            >
              <img src={image} alt={`${title} thumbnail ${index + 1}`} className="h-14 w-20 object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

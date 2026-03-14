"use client";

import { useEffect, useRef, useState } from "react";

type Tab = { id: string; label: string; };

interface TextTabProps {
  tabs: Tab[];
  value: string;
  onChange: (v: string) => void;
}

export default function TextTab({
  tabs,
  value,
  onChange,
}: TextTabProps) {

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // Controls visibility of left/right fade hints
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Calculate whether the current location is at the edges
  const updateFadeVisibility = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    const atLeftEdge = scrollLeft <= 0;
    const atRightEdge = scrollLeft + clientWidth >= scrollWidth - 1;

    setShowLeftFade(!atLeftEdge);
    setShowRightFade(!atRightEdge);
  };

  // Listen to scroll events
  useEffect(() => {

    const el = scrollerRef.current;
    if (!el) return;

    // Initial scroll fade setting
    updateFadeVisibility();

    el.addEventListener("scroll", updateFadeVisibility, { passive: true });

    return () => el.removeEventListener("scroll", updateFadeVisibility);

  }, [tabs.length]);

  // Auto-scroll the active tab into view when value changes
  useEffect(() => {

    const el = scrollerRef.current;
    if (!el) return;

    const activeBtn = el.querySelector<HTMLButtonElement>(`button[data-tab="${value}"]`);
    if (!activeBtn) return;

    // Ensure the active tab is visible and roughly centered
    activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    requestAnimationFrame(updateFadeVisibility);
  }, [value]);

  return (
    <div className="border-b border-zinc-200 bg-white">
      <div className="relative overflow-hidden">
        <div
          ref={scrollerRef}
          className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max gap-6 px-4">
            {tabs.map((t) =>
              <button
                key={t.id}
                type="button"
                data-tab={t.id}
                onClick={() => onChange(t.id)}
                className={`relative py-3 text-sm whitespace-nowrap transition-colors ${t.id === value ? "text-emerald-600 font-semibold" : "text-zinc-500 hover:text-zinc-900"}`}
              >
                {t.label}

                {/* underline */}
                <span className={`absolute left-0 bottom-0 h-0.5 w-full rounded-full transition-opacity ${t.id === value ? "bg-emerald-500 opacity-100" : "opacity-0"}`} />
              </button>
            )}
          </div>
        </div>

        {/* Left fade */}
        <div className={`pointer-events-none absolute left-0 top-0 h-full w-10 bg-linear-to-r from-white to-white/0 transition-opacity ${showLeftFade ? "opacity-100" : "opacity-0"}`} />
        {/* Right fade */}
        <div className={`pointer-events-none absolute right-0 top-0 h-full w-10 bg-linear-to-l from-white to-white/0 transition-opacity ${showRightFade ? "opacity-100" : "opacity-0"}`} />
      </div>
    </div>
  );
}
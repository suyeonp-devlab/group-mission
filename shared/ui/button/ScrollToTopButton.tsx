"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

interface ScrollToTopButtonProps {
  showAfter?: number;
  bottomClassName?: string;
}

export default function ScrollToTopButton({
  showAfter = 200,
  bottomClassName = "bottom-24",
}: ScrollToTopButtonProps) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => setIsVisible(window.scrollY > showAfter);

    // Initialize visibility state based on current scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={
        `fixed right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-lg ring-1 ring-zinc-300/70 transition-all duration-200 active:scale-95
        ${isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}
        ${bottomClassName}`
      }
    >
      <ChevronUp size={18} strokeWidth={2.5} className="text-emerald-800" />
    </button>
  );
}
"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface PromoBannerProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export default function PromoBanner({
  children,
  className = "",
  onClose,
}: PromoBannerProps) {

  const [open, setOpen] = useState(true);
  const [render, setRender] = useState(true);

  // Unmount component after closing animation ends
  useEffect(() => {

    if(open) return;

    const t = window.setTimeout(() => {
      setRender(false);
      onClose?.();
    }, 320); // should match transition duration

    return () => window.clearTimeout(t);

  }, [open, onClose]);

  if (!render) return null;

  return (
    <div className={`relative overflow-hidden transition-all duration-300 ease-out bg-emerald-800 text-white ${className} ${open ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}`}>
      <div className="px-4 py-4 pr-10">{children}</div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close"
        className="absolute right-3 top-1 h-8 w-8 grid place-items-center hover:opacity-90 transition"
      >
        <X size={18} className="text-white" />
      </button>
    </div>
  );
}
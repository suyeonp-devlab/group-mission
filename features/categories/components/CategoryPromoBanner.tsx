"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface CategoryPromoBannerProps {
  onClose?: () => void;
}

export default function CategoryPromoBanner({
  onClose,
}: CategoryPromoBannerProps) {

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
    <div className={`relative overflow-hidden transition-all duration-300 ease-out bg-emerald-800 text-white mt-4 rounded-lg shadow-sm ${open ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}`}>
      <div className="px-4 py-4 pr-10">
        <p className="text-xs">마음에 드는 그룹이 없다면,</p>
        <p className="mt-2 text-xs">
          직접 만들어서 함께 시작해볼까요?
          <Link href="/app/groups/new" className="relative ml-2.5 font-semibold text-yellow-200 hover:text-yellow-100 transition-colors after:absolute after:left-0 after:bottom-px after:h-1.25 after:w-full after:bg-yellow-200/35 after:-z-10 after:rounded-sm">
            그룹 만들기
          </Link>
        </p>
      </div>

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
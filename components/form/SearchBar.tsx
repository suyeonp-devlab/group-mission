"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  onDebouncedChange: (v: string) => void;
  debounceMs?: number;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  onDebouncedChange,
  debounceMs = 300,
  placeholder = "검색어 입력"
}: SearchBarProps) {

  const router = useRouter();

  const timerRef = useRef<number | null>(null);
  const didMountRef = useRef(false);

  const hasValue = value.trim().length > 0;

  // Debounce
  useEffect(() => {

    // Skip initial mount to prevent empty query triggering navigation loops
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    if(timerRef.current) window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      onDebouncedChange(value);
    }, debounceMs);

    return () => {
      if(timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [value, debounceMs, onDebouncedChange]);

  const clear = () => {
    onChange("");
    onDebouncedChange("");
  };

  const cancel = () => {
    onChange("");
    onDebouncedChange("");
    router.back();
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Search size={16} className="text-zinc-500" />
        </div>

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-10 w-full rounded-lg border border-zinc-200 bg-white pl-11 pr-12 text-sm text-zinc-900 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
        />

        {/* Clear button: shown only when input has value */}
        {hasValue && (
          <button
            type="button"
            onClick={clear}
            aria-label="Clear"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 grid place-items-center"
          >
            <X size={16} className="text-zinc-500" />
          </button>
        )}
      </div>

      {/* Cancel button: shown only when input has value */}
      {hasValue && (
        <button
          type="button"
          onClick={cancel}
          aria-label="Cancel"
          className="h-10 px-4 rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 active:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-300"
        >
          취소
        </button>
      )}
    </div>
  );
}
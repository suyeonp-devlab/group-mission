"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { normalizePin } from "@/lib/commonUtil";

interface CodeInputProps {
  value: string;
  onChange: (next: string) => void;
  onBlur?: () => void;
  maxLength?: number;
}

/**
 *  Flow:
 *  1. A single hidden input handles the actual keyboard input.
 *  2. The input value is normalized to digits-only and limited to maxLength.
 *  3. The normalized value is split into an array to render visual boxes.
 *  4. Clicking anywhere on the boxes focuses the hidden input.
 *  5. While focused, only the active digit box is visually highlighted.
 */
export default function CodeInput({
  value,
  onChange,
  onBlur,
  maxLength = 6
}: CodeInputProps) {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const digits = useMemo(() => {
    const v = normalizePin(value, maxLength);
    return Array.from({ length: maxLength }, (_, i) => v[i] ?? "");
  }, [value, maxLength]);

  // normalize initial value to digits-only
  useEffect(() => {
    const normalized = normalizePin(value, maxLength);
    if (normalized !== value) onChange(normalized);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const focus = () => inputRef.current?.focus();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // allow navigation keys and digits only
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
    if (allowed.includes(e.key)) return;

    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  return (
    <div className="text-left">
      <label className="mb-2 block text-sm font-medium text-zinc-800">
        회원가입 PIN 코드 <span className="text-xs text-zinc-500">(숫자 {maxLength}자리)</span>
      </label>

      {/* Wrapper */}
      <div onClick={focus} className="relative w-full cursor-text">
        {/* Hidden real input */}
        <input
          ref={inputRef}
          value={normalizePin(value, maxLength)}
          onChange={(e) => onChange(normalizePin(e.target.value, maxLength))}
          onBlur={() => {setIsFocused(false); onBlur?.();}}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          inputMode="numeric"
          autoComplete="one-time-code"
          className="absolute inset-0 h-full w-full opacity-0 caret-transparent"
        />

        {/* Code boxes */}
        <div className="grid grid-cols-6 gap-2">
          {digits.map((d, idx) => (
            <div
              key={idx}
              className={[
                "flex h-12 items-center justify-center rounded-lg border bg-white text-lg font-semibold transition",
                isFocused && idx === digits.findIndex((x) => x === "") ? "border-emerald-300 border-2" : "border-zinc-200"
              ].join(" ")}
            >
              <span className="text-zinc-900">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
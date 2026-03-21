import { Help } from "@/features/support/types/support.type";
import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqCardProps {
  faq: Help;
}

export default function FaqCard({ faq }: FaqCardProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-zinc-100">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-start justify-between gap-3 px-2 py-4 text-left"
      >
        <div className="flex min-w-0 flex-1 items-start gap-2">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-emerald-600">
            Q.
          </span>
          <p className="break-words text-sm font-semibold leading-6 text-zinc-700">
            {faq.title}
          </p>
        </div>

        <span
          className="mt-1 shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown className="h-4 w-4 text-zinc-400" />
        </span>
      </button>

      <div
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef} className="w-full bg-zinc-50 px-2 py-4">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-sm font-bold text-zinc-500">
              A.
            </span>
            <p className="break-words text-sm leading-6 text-zinc-700">
              {faq.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
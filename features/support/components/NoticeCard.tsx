import { Help } from "@/features/support/types/support.type";
import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { formatDate } from "@/shared/lib/date";

interface NoticeCardProps {
  notice: Help;
}

export default function NoticeCard({ notice }: NoticeCardProps) {
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
          {notice.isImportant && (
            <span className="mt-0.5 shrink-0 rounded-md bg-rose-50 px-1.5 py-0.5 text-[11px] font-semibold text-rose-600">
              중요
            </span>
          )}

          <p className="break-words text-sm font-semibold leading-6 text-zinc-700">
            {notice.title}
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
          <p className="break-words text-sm leading-6 text-zinc-700">
            {notice.content}
          </p>

          <p className="mt-2 w-full text-right text-xs text-zinc-400 pr-1">
            {formatDate(notice.createdAt, "yyyy.M.d")}
          </p>
        </div>
      </div>
    </div>
  );
}
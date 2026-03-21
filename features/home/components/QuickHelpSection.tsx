import Link from "next/link";
import { Megaphone, CircleHelp, ChevronRight } from "lucide-react";

export default function QuickHelpSection() {
  return (
    <section className="mt-8">
      <div className="mb-3">
        <h2 className="text-[15px] font-semibold tracking-tight text-zinc-900">
          도움이 필요하신가요?
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          자주 찾는 안내를 빠르게 확인해보세요
        </p>
      </div>

      <div className="divide-y divide-zinc-100 overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200">
        {/* Notice */}
        <Link href="/app/support?tab=notice" className="flex items-center justify-between px-4 py-4 transition active:scale-[0.98]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <Megaphone size={16} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900">공지사항</p>
              <p className="mt-0.5 text-xs text-zinc-500">새로운 기능과 소식을 확인해보세요</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-zinc-400" />
        </Link>

        <div className="mx-4 h-px bg-zinc-200/70" />

        {/* FAQ */}
        <Link href="/app/support?tab=faq" className="flex items-center justify-between px-4 py-4 transition active:scale-[0.98]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CircleHelp size={16} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900">자주 묻는 질문</p>
              <p className="mt-0.5 text-xs text-zinc-500">궁금한 내용을 빠르게 찾아보세요</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-zinc-400" />
        </Link>
      </div>
    </section>
  );
}
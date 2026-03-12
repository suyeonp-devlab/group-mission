"use client";

import { Group, GROUP_BADGE_LABEL, GROUP_FREQUENCY_LABEL, GroupBadge } from "@/features/groups/group.type";
import { Users } from "lucide-react";

const BADGE_CLASS: Record<GroupBadge, string> = {
  ACTIVE: "bg-violet-50 text-violet-700 ring-1 ring-violet-100",
  SUCCESS: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
  TRENDING: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
  CONSISTENT: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
};

interface GroupCardProps {
  group: Group;
}

export default function GroupCard({ group } : GroupCardProps){

  const isEnd = group.memberCount >= group.maxMembers;

  return (
    <div className={`group relative rounded-2xl border border-zinc-200/70 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.99] ${isEnd ? "opacity-80 cursor-not-allowed" : "cursor-pointer"}`}>
      {/* Overlay */}
      {isEnd && <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.035)_0px,rgba(0,0,0,0.035)_16px,transparent_16px,transparent_32px)] bg-zinc-50/60 backdrop-blur-[1px]" />}

      {/* Top badge */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center rounded-sm bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-sky-700 ring-1 ring-sky-100">
            {GROUP_FREQUENCY_LABEL[group.frequency]}
          </span>

          {/* group badges */}
          {group.badges.map((b) => (
            <span key={b} className={`inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-semibold ring-1 ${BADGE_CLASS[b]}`}>
              {GROUP_BADGE_LABEL[b]}
            </span>
          ))}
        </div>

        <span className={`shrink-0 inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-semibold ring-1 ${isEnd ? "bg-zinc-100 text-zinc-600 ring-zinc-200" : "bg-zinc-900/5 text-zinc-800 ring-zinc-200"}`}>
          {isEnd ? "모집 마감" : "모집중"}
        </span>
      </div>

      {/* Group abstract */}
      <h3 className="relative mt-3.5 text-[15px] font-semibold tracking-tight text-zinc-900">
        {group.title}
      </h3>

      <p className="relative mt-1 text-xs text-zinc-500 line-clamp-1">
        {group.description}
      </p>

      {/* Divider */}
      <div className="relative my-2.5 border-t border-zinc-100" />

      {/* Group information */}
      <div className="relative flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1 text-zinc-500">
          <Users size={16} className="text-zinc-500 shrink-0" />
          {group.memberCount} / {group.maxMembers}명
        </span>

        <span className={`font-semibold ${isEnd ? "text-zinc-400" : "text-emerald-600"}`}>
          {isEnd ? "" : `잔여 ${Math.max(0, group.maxMembers - group.memberCount)}명`}
        </span>
      </div>
    </div>
  );
}
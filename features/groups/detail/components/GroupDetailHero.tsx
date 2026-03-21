"use client";

import { Group, GROUP_FREQUENCY_LABEL } from "@/features/groups/list/types/group.type";
import { Calendar, CalendarDays, Crown, Folder, Users } from "lucide-react";
import { formatDate } from "@/shared/lib/date";

interface GroupDetailHeroProps {
  group: Group;
  isMember: boolean;
  isEnd: boolean;
}

export default function GroupDetailHero({
  group,
  isMember,
  isEnd
}: GroupDetailHeroProps) {

  const ribbonLabel = isMember ? "참여중" : isEnd ? "모집 마감" : "모집중";
  const ribbonClass = isMember ? "bg-sky-500/80" : isEnd ? "bg-zinc-400/80" : "bg-emerald-500/80";

  return (
    <section className="overflow-hidden rounded-3xl bg-white ring-1 ring-zinc-200">
      {/* Ribbon */}
      <div className="px-4 pt-4">
        <div className={`-ml-4 inline-flex h-6 items-center rounded-r-full px-4 shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${ribbonClass}`}>
          <span className="text-[11px] font-semibold text-white/90">
            {ribbonLabel}
          </span>
        </div>
      </div>

      <div className="px-4 pb-4 pt-5">
        {/* Group meta */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
              <Calendar size={12} />
              <span className="mt-0.5">{formatDate(group.createdAt, "yyyy년 M월 d일")} 시작</span>
            </div>

            <h2 className="mt-2 text-xl font-bold leading-7 text-zinc-900">
              {group.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {group.description}
            </p>
          </div>
        </div>

        {/* Group Info */}
        <div className="mt-4 divide-y divide-zinc-100 rounded-xl bg-zinc-50 ring-1 ring-zinc-100">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Users size={16} />
              <span>참여 인원</span>
            </div>
            <span className="text-sm font-semibold text-zinc-700">
              {group.memberCount} / {group.maxMembers}명
            </span>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <CalendarDays size={16} />
              <span>운영 주기</span>
            </div>
            <span className="text-sm font-semibold text-zinc-700">
              {GROUP_FREQUENCY_LABEL[group.frequency]}
            </span>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Folder size={16} className="text-emerald-500" />
              <span>카테고리</span>
            </div>
            <span className="text-sm font-semibold text-zinc-700">
              {group.category.label}
            </span>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Crown size={16} className="text-amber-500" />
              <span>방장</span>
            </div>
            <span className="text-sm font-semibold text-zinc-700">
              {group.owner}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
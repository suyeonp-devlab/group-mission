import Link from "next/link";
import { getCategoryThemeColor } from "@/features/categories/utils/util";
import { CSSProperties } from "react";
import { MyGroup } from "@/features/groups/my-groups/types/type";

interface MyGroupCardProps {
  group: MyGroup;
}

export default function MyGroupCard({ group }: MyGroupCardProps) {

  const isMyDone = group.myMissionStatus === "DONE";
  const isGroupDone = group.groupMissionStatus === "DONE";

  return (
    <Link
      href={`/app/groups/${group.id}`}
      style={{"--category-color": getCategoryThemeColor(group.category)} as CSSProperties}
      className="relative block rounded-2xl bg-white px-4 py-3 ring-1 ring-zinc-200 active:bg-zinc-50 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-3 before:rounded-l-full before:content-[''] before:bg-(--category-color)"
    >
      <div className="flex items-start justify-between gap-3 pl-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-900">
            {group.title}
          </p>

          <div className="mt-2 flex flex-wrap text-[11px] text-zinc-500 [&>span+span]:before:mx-1 [&>span+span]:before:text-zinc-400 [&>span+span]:before:content-['•']">
            <span>전체 {group.memberCount}명</span>
            <span>완료 {group.completeMember}명</span>
            <span>진행중 {group.memberCount - group.completeMember}명</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {/* My mission stamp */}
          <span className={`flex h-12 w-12 items-center justify-center rounded-full -rotate-12 text-[10px] font-extrabold leading-3.5 ${isMyDone ? "border-2 border-emerald-400 bg-emerald-50 text-emerald-600" : "border border-zinc-300 bg-white text-zinc-400"}`}>
            <span className="text-center">
              내 미션<br />
              {isMyDone ? "완료" : "진행중"}
            </span>
          </span>

          {/* Group mission stamp */}
          <span className={`flex h-12 w-12 items-center justify-center rounded-full -rotate-12 text-[10px] font-extrabold leading-3.5 ${isGroupDone ? "border-2 border-blue-400 bg-blue-50 text-blue-600" : "border border-zinc-300 bg-white text-zinc-400"}`}>
            <span className="text-center">
              그룹<br />
              {isGroupDone ? "완료" : "진행중"}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
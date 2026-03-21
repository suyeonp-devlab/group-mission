import { Group, GROUP_FREQUENCY_LABEL, GroupFrequency } from "@/features/groups/list/types/type";
import Link from "next/link";
import { Users } from "lucide-react";

interface GroupShortcutCardProps {
  group: Group;
}

const FREQUENCY_CLASS: Record<GroupFrequency, string> = {
  DAILY: "bg-amber-50 text-amber-700 ring-amber-100",
  WEEKLY: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  MONTHLY: "bg-rose-50 text-rose-700 ring-rose-100",
};

export default function GroupShortcutCard({ group }: GroupShortcutCardProps) {

  const isEnd = group.memberCount >= group.maxMembers;
  const remainCount = Math.max(0, group.maxMembers - group.memberCount);

  return (
    <Link
      href={`/app/groups/${group.id}`}
      className="block py-4 transition hover:bg-zinc-50 active:scale-[0.99]"
    >
      <div className="min-w-0">
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className={`inline-flex shrink-0 rounded-sm px-1.5 py-0.5 text-[10px] font-semibold ring-1 ${FREQUENCY_CLASS[group.frequency]}`}>
            {GROUP_FREQUENCY_LABEL[group.frequency]}
          </span>
          <p className="flex-1 truncate text-sm font-semibold text-zinc-900">
            {group.title}
          </p>

          <span className={`shrink-0 text-[11px] font-medium ${isEnd ? "text-zinc-400" : "text-emerald-600"}`}>
            {isEnd ? "모집 마감" : `잔여 ${remainCount}명`}
          </span>
        </div>

        {/* Description */}
        <p className="mt-2 line-clamp-1 text-xs text-zinc-500">
          {group.description}
        </p>

        {/* Members */}
        <div className="mt-2 flex items-center gap-1 text-xs text-zinc-500">
          <Users size={14} className="shrink-0" />
          {group.memberCount}명 참여 중
        </div>
      </div>
    </Link>
  );
}

import { Group } from "@/features/groups/list/types/group.type";
import GroupShortcutCard from "@/features/groups/list/components/GroupShortcutCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface GroupSectionProps {
  groups: Group[];
}

export default function GroupSection({ groups } : GroupSectionProps){

  return (
    <section className="mt-8">
      <div className="mb-3">
        <h2 className="text-[15px] font-semibold tracking-tight text-zinc-900">
          지금 인기 있는 그룹
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          지금 참여가 활발한 그룹을 모아봤어요
        </p>
      </div>

      <div className="overflow-hidden bg-white border-t border-b border-zinc-100 divide-y divide-zinc-100">
        {groups.map((g) => (
          <GroupShortcutCard key={g.id} group={g} />
        ))}

        <Link
          href="/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1"
          className="flex items-center justify-center gap-1 py-3 text-sm font-semibold text-zinc-500 bg-zinc-50 border-t border-zinc-100 active:bg-zinc-100"
        >
          인기 그룹 더보기
          <ChevronRight size={16} className="text-zinc-400" />
        </Link>
      </div>
    </section>
  );
}
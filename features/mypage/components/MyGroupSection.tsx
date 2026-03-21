import Link from "next/link";
import { ChevronRight, Inbox } from "lucide-react";
import MyGroupCard from "@/features/groups/my-groups/components/MyGroupCard";
import { MyGroup } from "@/features/groups/my-groups/types/type";

interface MyGroupsSection {
  myGroups: MyGroup[];
  totalCount: number;
}

export default function MyGroupsSection({
  myGroups,
  totalCount
} : MyGroupsSection) {

  const hasGroups = totalCount > 0;

  return (
    <section className="mt-5 py-2">
      <h2 className="text-base font-semibold text-zinc-900">
        내 그룹
        {hasGroups && (
          <span className="text-sm font-medium text-zinc-400 pl-2">
            ({totalCount}개 참여 중)
          </span>
        )}
      </h2>

      {/* Empty my groups */}
      {!hasGroups && (
        <Link
          href="/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1"
          className="mt-3 flex items-center gap-4 rounded-xl bg-zinc-50 px-3 py-3 ring-1 ring-zinc-200 transition hover:bg-zinc-100 active:bg-zinc-100"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
            <Inbox size={18} className="text-emerald-500" />
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-zinc-700">
              참여 중인 그룹이 없어요
            </p>
            <p className="mt-0.5 text-xs text-zinc-500">
              새로운 그룹을 찾아 미션을 시작해보세요
            </p>
          </div>
        </Link>
      )}

      {/* Has my groups */}
      {hasGroups && (
        <div className="mt-4 space-y-3">
          {myGroups.map((g) => (
            <MyGroupCard key={g.id} group={g} />
          ))}

          <Link
            href="/app/groups"
            className="mt-2 flex w-full items-center justify-center gap-1 rounded-md bg-zinc-50 py-3 text-sm font-semibold text-zinc-500 ring-1 ring-zinc-200 active:bg-zinc-100"
          >
            자세히 보기
            <ChevronRight size={16} className="text-zinc-400" />
          </Link>
        </div>
      )}
    </section>
  );
}
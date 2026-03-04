"use client";

import { Group } from "@/features/groups/group.type";
import SortSelect from "@/components/form/SortSelect";
import { SortValue } from "@/features/ui/sort.constant";
import GroupCard from "@/features/groups/GroupCard";

interface GroupExplorerProps {
  groups: Group[];
  sort: SortValue<"group">;
  onChangeSort: (v: SortValue<"group">) => void;
  available: "0" | "1";
  onToggleAvailable: (v: "0" | "1") => void;
}

export default function GroupExplorer({
  groups,
  sort,
  onChangeSort,
  available,
  onToggleAvailable
} : GroupExplorerProps){

  const hasGroups = groups.length > 0;

  return (
    <section className="mt-4">
      {/* No search results */}
      {!hasGroups && (
        <div className="px-4 py-10 text-center text-sm text-zinc-500">
          조회된 그룹이 없습니다.
        </div>
      )}

      {/* Has search results */}
      {hasGroups && (
        <>
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-3">
            <label className="inline-flex items-center gap-2 text-xs text-zinc-700 pl-2">
              <input
                type="checkbox"
                checked={available === "1"}
                onChange={(e) =>
                  onToggleAvailable(e.target.checked ? "1" : "0")}
                className="h-4 w-4 rounded border-zinc-300 focus:ring-emerald-100 -mt-0.5"
              />
              참여 가능한 그룹만 보기
            </label>

            {/* Sort option */}
            <SortSelect sortType="group" value={sort} onChange={onChangeSort} />
          </div>

          {/* Group list */}
          <div className="mt-5 space-y-3 pb-6">
            {groups.map((g) => (
              <GroupCard key={g.id} group={g} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
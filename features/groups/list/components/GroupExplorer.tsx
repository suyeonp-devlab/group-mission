"use client";

import { Group } from "@/features/groups/list/types/type";
import SortSelect from "@/shared/ui/form/SortSelect";
import { SortValue } from "@/shared/config/sort";
import GroupCard from "@/features/groups/list/components/GroupCard";
import { useEffect, useRef } from "react";

interface GroupExplorerProps {
  groups: Group[];
  hasMore: boolean;
  onLoadMore: () => void;
  sort: SortValue<"group">;
  onChangeSort: (v: SortValue<"group">) => void;
  available: "0" | "1";
  onToggleAvailable: (v: "0" | "1") => void;
}

export default function GroupExplorer({
  groups,
  hasMore,
  onLoadMore,
  sort,
  onChangeSort,
  available,
  onToggleAvailable,
} : GroupExplorerProps){

  const hasGroups = groups.length > 0;

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll
  useEffect(() => {
    const target = sentinelRef.current;
    if (!target || !hasMore) return;

    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        onLoadMore();
      },
      { root: null, rootMargin: "100px", threshold: 0 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [hasMore, onLoadMore]);

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
          <div className="mt-5 space-y-3">
            {groups.map((g) => (
              <GroupCard key={g.id} group={g} />
            ))}
          </div>

          {/* Control infinite scroll */}
          {hasMore && <div ref={sentinelRef} className="h-8" />}
        </>
      )}
    </section>
  );
}
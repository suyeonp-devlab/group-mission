"use client";

import { Category } from "@/features/categories/category.type";
import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "@/components/form/SearchBar";
import PromoBanner from "@/components/banner/PromoBanner";
import TextTab from "@/components/tab/TextTab";
import GroupExplorer from "@/features/groups/GroupExplorer";
import { GetGroupsRequest, Group } from "@/features/groups/group.type";
import { SortValue } from "@/features/ui/sort.constant";
import { normalizeGetGroupsRequest } from "@/features/groups/groups.normalize";
import { getGroups } from "@/features/groups/groups.api";

interface CategoryClientProps {
  categories: Category[];
  selectedCategory: string;
  initialQuery: string;
  groups: Group[];
  totalGroupCount: number;
  selectedSort: SortValue<"group">;
  initialAvailable: "0" | "1";
}

export default function CategoryClient({
  categories,
  selectedCategory,
  initialQuery,
  groups,
  totalGroupCount,
  selectedSort,
  initialAvailable
} : CategoryClientProps){

  const router = useRouter();
  const sp = useSearchParams();

  const [q, setQ] = useState(initialQuery);
  const [viewGroups, setViewGroups] = useState(groups);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(totalGroupCount);

  const hasMore = viewGroups.length < totalCount;

  const replaceParams = (next: GetGroupsRequest) => {

    const params = new URLSearchParams(sp.toString());

    if (next.categoryId !== undefined) params.set("categoryId", next.categoryId);
    if (next.q !== undefined) params.set("q", next.q);
    if (next.sort !== undefined) params.set("sort", next.sort);
    if (next.available !== undefined) params.set("available", next.available);

    const nextQuery = params.toString();
    const currentQuery = sp.toString();
    if (nextQuery === currentQuery) return;

    // Use replace to avoid stacking browser history on every small change.
    router.replace(`/app/categories?${nextQuery}`);

    // Scroll to top when the list is reset to the first page
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleLoadMore = useCallback(async () => {

    if (!hasMore) return;

    const nextPage = page + 1;
    const params = Object.fromEntries(sp.entries());
    const normalized = normalizeGetGroupsRequest({ ...params, page: nextPage });

    // TODO 서버 연동
    const response = getGroups(normalized);
    setViewGroups((prev) => [...prev, ...response.items]);
    setPage(nextPage);
    setTotalCount(response.totalCount);
  }, [hasMore, page, sp]);

  return (
    <div className="bg-white">
      {/* Search */}
      <SearchBar
        value={q}
        onChange={setQ}
        onDebouncedChange={(v) => replaceParams({ q: v })}
        debounceMs={350}
        placeholder="그룹 이름으로 검색해보세요."
      />

      {/* Top Banner */}
      <PromoBanner className="mt-4 rounded-lg shadow-sm">
        <p className="text-xs">마음에 드는 그룹이 없다면,</p>
        <p className="mt-2 text-xs">
          직접 만들어서 함께 시작해볼까요?
          <button
            type="button"
            onClick={() => router.push("/app/groups/new")}
            className="relative ml-2.5 font-semibold text-yellow-200 hover:text-yellow-100 transition-colors after:absolute after:left-0 after:bottom-px after:h-1.25 after:w-full after:bg-yellow-200/35 after:-z-10 after:rounded-sm"
          >
            그룹 만들기
          </button>
        </p>
      </PromoBanner>

      {/* Categories Tab */}
      <div className="mt-3">
        <TextTab
          tabs={categories}
          value={selectedCategory}
          onChange={(v) => replaceParams({ categoryId: v })}
        />
      </div>

      {/* Group List */}
      <div className="mt-3">
        <GroupExplorer
          groups={viewGroups}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
          sort={selectedSort}
          onChangeSort={(v) => replaceParams({ sort: v })}
          available={initialAvailable}
          onToggleAvailable={(v) => replaceParams({ available: v })}
        />
      </div>
    </div>
  );
}
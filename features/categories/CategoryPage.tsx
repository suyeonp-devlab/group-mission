"use client";

import { Category } from "@/features/categories/types/category.type";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "@/shared/ui/form/SearchBar";
import CategoryPromoBanner from "@/features/categories/components/CategoryPromoBanner";
import ScrollTab from "@/shared/ui/tab/ScrollTab";
import GroupExplorer from "@/features/groups/list/components/GroupExplorer";
import { GetGroupsRequest, Group } from "@/features/groups/list/types/group.type";
import { SortValue } from "@/shared/config/sort";
import { normalizeGetGroupsRequest } from "@/features/groups/list/utils/group.normalize";
import { getGroups } from "@/features/groups/list/api/group.api";
import ScrollToTopButton from "@/shared/ui/button/ScrollToTopButton";

interface CategoryPageProps {
  categories: Category[];
  selectedCategory: string;
  initialQuery: string;
  groups: Group[];
  totalGroupCount: number;
  selectedSort: SortValue<"group">;
  initialAvailable: "0" | "1";
}

export default function CategoryPage({
  categories,
  selectedCategory,
  initialQuery,
  groups,
  totalGroupCount,
  selectedSort,
  initialAvailable
} : CategoryPageProps){

  const router = useRouter();
  const sp = useSearchParams();

  const [q, setQ] = useState(initialQuery);
  const [viewGroups, setViewGroups] = useState(groups);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(totalGroupCount);

  useEffect(() => {
    setQ(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    setViewGroups(groups);
    setPage(1);
    setTotalCount(totalGroupCount);
  }, [groups, totalGroupCount]);

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
      <CategoryPromoBanner />

      {/* Categories Tab */}
      <div className="mt-3">
        <ScrollTab
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

      {/* Scroll top button */}
      <ScrollToTopButton />
    </div>
  );
}
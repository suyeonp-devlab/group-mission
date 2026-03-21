"use client";

import { GetHelpRequest, Help, SupportType } from "@/features/support/types/support.type";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { normalizeGetHelpRequest } from "@/features/support/utils/support.normalize";
import { getHelps } from "@/features/support/api/support.api";
import SegmentedTab from "@/shared/ui/tab/SegmentedTab";
import ScrollToTopButton from "@/shared/ui/button/ScrollToTopButton";
import SupportExplorer from "@/features/support/components/SupportExplorer";

interface SupportPageProps {
  selectedTab: SupportType;
  helps: Help[];
  totalHelpCount: number;
}

const HELP_TABS = [
  {id: "notice", label: "공지사항"},
  {id: "faq", label: "FAQ"}
] as const;

export default function SupportPage({
  selectedTab,
  helps,
  totalHelpCount
} : SupportPageProps){

  const router = useRouter();
  const sp = useSearchParams();

  const [viewHelps, setViewHelps] = useState(helps);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(totalHelpCount);

  const hasMore = viewHelps.length < totalCount;

  const replaceParams = (next: GetHelpRequest) => {

    const params = new URLSearchParams(sp.toString());

    if (next.tab !== undefined) params.set("tab", next.tab);

    const nextQuery = params.toString();
    const currentQuery = sp.toString();
    if (nextQuery === currentQuery) return;

    // Use replace to avoid stacking browser history on every small change.
    router.replace(`/app/support?${nextQuery}`);

    // Scroll to top when the list is reset to the first page
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleLoadMore = useCallback(async () => {

    if (!hasMore) return;

    const nextPage = page + 1;
    const params = Object.fromEntries(sp.entries());
    const normalized = normalizeGetHelpRequest({ ...params, page: nextPage });

    // TODO 서버 연동
    const response = getHelps(normalized);
    setViewHelps((prev) => [...prev, ...response.items]);
    setPage(nextPage);
    setTotalCount(response.totalCount);
  }, [hasMore, page, sp]);

  return (
    <div className="bg-white">
      {/* Tab */}
      <div className="mt-4">
        <SegmentedTab
          tabs={HELP_TABS}
          value={selectedTab}
          onChange={(v) => replaceParams({ tab: v })}
        />
      </div>

      {/* Help List */}
      <div className="mt-3">
        <SupportExplorer
          helps={viewHelps}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
          selectedTab={selectedTab}
        />
      </div>

      {/* Scroll top button */}
      <ScrollToTopButton />
    </div>
  );
}
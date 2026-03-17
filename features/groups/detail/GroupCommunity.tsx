"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Community } from "@/features/groups/detail/group.detail.type";
import { getGroupCommunities } from "@/features/groups/detail/group.detail.api";
import { COMMUNITY_PAGE_SIZE } from "@/features/groups/detail/group.detail.normalize";
import GroupCommunityCard from "@/features/groups/detail/GroupCommunityCard";
import GroupNoticeCard from "@/features/groups/detail/GroupNoticeCard";

interface GroupCommunityProps {
  groupId: string;
}

export default function GroupCommunity({ groupId }: GroupCommunityProps) {

  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [viewCommunities, setViewCommunities] = useState<Community[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const hasCommunities = viewCommunities.length > 0;
  const hasMore = viewCommunities.length < totalCount;

  // TODO 서버연동
  const fetchCommunities = useCallback(
    async (targetPage: number) => {
      return getGroupCommunities({ groupId, page: targetPage, pageSize: COMMUNITY_PAGE_SIZE });
    },
    [groupId]
  );

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const response = await fetchCommunities(1);
      setViewCommunities(response.items);
      setPage(1);
      setTotalCount(response.totalCount);

      setIsLoading(false);
    };

    void fetch();
  }, [groupId, fetchCommunities]);

  const handleLoadMore = useCallback(async () => {
    
    if (isLoading || isFetchingMore || !hasMore) return;

    setIsFetchingMore(true);

    const nextPage = page + 1;
    
    const response = await fetchCommunities(nextPage);
    setViewCommunities((prev) => [...prev, ...response.items]);
    setPage(nextPage);
    setTotalCount(response.totalCount);

    setIsFetchingMore(false);
  }, [fetchCommunities, hasMore, isFetchingMore, isLoading, page]);

  // Infinite scroll
  useEffect(() => {

    const target = sentinelRef.current;
    if (!target || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        void handleLoadMore();
      },
      { root: null, rootMargin: "100px", threshold: 0 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [hasMore, handleLoadMore]);

  if (isLoading) return null;

  return (
    <section className="bg-white">
      {/* No results */}
      {!hasCommunities && (
        <div className="px-4 py-10 text-center text-sm text-zinc-500">
          등록된 활동 내역이 없습니다.
        </div>
      )}

      {/* Has results */}
      {hasCommunities && (
        <div className="mt-4">
          {viewCommunities.map((c) => {
            return c.communityType === "NOTICE"
              ? <GroupNoticeCard key={c.id} notice={c} />
              : <GroupCommunityCard key={c.id} community={c} />
          })}

          {/* Control infinite scroll */}
          {hasMore && <div ref={sentinelRef} className="h-8" />}
        </div>
      )}
    </section>
  );
}
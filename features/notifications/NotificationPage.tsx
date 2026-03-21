"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getNotifications } from "@/features/notifications/api/notification.api";
import { NOTIFICATION_PAGE_SIZE } from "@/features/notifications/utils/notification.normalize";
import { Notification } from "@/features/notifications/types/notification.type";
import NotificationCard from "@/features/notifications/components/NotificationCard";

interface NotificationPageProps {
  notifications: Notification[];
  totalNotificationCount: number;
}

export default function NotificationPage({
  notifications,
  totalNotificationCount
} : NotificationPageProps){

  const [viewNotifications, setViewNotifications] = useState(notifications);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(totalNotificationCount);

  const hasNotifications = viewNotifications.length > 0
  const hasMore = viewNotifications.length < totalCount;

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const handleLoadMore = useCallback(async () => {

    if (!hasMore) return;

    const nextPage = page + 1;

    // TODO 서버 연동
    const response = getNotifications({ page: nextPage, pageSize: NOTIFICATION_PAGE_SIZE });
    setViewNotifications((prev) => [...prev, ...response.items]);
    setPage(nextPage);
    setTotalCount(response.totalCount);
  }, [hasMore, page]);

  // Infinite scroll
  useEffect(() => {
    const target = sentinelRef.current;
    if (!target || !hasMore) return;

    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        void handleLoadMore();
      },
      { root: null, rootMargin: "100px", threshold: 0 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [hasMore, handleLoadMore]);

  return (
    <section className="bg-white">
      {/* No results */}
      {!hasNotifications && (
        <div className="px-4 py-10 text-center text-sm text-zinc-500">
          조회된 알림이 없습니다.
        </div>
      )}

      {/* Has results */}
      {hasNotifications && (
        <>
          {viewNotifications.map((n) => (
            <NotificationCard key={n.id} notification={n} />
          ))}

          {/* Control infinite scroll */}
          {hasMore && <div ref={sentinelRef} className="h-8" />}
        </>
      )}
    </section>
  );
}
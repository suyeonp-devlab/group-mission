import { Help, SupportType } from "@/features/support/types/support.type";
import FaqCard from "@/features/support/components/FaqCard";
import NoticeCard from "@/features/support/components/NoticeCard";
import { useEffect, useRef } from "react";

interface SupportExplorerProps {
  helps: Help[];
  hasMore: boolean;
  onLoadMore: () => void;
  selectedTab: SupportType;
}

export default function SupportExplorer({
  helps,
  hasMore,
  onLoadMore,
  selectedTab
} : SupportExplorerProps){

  const hasHelps = helps.length > 0;

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
      {/* No results */}
      {!hasHelps && (
        <div className="px-4 py-10 text-center text-sm text-zinc-500">
          조회된 {selectedTab === "notice" ? "공지사항이" : "FAQ가"} 없습니다.
        </div>
      )}

      {/* Has results */}
      {hasHelps &&
        selectedTab === "notice"
        ? helps.map(h => <NoticeCard key={h.id} notice={h} />)
        : helps.map(h => <FaqCard key={h.id} faq={h} />)
      }

      {/* Control infinite scroll */}
      {hasMore && <div ref={sentinelRef} className="h-8" />}
    </section>
  );
}
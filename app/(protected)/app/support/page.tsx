import LayoutConfig from "@/shared/system/layout/LayoutConfig";
import { GetHelpRequest } from "@/features/support/types/support.type";
import { normalizeGetHelpRequest } from "@/features/support/utils/support.normalize";
import { getHelps } from "@/features/support/api/support.api";
import SupportPage from "@/features/support/SupportPage";
import { Info } from "lucide-react";

export default async function Page({ searchParams } : {
  searchParams: Promise<GetHelpRequest>
}){

  const sp = await searchParams;
  const normalized = normalizeGetHelpRequest(sp);

  // TODO 서버 연동
  const { items: helps, totalCount } = getHelps(normalized);

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="공지사항 / FAQ" headerVariant="detail" showFooter={false} />

      {/* Content */}
      <div className="mt-2 flex items-center gap-3 rounded-xl bg-zinc-50 ring-1 ring-zinc-200 px-4 py-3 text-xs text-zinc-700">
        <Info size={16} className="shrink-0 text-zinc-500" />
        <p>궁금한 내용을 빠르게 확인해보세요.</p>
      </div>

      <SupportPage
        key={normalized.tab}
        selectedTab={normalized.tab}
        helps={helps}
        totalHelpCount={totalCount}
      />
    </>
  );
}
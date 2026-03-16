import LayoutConfig from "@/features/layout/LayoutConfig";
import { GetHelpRequest } from "@/features/helpdesk/help.type";
import { normalizeGetHelpRequest } from "@/features/helpdesk/help.normalize";
import { getHelps } from "@/features/helpdesk/help.api";
import HelpdeskClient from "@/features/helpdesk/HelpdeskClient";

export default async function HelpdeskPage({ searchParams } : {
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
      <HelpdeskClient
        key={normalized.tab}
        selectedTab={normalized.tab}
        helps={helps}
        totalHelpCount={totalCount}
      />
    </>
  );
}
import LayoutConfig from "@/shared/system/layout/LayoutConfig";
import GroupDetailPage from "@/features/groups/detail/GroupDetailPage";
import { notFound } from "next/navigation";
import { getGroup, getMyMembership } from "@/features/groups/detail/api/api";

export default async function Page({ params } : {
  params: Promise<{ groupId: string }>
}) {

  const { groupId } = await params;

  // TODO 서버 연동
  const group = getGroup(groupId);
  if(!group) notFound();

  const membership = getMyMembership(groupId);

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="그룹" headerVariant="detail" showFooter={false} />

      {/* Content */}
      <GroupDetailPage
        group={group}
        isMember={membership.isMember}
        status={membership.status}
      />
    </>
  );
}
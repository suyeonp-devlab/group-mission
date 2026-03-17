import LayoutConfig from "@/features/layout/LayoutConfig";
import GroupDetailClient from "@/features/groups/detail/GroupDetailClient";
import { notFound } from "next/navigation";
import { getGroup, getMyMembership } from "@/features/groups/detail/group.detail.api";

export default async function GroupDetailPage({ params } : {
  params: Promise<{ id: string }>
}) {

  const { id: groupId } = await params;

  // TODO 서버 연동
  const group = getGroup(groupId);
  if(!group) notFound();

  const membership = getMyMembership(groupId);

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="그룹 상세" headerVariant="detail" showFooter={false} />

      {/* Content */}
      <GroupDetailClient
        group={group}
        isMember={membership.isMember}
        role={membership.role}
        status={membership.status}
      />
    </>
  );
}
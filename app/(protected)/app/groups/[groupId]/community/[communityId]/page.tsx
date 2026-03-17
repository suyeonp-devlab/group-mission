import LayoutConfig from "@/features/layout/LayoutConfig";
import { notFound } from "next/navigation";
import { getGroupCommunity, getMyMembership } from "@/features/groups/detail/group.detail.api";
import GroupCommunityClient from "@/features/groups/detail/GroupCommunityClient";

export default async function GroupCommunityDetailPage({ params } : {
  params: Promise<{ groupId: string, communityId: string }>
}) {

  const { groupId, communityId } = await params;

  // TODO 서버 연동
  const community = getGroupCommunity({ groupId, communityId });
  if(!community) notFound();

  const membership = getMyMembership(groupId);
  if(!membership.isMember) notFound();

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="그룹" headerVariant="detail" showFooter={false} />

      {/* Content */}
      <GroupCommunityClient community={community} />
    </>
  );
}
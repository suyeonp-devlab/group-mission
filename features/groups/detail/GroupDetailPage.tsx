"use client";

import { Group } from "@/features/groups/list/types/type";
import GroupDetailHero from "@/features/groups/detail/components/GroupDetailHero";
import { useState } from "react";
import SegmentedTab from "@/shared/ui/tab/SegmentedTab";
import GroupLockedPanel from "@/features/groups/detail/components/GroupLockedPanel";
import CommunitySection from "@/features/groups/detail/components/CommunitySection";
import { MemberStatus } from "@/features/groups/detail/types/type";
import { useOverlay } from "@/shared/system/overlay/OverlayContext";
import { useRouter } from "next/navigation";

interface GroupDetailPageProps {
  group: Group;
  isMember: boolean;
  status: MemberStatus | null;
}

const GROUP_DETAIL_TABS = [
  { id: "community", label: "활동" },
  { id: "history", label: "현황 / 이력" }
] as const;

export default function GroupDetailPage({
  group,
  isMember,
  status
}: GroupDetailPageProps){

  const router = useRouter();
  const { alert } = useOverlay();

  const isEnd = group.memberCount >= group.maxMembers;

  const [selectedTab, setSelectedTab] = useState("community");

  const handleJoin = async () => {
    // TODO : 서버 연동
    await alert({ title: "그룹 가입 신청", description: `가입 신청이 완료되었습니다.\n승인 시 자동으로 그룹에 가입됩니다.` });
    router.refresh();
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <GroupDetailHero group={group} isMember={isMember} isEnd={isEnd} />

      {/* Tab */}
      <div className="mt-4">
        <SegmentedTab
          tabs={GROUP_DETAIL_TABS}
          value={selectedTab}
          onChange={(v) => setSelectedTab(v)}
        />
      </div>

      {/* Content */}
      {!isMember && <GroupLockedPanel status={status} isEnd={isEnd} onClick={handleJoin} />}
      {isMember && selectedTab === "community" && <CommunitySection groupId={group.id} />}
      {/*{isMember && selectedTab === "history" && <GroupHistory />}*/}
    </div>
  );
}
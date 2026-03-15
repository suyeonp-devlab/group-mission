import LayoutConfig from "@/features/layout/LayoutConfig";
import MypageClient from "@/features/mypage/MypageClient";
import { GetMyGroupsRequest } from "@/features/groups/group.type";
import { normalizeGetMyGroupsRequest } from "@/features/groups/groups.normalize";
import { getMyGroups } from "@/features/groups/groups.api";

export default async function MyPage(){

  const groupSearchParams: GetMyGroupsRequest = {};
  const normalized = normalizeGetMyGroupsRequest(groupSearchParams);

  // TODO 서버 연동
  const { items: myGroups, totalCount } = getMyGroups(normalized);
  // Only three groups are displayed on MyPage
  const viewMyGroups = myGroups.slice(0, 3);

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="마이페이지" navIcon="mypage" />

      {/* Content */}
      <MypageClient myGroups={viewMyGroups} totalCount={totalCount} />
    </>
  );
}
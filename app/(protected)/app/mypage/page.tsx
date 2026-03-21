import LayoutConfig from "@/shared/system/layout/LayoutConfig";
import Mypage from "@/features/mypage/Mypage";
import { getMyGroups } from "@/features/groups/my-groups/api/myGroup.api";
import { GetMyGroupsRequest } from "@/features/groups/my-groups/types/myGroup.type";
import { normalizeGetMyGroupsRequest } from "@/features/groups/my-groups/utils/myGroup.normalize";

export default async function Page(){

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
      <Mypage myGroups={viewMyGroups} totalCount={totalCount} />
    </>
  );
}
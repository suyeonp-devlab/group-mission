import { MOCK_MY_GROUPS, MY_GROUP_SUMMARY } from "@/features/groups/my-groups/api/myGroup.mock";
import { GetMyGroupsResponse, NormalizedGetMyGroupsRequest } from "@/features/groups/my-groups/types/myGroup.type";


// TODO 서버 연동
export const getMyGroupSummary = () => MY_GROUP_SUMMARY;

// TODO 서버 연동 (무한스크롤)
export const getMyGroups = (request: NormalizedGetMyGroupsRequest): GetMyGroupsResponse => {

  const { frequency, status, page, pageSize } = request;

  const filteredGroups = MOCK_MY_GROUPS.filter(g =>
    (frequency === null || g.frequency === frequency) &&
    (status === null || g.myMissionStatus === status)
  );

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: filteredGroups.slice(start, end),
    totalCount: filteredGroups.length
  };
};
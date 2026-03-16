import { MOCK_GROUPS, MOCK_MY_GROUPS, MY_GROUP_SUMMARY } from "@/features/groups/group.mock";
import {
  GetGroupsResponse,
  GetMyGroupsResponse,
  NormalizedGetGroupsRequest,
  NormalizedGetMyGroupsRequest
} from "@/features/groups/group.type";

// TODO 서버 연동 (무한스크롤)
export const getGroups = (request: NormalizedGetGroupsRequest): GetGroupsResponse => {

  const { categoryId, q, sort, available, page, pageSize } = request;

  const filteredGroups = MOCK_GROUPS
    .filter(g =>
      (categoryId === "all" || g.categoryId === categoryId) &&
      (q === "" || g.title.toUpperCase().includes(q.toUpperCase())) &&
      (available === "0" || g.memberCount < g.maxMembers)
    )
    .toSorted((a, b) => {
      switch (sort) {
        case "RECOMMENDED":
          return b.recommendedScore - a.recommendedScore;
        case "CREATED_DESC":
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        case "CREATED_ASC":
          return +new Date(a.createdAt) - +new Date(b.createdAt);
        default:
          return 0;
      }
    });

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: filteredGroups.slice(start, end),
    totalCount: filteredGroups.length
  };
};

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

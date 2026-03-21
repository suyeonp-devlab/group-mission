import { MOCK_GROUPS } from "@/features/groups/list/api/mock";
import { GetGroupsResponse, NormalizedGetGroupsRequest } from "@/features/groups/list/types/type";

// TODO 서버 연동 (무한스크롤)
export const getGroups = (request: NormalizedGetGroupsRequest): GetGroupsResponse => {

  const { categoryId, q, sort, available, page, pageSize } = request;

  const filteredGroups = MOCK_GROUPS
    .filter(g =>
      (categoryId === "all" || g.category.id === categoryId) &&
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
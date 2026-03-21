import { MOCK_GROUPS } from "@/features/groups/list/api/mock";
import { MOCK_COMMUNITY, MOCK_MY_MEMBERSHIP } from "@/features/groups/detail/api/mock";
import {
  GetCommunitiesRequest,
  GetCommunitiesResponse,
  GetCommunityRequest
} from "@/features/groups/detail/types/type";

// TODO 서버 연동
export const getMyMembership = (id: string) => MOCK_MY_MEMBERSHIP;

// TODO 서버 연동
export const getGroup = (id: string) => {
  return MOCK_GROUPS.find((g) => g.id === id) ?? null;
}

// TODO 서버 연동
export const getGroupCommunities = (request: GetCommunitiesRequest): GetCommunitiesResponse => {

  const { groupId, page, pageSize } = request;

  const filtered = MOCK_COMMUNITY.filter((c) => c.groupId === groupId) ?? [];

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: filtered.slice(start, end),
    totalCount: filtered.length
  };
}

// TODO 서버 연동
export const getGroupCommunity = (request: GetCommunityRequest) => {
  return MOCK_COMMUNITY.find((g) =>
    g.groupId === request.groupId && g.id === request.communityId) ?? null;
}


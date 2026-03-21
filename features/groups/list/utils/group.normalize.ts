import { GetGroupsRequest, NormalizedGetGroupsRequest } from "@/features/groups/list/types/group.type";

export const GROUP_PAGE_SIZE = 10;

export const normalizeGetGroupsRequest = (
  request: GetGroupsRequest
): NormalizedGetGroupsRequest => {
  return {
    categoryId: request.categoryId ?? "all",
    q: request.q ?? "",
    sort: request.sort ?? "RECOMMENDED",
    available: request.available ?? "1",
    // Fallback to 1 if value is missing, NaN, 0, or negative
    page: Math.max(1, Number(request.page ?? "1") || 1),
    pageSize: GROUP_PAGE_SIZE
  };
};
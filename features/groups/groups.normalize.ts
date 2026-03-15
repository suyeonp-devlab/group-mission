import {
  GetGroupsRequest,
  GetMyGroupsRequest,
  NormalizedGetGroupsRequest,
  NormalizedGetMyGroupsRequest
} from "@/features/groups/group.type";

export const GROUP_PAGE_SIZE = 10;
export const MY_GROUP_PAGE_SIZE = 10;

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

export const normalizeGetMyGroupsRequest = (
  request: GetMyGroupsRequest
): NormalizedGetMyGroupsRequest => {
  return {
    frequency: request.frequency ?? null,
    status: request.status ?? null,
    // Fallback to 1 if value is missing, NaN, 0, or negative
    page: Math.max(1, Number(request.page ?? "1") || 1),
    pageSize: MY_GROUP_PAGE_SIZE
  };
};
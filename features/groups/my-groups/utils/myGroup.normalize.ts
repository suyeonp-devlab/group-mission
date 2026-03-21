import { GetMyGroupsRequest, NormalizedGetMyGroupsRequest } from "@/features/groups/my-groups/types/myGroup.type";

export const MY_GROUP_PAGE_SIZE = 10;

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
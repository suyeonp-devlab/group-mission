import { SortValue } from "@/shared/config/sort";
import { Category } from "@/features/categories/types/type";

export type GroupFrequency = "DAILY" | "WEEKLY" | "MONTHLY";
export type GroupBadge = "ACTIVE" | "SUCCESS" | "TRENDING" | "CONSISTENT";

export const GROUP_FREQUENCY_LABEL: Record<GroupFrequency, string> = {
  DAILY: "매일",
  WEEKLY: "매주",
  MONTHLY: "매월"
};

export const GROUP_BADGE_LABEL: Record<GroupBadge, string> = {
  ACTIVE: "소통 활발",
  SUCCESS: "높은 달성률",
  TRENDING: "신규 참여 증가",
  CONSISTENT: "꾸준한 모임",
};

export interface Group {
  id: string;
  title: string;
  description: string;
  category: Category;
  frequency: GroupFrequency;
  memberCount: number;
  maxMembers: number;
  completeMember: number;
  badges: GroupBadge[];
  recommendedScore: number;
  achieveRate: number;
  createdAt: string;
  owner: string;
}

export interface GetGroupsRequest {
  categoryId?: string;
  q?: string;
  sort?: SortValue<"group">;
  available?: "0" | "1";
  page?: number;
}

export interface NormalizedGetGroupsRequest {
  categoryId: string;
  q: string;
  sort: SortValue<"group">;
  available: "0" | "1";
  page: number;
  pageSize: number;
}

export interface GetGroupsResponse {
  items: Group[];
  totalCount: number;
}
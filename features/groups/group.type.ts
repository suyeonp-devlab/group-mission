import { SortValue } from "@/features/ui/sort.constant";

export type GroupFrequency = "DAILY" | "WEEKLY" | "MONTHLY";
export type GroupBadge = "ACTIVE" | "SUCCESS" | "TRENDING" | "CONSISTENT";
export type MissionStatus = "NONE" | "ING" | "DONE";
type PeriodSummary = { count: number; completed: number; };

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

export const MISSION_STATUS_UI: Record<MissionStatus, { title: string; button: string; href: string; }> = {
  NONE: { title: "아직 참여 중인 미션이 없어요", button: "미션 둘러보기", href: "/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1" },
  ING: { title: "진행 중인 미션을 확인해보세요", button: "내 미션 보기", href: "/app/groups" },
  DONE: { title: "참여 중인 미션을 모두 완료했어요", button: "새 미션 찾기", href: "/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1" }
};

export interface Group {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  frequency: GroupFrequency;
  memberCount: number;
  maxMembers: number;
  completeMember: number;
  badges: GroupBadge[];
  recommendedScore: number;
  achieveRate: number;
  createdAt: string;
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

export interface MyGroupSummary {
  total: PeriodSummary;
  daily: PeriodSummary;
  weekly: PeriodSummary;
  monthly: PeriodSummary;
}
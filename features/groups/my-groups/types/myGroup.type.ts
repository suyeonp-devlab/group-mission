import { Category } from "@/features/categories/types/category.type";
import { GroupFrequency } from "@/features/groups/list/types/group.type";

// Overall mission status for the user
export type SummaryStatus = "NONE" | "ING" | "DONE";
// Specific mission status for the user
export type MissionStatus = "MISSED" | "ING" | "DONE";
type PeriodSummary = { count: number; completed: number; };

export const MISSION_STATUS_UI: Record<SummaryStatus, { title: string; button: string; href: string; }> = {
  NONE: { title: "아직 참여 중인 미션이 없어요", button: "미션 둘러보기", href: "/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1" },
  ING: { title: "진행 중인 미션을 확인해보세요", button: "내 미션 보기", href: "/app/groups" },
  DONE: { title: "참여 중인 미션을 모두 완료했어요", button: "새 미션 찾기", href: "/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1" }
};

export interface MyGroupSummary {
  total: PeriodSummary;
  daily: PeriodSummary;
  weekly: PeriodSummary;
  monthly: PeriodSummary;
}

export interface MyGroup {
  id: string;
  title: string;
  description: string;
  category: Category;
  frequency: GroupFrequency;
  memberCount: number;
  maxMembers: number;
  completeMember: number;
  joinedAt: string;
  groupMissionStatus: MissionStatus;
  myMissionStatus: MissionStatus;
}

export interface GetMyGroupsRequest {
  frequency?: GroupFrequency | null;
  status?: MissionStatus | null;
  page?: number;
}

export interface NormalizedGetMyGroupsRequest {
  frequency: GroupFrequency | null;
  status: MissionStatus | null;
  page: number;
  pageSize: number;
}

export interface GetMyGroupsResponse {
  items: MyGroup[];
  totalCount: number;
}
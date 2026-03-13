import { SortValue } from "@/features/ui/sort.constant";
import { LucideIcon, CheckCircle, AlarmClock, Sparkle } from "lucide-react";

export type GroupFrequency = "DAILY" | "WEEKLY" | "MONTHLY";
export type GroupBadge = "ACTIVE" | "SUCCESS" | "TRENDING" | "CONSISTENT";
export type MissionStatus = "NONE" | "ING" | "DONE";

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

export const MISSION_STATUS_UI: Record<MissionStatus, { title: string; button: string; href: string; icon: LucideIcon }> = {
  NONE: { title: "현재 참여 중인 미션이 없어요", button: "미션 찾기", href: "/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1", icon: Sparkle },
  ING: { title: "완료할 미션이 남아 있어요", button: "미션 확인하기", href: "/app/groups", icon: AlarmClock },
  DONE: { title: "모든 미션을 완료했어요", button: "새 미션 찾기", href: "/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1", icon: CheckCircle }
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
  totalCount: number;
  doneCount: number;
  dailyCount: number;
  weeklyCount: number;
  monthlyCount: number;
}
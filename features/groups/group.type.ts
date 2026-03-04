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
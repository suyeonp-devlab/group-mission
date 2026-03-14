import { Group, MyGroupSummary } from "@/features/groups/group.type";

export const MOCK_GROUPS: Group[] = [
  { id: "G202603040001", title: "물 2L 마시기", description: "매일 물 2L 마시고 체크해요.", categoryId: "01", frequency: "DAILY", memberCount: 10, maxMembers: 10, completeMember: 4, badges: ["ACTIVE", "SUCCESS"], recommendedScore: 100, achieveRate: 40, createdAt: "2026-03-01T14:32:10" },
  { id: "G202603040002", title: "아침 6시 기상", description: "기상 인증으로 하루를 같이 시작해요.", categoryId: "06", frequency: "DAILY", memberCount: 8, maxMembers: 10, completeMember: 8, badges: ["CONSISTENT"], recommendedScore: 60, achieveRate: 100, createdAt: "2026-02-28T14:32:10" },
  { id: "G202603040003", title: "러닝: 주간 운동 인증", description: "매주 러닝 1회라도 같이 해요.", categoryId: "01", frequency: "WEEKLY", memberCount: 9, maxMembers: 10, completeMember: 2, badges: [], recommendedScore: 100, achieveRate: 22, createdAt: "2026-03-02T14:32:10" },
  { id: "G202603040004", title: "독서 20분", description: "하루 20분, 짧게라도 읽고 인증해요.", categoryId: "02", frequency: "DAILY", memberCount: 2, maxMembers: 10, completeMember: 0, badges: [], recommendedScore: 70, achieveRate: 0, createdAt: "2026-03-03T14:32:10" },
  { id: "G202603040005", title: "매주 회고 한 줄", description: "일주일을 한 줄로 정리해요.", categoryId: "05", frequency: "WEEKLY", memberCount: 1, maxMembers: 10, completeMember: 1, badges: ["SUCCESS", "CONSISTENT"], recommendedScore: 10, achieveRate: 100, createdAt: "2026-03-04T14:32:10" },
  { id: "G202603040006", title: "월간 가계부 점검", description: "한 달 한 번, 가계부 점검하고 공유해요.", categoryId: "07", frequency: "MONTHLY", memberCount: 4, maxMembers: 10, completeMember: 1, badges: ["SUCCESS", "TRENDING"], recommendedScore: 20, achieveRate: 25, createdAt: "2026-02-10T14:32:10" },
  { id: "G202603040007", title: "스트레칭 10분", description: "몸 펴는 것부터 같이 해요.", categoryId: "01", frequency: "DAILY", memberCount: 7, maxMembers: 10, completeMember: 7, badges: ["SUCCESS", "TRENDING"], recommendedScore: 100, achieveRate: 100, createdAt: "2026-02-02T14:32:10" },
  { id: "G202603040008", title: "영어 단어 10개", description: "매일 10개만 외워도 충분해요.", categoryId: "02", frequency: "DAILY", memberCount: 10, maxMembers: 10, completeMember: 5, badges: [], recommendedScore: 30, achieveRate: 50, createdAt: "2026-02-18T14:32:10" },
  { id: "G202603040009", title: "월간 책 1권", description: "한 달에 책 한 권, 같이 끝내요.", categoryId: "02", frequency: "MONTHLY", memberCount: 10, maxMembers: 10, completeMember: 2, badges: ["SUCCESS"], recommendedScore: 50, achieveRate: 20, createdAt: "2026-02-19T14:32:10" },
  { id: "G202603040010", title: "주간 청소 루틴", description: "매주 한 번, 청소 인증으로 리셋!", categoryId: "06", frequency: "WEEKLY", memberCount: 3, maxMembers: 10, completeMember: 1, badges: [], recommendedScore: 70, achieveRate: 33, createdAt: "2026-02-20T14:32:10" },
];

export const MY_GROUP_SUMMARY: MyGroupSummary = {
  total: { count: 5, completed: 3 },
  daily: { count: 4, completed: 2 },
  weekly: { count: 0, completed: 0 },
  monthly: { count: 1, completed: 1 }
}
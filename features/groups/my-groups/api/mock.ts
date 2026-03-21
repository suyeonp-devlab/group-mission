import { MyGroup, MyGroupSummary } from "@/features/groups/my-groups/types/type";

export const MY_GROUP_SUMMARY: MyGroupSummary = {
  total: { count: 5, completed: 3 },
  daily: { count: 4, completed: 2 },
  weekly: { count: 0, completed: 0 },
  monthly: { count: 1, completed: 1 }
};

export const MOCK_MY_GROUPS: MyGroup[] = [
  { id: "G202603040001", title: "물 2L 마시기", description: "매일 물 2L 마시고 체크해요.", category: { id: "01", label: "운동/식단", badges: [], color: "#bef264" }, frequency: "DAILY", memberCount: 10, maxMembers: 10, completeMember: 4, joinedAt: "2026-03-01T14:32:10", groupMissionStatus: "DONE", myMissionStatus: "DONE" },
  { id: "G202603040002", title: "아침 6시 기상 아침 6시 기상 아침 6시 기상", description: "기상 인증으로 하루를 같이 시작해요.", category: { id: "06", label: "생활/정리", badges: [], color: "#fcd34d" }, frequency: "DAILY", memberCount: 8, maxMembers: 10, completeMember: 8, joinedAt: "2026-02-28T14:32:10", groupMissionStatus: "ING", myMissionStatus: "ING" },
  { id: "G202603040003", title: "러닝: 주간 운동 인증", description: "매주 러닝 1회라도 같이 해요.", category: { id: "01", label: "운동/식단", badges: [], color: "#bef264" }, frequency: "WEEKLY", memberCount: 9, maxMembers: 10, completeMember: 2, joinedAt: "2026-03-02T14:32:10", groupMissionStatus: "ING", myMissionStatus: "DONE" },
  { id: "G202603040004", title: "독서 20분", description: "하루 20분, 짧게라도 읽고 인증해요.", category: { id: "02", label: "공부/독서", badges: ["HOT", "NEW"], color: "#93c5fd" }, frequency: "DAILY", memberCount: 2, maxMembers: 10, completeMember: 0, joinedAt: "2026-03-03T14:32:10", groupMissionStatus: "DONE", myMissionStatus: "DONE" },
  { id: "G202603040005", title: "매주 회고 한 줄", description: "일주일을 한 줄로 정리해요.", category: { id: "05", label: "마음관리", badges: ["HOT"], color: "#c4b5fd" }, frequency: "WEEKLY", memberCount: 1, maxMembers: 10, completeMember: 1, joinedAt: "2026-03-04T14:32:10", groupMissionStatus: "DONE", myMissionStatus: "ING" },
  { id: "G202603040006", title: "월간 가계부 점검", description: "한 달 한 번, 가계부 점검하고 공유해요.", category: { id: "07", label: "소비관리", badges: [], color: "#67e8f9" }, frequency: "MONTHLY", memberCount: 4, maxMembers: 10, completeMember: 1, joinedAt: "2026-02-10T14:32:10", groupMissionStatus: "DONE", myMissionStatus: "ING" },
  { id: "G202603040007", title: "스트레칭 10분 스트레칭 10분 스트레칭 10분 스트레칭 10분", description: "몸 펴는 것부터 같이 해요. 스트레칭 10분 스트레칭 10분 스트레칭 10분 스트레칭 10분 스트레칭 10분", category: { id: "01", label: "운동/식단", badges: [], color: "#bef264" }, frequency: "DAILY", memberCount: 7, maxMembers: 10, completeMember: 7, joinedAt: "2026-02-02T14:32:10", groupMissionStatus: "DONE", myMissionStatus: "ING" },
  { id: "G202603040008", title: "영어 단어 10개", description: "매일 10개만 외워도 충분해요.", category: { id: "02", label: "공부/독서", badges: ["HOT", "NEW"], color: "#93c5fd" }, frequency: "DAILY", memberCount: 10, maxMembers: 10, completeMember: 5, joinedAt: "2026-02-18T14:32:10", groupMissionStatus: "DONE", myMissionStatus: "ING" },
  { id: "G202603040009", title: "월간 책 1권", description: "한 달에 책 한 권, 같이 끝내요.", category: { id: "02", label: "공부/독서", badges: ["HOT", "NEW"], color: "#93c5fd" }, frequency: "MONTHLY", memberCount: 10, maxMembers: 10, completeMember: 2, joinedAt: "2026-02-19T14:32:10", groupMissionStatus: "DONE", myMissionStatus: "ING" },
  { id: "G202603040010", title: "주간 청소 루틴", description: "매주 한 번, 청소 인증으로 리셋!", category: { id: "06", label: "생활/정리", badges: [], color: "#fcd34d" }, frequency: "WEEKLY", memberCount: 3, maxMembers: 10, completeMember: 1, joinedAt: "2026-02-20T14:32:10", groupMissionStatus: "DONE", myMissionStatus: "ING" },
];




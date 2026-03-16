import { Notification, NotificationMeta } from "@/features/notifications/notification.type";

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: "N001", type: "WELCOME", title: "환영해요", description: "[GROUP-MISSION]에서 작은 성취를 시작해보세요.", path: null, createdAt: "2026-03-16T09:00:00" },
  { id: "N002", type: "GROUP", title: "그룹에 가입했어요 그룹에 가입했어요 그룹에 가입했어요 그룹에 가입했어요 그룹에 가입했어요", description: "매일 10분 영어 그룹에 참여했어요. 매일 10분 영어 그룹에 참여했어요. 매일 10분 영어 그룹에 참여했어요. 매일 10분 영어 그룹에 참여했어요. 매일 10분 영어 그룹에 참여했어요.", path: "/app/groups/1", createdAt: "2025-03-16T10:30:00" },
  { id: "N003", type: "GROUP", title: "그룹 미션을 완료했어요", description: "매일 10분 영어 그룹이 이번 주 미션을 모두 끝냈어요.", path: "/app/groups/1", createdAt: "2026-03-16T12:10:00" },
  { id: "N004", type: "GROUP", title: "그룹에서 탈퇴했어요", description: "아침 스트레칭 그룹에서 나왔어요.", path: null, createdAt: "2026-03-15T18:20:00" },
  { id: "N005", type: "SYSTEM", title: "서비스 이용 안내", description: "3월 18일 오전 2시부터 4시까지 점검이 진행될 예정이에요.", path: "/app/helpdesk?tab=notice", createdAt: "2026-03-15T10:00:00" },
  { id: "N006", type: "WELCOME", title: "환영해요", description: "[GROUP-MISSION]에서 작은 성취를 시작해보세요.", path: null, createdAt: "2026-03-16T09:00:00" },
  { id: "N007", type: "GROUP", title: "그룹에 가입했어요", description: "매일 10분 영어 그룹에 참여했어요.", path: "/app/groups/1", createdAt: "2026-03-16T10:30:00" },
  { id: "N008", type: "GROUP", title: "그룹 미션을 완료했어요", description: "매일 10분 영어 그룹이 이번 주 미션을 모두 끝냈어요.", path: "/app/groups/1", createdAt: "2026-03-16T12:10:00" },
  { id: "N009", type: "GROUP", title: "그룹에서 탈퇴했어요", description: "아침 스트레칭 그룹에서 나왔어요.", path: null, createdAt: "2026-03-15T18:20:00" },
  { id: "N010", type: "SYSTEM", title: "서비스 이용 안내", description: "3월 18일 오전 2시부터 4시까지 점검이 진행될 예정이에요.", path: "/app/helpdesk?tab=notice", createdAt: "2026-03-15T10:00:00" }
];

export const MOCK_NOTIFICATION_META: NotificationMeta = {
  hasUnread: true,
  lastCheckedAt: null
}
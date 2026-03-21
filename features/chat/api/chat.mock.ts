import { ChatSummary } from "@/features/chat/types/chat.type";

export const MOCK_CHATS: ChatSummary[] = [
  { roomId: "G202603040001", roomTitle: "물 2L 마시기", memberCount: 6, lastMessage: "다들 오늘 미션 수행하셨나요??", lastMessageAt: "2026-03-15T02:05:10", lastMessageId: 10, unreadCount: 3 },
  { roomId: "G202603040002", roomTitle: "아침 6시 기상", memberCount: 8, lastMessage: null, lastMessageAt: null, lastMessageId: 0, unreadCount: 0 },
  { roomId: "G202603040003", roomTitle: "러닝: 주간 운동 인증", memberCount: 3, lastMessage: "한강 도착했습니다! 다들 어디쯤 오셨나요? 저는 노란색 옷을 입고있습니다! 치킨을 미리 시켜둘까요???", lastMessageAt: "2026-03-02T14:32:10", lastMessageId: 5, unreadCount: 1 },
  { roomId: "G202603040004", roomTitle: "독서 20분 독서 20분 독서 20분 독서 20분", memberCount: 1, lastMessage: "책 추천해주세요 책 추천해주세요 책 추천해주세요책 추천해주세요 ", lastMessageAt: "2025-02-02T14:32:10", lastMessageId: 2, unreadCount: 100 }
];

export interface ChatSummary {
  roomId: string;
  roomTitle: string;
  memberCount: number;
  lastMessage: string | null;
  lastMessageAt: string | null;
  lastMessageId: number;
  unreadCount: number;
}

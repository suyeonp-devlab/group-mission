import { ChatSummary } from "@/features/chat/chat.type";
import { MOCK_CHATS } from "@/features/chat/chat.mock";

// TODO 서버 연동
export const getChats = (): ChatSummary[] => {

  return MOCK_CHATS
    .toSorted((a, b) => {

      // Primary sorting: Unread status
      // Secondary sorting: Last message date
      const aUnread = a.unreadCount > 0;
      const bUnread = b.unreadCount > 0;

      if (aUnread !== bUnread) {
        return bUnread ? 1 : -1;
      }

      const aTime = a.lastMessageAt ? +new Date(a.lastMessageAt) : 0;
      const bTime = b.lastMessageAt ? +new Date(b.lastMessageAt) : 0;

      return bTime - aTime;
    });
};

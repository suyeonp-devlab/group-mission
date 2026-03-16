import {
  GetNotificationsRequest,
  GetNotificationsResponse,
  NotificationMeta
} from "@/features/notifications/notification.type";
import { MOCK_NOTIFICATIONS } from "@/features/notifications/notification.mock";

// TODO 서버 연동 (무한스크롤)
export async function getNotifications(request: GetNotificationsRequest): Promise<GetNotificationsResponse> {

  const { page, pageSize } = request;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: MOCK_NOTIFICATIONS.slice(start, end),
    totalCount: MOCK_NOTIFICATIONS.length
  };
}

export async function getNotificationMeta(): Promise<NotificationMeta> {
  return { hasUnread: true, lastCheckedAt: null };
}
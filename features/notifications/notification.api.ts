import {
  GetNotificationsRequest,
  GetNotificationsResponse,
  NotificationMeta
} from "@/features/notifications/notification.type";
import { MOCK_NOTIFICATION_META, MOCK_NOTIFICATIONS } from "@/features/notifications/notification.mock";

// TODO 서버 연동 (무한스크롤)
export const getNotifications = (request: GetNotificationsRequest): GetNotificationsResponse => {

  const { page, pageSize } = request;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: MOCK_NOTIFICATIONS.slice(start, end),
    totalCount: MOCK_NOTIFICATIONS.length
  };
}

// TODO 서버 연동
export const getNotificationMeta = (): NotificationMeta => MOCK_NOTIFICATION_META;

// TODO 서버 연동
export const updateNotificationMeta = () => {
  MOCK_NOTIFICATION_META.hasUnread = false;
}
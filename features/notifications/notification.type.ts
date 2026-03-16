export type NotificationType = "WELCOME" | "GROUP" | "SYSTEM";

export const NOTIFICATION_TYPE_LABEL: Record<NotificationType, string> = {
  WELCOME: "환영",
  GROUP: "그룹",
  SYSTEM: "시스템"
};

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  path: string | null;
  createdAt: string;
}

export interface GetNotificationsRequest {
  page: number;
  pageSize: number;
}

export interface GetNotificationsResponse {
  items: Notification[];
  totalCount: number;
}

export interface NotificationMeta {
  hasUnread: boolean;
  lastCheckedAt: string | null;
}
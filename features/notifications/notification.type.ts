type NotificationType = "WELCOME" | "GROUP" | "SYSTEM";

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
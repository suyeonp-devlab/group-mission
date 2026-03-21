export type Type = "WELCOME" | "GROUP" | "SYSTEM";

export const NOTIFICATION_TYPE_LABEL: Record<Type, string> = {
  WELCOME: "환영",
  GROUP: "그룹",
  SYSTEM: "시스템"
};

export interface Notification {
  id: string;
  type: Type;
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
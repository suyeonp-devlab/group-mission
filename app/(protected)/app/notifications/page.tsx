import LayoutConfig from "@/features/layout/LayoutConfig";
import { getNotifications, updateNotificationMeta } from "@/features/notifications/notification.api";
import { NOTIFICATION_PAGE_SIZE } from "@/features/notifications/notification.normalize";
import NotificationClient from "@/features/notifications/NotificationClient";

export default async function NotificationPage(){

  // TODO 서버 연동
  const { items: notifications, totalCount } = getNotifications({
    page: 1, pageSize: NOTIFICATION_PAGE_SIZE
  });

  // TODO 서버 연동
  updateNotificationMeta();

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="알림" headerVariant="detail" showFooter={false} />

      {/* Content */}
      <NotificationClient
        notifications={notifications}
        totalNotificationCount={totalCount}
      />
    </>
  );
}
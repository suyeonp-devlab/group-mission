import LayoutConfig from "@/shared/system/layout/LayoutConfig";
import { getNotifications, updateNotificationMeta } from "@/features/notifications/api/api";
import { NOTIFICATION_PAGE_SIZE } from "@/features/notifications/utils/normalize";
import NotificationPage from "@/features/notifications/NotificationPage";

export default async function Page(){

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
      <NotificationPage
        notifications={notifications}
        totalNotificationCount={totalCount}
      />
    </>
  );
}
import LayoutConfig from "@/features/layout/LayoutConfig";

const NOTIFICATION_PAGE_SIZE = 5;

export default async function NotificationPage(){

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="알림" headerVariant="detail" showFooter={false} />

      {/* Content */}
      <div>aa</div>
    </>
  );
}
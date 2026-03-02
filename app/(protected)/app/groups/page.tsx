import LayoutConfig from "@/features/layout/LayoutConfig";

export default function GroupPage(){
  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="내 그룹" />
      <div>내그룹페이지</div>
    </>
  );
}
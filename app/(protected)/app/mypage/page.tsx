import LayoutConfig from "@/features/layout/LayoutConfig";

export default function MyPage(){
  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="마이페이지" />
      <div>마이페이지</div>
    </>
  );
}
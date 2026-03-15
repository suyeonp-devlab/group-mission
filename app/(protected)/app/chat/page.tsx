import LayoutConfig from "@/features/layout/LayoutConfig";

export default function ChatPage(){
  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="채팅" navIcon="chat" />
      <div>채팅</div>
    </>
  );
}
import LayoutConfig from "@/shared/system/layout/LayoutConfig";
import ChatPage from "@/features/chat/ChatPage";
import { getChats } from "@/features/chat/api/api";
import EmptyChatPage from "@/features/chat/EmptyChatPage";

export default function Page(){

  // TODO 서버 연동
  const chats = getChats();

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="채팅" navIcon="chat" />

      {/* Content */}
      {chats.length <= 0 ? <EmptyChatPage /> : <ChatPage chats={chats} />}
    </>
  );
}
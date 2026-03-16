import LayoutConfig from "@/features/layout/LayoutConfig";
import ChatClient from "@/features/chat/ChatClient";
import { getChats } from "@/features/chat/chat.api";
import EmptyChat from "@/features/chat/EmptyChat";

export default function ChatPage(){

  // TODO 서버 연동
  const chats = getChats();

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="채팅" navIcon="chat" />

      {/* Content */}
      {chats.length <= 0 ? <EmptyChat /> : <ChatClient chats={chats} />}
    </>
  );
}
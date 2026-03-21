"use client";

import { ChatSummary } from "@/features/chat/types/type";
import ChatShortcutCard from "@/features/chat/components/ChatShortcutCard";

interface ChatPageProps {
  chats: ChatSummary[];
}

export default function ChatPage({ chats } : ChatPageProps) {

  return (
    <div className="bg-white divide-y divide-zinc-100 border-y border-zinc-100">
      {chats.map((c) => (
        <ChatShortcutCard key={c.roomId} chat={c} />
      ))}
    </div>
  );
}
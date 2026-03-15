"use client";

import { ChatSummary } from "@/features/chat/chat.type";
import ChatShortcutCard from "@/features/chat/ChatShortcutCard";

interface ChatClientProps {
  chats: ChatSummary[];
}

export default function ChatClient({ chats } : ChatClientProps) {

  return (
    <div className="bg-white divide-y divide-zinc-100 border-y border-zinc-100">
      {chats.map((c) => (
        <ChatShortcutCard key={c.roomId} chat={c} />
      ))}
    </div>
  );
}
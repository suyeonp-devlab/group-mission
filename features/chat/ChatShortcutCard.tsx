import Link from "next/link";
import { ChatSummary } from "@/features/chat/chat.type";
import { formatRelativeDate } from "@/lib/commonUtil";

interface ChatShortcutCardProps {
  chat: ChatSummary
}

export default function ChatShortcutCard({ chat } : ChatShortcutCardProps){

  return (
    <Link
      href={`/app/chat/${chat.roomId}`}
      className="flex items-center gap-3 py-4 active:bg-zinc-50"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-base font-semibold text-zinc-700 ring-1 ring-zinc-200">
        {chat.roomTitle.charAt(0).toUpperCase()}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-1">
            <p className="truncate text-sm font-semibold text-zinc-900">
              {chat.roomTitle}
            </p>

            <span className="shrink-0 text-xs text-zinc-400">
              ({chat.memberCount}명)
            </span>
          </div>

          <span className="shrink-0 text-xs text-zinc-400 self-center">
            {formatRelativeDate(chat.lastMessageAt ?? "")}
          </span>
        </div>

        <div className="mt-1 flex items-start justify-between gap-3.5">
          {chat.lastMessage && (<p className="line-clamp-2 min-w-0 text-[12px] text-zinc-500">{chat.lastMessage}</p>)}
          {!chat.lastMessage && (<p className="line-clamp-2 min-w-0 text-[12px] text-zinc-400">대화를 시작해 보세요</p>)}

          {chat.unreadCount > 0 && (
            <span className="inline-flex mt-[0.5px] min-w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white">
              {chat.unreadCount > 99 ? "99+" : chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
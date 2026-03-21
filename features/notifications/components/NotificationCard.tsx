"use client";

import Link from "next/link";
import { Notification, NOTIFICATION_TYPE_LABEL, Type } from "@/features/notifications/types/type";
import { formatRelativeDate } from "@/shared/lib/date";

interface NotificationCardProps {
  notification: Notification;
}

const BADGE_CLASS: Record<Type, string> = {
  WELCOME: "bg-emerald-100 text-emerald-700",
  GROUP: "bg-sky-100 text-sky-700",
  SYSTEM: "bg-violet-100 text-violet-700"
};

export default function NotificationCard({
  notification
}: NotificationCardProps) {

  const content = (
    <div className="flex flex-col gap-1 py-3">
      <div className="flex items-center gap-2">
        <span className={`rounded-sm px-2 py-0.5 text-[11px] font-semibold ${BADGE_CLASS[notification.type]}`}>
          {NOTIFICATION_TYPE_LABEL[notification.type]}
        </span>

        <p className="line-clamp-1 flex-1 text-sm font-semibold text-zinc-700">
          {notification.title}
        </p>

        <span className="shrink-0 text-xs text-zinc-400">
          {formatRelativeDate(notification.createdAt)}
        </span>
      </div>

      <p className="text-xs leading-5 text-zinc-500 mt-1.5">
        {notification.description}
      </p>
    </div>
  );

  if (notification.path) {
    return (
      <Link href={notification.path} className="block border-b border-zinc-100 bg-white transition active:bg-zinc-50">
        {content}
      </Link>
    );
  }

  return <div className="border-b border-zinc-100 bg-white">{content}</div>;
}
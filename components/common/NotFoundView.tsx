"use client";

import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";

interface NotFoundViewProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function NotFoundView({
  title = "페이지를 찾을 수 없어요",
  description = "요청하신 페이지를 찾을 수 없어요.\n이미 이동되었거나 삭제되었을 수 있어요.",
  actionLabel = "홈으로 이동",
  onAction
}: NotFoundViewProps) {

  const router = useRouter();

  return (
    <div className="flex min-h-[calc(100vh-56px-2rem-6rem)] flex-col items-center justify-center px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
        <AlertCircle size={32} className="text-emerald-600" />
      </div>

      <h1 className="mt-6 text-lg font-semibold text-zinc-800">
        {title}
      </h1>

      <p className="mt-3 text-sm text-zinc-500 whitespace-pre-line">
        {description}
      </p>

      <button
        onClick={() => onAction ? onAction() : router.push("/")}
        className="mt-6 rounded-lg bg-emerald-600 px-12 py-2 text-sm font-semibold text-white active:bg-emerald-700"
      >
        {actionLabel}
      </button>
    </div>
  );
}
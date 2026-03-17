import { Community } from "@/features/groups/detail/group.detail.type";
import { Pin } from "lucide-react";
import Link from "next/link";

interface GroupNoticeCardProps {
  notice: Community;
}

export default function GroupNoticeCard({ notice }: GroupNoticeCardProps){

  return (
    <Link href={`/app/groups/${notice.groupId}/community/${notice.id}`} className="block">
      <article className="mt-6 mb-4 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-4 shadow-sm ring-1 ring-sky-100">
        <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold text-white">
          <Pin size={14} /> 공지
        </span>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-800">
          {notice.content}
        </p>
      </article>
    </Link>
  );
}
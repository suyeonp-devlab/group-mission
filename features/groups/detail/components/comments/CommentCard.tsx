import { CommunityComment } from "@/features/groups/detail/types/type";
import { useAuth } from "@/shared/system/auth/AuthContext";
import { formatDate } from "@/shared/lib/date";
import Image from "next/image";

interface CommentCardProps {
  comment: CommunityComment;
  isCommunityAuthor: boolean;
}

export default function CommentCard({
  comment,
  isCommunityAuthor
}: CommentCardProps){

  const { user } = useAuth();

  const isMine = user?.loginId === comment.authorId;
  const hasTag = isMine || isCommunityAuthor;

  return (
    <li className="border-b border-zinc-100 py-2.5">
      <div className="flex items-center gap-3">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-zinc-100 -mt-1.5">
          <Image src={comment.authorProfile} alt="프로필" fill className="object-cover" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate text-xs font-semibold text-zinc-800 mt-px">
              {comment.author}
            </p>

            {hasTag && (
              <span className={`inline-flex shrink-0 rounded-md px-1.5 py-px text-[10px] font-semibold ${isMine ? "bg-emerald-50 text-emerald-600" : "bg-sky-50 text-sky-600"}`}>
                {isMine ? "본인" : "작성자"}
              </span>
            )}
          </div>
          <p className="text-[11px] text-zinc-500 mt-0.5">
            {formatDate(comment.createdAt, "yyyy. M. d")}
          </p>
        </div>
      </div>

      <p className="mt-2 whitespace-pre-wrap wrap-break-word text-[13px] leading-relaxed text-zinc-800">
        {comment.content}
      </p>
    </li>
  );
}
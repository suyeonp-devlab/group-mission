"use client";

import Image from "next/image";
import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { Community } from "@/features/groups/detail/group.detail.type";
import { formatRelativeDate } from "@/lib/utils/commonUtil";
import { useAuth } from "@/features/auth/AuthContext";
import ImageRow from "@/components/common/ImageRow";
import Link from "next/link";

interface GroupCommunityCardProps {
  community: Community;
}

export default function GroupCommunityCard({ community }: GroupCommunityCardProps) {

  const { user } = useAuth();

  const isMine = user?.loginId === community.authorId;

  return (
    <Link href={`/app/groups/${community.groupId}/community/${community.id}`} className="block">
      <article className="border-b border-zinc-100 py-4">
        <div className="flex items-start gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-100 -mt-1.5">
            <Image src={community.authorProfile} alt="프로필" fill className="object-cover" />
          </div>

          <div className="min-w-0 flex-1">
            {/* Card header */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-semibold text-zinc-800">
                    {community.author}
                  </p>

                  {isMine && (
                    <span className="inline-flex shrink-0 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                      본인
                    </span>
                  )}
                </div>
              </div>

              <p className="shrink-0 pt-0.5 text-xs text-zinc-500">
                {formatRelativeDate(community.createdAt)}
              </p>
            </div>

            {/* Card body */}
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-800">
              {community.content}
            </p>

            {/* Card images */}
            {community.imageUrls && community.imageUrls.length > 0 && (
              <ImageRow showCount={3} imageUrls={community.imageUrls} />
            )}

            {/* Card footer */}
            <div className="mt-3 flex items-center gap-4 text-xs text-zinc-500">
              <button
                type="button"
                className={`flex items-center gap-1 ${community.isLiked ? "text-rose-500" : ""}`}
              >
                <Heart size={14} />
                <span>좋아요 {community.likeCount}</span>
              </button>

              <button
                type="button"
                className={`flex items-center gap-1 ${community.isAmazing ? "text-violet-500" : ""}`}
              >
                <Sparkles size={14} />
                <span>대단해요 {community.amazingCount}</span>
              </button>

              <button type="button" className="flex items-center gap-1">
                <MessageCircle size={14} />
                <span>댓글 {community.commentCount}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

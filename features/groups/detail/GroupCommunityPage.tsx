"use client";

import { Community } from "@/features/groups/detail/types/groupDetail.type";
import CommunityDetail from "@/features/groups/detail/components/community/CommunityDetail";
import { Heart, Sparkles } from "lucide-react";
import CommentSection from "@/features/groups/detail/components/community/CommentSection";

interface GroupCommunityPageProps {
  community: Community;
}

export default function GroupCommunityPage({ community } : GroupCommunityPageProps){

  const isNotice = community.communityType === "NOTICE";

  return (
    <div className="bg-white">
      <CommunityDetail community={community} isNotice={isNotice} />

      <div className="mt-2 border-t py-2 border-zinc-100 text-right">
        <div className="flex justify-end items-center gap-4 text-xs text-zinc-500">
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
        </div>
      </div>

      <CommentSection comments={community.comments} communityAuthorId={community.authorId} />
    </div>
  );
}
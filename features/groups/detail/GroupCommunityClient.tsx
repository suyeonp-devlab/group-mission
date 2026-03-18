"use client";

import { Community } from "@/features/groups/detail/group.detail.type";
import GroupCommunityDetail from "@/features/groups/detail/GroupCommunityDetail";
import { Heart, Sparkles } from "lucide-react";
import GroupCommunityComment from "@/features/groups/detail/GroupCommunityComment";

interface GroupCommunityClientProps {
  community: Community;
}

export default function GroupCommunityClient({ community } : GroupCommunityClientProps){

  const isNotice = community.communityType === "NOTICE";

  return (
    <div className="bg-white">
      <GroupCommunityDetail community={community} isNotice={isNotice} />

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

      <GroupCommunityComment comments={community.comments} communityAuthorId={community.authorId} />
    </div>
  );
}
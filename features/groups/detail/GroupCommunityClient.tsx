"use client";

import { Community } from "@/features/groups/detail/group.detail.type";
import { Pin } from "lucide-react";
import Image from "next/image";
import { formatRelativeDate } from "@/lib/utils/commonUtil";
import { useAuth } from "@/features/auth/AuthContext";
import ImageRow from "@/components/common/ImageRow";

interface GroupCommunityClientProps {
  community: Community;
}

export default function GroupCommunityClient({ community } : GroupCommunityClientProps){

  const { user } = useAuth();

  const isMine = user?.loginId === community.authorId;

  const isNotice = community.communityType === "NOTICE";

  return (
    <div className="bg-white">
      <section className="bg-white px-4 py-5">
        {/* Badge */}
        {isNotice && (
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold text-white">
            <Pin size={14} /> 공지
          </span>
        )}

        {/* Community content */}
        <div className={isNotice ? "mt-3" : ""}>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-100 -mt-1.5">
              <Image src={community.authorProfile} alt="프로필" fill className="object-cover" />
            </div>

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
              <p className="text-xs text-zinc-500">
                {formatRelativeDate(community.createdAt)}
              </p>
            </div>
          </div>

          <p className="mt-4 whitespace-pre-wrap wrap-break-word text-sm leading-7 text-zinc-800">
            {community.content}
          </p>

          {community.imageUrls && community.imageUrls.length > 0 && (
            <ImageRow showCount={community.imageUrls.length} imageUrls={community.imageUrls} />
          )}

        </div>
      </section>
    </div>
  );
}
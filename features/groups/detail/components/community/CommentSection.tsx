import { CommunityComment } from "@/features/groups/detail/types/type";
import CommentCard from "@/features/groups/detail/components/comments/CommentCard";

interface CommentSectionProps {
  comments: CommunityComment[] | null;
  communityAuthorId: string;
}

export default function CommentSection({
  comments,
  communityAuthorId
}: CommentSectionProps){

  const hasComments = comments && comments.length > 0;

  return (
    <section className="mt-2">
      <div className="border-y border-zinc-100 bg-emerald-50/85 py-3 -mx-4 px-4">
        <h3 className="text-sm font-semibold">
          댓글 {comments?.length ?? 0}개
        </h3>
      </div>

      {/* No results */}
      {!hasComments && (
        <div className="px-4 py-10 text-center text-sm text-zinc-500">
          등록된 댓글이 없습니다.
        </div>
      )}

      {/* has results */}
      {hasComments && (
        <ul>
          {comments.map((c) => (
            <CommentCard key={c.id} comment={c} isCommunityAuthor={communityAuthorId === c.authorId} />
          ))}
        </ul>
      )}
    </section>
  );
}
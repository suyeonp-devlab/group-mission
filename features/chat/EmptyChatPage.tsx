import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function EmptyChatPage(){
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-4 rounded-full bg-emerald-50 p-4">
          <MessageCircle className="h-6 w-6 text-emerald-600" />
        </div>

        <p className="text-base font-semibold text-zinc-900">
          참여 중인 그룹 채팅이 없어요
        </p>

        <p className="mt-5 text-sm text-zinc-500">
          그룹에 참여하면<br />
          여기에서 대화를 시작할 수 있어요
        </p>

        <Link
          href="/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2 text-sm font-medium text-white"
        >
          그룹 둘러보기
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
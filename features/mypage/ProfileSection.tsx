import Image from "next/image";
import { Camera } from "lucide-react";

interface ProfileSectionProps {
  nickname: string;
  joinedAt: string;
  profile: string;
}

export default function ProfileSection({
  nickname,
  joinedAt,
  profile
}: ProfileSectionProps) {

  return (
    <div className="flex items-center gap-6 py-2">
      <button type="button" className="relative shrink-0 active:scale-[0.97] transition" aria-label="프로필 이미지 변경">
        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-zinc-200 bg-zinc-100">
          <Image src={profile} alt="프로필 이미지" fill className="object-cover" sizes="80px" />
        </div>

        <div className="absolute bottom-0 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200 shadow-sm">
          <Camera size={14} className="text-zinc-600" />
        </div>
      </button>

      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-semibold text-zinc-900">
          {nickname}
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          <span className="text-emerald-800">{joinedAt}</span>
          부터 함께하고 있어요
        </p>
      </div>
    </div>
  );
}
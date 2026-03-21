"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import React, { useRef } from "react";
import { PROFILE_MAX_SIZE, PROFILE_MAX_SIZE_MB } from "@/shared/config/upload";
import { useOverlay } from "@/shared/system/overlay/OverlayContext";

interface ProfileSectionProps {
  nickname: string;
  joinedAt: string;
  profile: string;
  onChangeProfile?: (file: File) => void
}

export default function ProfileSection({
  nickname,
  joinedAt,
  profile,
  onChangeProfile
}: ProfileSectionProps) {

  const { alert } = useOverlay();

  const fileRef = useRef<HTMLInputElement>(null);

  const openImagePicker = () => {
    fileRef.current?.click();
  };

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0];

    // Reset to allow selecting the same file again
    e.target.value = "";

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      await alert({ title: "파일 업로드", description: "이미지 파일만 선택할 수 있어요." });
      return;
    }

    if (file.size > PROFILE_MAX_SIZE) {
      await alert({ title: "파일 업로드", description: `${PROFILE_MAX_SIZE_MB}MB 이하 이미지만 업로드할 수 있어요` });
      return;
    }

    onChangeProfile?.(file);
  };

  return (
    <div className="flex items-center gap-6 py-2">
      <button
        type="button"
        className="relative shrink-0 active:scale-[0.97] transition"
        aria-label="프로필 이미지 변경"
        onClick={openImagePicker}
      >
        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-zinc-200 bg-zinc-100">
          <Image src={profile} alt="프로필 이미지" fill className="object-cover" sizes="80px" />
        </div>

        <div className="absolute bottom-0 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200 shadow-sm">
          <Camera size={14} className="text-zinc-600" />
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/png, image/jpeg, image/webp"
          className="hidden"
          onChange={handleChangeFile}
        />
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
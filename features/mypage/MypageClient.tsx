"use client";

import ProfileSection from "@/features/mypage/ProfileSection";
import { useAuth } from "@/features/auth/AuthContext";
import { formatDate } from "@/lib/commonUtil";
import SettingSection from "@/features/mypage/SettingSection";
import MyGroupsSection from "@/features/mypage/MyGroupSection";
import { MyGroup } from "@/features/groups/group.type";
import { useState } from "react";
import { uploadProfile } from "@/features/auth/auth.api";

interface MypageClientProps {
  myGroups: MyGroup[];
  totalCount: number;
}

export default function MypageClient({
  myGroups,
  totalCount
} : MypageClientProps){

  const { user, refreshAuth } = useAuth();

  const [isUploadingProfile, setIsUploadingProfile] = useState(false);

  const onChangeProfile = async (file: File) => {

    if (isUploadingProfile) return;

    try {
      setIsUploadingProfile(true);

      uploadProfile(file);
      await refreshAuth();
    } catch (error) {
      // TODO 프로필 변경 실패 시 ALERT 표출
      console.error(error);
    } finally {
      setIsUploadingProfile(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Profile */}
      {user &&
        <ProfileSection
          nickname={user.nickname}
          joinedAt={formatDate(user.joinedAt, "yyyy년 M월")}
          profile={user.profile}
          onChangeProfile={onChangeProfile}
        />
      }

      {/* My group */}
      {myGroups && <MyGroupsSection myGroups={myGroups} totalCount={totalCount} />}

      {/* Settings */}
      <div className="h-3 bg-zinc-100 -mx-4 mt-4" />
      <SettingSection />
    </div>
  );
}
"use client";

import ProfileSection from "@/features/mypage/ProfileSection";
import { useAuth } from "@/features/auth/AuthContext";
import { formatDate } from "@/lib/commonUtil";
import SettingSection from "@/features/mypage/SettingSection";
import MyGroupsSection from "@/features/mypage/MyGroupSection";
import { MyGroup } from "@/features/groups/group.type";

interface MypageClientProps {
  myGroups: MyGroup[];
  totalCount: number;
}

export default function MypageClient({
  myGroups,
  totalCount
} : MypageClientProps){

  const { user } = useAuth();

  return (
    <div className="bg-white">
      {/* Profile */}
      {user &&
        <ProfileSection
          nickname={user.nickname}
          joinedAt={formatDate(user.joinedAt, "yyyy년 M월")}
          profile={user.profile}
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
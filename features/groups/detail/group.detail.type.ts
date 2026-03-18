export type MemberRole = "OWNER" | "MEMBER";
export type MemberStatus = "ACTIVE" | "LEFT" | "PENDING";
type CommunityType = "NOTICE" | "GENERAL";

export interface MyMembership {
  isMember: boolean;
  role: MemberRole | null;
  status: MemberStatus | null;
}

export interface Community {
  id: string;
  communityType: CommunityType;
  groupId: string;
  authorId: string;
  author: string;
  authorProfile: string;
  content: string;
  imageUrls: string[] | null;
  likeCount: number;
  amazingCount: number;
  commentCount: number;
  createdAt: string;
  isLiked: boolean;
  isAmazing: boolean;
  comments: CommunityComment[] | null;
}

export interface CommunityComment {
  id: string;
  communityId: string;
  authorId: string;
  author: string;
  authorProfile: string;
  content: string;
  createdAt: string;
}

export interface GetCommunitiesRequest {
  groupId: string;
  page: number;
  pageSize: number;
}

export interface GetCommunitiesResponse {
  items: Community[];
  totalCount: number;
}

export interface GetCommunityRequest {
  groupId: string;
  communityId: string;
}

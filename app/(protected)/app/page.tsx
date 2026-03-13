import HomeClient from "@/features/home/HomeClient";
import { getGroupCategories } from "@/features/categories/categories.api";
import { getGroups, getMyGroupSummary } from "@/features/groups/groups.api";
import { normalizeGetGroupsRequest } from "@/features/groups/groups.normalize";
import { GetGroupsRequest } from "@/features/groups/group.type";

export default async function AppMainPage(){

  const groupSearchParams: GetGroupsRequest = { sort: "RECOMMENDED" };
  const normalized = normalizeGetGroupsRequest(groupSearchParams);

  // TODO 서버 연동
  const homeData = await Promise.allSettled([
    getGroupCategories(),
    getMyGroupSummary(),
    getGroups(normalized)
  ]);

  const categories = homeData[0].status === "fulfilled" ? homeData[0].value : [];
  const summary = homeData[1].status === "fulfilled" ? homeData[1].value : null;
  const { items: groups, totalCount } = homeData[2].status === "fulfilled" ? homeData[2].value : { items: [], totalCount: 0 };

  return (
    <HomeClient
      categories={categories}
      summary={summary}
      groups={groups}
      totalGroupCount={totalCount}
    />
  );
}
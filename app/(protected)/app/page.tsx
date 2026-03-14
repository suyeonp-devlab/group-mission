import HomeClient from "@/features/home/HomeClient";
import { getGroupCategories } from "@/features/categories/categories.api";
import { getGroups, getMyGroupSummary } from "@/features/groups/groups.api";
import { normalizeGetGroupsRequest } from "@/features/groups/groups.normalize";
import { GetGroupsRequest } from "@/features/groups/group.type";

export default async function AppMainPage(){

  const groupSearchParams: GetGroupsRequest = { sort: "RECOMMENDED" };
  const normalized = normalizeGetGroupsRequest(groupSearchParams);

  // TODO 서버 연동
  const [categoryRes, summaryRes, groupRes] = await Promise.allSettled([
    getGroupCategories(),
    getMyGroupSummary(),
    getGroups(normalized)
  ]);

  // Categories: six categories excluding "all" item
  let categories = categoryRes.status === "fulfilled" ? categoryRes.value : [];
  categories = categories.slice(1, 7);

  const summary = summaryRes.status === "fulfilled" ? summaryRes.value : null;
  const { items: groups } = groupRes.status === "fulfilled" ? groupRes.value : { items: [] };

  return (
    <HomeClient
      categories={categories}
      summary={summary}
      groups={groups}
    />
  );
}
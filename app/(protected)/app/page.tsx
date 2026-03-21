import HomePage from "@/features/home/HomePage";
import { getGroupCategories } from "@/features/categories/api/category.api";
import { getGroups } from "@/features/groups/list/api/group.api";
import { normalizeGetGroupsRequest } from "@/features/groups/list/utils/group.normalize";
import { GetGroupsRequest } from "@/features/groups/list/types/group.type";
import { getMyGroupSummary } from "@/features/groups/my-groups/api/myGroup.api";

export default async function Page(){

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
    <HomePage
      categories={categories}
      summary={summary}
      groups={groups}
    />
  );
}
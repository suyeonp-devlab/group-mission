import { SummaryStatus } from "@/features/groups/my-groups/types/type";

export const getSummaryStatus = (count: number, completed: number): SummaryStatus => {
  if (count === 0) return "NONE";
  if (count === completed) return "DONE";
  return "ING";
};
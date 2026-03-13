import { MissionStatus } from "@/features/groups/group.type";

export const normalizePin = (value?: string, maxLength = 6) => {
  return (value ?? "").replace(/\D/g, "").slice(0, maxLength);
};

export const getMissionStatus = (totalCount: number, doneCount: number): MissionStatus => {
  if (totalCount === 0) return "NONE";
  if (totalCount === doneCount) return "DONE";
  return "ING";
};
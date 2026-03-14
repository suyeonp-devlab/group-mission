import { MissionStatus } from "@/features/groups/group.type";

export const normalizePin = (value?: string, maxLength = 6) => {
  return (value ?? "").replace(/\D/g, "").slice(0, maxLength);
};

export const getMissionStatus = (count: number, completed: number): MissionStatus => {
  if (count === 0) return "NONE";
  if (count === completed) return "DONE";
  return "ING";
};
import { MOCK_CODES } from "@/shared/api/global.mock";
import { Code } from "@/shared/api/global.type";

// TODO 서버 연동
export const getCodes = (group: string): Code[] => MOCK_CODES[group] ?? [];
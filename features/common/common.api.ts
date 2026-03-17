import { MOCK_CODES } from "@/features/common/common.mock";
import { Code } from "@/features/common/common.type";

// TODO 서버 연동
export const getCodes = (group: string): Code[] => MOCK_CODES[group] ?? [];
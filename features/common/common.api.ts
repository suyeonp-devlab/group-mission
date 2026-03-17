import { MOCK_CODES } from "@/features/common/common.mock";

// TODO 서버 연동
export const getCodes = (group: string) => MOCK_CODES[group] ?? [];
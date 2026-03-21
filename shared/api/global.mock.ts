import { Code } from "@/shared/api/global.type";

export const MOCK_CODES: Record<string, Code[]> = {
  inquiryType: [
    { value: "01", label: "계정 문의" },
    { value: "02", label: "그룹/미션 문의" },
    { value: "03", label: "신고 문의" },
    { value: "04", label: "오류 제보" },
    { value: "05", label: "기타" },
  ]
};
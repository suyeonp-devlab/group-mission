import { MOCK_FAQS, MOCK_NOTICES } from "@/features/helpdesk/help.mock";
import { GetHelpResponse, NormalizedGetHelpRequest } from "@/features/helpdesk/help.type";

// TODO 서버 연동 (무한스크롤)
export const getHelps = (request: NormalizedGetHelpRequest): GetHelpResponse => {

  const { tab, page, pageSize } = request;

  const mockData = tab === "notice" ? MOCK_NOTICES : MOCK_FAQS

  const filteredHelps = mockData
    .toSorted((a, b) => {
      return Number(b.isImportant) - Number(a.isImportant);
    });

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: filteredHelps.slice(start, end),
    totalCount: filteredHelps.length
  };
};
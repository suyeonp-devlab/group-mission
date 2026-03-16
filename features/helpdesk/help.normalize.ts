import { GetHelpRequest, NormalizedGetHelpRequest } from "@/features/helpdesk/help.type";

export const HELP_PAGE_SIZE = 10;

export const normalizeGetHelpRequest = (
  request: GetHelpRequest
): NormalizedGetHelpRequest => {
  return {
    tab: request.tab ?? "notice",
    // Fallback to 1 if value is missing, NaN, 0, or negative
    page: Math.max(1, Number(request.page ?? "1") || 1),
    pageSize: HELP_PAGE_SIZE
  };
};
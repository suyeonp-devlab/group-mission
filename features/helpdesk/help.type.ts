export type HelpType = "notice" | "faq";

export interface Help {
  id: string;
  title: string;
  content: string;
  isImportant: boolean;
  createdAt: string;
}

export interface GetHelpRequest {
  tab?: HelpType;
  page?: number;
}

export interface NormalizedGetHelpRequest {
  tab: HelpType;
  page: number;
  pageSize: number;
}

export interface GetHelpResponse {
  items: Help[];
  totalCount: number;
}
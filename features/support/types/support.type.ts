export type SupportType = "notice" | "faq";

export interface Help {
  id: string;
  title: string;
  content: string;
  isImportant: boolean;
  createdAt: string;
}

export interface GetHelpRequest {
  tab?: SupportType;
  page?: number;
}

export interface NormalizedGetHelpRequest {
  tab: SupportType;
  page: number;
  pageSize: number;
}

export interface GetHelpResponse {
  items: Help[];
  totalCount: number;
}
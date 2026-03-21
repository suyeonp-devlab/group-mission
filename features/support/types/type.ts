export type Type = "notice" | "faq";

export interface Help {
  id: string;
  title: string;
  content: string;
  isImportant: boolean;
  createdAt: string;
}

export interface GetHelpRequest {
  tab?: Type;
  page?: number;
}

export interface NormalizedGetHelpRequest {
  tab: Type;
  page: number;
  pageSize: number;
}

export interface GetHelpResponse {
  items: Help[];
  totalCount: number;
}
import { DefaultOptions, QueryClient } from "@tanstack/react-query";

/**
 * Default configuration for React Query.
 *
 * - staleTime: How long fetched data is considered "fresh".
 *   While data is fresh, React Query will NOT automatically refetch it.
 *
 * - gcTime: How long unused query data stays in memory before being garbage collected.
 *   This only applies when the query is no longer used by any component.
 *
 * - retry: Number of automatic retry attempts when a request fails.
 *
 * - refetchOnWindowFocus: Whether queries should automatically refetch
 *   when the browser window/tab regains focus.
 */
const getQueryDefaultOptions = (): DefaultOptions => {
  return {
    queries: {
      staleTime: 1000 * 30,
      gcTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 0
    },
  };
}

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: getQueryDefaultOptions(),
  });
}
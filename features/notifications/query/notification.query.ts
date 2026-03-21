// TODO : react query 도입 시 사용

import { useQuery } from "@tanstack/react-query";
import {
  getNotifications,
  getNotificationMeta,
} from "../api/notification.api";
import { GetNotificationsRequest } from "../types/notification.type";

export const useNotificationsQuery = (request: GetNotificationsRequest) => {
  return useQuery({
    queryKey: ["notifications", request.page, request.pageSize],
    queryFn: () => getNotifications(request),
  });
}

export const useNotificationMetaQuery = () => {
  return useQuery({
    queryKey: ["notifications", "meta"],
    queryFn: getNotificationMeta,
  });
}
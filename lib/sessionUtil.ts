export const hasCookie = (key: string) => {
  if (typeof document === "undefined") return false;

  return document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith(`${key}=`));
};
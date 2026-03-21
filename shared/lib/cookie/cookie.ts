export const LOGIN_COOKIE = "gm_mock_session";

export const getCookie = (key: string): string | null => {

  if (typeof document === "undefined") return null;

  const found = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${key}=`));

  if (!found) return null;

  return decodeURIComponent(found.substring(found.indexOf("=") + 1));
};

export const setCookie = (
  key: string,
  value: string,
  maxAge: number
) => {
  if (typeof document === "undefined") return;
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
};

export const removeCookie = (key: string) => {
  if (typeof document === "undefined") return;
  document.cookie = `${key}=; path=/; max-age=0; samesite=lax`;
};

export const hasCookie = (key: string): boolean => {

  if (typeof document === "undefined") return false;

  return document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith(`${key}=`));
};

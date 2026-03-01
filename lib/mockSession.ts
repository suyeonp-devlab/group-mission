// TODO: this file will be removed when switching to httpOnly cookies.
export const MOCK_COOKIE_NAME = "gm_mock_session";

export const mockSignIn = () => {
  if (typeof document === "undefined") return;
  document.cookie = `${MOCK_COOKIE_NAME}=1; path=/; samesite=lax`;
}

export const mockSignOut = () => {
  if (typeof document === "undefined") return;
  document.cookie = `${MOCK_COOKIE_NAME}=; path=/; max-age=0; samesite=lax`;
}
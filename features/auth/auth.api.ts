import { MOCK_USER } from "@/features/auth/auth.mock";
import { LOGIN_COOKIE } from "@/constants/sessionConstant";

// TODO 서버 연동
export const processLogin = () => {
  if (typeof document === "undefined") return;
  document.cookie = `${LOGIN_COOKIE}=1; path=/; max-age=${60 * 60 * 24 * 7}; samesite=lax`;
}

// TODO 서버 연동
export const processLogout = () => {
  if (typeof document === "undefined") return;
  document.cookie = `${LOGIN_COOKIE}=; path=/; max-age=0; samesite=lax`;
}

// TODO 서버 연동
export const getLoginUserInfo = () => MOCK_USER;
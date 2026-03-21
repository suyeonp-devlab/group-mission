import { MOCK_USER } from "@/features/auth/api/mock";
import { removeCookie, setCookie, LOGIN_COOKIE } from "@/shared/lib/cookie";

// TODO 서버 연동
export const processLogin = () => {
  if (typeof document === "undefined") return;
  setCookie(LOGIN_COOKIE, "1", 60 * 60 * 24 * 7); // 7일
}

// TODO 서버 연동
export const processLogout = () => {
  if (typeof document === "undefined") return;
  removeCookie(LOGIN_COOKIE);
}

// TODO 서버 연동
export const getLoginUserInfo = () => MOCK_USER;

// TODO 서버 연동
export const uploadProfile = (file: File) => {
  const formData = new FormData();
  formData.append("profileImage", file);
  MOCK_USER.profile = "/default/profile3.png";
}

// TODO 서버 연동
export const deleteAccount = () => {}
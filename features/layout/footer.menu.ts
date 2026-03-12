import { NavIcon } from "@/features/layout/LayoutContext";

type FooterMenuItem = {
  id: NavIcon
  label: string;
  href: string;
  iconSrc: string;
};

export const FOOTER_MENU = [
  { id: "categories", label: "카테고리", href: "/app/categories?categoryId=all&q=&sort=RECOMMENDED&available=1", iconSrc: "/icons/explore.svg" },
  { id: "home", label: "홈", href: "/app", iconSrc: "/icons/home.svg" },
  { id: "groups", label: "내그룹", href: "/app/groups", iconSrc: "/icons/bookmarks.svg" },
  { id: "mypage", label: "마이페이지", href: "/app/mypage", iconSrc: "/icons/my.svg" },
] satisfies readonly FooterMenuItem[];
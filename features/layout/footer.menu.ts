type FooterMenuItem = {
  href: string;
  label: string;
  iconSrc: string;
};

export const FOOTER_MENU = [
  { href: "/app/categories?categoryId=all&q=", label: "카테고리", iconSrc: "/icons/explore.svg" },
  { href: "/app", label: "홈", iconSrc: "/icons/home.svg" },
  { href: "/app/groups", label: "내그룹", iconSrc: "/icons/bookmarks.svg" },
  { href: "/app/mypage", label: "마이페이지", iconSrc: "/icons/my.svg" },
] satisfies readonly FooterMenuItem[];
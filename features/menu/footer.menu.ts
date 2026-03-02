type FooterMenuItem = {
  href: string;
  label: string;
  iconSrc: string;
};

export const FOOTER_MENU = [
  { href: "/app/explore", label: "탐색", iconSrc: "/icons/explore.svg" },
  { href: "/app", label: "홈", iconSrc: "/icons/home.svg" },
  { href: "/app/my-groups", label: "내그룹", iconSrc: "/icons/bookmarks.svg" },
  { href: "/app/me", label: "마이페이지", iconSrc: "/icons/my.svg" },
] satisfies readonly FooterMenuItem[];
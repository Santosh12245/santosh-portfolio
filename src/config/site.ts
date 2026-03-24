import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chandanpradhan.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
  {
    title: "CLI",
    href: "https://chandanpradhan-cli.vercel.app",
  },
];

export const VERSION_NAV: NavItem[] = [
  {
    title: "v2:latest",
    href: "/",
  },
  {
    title: "v1:legacy",
    href: "https://chandanpradhan-v1.vercel.app",
  },
];

export const GITHUB_USERNAME = "Santosh12245";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/ncdai/chanhdai.com";

export const UTM_PARAMS = {
  utm_source: "chandanpradhan.vercel.app",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};

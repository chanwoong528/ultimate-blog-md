// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import SVG_LINKEDIN from "../public/image/icon/sns/linkedin.svg";
import SVG_GITHUB from "../public/image/icon/sns/github.svg";

export const SITE_TITLE = "Moon Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const PAGE_LIST = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/posts", label: "Posts" },
  { href: "/guestbook", label: "Guestbook" },
  { href: "/projects", label: "Projects" },
  { href: "/auth", label: "Login" },
];

export const SNS_LIST = [
  {
    label: "linkedin",
    sr: "",
    icon: SVG_LINKEDIN,
    href: "",
  },
  {
    label: "github",
    sr: "",
    icon: SVG_GITHUB,
    href: "",
  },
];

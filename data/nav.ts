import { mailto, site } from "@/data/site";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Work", href: "/#selected-work" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: site.resumePath, external: true },
  { label: "Contact", href: mailto, external: true },
];

export const footerLinks: NavItem[] = [
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Email", href: mailto, external: true },
  { label: "Resume", href: site.resumePath, external: true },
];

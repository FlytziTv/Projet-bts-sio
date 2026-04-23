export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "Accueil", href: "/" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
];

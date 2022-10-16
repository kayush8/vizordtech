interface NavbarRoutesProps {
  name: string;
  href: string;
  newItem?: boolean;
}

const navbarRoutes: NavbarRoutesProps[] = [
  { name: "Work", href: "/" },
  { name: "Services", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default navbarRoutes;

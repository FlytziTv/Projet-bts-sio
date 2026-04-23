import Link from "next/link";
import { Logo } from "../icons/logo";
import { NavItem, navItems } from "@/data/nav";

export default function NavBar() {
  return (
    <nav className="bg-black/15 text-black w-full p-2 rounded-lg grid grid-cols-3 items-center">
      <div className="flex items-center justify-start gap-2 pl-1">
        <Logo size={30} />
      </div>
      <div className="flex items-center justify-center gap-2">
        {navItems.map((item) => (
          <ItemNavBar key={item.href} name={item.name} href={item.href} />
        ))}
      </div>

      <div className="flex items-center justify-end gap-2">
        <SignInButton />
        <SignUpButton />
      </div>
    </nav>
  );
}

function ItemNavBar({ name, href }: NavItem) {
  return (
    <Link
      title={name}
      href={href}
      className="bg-transparent py-1.5 px-3 rounded-md text-sm font-normal hover:bg-black/20 transition-colors duration-500"
    >
      {name}
    </Link>
  );
}

function SignUpButton() {
  return (
    <Link
      href="/signup"
      className="bg-white text-black py-1.5 px-3 rounded-md text-sm font-normal hover:bg-white/40 transition-colors duration-500"
    >
      S&apos;inscrire
    </Link>
  );
}

function SignInButton() {
  return (
    <Link
      href="/signin"
      className="bg-transparent py-1.5 px-3 rounded-md text-sm font-normal hover:bg-black/10 transition-colors duration-500"
    >
      Se connecter
    </Link>
  );
}

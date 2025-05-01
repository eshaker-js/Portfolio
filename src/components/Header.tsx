import Link from "next/link";

const navItems = [  // Sections in navigation bar
  { href: "/", label: "Home" }, // Home will have basic info, pictures and highlights
  { href: "/about", label: "About Me" },  // About will have CV snippets and more about what I'm doing
  { href: "/projects", label: "All Projects" }, // Projects will have all the projects I've done
  { href: "/contact", label: "Contact" }, // Contact will have contact info
];

export default function Header() {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center shadow-sm bg-#30c1d4 dark:bg-black">
      <nav className="w-full flex justify-center gap-12 text-lg font-semibold">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

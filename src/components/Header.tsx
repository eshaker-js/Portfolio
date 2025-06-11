import Link from 'next/link'

const navItems = [
  // Sections in navigation bar
  { href: '/', label: 'Home' }, // Home will have basic info, pictures and highlights
  { href: '/projects', label: 'All Projects' }, // Projects will have all the projects I've done
]

export default function Header() {
  return (
    <header className='fixed w-full py-6 px-8 flex justify-between items-center shadow-sm bg-[var(--background)] text-[var(--foreground)]'>
      <nav className='w-full flex justify-center gap-16 text-xl font-semibold tracking-wide'>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='hover:text-blue-600 transition-colors'
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

import Link from 'next/link'
import { StickyBanner } from './ui/sticky-banner'

const navItems = [
  // Sections in navigation bar
  { href: '/', label: 'Home' }, // Home will have basic info, pictures and highlights
  { href: '/projects', label: 'All Projects' }, // Projects will have all the projects I've done
]

export default function Header() {
  return (
    <header className='w-full py-6 px-8 flex flex-col gap-5 items-center shadow-sm bg-[var(--background)] text-[var(--foreground)]'>
      <div className='relative flex w-full flex-col overflow-y-auto'>
        <StickyBanner className='bg-gradient-to-b  w-full from-blue-500 to-blue-600'>
          <p className='mx-0 max-w-[90%] text-white drop-shadow-md'>
            EchoShock alpha v0.1 is live!.{' '}
            <a href='https://www.echoshock.net' target='blank' className='transition duration-200 hover:underline'>
              Visit & Sign-Up
            </a>
          </p>
        </StickyBanner>
      </div>
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

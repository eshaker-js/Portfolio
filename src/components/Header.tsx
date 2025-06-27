'use client'

import Link from "next/link"
import { StickyBanner } from "./ui/sticky-banner"
import { HeaderButton } from "./ui/header-button"

const navItems = [
  // Sections in navigation bar
  { href: "/", label: "Home" }, // Home will have basic info, pictures and highlights
  { href: "/projects", label: "All Projects" }, // Projects will have all the projects I've done
]

export default function Header() {
  return (
    <header className='w-full pb-4 flex flex-col gap-5 items-center shadow-sm bg-[var(--background)] text-[var(--foreground)]'>
      <StickyBanner className='bg-gradient-to-b  w-full from-red-700 to-gray-600'>
        <p className='mx-0 text-amber-400 drop-shadow-md font-bold'>
          EchoShock alpha v0.1 is live!.{" "}
          <a
            href='https://www.echoshock.net'
            target='blank'
            className='transition duration-200 hover:underline'
          >
            Visit & Sign-Up
          </a>
        </p>
      </StickyBanner>
      <nav className='w-full flex justify-center gap-16 text-xl font-semibold tracking-wide'> 
        {navItems.map((item) => (
          <HeaderButton key={item.href} ref={item.href} label={item.label}/>
        ))}
      </nav>
    </header>
  )
}

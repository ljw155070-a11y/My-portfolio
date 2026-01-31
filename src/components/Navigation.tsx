'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#identity', label: 'ABOUT' },
  { href: '#career', label: 'CAREER' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#goals', label: 'GOALS' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-all duration-300 border-b border-accent/20 backdrop-blur-xl ${
        scrolled ? 'bg-primary/98' : 'bg-primary/90'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-display text-3xl tracking-wider gradient-text">
          JINWON
        </div>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-400 text-sm font-medium tracking-wide hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

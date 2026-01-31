'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl font-bold font-display gradient-text">
            JW.
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="https://github.com/ljw155070"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-primary text-sm !px-5 !py-2.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-slate-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10"
          >
            <ul className="container-custom py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'bg-white/10 text-white'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

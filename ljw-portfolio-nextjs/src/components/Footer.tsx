'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold font-display gradient-text">
              JW.
            </span>
            <p className="text-sm text-slate-500">
              © {currentYear} 이진원. All rights reserved.
            </p>
          </div>

          {/* Made with */}
          <motion.p
            className="flex items-center gap-2 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-pink-500 fill-pink-500" />
            </motion.span>
            using Next.js & Tailwind CSS
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/ljw155070"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="mailto:wjsgusdn1tp@gmail.com"
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

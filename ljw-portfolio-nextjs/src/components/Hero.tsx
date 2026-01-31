'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/10 glow-box">
              <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-5xl font-bold text-white font-display">JW</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            신입 개발자 구직중
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display"
        >
          <span className="text-white">안녕하세요</span>
          <br />
          <span className="gradient-text">신입 개발자</span>
          <br />
          <span className="text-white">이진원입니다</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          늦게 시작했지만 누구보다 진지하게 개발에 임하고 있습니다.
          <br className="hidden sm:block" />
          <span className="text-indigo-300 font-medium">모르는 부분을 그대로 두지 않고 끝까지 해결</span>하는 것을
          <br className="hidden sm:block" />
          가장 중요한 태도로 생각합니다.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="btn-primary w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              <FileText size={18} />
              프로젝트 보기
            </span>
          </motion.a>
          <motion.a
            href="https://github.com/ljw155070"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            GitHub
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/ljw155070"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-light text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            href="mailto:wjsgusdn1tp@gmail.com"
            className="p-3 rounded-full glass-light text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={22} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}

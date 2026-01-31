'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'

export default function Identity() {
  return (
    <section id="identity" className="py-24 px-8 bg-gradient-to-b from-dark to-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">01</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">나를 한 줄로 표현한다면</h2>
          <p className="text-gray-400">One Line Identity</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-secondary/80 backdrop-blur-lg rounded-3xl p-12 border border-accent/20"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-relaxed relative py-8">
            <span className="absolute -top-4 left-0 font-display text-7xl text-accent/30">"</span>
            8년간 QA로 다져진 <span className="gradient-text">문제 해결 능력</span>과
            <br />
            <span className="gradient-text">사용자 중심 사고</span>를 갖춘 풀스택 개발자
            <span className="absolute -bottom-8 right-0 font-display text-7xl text-accent/30">"</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

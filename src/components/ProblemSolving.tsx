'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profileData } from '@/data/profile'
import { ChevronDown } from 'lucide-react'

export default function ProblemSolving() {
  const { problemSolving } = profileData
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const categoryColors: { [key: string]: string } = {
    '설계': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    '아키텍처': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    '생산성': 'bg-accent/20 text-accent border-accent/30',
    '배포': 'bg-accent-gold/20 text-accent-gold border-accent-gold/30',
  }

  return (
    <section id="problem-solving" className="py-24 px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">PROBLEM SOLVING</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">개발 문제 해결 경험</h2>
          <p className="text-gray-400">프로젝트를 진행하며 마주한 문제들과 해결 과정</p>
        </motion.div>

        {/* 5단계 프로세스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-5 gap-2 mb-12"
        >
          {problemSolving.steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center p-4 bg-secondary/50 rounded-xl border border-accent/10"
            >
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="text-sm font-medium mb-1">{step.title}</div>
              <div className="text-xs text-gray-500 hidden sm:block">{step.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* 문제 해결 사례들 - 아코디언 */}
        <div className="space-y-4">
          {problemSolving.examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/80 backdrop-blur-lg rounded-2xl border border-accent/15 overflow-hidden"
            >
              {/* Header - 클릭 가능 */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[example.category]}`}>
                    {example.category}
                  </span>
                  <h3 className="text-lg font-bold">{example.title}</h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Content - 펼쳐지는 부분 */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                          <span className="text-xs text-red-400 font-medium">😰 상황</span>
                          <p className="text-sm text-gray-300 mt-2">{example.situation}</p>
                        </div>
                        <div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/20">
                          <span className="text-xs text-blue-400 font-medium">💡 해결</span>
                          <p className="text-sm text-gray-300 mt-2">{example.solution}</p>
                        </div>
                        <div className="bg-green-500/5 rounded-xl p-4 border border-green-500/20">
                          <span className="text-xs text-green-400 font-medium">✅ 결과</span>
                          <p className="text-sm text-gray-300 mt-2">{example.result}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

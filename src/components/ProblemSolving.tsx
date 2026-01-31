'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'

export default function ProblemSolving() {
  const { problemSolving } = profileData

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
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">04</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">문제 해결 경험</h2>
          <p className="text-gray-400">Problem Solving Approach</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-secondary/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-accent/20"
        >
          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {problemSolving.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-accent/5 rounded-2xl border border-accent/10 hover:bg-accent/10 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-gold rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <div className="font-bold mb-2">{step.title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Example */}
          <div className="bg-accent-gold/5 rounded-2xl p-8 border border-accent-gold/20">
            <h3 className="text-xl font-bold text-accent-gold mb-4">
              💼 실제 사례: {problemSolving.example.title}
            </h3>
            <div className="text-gray-400 leading-relaxed space-y-4">
              <p>
                <strong className="text-white">상황:</strong> {problemSolving.example.situation}
              </p>
              <p>
                <strong className="text-white">해결:</strong> {problemSolving.example.solution}
              </p>
              <p>
                <strong className="text-white">결과:</strong> {problemSolving.example.result}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

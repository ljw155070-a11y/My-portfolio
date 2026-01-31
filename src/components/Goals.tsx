'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'

export default function Goals() {
  return (
    <section id="goals" className="py-24 px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">09-11</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">성장 목표</h2>
          <p className="text-gray-400">Short / Mid / Long Term Goals</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profileData.goals.map((goal, index) => (
            <motion.div
              key={goal.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-secondary/80 backdrop-blur-lg rounded-3xl p-8 border border-accent/15 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="font-display text-6xl gradient-text mb-2">{goal.period}</div>
                <div className="text-xs text-accent uppercase tracking-widest mb-6">{goal.label}</div>
                
                <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{goal.description}</p>
                
                <div className="pt-6 border-t border-white/10 space-y-3">
                  {goal.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="text-accent">→</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

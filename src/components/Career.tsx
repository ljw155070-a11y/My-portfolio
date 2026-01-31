'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'

export default function Career() {
  return (
    <section id="career" className="py-24 px-8 bg-gradient-to-b from-secondary to-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">03</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">걸어온 길</h2>
          <p className="text-gray-400">Career Journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.career.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-secondary/80 backdrop-blur-lg rounded-2xl p-6 border border-accent/15 relative overflow-hidden card-hover"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="font-display text-lg text-accent mb-2">{item.period}</div>
              <div className="text-xl font-bold mb-1">{item.company}</div>
              <div className="text-accent-gold text-sm mb-4">{item.role}</div>
              <div className="text-gray-400 text-sm leading-relaxed">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

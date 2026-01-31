'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'

export default function WhyDeveloper() {
  const { whyDeveloper } = profileData

  return (
    <section id="why-developer" className="py-24 px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">02</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">개발자를 선택한 이유</h2>
          <p className="text-gray-400">Why I Chose Development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-gold" />
            
            {whyDeveloper.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pb-8 last:pb-0"
              >
                <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-accent -translate-x-[5px]" />
                <div className="font-display text-lg text-accent mb-1">{item.year}</div>
                <div className="text-gray-400">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              서비스의 본질을 만드는 사람이 되고 싶었습니다
            </h3>
            
            {whyDeveloper.description.map((text, index) => (
              <p key={index} className="text-gray-400 mb-4 leading-relaxed">
                {text}
              </p>
            ))}

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 mt-8">
              <p className="text-white font-medium">
                💡 {whyDeveloper.highlight}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

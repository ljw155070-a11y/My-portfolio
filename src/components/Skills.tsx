'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'

const SkillLevel = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((dot) => (
      <span
        key={dot}
        className={`w-2 h-2 rounded-full ${
          dot <= level ? 'bg-accent' : 'bg-accent/20'
        }`}
      />
    ))}
  </div>
)

export default function Skills() {
  const { skills } = profileData
  
  const categories = [
    { title: '💻 LANGUAGES', items: skills.languages },
    { title: '🛠 FRAMEWORKS', items: skills.frameworks },
    { title: '📦 LIBRARIES', items: skills.libraries },
    { title: '🔧 TOOLS', items: skills.tools },
  ]

  return (
    <section id="skills" className="py-24 px-8 bg-gradient-to-b from-dark to-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">05-08</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">기술 스택</h2>
          <p className="text-gray-400">Tools / Languages / Frameworks / Libraries</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-secondary/80 backdrop-blur-lg rounded-2xl p-6 border border-accent/15"
            >
              <div className="font-display text-lg text-accent tracking-wide mb-6">
                {category.title}
              </div>
              
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-sm">{skill.name}</span>
                    <SkillLevel level={skill.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

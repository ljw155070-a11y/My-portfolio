'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'HTML', level: 80, icon: '🌐' },
      { name: 'CSS', level: 75, icon: '🎨' },
      { name: 'JavaScript', level: 70, icon: '⚡' },
      { name: 'TypeScript', level: 60, icon: '📘' },
      { name: 'React', level: 65, icon: '⚛️' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Java', level: 65, icon: '☕' },
      { name: 'Node.js', level: 60, icon: '🟢' },
      { name: 'JavaScript', level: 70, icon: '⚡' },
    ],
  },
]

const tools = [
  { name: 'Visual Studio Code', icon: '💻' },
  { name: 'IntelliJ IDEA', icon: '🔧' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐱' },
  { name: 'Figma', icon: '🎨' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-4">
            Skills
          </span>
          <h2 className="section-title gradient-text">기술 스택</h2>
          <p className="section-subtitle mt-4">
            지속적으로 학습하며 성장하고 있습니다
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="card"
            >
              <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Tools & Environment
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl glass-light hover:bg-white/10 transition-all cursor-default"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-medium text-slate-200">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-slate-500 mt-8 text-sm"
        >
          * 현재도 지속적으로 학습하며 역량을 키워나가고 있습니다
        </motion.p>
      </div>
    </section>
  )
}

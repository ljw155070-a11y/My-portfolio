'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, GraduationCap, Target, Lightbulb, Users } from 'lucide-react'

const highlights = [
  {
    icon: Target,
    title: '문제 해결',
    description: '모르는 부분을 그대로 두지 않고 끝까지 해결합니다',
  },
  {
    icon: Lightbulb,
    title: '깊은 이해',
    description: '작은 기능 하나도 정확히 이해하며 개발합니다',
  },
  {
    icon: Users,
    title: '협업',
    description: '팀 프로젝트를 통해 협업 능력을 키워왔습니다',
  },
]

const experiences = [
  {
    icon: GraduationCap,
    title: 'KH 교육원',
    role: '수료 예정',
    period: '2025.05 - 2025.11',
    description: 'Java, JavaScript, React 등 풀스택 개발 과정 수료',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-4">
            About Me
          </span>
          <h2 className="section-title gradient-text">저를 소개합니다</h2>
          <p className="section-subtitle mt-4">
            끊임없이 배우고 성장하는 개발자가 되고 싶습니다
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                안녕하세요! <span className="text-white font-semibold">신입 프론트엔드 개발자 이진원</span>입니다.
              </p>
              <p className="text-slate-400 leading-relaxed">
                늦게 시작했지만 그만큼 더 진지하게, 더 열심히 개발에 임하고 있습니다.
                단순히 코드를 작성하는 것에 그치지 않고, <span className="text-indigo-300">왜 이 코드가 동작하는지</span>,
                <span className="text-indigo-300">어떻게 하면 더 나은 코드를 작성할 수 있는지</span>를 끊임없이 고민합니다.
              </p>
              <p className="text-slate-400 leading-relaxed">
                문제를 만나면 피하지 않고 끝까지 파고들어 해결하는 것이 제 가장 큰 강점입니다.
                이러한 태도로 어떤 어려운 과제도 해결할 수 있다고 믿습니다.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl glass-light group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Tech Stack & Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Tech Categories */}
            <motion.div variants={itemVariants} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                  <Code2 size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Front-end</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'].map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                  <Server size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Back-end</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'JavaScript', 'Node.js'].map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="card">
              <h3 className="text-xl font-bold text-white mb-6">Education</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    <exp.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{exp.title}</h4>
                    <p className="text-sm text-indigo-300">{exp.role}</p>
                    <p className="text-xs text-slate-500 mt-1">{exp.period}</p>
                    <p className="text-sm text-slate-400 mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

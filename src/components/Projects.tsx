'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'
import { GitBranch } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-gradient-to-b from-secondary to-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">PROJECTS</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">프로젝트</h2>
          <p className="text-gray-400">SSR → CSR → Hybrid → Next.js 기술 발전 여정</p>
        </motion.div>

        {/* 발전 과정 타임라인 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center gap-2 mb-16 flex-wrap"
        >
          {profileData.projects.map((project, index) => (
            <div key={project.title} className="flex items-center">
              <div className="flex flex-col items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.badge === 'SSR' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  project.badge === 'CSR + SSR' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                  project.badge === 'Hybrid' ? 'bg-accent/20 text-accent border border-accent/30' :
                  'bg-accent-gold/20 text-accent-gold border border-accent-gold/30'
                }`}>
                  {project.badge}
                </span>
                <span className="text-xs text-gray-500 mt-1">{project.phase.split(':')[0]}</span>
              </div>
              {index < profileData.projects.length - 1 && (
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-accent-gold mx-2" />
              )}
            </div>
          ))}
        </motion.div>

        {/* 프로젝트 카드 */}
        <div className="space-y-8">
          {profileData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-secondary/80 backdrop-blur-lg rounded-3xl p-8 border border-accent/15 relative overflow-hidden group"
            >
              {/* Phase Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.badge === 'SSR' ? 'bg-blue-500/20 text-blue-400' :
                  project.badge === 'CSR + SSR' ? 'bg-purple-500/20 text-purple-400' :
                  project.badge === 'Hybrid' ? 'bg-accent/20 text-accent' :
                  'bg-accent-gold/20 text-accent-gold'
                }`}>
                  {project.phase}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* 프로젝트 기본 정보 */}
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="text-accent text-sm mb-4">{project.period}</div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">담당:</span>
                      <span className="text-gray-300">{project.myRole}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">기여도:</span>
                      <span className="text-accent-gold">{project.contribution}</span>
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-accent hover:text-accent-gold transition-colors text-sm"
                  >
                    <GitBranch size={14} />
                    GitHub에서 보기
                  </a>
                </div>

                {/* 기술 스택 & 기능 */}
                <div className="md:col-span-2">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-accent mt-0.5">▸</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Learned */}
                  <div className="bg-accent-gold/5 rounded-xl p-4 border border-accent-gold/20">
                    <span className="text-xs text-accent-gold">💡 배운 점</span>
                    <p className="text-sm text-gray-300 mt-1">{project.learned}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

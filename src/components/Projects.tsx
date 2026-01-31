'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-gradient-to-b from-secondary to-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">WORKS</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">프로젝트</h2>
          <p className="text-gray-400">Projects I've Worked On</p>
        </motion.div>

        <div className="space-y-12">
          {profileData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center bg-secondary/80 backdrop-blur-lg rounded-3xl p-8 border border-accent/15 ${
                index % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`aspect-video bg-gradient-to-br from-secondary to-dark rounded-2xl border border-accent/20 flex items-center justify-center ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <span className="font-display text-3xl text-accent">{project.title.toUpperCase()}</span>
              </div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="text-accent text-sm mb-4">{project.period}</div>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-accent-gold font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-gold transition-colors"
                >
                  <ExternalLink size={16} />
                  GitHub에서 보기
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

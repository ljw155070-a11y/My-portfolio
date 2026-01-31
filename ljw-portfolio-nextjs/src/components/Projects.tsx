'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All', count: 2 },
  { id: 'team', name: 'Team Project', count: 2 },
  { id: 'solo', name: 'Solo Project', count: 0 },
]

const projects = [
  {
    id: 1,
    title: '세미 프로젝트',
    description: 'KH 교육원 세미 프로젝트. HTML, CSS를 활용한 웹 페이지 제작. 팀원들과 협업하여 기획부터 개발까지 진행했습니다.',
    image: '/images/semi-project.jpg',
    category: 'team',
    tags: ['HTML', 'CSS', 'Team'],
    links: {
      github: '#',
      live: '#',
    },
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 2,
    title: '파이널 프로젝트',
    description: 'KH 교육원 파이널 프로젝트. HTML, CSS, JavaScript, React를 활용한 풀스택 웹 애플리케이션 개발.',
    image: '/images/final-project.jpg',
    category: 'team',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Team'],
    links: {
      github: '#',
      live: '#',
    },
    color: 'from-emerald-500 to-teal-500',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 mb-4">
            Projects
          </span>
          <h2 className="section-title gradient-text">프로젝트</h2>
          <p className="section-subtitle mt-4">
            배운 것을 직접 적용해본 프로젝트들입니다
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'glass-light text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-slate-700'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <div className="card overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/20 font-display">
                      #{project.id}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View More */}
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                  >
                    자세히 보기
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State for Solo Projects */}
        {activeCategory === 'solo' && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">준비 중입니다</h3>
            <p className="text-slate-400">곧 개인 프로젝트를 업로드할 예정입니다!</p>
          </motion.div>
        )}

        {/* More Projects Coming */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            더 많은 프로젝트가 곧 추가될 예정입니다 ✨
          </p>
        </motion.div>
      </div>
    </section>
  )
}

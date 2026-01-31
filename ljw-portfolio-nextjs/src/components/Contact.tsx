'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, MapPin, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'wjsgusdn1tp@gmail.com',
    href: 'mailto:wjsgusdn1tp@gmail.com',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Mail,
    label: 'Email (Naver)',
    value: 'wjsgusdn1tp@naver.com',
    href: 'mailto:wjsgusdn1tp@naver.com',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ljw155070',
    href: 'https://github.com/ljw155070',
    color: 'from-slate-500 to-slate-700',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-pink-500/10 border border-pink-500/20 text-pink-300 mb-4">
            Contact
          </span>
          <h2 className="section-title gradient-text">연락하기</h2>
          <p className="section-subtitle mt-4">
            함께 일하고 싶으시다면 언제든지 연락 주세요!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card text-center group cursor-pointer"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-sm text-slate-400 group-hover:text-indigo-300 transition-colors break-all">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card text-center"
          >
            <div className="max-w-lg mx-auto">
              <div className="text-5xl mb-6">👋</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                함께 성장하고 싶습니다
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                신입이지만 배움에 대한 열정과 문제를 끝까지 해결하려는 끈기가 있습니다.
                함께 일할 수 있는 기회를 주신다면 최선을 다하겠습니다.
              </p>
              <motion.a
                href="mailto:wjsgusdn1tp@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                <span>이메일 보내기</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

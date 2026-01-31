'use client'

import { motion } from 'framer-motion'
import { profileData } from '@/data/profile'
import { Mail, Phone, MapPin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            함께 성장할 기회를 기다립니다
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            8년간의 QA 경험을 바탕으로 사용자 중심의 안정적인 서비스를 개발하는 개발자가 되겠습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-gold rounded-xl flex items-center justify-center">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase tracking-widest">Email</div>
              <div className="text-lg">{profileData.email}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-gold rounded-xl flex items-center justify-center">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase tracking-widest">Phone</div>
              <div className="text-lg">{profileData.phone}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-gold rounded-xl flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase tracking-widest">Location</div>
              <div className="text-lg">{profileData.location}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-gold text-white rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30"
          >
            <Mail size={18} />
            이메일 보내기
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent rounded-full font-medium transition-all hover:bg-accent hover:text-white hover:-translate-y-1"
          >
            <Github size={18} />
            GitHub 방문
          </a>
        </motion.div>
      </div>
    </section>
  )
}

"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-24 pb-12 px-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(233,69,96,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.1)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(233,69,96,0.08)_0%,transparent_40%)]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30 animate-grid-move"
        style={{
          backgroundImage: `
            linear-gradient(rgba(233, 69, 96, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(233, 69, 96, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
            안녕하세요,
            <span className="block gradient-text">
              {profileData.title} {profileData.name}입니다.
            </span>
          </h1>

          <p className="text-lg text-gray-400 mb-6 pl-4 border-l-4 border-accent">
            {profileData.tagline}
          </p>

          {/* Stats */}
          <div className="flex gap-6 mb-6">
            {profileData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl text-accent">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-gold text-white rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 text-sm"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent rounded-full font-medium transition-all hover:bg-accent hover:text-white hover:-translate-y-1 text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Profile Image - 원형 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent to-accent-gold rounded-full opacity-20 blur-xl" />

            {/* Border Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-br from-accent to-accent-gold rounded-full" />

            {/* White Background + Image Container */}
            <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden bg-white">
              <img
                src={`${process.env.NODE_ENV === "production" ? "/My-portfolio" : ""}/profile.jpg`}
                alt="이진원 프로필 사진"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profileData } from '@/data/profile'
import { X, ChevronRight } from 'lucide-react'

// 모달 컴포넌트
function Modal({ isOpen, onClose, category }: { isOpen: boolean; onClose: () => void; category: any }) {
  if (!category?.modal) return null

  const { modal } = category

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-secondary border border-accent/30 rounded-3xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold">{modal.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{modal.description}</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* 테스트 경험 모달 */}
              {modal.details && (
                <div className="grid md:grid-cols-2 gap-4">
                  {modal.details.map((detail: any, idx: number) => (
                    <div key={idx} className="bg-dark/50 rounded-xl p-4 border border-white/5">
                      <div className="text-accent font-medium mb-2">{detail.label}</div>
                      <div className="text-gray-400 text-sm">{detail.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* QA 프로세스 모달 - 테이블 */}
              {modal.tableHeaders && (
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          {modal.tableHeaders.map((header: string, idx: number) => (
                            <th key={idx} className="text-left py-3 px-4 text-accent font-medium">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {modal.tableData.map((row: string[], rowIdx: number) => (
                          <tr key={rowIdx} className="border-b border-white/5 hover:bg-white/5">
                            {row.map((cell: string, cellIdx: number) => (
                              <td key={cellIdx} className="py-3 px-4 text-gray-400">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {modal.signOffConditions && (
                    <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                      <h4 className="font-bold text-accent mb-4">QA Sign-off 조건</h4>
                      <ul className="space-y-2">
                        {modal.signOffConditions.map((condition: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <span className="text-accent">✓</span>
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* 업무 효율화 모달 */}
              {modal.cases && (
                <div className="space-y-6">
                  {modal.cases.map((caseItem: any, idx: number) => (
                    <div key={idx} className="bg-dark/50 rounded-xl p-6 border border-white/5">
                      <h4 className="text-lg font-bold text-accent-gold mb-3">{caseItem.title}</h4>
                      <p className="text-gray-400 mb-4">{caseItem.desc}</p>
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-accent/10 rounded-lg px-4 py-2 border border-accent/20">
                          <span className="text-xs text-gray-500">결과</span>
                          <p className="text-sm text-white">{caseItem.result}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg px-4 py-2">
                          <span className="text-xs text-gray-500">비고</span>
                          <p className="text-sm text-gray-400">{caseItem.extra}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 주요 산출물 모달 */}
              {modal.documents && (
                <div className="space-y-8">
                  {modal.documents.map((doc: any, idx: number) => (
                    <div key={idx} className="bg-dark/50 rounded-xl p-6 border border-white/5">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-bold text-accent">{doc.title}</h4>
                        <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                          산출물 #{idx + 1}
                        </span>
                      </div>
                      
                      <div className="bg-accent-gold/10 rounded-lg p-4 mb-4 border border-accent-gold/20">
                        <span className="text-xs text-accent-gold">목적</span>
                        <p className="text-sm text-white mt-1">{doc.purpose}</p>
                      </div>

                      {doc.columns && (
                        <div className="mb-4">
                          <span className="text-xs text-gray-500">TC 구성</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {doc.columns.map((col: string, colIdx: number) => (
                              <span key={colIdx} className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">
                                {col}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {doc.examples && (
                        <div className="mb-4">
                          <span className="text-xs text-gray-500">예시</span>
                          <ul className="mt-2 space-y-2">
                            {doc.examples.map((ex: string, exIdx: number) => (
                              <li key={exIdx} className="text-sm text-gray-400 flex items-start gap-2">
                                <ChevronRight size={14} className="text-accent mt-1 flex-shrink-0" />
                                {ex}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {doc.method && (
                        <div className="mb-4">
                          <span className="text-xs text-gray-500">방식</span>
                          <p className="text-sm text-gray-400 mt-1">{doc.method}</p>
                        </div>
                      )}

                      {doc.categories && !doc.categories[0]?.area && (
                        <div className="mb-4">
                          <span className="text-xs text-gray-500">카테고리</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {doc.categories.map((cat: string, catIdx: number) => (
                              <span key={catIdx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {doc.includes && (
                        <div className="mb-4">
                          <span className="text-xs text-gray-500">포함 내용</span>
                          <ul className="mt-2 space-y-2">
                            {doc.includes.map((item: string, itemIdx: number) => (
                              <li key={itemIdx} className="text-sm text-gray-400 flex items-start gap-2">
                                <span className="text-accent">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {doc.categories && doc.categories[0]?.area && (
                        <div>
                          <span className="text-xs text-gray-500">가이드라인 영역</span>
                          <div className="mt-2 space-y-2">
                            {doc.categories.map((cat: any, catIdx: number) => (
                              <div key={catIdx} className="flex items-start gap-4 bg-white/5 rounded-lg p-3">
                                <span className="text-accent font-medium text-sm min-w-[60px]">{cat.area}</span>
                                <span className="text-gray-400 text-sm">{cat.example}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function QAExperience() {
  const { qaExperience } = profileData
  const [selectedCategory, setSelectedCategory] = useState<any>(null)

  return (
    <section id="qa-experience" className="py-24 px-8 bg-gradient-to-b from-dark to-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-display text-sm text-accent tracking-[0.2em] mb-2">QA EXPERIENCE</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">{qaExperience.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{qaExperience.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {qaExperience.categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className="group bg-secondary/80 backdrop-blur-lg rounded-2xl p-6 border border-accent/15 hover:border-accent/40 transition-all cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <div className="flex items-center gap-2 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>상세보기</span>
                  <ChevronRight size={14} />
                </div>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + itemIndex * 0.05 }}
                    className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                  >
                    <span className="text-accent mt-1 flex-shrink-0">▸</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              {/* Click indicator */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center">
                <span className="text-xs text-gray-500 group-hover:text-accent transition-colors">
                  클릭하여 산출물 미리보기
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 핵심 성과 하이라이트 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-accent/10 to-transparent rounded-2xl p-6 border border-accent/20 text-center">
            <div className="font-display text-5xl gradient-text mb-2">40%</div>
            <div className="text-sm text-gray-400">테스트 자동화 전환률</div>
          </div>
          <div className="bg-gradient-to-br from-accent-gold/10 to-transparent rounded-2xl p-6 border border-accent-gold/20 text-center">
            <div className="font-display text-5xl gradient-text mb-2">17+</div>
            <div className="text-sm text-gray-400">빌드 사전 체크리스트 항목</div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-transparent rounded-2xl p-6 border border-accent/20 text-center">
            <div className="font-display text-5xl gradient-text mb-2">3%↓</div>
            <div className="text-sm text-gray-400">QA Sign-off 크래시율 기준</div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        category={selectedCategory}
      />
    </section>
  )
}

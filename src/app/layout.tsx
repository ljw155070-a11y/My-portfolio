import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '이진원 | Full-Stack Developer Portfolio',
  description: '8년 QA 경력을 바탕으로 사용자 경험과 서비스 완성도를 고민하는 풀스택 개발자 이진원입니다.',
  keywords: ['이진원', '풀스택 개발자', 'Java', 'Spring', 'React', '포트폴리오'],
  authors: [{ name: '이진원' }],
  openGraph: {
    title: '이진원 | Full-Stack Developer',
    description: '사용자 경험과 서비스 완성도를 고민하는 풀스택 개발자',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

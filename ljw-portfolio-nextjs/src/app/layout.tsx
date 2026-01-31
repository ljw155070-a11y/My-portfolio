import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://ljw155070.github.io/My-portfolio'
const siteName = '이진원 포트폴리오'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '프론트엔드 개발자 포트폴리오 | 이진원 | React JavaScript 신입 개발자',
    template: '%s | 이진원 포트폴리오'
  },
  description: '프론트엔드 개발자 포트폴리오 - 이진원. React, JavaScript, HTML, CSS 기반 웹 개발. KH 교육원 수료. 문제를 끝까지 해결하는 개발자. 신입 프론트엔드 개발자 채용 문의 환영.',
  applicationName: '이진원 프론트엔드 개발자 포트폴리오',
  keywords: [
    '프론트엔드 개발자 포트폴리오',
    '신입 개발자',
    '프론트엔드 개발',
    '웹 개발자',
    'React 개발자',
    'JavaScript 개발자',
    'HTML CSS',
    'KH 교육원',
    '신입 프론트엔드',
    '주니어 개발자',
    '웹 퍼블리셔',
    'NodeJS',
    'TypeScript',
    '개발자 구인',
    '개발자 채용',
  ],
  authors: [{ name: '이진원', url: siteUrl }],
  creator: '이진원',
  publisher: '이진원',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: siteName,
    title: '프론트엔드 개발자 포트폴리오 | 이진원 | React JavaScript 신입 개발자',
    description: '프론트엔드 개발자 포트폴리오 - 이진원. React, JavaScript 기반 웹 개발. 문제를 끝까지 해결하는 개발자.',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: '프론트엔드 개발자 이진원 포트폴리오',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '프론트엔드 개발자 포트폴리오 | 이진원',
    description: '프론트엔드 개발자 포트폴리오 - 이진원. React, JavaScript 기반 웹 개발.',
    images: [`${siteUrl}/images/og-image.png`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
  },
}

// JSON-LD 구조화 데이터
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '이진원',
  jobTitle: '프론트엔드 개발자',
  description: '늦게 시작했지만 누구보다 진지하게 개발에 임하는 신입 프론트엔드 개발자입니다. 모르는 부분을 그대로 두지 않고 끝까지 해결하는 것을 가장 중요한 태도로 생각합니다.',
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  sameAs: [
    'https://github.com/ljw155070',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
  },
  email: 'wjsgusdn1tp@gmail.com',
  knowsAbout: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Java',
    '프론트엔드 개발',
    '웹 개발',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'KH 교육원',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '이진원 포트폴리오',
  url: siteUrl,
  description: '프론트엔드 개발자 이진원의 포트폴리오 웹사이트',
  author: {
    '@type': 'Person',
    name: '이진원',
  },
  inLanguage: 'ko-KR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-950 text-slate-200 antialiased">
        {children}
      </body>
    </html>
  )
}

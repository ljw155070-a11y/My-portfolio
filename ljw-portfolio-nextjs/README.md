# 이진원 포트폴리오 🚀

Next.js 14 + TypeScript + Tailwind CSS로 만든 개인 포트폴리오 웹사이트입니다.

## 🌐 배포 주소
https://ljw155070.github.io/My-portfolio/

## ✨ 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **다크 테마**: 세련된 다크 모드 디자인
- **애니메이션**: Framer Motion을 활용한 부드러운 애니메이션
- **SEO 최적화**: 메타태그, Open Graph, JSON-LD 구조화 데이터
- **PWA 지원**: 앱처럼 설치 가능
- **GitHub Pages 배포**: GitHub Actions 자동 배포

## 🛠 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 📁 프로젝트 구조

```
├── src/
│   ├── app/
│   │   ├── globals.css     # 글로벌 스타일
│   │   ├── layout.tsx      # 레이아웃 (SEO 설정)
│   │   └── page.tsx        # 메인 페이지
│   └── components/
│       ├── Header.tsx      # 네비게이션
│       ├── Hero.tsx        # 히어로 섹션
│       ├── About.tsx       # 소개 섹션
│       ├── Skills.tsx      # 스킬 섹션
│       ├── Projects.tsx    # 프로젝트 섹션
│       ├── Contact.tsx     # 연락처 섹션
│       └── Footer.tsx      # 푸터
├── public/
│   ├── images/             # 이미지 파일
│   ├── manifest.json       # PWA 매니페스트
│   └── robots.txt          # 검색 엔진 설정
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions 배포
```

## 📝 배포 방법

1. GitHub에 저장소 생성
2. 코드 푸시
3. Settings > Pages > Source를 "GitHub Actions"로 설정
4. 자동 배포 완료!

## 🎨 커스터마이징

### 개인 정보 수정
- `src/app/layout.tsx`: SEO 메타데이터
- `src/components/Hero.tsx`: 소개 문구
- `src/components/About.tsx`: 상세 소개
- `src/components/Skills.tsx`: 스킬 목록
- `src/components/Projects.tsx`: 프로젝트 목록
- `src/components/Contact.tsx`: 연락처

### 색상 테마 수정
- `tailwind.config.ts`: 색상 팔레트
- `src/app/globals.css`: CSS 변수

## 📄 라이선스

MIT License

---

Made with ❤️ by 이진원

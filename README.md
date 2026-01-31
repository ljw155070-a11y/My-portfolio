# 이진원 포트폴리오

Next.js 14 기반 개인 포트폴리오 웹사이트입니다.

## 🛠 기술 스택

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (정적 export)

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css      # 글로벌 스타일
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 메인 페이지
├── components/
│   ├── Navigation.tsx   # 네비게이션
│   ├── Hero.tsx         # 히어로 섹션
│   ├── Identity.tsx     # 한 줄 정체성
│   ├── WhyDeveloper.tsx # 개발자 선택 이유
│   ├── Career.tsx       # 걸어온 길
│   ├── ProblemSolving.tsx # 문제 해결 경험
│   ├── Skills.tsx       # 기술 스택
│   ├── Goals.tsx        # 성장 목표
│   ├── Projects.tsx     # 프로젝트
│   ├── Contact.tsx      # 연락처
│   └── Footer.tsx       # 푸터
└── data/
    └── profile.ts       # 프로필 데이터
```

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 📦 배포

GitHub에 push하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

**배포 URL:** https://ljw155070.github.io/My-portfolio/

## 👤 연락처

- **Email:** ljw940727@naver.com
- **GitHub:** https://github.com/ljw155070

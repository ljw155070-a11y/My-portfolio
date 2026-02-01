export const profileData = {
  name: '이진원',
  nameEn: 'Lee Jinwon',
  title: '신입 개발자',
  tagline: '사용자 경험과 서비스 완성도를 고민하는 풀스택 개발자',
  email: 'ljw940727@naver.com',
  phone: '010-3824-3281',
  location: '경기도 군포시',
  github: 'https://github.com/ljw155070-a11y',
  
  stats: [
    { number: '8+', label: 'Years QA' },
    { number: '2', label: 'Projects' },
    { number: '98%', label: 'Attendance' },
  ],
  
  identity: '8년간 QA로 다져진 문제 해결 능력과 사용자 중심 사고를 갖춘 풀스택 개발자',
  
  whyDeveloper: {
    timeline: [
      { year: 'QA 시절', text: '서비스 품질 관리, 문제 분석, 협업 경험 축적' },
      { year: '깨달음', text: '서비스의 본질을 설계하고 구현하고 싶다는 열망' },
      { year: '결심', text: '미뤄두었던 개발자의 꿈, 후회 없는 재도전' },
      { year: '현재', text: 'KH 정보교육원 수료, 풀스택 개발자로 성장 중' },
    ],
    description: [
      '오래전부터 직접 서비스를 만드는 개발자가 되고 싶었습니다. 하지만 여러 이유로 QA 업무를 먼저 시작했고, 덕분에 서비스 품질 관리, 문제 분석, 협업 경험을 쌓을 수 있었습니다.',
      '프로젝트를 진행할수록 개발자로서 서비스의 본질을 설계하고 구현하고 싶다는 마음은 더 깊어졌습니다.',
    ],
    highlight: 'QA에서 쌓은 경험은 사용자의 관점에서 문제를 바라보고, 서비스의 완성도를 높이는 데 큰 강점이 됩니다.',
  },
  
  career: [
    {
      period: '2025.05 - 2025.11',
      company: 'KH 정보교육원',
      role: 'React & Spring 활용 Java 개발자 양성과정',
      description: 'Java, Spring Boot, React, Oracle 등 풀스택 개발 기술 습득. 세미/파이널 프로젝트 조장으로 팀 리딩 경험.',
    },
    {
      period: '2022.02 - 2025.04',
      company: '(주) 하이브로',
      role: 'QA 팀원 / TF 팀장',
      description: '모바일 게임 QA 리딩 및 유관부서 실무 협업. TF팀장으로 신규 출시 게임 QA 일정 조율, 업데이트 기획 점검 및 문제점 보고.',
    },
    {
      period: '2017.06 - 2022.02',
      company: '아이지에스 (주)',
      role: 'QA 팀원 → 테스트 자동화팀 리더',
      description: 'JavaScript(Blockly) 기반 모바일 게임 자동화 테스트. QA 전체 수동 업무 대비 자동화 전환률 평균 40% 달성. 고객사 넷마블과 협업.',
    },
    {
      period: '2018 / 2026',
      company: '학력',
      role: '컴퓨터공학 전공',
      description: '수성대학교 컴퓨터정보과 졸업 (2018) / 학점은행제 컴퓨터공학과 졸업 예정 (2026)',
    },
  ],
  
  problemSolving: {
    steps: [
      { icon: '🔍', title: '상황 파악', desc: '문제 발생 상황과 영향 범위 분석' },
      { icon: '🎯', title: '원인 분석', desc: '근본 원인 추적 및 재현 조건 확인' },
      { icon: '💡', title: '해결 방안', desc: '여러 대안 검토 후 최적 솔루션 선택' },
      { icon: '🚀', title: '실행', desc: '단계별 구현 및 테스트' },
      { icon: '📝', title: '회고', desc: '배운 점 정리 및 문서화' },
    ],
    example: {
      title: '파이널 프로젝트 설계 개선',
      situation: '세미 프로젝트에서 더미 데이터 세팅 부족, 공통 CSS 미정리, DB 제약 조건 검토 미흡으로 개발 중 시간 허비.',
      solution: '파이널 프로젝트에서 ERD 설계 → 팀원 전체 검토 → 스키마 변경 없는 구조 설계. GPT 활용 2만 개 더미 데이터 생성. 공통 UI 컴포넌트/모듈화, 컬러 가이드 사전 정의.',
      result: '팀 전체 진행 속도 균일화, 기능 완성도 크게 향상. QA 경험 활용해 개발 종료 2일 전 테스트 기간 확보.',
    },
    // 아코디언용 examples 배열
    examples: [
      {
        title: '파이널 프로젝트 설계 개선',
        situation: '세미 프로젝트에서 더미 데이터 세팅 부족, 공통 CSS 미정리, DB 제약 조건 검토 미흡으로 개발 중 시간 허비.',
        solution: '파이널 프로젝트에서 ERD 설계 → 팀원 전체 검토 → 스키마 변경 없는 구조 설계. GPT 활용 2만 개 더미 데이터 생성.',
        result: '팀 전체 진행 속도 균일화, 기능 완성도 크게 향상.',
      },
      {
        title: 'N+1 쿼리 성능 개선',
        situation: '회원 목록 조회 시 2초 이상 소요되는 성능 이슈 발생.',
        solution: 'JOIN을 활용한 단일 쿼리로 변경, 필요한 컬럼만 SELECT.',
        result: '응답 시간 2초 → 0.3초로 85% 개선.',
      },
      {
        title: '찜 기능 중복 데이터 방지',
        situation: '찜 기능 중복 클릭 시 데이터 무결성 오류 발생.',
        solution: 'MEMBER_NO + BOARD_NO 복합 PK 적용.',
        result: '운영 단계 오류 가능성 원천 차단.',
      },
    ],
  },

  // QA 경험 - 3가지 핵심 강점으로 간소화 (피드백 반영)
  qaExperience: {
    title: 'QA 경험이 개발에 주는 강점',
    description: '8년간 QA로 일하며 쌓은 경험이 개발자로서 차별화된 강점이 됩니다.',
    categories: [
      {
        title: '🔍 엣지 케이스 예측',
        items: [
          '8년간 버그를 찾아온 경험으로 사용자가 어디서 실수할지 미리 예측',
          '페이징, 검색, 입력값 검증 등 예외 상황 중심 설계에 적용',
        ],
      },
      {
        title: '📋 체계적 문서화',
        items: [
          'TC 작성, 버그 리포트, 회의록 등 명확한 기록 습관',
          'ERD 설계, API 명세, 코드 주석 작성에 자연스럽게 적용',
        ],
      },
      {
        title: '🤝 부서 간 커뮤니케이션',
        items: [
          '기획/개발/디자인/IP팀/고객사(넷마블) 등 다양한 부서와 협업 경험',
          '요구사항 분석 시 기획 의도 파악, 개발 일정 조율에 강점',
        ],
      },
    ],
  },
  
  // 스킬 - 기존 구조 유지 (languages, frameworks, libraries, tools)
  skills: {
    languages: [
      { name: 'Java 17', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'HTML5 / CSS3', level: 4 },
      { name: 'SQL (Oracle)', level: 3 },
    ],
    frameworks: [
      { name: 'Spring Boot', level: 4 },
      { name: 'React', level: 3 },
      { name: 'MyBatis', level: 4 },
      { name: 'Thymeleaf', level: 3 },
    ],
    libraries: [
      { name: 'Axios', level: 4 },
      { name: 'Recoil', level: 3 },
      { name: 'Chart.js', level: 3 },
      { name: 'Material UI', level: 3 },
    ],
    tools: [
      { name: 'VS Code', level: 5 },
      { name: 'Git / GitHub', level: 4 },
      { name: 'Jira / Confluence', level: 5 },
      { name: 'SQL Developer', level: 4 },
    ],
  },
  
  goals: [
    {
      period: '1Y',
      label: '단기 목표',
      title: '개발자로서의 기반 완성',
      description: 'Java & Spring 기반 개발 역량을 유지하며, 정식 개발 포지션에서 실무 자격 기반을 마련하는 시기입니다.',
      points: ['정보처리기사 실기 취득', '학점은행제 4년제 학사 학위 취득', '실무 프로젝트 경험 축적'],
    },
    {
      period: '5Y',
      label: '중기 목표',
      title: '시스템 이해력 강화',
      description: '네트워크/서버/운영체제에 대한 기반 지식을 확장해 인프라 관점에서 시스템을 바라볼 수 있는 개발자로 성장합니다.',
      points: ['네트워크 관리사 자격 학습', '리눅스 마스터 학습 및 서버 환경 다루기', '배포/운영 프로세스 전반적인 이해'],
    },
    {
      period: '10Y',
      label: '장기 목표',
      title: '기술 스택을 선택할 수 있는 개발자',
      description: '특정 기술에만 종속되지 않고, 서비스 특성에 맞는 언어와 기술 스택을 스스로 선택할 수 있는 역량을 갖춥니다.',
      points: ['Python 데이터 처리/자동화 구축 경험', 'C# 기반 개발 환경 이해', 'PM으로 성장해 조직에 기여'],
    },
  ],
  
  projects: [
    {
      title: 'Talk & Deal',
      period: '2025.10.01 - 2025.11.04 (파이널 프로젝트)',
      description: '사용자가 자신의 관심사와 필요에 따라 정보를 공유할 수 있는 커뮤니티 사이트. CSR + SSR 혼합 아키텍처로 화면 특성에 따른 렌더링 전략 구분.',
      tech: ['React', 'Spring Boot', 'MyBatis', 'Oracle', 'Chart.js', 'Recoil'],
      features: [
        '회원 관리 기능 (검색/정렬/페이징/정지 처리)',
        '통계 대시보드 (Chart.js 시각화)',
        '공지사항 관리 (React-Quill 에디터)',
        'SSR 기반 공지/소개 페이지 (Thymeleaf)',
        'Excel Export 기능 (SheetJS)',
      ],
      github: 'https://github.com/ljw155070-a11y/final_project',
    },
    {
      title: '레시피허브',
      period: '2025.08.19 - 2025.09.05 (세미 프로젝트)',
      description: '누구나 쉽게 레시피를 공유하고 요리에만 집중할 수 있는 공간. AJAX를 활용한 비동기 통신으로 사용자 경험 향상.',
      tech: ['Spring Boot', 'Thymeleaf', 'MyBatis', 'jQuery', 'AJAX'],
      features: [
        '레시피 게시판 CRUD (조리 순서/재료 동적 추가)',
        '평점 시스템 (AJAX 비동기 처리)',
        '댓글 CRUD 및 신고 기능',
        '페이징 처리 (유지보수성 고려 설계)',
        '오늘의 인기/추천 레시피 메인 화면',
      ],
      github: 'https://github.com/ljw155070-a11y/teamproject',
    },
  ],
}

export const profile = profileData
export default profileData

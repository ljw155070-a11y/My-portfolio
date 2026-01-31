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
    { number: '4', label: 'Projects' },
    { number: 'A~B+', label: 'Avg. Rating' },
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
      description: '모바일 게임 QA 리딩 및 유관부서 실무 협업. TF팀장으로 신규 출시 게임 QA 일정 조율, 업데이트 기획 점검 및 문제점 보고. 양대 마켓(구글, 애플) 빌드 관리. 앱스토어 정책 TC 제작, 글로벌 법률(유럽 GDPR, 일본 자금결제법) 테스트.',
    },
    {
      period: '2021 - 2022',
      company: '아이지에스 (주)',
      role: '테스트 자동화팀 리더',
      description: 'JavaScript(Blockly) 기반 모바일 게임 자동화 테스트. QA 전체 수동 업무 대비 자동화 전환률 평균 40% 달성. 스크립트 작성 매뉴얼 제작 및 중국 법인 화상 교육.',
    },
    {
      period: '2020',
      company: '아이지에스 (주)',
      role: '서울 본사 QA 팀원',
      description: '고객사 넷마블과 협업하여 모바일 게임 테스트 엔지니어 및 리딩.',
    },
    {
      period: '2017 - 2019',
      company: '아이지에스 (주)',
      role: '대구 QA/QM 팀원 → 테스트 리더',
      description: '입사 후 QA 테스트 리더로 성장. 공통 테스트 문서 생성 및 관리, 테스트 엔지니어 교육 문서 작성.',
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
    examples: [
      {
        category: '설계',
        title: '세미 → 파이널 프로젝트 설계 개선',
        situation: '세미 프로젝트에서 더미 데이터 세팅 부족, 공통 CSS 미정리, DB 제약 조건 검토 미흡으로 개발 중 시간 허비.',
        solution: 'ERD 설계 → 팀원 전체 검토 → 스키마 변경 없는 구조 설계. GPT 활용 2만 개 더미 데이터 생성. 공통 UI 컴포넌트/모듈화, 컬러 가이드 사전 정의.',
        result: '팀 전체 진행 속도 균일화, 기능 완성도 크게 향상. QA 경험 활용해 개발 종료 2일 전 테스트 기간 확보.',
      },
      {
        category: '아키텍처',
        title: 'SSR vs CSR 렌더링 전략 선택',
        situation: 'Talk & Deal 프로젝트에서 모든 페이지를 CSR로 구현하려 했으나, SEO가 필요한 공지/소개 페이지는 SSR이 적합.',
        solution: '화면 특성에 따른 렌더링 전략 구분. 동적 UX가 필요한 관리자 페이지는 React(CSR), SEO가 중요한 공개 페이지는 Thymeleaf(SSR)로 분리.',
        result: 'CSR + SSR 하이브리드 아키텍처 완성. 이후 Comeunity, Pyeonharu 프로젝트에서 이 경험을 발전시켜 적용.',
      },
      {
        category: '생산성',
        title: 'Comeunity 4주 → 4일 개발 기간 단축',
        situation: '유사 커뮤니티 프로젝트는 4인 기준 약 4주 소요. 빠른 MVP 출시가 필요한 상황.',
        solution: '바이브코딩 기반 협업으로 반복 코딩 시간 최소화. SSR 1개 + CSR 2개 역할 분담으로 충돌 감소. JWT 인증/권한 분리로 운영 기능 빠르게 구현.',
        result: '4일 내 완성, 생산성 700% 향상. AWS Windows 서버 배포까지 완료.',
      },
      {
        category: '배포',
        title: 'AWS 배포 환경 다각화',
        situation: 'Comeunity는 Windows 기반으로 배포했으나, 리눅스 환경 경험 필요성을 느낌.',
        solution: 'Pyeonharu 프로젝트에서 AWS Linux 서버 배포 계획. 리눅스 명령어, 배포 스크립트, 서버 환경 설정 학습 중.',
        result: 'Windows/Linux 양쪽 배포 경험을 통해 인프라 관점의 시스템 이해력 강화 (중기 목표와 연결).',
      },
    ],
  },

  qaExperience: {
    title: '8년간 QA로 문제 해결 능력을 키운 방법',
    description: '단순히 버그를 찾는 것에 그치지 않고, 문제의 근본 원인을 분석하고 재발 방지책을 제시하는 과정을 반복했습니다.',
    categories: [
      {
        title: '🔬 테스트 경험',
        items: [
          '클라이언트 성능 테스트 / 네트워크 부하 테스트',
          'iOS 앱스토어 정책 테스트 / 앱 공존성 테스트',
          '인증 테스트 / 로그 테스트',
          '현지화·국제화 테스트 / 서버 다운 테스트',
          '어뷰징 테스트 / 밸런스 테스트',
        ],
        modal: {
          title: '테스트 경험 상세',
          description: '다양한 테스트 유형을 경험하며 서비스 품질을 검증하는 역량을 키웠습니다.',
          details: [
            { label: '클라이언트 성능', value: '메모리 누수, CPU 사용률, 프레임 드랍 테스트' },
            { label: '네트워크 부하', value: '동시 접속, 패킷 손실, 지연 환경 테스트' },
            { label: '앱스토어 정책', value: 'iOS/Android 심사 지침 기반 사전 검증' },
            { label: '현지화/국제화', value: '다국어 UI, 날짜/통화 포맷, 법률 준수 테스트' },
            { label: '어뷰징', value: '재화 변조, 결제 우회, 치트 탐지 테스트' },
          ],
        },
      },
      {
        title: '📋 QA 프로세스 구축',
        items: [
          '출시 예정 프로젝트 QA 계획 수립 (사전QA → 정식QA → LIVE QA)',
          'QA Sign-off 조건 정의: 커버리지 100%, 중요 이슈 0건, 크래시율 3% 미만',
          '빌드 사전 체크리스트 17개 항목 정립',
          '서비스 프로젝트 점검 QA 및 모니터링 프로세스',
        ],
        modal: {
          title: 'QA 프로세스 산출물',
          description: '출시 프로젝트와 서비스 프로젝트 각각에 맞는 QA 프로세스를 정립했습니다.',
          tableHeaders: ['구분', '기간', '목적', 'QA 시작 조건', 'QA 커버리지'],
          tableData: [
            ['사전 QA', '3일', 'QA 가능 상태 확인', '개발 완료율 80% 이상', 'BAT'],
            ['정식 1차', '7~14일', '전체 품질 검증', 'BAT 성공률 80% 이상', '전체 커버리지'],
            ['정식 2차', '3~5일', '수정/추가 항목 검증', '중요 이슈 0건', '이슈 수정 확인'],
            ['LIVE QA', '3일', '실서비스 최종 테스트', '최종 QA 완료', '기본기능 회귀'],
          ],
          signOffConditions: [
            '전체 커버리지 테스트 수행 100%',
            '중요 이상 이슈 0건',
            '크래시율 3% 미만',
          ],
        },
      },
      {
        title: '⚡ 업무 효율화',
        items: [
          'JavaScript(Blockly) 기반 테스트 자동화 → 수동 대비 40% 자동화 전환',
          'Google Apps Script로 패치노트 → QA 대시보드 자동 반영',
          '테스트 불가/비효율 항목 타부서 R&R 협의',
        ],
        modal: {
          title: '업무 효율화 사례',
          description: '반복 업무를 자동화하고 부서간 협업을 통해 QA 효율을 극대화했습니다.',
          cases: [
            {
              title: 'Test Automation (Blockly)',
              desc: '인게임 오브젝트 값을 조회하고 JavaScript 기반 Blockly를 활용하여 동작/매칭/테스트 자동화',
              result: 'IGS QA 전체 수동 업무 대비 자동화 전환률 평균 40% 달성',
              extra: '스크립트 작성 매뉴얼 제작 및 중국 법인 화상 교육 진행',
            },
            {
              title: 'Google Apps Script',
              desc: '컨플루언스 패치노트 변경사항을 QA 대시보드(구글 스프레드시트)에 자동 반영',
              result: '반복적인 문서 작업 시간 최소화',
              extra: '구글에서 제공되는 기능 활용',
            },
            {
              title: 'QA R&R 협의',
              desc: '테스트가 비효율적이거나 불가한 항목에 대해 리스크 기반 타부서 협의',
              result: 'QA가 확인 어려운 항목에 대한 부서별 협조 체계 구축',
              extra: '개발팀/기획팀/운영팀과 역할 분담',
            },
          ],
        },
      },
      {
        title: '📝 주요 산출물',
        items: [
          '앱스토어 심사 지침 TC: 애플 리젝 사전 방지로 개발 일정 변수 최소화',
          '인증 TC: 프로젝트별 상이한 인증 플랫폼/프로세스 규격화',
          'QA Report: 품질 기준 충족 여부, 테스트 환경/일정, 잔여 이슈 협의 내용 종합',
          '최소 품질 가이드라인: BM, 안정성, 편의성 등 신규 개발 품질 기준 문서화',
        ],
        modal: {
          title: '주요 산출물 상세',
          description: 'QA 업무의 표준화와 품질 보증을 위해 다양한 문서를 제작했습니다.',
          documents: [
            {
              title: '앱스토어 심사 지침 TC',
              purpose: '애플 심사 리젝 사전 방지로 개발 일정 변수 최소화',
              columns: ['지침 분류', '하위 분류', '앱 심사 지침 (원본)', '사전 조건', '기대 결과'],
              examples: [
                '메타데이터 → 아이콘 → 4세 이상 연령 등급 준수 확인',
                '최소 기능 → 실행 → 앱 단독 실행 가능 확인',
                '최소 기능 → 리소스 다운로드 → CDN 팝업창 노출 확인',
              ],
            },
            {
              title: '인증 TC',
              purpose: '내/외부 프로젝트별 인증 플랫폼, 프로세스가 상이하여 공통 TC 규격화',
              method: '지원 기능을 사전 체크하고 활성화된 TC만 수행하는 방식',
              categories: ['게스트 로그인', 'Google SDK 계정 연동', 'Apple 로그인', '계정 전환'],
            },
            {
              title: 'QA Sign-off Report',
              purpose: 'QA 진행 결과 및 특이사항 종합 공유',
              includes: [
                '품질 기준 만족 여부 (유저 배포 가능한가?)',
                '테스트 항목/환경/일정 상세',
                '우려되는 부분 (잔여 이슈) 협의 내용',
                '출시 후 확인 예정 항목',
              ],
            },
            {
              title: '최소 품질 가이드라인',
              purpose: '최소한의 품질 보증을 위한 신규 개발 기준',
              categories: [
                { area: 'BM', example: '구매 제한 표기 방식, 한정 상품 태그, 패키지 효율 표기' },
                { area: '안정성', example: '반복 패킷 전송 예외처리, 네트워크 재연결 처리, 메모리 누적 방지' },
                { area: '편의성', example: '바로가기 버튼, 화면 이동 플로우, 특정 숫자 입력 방식' },
              ],
            },
          ],
        },
      },
    ],
  },
  
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
      title: '레시피허브',
      period: '2025.08.19 - 2025.09.05',
      badge: 'SSR',
      phase: '1단계: SSR 기초',
      description: 'Thymeleaf 기반 SSR로 구성된 레시피 공유 서비스. 첫 팀 프로젝트로 서버 사이드 렌더링의 기본기를 다졌습니다.',
      tech: ['Spring Boot', 'Thymeleaf', 'MyBatis', 'Oracle', 'jQuery', 'AJAX'],
      features: [
        '게시판 CRUD (조리 순서/재료 동적 추가)',
        '검색/정렬/페이지네이션 구현',
        '평점 시스템 (AJAX 비동기 처리)',
        '댓글 CRUD 및 신고 기능',
        '쿼리스트링 기반 상태 유지 설계',
      ],
      myRole: '게시판 영역 설계/구현, 검색/정렬 기능',
      contribution: '30%',
      github: 'https://github.com/ljw155070-a11y/teamproject',
      learned: 'SSR에서 사용자 경험을 유지하려면 URL 설계와 렌더링 단위를 신중히 나눠야 함',
    },
    {
      title: 'Talk & Deal',
      period: '2025.10.01 - 2025.11.04',
      badge: 'CSR + SSR',
      phase: '2단계: CSR 도입',
      description: '사용자 참여형 커뮤니티 플랫폼. React 기반 CSR을 도입하여 동적 UX를 구현하고, 화면 특성에 따른 렌더링 전략을 구분했습니다.',
      tech: ['React', 'Recoil', 'Spring Boot', 'MyBatis', 'Oracle', 'Chart.js', 'Thymeleaf'],
      features: [
        '관리자 대시보드 (Chart.js 통계 시각화)',
        '회원 관리 (검색/정렬/페이징/정지 처리)',
        '공지사항/카테고리 CRUD (React-Quill)',
        'SSR 기반 공지/소개 페이지 (Thymeleaf)',
        'Excel Export 기능 (SheetJS)',
      ],
      myRole: '관리자 페이지 전체 (통계/CRUD/회원관리), ERD 설계',
      contribution: '30%',
      github: 'https://github.com/ljw155070-a11y/final_project',
      learned: '관리자 기능은 UX(검색/필터/페이지네이션)와 데이터 정합성이 핵심',
    },
    {
      title: 'Comeunity',
      period: '2026.01 (2주)',
      badge: 'Hybrid',
      phase: '3단계: 하이브리드 아키텍처',
      description: 'SSR과 CSR의 최적 조합으로 구현한 하이브리드 커뮤니티 플랫폼. 바이브코딩 기반 협업으로 4주 → 2주 개발 기간 단축 (생산성 200% 향상).',
      tech: ['React', 'Spring Boot', 'Thymeleaf', 'JWT', 'AWS (Windows)'],
      features: [
        'SSR(Thymeleaf) + CSR(React) 하이브리드 구조',
        'SSR: 게시판 목록 (비로그인)',
        'CSR: 글 작성/수정/삭제 (로그인 후)',
        'CSR: 회원가입 기능 구현',
        'AWS Windows 서버 배포',
      ],
      myRole: '게시판 SSR/CSR, 회원가입, AWS 배포',
      contribution: '25%',
      github: 'https://github.com/ljw155070-a11y/community',
      learned: '반복 코딩 시간을 줄이고 핵심 비즈니스 로직과 UX에 집중하면 생산성이 획기적으로 향상됨',
    },
    {
      title: 'Pyeonharu (편하루)',
      period: '2026.01 - 진행중',
      badge: 'Next.js',
      phase: '4단계: Next.js 풀스택',
      description: '의식주 기반 일상 편의 서비스. Next.js로 CSR/SSR을 통합하여 단일 프레임워크에서 최적의 렌더링 전략을 적용합니다.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS (Linux)'],
      features: [
        'Next.js App Router 기반 풀스택 구조',
        'CSR + SSR 통합 렌더링 전략',
        'TypeScript 도입으로 타입 안정성 확보',
        'AWS Linux 서버 배포 예정',
        '의식주 기반 일상 편의 기능',
      ],
      myRole: '프로젝트 설계, 풀스택 개발',
      contribution: '진행중',
      github: 'https://github.com/ljw155070-a11y/pyeonharu',
      learned: 'Next.js를 통해 렌더링 전략 선택의 유연성과 개발 생산성을 동시에 확보',
    },
  ],
}

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
      myRole: 'React & Spring 활용 Java 개발자 양성과정',
      description: 'Java, Spring Boot, React, Oracle 등 풀스택 개발 기술 습득. 세미/파이널 프로젝트 조장으로 팀 리딩 경험.',
    },
    {
      period: '2022.02 - 2025.04',
      company: '(주) 하이브로',
      myRole: 'QA 팀원 / TF 팀장',
      description: '모바일 게임 QA 리딩 및 유관부서 실무 협업. TF팀장으로 신규 출시 게임 QA 일정 조율, 업데이트 기획 점검 및 문제점 보고. 양대 마켓(구글, 애플) 빌드 관리. 앱스토어 정책 TC 제작, 글로벌 법률(유럽 GDPR, 일본 자금결제법) 테스트.',
    },
    {
      period: '2021 - 2022',
      company: '아이지에스 (주)',
      myRole: '테스트 자동화팀 리더',
      description: 'JavaScript(Blockly) 기반 모바일 게임 자동화 테스트. QA 전체 수동 업무 대비 자동화 전환률 평균 40% 달성. 스크립트 작성 매뉴얼 제작 및 중국 법인 화상 교육.',
    },
    {
      period: '2020',
      company: '아이지에스 (주)',
      myRole: '서울 본사 QA 팀원',
      description: '고객사 넷마블과 협업하여 모바일 게임 테스트 엔지니어 및 리딩.',
    },
    {
      period: '2017 - 2019',
      company: '아이지에스 (주)',
      myRole: '대구 QA/QM 팀원 → 테스트 리더',
      description: '입사 후 QA 테스트 리더로 성장. 공통 테스트 문서 생성 및 관리, 테스트 엔지니어 교육 문서 작성.',
    },
    {
      period: '2018 / 2026',
      company: '학력',
      myRole: '컴퓨터공학 전공',
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
        situation: '프로젝트 초기 모든 페이지를 CSR로 구현하려 했으나, 공지사항/소개 페이지는 SEO와 초기 로딩 속도가 중요.',
        solution: '화면 특성에 따라 렌더링 전략 분리. 관리자/동적 페이지는 CSR(React), 공개/정적 페이지는 SSR(Thymeleaf)로 하이브리드 아키텍처 설계.',
        result: '각 페이지 특성에 맞는 최적의 사용자 경험 제공. SSR 페이지는 JS 로딩 전에도 콘텐츠 표시.',
      },
      {
        category: '생산성',
        title: 'Comeunity 4주 → 4일 개발 기간 단축',
        situation: '기존 유사 커뮤니티 프로젝트는 4인 기준 약 4주 소요. 제한된 시간 내 완성도 높은 결과물 필요.',
        solution: '바이브코딩 기반 협업으로 반복 코딩 시간 최소화. 핵심 비즈니스 로직과 UX에 집중. SSR 1개 + CSR 2개 구조로 역할 분담.',
        result: '4일 내 프로젝트 완성. 생산성 700% 향상 체감. 충돌 최소화하고 리뷰/통합 속도 향상.',
      },
      {
        category: '배포',
        title: 'AWS 배포 환경 다각화',
        situation: '로컬 개발 환경과 실제 서버 환경의 차이로 배포 시 예상치 못한 문제 발생 가능성.',
        solution: 'AWS EC2 Windows/Linux 양쪽 환경에서 배포 경험. 환경별 설정 차이점 문서화. 배포 체크리스트 작성.',
        result: '다양한 서버 환경에 대한 이해도 향상. 배포 프로세스 표준화로 안정적인 릴리즈 가능.',
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
      badge: '1단계: SSR 기초',
      phase: '세미:2025.08-09',
      description: 'Thymeleaf 기반 SSR로 구성된 레시피 공유 서비스. 첫 팀 프로젝트로 서버 사이드 렌더링의 기본기를 다졌습니다.',
      tech: ['Spring Boot', 'Thymeleaf', 'MyBatis', 'Oracle', 'jQuery', 'AJAX'],
      features: [
        '게시판 CRUD (조리 순서/재료 동적 추가)',
        '평점 시스템 (AJAX 비동기 처리)',
        '쿼리스트링 기반 상태 유지 설계',
        '검색/정렬/페이지네이션 구현',
        '댓글 CRUD 및 신고 기능',
      ],
      myRole: '게시판 영역 설계/구현, 검색/정렬 기능',
      contribution: '30%',
      learned: 'SSR에서 사용자 경험을 유지하려면 URL 설계와 렌더링 단위를 신중히 나눠야 함',
      github: 'https://github.com/ljw155070-a11y/teamproject',
      codeExamples: [
        {
          title: '레시피 등록 - 트랜잭션 처리',
          description: '레시피 + 재료 + 조리순서를 하나의 트랜잭션으로 처리. 시퀀스로 번호 선발급 후 연관 테이블에 일괄 삽입.',
          flow: ['1. 레시피 번호 선발급 (시퀀스)', '2. 레시피 기본정보 INSERT', '3. 재료 리스트 반복 INSERT', '4. 조리순서 리스트 반복 INSERT'],
          language: 'java',
          code: `@Transactional
public int insertRecipe(Recipe r,
    ArrayList<RecipeIngredient> ingredientList,
    ArrayList<RecipeCookingOrder> cookingOrderList) {
  int result = -1;
  // 1. 게시물 번호 선발급
  int recipeNo = recipeDao.recipeNoCreate();
  r.setRecipeNo(recipeNo);

  // 2. 레시피 기본정보 INSERT
  result += recipeDao.recipeRInsert(r);

  // 3. 재료 반복 INSERT
  for(RecipeIngredient ri : ingredientList) {
    ri.setRecipeNo(recipeNo);
    result += recipeDao.recipeRIInsert(ri);
  }

  // 4. 조리순서 반복 INSERT
  for(RecipeCookingOrder rco : cookingOrderList) {
    rco.setRecipeNo(recipeNo);
    result += recipeDao.recipeRCOLInsert(rco);
  }

  return result;
}`,
        },
        {
          title: '평점 등록 - 중복 체크 후 INSERT/UPDATE 분기',
          description: '이미 평점을 남긴 사용자는 UPDATE, 처음이면 INSERT 처리.',
          flow: ['1. 기존 평점 존재 여부 확인', '2. 없으면 INSERT / 있으면 UPDATE', '3. 결과 반환'],
          language: 'java',
          code: `public int recipeGrade(int recipeNo, int memberNo, int recipeRate) {
  HashMap<String, Object> params = new HashMap<>();
  params.put("recipeNo", recipeNo);
  params.put("memberNo", memberNo);
  params.put("recipeRate", recipeRate);

  // 기존 평점 존재 여부 확인
  int count = recipeDao.recipeGradeSelect(params);

  if(count == 0) {
    return recipeDao.recipeGradeInsert(params); // 신규
  } else {
    return recipeDao.recipeGradeUpdate(params); // 수정
  }
}`,
        },
        {
          title: '페이징 처리 - ROWNUM 기반',
          description: 'Oracle ROWNUM을 활용한 페이징 쿼리. 서브쿼리로 정렬 후 범위 지정.',
          flow: ['1. 내부 쿼리에서 정렬', '2. ROWNUM 부여', '3. 외부에서 범위 필터링'],
          language: 'xml',
          code: `<select id="recipeList" resultType="recipe">
  SELECT * FROM (
    SELECT ROWNUM rnum, a.* FROM (
      SELECT r.*, m.member_nickname
      FROM recipe_tbl r
      JOIN member_tbl m ON r.member_no = m.member_no
      ORDER BY recipe_no DESC
    ) a
  ) WHERE rnum BETWEEN #{start} AND #{end}
</select>`,
        },
      ],
    },
    {
      title: 'Talk & Deal',
      period: '2025.10.01 - 2025.11.04',
      badge: '2단계: CSR 도입',
      phase: '파이널:2025.10-11',
      description: '사용자 참여형 커뮤니티 플랫폼. React 기반 CSR을 도입하여 동적 UX를 구현하고, 화면 특성에 따른 렌더링 전략을 구분했습니다.',
      tech: ['React', 'Recoil', 'Spring Boot', 'MyBatis', 'Oracle', 'Chart.js', 'Thymeleaf'],
      features: [
        '관리자 대시보드 (Chart.js 통계 시각화)',
        '공지사항/카테고리 CRUD (React-Quill)',
        'Excel Export 기능 (SheetJS)',
        '회원 관리 (검색/정렬/페이징/정지 처리)',
        'SSR 기반 공지/소개 페이지 (Thymeleaf)',
      ],
      myRole: '관리자 페이지 전체 (통계/CRUD/회원관리), ERD 설계',
      contribution: '30%',
      learned: '관리자 기능은 UX(검색/필터/페이지네이션)와 데이터 정합성이 핵심',
      github: 'https://github.com/ljw155070-a11y/final_project',
      codeExamples: [
        {
          title: '회원 목록 조회 - 동적 정렬/검색/페이징',
          description: 'React에서 상태 관리 후 API 호출. 14가지 정렬 옵션과 검색/페이징을 한 번에 처리.',
          flow: ['1. React 상태(order, searchType, pageNo) 변경', '2. useEffect로 API 호출', '3. 백엔드에서 동적 SQL 실행', '4. 결과를 테이블에 렌더링'],
          language: 'javascript',
          code: `// React - 회원 목록 요청
useEffect(() => {
  setMemberLoading(true);
  axios.get(\`\${backServer}/admin/memberList\`, {
    params: {
      order: reqPageInfo.order,      // 정렬 (1~14)
      pageNo: reqPageInfo.pageNo,    // 페이지
      searchText: reqPageInfo.searchText,
      searchType: reqPageInfo.searchType,
      listCnt: reqPageInfo.listCnt
    }
  })
  .then((res) => {
    setMemberList(res.data.pageList);
    setTotalListCount(res.data.totalListCount);
    setMemberLoading(false);
  });
}, [reqPageInfo]);`,
        },
        {
          title: '정렬 토글 - 오름차순/내림차순 전환',
          description: '컬럼 클릭 시 정렬 방향 토글. order 값으로 백엔드에 정렬 방식 전달.',
          flow: ['1. 컬럼 헤더 클릭', '2. 현재 order 확인 후 토글', '3. reqPageInfo 상태 업데이트', '4. useEffect 트리거로 재조회'],
          language: 'javascript',
          code: `const sortSelect = (column) => {
  // 회원번호: 1(ASC), 2(DESC)
  // 신고수: 3(ASC), 4(DESC) ...
  if (column === "no") {
    reqPageInfo.order === 1
      ? setReqPageInfo({ ...reqPageInfo, order: 2 })
      : setReqPageInfo({ ...reqPageInfo, order: 1 });
  } else if (column === "claim") {
    reqPageInfo.order === 3
      ? setReqPageInfo({ ...reqPageInfo, order: 4 })
      : setReqPageInfo({ ...reqPageInfo, order: 3 });
  }
  // ... 14가지 정렬 옵션
};`,
        },
        {
          title: 'MyBatis 동적 SQL - 다중 테이블 JOIN + 정렬',
          description: '회원별 신고수/좋아요수/게시글수를 서브쿼리로 집계. 동적 ORDER BY 처리.',
          flow: ['1. 회원 기본 정보 조회', '2. 서브쿼리로 활동 통계 집계', '3. 동적 ORDER BY 적용', '4. ROWNUM 페이징'],
          language: 'xml',
          code: `<select id="memberList" resultType="adminMember">
  SELECT * FROM (
    SELECT ROWNUM rnum, a.* FROM (
      SELECT m.member_no, m.member_id, m.member_email,
        (SELECT COUNT(*) FROM fb_claim_tbl
         WHERE member_no = m.member_no) claim_count,
        (SELECT COUNT(*) FROM fb_like_tbl
         WHERE member_no = m.member_no) like_count
      FROM member_tbl m
      <choose>
        <when test="order == 1">ORDER BY member_no ASC</when>
        <when test="order == 2">ORDER BY member_no DESC</when>
        <when test="order == 3">ORDER BY claim_count ASC</when>
        <when test="order == 4">ORDER BY claim_count DESC</when>
      </choose>
    ) a
  ) WHERE rnum BETWEEN #{start} AND #{end}
</select>`,
        },
        {
          title: 'Chart.js 통계 대시보드',
          description: '기간별 가입자/탈퇴자/게시글 통계를 차트로 시각화.',
          flow: ['1. 기간 선택 (5년/1년/1개월)', '2. API로 통계 데이터 요청', '3. Chart.js 데이터 포맷 변환', '4. Bar/Line/Pie 차트 렌더링'],
          language: 'javascript',
          code: `// 차트 데이터 구성
const data = {
  labels: labels,  // ['1월', '2월', ...]
  datasets: [{
    label: "가입자",
    data: values,  // [120, 95, ...]
    backgroundColor: "rgba(5, 20, 160, 0.5)",
    borderWidth: 1,
  }],
};`,
        },
      ],
    },
    {
      title: 'Comeunity',
      period: '2026.01 (2주)',
      badge: '3단계: 하이브리드 아키텍처',
      phase: '개인:2026.01',
      description: 'SSR과 CSR의 최적 조합으로 구현한 하이브리드 커뮤니티 플랫폼. 바이브코딩 기반 협업으로 4주 → 2주 개발 기간 단축 (생산성 200% 향상).',
      tech: ['React', 'Spring Boot', 'Thymeleaf', 'JWT', 'AWS (Windows)'],
      features: [
        'SSR(Thymeleaf) + CSR(React) 하이브리드 구조',
        'CSR: 글 작성/수정/삭제 (로그인 후)',
        'AWS Windows 서버 배포',
        'SSR: 게시판 목록 (비로그인)',
        'CSR: 회원가입 기능 구현',
      ],
      myRole: '게시판 SSR/CSR, 회원가입, AWS 배포',
      contribution: '25%',
      learned: '반복 코딩 시간을 줄이고 핵심 비즈니스 로직과 UX에 집중하면 생산성이 획기적으로 향상됨',
      github: 'https://github.com/ljw155070-a11y/community',
      codeExamples: [
        {
          title: 'SSR/CSR 하이브리드 라우팅 설계',
          description: '비로그인 페이지는 SSR(Thymeleaf)로, 로그인 후 동적 페이지는 CSR(React)로 분리.',
          flow: ['1. 메인/게시판 목록 → SSR (SEO 최적화)', '2. 글 작성/수정 → CSR (동적 UX)', '3. 회원가입 → CSR (실시간 유효성 검사)'],
          language: 'java',
          code: `// Spring Boot - SSR/CSR 라우팅 분리
@Controller
public class PageController {
  // SSR - Thymeleaf 렌더링
  @GetMapping("/board/list")
  public String boardList(Model model) {
    model.addAttribute("boards", boardService.getList());
    return "board/list";  // templates/board/list.html
  }
}

@RestController
@RequestMapping("/api")
public class BoardApiController {
  // CSR - React에서 호출하는 API
  @PostMapping("/board")
  public ResponseEntity<?> createBoard(@RequestBody BoardDto dto) {
    return ResponseEntity.ok(boardService.create(dto));
  }
}`,
        },
        {
          title: 'React 회원가입 - 실시간 유효성 검사',
          description: 'onChange마다 유효성 검사 후 시각적 피드백 제공.',
          flow: ['1. 입력값 변경 감지', '2. 정규식 검증', '3. 중복 체크 API 호출', '4. 결과에 따른 UI 업데이트'],
          language: 'javascript',
          code: `const [formData, setFormData] = useState({
  memberId: '', memberPw: '', memberEmail: ''
});
const [errors, setErrors] = useState({});

const validateField = (name, value) => {
  switch(name) {
    case 'memberId':
      if(!/^[a-zA-Z0-9]{4,12}$/.test(value)) {
        return '4~12자 영문/숫자만 가능';
      }
      break;
    case 'memberPw':
      if(!/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/.test(value)) {
        return '8자 이상, 영문+숫자 포함';
      }
      break;
  }
  return '';
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setErrors({ ...errors, [name]: validateField(name, value) });
};`,
        },
      ],
    },
    {
      title: 'Pyeonharu (편하루)',
      period: '2026.01 - 진행중',
      badge: '4단계: Next.js 풀스택',
      phase: '개인:2026.01-현재',
      description: '의식주 기반 일상 편의 서비스. Next.js로 CSR/SSR을 통합하여 단일 프레임워크에서 최적의 렌더링 전략을 적용합니다.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS (Linux)'],
      features: [
        'Next.js App Router 기반 풀스택 구조',
        'TypeScript 도입으로 타입 안정성 확보',
        '의식주 기반 일상 편의 기능',
        'CSR + SSR 통합 렌더링 전략',
        'AWS Linux 서버 배포 예정',
      ],
      myRole: '프로젝트 설계, 풀스택 개발',
      contribution: '진행중',
      learned: 'Next.js를 통해 렌더링 전략 선택의 유연성과 개발 생산성을 동시에 확보',
      github: 'https://github.com/ljw155070-a11y/pyeonharu',
      codeExamples: [
        {
          title: 'Next.js App Router - SSR/CSR 통합',
          description: '파일 기반 라우팅과 서버 컴포넌트로 렌더링 전략 자동 최적화.',
          flow: ['1. page.tsx → 기본 서버 컴포넌트 (SSR)', '2. "use client" 선언 → 클라이언트 컴포넌트 (CSR)', '3. 필요에 따라 혼합 사용'],
          language: 'typescript',
          code: `// app/page.tsx - 서버 컴포넌트 (SSR)
export default async function HomePage() {
  // 서버에서 데이터 페칭
  const data = await fetch('https://api.example.com/data');

  return (
    <main>
      <h1>편하루</h1>
      <ClientComponent initialData={data} />
    </main>
  );
}

// components/ClientComponent.tsx - 클라이언트 컴포넌트
"use client"
import { useState } from 'react';

export default function ClientComponent({ initialData }) {
  const [data, setData] = useState(initialData);
  // 클라이언트 사이드 인터랙션 처리
  return <div onClick={() => setData(...)}>...</div>;
}`,
        },
        {
          title: 'TypeScript 타입 정의',
          description: '인터페이스로 데이터 구조 명확화. 컴파일 타임 오류 방지.',
          flow: ['1. 인터페이스 정의', '2. 컴포넌트 Props 타입 지정', '3. API 응답 타입 지정'],
          language: 'typescript',
          code: `// types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// 컴포넌트에서 사용
interface Props {
  user: User;
  onUpdate: (user: User) => void;
}

export default function UserCard({ user, onUpdate }: Props) {
  return <div>{user.name}</div>;
}`,
        },
      ],
    },
  ],
}

export const profile = profileData
export default profileData

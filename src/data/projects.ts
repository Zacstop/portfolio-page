export type Badge = {
  kind: "frontend" | "fullstack" | "solo" | "type" | "period";
  label: string;
};

export type DidItem = {
  accent?: string;
  rest: string;
};

export type ProjectImage = {
  src: string;
  caption: string;
};

export type ProjectId =
  | "union"
  | "envelopes"
  | "sulegym"
  | "kb"
  | "hanmi"
  | "hackle"
  | "dominate";

export type CardLayout = "single" | "phones";

export type Featured = {
  id: ProjectId;
  bgClass: ProjectId;
  visualTag: string;
  visualTitle: string;
  visualSubtitle: string;

  // 카드/모달 메인 샷 표시 방식. "phones" = 세로 폰 스크린샷을 폰 프레임에 담아 4개까지 표시.
  cardLayout?: CardLayout;

  // images: 첫 번째 항목이 카드 커버. 모달에서는 갤러리로 펼쳐짐.
  images: ProjectImage[];

  // card
  cardTitle: string;
  cardBadges: Badge[];
  cardTagline: string;
  cardStack: string[];

  // modal
  modalVisualTag: string;
  modalTitle: string;
  modalTaglineHTML: string;
  did: DidItem[];
  stack: string[];
};

export const featured: Featured[] = [
  {
    id: "envelopes",
    bgClass: "envelopes",
    visualTag: "★ LATEST",
    visualTitle: "Envelopes",
    visualSubtitle: "SAMS · 태양광 모니터링",

    images: [
      { src: "/projects/envelopes-01.png", caption: "SAMS 통합 어드민 대시보드" },
      { src: "/projects/envelopes-02.png", caption: "발전소별 모니터링 뷰" },
      { src: "/projects/envelopes-03.png", caption: "운영 데이터 분석 화면" },
      { src: "/projects/envelopes-04.png", caption: "사용자 사이트 메인" },
    ],

    cardTitle: "Envelopes SAMS Platform",
    cardBadges: [
      { kind: "frontend", label: "Frontend" },
      { kind: "type", label: "Enterprise" },
      { kind: "period", label: "2025 — 현재" },
    ],
    cardTagline:
      "태양광 발전소 통합 모니터링·운영 플랫폼. 어드민 콘솔과 6개 마이크로프론트엔드를 단일 도메인에서 운영.",
    cardStack: ["Next.js", "TypeScript", "Panda CSS"],

    modalVisualTag: "★ LATEST · ENTERPRISE",
    modalTitle: "Envelopes SAMS Platform",
    modalTaglineHTML:
      "태양광 발전소 통합 모니터링·운영 플랫폼.<br/>어드민 콘솔과 사용자 사이트를 하나의 도메인에서 운영하는 마이크로프론트엔드.",
    did: [
      { accent: "14개+ 운영 도메인", rest: "을 단일 어드민으로 통합" },
      { accent: "6개 서비스", rest: "를 마이크로프론트엔드로 분리해 독립 배포" },
      { rest: "디자인 시스템·국제화·인증 레이어를 공통 기반으로 정리" },
      { rest: "백엔드 미가용 상태에서도 풀스택 시뮬레이션 가능한 Mock 환경 구축" },
    ],
    stack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Panda CSS",
      "TanStack Query",
      "Redux Toolkit",
    ],
  },
  {
    id: "sulegym",
    bgClass: "sulegym",
    visualTag: "FULLSTACK",
    visualTitle: "SULEGYM",
    visualSubtitle: "피트니스 SNS · 운동 트래킹",

    cardLayout: "phones",
    images: [
      { src: "/projects/sulegym-01.jpeg", caption: "운동 기록·체크인 메인" },
      { src: "/projects/sulegym-02.jpeg", caption: "메이트 매칭 / 피드" },
      { src: "/projects/sulegym-03.jpeg", caption: "랭킹·시즌 화면" },
      { src: "/projects/sulegym-04.jpeg", caption: "프로필·구독 관리" },
    ],

    cardTitle: "SULEGYM (설레짐)",
    cardBadges: [
      { kind: "fullstack", label: "Fullstack" },
      { kind: "type", label: "외주" },
      { kind: "period", label: "2024 — 2025" },
    ],
    cardTagline:
      "헬스장 체크인·운동 기록·메이트 매칭·구독 결제 피트니스 SNS. iOS/Android 앱 + 백엔드 단독 구현.",
    cardStack: ["Expo", "RN", "Node.js"],

    modalVisualTag: "FULLSTACK · MOBILE",
    modalTitle: "SULEGYM (설레짐)",
    modalTaglineHTML:
      "헬스장 체크인·운동 기록·메이트 매칭·시즌 랭킹·구독 결제까지 다루는 피트니스 SNS.<br/>iOS/Android 앱과 백엔드 모놀리스 양쪽을 단독으로 설계·구현.",
    did: [
      { accent: "iOS·Android 모바일 앱", rest: "을 단독으로 설계·출시" },
      {
        accent: "20개+ 도메인 백엔드",
        rest: "를 단일 서비스로 일관성 있게 모듈화",
      },
      { rest: "실시간 채팅·푸시·위치 기반 기능과 결제·랭킹·AI 어시스트 동시 운영" },
      { rest: "앱 스토어 빌드 없이 OTA로 업데이트 배포하는 운영 체계 구성" },
    ],
    stack: [
      "Expo SDK 54",
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
    ],
  },
  {
    id: "hackle",
    bgClass: "hackle",
    visualTag: "SAAS · STARTUP",
    visualTitle: "Hackle",
    visualSubtitle: "A/B 테스트 · 그로스 플랫폼",

    images: [
      { src: "/projects/hackle-01.png", caption: "실험 운영 대시보드" },
      { src: "/projects/hackle-02.png", caption: "퍼널·이벤트 분석" },
      { src: "/projects/hackle-03.png", caption: "피처 플래그 / 타겟팅" },
      { src: "/projects/hackle-04.png", caption: "구독·요금제 관리" },
    ],

    cardTitle: "Hackle Console",
    cardBadges: [
      { kind: "frontend", label: "Frontend" },
      { kind: "type", label: "Startup · SaaS" },
      { kind: "period", label: "2021 — 2022" },
    ],
    cardTagline:
      "A/B 테스트·피처 플래그·퍼널·이벤트 분석을 한 곳에서 운영하는 그로스 플랫폼 콘솔.",
    cardStack: ["React", "TypeScript", "Recoil + SWR"],

    modalVisualTag: "SAAS · STARTUP",
    modalTitle: "Hackle Console",
    modalTaglineHTML:
      "A/B 테스트·피처 플래그·퍼널·이벤트 분석·모니터링 알람·구독 관리를 통합한 SaaS 콘솔.<br/>고객사가 실험을 정의·운영·분석까지 한 화면에서 끝낼 수 있도록 한 어드민 SPA.",
    did: [
      {
        accent: "실험·피처 플래그·이벤트 분석",
        rest: " 도메인을 하나의 SPA로 통합",
      },
      { accent: "Highcharts 기반 메트릭 시각화", rest: "로 실험 결과 비교 화면 구축" },
      { rest: "Recoil + SWR 조합으로 글로벌 상태와 서버 상태를 분리 운영" },
      { rest: "요금제·구독 관리, 알람·모니터링까지 운영 도메인 전체를 프론트엔드로 노출" },
    ],
    stack: [
      "React",
      "TypeScript",
      "Recoil",
      "SWR",
      "Highcharts",
      "Styled Components",
    ],
  },
  {
    id: "kb",
    bgClass: "kb",
    visualTag: "ENTERPRISE · LGCNS",
    visualTitle: "KB Life",
    visualSubtitle: "영업관리자 시스템",

    images: [
      { src: "/projects/kb-01.png", caption: "통합정보조회 메인" },
    ],

    cardTitle: "KB생명보험 영업관리자",
    cardBadges: [
      { kind: "frontend", label: "Frontend" },
      { kind: "type", label: "Enterprise" },
      { kind: "period", label: "2022.07 — 2022.10" },
    ],
    cardTagline:
      "영업관리자(GA)·재무설계사(FP)·지점 통합정보조회 시스템. 6개+ 도메인 / 30개+ 라우트 SPA 구축.",
    cardStack: ["React 18", "Redux Toolkit", "MUI v5"],

    modalVisualTag: "ENTERPRISE · LGCNS / 넥스링크",
    modalTitle: "KB생명보험 영업관리자",
    modalTaglineHTML:
      "영업관리자(GA)·재무설계사(FP)·지점(Branch) 통합정보조회 시스템.<br/>매출·계약·가입설계 실적, 일정관리, 게시판·알림·자료실까지 단일 SPA로 구축.",
    did: [
      {
        accent: "6개+ 독립 도메인 / 30개+ 라우트",
        rest: " SPA를 단일 코드베이스로 통합",
      },
      { accent: "24개+ 공통 컴포넌트", rest: " 시스템 설계로 화면 일관성 확보" },
      { rest: "실적 차트(Nivo) · 캘린더 · 지도 기반 일정관리 통합" },
      { rest: "대형 금융사 보안·컨벤션을 따르며 프론트엔드 개발 총괄 수행" },
    ],
    stack: [
      "React 18",
      "Redux Toolkit",
      "MUI v5",
      "React Router 6",
      "React Hook Form 7",
      "Nivo",
      "FullCalendar",
      "MUI X DataGrid",
    ],
  },
  {
    id: "hanmi",
    bgClass: "hanmi",
    visualTag: "ENTERPRISE",
    visualTitle: "의담",
    visualSubtitle: "한미약품 · UIDAM Admin",

    images: [
      { src: "/projects/hanmi-01.png", caption: "의담 어드민 메인" },
      { src: "/projects/hanmi-02.png", caption: "세미나·교육 관리" },
      { src: "/projects/hanmi-03.png", caption: "회원·콘텐츠 관리" },
    ],

    cardTitle: "한미약품 의담 Admin",
    cardBadges: [
      { kind: "frontend", label: "Frontend" },
      { kind: "type", label: "Enterprise" },
      { kind: "period", label: "2023 — 2024" },
    ],
    cardTagline:
      "의료진 대상 세미나·교육·회원·배너·이벤트 운영을 통합한 8개 독립 도메인 어드민 SPA.",
    cardStack: ["React 18", "Redux Toolkit", "MUI"],

    modalVisualTag: "ENTERPRISE · 한미약품",
    modalTitle: "한미약품 의담 Admin",
    modalTaglineHTML:
      "의료진 대상 세미나·교육 관리, 회원 관리, 배너·이벤트·공지·문의 운영을 통합한 어드민 콘솔.",
    did: [
      { accent: "8개 도메인", rest: "을 단일 어드민 SPA로 통합" },
      { rest: "JWT 인증 인터셉터로 토큰 자동 재발행 흐름 구축" },
      { rest: "CKEditor 기반 리치 콘텐츠 에디터와 엑셀 일괄 처리 기능 도입" },
      { rest: "AWS S3 + CloudFront 정적 호스팅 파이프라인 구성" },
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "redux-saga",
      "MUI v5",
      "CKEditor 5",
      "ApexCharts",
    ],
  },
  {
    id: "dominate",
    bgClass: "dominate",
    visualTag: "AGENCY",
    visualTitle: "Dominate",
    visualSubtitle: "홈페이지 · 캠페인 · 3D",

    images: [
      { src: "/projects/dominate-01.png", caption: "회사 메인 홈페이지" },
      { src: "/projects/dominate-02.png", caption: "캠페인 드랍페이지" },
      { src: "/projects/dominate-03.png", caption: "3D 인터랙티브 프로젝트" },
    ],

    cardTitle: "Dominate 도미네이트",
    cardBadges: [
      { kind: "frontend", label: "Frontend" },
      { kind: "type", label: "Agency" },
      { kind: "period", label: "2022 — 2023" },
    ],
    cardTagline:
      "메인 홈페이지·관리자·캠페인 드랍페이지·3D 인터랙티브까지 프론트 전반을 담당한 에이전시 프로젝트.",
    cardStack: ["Next.js", "TypeScript", "Three.js"],

    modalVisualTag: "AGENCY · 도미네이트",
    modalTitle: "Dominate 도미네이트",
    modalTaglineHTML:
      "회사 메인 홈페이지부터 관리자, 캠페인 드랍페이지, 3D 인터랙티브 프로젝트까지<br/>에이전시 프론트엔드 전반을 단독으로 책임진 프로젝트군.",
    did: [
      { accent: "메인·관리자·드랍페이지", rest: " 다수의 사이트를 동시에 운영" },
      { accent: "3D 인터랙티브", rest: " 캠페인 페이지를 Three.js로 구현" },
      { rest: "디자이너·기획자와 빠른 사이클로 다양한 캠페인을 라이브" },
      { rest: "퍼블리싱·반응형·SEO까지 에이전시 워크플로우 전반 경험" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Three.js",
      "GSAP",
      "Styled Components",
    ],
  },
  {
    id: "union",
    bgClass: "union",
    visualTag: "PERSONAL · SOLO",
    visualTitle: "UNION / mirine",
    visualSubtitle: "캠퍼스 식음료 주문·픽업",

    images: [],

    cardTitle: "UNION / mirine",
    cardBadges: [
      { kind: "fullstack", label: "Fullstack" },
      { kind: "solo", label: "Solo" },
      { kind: "period", label: "2025.10 — 현재" },
    ],
    cardTagline:
      "대학교 캠퍼스 내 식음료 주문·픽업 서비스. 기획·디자인·앱·백엔드·DB·KDS·결제까지 1인 풀사이클 개발.",
    cardStack: ["Expo", "RN", "Node.js"],

    modalVisualTag: "PERSONAL · SOLO",
    modalTitle: "UNION / mirine",
    modalTaglineHTML:
      "대학교 캠퍼스 내 식음료 주문·픽업 서비스.<br/>기획·디자인부터 앱·백엔드·DB·매장 KDS·결제까지 1인이 풀사이클로 설계·구현하는 프로젝트.",
    did: [
      {
        accent: "기획·디자인·앱·백엔드·DB·KDS·결제",
        rest: " 전 영역을 1인 풀사이클로 진행",
      },
      { accent: "고객 앱과 매장 KDS", rest: "를 단일 백엔드로 연결한 주문 파이프라인 설계" },
      { rest: "픽업 시간대 관리·실시간 주문 상태 동기화·결제·정산까지 운영 흐름 일관 구성" },
      { rest: "스토어 빌드 없이 OTA로 빠르게 가설을 검증하는 1인 개발 환경 운영" },
    ],
    stack: [
      "Expo SDK 54",
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "결제 PG",
    ],
  },
];

export type More = {
  year: string;
  role: string;
  title: string;
  description: string;
  features: string[];
};

export const more: More[] = [];

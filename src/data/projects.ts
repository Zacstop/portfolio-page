export type Featured = {
  id: string;
  bgClass: string;
  archLeft: string;
  archRight: string;
  visualTag: string;
  visualTitle: string;
  visualSubtitle: string;
  title: string;
  tagRow: string;
  description: string;
  features: string[];
  stack: string[];
  results: { value: string; label: string; color: string }[];
};

export const featured: Featured[] = [
  {
    id: "envelopes",
    bgClass: "envelopes",
    archLeft: `  Microfrontend
  6 services
   │
   ├─ Next.js 14
   │
   ▼
   Nginx Gateway
   │
   ▼
   AWS EKS + ALB`,
    archRight: `  PBAC + JWT
  Auto-refresh
  Multi-tab Sync
  Mapbox GL
  next-intl ko/en
  Panda CSS`,
    visualTag: "OUTSOURCED · FULLSTACK · 2025-2026",
    visualTitle: "Envelopes",
    visualSubtitle: "SAMS · Homepage · 6 Services Microfrontend",
    title: "Envelopes — SAMS + Homepage 마이크로프론트엔드 플랫폼",
    tagRow: "OUTSOURCED · LATEST · MOST CHALLENGING · 2025.06 ~ 2026.01",
    description:
      "영농형 태양광 자산관리 시스템(SAMS)과 회사 홈페이지를 단일 도메인에서 운영하는 마이크로프론트엔드 플랫폼. Next.js 14 App Router 기반 6개 독립 서비스(home/mpp/company/business/subscription/mypage)를 path-based routing으로 통합 운영.",
    features: [
      "<strong>Microfrontend 아키텍처:</strong> 6개 독립 Next.js 서비스 + pnpm workspace + 공통 설정 추상화로 DX와 일관성 동시 확보",
      "<strong>Nginx 통합 게이트웨이:</strong> Referer 기반 동적 upstream 매핑으로 _next/static 충돌 해결, API 10r/s · static 50r/s Rate Limit",
      "<strong>JWT + PBAC 권한 엔진:</strong> Action × Resource × Effect 매칭, 만료 5분 전 자동 갱신, 멀티탭 storage 동기화",
      "<strong>실시간 IoT 대시보드:</strong> Plant→PLC→SLU→센서→인버터→기상관측소 6단계 계층 모델, Nivo 라인차트, SLU 각도 일괄 제어",
      "<strong>AWS EKS + Kustomize:</strong> base/overlay 환경별 매니페스트, GitHub Actions paths 필터로 변경된 서비스만 배포",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Panda CSS",
      "TanStack Query",
      "Redux Toolkit",
      "Nivo",
      "Mapbox GL",
      "next-intl",
      "Docker",
      "AWS EKS",
      "Kustomize",
      "Nginx",
    ],
    results: [
      { value: "6", label: "Microservices", color: "var(--blue)" },
      { value: "PBAC", label: "Auth Engine", color: "var(--blue)" },
      { value: "ko/en", label: "i18n", color: "var(--blue)" },
    ],
  },
  {
    id: "sulegym",
    bgClass: "sulegym",
    archLeft: `  Mobile (Expo)
   │
   ├─ Socket.IO
   │
   ▼
   Express + JWT
   │
   ▼
   PBAC Engine
   │
   ▼
   PG + Redis`,
    archRight: `  Claude SDK
  Tool-use
  Toss Payments
  Realtime Mate
  Season Ranking
  Gamification`,
    visualTag: "OUTSOURCED · SOLO FULLSTACK",
    visualTitle: "SULEGYM",
    visualSubtitle: "Social Fitness Platform · 풀스택 단독",
    title: "SULEGYM (설레짐) — 소셜 피트니스 플랫폼",
    tagRow: "OUTSOURCED · SOLO ARCHITECT · 2025.12 ~ 2026.03",
    description:
      "운동 루틴 기록 · AI 트레이너 · 메이트 매칭 · PT 트레이너 예약 · 토스페이먼츠 구독결제 · 시즌 랭킹·배지를 통합한 모바일 앱과 백엔드. 588 TS 파일 / 76 모델 / 83 라우트 규모를 1인으로 설계·구현.",
    features: [
      "<strong>자체 PBAC 엔진:</strong> minimatch glob 기반 action/resource 매칭, condition evaluator, Explicit Deny 우선순위 보장",
      "<strong>Claude AI 트레이너:</strong> 사용자 운동 이력/선호도 컨텍스트 주입 + Tool-use(create_routine)로 자연어→루틴 자동 생성",
      "<strong>2단 채팅 모더레이션:</strong> 정규식 사전 필터(욕설/성/폭력) → LLM 분석 파이프라인으로 비용·지연·정확도 trade-off 최적화",
      "<strong>실시간 시스템:</strong> Socket.IO JWT 인증 소켓, 메이트 운동 세트 동기화, 클라이언트 메시지 ID 기반 idempotency, expo-push fallback",
      "<strong>토스페이먼츠 직접 연동:</strong> SDK 미사용 raw API, 웹훅 라우터를 JWT 미들웨어 이전에 등록해 서명 검증 분기",
      "<strong>K8s 운영:</strong> SIGTERM 30s graceful shutdown (HTTP→Redis→DB), liveness/readiness probe + Redis health 노출",
    ],
    stack: [
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Sequelize-TS",
      "Redis",
      "Socket.IO",
      "Claude SDK",
      "Toss Payments",
      "Expo SDK 54",
      "React Native",
      "TanStack Query",
      "Docker",
      "Kubernetes",
    ],
    results: [
      { value: "588", label: "TS Files", color: "var(--purple)" },
      { value: "76", label: "DB Models", color: "var(--purple)" },
      { value: "83", label: "Routes", color: "var(--purple)" },
    ],
  },
  {
    id: "union",
    bgClass: "union",
    archLeft: `  Mobile (Expo)
   │
   ├─ TossPayments
   │
   ▼
   Express + JWT
   │
   ▼
   PostgreSQL
   │
   ▼
   Docker + AWS`,
    archRight: `  ─ 1 person ─
  Plan + Design
  Frontend
  Backend
  15 Tables
  Sales`,
    visualTag: "★ FEATURED · SOLO PERSONAL PROJECT",
    visualTitle: "Union",
    visualSubtitle: "대학교 음식 주문 풀스택 앱",
    title: "Union — 대학교 음식 주문 풀스택 앱",
    tagRow: "PERSONAL · SOLO · DEV + SALES · 2025.10 ~ 2026.01",
    description:
      "대학교 음식 주문 + 픽업 + 키친 디스플레이까지 다룬 풀스택 앱. 기획·디자인·DB 스키마·백엔드·모바일 앱·세일즈까지 1인이 전부 진행. 풀스택 역량을 가장 잘 보여주는 프로젝트.",
    features: [
      "<strong>풀스택 단독 설계:</strong> 기획→ERD→API→UI까지 일관된 흐름, 15테이블 정규화 + 의도적 비정규화를 트리거로 동기화",
      "<strong>토스페이먼츠 위젯 연동:</strong> 결제 컴포넌트 16개 분리 (쿠폰·포인트·카드·픽업·약관) — 단순 호출이 아닌 결제 UX 모듈화",
      "<strong>트랜잭션 안전성:</strong> BEGIN/COMMIT 명시 트랜잭션, 메뉴/옵션 가용성 검증 → 가격 계산 → 주문 생성을 한 단위로 묶어 정합성 보장",
      "<strong>OAuth + JWT 듀얼:</strong> 자체 회원가입/로그인 + Google ID Token 검증 병행, access/refresh 토큰 분리 + 갱신 엔드포인트",
      "<strong>실시간 키친 디스플레이:</strong> kitchen.controller 872줄 + B2B 운영 화면 + WebSocket — 단순 고객 앱이 아닌 운영 시스템까지 커버",
      "<strong>운영급 미들웨어:</strong> helmet, rate-limit (15min/100req), 글로벌 에러 핸들러, 일관된 응답 포맷, Swagger 자동 문서화",
    ],
    stack: [
      "TypeScript",
      "Express",
      "PostgreSQL",
      "JWT",
      "Google OAuth",
      "Toss Payments",
      "Expo SDK 54",
      "React Native",
      "expo-router",
      "WebSocket",
      "Docker",
    ],
    results: [
      { value: "15", label: "Tables", color: "var(--green)" },
      { value: "1", label: "Architect", color: "var(--green)" },
      { value: "100%", label: "Self-built", color: "var(--green)" },
    ],
  },
];

export type More = {
  year: string;
  role: string;
  title: string;
  featuredLine?: string;
  description: string;
  features: string[];
};

export const more: More[] = [
  {
    year: "2022.11 — 2023.06",
    role: "// 주식회사 도미네이트",
    title: "도미네이트",
    featuredLine: "한미의담 클라이언트 관리자/사용자 반응형 페이지 (주요 작업)",
    description:
      "한미의담 관리자·사용자 반응형 페이지 개발을 메인으로, 사내 드랍페이지·3D 프로젝트·퍼블리싱까지 프론트 전반을 담당. 사원/팀원 (8개월).",
    features: ["Next.js", "TypeScript", "한미의담 Admin", "Drop Page", "3D", "퍼블리싱"],
  },
  {
    year: "2022.08 — 2022.11",
    role: "// KB생명보험 (외주)",
    title: "KB생명보험 영업관리자",
    description:
      "대형 금융사 내부 시스템의 관리자 Web/모바일 페이지를 반응형으로 개발. 임시직/프리랜서 4개월.",
    features: ["React", "반응형", "Web + Mobile", "Enterprise"],
  },
  {
    year: "2021.07 — 2022.01",
    role: "// Hackle",
    title: "Hackle",
    description:
      "A/B 테스트 SaaS 스타트업에서 사내 아이템 개발에 프론트엔드 사원으로 참여. 7개월.",
    features: ["React", "TypeScript", "SaaS", "A/B Testing"],
  },
];

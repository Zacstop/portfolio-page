export type CareerItem = {
  year: string;
  role: string;
  company: string;
  description: string;
  active?: boolean;
  tag?: string;
};

export const career: CareerItem[] = [
  {
    year: "2025.12 — 2026.03",
    role: "Solo Architect · Fullstack",
    company: "SULEGYM (외주)",
    description:
      "소셜 피트니스 플랫폼 단독 설계·구현. 백엔드 588 TS 파일 / 76 모델 / 83 라우트 + Expo 모바일 앱 + PBAC 엔진 + Claude AI + 토스페이먼츠 + Socket.IO 실시간.",
    active: true,
    tag: "외주",
  },
  {
    year: "2025.10 — 2026.01",
    role: "Solo Developer · Personal",
    company: "Union — 대학교 음식 주문 앱",
    description:
      "기획·디자인·DB·백엔드·모바일 앱·세일즈까지 1인 진행. 15테이블 + 트랜잭션 + 토스페이먼츠 + 키친 디스플레이.",
    active: true,
    tag: "Solo",
  },
  {
    year: "2025.06 — 2026.01",
    role: "Outsourced Fullstack",
    company: "Envelopes (SAMS + Homepage)",
    description:
      "영농형 태양광 SAMS + 회사 홈페이지 마이크로프론트엔드 플랫폼. 6 서비스 통합, AWS EKS, JWT+PBAC, IoT 실시간 대시보드, next-intl ko/en.",
    tag: "외주",
  },
  {
    year: "2022.11 — 2023.06",
    role: "Frontend Developer",
    company: "주식회사 도미네이트",
    description:
      "한미의담 클라이언트 관리자/사용자 반응형 페이지 (주요), 사내 드랍페이지, 3D 프로젝트, 퍼블리싱.",
    tag: "사원",
  },
  {
    year: "2022.08 — 2022.11",
    role: "FE React Developer (Contract)",
    company: "KB생명보험",
    description: "영업관리자 시스템 관리자 Web/모바일 페이지 반응형 개발.",
    tag: "외주",
  },
  {
    year: "2021.07 — 2022.01",
    role: "Frontend Developer",
    company: "Hackle",
    description: "A/B 테스트 SaaS 스타트업에서 사내 아이템 개발에 프론트엔드 사원으로 참여.",
    tag: "사원",
  },
];

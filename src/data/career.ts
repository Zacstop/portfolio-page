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
    year: "2025 — 현재",
    role: "Frontend Developer · Envelopes",
    company: "엔벨롭스 SAMS Platform",
    description:
      "태양광 통합 모니터링 어드민 + 6개 마이크로프론트엔드 개발.",
    active: true,
    tag: "외주",
  },
  {
    year: "2024 — 현재",
    role: "Solo Fullstack · Personal",
    company: "UNION / mirine",
    description:
      "대학교 음식 주문·픽업 풀스택 앱. 기획·디자인·앱·백엔드·DB까지 1인 개발.",
    active: true,
    tag: "Solo",
  },
  {
    year: "2024 — 2025",
    role: "Solo Fullstack · 외주",
    company: "SULEGYM (설레짐)",
    description:
      "피트니스 SNS 모바일 앱 + 백엔드. iOS/Android 동시 출시.",
    tag: "외주",
  },
  {
    year: "2023 — 2024",
    role: "Frontend Developer",
    company: "한미약품 의담(UIDAM) Admin",
    description:
      "의료진 세미나·회원·배너·이벤트 운영 통합 어드민 프론트엔드.",
    tag: "사원",
  },
  {
    year: "2022.07 — 2022.10",
    role: "Frontend Developer · LGCNS / 넥스링크",
    company: "KB생명보험 영업관리자",
    description: "영업관리자·재무설계사·지점 통합 시스템 SPA 구축.",
    tag: "외주",
  },
  {
    year: "2021 — 2022",
    role: "Frontend Developer",
    company: "Hackle",
    description:
      "A/B 테스트 SaaS 운영 대시보드 개발. 실험·퍼널·메트릭 시각화.",
    tag: "사원",
  },
];

export type Highlight = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  source: string;
};

export const highlights: Highlight[] = [
  {
    num: "01",
    title: "PBAC 권한 엔진 직접 설계",
    description:
      "AWS IAM 패턴을 차용해 minimatch glob 기반 action/resource 매칭 + condition evaluator + Explicit Deny 우선순위를 자체 구현. 단순 RBAC을 넘어 정책 기반 인가 시스템까지 직접 만들어 봄.",
    tags: ["JWT", "PBAC", "Multi-tab Sync", "Auto-refresh"],
    source: "SULEGYM · Envelopes SAMS",
  },
  {
    num: "02",
    title: "Microfrontend 통합 라우팅",
    description:
      "6개 독립 Next.js 서비스를 path-based routing으로 단일 도메인에 통합. Next.js _next/static 자산 충돌을 Nginx Referer 기반 동적 upstream 매핑으로 해결.",
    tags: ["Next.js 14", "Nginx", "AWS EKS", "Kustomize"],
    source: "Envelopes Homepage",
  },
  {
    num: "03",
    title: "실시간 + AI 통합 백엔드",
    description:
      "Socket.IO JWT 인증 소켓 위에 채팅·메이트 운동 동기화·읽음 처리 구현. Claude SDK로 AI 트레이너 + 정규식 사전 필터 → LLM 분석 2단 모더레이션 파이프라인 설계로 비용/지연 최적화.",
    tags: ["Socket.IO", "Claude SDK", "Tool-use", "Idempotency"],
    source: "SULEGYM",
  },
  {
    num: "04",
    title: "트랜잭션 안전 풀스택 1인 설계",
    description:
      "15테이블 정규화 + 의도적 비정규화를 트리거로 동기화. 메뉴/옵션 가용성 검증 → 가격 계산 → 주문 생성을 BEGIN/COMMIT 한 단위로 묶고, 토스페이먼츠 결제 위젯/포인트 정합성까지 단독 구축.",
    tags: ["PostgreSQL", "Toss Payments", "Transaction", "JSONB"],
    source: "Union",
  },
];

export type Pillar = {
  num: string;
  title: string;
  lead: string;
  body: string;
};

export const pillars: Pillar[] = [
  {
    num: "01",
    title: "End-to-End Development",
    lead: "제품의 첫 화면부터 데이터베이스 스키마까지 직접 설계합니다.",
    body: "디자인 구현에서 멈추지 않고, 기획 단계의 기술 의사결정에 참여하고 운영 이슈를 백엔드까지 추적해 해결합니다.",
  },
  {
    num: "02",
    title: "Web & Mobile",
    lead: "Next.js 웹과 Expo/React Native 앱을 동시에 다룹니다.",
    body: "같은 비즈니스 로직을 두 플랫폼에 맞게 풀어내고, 마이크로프론트엔드부터 단일 모놀리스까지 규모에 맞게 설계합니다.",
  },
  {
    num: "03",
    title: "Team Collaboration",
    lead: "혼자서도, 팀에서도 끝까지 만들어냅니다.",
    body: "외주에서는 클라이언트와 직접 소통하며 인수 테스트까지 책임지고, 사내에서는 코드리뷰와 컨벤션 준수로 팀 일관성에 기여합니다.",
  },
];

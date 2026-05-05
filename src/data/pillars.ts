export type Pillar = {
  num: string;
  iconClass: "endto" | "cross" | "team";
  iconPath: string;
  title: string;
  description: string;
  tags: string[];
};

export const pillars: Pillar[] = [
  {
    num: "01",
    iconClass: "endto",
    iconPath:
      "M12 2L2 7l10 5 10-5-10-5z;M2 17l10 5 10-5;M2 12l10 5 10-5",
    title: "End-to-End Development",
    description:
      "제품의 첫 화면부터 데이터베이스 스키마까지 직접 설계합니다. 디자인을 구현하는 것을 넘어, 기획 단계에서 기술적 의사결정에 참여하고 운영 이슈를 백엔드까지 추적해 해결합니다.",
    tags: ["기획", "설계", "FE + BE", "DB", "배포"],
  },
  {
    num: "02",
    iconClass: "cross",
    iconPath: "M2 3h20v14H2zM8 21h8M12 17v4",
    title: "Web & Mobile",
    description:
      "Next.js 기반 웹과 Expo/React Native 기반 앱을 모두 다룹니다. 같은 비즈니스 로직을 다른 플랫폼에 맞게 풀어내고, 마이크로프론트엔드부터 단일 모놀리스까지 규모에 맞게 설계합니다.",
    tags: ["Next.js", "React", "Expo", "반응형", "Microfrontend"],
  },
  {
    num: "03",
    iconClass: "team",
    iconPath:
      "M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z;M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2;M17 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    title: "Team Collaboration",
    description:
      "1인 풀스택 개발의 자립성과 팀 협업의 규율을 모두 갖췄습니다. 외주에서 클라이언트와 직접 소통하며 인수 테스트까지 책임지고, 사내에서 코드리뷰·컨벤션 준수로 팀 일관성에 기여합니다.",
    tags: ["Git/GitHub", "Slack", "Jira", "Code Review"],
  },
];

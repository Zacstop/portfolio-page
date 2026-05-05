export type StackCategory = {
  title: string;
  items: { name: string; primary?: boolean }[];
};

export const stack: StackCategory[] = [
  {
    title: "// frontend",
    items: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "TypeScript", primary: true },
      { name: "Tailwind CSS" },
      { name: "React Hook Form" },
      { name: "Zustand" },
    ],
  },
  {
    title: "// backend",
    items: [
      { name: "Node.js", primary: true },
      { name: "Express", primary: true },
      { name: "PostgreSQL", primary: true },
      { name: "MongoDB", primary: true },
      { name: "REST API" },
      { name: "Sequelize / Prisma" },
    ],
  },
  {
    title: "// mobile",
    items: [
      { name: "Expo", primary: true },
      { name: "React Native", primary: true },
      { name: "EAS Build" },
      { name: "Push Notification" },
      { name: "App Store · Play" },
    ],
  },
  {
    title: "// tools",
    items: [
      { name: "Git / GitHub", primary: true },
      { name: "Vercel", primary: true },
      { name: "AWS (EC2, S3)" },
      { name: "Slack · Jira" },
      { name: "Figma" },
      { name: "Postman" },
    ],
  },
];

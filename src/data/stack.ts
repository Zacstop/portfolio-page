export type StackCategory = {
  title: string;
  items: { name: string; primary?: boolean }[];
};

export const stack: StackCategory[] = [
  {
    title: "// frontend",
    items: [
      { name: "React 19", primary: true },
      { name: "Next.js 14/16", primary: true },
      { name: "TypeScript", primary: true },
      { name: "Panda CSS", primary: true },
      { name: "TanStack Query v5" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "React Hook Form + Zod" },
    ],
  },
  {
    title: "// backend",
    items: [
      { name: "Node.js 20", primary: true },
      { name: "Express 4", primary: true },
      { name: "PostgreSQL", primary: true },
      { name: "Sequelize-TS", primary: true },
      { name: "Redis (ioredis)" },
      { name: "Socket.IO 4" },
      { name: "Claude SDK" },
      { name: "Toss Payments" },
    ],
  },
  {
    title: "// mobile",
    items: [
      { name: "Expo SDK 54", primary: true },
      { name: "React Native 0.81", primary: true },
      { name: "expo-router" },
      { name: "expo-notifications" },
      { name: "EAS Build" },
      { name: "Naver Map SDK" },
      { name: "expo-camera / location" },
    ],
  },
  {
    title: "// infra",
    items: [
      { name: "Docker (multi-stage)", primary: true },
      { name: "Kubernetes + Kustomize", primary: true },
      { name: "AWS EKS + ALB", primary: true },
      { name: "GitHub Actions" },
      { name: "Nginx" },
      { name: "Vercel" },
      { name: "pnpm Workspace" },
    ],
  },
];

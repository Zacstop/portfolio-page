import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jbm = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kang Joon Hyung | Frontend · Fullstack Developer",
  description:
    "2년차 풀스택 개발자. 웹부터 앱까지, 기획부터 배포까지 처음부터 끝까지 만들어내는 개발자. 병역특례 보충역 채용 가능.",
  keywords: [
    "강준형",
    "Kang Joon Hyung",
    "Frontend Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "병역특례",
    "보충역",
    "산업기능요원",
  ],
  authors: [{ name: "Kang Joon Hyung" }],
  openGraph: {
    title: "Kang Joon Hyung | Frontend · Fullstack Developer",
    description:
      "웹부터 앱까지, 기획부터 배포까지 처음부터 끝까지 만들어내는 풀스택 개발자.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kang Joon Hyung | Frontend · Fullstack Developer",
    description:
      "웹부터 앱까지, 기획부터 배포까지 처음부터 끝까지 만들어내는 풀스택 개발자.",
  },
};

// 하이드레이션 전에 실행되어 FOUC를 방지하는 테마 부트스트랩 스크립트.
// localStorage 우선, 없으면 prefers-color-scheme, 마지막 fallback은 dark.
const themeBootstrap = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${jbm.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

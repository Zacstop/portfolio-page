"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  // 초기값은 layout.tsx 인라인 스크립트가 이미 세팅한 data-theme을 그대로 읽음.
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage 사용 불가 환경 무시 */
    }
  };

  // 하이드레이션 미스매치 회피: SSR과 동일한 마크업을 그리되, 아이콘만 안전한 기본값으로
  // 첫 렌더 후 mounted=true가 되면 실제 theme 기준으로 정확한 아이콘을 표시.
  const isLight = mounted && theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isLight ? "다크 테마로 전환" : "라이트 테마로 전환"}
      title={isLight ? "다크 테마로 전환" : "라이트 테마로 전환"}
    >
      <span className="theme-toggle-icon" aria-hidden>
        {isLight ? (
          // moon (현재 light → 클릭 시 dark)
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          // sun (현재 dark → 클릭 시 light)
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </span>
    </button>
  );
}

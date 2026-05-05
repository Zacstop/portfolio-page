"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#pillars", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#more", label: "More Work" },
  { href: "#techstack", label: "Stack" },
  { href: "#career", label: "Career" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="dot" />
          JH.dev
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          Contact →
        </a>
      </div>
    </nav>
  );
}

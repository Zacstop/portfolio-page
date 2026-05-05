"use client";

import { useEffect, useState } from "react";
import { featured, type Featured } from "@/data/projects";
import FadeIn from "./FadeIn";

function ProjectCard({
  project,
  delay,
  onOpen,
}: {
  project: Featured;
  delay: 0 | 1;
  onOpen: () => void;
}) {
  return (
    <FadeIn
      delay={delay}
      className="project-card"
      as="article"
    >
      <button
        type="button"
        onClick={onOpen}
        className="project-card-button"
        aria-label={`${project.cardTitle} 상세 보기`}
      >
        <div className="project-card-visual">
          <div className={`project-visual-bg ${project.bgClass}`}>
            <div className="project-visual-overlay">
              <div className="project-visual-content">
                <div className="project-visual-tag">{project.visualTag}</div>
                <div className="project-visual-title">{project.visualTitle}</div>
                <div className="project-visual-subtitle">
                  {project.visualSubtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card-body">
          <h3 className="project-card-title">{project.cardTitle}</h3>
          <div className="project-badges">
            {project.cardBadges.map((b) => (
              <span key={b.label} className={`project-badge ${b.kind}`}>
                {b.label}
              </span>
            ))}
          </div>
          <p className="project-card-tagline">{project.cardTagline}</p>
          <div className="project-card-meta">
            <div className="project-card-stack">
              {project.cardStack.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < project.cardStack.length - 1 && (
                    <span className="sep"> · </span>
                  )}
                </span>
              ))}
            </div>
            <span className="project-card-cta">View Details →</span>
          </div>
        </div>
      </button>
    </FadeIn>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Featured;
  onClose: () => void;
}) {
  return (
    <div
      className="modal-overlay open"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-${project.id}-title`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <button
          type="button"
          className="modal-close"
          aria-label="닫기"
          onClick={onClose}
        >
          ×
        </button>
        <div className="modal-visual">
          <div className={`project-visual-bg ${project.bgClass}`}>
            <div className="project-visual-overlay">
              <div className="project-visual-content">
                <div className="project-visual-tag">{project.modalVisualTag}</div>
                <div className="project-visual-title">{project.visualTitle}</div>
                <div className="project-visual-subtitle">
                  {project.visualSubtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div>
            <div className="project-title-row">
              <h3 id={`modal-${project.id}-title`}>{project.modalTitle}</h3>
              <div className="project-badges">
                {project.cardBadges.map((b) => (
                  <span key={b.label} className={`project-badge ${b.kind}`}>
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
            <p
              className="project-tagline"
              dangerouslySetInnerHTML={{ __html: project.modalTaglineHTML }}
            />
          </div>
          <div className="did-list">
            {project.did.map((d, i) => (
              <div key={i} className="did-item">
                <div className="did-check" />
                <div className="did-text">
                  {d.accent && <span className="accent">{d.accent}</span>}
                  {d.rest}
                </div>
              </div>
            ))}
          </div>
          <div className="project-stack-inline">
            <span className="label">Stack</span>
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = featured.find((f) => f.id === openId);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <FadeIn className="projects-header">
          <div className="section-label">// selected work</div>
          <h2>Featured Projects</h2>
          <p>카드를 클릭하면 상세 내용이 열립니다</p>
        </FadeIn>
        <div className="projects-grid">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={(i % 2) as 0 | 1}
              onOpen={() => setOpenId(p.id)}
            />
          ))}
        </div>
      </div>
      {open && <ProjectModal project={open} onClose={() => setOpenId(null)} />}
    </section>
  );
}

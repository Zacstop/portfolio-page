"use client";

import { useEffect, useState } from "react";
import { featured, type Featured } from "@/data/projects";
import FadeIn from "./FadeIn";
import ProjectMockup from "./ProjectMockup";

function ShotImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      className={`project-shot ${className ?? ""}`}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.currentTarget.classList.add("project-shot-failed");
      }}
    />
  );
}

function ProjectCard({
  project,
  delay,
  onOpen,
}: {
  project: Featured;
  delay: 0 | 1;
  onOpen: () => void;
}) {
  const cover = project.images[0];

  return (
    <FadeIn delay={delay} className="project-card" as="article">
      <button
        type="button"
        onClick={onOpen}
        className="project-card-button"
        aria-label={`${project.cardTitle} 상세 보기`}
      >
        <div className="project-card-visual">
          <div className={`project-visual-bg ${project.bgClass}`} aria-hidden />
          <ProjectMockup kind={project.bgClass} />
          {cover && (
            <ShotImage src={cover.src} alt={`${project.cardTitle} 대표 화면`} />
          )}
          <div className="project-card-badge">
            <span className="dot" aria-hidden />
            {project.visualTag}
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
  const [activeIdx, setActiveIdx] = useState(0);
  const total = project.images.length;
  const active = total > 0 ? project.images[activeIdx] : null;
  const counter =
    active &&
    `${String(activeIdx + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

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
      <div className="modal modal-gallery">
        <button
          type="button"
          className="modal-close"
          aria-label="닫기"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-shots">
          <div className="modal-shot-main">
            <div
              className={`project-visual-bg ${project.bgClass}`}
              aria-hidden
            />
            <ProjectMockup kind={project.bgClass} />
            {active && (
              <ShotImage
                key={active.src}
                src={active.src}
                alt={active.caption}
              />
            )}
            {active && (
              <div className="modal-shot-meta">
                <div className="modal-shot-counter">SCREEN {counter}</div>
                <div className="modal-shot-caption">{active.caption}</div>
              </div>
            )}
          </div>
          {total >= 2 && (
            <div
              className="modal-thumbs"
              role="tablist"
              aria-label="프로젝트 화면 갤러리"
            >
              {project.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIdx}
                  aria-label={`${i + 1}번 화면: ${img.caption}`}
                  className={`modal-thumb ${i === activeIdx ? "active" : ""}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <div
                    className={`project-visual-bg ${project.bgClass}`}
                    aria-hidden
                  />
                  <ShotImage src={img.src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal-body">
          <div>
            <div className="modal-eyebrow">{project.modalVisualTag}</div>
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

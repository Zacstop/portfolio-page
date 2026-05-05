import { featured } from "@/data/projects";
import FadeIn from "./FadeIn";

export default function FeaturedProjects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <FadeIn className="projects-header">
          <div className="section-label">// selected work</div>
          <h2>Featured Projects</h2>
          <p>난이도와 최신성 기준으로 정렬한 핵심 프로젝트들</p>
        </FadeIn>

        {featured.map((project) => (
          <FadeIn key={project.id} className="project-showcase">
            <div className="project-visual">
              <div className={`project-visual-bg ${project.bgClass}`}>
                <div className="project-visual-overlay">
                  <pre className="arch-diagram left">{project.archLeft}</pre>
                  <div className="project-visual-content">
                    <div className="project-visual-tag">{project.visualTag}</div>
                    <div className="project-visual-title">
                      {project.visualTitle}
                    </div>
                    <div className="project-visual-subtitle">
                      {project.visualSubtitle}
                    </div>
                  </div>
                  <pre className="arch-diagram right">{project.archRight}</pre>
                </div>
              </div>
            </div>
            <div className="project-meta">
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="tag-row">{project.tagRow}</div>
                <p>{project.description}</p>
                <ul className="feature-list">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: feature }}
                    />
                  ))}
                </ul>
                <div className="project-stack">
                  {project.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="project-results">
                {project.results.map((r, i) => (
                  <div key={i} className="project-result">
                    <div
                      className="project-result-value"
                      style={{ color: r.color }}
                    >
                      {r.value}
                    </div>
                    <div className="project-result-label">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

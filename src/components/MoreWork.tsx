import { more } from "@/data/projects";
import FadeIn from "./FadeIn";

export default function MoreWork() {
  return (
    <section className="more" id="more">
      <div className="more-inner">
        <FadeIn className="more-header">
          <div className="section-label">// other work</div>
          <h2>Past Experience</h2>
        </FadeIn>
        <FadeIn>
          <p className="more-sub">
            초기 경력 — 스타트업, 외주, 사내 개발 환경에서 다양한 도메인 경험.
          </p>
        </FadeIn>
        <div className="more-grid">
          {more.map((m, i) => (
            <FadeIn
              key={m.title}
              delay={(i % 3) as 0 | 1 | 2}
              className="more-card"
            >
              <div className="more-card-header">
                <span className="more-year">{m.year}</span>
                <span className="more-role">{m.role}</span>
              </div>
              <h3>{m.title}</h3>
              {m.featuredLine && (
                <div className="featured-line">{m.featuredLine}</div>
              )}
              <p>{m.description}</p>
              <div className="more-features">
                {m.features.map((f) => (
                  <span key={f} className="more-feature">
                    {f}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

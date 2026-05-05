import { highlights } from "@/data/highlights";
import FadeIn from "./FadeIn";

export default function Highlights() {
  return (
    <section className="highlights" id="highlights">
      <div className="highlights-inner">
        <FadeIn className="highlights-header">
          <div className="section-label">// architecture highlights</div>
          <h2>
            만든 게 아니라 <span className="grad">설계한 시스템</span>
          </h2>
        </FadeIn>
        <div className="highlights-grid">
          {highlights.map((h, i) => (
            <FadeIn
              key={h.num}
              delay={(i % 2) as 0 | 1}
              className="highlight-card"
            >
              <div className="highlight-num">{h.num}</div>
              <h3>{h.title}</h3>
              <p>{h.description}</p>
              <div className="highlight-tags">
                {h.tags.map((tag) => (
                  <span key={tag} className="highlight-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="source">{h.source}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

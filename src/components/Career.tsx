import { career } from "@/data/career";
import FadeIn from "./FadeIn";

export default function Career() {
  return (
    <section className="career" id="career">
      <div className="career-inner">
        <FadeIn className="career-header">
          <div className="section-label">// experience</div>
          <h2>Career</h2>
        </FadeIn>
        <FadeIn>
          <div className="timeline">
            {career.map((item, i) => (
              <div key={i} className="timeline-item">
                <div
                  className={`timeline-dot${item.active ? " active" : ""}`}
                />
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-role">
                  {item.role}
                  {item.tag && <span className="timeline-tag">{item.tag}</span>}
                </div>
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

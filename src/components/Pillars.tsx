import { pillars } from "@/data/pillars";
import FadeIn from "./FadeIn";

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="pillars-inner">
        <FadeIn className="pillars-header">
          <div className="section-label">// what i do</div>
          <h2>
            End-to-End,
            <br />
            From <span className="grad">Idea</span> to{" "}
            <span className="grad">Production</span>
          </h2>
        </FadeIn>
        <div className="pillars-list">
          {pillars.map((pillar, i) => (
            <FadeIn
              key={pillar.num}
              delay={(i % 3) as 0 | 1 | 2}
              className="pillar-row"
            >
              <div className="pillar-label">
                <span className="pillar-num">{pillar.num}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
              </div>
              <div className="pillar-prose">
                <p className="pillar-lead">{pillar.lead}</p>
                <p className="pillar-body">{pillar.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

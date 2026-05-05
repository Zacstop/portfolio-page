import { pillars } from "@/data/pillars";
import FadeIn from "./FadeIn";

function PillarIcon({ kind }: { kind: "endto" | "cross" | "team" }) {
  if (kind === "endto") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  if (kind === "cross") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
    >
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="17" cy="7" r="3" />
      <path d="M21 21v-2a3 3 0 0 0-2.5-2.95" />
    </svg>
  );
}

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
        <div className="pillars-grid">
          {pillars.map((pillar, i) => (
            <FadeIn
              key={pillar.num}
              delay={i as 0 | 1 | 2}
              className="pillar-card"
            >
              <div className="num">{pillar.num}</div>
              <div className={`pillar-icon ${pillar.iconClass}`}>
                <PillarIcon kind={pillar.iconClass} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className="pillar-tags">
                {pillar.tags.map((tag) => (
                  <span key={tag} className="pillar-tag">
                    {tag}
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

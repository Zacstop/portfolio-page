import { stack } from "@/data/stack";
import FadeIn from "./FadeIn";

export default function TechStack() {
  return (
    <section className="techstack" id="techstack">
      <div className="techstack-inner">
        <FadeIn className="techstack-header">
          <div className="section-label">// technology</div>
          <h2>Tech Stack</h2>
        </FadeIn>
        <div className="tech-categories">
          {stack.map((cat, i) => (
            <FadeIn
              key={cat.title}
              delay={(i % 4) as 0 | 1 | 2 | 3}
              className="tech-category"
            >
              <h4>{cat.title}</h4>
              <ul className="tech-list">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className={`tech-item${item.primary ? " primary" : ""}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
